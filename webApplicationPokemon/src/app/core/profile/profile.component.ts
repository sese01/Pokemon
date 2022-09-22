import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  onClearToken(){
    localStorage.clear();
    this.router.navigate(['/']);
    
  }
  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['/profile']);
    }else{
      this.router.navigate(['/']);
    }
  }
  

}
