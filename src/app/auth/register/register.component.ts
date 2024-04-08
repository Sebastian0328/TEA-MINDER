import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  register:FormGroup
 constructor( private form: FormBuilder){
  this.register= this.form.group({
    name:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required, Validators.minLength(8)]]
  })
 }
 hasErros(controlName:string, errorType: string
 ){
return this.register.get(controlName)?.hasError(errorType)&& this.register.get(controlName)?.touched }
enviar(){
  this.register.markAllAsTouched();

   // Si el formulario es válido, puedes proceder con el envío
   if (this.register.valid) {
     console.log('El formulario es válido. Realizando envío...');
     console.log(this.register.value); // Aquí puedes enviar los datos a tu servidor o realizar otras acciones
   } else {
     console.log('El formulario no es válido. Revise los campos resaltados en rojo.');
   }}



}

