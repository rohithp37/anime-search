import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ResolveData } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class CommonService{
    constructor(
        private http: HttpClient
    ){}

    getDataRequest(url: string, queryParams): ResolveData{
        let params: HttpParams = new HttpParams();
        for(let key in queryParams){
            params = params.append(key.toString(), queryParams[key]);
        }
        return this.http.get(url, {params})
            .toPromise()
            .then(
                res => res,
                err => this.handler(err)
            );
    }

    handler(err){
        console.log(err.message);
    }
}