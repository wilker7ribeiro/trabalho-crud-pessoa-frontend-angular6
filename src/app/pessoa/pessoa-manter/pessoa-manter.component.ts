import { Component } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoa';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pessoa-manter',
  templateUrl: './pessoa-manter.component.html',
  styleUrls: ['./pessoa-manter.component.scss']
})
export class PessoaManterComponent {
  idPessoa: string;
  pessoa: Pessoa;
  formPessoa: FormGroup;

  constructor(
    private pessoaService: PessoaService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.formPessoa = this.formBuilder.group({
      nome: [''],
      sobrenome: [''],
      dataNascimento: ['']
    });

    this.route.params.subscribe(params => {
      this.idPessoa = params['id'];
      if (this.idPessoa) {
        this.pessoaService.getById(this.idPessoa).subscribe(pessoa => {
          this.formPessoa.patchValue(pessoa);
        })
      }
    });
  }



  salvar() {
    if (!this.formPessoa.valid) return;
    const formValue = this.formPessoa.getRawValue();
    const payload = {
      _id: this.idPessoa,
      nome: formValue.nome,
      sobrenome: formValue.sobrenome,
      dataNascimento: formValue.dataNascimento
    }
    let request;
    let redirectUrl;
    if (this.idPessoa) {
      request = this.pessoaService.update(payload);
      redirectUrl = '../../consultar-pessoa';
    } else {
      request = this.pessoaService.create(payload);
      redirectUrl = '../consultar-pessoa';
    }
    request.subscribe(response => {
      this.router.navigate([redirectUrl], { relativeTo: this.route });
    });
  }

}
