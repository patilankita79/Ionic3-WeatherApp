import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from  '@ionic/storage'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weather:any;

  //object
  location: {
    city:string,
    state: string
  }

  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider, private storage: Storage) {
      //store the location in Ionic storage similar to HTML5 local storage
  }

  //Similar to ngOnInit() in Angular 2 or 4
  ionViewWillEnter(){

    this.storage.get('location').then((val) => {
      if(val != null) {
          this.location = JSON.parse(val);
      } else {
        this.location = {
          city: 'Miami',
          state: 'FL'
        }
      }

      this.weatherProvider.getWeather(this.location.city, this.location.state).subscribe(
        weather =>{
          //console.log(JSON.stringify(weather));
          this.weather = weather.current_observation;
        }
      );

    });
      /* this.location = {
        city: 'Miami',
        state: 'FL'
      }
 */
       /* this.weatherProvider.getWeather(this.location.city, this.location.state).subscribe(
        weather =>{
          //console.log(JSON.stringify(weather));
          this.weather = weather.current_observation;
        }
      ); */
  }

}
