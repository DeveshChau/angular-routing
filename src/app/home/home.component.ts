import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  loadServer(id: number){
    this._router.navigate(['/servers',id,'edit'],{queryParams:{allowEdit: '1'},fragment: 'loading'})
  }

  onLogin(){
    this.authService.logIn()
  }

  onLogout(){
    this.authService.logout()
  }
}
