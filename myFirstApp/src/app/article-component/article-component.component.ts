import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, NgModule, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';


@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [[FormsModule, CommonModule, RouterModule]],
  templateUrl: './article-component.component.html',
  styleUrl: './article-component.component.scss'
})
export class ArticleComponentComponent {

  @Input() article!: { 
    id: number, 
    title: string, 
    author: string, 
    content: string, 
    image: string, 
    isPublished: boolean, 
    likes: number 
  };
@Output () likes = new EventEmitter<string>();
likeMyArticle() {
  this.article.likes++;
  this.likes.emit(` ${this.article.title}`);

}
}

