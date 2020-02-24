import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../shared/news.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Input () news ;

  constructor(private newsService : NewsService) { }

  ngOnInit(): void {
    this.news = this.newsService.getNews();
  }

}
