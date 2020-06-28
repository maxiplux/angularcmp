import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router, UrlSerializer} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {User} from '../models/user';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  private usuario: User;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
    this.usuario = new User();


  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      console.log('Login', `Hola ${this.authService.usuario.username} ya estás autenticado!`, 'info');
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit() {

    if (this.loginForm.valid) {

      this.authService.login(this.loginForm.value).subscribe(response => {
          console.log(response);

          this.authService.guardarUsuario(response.access_token);
          this.authService.guardarToken(response.access_token);
          const usuario = this.authService.usuario;
          this.router.navigate(['/dashboard']);

          Swal.fire({
          title: 'success!',
          text: `Hola ${usuario.username}, has iniciado sesión con éxito!`,
          icon: 'info',
          confirmButtonText: 'Ok'
        });

          // swal('Login', `Hola ${usuario.username}, has iniciado sesión con éxito!`, 'success');
        }, err => {
          if (err.status === 400 ) {
            Swal.fire({
              title: 'Error!',
              text: 'Usuario o clave incorrectas!',
              icon: 'error',
              confirmButtonText: 'Ok'
            });

          }
        }
      );


    }
  }

}
