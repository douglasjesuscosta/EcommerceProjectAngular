import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public isProduction = environment.production;
  public currentVersion = environment.version;
  public enviromentName = environment.enviromentName;

  constructor() {}

  ngOnInit(): void {}
}
