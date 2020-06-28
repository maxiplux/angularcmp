import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router, UrlSerializer} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });


  }

  ngOnInit(): void {


  }

  onSubmit() {

    if (this.loginForm.valid) {
      this.router.navigate(['dashboard'], { relativeTo: this.route });
      console.log(this.loginForm.value);
    }
  }

}
