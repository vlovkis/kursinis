// company.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CompanyStateService } from './company-state.service';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private companyStateService: CompanyStateService) {}

  createCompany(company: any): Observable<any> {
    // Assuming you have some logic to generate a unique ID
    const companyId = this.generateUniqueId();
    console.log('asd');

    const newCompany = { id: companyId, ...company };
    this.companyStateService.setCompanies([...this.companyStateService.getCompanies(), newCompany]);

    return of(newCompany);
  }

  getCompanies(): Observable<any[]> {
    return this.companyStateService.companies$;
  }

  private generateUniqueId(): string {
    return Math.random().toString(36).substring(7);
  }
}
