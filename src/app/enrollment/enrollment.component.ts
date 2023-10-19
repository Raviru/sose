import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {EnrollPopUpComponent} from "../enroll-pop-up/enroll-pop-up.component";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements AfterViewInit {

  constructor(private builder: FormBuilder,
              private service: AuthService,
              private toastr: ToastrService,
              private dialog: MatDialog) {
    let userEmail = sessionStorage.getItem('email');
    // @ts-ignore
    this.email_ = userEmail;

    this.LoadSubs();
  }

  // useremail: string;
  email_ : string;
  subList: any;
  dataSource: any;
  email:any;
  clickedItems: { [key: string]: boolean } = {};

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {

  }
  LoadSubs() {
    this.service.GetallSubs().subscribe(res => {
      this.subList = res;
      this.dataSource = new MatTableDataSource(this.subList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  displayedColumns: string[] = [ 'subjectCode', 'subjectName', 'commencement', 'action' ];

  createJson(email: string, subjectCode: string): any {
    return {
      email: email,
      subjectCode: subjectCode
    };
  }
  enrollUser(subjectCode:any) {
    let enrollData = this.createJson(this.email_, subjectCode);
    this.service.enrollStudent(enrollData).subscribe(result => {
      this.toastr.success('Error in Enrollment', 'Enrolled successfully')
    });
    this.clickedItems[subjectCode] = true;
   }


  OpenDialog(enteranimation: any, exitanimation: any, email: any, subjectCode:any) {
    const popup = this.dialog.open(EnrollPopUpComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: '30%',
      data: {
        email: email,
        subjectCode: subjectCode
      }
    });
    popup.afterClosed().subscribe(res => {
      this.LoadSubs();
    });
  }

}
