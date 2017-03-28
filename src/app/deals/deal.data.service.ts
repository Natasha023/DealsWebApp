import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

import {Deal} from './deal';

//injectable decorator, now our service can safely used by dependency injector
@Injectable()
export class DealDataService{
	constructor(private http: Http){}
	getDeals(){
		return this.http.get('app/dealsdata.json')
			.map(response => <Deal[]>response.json().data);
	}
}
