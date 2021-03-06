import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { KanbanCategoryComponent } from './kanban-category/kanban-category.component';
import { KanbanDetailComponent } from './kanban-detail/kanban-detail.component';
import { KanbanNewTaskComponent } from './kanban-new-task/kanban-new-task.component';



@NgModule({
  declarations: [
    KanbanBoardComponent, 
    KanbanCategoryComponent, 
    KanbanDetailComponent,
    KanbanNewTaskComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    KanbanBoardComponent, 
    KanbanCategoryComponent, 
    KanbanDetailComponent,
    KanbanNewTaskComponent,
  ]
})
export class KanbanModule { }
