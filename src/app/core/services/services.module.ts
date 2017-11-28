import {NgModule} from '@angular/core';
import {CatalogService} from './catalog.service';
import {RouteUrlService} from './route-url.service';

@NgModule({
  providers: [CatalogService, RouteUrlService],
})
export class ServicesModule {
}
