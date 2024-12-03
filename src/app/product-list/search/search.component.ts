import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent {
  searchText: string = 'Womens Watch';

  updateSearchText(event: any)
  {
    this.searchText = event.target.value;
  }
}
