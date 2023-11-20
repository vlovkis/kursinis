import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent {
  companyForm: FormGroup;
  @Input() selectedCompany: any;

  constructor(private formBuilder: FormBuilder) {
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
    alert("Ši demo versija priklauso BSS IT UAB")
  }
}
