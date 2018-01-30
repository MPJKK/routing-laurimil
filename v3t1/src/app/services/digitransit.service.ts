import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class DigitransitService {

  // apiUrl = 'https://api.digitransit.fi/graphiql/hsl';
  apiUrl= 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';
  pysakki='kamppi';
  lat:number;
  lon:number;
  direction:string;

  constructor(private http: HttpClient) { }

  getRoutes(){
    const body = `{
      stops(name:"${this.pysakki}") {
        name
        lat
        lon
        routes {
          id
          shortName
          longName
          gtfsId
          patterns {
            directionId
          }
        }
        
      }
    }`;

    const headers = {
      headers: new HttpHeaders().set('Content-Type','application/graphql')
    };

    interface ReittiData {
      data: Object;
    }

    return this.http.post<ReittiData>(this.apiUrl, body, headers);
  }

}
