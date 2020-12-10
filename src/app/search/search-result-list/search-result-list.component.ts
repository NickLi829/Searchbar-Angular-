import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss'],
})
export class SearchResultListComponent implements OnInit {
  constructor(public searchService: SearchService,
    private router: Router) {}

  ngOnInit(): void {}

  viewUniversity(item) {
    // this.searchService.updateSelectedOption(item);
    this.searchService.setCurrentOption(item);
    this.router.navigateByUrl('/search-results-item');
  }
}
