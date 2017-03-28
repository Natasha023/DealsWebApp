import { Component, OnInit } from '@angular/core';
import {Deal} from './deal';
import {DealDataService} from './deal.data.service';
import {FilterPipe} from './filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  deals: Deal[];
  
  constructor(private dealDataService: DealDataService) {} //inject the dealDataService dependency
  
  ngOnInit() {
  	this.dealDataService.getDeals()
  		.subscribe(deals=>this.deals=deals);
  }

} 
