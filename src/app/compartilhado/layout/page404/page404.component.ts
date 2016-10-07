import { Component } from '@angular/core';

@Component({
  templateUrl: 'page404.component.html'
})

export class Page404Component {

  private codigo: number;
  private erro: string;
  private mensagem: string;
  private botaoMensagem: string;

  constructor() {
    this.codigo = 404;
    this.erro = "Desculpe! Página não encontrada";
    this.mensagem = "";
    this.botaoMensagem = "Página inicial";
  }
}
