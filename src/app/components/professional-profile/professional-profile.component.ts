import { ProfessionalProfile } from './../../interfaces/professional-profile';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-profile',
  templateUrl: './professional-profile.component.html',
  styleUrls: ['./professional-profile.component.scss']
})
export class ProfessionalProfileComponent implements OnInit {

  numberOfStars = new Array(5);
  @Input() profile!: ProfessionalProfile;
  constructor() { }

  ngOnInit() {}

}
