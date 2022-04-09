import { Component } from '@angular/core';
import { LoginService } from '../../../../auth/services/login.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent  {

  constructor(public loginService: LoginService) {}


}
