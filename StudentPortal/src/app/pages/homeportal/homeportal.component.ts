import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import {variable} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-homeportal',
  templateUrl: './homeportal.component.html',
  styleUrls: ['./homeportal.component.scss']
})
export class HomeportalComponent implements OnInit {
  public currentStudent;
  constructor( private Studentdb: AngularFireDatabase, private StudentfAuth: AngularFireAuth) { }

  ngOnInit() {
    // This will fetch the data using uid from firebase and store it on the variable currentStudent
    this.StudentfAuth.authState.subscribe(
      (auth) => {
        // this.email = auth.email;
        if (auth != null) {
          this.Studentdb.object('Profile/' + auth.uid).valueChanges().subscribe(
            data => {
              this.currentStudent = data;
            });
        }
      });
  }

}
