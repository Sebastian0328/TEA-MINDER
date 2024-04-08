import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf, ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login:FormGroup
  constructor( private form: FormBuilder){
   this.login= this.form.group({
     email:['',[Validators.required,Validators.email]],
     password:['',[Validators.required, Validators.minLength(8)]]
   })
  }
  hasErros(controlName:string, errorType: string
  ){
 return this.login.get(controlName)?.hasError(errorType)&& this.login.get(controlName)?.touched }
 enviar(){
   // Marcar todos los campos como tocados para que se muestren los errores al enviar
   this.login.markAllAsTouched();

   // Si el formulario es válido, puedes proceder con el envío
   if (this.login.valid) {
     console.log('El formulario es válido. Realizando envío...');
     console.log(this.login.value); // Aquí puedes enviar los datos a tu servidor o realizar otras acciones
   } else {
     console.log('El formulario no es válido. Revise los campos resaltados en rojo.');
   }}


 }
