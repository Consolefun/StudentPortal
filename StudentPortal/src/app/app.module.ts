import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterBarComponent } from './shared/footer-bar/footer-bar.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/database';

const firebase = {

  };


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterBarComponent,
    SideBarComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
