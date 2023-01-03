import { Component, OnInit } from '@angular/core';
import { Article } from 'src/Models/Article';
import { Category } from 'src/Models/Category';
import { HttpService } from '../http.service';
import {
  MatDialog,
} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  categories!: Category[];
  articles: Article[] = [];
  constructor(
    private http: HttpService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getFavoritesArticles();
  }

  getCategories() {
    this.http.getCategories().subscribe((categories: any) => {
      this.categories = categories;
      console.log(categories);
    });
  }

  goToArticles(id: number) {
    this.router.navigate([`/Articles/${id}`]);
  }

  getFavoritesArticles() {
    let favorite = this.getFavoritesArticlesIDFromLocalStorage();
    if (favorite == null || favorite == undefined || favorite == '') return;
    this.http
      .getFavoritesArticles(favorite!.toString())
      .subscribe((values: any) => {
        this.articles = values;
      });
  }

  getFavoritesArticlesIDFromLocalStorage() {
    return localStorage.getItem('favorite');
  }
}
