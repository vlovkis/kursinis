import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyDetailsApiService {
  private apiUrl = 'http://localhost:7290/api';
  private apiKey = 'e53d1c86fe554e3684506cc61f2bba23';

  constructor(private http: HttpClient) { }

  searchCompanies(query: string){
    const url = `${this.apiUrl}/Search?query=${query}`;
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey
    });

    return this.http.get(url, {headers});
  }
}
