import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, NgForm, Validators, FormControl, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  /*courses: any;
  courseForm: FormGroup;
  courseId: string = '';
  courseName: string = '';
  courseDescription: string = '';
  courseTaken: boolean = false;
  private http: any;
  dataSource = new CourseDataSource(this.api);*/


  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {


    /*this.api.getStudentsPortalDatas().subscribe(res => {
      console.log(res);
      this.courses = res;
    }, err => {
      console.log(err);
    });
    return this.api.getStudentsPortalDatas();*/
  }
  // getCourseDetails(id) {
  //   this.api.getStudentsPortalData(id).subscribe(data => {
  //     console.log(data);
  //     this.course = data;
  //
  //   });
  // }

  /*onFormSubmit(form: NgForm) {
    this.api.getStudentsPortalData(form).subscribe(res => {
      let courseId = res['_id'];
    }, (err) => {
      console.log(err);
    });
  }*/

}

/*export class CourseDataSource extends dataSource<any> {

}*/
