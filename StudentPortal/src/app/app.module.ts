import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterBarComponent } from './shared/footer-bar/footer-bar.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
<<<<<<< HEAD
import { CalendarComponent } from './pages/calendar/calendar.component';
=======
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/database';
import { PortalComponent } from './pages/portal/portal.component';
import { SettingComponent } from './pages/setting/setting.component';
import { CourseComponent } from './pages/course/course.component';
import {HttpClientModule} from '@angular/common/http';

const firebase = {
    apiKey: 'AIzaSyD28kitXFB0ybVo-ZiSX2nSn4fGX1Pv7Sg',
    authDomain: 'studentportal-c1027.firebaseapp.com',
    databaseURL: 'https://studentportal-c1027.firebaseio.com',
    projectId: 'studentportal-c1027',
    storageBucket: '',
    messagingSenderId: '86313023526',
    appId: '1:86313023526:web:5a3075ee60365a7c2a0ee7',
    measurementId: 'G-BTJ2XGY5ZR'
  };

>>>>>>> 9b3cce8d1c681be8a458fb2931fbda21d42b4706

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterBarComponent,
    SideBarComponent,
    NavBarComponent,
<<<<<<< HEAD
    CalendarComponent
=======
    PortalComponent,
    SettingComponent,
    CourseComponent
>>>>>>> 9b3cce8d1c681be8a458fb2931fbda21d42b4706
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
