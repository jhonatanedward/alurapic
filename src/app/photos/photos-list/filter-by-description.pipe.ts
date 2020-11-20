import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({
    name: 'filterByDescription',

})
export class FilterByDescription implements PipeTransform{
    transform(value: Photo[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery.trim().toLocaleLowerCase();
        if(descriptionQuery){
            return value.filter(
                p => p.description.toLocaleLowerCase().includes(descriptionQuery)
            );
        }else{
            return value;
        }
    }
}