import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'frm-form-debug',
	templateUrl: './form-debug.component.html',
	styleUrls: ['./form-debug.component.scss'],
})
export class FormDebugComponent implements OnInit {
	@Input() form: any;

	constructor() {}

	ngOnInit(): void {}
}
