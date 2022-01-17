import { VideoComponent } from './componentes/video/video.component';
import { ShowcaseComponent } from './componentes/showcase/showcase.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'showcase',
    component: ShowcaseComponent,
  },
  {
    path: 'video',
    component: VideoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
