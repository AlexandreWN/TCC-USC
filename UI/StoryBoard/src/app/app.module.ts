import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { PresentationPageComponent } from './presentation-page/presentation-page.component';
import { MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginDialogComponent } from './presentation-page/components/login-dialog/login-dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterDialogComponent } from './presentation-page/components/register-dialog/register-dialog';
import { MatTableModule } from '@angular/material/table';
import { MatCommonModule } from '@angular/material/core';
import { MatInputModule} from '@angular/material/input';
import { ProjectWorkPageComponent } from './project-work-page/project-work-page.component';
import { MatSelectModule} from '@angular/material/select';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule} from '@angular/material/icon';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { AddProjectDialogComponent } from './initial-page/components/add-project-dialog/add-project-dialog';
import { StoryListComponent } from './project-work-page/components/story-list/story-list.component';
import { SprintDialogComponent } from './project-work-page/components/sprint-dialog/sprint-dialog';
import { StoryDialogComponent } from './project-work-page/components/story-dialog/story-dialog';
import { TaskDialogComponent } from './project-work-page/components/task-dialog/task-dialog';
import { ColaboradorDialogComponent } from './project-work-page/components/colaborador-dialog/colaborador-dialog';
import {MatMenuModule} from '@angular/material/menu';
import { SprintStatusDashComponent } from './project-work-page/components/sprint-status-dash/sprint-status-dash';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    InitialPageComponent,
    PresentationPageComponent,
    LoginDialogComponent,
    RegisterDialogComponent,
    AddProjectDialogComponent,
    ProjectWorkPageComponent,
    StoryListComponent,
    SprintDialogComponent, 
    StoryDialogComponent,
    TaskDialogComponent,
    ColaboradorDialogComponent,
    SprintStatusDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatExpansionModule,
    MatIconModule,
    DragDropModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  exports: [
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatExpansionModule,
    MatIconModule,
    DragDropModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
