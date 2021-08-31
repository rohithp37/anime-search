import { Input } from "@angular/core";
import { Component } from "@angular/core";
import { animeDataConfig } from '../../models/common.model';


@Component({
    selector: 'anime-card',
    templateUrl: './anime-card.component.html'
})

export class AnimeCardComponent {
    @Input() data: animeDataConfig;
}