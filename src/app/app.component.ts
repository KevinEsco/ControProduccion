import { Component } from '@angular/core';
import { MultilevelNodes } from 'ng-material-multilevel-menu';
import * as menu from 'src/assets/menu';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ControlProduccion';
  menu: MultilevelNodes[] = menu.default.property;
}
