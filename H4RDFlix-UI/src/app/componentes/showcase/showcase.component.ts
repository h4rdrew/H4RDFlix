import { Component, OnInit } from '@angular/core';
// import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
})
export class ShowcaseComponent implements OnInit {
  imgShowCase = [101, 102, 103, 104, 105, 106, 107, 108, 109].map(
    (n) => `assets/imagem/mainShowCase/${n}.jpg`
  );

  imgSelected = [101, 102, 103, 104, 105, 106, 107, 108, 109].map(
    (n) => `assets/imagem/selected/${n}.jpg`
  );

  constructor() {}

  ngOnInit(): void {}

  teste(img: string) {
    console.log(img);
  }
}
