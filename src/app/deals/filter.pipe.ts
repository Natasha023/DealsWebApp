import {Pipe , PipeTransform ,Injectable} from "@angular/core";

 @Pipe({
   name:'filter',
   pure:false
 })

@Injectable()
 export class FilterPipe implements PipeTransform {

   transform(items :any ,term :any): any {
     if(term === undefined) return items;

     return items.filter( function(item){
       return item.name.toLowerCase().includes(term.toLowerCase());
     })
   }
 }