import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoDTO } from '../api/models';
import { TasksService } from '../api/services';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  constructor(private svc: TasksService, private routed: ActivatedRoute) { }

  dbkey = '';
  todos : TodoDTO[] = [];
  quickAdd = '';
  filters = '';
  oldFilter = '';
  showFuture = false;
  showCompleted = false;
  isLoading = false;
  isError = false;
  isAdding = false;
  completedCount = 0;
  showFilter = false;
  loadingProgress = 0;

  ngOnInit(): void {
    this.routed.paramMap.subscribe(x => {
      this.dbkey = x.get('dbkey')??'';

      this.load();
    })
  }

  load() { 
    this.isLoading = true;
    this.loadingProgress = 0;
    var interval = setInterval(() => {
      this.loadingProgress += 0.1;
    }, 100);
    this.svc.getApiTasks({DbKey: this.dbkey, Filters: this.filters, Completed: this.showCompleted, Future: this.showFuture}).subscribe(x => {
      this.todos = x.todos ?? [];
      this.completedCount = x.completedCount ?? 0;
      this.isLoading = false;
      clearInterval(interval);
    },
    e => {
      this.isError = true;
    });
  }

  complete(todo:TodoDTO) {
    this.svc.putApiTasksIdCompleted({DbKey: this.dbkey, id: todo.id??'', isCompleted: todo.isCompleted}).subscribe(x => {
      if (todo.isCompleted) {
        this.completedCount++;
      }
      else {
        this.completedCount--;
      }
    },
    e => {
      this.isError = true;
    });
  }

  add(values:string) {
    this.isAdding = true;
    this.svc.postApiTasks({DbKey: this.dbkey, body: { value: values }}).subscribe(x => {
      this.isAdding = false;
      this.quickAdd = '';
      this.load();
    },
    e => this.isError = true);
  }

  apply(filters:string) { 
    this.oldFilter = filters;
    this.quickAdd = filters;
    this.load();
  }

  showFilters(show:boolean) {
    this.showFilter = show;
  }

  quickFilter(filters:string) { 
    if (this.filters == filters) {
      // clear
      this.clearFilters();
      this.showFilter = false;
      return;
    }

    this.filters = filters;
    this.oldFilter = filters;
    this.quickAdd = filters;
    this.showFilter = true;
    this.load();
  }

  clearAdd() {
    this.quickAdd = '';
  }

  clearFilters() {
    this.filters = '';
    this.oldFilter = '';
    this.clearAdd();
    this.load();
  }

}
