import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 

  }
  apiurl='http://localhost:3000/user';

  RegisterUser(inputdata:any){
    return this.http.post(this.apiurl+'/register',inputdata)
  }
  submitAdvice(studentConcern:any){
    return this.http.post('http://localhost:3004/advice/sendEmails',studentConcern)
  }
  

  GetUserbyCode(id:any, email:any){
    return this.http.get(this.apiurl+'/login');
  }

  loginUser(data:any){
    return this.http.post(this.apiurl+'/login', data);
  }

  Getall(){
    return this.http.get(this.apiurl+'/all');
  }
  updateuser(id:any,inputdata:any){
    return this.http.put(this.apiurl+'/'+id,inputdata);
  }
  getuserrole(){
    return this.http.get('http://localhost:3000/role');
  }
  isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }
  getrole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
  GetAllCustomer(){
    return this.http.get('http://localhost:3000/customer');
  }
  GetAllSubjects(){
    return this.http.get(this.apiurl+'/subjects');
  }
  Getaccessbyrole(role:any,menu:any){
    return this.http.get('http://localhost:3000/roleaccess?role='+role+'&menu='+menu)
  }
}
