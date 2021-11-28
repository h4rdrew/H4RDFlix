import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  opened: boolean = false;

  @HostBinding('class') className = '';
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  toggleControl = new FormControl(false);

  constructor(private overlay: OverlayContainer, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });

    this.showCaseComponente();
  }

  showCaseComponente() {
    this.router.navigate(['showcase'], { relativeTo: this.route });
  }
}
