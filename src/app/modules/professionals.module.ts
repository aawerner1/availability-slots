import { ProfessionalsComponent } from '../pages/professionals/professionals.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentScheduleComponent } from 'src/app/components/appointment-schedule/appointment-schedule.component';
import { ProfessionalProfileComponent } from 'src/app/components/professional-profile/professional-profile.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {path: '', redirectTo: '1', pathMatch: 'full'},
      {path: ':id', component: ProfessionalsComponent},
    ]),
  ],
  declarations: [
    ProfessionalsComponent,
    ProfessionalProfileComponent,
    AppointmentScheduleComponent
  ],
  
})
export class ProfessionalsModule { }
