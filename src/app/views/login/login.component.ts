import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms'

import { AppService } from '../../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 
	loginForm	: FormGroup;
	submitted = false;

	constructor(
		private formBuilder: FormBuilder,
		private appService: AppService
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
		this.appService.authorize(this.loginForm.value);
		this.submitted = false;
		this.loginForm.reset();
	}

}