import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotfoundComponent} from './notfound/notfound.component';
import {MenuComponent} from './menu/menu.component';
import {RouterModule} from '@angular/router';
import {MenubarModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule, RouterModule, MenubarModule
  ],
  declarations: [NotfoundComponent, MenuComponent],
  exports: [NotfoundComponent, MenuComponent]
})
export class WidgetsModule {
}
