import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotfoundComponent} from './core/widgets/notfound/notfound.component';

const routes: Routes = [
  { path: 'cart', loadChildren: 'app/cart/cart.module#CartModule' },
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
