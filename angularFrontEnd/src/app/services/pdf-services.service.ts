import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, map} from 'rxjs';
const httpOptions={
  'headers' : new HttpHeaders({
    'Content-Type' : 'application/json'
  }),
  'responseType' : 'arraybuffer' as 'json'
}
@Injectable({providedIn: 'root'})
export class PdfServicesService {

    constructor(private http : HttpClient) {}

    generatePdf(userDetails : any): Observable < any | HttpErrorResponse > { 
        const headersToSend = new HttpHeaders().set('responseType', 'arraybuffer/json')
        return this.http.post('http://localhost:8083/testapp/getPdf', userDetails, {'responseType' : 'arraybuffer' as 'json',observe:'response'});
    }

}
