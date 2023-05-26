import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MoreinfoComponent } from './moreinfo/moreinfo.component';
import { MYCVComponent } from './mycv/mycv.component';

const routes: Routes = [
{path:'home',component:MainComponent},
{path:'more', component:MoreinfoComponent},
{path: 'cv', component:MYCVComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
