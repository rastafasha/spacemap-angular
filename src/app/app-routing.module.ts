import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViolacionesDdhhComponent } from './components/violaciones-ddhh/violaciones-ddhh.component';
import { HomeComponent } from './pages/home/home.component';
import { PrensaDetailComponent } from './pages/prensa/prensa-detail/prensa-detail.component';
import { PrensaIndexComponent } from './pages/prensa/prensa-index/prensa-index.component';

const routes: Routes = [

  {path:'home', component:HomeComponent},
    {path:'violaciones-ddhh', component:ViolacionesDdhhComponent},
    {path:'prensa', component:PrensaIndexComponent},
    {path:'prensa/:id', component:PrensaDetailComponent},
    { path: 'home', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component:  HomeComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
