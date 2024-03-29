import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { StoryDto } from 'src/app/dtos/story-dto/story-dto';
import { TaskDto } from 'src/app/dtos/task-dto/task-dto';
import { AxiosEndpoint } from 'src/app/utils/query-services';
import { TaskDialogComponent } from '../task-dialog/task-dialog';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss']
})
export class StoryListComponent {
  @Input() Entity!: StoryDto

  todo : Array<TaskDto> = [];
  inProgress : Array<TaskDto> = [];
  done : Array<TaskDto> = [];

  projectId!: number;

  queryCommandTask!: Promise<any>;
  updateCommand!: Promise<any>;
  deleteCommand!: Promise<any>;
  deleteStoryCommand!: Promise<any>;

  constructor(
    private readonly dialog: MatDialog
    , private route: ActivatedRoute
    ){
   
  }

  async ngOnInit() {
    this.getTasks();
  }

  async getTasks(){
    this.queryCommandTask = AxiosEndpoint.task.getTaskByStoryId(this.Entity.id)
    try {
      const result = await this.queryCommandTask;
      this.todo = result.filter((task: TaskDto) => task.status === 'todo');
      this.inProgress = result.filter((task: TaskDto) => task.status === 'inprogress');
      this.done = result.filter((task: TaskDto) => task.status === 'done');
    } catch (error) {
      console.error('Erro ao obter tarefas:', error);
    }
  }

  drop(event: CdkDragDrop<TaskDto[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      let task = event.container.data[event.currentIndex];
      task.status = event.container.id;
      if (event.container.id === 'done') {
        const currentDate = new Date();
        currentDate.setHours(currentDate.getHours() - 3);
        task.endDate = currentDate;
      }
      this.updateCommand =  AxiosEndpoint.task.update(task)
      console.log("Objeto movido:", event.container.data[event.currentIndex]);
      console.log("Lista de destino:", event.container.id);
    }
  }

  openDialogTask(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      data: {
        storyID: this.Entity.id,
        task: null
      }
    });

    dialogRef.afterClosed().subscribe(async result => {
      this.queryCommandTask = AxiosEndpoint.task.getTaskByStoryId(this.Entity.id)
      try {
        const result = await this.queryCommandTask;
        this.todo = result.filter((task: TaskDto) => task.status === 'todo');
        this.inProgress = result.filter((task: TaskDto) => task.status === 'inprogress');
        this.done = result.filter((task: TaskDto) => task.status === 'done');
      } catch (error) {
        console.error('Erro ao obter tarefas:', error);
      }
    });
  }

  openEditTask(task: TaskDto): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
        data: {
          storyID: this.Entity.id,
          task: task
        }
      });

    dialogRef.afterClosed().subscribe(result => {
      // this.queryCommandTask = AxiosEndpoint.task.getTaskByStoryId(this.Entity.id);
      window.location.reload();
    });
  }

  async delete(id : number) {
    this.deleteCommand = await AxiosEndpoint.task.delete(id);
    window.location.reload();
  }

  async deleteStory(e:Event) {
    e.stopPropagation()
    this.deleteStoryCommand = await AxiosEndpoint.story.delete(this.Entity.id);
    window.location.reload();
  }

  onOptionSelected(option: number) {
    
  }
}