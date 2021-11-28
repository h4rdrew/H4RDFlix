import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
})
export class ShowcaseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  slides = [
    {
      image:
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/825BE4A837FD462FF7CD6981B5ECFA0F020B10A9A6476F123A5286D544D0C160/scale?width=1200&aspectRatio=1.78&format=jpeg',
    },
    {
      image:
        'https://uploads.emaisgoias.com.br/2021/11/cd064a3b-harry-potter-e-a-pedra-filosofal_.jpg',
    },
    {
      image:
        'https://therichpost.com/wp-content/uploads/2020/10/Angular-10-Learning-Education-Center-Free-Template-1.png',
    },
    {
      image:
        'https://therichpost.com/wp-content/uploads/2020/11/Reactjs-Easy-Shop-Free-Template-with-Source-Code.png',
    },
    {
      image:
        'https://therichpost.com/wp-content/uploads/2021/02/angular-11-bootstrap-4.5-Ecommerce-Template-Free.png',
    },
  ];
}
