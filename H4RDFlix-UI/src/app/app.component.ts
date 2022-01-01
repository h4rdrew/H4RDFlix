import { ActivatedRoute, Router } from '@angular/router';
import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'H4RDFlix-UI';
  opened: boolean = false;
  imgLogo = '../assets/imagem/H4rdFlixLogo.svg';

  @HostBinding('class') className = '';
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  toggleControl = new FormControl(false);

  constructor(
    private overlay: OverlayContainer,
    private router: Router,
    private route: ActivatedRoute
  ) {}

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
