import { Component } from '@angular/core';
import { CompanyDetailsApiService } from '../company-details-api.service';
import { CompanyStateService } from '../company-state.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        maxHeight: '500px',
      })),
      state('closed', style({
        maxHeight: '500px',
      })),
      transition('open <=> closed', [
        animate('0.3s ease'),
      ]),
    ]),
  ],
})
export class FormPageComponent {
  loading: boolean = false;
  title = 'searchApi';
  hits: any[] = [];
  selectedCompany: any;
  resultMessage: string;
  companies: any[];

  constructor(private companyApiService: CompanyDetailsApiService, private companyStateService: CompanyStateService) { }

  ngOnInit() {
    this.companyStateService.companies$.subscribe((companies) => {
      this.companies = companies;
      console.log(companies)
      return companies
    })}

  search(searchQuery: string) {
    if (searchQuery) {
      this.loading = true;
      this.companyApiService.searchCompanies(searchQuery).subscribe(
        (data: any) => {
          this.hits = data;
          this.loading = false;
          if (this.hits.length === 0) {
            this.resultMessage = "No records found.";
          } else {
            this.resultMessage = "";
          }
        },
        (error) => {
          console.error(error);
          this.loading = false;
          this.resultMessage = "An error occurred while fetching data.";
        }
      );
    }
  }

  onCompanySelected(company: any) {
    this.selectedCompany = company;
  }

  toggleDetails(company: any): void {
    company.showDetails = !company.showDetails;
  }
}
