import { Component, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { FormBuilder, Validators, FormControl} from "@angular/forms";
import {DeleteConfirmPopUpComponent} from "../delete-confirm-pop-up/delete-confirm-pop-up.component";
import {ConfrimationDialogService} from "../confrimation-dialog.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})


export class CustomerComponent {
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;
  constructor(private builder: FormBuilder,
              private  service: AuthService,
              private toastr:ToastrService,
              private router: Router,
              private ConfrimationDialogService: ConfrimationDialogService) {
    // @ts-ignore
    let userEmail=sessionStorage.getItem('email');
    // @ts-ignore
    this.email = userEmail;
    var isAdmitted = sessionStorage.getItem('isAdmitted');
    console.log(isAdmitted+"qwf");
    this.LoadAdmissionDetails(this.toJSON(userEmail));
    if (isAdmitted == "true"){
      this._isAdmitted = true;
      this.admissionForm.disable();
      console.log(this._isAdmitted);
      console.log("insode if");
    }
    else {
      this._isAdmitted = false;
      console.log(this._isAdmitted);
      console.log("outide if");
    }
  }

  _isAdmitted: boolean;
  email:string;
  major:any;
  degree:any;
  commencement:any;
  haveedit = false;
  haveadd = false;
  havedelete = false;
  response:any;


  toJSON(data:any) {
    return {"email":data};
  }
  LoadAdmissionDetails(userEmail:any) {
    this.service.GetAdmissionDetails(userEmail).subscribe(res => {
      this.response = res;
      this.email = this.response['studentEmail'];
      this.major = this.response['major'];
      this.degree = this.response['degree'];
      this.commencement = this.response['commencement'];
    });
  }

  admissionForm = this.builder.group({
    // studentEmail: this.builder.control('', Validators.compose([Validators.required])),
    studentEmail: [sessionStorage.getItem('email'), [Validators.required]],
    major: ['', [Validators.required]],
    // major: this.builder.control('', Validators.compose([Validators.required])),
    // degree: this.builder.control('', Validators.compose([Validators.required])),
    degree: ['', [Validators.required]],
    // commencement: this.builder.control('', Validators.compose([Validators.required]))
    commencement : ['', [Validators.required]]
  });

  async deleteAdmission() {
    const isConfirmed = await this.ConfrimationDialogService.openConfirmationDialog();
    if (isConfirmed) {
      this.service.deleteAdmission(JSON.stringify((this.toJSON(this.email)))).subscribe(result => {
        this.clearFormFields();
        this.toastr.success('Something went wrong with your request', 'Admission deleted successfully')
        this.router.navigate(['customer'])
      });
    }
  }

  deleteAdmission2(){
    this.service.deleteAdmission(this.email).subscribe(result => {
      this.toastr.success('Something went wrong with your request','Admission deleted successfully')
      this.router.navigate(['customer'])
      this.clearFormFields();
    });
  }

  createAdmission() {
    if (this.admissionForm.valid) {
      this.service.createAdmission(this.admissionForm.value).subscribe(result => {
        this.toastr.success('Something went wrong with your request','Admission updated successfully')
        this.router.navigate(['customer'])
        this.admissionForm.disable();
        this._isAdmitted = !this._isAdmitted
        this.LoadAdmissionDetails(this.toJSON(sessionStorage.getItem('email')));
      });
    } else {
      this.toastr.warning('Please enter a valid data')
    }
  }

  clearFormFields() {
    this.admissionForm.setValue({
      studentEmail: sessionStorage.getItem('email'),
      major: '',
      degree: '',
      commencement: ''
    });
  }

  updatecustomer(code: any) {
    if(this.haveedit){
       this.toastr.success('Success')
    }else{
      this.toastr.warning("You don't have access for Edit")
    }
  }
  removecustomer(code: any) {
    if(this.havedelete){
      this.toastr.success('Success')
   }else{
     this.toastr.warning("You don't have access for Delete")
   }
  }
  addcustomer() {
    if(this.haveadd){
      this.toastr.success('Success')
   }else{
     this.toastr.warning("You don't have access for Create")
   }
  }

}
