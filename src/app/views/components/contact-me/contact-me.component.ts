
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports:[],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    AOS.init();
  }
}
