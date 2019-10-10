import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CourseComponent} from './pages/course/course.component';
import {CourseDetailComponent} from './pages/course-detail/course-detail.component';
import {CourseCreateComponent} from './pages/course-create/course-create.component';

const WebRoutes: Routes = [
  { path: '', redirectTo: 'home',  pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  {path: 'course', component: CourseComponent},
  {path: 'course-detail', component: CourseDetailComponent},
  {path: 'course-create', component: CourseCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(WebRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
