import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.css']
})
export class AdviceComponent {

  constructor(private builder: FormBuilder, private service: AuthService, private router: Router,
    private toastr: ToastrService) {

  }

  adviceForm = this.builder.group({
    studentEmail: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    message: this.builder.control('', Validators.compose([Validators.required])),
    topic: this.builder.control('', Validators.compose([Validators.required]))
  });

  submitConcern() {
    if (this.adviceForm.valid) {
      this.service.submitAdvice(this.adviceForm.value).subscribe(result => {
        this.toastr.success('Something went wrong with your request','Concern submitted successfully')
        // this.router.navigate(['login'])
      });
    } else {
      this.toastr.warning('Please enter a valid data')
    }
  }
  

}

