import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CourseComponent} from './pages/course/course.component';

const WebRoutes: Routes = [
  { path: '', redirectTo: 'home',  pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  {path: 'course', component: CourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(WebRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
