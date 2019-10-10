import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.scss']
})
export class CourseCreateComponent implements OnInit {

  courseForm: FormGroup;
  id1: string = '';
  name: string = '';
  description: string = '';
  taken: boolean = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.courseForm = this.formBuilder.group({
      'id': [null, Validators.required],
      'name': [null, Validators.required],
      'description': [null, Validators.required],
      'taken': [null, Validators.required]

    });
  }
  onFormSubmit(form: NgForm) {
    this.api.postStudentsPortalData(form).subscribe(res => {
      let id = res['_id'];
      this.router.navigate(['/course-detail', id]);
    }, (err) => {
      console.log(err);
    });
  }

}
