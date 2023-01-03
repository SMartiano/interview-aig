import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/Models/Article';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.sass'],
})
export class ArticlesComponent implements OnInit {
  categoryID!: number;
  articles: Article[] = [];
  constructor(private rout: ActivatedRoute, private http: HttpService) {}

  ngOnInit(): void {
    this.rout.params.subscribe((val) => {
      this.categoryID = (val as any).id;
    });
    this.getArticlesByCategory();
  }

  getArticlesByCategory() {
    this.http
      .getArticlesByCategory(this.categoryID)
      .subscribe((values: any) => {
        this.articles = values;
        console.log(this.articles);
      });
  }

  getFavoritesArticlesIDFromLocalStorage() {
    return localStorage.getItem('favorite');
  }
}
