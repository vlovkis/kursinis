import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-result-card',
  templateUrl: './search-result-card.component.html',
  styleUrls: ['./search-result-card.component.scss']
})
export class SearchResultCardComponent {
  @Input() hit: any;
  @Output() cardSelected = new EventEmitter<void>();

  onCardClick() {
    this.cardSelected.emit();
  }
}
