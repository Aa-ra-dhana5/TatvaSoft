import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ ReactiveFormsModule ,CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
      userForm: FormGroup;
   
      
      constructor(private fb: FormBuilder){
        this.userForm = this.fb.group({
          name:['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
        });
      }

      submit(){
        if(this.userForm.valid){
          console.log(this.userForm.value);
          alert(`Submitted: ${JSON.stringify(this.userForm.value)}`);
          this.userForm.reset();
        }
      }
}
