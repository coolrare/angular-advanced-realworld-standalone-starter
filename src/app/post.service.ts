import { environment } from './../environments/environment.prod';
import { SingleArticle } from './interfaces/single-article';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Articles } from './interfaces/articles';
import { CreateArticle } from './interfaces/create-article';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  httpClient = inject(HttpClient);

  getArticles() {
    return this.httpClient.get<Articles>(`${environment.apiUrl}/api/articles`);
  }

  getArticle(id: string) {
    return this.httpClient.get<SingleArticle>(`${environment.apiUrl}/api/articles/${id}`);
  }

  createArticle(article: CreateArticle) {
    return this.httpClient.post<SingleArticle>(`${environment.apiUrl}/api/articles`, { article });
  }
}
