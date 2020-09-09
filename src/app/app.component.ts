import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FindThyCity';
  httpClient: any;
  states: any;
  cityName = '';
  cities = [];
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  ngOnInit(){
    this.httpClient.get('assets/cities.json').subscribe(data => {

      if (data){
        this.states = Object.entries(data);
        this.states.forEach((state) => {
          state[1].forEach(city => this.cities.push(city + ', ' + state[0]));
        });
      }
    });
  }
}
