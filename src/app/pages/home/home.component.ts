import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mainArticle: Article | undefined;
  otherArticles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    const articles = this.articleService.getArticles();
    if (articles.length > 0) {
      this.mainArticle = articles[0];
      this.otherArticles = articles.slice(1);
    }
  }

}
