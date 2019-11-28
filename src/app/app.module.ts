import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { C2 } from './components/c2.component';
import { C1 } from './components/c1.component';
@NgModule({
  declarations: [
    AppComponent,
    C1,C2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppComponent],
  bootstrap: [],
  entryComponents:[AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const elm = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('custom-element', elm);
  }

}
