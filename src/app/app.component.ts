import { Component } from '@angular/core';
import {DashBoardComponent} from './dash-board/dash-board.component'
import {AboutComponent} from './about/about.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskManager';
}
