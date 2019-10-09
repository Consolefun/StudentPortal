import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../auth/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private MongoDBApi: ApiService, private router: Router) { }



  ngOnInit() {
  }



}
