import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [[FormsModule, CommonModule]],
  templateUrl: './article-component.component.html',
  styleUrl: './article-component.component.scss'
})
export class ArticleComponentComponent {
  
  article = {
    title: 'Titre de l\'article',
    author: 'John Doe',
    content: 'Voici le contenu de l\'article.',
    image: 'https://via.placeholder.com/350x150',
    isPublished: true,
    comment:""
  };
// comment: string = '';
  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }
}
