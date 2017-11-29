import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatalogRootComponent} from './catalog-root/catalog-root.component';
import {CatalogListComponent} from './catalog-list/catalog-list.component';
import {CatalogBookComponent} from './catalog-book/catalog-book.component';
import {FormsModule} from '@angular/forms';
import {ServicesModule} from '../core/services/services.module';
import {HttpClientModule} from '@angular/common/http';
import {CatalogRoutingModule} from './catalog-routing-module';
import {BookNavigatorComponent} from './book-navigator/book-navigator.component';
import {WidgetsModule} from '../core/widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule, HttpClientModule, FormsModule, ServicesModule, CatalogRoutingModule, WidgetsModule
  ],
  providers: [],
  declarations: [CatalogRootComponent, CatalogListComponent, CatalogBookComponent, BookNavigatorComponent],
  exports: [CatalogRootComponent]
})
export class CatalogModule {
}
