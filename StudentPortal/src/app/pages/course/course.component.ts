import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../auth/api.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor(private route: ActivatedRoute, private MongoApi: ApiService, private router: Router) { }

  ngOnInit() {
    this.MongoApi.getCoursesPortalData()
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
  }

}
