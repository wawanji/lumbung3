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
    email: '',
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
    let email = this.postData.email.trim();
    return (
      this.postData.username &&
      this.postData.password &&
      this.postData.email &&
      username.length > 0 &&
      email.length > 0 &&
      password.length > 0
    );
  }

  signAction() {
    if (this.validateInputs()) {
      this.authService.signup(this.postData).subscribe(
        (res: any) => {
          if (res.userData) {
            // Storing the User data.
            this.storageService
              .store(AuthConstants.AUTH, res.userData)
              .then(res => {
                this.router.navigate(['home/feed']);
              });
          } else {
            this.toastService.presentToast(
              'Data alreay exists, please enter new details.'
            );
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    } else {
      this.toastService.presentToast(
        'Please enter email, username or password.'
      );
    }
  }
}