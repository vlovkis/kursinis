// company-state.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyStateService {
  private companiesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  companies$: Observable<any[]> = this.companiesSubject.asObservable();

  setCompanies(companies: any[]): void {
    this.companiesSubject.next(companies);
  }

  getCompanies(): any[] {
    return this.companiesSubject.getValue();
  }
}
