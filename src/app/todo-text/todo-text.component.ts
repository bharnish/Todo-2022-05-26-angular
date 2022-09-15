import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../api/services';

@Component({
  selector: 'app-todo-text',
  templateUrl: './todo-text.component.html',
  styleUrls: ['./todo-text.component.css']
})
export class TodoTextComponent implements OnInit {

  constructor(private svc: TasksService, private routed: ActivatedRoute) { }

  dbkey = '';
  model = '';
  isReplacing = false;
  isLoading = false;

  ngOnInit(): void {
    this.routed.paramMap.subscribe(x => {
      this.dbkey = x.get('dbkey')??'';
      this.load();
    })
  }

  load() { 
    this.isLoading = true;
    this.svc.getApiTasksText({DbKey:this.dbkey, Future: true, Completed: true}).subscribe(x => {
      this.model = x;
      this.isLoading = false;
    })
  }

   replace() { 
    this.isReplacing = true;
    this.svc.postApiTasks({DbKey:this.dbkey, replace: true, body: { value:this.model }}).subscribe(x => {
      this.isReplacing = false;
      this.load();
    });
  }

  removeCompleted() { 
    this.svc.deleteApiTasksCompleted(this.dbkey).subscribe(x => this.load());
  }
}
