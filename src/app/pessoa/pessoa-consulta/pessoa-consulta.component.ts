import { Component } from '@angular/core';
import { PessoaService } from '../pessoa.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-consulta',
  templateUrl: './pessoa-consulta.component.html',
  styleUrls: ['./pessoa-consulta.component.scss']
})
export class PessoaConsultaComponent {
  displayedColumns= ['nome' ,'sobrenome', 'dataNascimento', 'acoes']
  dataSource = []
  
  constructor(
    private pessoaService: PessoaService,
    private router: Router,
    private route: ActivatedRoute
    ){
      
  }
  ngOnInit(){
      this.pessoaService.getAll().subscribe(data => this.dataSource = data);
  }
  

  editarPessoa(pessoa){
    this.router.navigate(['../alterar-pessoa', { id: pessoa.id }], { relativeTo: this.route });
  }
  
  removerPessoa(pessoa, index){
    this.pessoaService.delete(pessoa.id).subscribe(response => {
      this.dataSource.splice(index, 1)
    })
  }
}
