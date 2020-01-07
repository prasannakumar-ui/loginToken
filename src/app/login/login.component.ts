import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {
submitted=false
  constructor(private r:Router,private fb:FormBuilder,private s:ServiceService) { }
  get f(){ return this.form.controls}
form=this.fb.group({
  uname:['',Validators.required],
  pwd:['',Validators.required]
})
login(){
this.submitted=true
if(this.form.invalid){
return
}else{
  if(this.form.controls['uname'].value=='admin' && this.form.controls['pwd'].value=='admin'){
this.s.sendToken(this.form.value.uname)
this.r.navigate(['page'])
  }else{
    alert('username & password are incorrect')
    this.form.reset()
    this.submitted=false
}
}
}
}
