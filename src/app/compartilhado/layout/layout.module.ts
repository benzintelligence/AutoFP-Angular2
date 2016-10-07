import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabecalhoComponent  } from './cabecalho/cabecalho.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodapé/rodape.component';
import { WpfLoaderTwoComponent } from './wpf-loader-two/wpf-loader-two.component';
import { Page404Component } from './page404/page404.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CabecalhoComponent,
    MenuComponent,
    RodapeComponent,
    WpfLoaderTwoComponent,
    Page404Component
  ],
  exports: [
    CabecalhoComponent,
    MenuComponent,
    RodapeComponent,
    WpfLoaderTwoComponent,
    Page404Component
  ]
})

export class LayoutModule { }
