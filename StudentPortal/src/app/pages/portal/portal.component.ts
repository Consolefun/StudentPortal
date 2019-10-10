import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {
  public currentStudent;

  constructor(private Studentdb: AngularFireDatabase, private StudentfAuth: AngularFireAuth) { }

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
