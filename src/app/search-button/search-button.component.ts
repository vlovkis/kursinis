import { Component, EventEmitter, Output } from '@angular/core';
import { CompanyDetailsApiService } from '../company-details-api.service';
import { SearchInputDataService } from '../search-input-data.service';


@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.scss']
})
export class SearchButtonComponent {
  @Output() searchClicked = new EventEmitter<string>();

  constructor(private searchInputDataService: SearchInputDataService) {}

  search() {
    const searchQuery = this.searchInputDataService.searchQuery;
    this.searchClicked.emit(searchQuery);
  }
}
