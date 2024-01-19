//import { DashComponent } from './components/dash/dash.component';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PoFieldModule, PoGaugeModule, PoModalModule, PoModule, PoNotificationModule, PoPageDefaultComponent, PoPageModule, PoTableModule } from '@po-ui/ng-components';
import { PoPageDynamicSearchModule, PoPageDynamicTableModule, PoTemplatesModule } from '@po-ui/ng-templates';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core';
import { ProductsComponent } from './components/products/products.component';
import { ROUTES } from './app.route';
import { DashComponent } from './components/dash/dash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { analiticoComponent } from './components/analitico/analitico.component';
import { consolidadoComponent } from './components/consolidado/consolidado.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    analiticoComponent,
    consolidadoComponent,
    DashComponent,
    //DashComponent
  ],
  imports: [
    BrowserModule,
    PoModule,
    PoTemplatesModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PoPageModule,
    PoFieldModule,
    PoTableModule,
    PoPageDynamicSearchModule,
    PoPageDynamicTableModule,
    PoModalModule,
    PoNotificationModule,
    PoGaugeModule,
    RouterModule.forRoot(ROUTES, {
      useHash: true,
      relativeLinkResolution: 'legacy'
    }),
    // ProtheusLibCoreModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
