import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'H4RDFlix-UI';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigateByUrl('home');
  }
}
