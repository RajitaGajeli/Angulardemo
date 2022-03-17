import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent},
  {path:'reviews',component:ReviewsComponent},
  {path:'contact',component:ContactComponent},
  {path:'post',component:PostComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
