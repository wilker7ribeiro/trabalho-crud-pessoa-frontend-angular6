import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoa-consulta',
  templateUrl: './pessoa-consulta.component.html',
  styleUrls: ['./pessoa-consulta.component.scss']
})
export class PessoaConsultaComponent implements OnInit {

  displayedColumns = ['nome', 'sobrenome', 'dataNascimento', 'acoes'];
  dataSource = [];

  constructor(
    private pessoaService: PessoaService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.pessoaService.getAll().subscribe(data => this.dataSource = data);
  }


  editarPessoa(pessoa: Pessoa) {
    this.router.navigate(['../alterar-pessoa/' + pessoa._id], {relativeTo: this.route});
  }

  removerPessoa(pessoa: Pessoa, index) {
    this.pessoaService.delete(pessoa._id).subscribe(response => {
      this.dataSource.splice(index, 1);
      this.dataSource = this.dataSource.slice();
    });
  }
}
