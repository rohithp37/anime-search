import { Component } from "@angular/core";
import { CommonService } from '../../services/common.service';
import { animeDataConfig, paramsConfig } from '../../models/common.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent {

    constructor(
        private commonService: CommonService
    ){}

    url = 'https://api.jikan.moe/v3/search/anime';
    animeData: animeDataConfig[] = [];
    params: paramsConfig;

    userInputData(data){
        this.params = {
            q: data,
            limit: 16,
            page: 1
        };
        this.getAnimeDataRequest();
    }

    loadMoreAnimeData(){
        this.params.page += 1;
        this.getAnimeDataRequest();
    }

    getAnimeDataRequest(){
        this.commonService.getDataRequest(this.url, this.params).then(res => {
            if(res){
                this.animeData = this.animeData.length ? [...this.animeData, ...res.results] : [...res.results];
            }
        });
    }

}