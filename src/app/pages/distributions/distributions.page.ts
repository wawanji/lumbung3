import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-distributions',
  templateUrl: './distributions.page.html',
  styleUrls: ['./distributions.page.scss'],
})
export class DistributionsPage implements OnInit {
  public authUser: any;
  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
    });
  }
}