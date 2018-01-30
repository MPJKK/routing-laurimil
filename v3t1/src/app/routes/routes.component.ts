import { Component, OnInit } from '@angular/core';
import { DigitransitService } from '../services/digitransit.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
  
})

export class RoutesComponent implements OnInit {
  pysakki: string;
  reittiData: any;
  

  constructor(private digitransitService: DigitransitService) { }

  ngOnInit() {
    
    this.digitransitService.getRoutes().subscribe(response =>{
      this.reittiData = response.data['stops'];
      this.digitransitService.lat =response.data['stops'][0].lat;
      this.digitransitService.lon =response.data['stops'][0].lon;

      console.log(this.reittiData);

    });
  }

}
