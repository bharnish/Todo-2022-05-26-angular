import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoDTO } from '../api/models';
import { TasksService } from '../api/services';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  constructor(private svc:TasksService, private routed:ActivatedRoute) { }

  dbkey = '';
  itemid = '';
  model : TodoDTO = {};
  isUpdating = false;
  isDeleting = false;
  ndays = '';
  isLoading = false;
  isPostponing = false;
  isThreshold = false;
  isDeleted = false;
  isError = false;
  groupby = '';

  ngOnInit(): void {
    this.routed.paramMap.subscribe(x => {
      this.dbkey = x.get('dbkey')??'';
      this.itemid = x.get('itemid')??'';

      this.routed.queryParamMap.subscribe(qp => {
        this.groupby = qp.get('groupBy') ??'';
      })

      this.load();
    })
  }

  load() {
    this.isLoading = true;
    this.isError = false;
    this.svc.getApiTasksId({DbKey: this.dbkey, id: this.itemid}).subscribe(x => {
      this.model = x;
      this.isLoading = false;
    }, err => {
      this.isError = true;
    });
  }

  update() { 
    this.isUpdating = true;
    this.svc.putApiTasksId({DbKey: this.dbkey, id: this.itemid, body: { value: this.model.raw }}).subscribe(x => {
      this.isUpdating = false;
      this.load();
    });
  }

  delete() { 
    this.isDeleting = true;
    this.isDeleted = false;
    this.svc.deleteApiTasksId({DbKey: this.dbkey, id: this.itemid}).subscribe(x => {
      this.isDeleting = false;
      this.isDeleted = true;
    });
  }

  postpone() { 
    this.isPostponing = true
    let ndays = parseInt(this.ndays);
    this.svc.postApiTasksIdPostpone({DbKey: this.dbkey, id: this.itemid, ndays: ndays}).subscribe(x => {
      this.load();
      this.isPostponing = false;
    })
  }
  threshold() { 
    this.isThreshold = true;
    let ndays = parseInt(this.ndays);
    this.svc.postApiTasksIdPostponeThreshold({DbKey: this.dbkey, id: this.itemid, ndays: ndays}).subscribe(x => {
      this.load();
      this.isThreshold = false;
    })
  }

  complete() {
    this.svc.putApiTasksIdCompleted({DbKey: this.dbkey, id: this.model.id??'', isCompleted: this.model.isCompleted}).subscribe(x => {
      this.load();
    },
    e => {
      this.isError = true;
    });
  }
}
