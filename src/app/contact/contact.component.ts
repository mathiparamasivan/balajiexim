import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  name: string;
  email: string;
  address: string;
  details: string;
  endpoint: string;
  status:boolean;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  model = new Contact();
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.endpoint = "http://localhost/contact.php";
    this.status = false;
  }

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.address}. My details is ${this.details}`;
    //alert(allInfo); 
    // this.sendMail((status) => {
    //   console.log(status);
    // });
    this.sendMail();
  }

  sendMail() {
    const body = {name: this.name, email: this.email, address: this.address, details: this.details};
    // this.http.post(this.endpoint, body).subscribe(
    //   (response: any) => {
    //     callback(response.status);
    //     localStorage.setItem('token', response.token);
    //   }
    // );
    this.http.post<Contact>(this.endpoint,body,this.httpOptions).subscribe(data=>this.model=data);
    if(this.model.resp=="true")
      alert("Mail Sent...you will hear from us shortly");
    else
      alert("Mail cannot be sent...try again later");
  }
  
}
