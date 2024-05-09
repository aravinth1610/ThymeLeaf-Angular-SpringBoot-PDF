import {Component} from '@angular/core';
import {PdfServicesService} from './services/pdf-services.service';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent {
    title = 'angularFrontEnd';
    constructor(private pdfService : PdfServicesService) {}

    generatePdfMethod() {
        let userDetails = {
            name: 'John',
            age: 30,
            country: 'New York'
        }        
        this.pdfService.generatePdf(userDetails).subscribe(data => {
          
            console.log(data);
            let file = new Blob([data.body], { type: 'application/pdf' });
            var fileURL = URL.createObjectURL(file);
            window.location.href=fileURL;
        })
    }


}
