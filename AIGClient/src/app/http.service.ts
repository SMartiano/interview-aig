import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/Models/Category';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url: string = 'https://localhost:44354/';
  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<Category[]>(`${this.url}api/Categories`);
  }

  getArticlesByCategory(categoryID: number) {
    return this.http.get(`${this.url}api/ArticlesByCategory?categoryID=${categoryID}`);
  }

  getFavoritesArticles(favorites: string) {
    return this.http.get(`${this.url}api/FavoritesArticles?favorites=${favorites}`);
  }
}
