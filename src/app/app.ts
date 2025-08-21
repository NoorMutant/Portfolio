import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./pages/navbar/navbar";
import { About } from './pages/about/about';
import { Services } from "./pages/services/services";
import { Skills } from './pages/skills/skills';
import { Resume } from './pages/resume/resume';
import { Portfolio } from './pages/portfolio/portfolio';
import { Reviews } from './pages/reviews/reviews';
import { Blog } from './pages/blog/blog';
import { Contact } from './pages/contact/contact';
import { Copyright } from './pages/copyright/copyright';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Copyright,Contact,Blog,Reviews,Navbar, About, Services,Skills,Resume,Portfolio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
