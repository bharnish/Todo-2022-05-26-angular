import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoGroupComponent } from './todo-group/todo-group.component';
import { TodoTextComponent } from './todo-text/todo-text.component';
import { TodosListComponent } from './todos-list/todos-list.component';

const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:'full'},
  {path:'about', component:AboutComponent},
  {path:':dbkey/items', component:TodosListComponent},
  {path:':dbkey/items/groupby/:groupby', component:TodoGroupComponent},
  {path:':dbkey/items/text', component:TodoTextComponent},
  {path:':dbkey/items/:itemid', component:TodoEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
