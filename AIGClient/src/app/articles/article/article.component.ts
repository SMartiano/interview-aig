import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/Models/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass'],
})
export class ArticleComponent implements OnInit {
  @Input() article!: Article;
  @Input() isFavorite!: boolean | undefined;
  constructor() {}

  ngOnInit(): void {}

  addToFavorite(id: number) {
    var favorite = localStorage.getItem('favorite');
    console.log(favorite);
    if (favorite) {
      favorite += ',' + id.toString();
      localStorage.setItem('favorite', favorite);
    } else {
      localStorage.setItem('favorite', id.toString());
    }
  }

  removeFromFavorite(id: number) {
    var favorite = localStorage.getItem('favorite')!.split(',');

    favorite!.splice((favorite as string[]).indexOf(id.toString()), 1);

    localStorage.setItem('favorite', favorite!.join(','));
  }
}
