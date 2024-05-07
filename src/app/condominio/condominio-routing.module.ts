import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocheraPageComponent } from './pages/cochera-page/cochera-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'list-cochera', component: CocheraPageComponent },
      // { path: 'edit-cochera', component: CocheraEdicionComponent },
      { path: '**', redirectTo: 'list-cochera'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CondominioRoutingModule { }
