import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class GithubService {
    private url = "https://api.github.com/users"; 

    constructor(private http: Http) {

    }

    getFollowers() {
        return this.http.get(this.url); 
    }
}