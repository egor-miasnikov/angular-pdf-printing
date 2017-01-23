import { Component, OnInit } from '@angular/core';
declare let jsPDF;

@Component({
  selector: 'app-basic-pdf-print',
  templateUrl: './basic-pdf-print.component.html',
  styleUrls: ['./basic-pdf-print.component.css']
})
export class BasicPdfPrintComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onClick(){
    let doc = new jsPDF();
    doc.text(20, 20, 'Hello world.');
    doc.save('Test.pdf');
  }

}
