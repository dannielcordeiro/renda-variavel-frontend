import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotaCorretagemComponent } from 'src/app/nota-corretagem/nota-corretagem.component'

const routes: Routes = [
  {path: 'notas', component: NotaCorretagemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
