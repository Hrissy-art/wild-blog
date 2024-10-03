import { NgModel } from '@angular/forms';
import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticleComponentComponent } from './article-component/article-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    // { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '', component: HomePageComponent },
    { path: 'home-page/:id', component: HomePageComponent },
    { path: 'article/:id', component: ArticleComponentComponent },
    { path: 'contact', component: ContactFormComponent },
    { path: 'user', component: UserComponent },
    { path: 'signup', component: SignupFormComponent },
    { path: '**', component: NotFoundComponent }
];
