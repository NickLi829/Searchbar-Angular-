import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-widget-search-bar-button',
  templateUrl: './widget-search-bar-button.component.html',
  styleUrls: ['./widget-search-bar-button.component.scss'],
})
export class WidgetSearchBarButtonComponent implements OnInit {
  constructor(private searchService: SearchService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    this.searchService.options$ = this.searchService.search(f.value.search);

    this.searchService.updateSelectedOption({
     id: null,
    street_address: null,
    city: null, 
    province: null, 
    country: null,
    image: null,
    university: null,
    available_date: null,
    price: null,
    number_of_bedrooms: null,
    number_of_bathrooms: null,
    kitchen: null,
    parking: null
    });

    this.searchService.isOptionsEmpty$ = this.searchService.options$.pipe(
      map((options) => (options.length == 0 ? true : false))
    );

    this.router.navigate(['/search-results-list']);
    f.resetForm();
  }
}
