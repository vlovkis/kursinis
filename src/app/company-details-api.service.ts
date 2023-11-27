import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyDetailsApiService {
  private apiUrl = 'https://localhost:7290/api';

  constructor(private http: HttpClient) { }

  searchCompanies(query: string){
    const url = `${this.apiUrl}/Search?query=${query}`;

    return this.http.get(url);
  }
}
