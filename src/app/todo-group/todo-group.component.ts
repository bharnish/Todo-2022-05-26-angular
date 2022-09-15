import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupingDTO, TodoDTO } from '../api/models';
import { TasksService } from '../api/services';

@Component({
  selector: 'app-todo-group',
  templateUrl: './todo-group.component.html',
  styleUrls: ['./todo-group.component.css']
})
export class TodoGroupComponent implements OnInit {

  constructor(private svc: TasksService, private routed: ActivatedRoute) { }

  dbkey = '';
  groupby = '';
  model : GroupingDTO[] = [];
  showFuture = false;
  showCompleted = false;
  filters = '';
  oldFilter = '';
  isLoading = false;
  quickAdd = '';
  isAdding = false;
  isError = false;
  completedCount = 0;
  showFilter = false;

  ngOnInit(): void {
    this.routed.paramMap.subscribe(x => {
      this.dbkey = x.get('dbkey')??'';
      this.groupby = x.get('groupby')??'';

      this.load();
    })
  }

  load() { 
    this.isLoading = true;
    this.svc.getApiTasksGroupByGroupBy({DbKey: this.dbkey, Filters: this.filters, Future: this.showFuture, Completed: this.showCompleted, groupBy: this.groupby}).subscribe(x => {
      this.model = x.groupings ?? [];
      this.completedCount = x.completedCount ?? 0;
      this.isLoading = false;
    })
  }

  complete(todo:TodoDTO) {
    this.svc.putApiTasksIdCompleted({DbKey: this.dbkey, id: todo.id??'', isCompleted: todo.isCompleted}).subscribe(x => {
      if (todo.isCompleted) {
          this.completedCount++;
      }
      else {
        this.completedCount--;
      }
    });
  }

  applyFilter(filter:string)  {
    this.oldFilter = this.filters;
    this.load();
  }

  quickFilter(filters:string) { 
    this.filters = filters;
    this.oldFilter = filters;
    this.quickAdd = filters;
    this.showFilter = true;
    this.load();
  }

  showFilters(show:boolean) {
    this.showFilter = show;
  }

  clearFilter() { 
    this.filters = '';
    this.oldFilter = '';
    this.load();
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

  clearAdd() {
    this.quickAdd = '';
  }
}
