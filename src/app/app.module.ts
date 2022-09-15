import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { ApiModule } from './api/api.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoGroupComponent } from './todo-group/todo-group.component';
import { TodoTextComponent } from './todo-text/todo-text.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosListComponent,
    TodoEditComponent,
    TodoGroupComponent,
    TodoTextComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ApiModule.forRoot({rootUrl: environment.rootUrl}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
