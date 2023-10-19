import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {ToastrService} from "ngx-toastr";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-enroll-pop-up',
  templateUrl: './enroll-pop-up.component.html',
  styleUrls: ['./enroll-pop-up.component.css']
})
export class EnrollPopUpComponent implements OnInit {

  constructor(private builder: FormBuilder, private service: AuthService, private toastr: ToastrService,
              private dialogref: MatDialogRef<EnrollPopUpComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  subjects = this.data.subjects;

  ngOnInit(): void {
    if (this.data.usercode != '' && this.data.usercode != null) {
      // this.loaduserdata(this.data.usercode, this.data.password);
    }
  }
  rolelist: any;
  editdata: any;

  registerform = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control(''),
    password: this.builder.control(''),
    email: this.builder.control(''),
    gender: this.builder.control('male'),
    role: this.builder.control('', Validators.required),
    isactive: this.builder.control(false)
  });

  // loaduserdata(code: any, password: any) {
  //   this.service.GetUserbyCode(code, password).subscribe(res => {
  //     this.editdata = res;
  //     console.log(this.editdata);
  //     this.registerform.setValue({
  //       id: this.editdata.id, name: this.editdata.name,
  //       password: this.editdata.password, email: this.editdata.email, gender: this.editdata.gender,
  //       role: this.editdata.role, isactive: this.editdata.isactive
  //     });
  //   });
  // }

}
