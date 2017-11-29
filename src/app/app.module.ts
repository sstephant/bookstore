import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CatalogModule} from './catalog/catalog.module';
import {AppRoutingModule} from './app-routing-module';
import {WidgetsModule} from './core/widgets/widgets.module';
import {MessageModule} from 'primeng/primeng';
import {MessageService} from 'primeng/components/common/messageservice';
import {GrowlModule} from 'primeng/primeng';
import {HttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, CatalogModule, WidgetsModule, AppRoutingModule, MessageModule, GrowlModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'},
    MessageService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
