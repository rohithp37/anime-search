
import { Component, Input } from "@angular/core";
import { animeDataConfig } from '../../models/common.model';

@Component({
    selector: 'search-data',
    templateUrl: './search-data.component.html'
})

export class SearchDataComponent{
    @Input() data: animeDataConfig[];
}