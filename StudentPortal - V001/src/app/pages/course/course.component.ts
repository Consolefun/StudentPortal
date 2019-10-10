import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, NgForm, Validators, FormControl, FormGroupDirective} from '@angular/forms';
import {DataSource} from '@angular/cdk/collections';
import {MatTableModule} from '@angular/material';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  // courses: any;
  // displayedColumns = ['isbn', 'title', 'author'];
  // dataSource = new CourseDataSource(this.api);


  constructor(private api: ApiService) { }

  ngOnInit() {


    // this.api.getStudentsPortalDatas().subscribe(res => {
    //   console.log(res);
    //   this.courses = res;
    // }, err => {
    //   console.log(err);
    // });
  }

  /*getCourseDetails(id) {
    this.api.getStudentsPortalData(id)
      .subscribe(data => {
        console.log(data);
        this.courses = data;
      });
  }*/
  /*onFormSubmit(form: NgForm) {
    this.api.getStudentsPortalData(form).subscribe(res => {
      let courseId = res['_id'];
    }, (err) => {
      console.log(err);
    });
  }*/

}

/*
export class CourseDataSource extends DataSource <any> {
  constructor(private api: ApiService) {
    super();
  }

  connect() {
    return this.api.getStudentsPortalDatas();
  }

  disconnect() {
  }

}*/
