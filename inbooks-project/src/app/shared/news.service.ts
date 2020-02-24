import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class NewsService implements OnInit {
    news : [] = [];

    api_key = 'caa9c205a2504c44972badbee6e403b5';

    constructor(private http : HttpClient) { }

    ngOnInit(): void {
    }

    fetchNews()  {
        this.http.get('http://newsapi.org/v2/top-headlines?country=se&category=technology&apiKey='+ this.api_key).subscribe(
			res => {
         this.news = res['articles'];
    });
    }

    getNews(){
        return this.news;
    }
}
