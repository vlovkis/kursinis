import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchButtonComponent } from './search-button/search-button.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { SearchResultsDisplayComponent } from './search-results-display/search-results-display.component';
import { SearchResultCardComponent } from './search-result-card/search-result-card.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormPageComponent } from './form-page/form-page.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    SearchButtonComponent,
    SearchResultsDisplayComponent,
    SearchResultCardComponent,
    CompanyFormComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    LoginComponent,
    FormPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
