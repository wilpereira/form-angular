import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { FormDebugComponent } from '../form-debug/form-debug.component';
import { TemplateFormRoutingModule } from './template-form-routing.module';
import { TemplateFormComponent } from './template-form.component';

@NgModule({
	declarations: [TemplateFormComponent, FormDebugComponent],
	imports: [CommonModule, FormsModule, TemplateFormRoutingModule],
	exports: [FormDebugComponent],
})
export class TemplateFormModule {}
