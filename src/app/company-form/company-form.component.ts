import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent {
  companyForm: FormGroup;
  @Input() selectedCompany: any;
  companies: any[] = []; // List of companies to display

  constructor(private formBuilder: FormBuilder, private companyService: CompanyService) {
    this.companyForm = this.formBuilder.group({
      pavadinimas: '',
      ja_kodas: '',
      pvm_kodas: '',
      street: '',
      housenumber: '',
      flatnumber: '',
      city: '',
      postcode: '',
      municipality: '',
      country: ''
    });
  }

  ngOnInit() {
    // Fetch the list of companies when the component initializes
    this.fetchCompanies();
  }

  fetchCompanies() {
    this.companyService.getCompanies().subscribe(
      (companies: any[]) => {
        this.companies = companies;
      },
      (error) => {
        console.error('Error fetching companies:', error);
      }
    );
  }

  ngOnChanges() {
    if (this.selectedCompany) {
      const addressTags = this.selectedCompany.Source.addresstags;

      let streetValue = this.selectedCompany.Source.ReformattedAddress;
      let housenumberValue = "";
      let cityValue = "";
      let postcodeValue = this.selectedCompany.Source.calculated_postcode;

      if (addressTags !== "nerastas") {
        try {
          const parsedTags = JSON.parse(addressTags);
          streetValue = parsedTags.street || this.selectedCompany.Source.ReformattedAddress;
          housenumberValue = parsedTags.housenumber || "";
          cityValue = parsedTags.city || "";
          postcodeValue = parsedTags.postcode || this.selectedCompany.Source.calculated_postcode;
        } catch (error) {
          console.error("Error parsing addressTags:", error);
        }
      }

      this.companyForm.patchValue({
        pavadinimas: this.selectedCompany.Source.pavadinimas,
        ja_kodas: this.selectedCompany.Source.ja_kodas,
        pvm_kodas: this.selectedCompany.Source.pvm_kodas_pref + this.selectedCompany.Source.pvm_kodas,

        street: streetValue,
        housenumber: housenumberValue,
        city: cityValue,
        postcode: postcodeValue,
      });
    }
  }

  submitForm() {
    if (this.companyForm.valid && this.companyService) {
      const newCompany = this.companyForm.value;

      // Call the service to create a new company in-memory
      this.companyService.createCompany(newCompany).subscribe(
        (createdCompany: any) => {
          console.log('New company created:', createdCompany);

          this.fetchCompanies();
          // Assuming you want to update the UI with the newly created company
          // You can add logic to display the list of companies or the newly created one
          this.companyService.getCompanies().subscribe((companies: any[]) => {
            console.log('All companies:', companies);
            // Update the UI or do something with the list of companies
          });
        },
        (error) => {
          console.error('Error creating company:', error);
        }
      );
    }
  }
}
