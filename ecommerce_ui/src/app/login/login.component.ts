import { Component, OnInit, SimpleChange } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginSerivceService } from '../login-serivce.service';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  get f(){
    return this.profileForm.controls;
  }

  profileForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('',[Validators.required, Validators.email])
  })

  isFormSubmitted: any;
  info: any;
  message: any;
  users: any;
  user : User = new User();   // object created from User entity

  logIn(){
    this.user.username = this.f['username'].value;
    this.user.password = this.f['password'].value;
    console.log(this.profileForm.value);
    // perform authentication login here

    //
    console.log("data recieved from HTML In TS: ",this.user.username)
    console.log("data recieved from HTML In TS: ",this.user.password)

    // aduser
    this.addUser();
    // getData
    this.getAllData();

    // this.loginService.getUserList()
    // .subscribe(data => {   // Arrow Function
    //   this.users = data;
    //   console.log("AAAAA",this.users)
     
    // }, error => console.log(error));

  }
  constructor( private loginService: LoginSerivceService , private router: Router){}

  ngOnInit(): void{
      this.isFormSubmitted= false;
  }



  //Create Operation  
  addUser() {  
    this.loginService.createuserlist(this.user)
      .subscribe(data=>
        console.log("new user is here: ",data), 
        error=>console.log(error));
  //this.user = new User();
    //this.router.navigate(['home']);
    this.isFormSubmitted= true;
    //this.message = "add user record received successfully "

  }


  getAllData(){
   
    this.loginService.getUserList()
    .subscribe(data => {
      this.users = data;
      this.info = "data processing"

      {{}}
      console.log("getAllData() function here: ",this.users)
     
    }, error => console.log(error));

  }

  




}
