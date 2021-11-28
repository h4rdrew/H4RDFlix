import { ShowcaseComponent } from './componentes/showcase/showcase.component';
import { MainMenuComponent } from './componentes/main-menu/main-menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: MainMenuComponent,
    children: [
      {
        path: 'showcase',
        component: ShowcaseComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
