import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';

import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [ WeatherComponent ],
  imports: [ BrowserModule, HttpClientModule ],
  providers: []
})
export class AppModule {
  constructor(
    private injector: Injector
  ) { }

  ngDoBootstrap() {
    const weathercomponent = createCustomElement(WeatherComponent, {injector: this.injector});
    customElements.define('app-weather', weathercomponent);
  }
}
