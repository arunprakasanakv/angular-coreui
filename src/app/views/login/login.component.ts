import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms'

import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 
	loginForm	: FormGroup;
	result : any;
	submitted = false;

	constructor(
		private formBuilder: FormBuilder,
		private appService: AppService,
		private router: Router
	) { }

	ngOnInit(){
		this.loginForm = this.formBuilder.group({
			userName: ['', [Validators.required,Validators.email]],
			password: ['', Validators.required]
		});
	}

	get f() { return this.loginForm.controls; }

	onSubmit() {
		this.submitted = true;
		
		if (this.loginForm.invalid) {
			return;
		}
		this.appService.authorize(this.loginForm.value).subscribe((response) =>{
			localStorage.setItem('userName',response.data.userName);
			this.router.navigate(['/dashboard']);
			return response;
		});
		this.submitted = false;
		this.loginForm.reset();
	}

}