import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  private showSignIn = false;
  private showSignUp = true;

  constructor() { }

  ngOnInit() {
  }

  public showSignInForm(){
    this.showSignIn = true;
    this.showSignUp = false;
    console.log(this);
    $("#up").toggleClass('border-right disabled');
    $("#in").toggleClass('border-left disabled');
  }

  public showSignUpForm(){
      this.showSignIn = false;
      this.showSignUp = true;
      $("#in").toggleClass('border-left disabled');
      $("#up").toggleClass('border-right disabled');
  }

}
