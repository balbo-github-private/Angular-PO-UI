import { DashComponent } from './components/dash/dash.component';
import { ProductsComponent } from './components/products/products.component';
import { consolidadoComponent } from './components/consolidado/consolidado.component';
import { analiticoComponent } from './components/analitico/analitico.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'razao',
    component: ProductsComponent
  },
  {
    path: 'consolidado',
    component: consolidadoComponent
  },
 
  {
    path: 'analitico',
    component: analiticoComponent
  },
 
 


];
export class RoutingModule {}