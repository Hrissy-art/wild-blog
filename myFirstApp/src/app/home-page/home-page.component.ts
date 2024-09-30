import { Component } from '@angular/core';
import { ArticleComponentComponent } from "../article-component/article-component.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ArticleComponentComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
