import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: any;
  constructor(private http: HttpClient){
    this.http.get('http://localhost:8000').subscribe((a:any)=>{console.log(a); this.title=a.response})
  }
}
