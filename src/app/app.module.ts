import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BlogInternalComponent } from './blog-internal/blog-internal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AngularPaginatorModule } from 'angular-paginator';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    BlogInternalComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
