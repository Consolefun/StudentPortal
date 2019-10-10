import { Component, OnInit } from '@angular/core';
import {FauthService} from '../../auth/fauth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import {auth} from 'firebase';
import {Router} from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  public currentStudent;
  StudentFirstName = '';
  StudentLastName = '';
  SecondEmailAddress = '';
  StudentAddressOne = '';
  StudentAddressTwo = '';
  StudentCity = '';
  StudentState = '';
  StudentZipCode = '';
  fileToUpload;
  fileToDisplay;
  contactStates = [
    {key: 'AL', value: 'Alabama'},
    {key: 'AK', value: 'Alaska'},
    {key: 'AZ', value: 'Arizona'},
    {key: 'AR', value: 'Arkansas'},
    {key: 'CA', value: 'California'},
    {key: 'CO', value: 'Colorado'},
    {key: 'CT', value: 'Connecticut'},
    {key: 'DE', value: 'Delaware'},
    {key: 'DC', value: 'District of Columbia'},
    {key: 'FL', value: 'Florida'},
    {key: 'GA', value: 'Georgia'},
    {key: 'HI', value: 'Hawaii'},
    {key: 'ID', value: 'Idaho'},
    {key: 'IL', value: 'Illinois'},
    {key: 'IN', value: 'Indiana'},
    {key: 'IA', value: 'Iowa'},
    {key: 'KS', value: 'Kansas'},
    {key: 'KY', value: 'Kentucky'},
    {key: 'LA', value: 'Louisiana'},
    {key: 'ME', value: 'Maine'},
    {key: 'MD', value: 'Maryland'},
    {key: 'MA', value: 'Massachusetts'},
    {key: 'MI', value: 'Michigan'},
    {key: 'MN', value: 'Minnesota'},
    {key: 'MS', value: 'Mississippi'},
    {key: 'MO', value: 'Missouri'},
    {key: 'MT', value: 'Montana'},
    {key: 'NE', value: 'Nebraska'},
    {key: 'NV', value: 'Nevada'},
    {key: 'NH', value: 'New Hampshire'},
    {key: 'NJ', value: 'New Jersey'},
    {key: 'NM', value: 'New Mexico'},
    {key: 'NY', value: 'New York'},
    {key: 'NC', value: 'North Carolina'},
    {key: 'ND', value: 'North Dakota'},
    {key: 'OH', value: 'Ohio'},
    {key: 'OK', value: 'Oklahoma'},
    {key: 'OR', value: 'Oregon'},
    {key: 'PA', value: 'Pennsylvania'},
    {key: 'RI', value: 'Rhode Island'},
    {key: 'SC', value: 'South Carolina'},
    {key: 'SD', value: 'South Dakota'},
    {key: 'TN', value: 'Tennessee'},
    {key: 'TX', value: 'Texas'},
    {key: 'UT', value: 'Utah'},
    {key: 'VT', value: 'Vermont'},
    {key: 'VA', value: 'Virginia'},
    {key: 'WA', value: 'Washington'},
    {key: 'WV', value: 'West Virginia'},
    {key: 'WI', value: 'Wisconsin'},
    {key: 'WY', value: 'Wyoming'}
  ];
  constructor(private Fauth: FauthService, private StudentfAuth: AngularFireAuth,
              private Studentdb: AngularFireDatabase, private StudentRouter: Router) { }

  ngOnInit() {
    // this function is for getting the student information from firebase and show it on the page
    this.StudentfAuth.authState.subscribe(
      (auth) => {
        // this.email = auth.email;
        if (auth != null) {
          // profile is the collection in firebase
          this.Studentdb.object('Profile/' + auth.uid).valueChanges().subscribe(
            data => {
              // Storing the data in the currentStudent variable
              this.currentStudent = data;
              this.StudentFirstName = this.currentStudent.StudentFirstName;
              this.StudentLastName = this.currentStudent.StudentLastName;
              this.SecondEmailAddress = this.currentStudent.SecondEmailAddress;
              this.StudentAddressOne = this.currentStudent.StudentAddressOne;
              this.StudentAddressTwo = this.currentStudent.StudentAddressTwo;
              this.StudentCity = this.currentStudent.StudentCity;
              this.StudentState = this.currentStudent.StudentState;
              this.StudentZipCode = this.currentStudent.StudentZipCode;
            });
        }
      });
  }

  // imagechosen(files: FileList) {
  //   this.fileToUpload = files.item(0);
  //   const reader = new FileReader();
  //   reader.readAsDataURL((this.fileToUpload));
  //   reader.onload = (event) => {
  //     this.fileToDisplay = reader.result;
  //   };
  // }

  UpdateStudentP() {
    // this if statement is for error handling
    if (!this.StudentFirstName || !this.StudentLastName
      || !this.SecondEmailAddress || !this.StudentAddressOne
      || !this.StudentAddressTwo || !this.StudentCity ||
      !this.StudentState  ||
      !this.StudentZipCode
    ) {
      alert('Please Enter a valid information.');
    } else {
      // This is for getting the information from the page and update it to firebase
      this.StudentfAuth.authState.subscribe(
        (authentication) => {
          // profile is the collection in firebase, and update is the function used for updating the information
          this.Studentdb.object('Profile/' + authentication.uid).update({
            StudentFirstName: this.StudentFirstName,
            StudentLastName: this.StudentLastName,
            SecondEmailAddress: this.SecondEmailAddress,
            StudentAddressOne: this.StudentAddressOne,
            StudentAddressTwo: this.StudentAddressTwo,
            StudentCity: this.StudentCity,
            StudentState: this.StudentState,
            StudentZipCode: this.StudentZipCode
          });
        });
      alert('Updating Successful.');
      this.StudentRouter.navigate(['portal']);
    }
  }

}
