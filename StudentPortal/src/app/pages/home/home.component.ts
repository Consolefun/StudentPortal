import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../auth/api.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FauthService} from '../../auth/fauth.service';
import {error} from 'util';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private FirebaseAuth: FauthService, private afAuth: AngularFireAuth,
              private FirebaseDB: AngularFireDatabase ) { }


  studentEmailPortalSystem = '';
  StudentPasswordPortalSystem = '';
  StudentFnamePortalSystem = '';
  StudentLnamePortalSystem = '';
  signInStudentP = '1';
  registerStudentP;
  ErrorMessageFirebase;

  ngOnInit() {
  }

  LogIn(e) {
    if (this.studentEmailPortalSystem !== '' && this.StudentPasswordPortalSystem !== '') {
      this.afAuth.auth.signInWithEmailAndPassword(this.studentEmailPortalSystem, this.StudentPasswordPortalSystem)
        .then(_ => {
          console.log('done');
          this.FirebaseAuth.LoggedIn(true);
        })
        // tslint:disable-next-line:no-shadowed-variable
        .catch(error => {
          this.ErrorMessageFirebase = error;
        });
      // this.FirebaseAuth.login(this.studentEmailPortalSystem, this.StudentPasswordPortalSystem);
      // // this.ErrorMessageFirebase = this.FirebaseAuth.AuthErrorMessage;
      // // console.log(this.FirebaseAuth.AuthErrorMessage);
      // this.FirebaseAuth.LoggedIn(true);
    } else {
      alert('Please Enter a valid account.');
    }
  }

  SignUp(e) {
    if (this.StudentLnamePortalSystem !== '' && this.StudentFnamePortalSystem !== '' && this.StudentPasswordPortalSystem !== '' && this.studentEmailPortalSystem !== '') {
      this.afAuth.auth.createUserWithEmailAndPassword(this.studentEmailPortalSystem, this.StudentPasswordPortalSystem)
        .then(_ => {
          this.afAuth.authState.subscribe(auth => {
            this.FirebaseDB.object(`Profile/${auth.uid}`).set({
              StudentFirstName: this.StudentFnamePortalSystem,
              StudentLastName: this.StudentLnamePortalSystem
            }).then();
          });
          alert('Registration Successful');
          this.FirebaseAuth.LoggedIn(true);
        })
        // tslint:disable-next-line:no-shadowed-variable
        .catch(error => {
          this.ErrorMessageFirebase = error;
        });
    } else {
             alert('Please Enter a valid information.');
    }
  }
  Cancel() {
    this.ErrorMessageFirebase = '';
    this.signInStudentP = '1';
    this.registerStudentP = '';
  }
  Register() {
    this.ErrorMessageFirebase = '';
    this.signInStudentP = '';
    this.registerStudentP = '1';
  }

}
