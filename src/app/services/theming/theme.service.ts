import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ThemeOptions } from 'src/app/interfaces/theme-options';
import { StyleManagerService } from 'src/app/services/theming/style-manager.service';

@Injectable()
export class ThemeService {
  constructor(
    private http: HttpClient,
    private styleManager: StyleManagerService
  ) {}

  getThemeOptions(): Observable<Array<ThemeOptions>> {
    return this.http.get<Array<ThemeOptions>>('assets/theme-options.json');
  }

  setTheme(themeToSet: string) {
    this.styleManager.setStyle('theme', 'assets/themes/' + themeToSet);
  }
}
