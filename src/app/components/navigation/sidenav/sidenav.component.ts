import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  Configuration,
  ExpandCollapseStatusEnum,
  ExpandedLTR,
  ExpandedRTL,
  MultilevelMenuService,
  MultilevelNodes,
} from 'ng-material-multilevel-menu';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [ExpandedRTL, ExpandedLTR],
})
export class SidenavComponent implements OnInit {
  @Input() menu: MultilevelNodes[];
  @Input() onCloseSidenav: Observable<void>;
  @Output() public sidenavClose = new EventEmitter();

  config: Configuration = {
    useDividers: true,
    rtlLayout: false,
    highlightOnSelect: true,
    collapseOnSelect: true,
    customTemplate: true,
    classname: 'mat-drawer-container',
  };

  constructor(
    private multilevelMenuService: MultilevelMenuService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.onCloseSidenav.subscribe(() => {
      this.setExpandCollapseStatus(ExpandCollapseStatusEnum.collapse);
    });
  }

  onSidenavClose() {
    this.sidenavClose.emit();
  }

  selectedItem(link: string) {
    this.router.navigate([link]);
    this.onSidenavClose();
  }

  setExpandCollapseStatus(type: ExpandCollapseStatusEnum) {
    this.multilevelMenuService.setMenuExapandCollpaseStatus(type);
  }
}
