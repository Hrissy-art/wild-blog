import { Component, inject } from '@angular/core';
import { ArticleComponentComponent } from "../article-component/article-component.component";
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [[ArticleComponentComponent,RouterModule, FormsModule, CommonModule]],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });
  }
  
  articles = [
    { 
      id: 2,
      title: 'Angular 16: Les nouveautés', 
      author: 'Alice', 
      content: 'Les nouveautés d\'Angular 16 incluent...', 
      image: 'https://via.placeholder.com/350x150',
      isPublished: true, 
      comment: '', 
      likes: 120 
    },
    { 
      id:3,
      title: 'Développer une API REST', 
      author: 'Bob', 
      content: 'Développer une API REST nécessite...', 
      image: 'https://via.placeholder.com/350x150',
      isPublished: false, 
      comment: '', 
      likes: 75 
    },
    { 
      id:4,
      title: 'Pourquoi TypeScript est essentiel ?', 
      author: 'Charlie', 
      content: 'TypeScript apporte de la robustesse...', 
      image: 'https://via.placeholder.com/350x150',
      isPublished: true, 
      comment: '', 
      likes: 200 
    }
  ];
  get selectedArticle() {
    return this.articles.find(article => article.id === this.articleId);
  }
}