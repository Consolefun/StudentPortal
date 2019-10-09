import { Component, OnInit } from '@angular/core';
import {FauthService} from '../../auth/fauth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private Fauth: FauthService) { }

  ngOnInit() {
  }

}
