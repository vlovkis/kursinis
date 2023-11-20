import { Component } from '@angular/core';
import { CompanyDetailsApiService } from './company-details-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading: boolean = false;
  title = 'searchApi';
  hits: any[] = [];
  selectedCompany: any;

  constructor(private companyApiService: CompanyDetailsApiService) { }

  search(searchQuery: string) {
    if (searchQuery) {
      this.loading = true;
      this.companyApiService.searchCompanies(searchQuery).subscribe(
        (data: any) => {
          this.hits = data;
          this.loading = false;
        },
        (error) => {
          console.error(error);
          this.loading = false;
        }
      );
    }
  }

  onCompanySelected(company: any) {
    this.selectedCompany = company;
  }
}
