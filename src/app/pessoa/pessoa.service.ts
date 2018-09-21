import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Pessoa } from './pessoa';

@Injectable()
export class PessoaService {

  private baseUrl = 'https://crud-pessoa-backend.herokuapp.com/';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  /** GET heroes from the server */
  getAll(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.baseUrl + "/pessoas")
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }

  /** GET heroes from the server */
  getById(idPessoa: string): Observable<Pessoa> {
    return this.http.get<Pessoa>(this.baseUrl + "/pessoa/" + idPessoa)
      .pipe(
        catchError(this.handleError('getById', new Pessoa()))
      );
  }

  create(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.baseUrl + "/pessoa", pessoa)
      .pipe(
        catchError(this.handleError('save', new Pessoa()))
      );
  }

  update(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(this.baseUrl + "/pessoa", pessoa)
      .pipe(
        catchError(this.handleError('save', new Pessoa()))
      );
  }

  delete(idPessoa: string): Observable<Pessoa> {
    return this.http.delete<Pessoa>(this.baseUrl + "/pessoa/" + idPessoa)
      .pipe(
        catchError(this.handleError('save', new Pessoa()))
      );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
