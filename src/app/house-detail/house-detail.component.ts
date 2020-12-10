import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';
@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.scss']
})
export class HouseDetailComponent implements OnInit {

  constructor(public searchService: SearchService) {}

  ngOnInit(): void {

  }

}
