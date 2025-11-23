import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPaisesComponent } from './lista-paises/lista-paises.component';
import { MapaComponent } from './mapa/mapa.component';
import { ViolacionesDdhhComponent } from './violaciones-ddhh/violaciones-ddhh.component';
import { VideoComponent } from './video/video.component';




@NgModule({
  declarations: [
    ListaPaisesComponent,
    MapaComponent,
    ViolacionesDdhhComponent,
    VideoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListaPaisesComponent,
    MapaComponent,
    ViolacionesDdhhComponent,
    VideoComponent
  ],
})
export class ComponentsModule { }
