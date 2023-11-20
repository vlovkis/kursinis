import { Component } from '@angular/core';
import { SearchInputDataService } from '../search-input-data.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  constructor(private searchInputDataService: SearchInputDataService){};

  onInputChange(event: any) {
    this.searchInputDataService.searchQuery = event.target.value;
  }
}
