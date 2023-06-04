import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { StoryDto } from 'src/app/dtos/story-dto/story-dto';
import { AxiosEndpoint } from 'src/app/utils/query-services';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss']
})
export class StoryListComponent {
  @Input() Entity!: StoryDto

  todo : Array<string> = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  inProgess : Array<string> = [];
  done : Array<string> = [];

  projectId!: number;

  queryCommandProject!: Promise<any>;

  constructor(
    private readonly dialog: MatDialog
    , private route: ActivatedRoute
    ){
      this.route.queryParams.subscribe(params => {
        this.projectId = params['id'];
        this.queryCommandProject = AxiosEndpoint.project.getById(this.projectId)
      });
  }

  ngOnInit() {
    console.log(this.Entity)
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  onOptionSelected(option: number) {
    
  }
}