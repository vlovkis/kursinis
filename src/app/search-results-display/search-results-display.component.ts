import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-results-display',
  templateUrl: './search-results-display.component.html',
  styleUrls: ['./search-results-display.component.scss']
})
export class SearchResultsDisplayComponent {
 @Input() hits: any[] = [];
 @Output() companySelected = new EventEmitter<any>();

 onCardSelected(company: any) {
  this.companySelected.emit(company);
}


}
