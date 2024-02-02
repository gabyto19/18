import { Component, ElementRef, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'private';
  constructor(private renderer: Renderer2, private el: ElementRef) { }


  ngOnInit() {
    const width = window.screen.width-8;
    const height = window.screen.height-122;
    const element = this.el.nativeElement.querySelector('#main');
    // Apply styles dynamically
    this.renderer.setStyle(element, 'height', height+'px');
    this.renderer.setStyle(element, 'width', width+'px');

  }



}
