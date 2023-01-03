import { Component, OnInit } from '@angular/core';
import { Category } from 'src/Models/Category';
import { HttpService } from '../http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  categories?: Category[];
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.http.getCategories().subscribe((categories: any) => {
      this.categories = categories;
      console.log(this.categories);

    })
  }

  getArticlesByCategory() {
    this.http.getArticlesByCategory(1).subscribe((values: any) => {
      console.log(values);


    })
  }

  getFavorites() {
    this.http.getFavoritesArticles('18,19').subscribe((values: any) => {
      console.log(values);

    })
  }
}
