import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'frm-template-form',
	templateUrl: './template-form.component.html',
	styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit {
	user = {
		nome: null,
		email: null,
	};
	constructor() {}

	ngOnInit(): void {}

	onSubmit(form: any) {
		console.log(form);
		console.log(this.user);
	}
}
