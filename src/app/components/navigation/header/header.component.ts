import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { MultilevelNodes } from 'ng-material-multilevel-menu';
import { Observable } from 'rxjs';
import { ThemeOptions } from 'src/app/interfaces/theme-options';
// import { AuthService } from 'src/app/services/authentication/auth.service';
import { ThemeService } from 'src/app/services/theming/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() menu: MultilevelNodes[] | undefined;
  @Output() public sidenavToggle = new EventEmitter();
  //   options$: Observable<Array<ThemeOptions>> =
  //     this.themeService.getThemeOptions();

  isDarkTheme: boolean = false;

  constructor(
    private readonly themeService: ThemeService // public authService: AuthService
  ) {}

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onThemeChange() {
    if (this.isDarkTheme) {
      this.themeService.setTheme('dark-theme.css');
    } else {
      this.themeService.setTheme('custom-theme.scss');
    }
  }

  // logOut() {
  // 	this.authService.logout()
  // }
}

@Component({
  selector: 'app-header-menu-item',
  templateUrl: './header-menu-item.component.html',
})
export class HeaderMenuItemComponent {
  @Input() items: MultilevelNodes[] | undefined;
  @ViewChild('subMenu', { static: true }) public subMenu: any;

  constructor(public router: Router) {}
}
