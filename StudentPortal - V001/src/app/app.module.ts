import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterBarComponent } from './shared/footer-bar/footer-bar.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { CourseComponent } from './pages/course/course.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputsModule, WavesModule, ButtonsModule, CardsModule, IconsModule} from 'angular-bootstrap-md';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from '@angular/material';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { CourseCreateComponent } from './pages/course-create/course-create.component';
import { CourseEditComponent } from './pages/course-edit/course-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterBarComponent,
    SideBarComponent,
    NavBarComponent,
    CourseComponent,
    CourseDetailComponent,
    CourseCreateComponent,
    CourseEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    InputsModule,
    WavesModule,
    ButtonsModule, CardsModule, IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
