import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared.module';
import { PessoaConsultaComponent } from './pessoa-consulta/pessoa-consulta.component'
import { PessoaManterComponent } from './pessoa-manter/pessoa-manter.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PessoaService } from './pessoa.service'

const appRoutes: Routes = [
  { path: 'consultar-pessoa', component: PessoaConsultaComponent },
  { path: 'cadastrar-pessoa', component: PessoaManterComponent },
  { path: 'alterar-pessoa/:id', component: PessoaManterComponent }
];

@NgModule({
  declarations: [
    PessoaConsultaComponent,
    PessoaManterComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormsModule
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    
  ],
  providers: [
    PessoaService
  ]
})
export class PessoaModule { }