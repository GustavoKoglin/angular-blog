import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { dataFake } from '../data/dataFake';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    constructor() { }

    getArticles(): Article[] {
        return dataFake;
    }

    getArticleById(id: string): Article | undefined {
        return dataFake.find(article => article.id === id);
    }
}
