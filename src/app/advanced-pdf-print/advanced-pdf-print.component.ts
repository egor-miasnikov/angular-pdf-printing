import { Component, ElementRef, AfterViewInit} from '@angular/core';
declare let jsPDF;

@Component({
  selector: 'app-advanced-pdf-print',
  templateUrl: './advanced-pdf-print.component.html',
  styleUrls: ['./advanced-pdf-print.component.css']
})
export class AdvancedPdfPrintComponent extends AfterViewInit{
  constructor(private elementRef: ElementRef) {
    super()
  }

  ngAfterViewInit(){}

  onClick(){
    let doc = new jsPDF('p', 'px', 'a4');
    let options = {
      pagesplit: true
    };
    doc.fromHTML(this.elementRef.nativeElement, 0, 0, options, ()=>{
      doc.save('Test.pdf');
    });
  }
}
