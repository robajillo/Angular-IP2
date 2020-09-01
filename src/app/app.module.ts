import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

import { RepositoriesComponent } from './repositories/repositories.component';
import { UsersComponent } from './users/users.component';
import { DatePipe } from './date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,

    NavbarComponent,
    FooterComponent,

    RepositoriesComponent,
    UsersComponent,
    DatePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
