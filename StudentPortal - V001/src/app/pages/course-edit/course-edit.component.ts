import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit {
  courseForm: FormGroup;
  id:string = '';
  name:string = '';
  description:string = '';
  taken:boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  getCourseId(id) {
    this.api.getStudentsPortalData(id).subscribe(data => {
      this.id = data._id;
      this.courseForm.setValue({
        id: data.id,
        name: data.name,
        description: data.description,
        taken: data.taken
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this.api.updateStudentsPortalData(this.id, form).subscribe(res => {
      let id = res['_id'];
      this.router.navigate(['/course-detail', id]);
      // tslint:disable-next-line:only-arrow-functions
    }, function(err) {
      console.log(err);
    });
  }

  courseDetails() {
    this.router.navigate(['/course-detail', this.id]);
  }


}
