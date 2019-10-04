import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { AuthService } from 'src/app/services/auth.service';
import { AuthConstants } from 'src/app/config/auth-constants';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  postData = {
    username: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService,
    private toastService: ToastService
  ) { }

  ngOnInit() { }

  validateInputs() {
    console.log(this.postData);
    let username = this.postData.username.trim();
    let password = this.postData.password.trim();
    return (
      this.postData.username &&
      this.postData.password &&
      username.length > 0 &&
      password.length > 0
    );
  }

  loginAction() {
    if (this.validateInputs()) {
      this.authService.login(this.postData).subscribe(
        (res: any) => {
          if (res.userData) {
            // Storing the User data.
            this.storageService.store(AuthConstants.AUTH, res.userData);
            this.router.navigate(['home/distributions']);
          } else {
            this.toastService.presentToast('Kesalahan pada username and password.');
          }
        },
        (error: any) => {
          this.toastService.presentToast('Masalah Jaringan.');
        }
      );
    } else {
      this.toastService.presentToast(
        'Silahkan Masukkan username or password.'
      );
    }
  }
}