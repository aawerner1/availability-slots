import { AvailableSlots } from '../../interfaces/availability-slots';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, take } from 'rxjs';
import * as moment from 'moment';
import { ProfessionalService } from 'src/app/services/professional.service';
import { ProfessionalProfile } from 'src/app/interfaces/professional-profile';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.scss']
})
export class ProfessionalsComponent implements OnInit, OnDestroy {

	professionalProfile!: ProfessionalProfile;
	availabilitySlots: AvailableSlots[] = []
	loading: boolean = true;
	blankslateMessage!: string;
	startDate: moment.Moment = moment('2022-03-18');
	routeSub: Subscription;
	
	constructor(
		private professionalService: ProfessionalService,
		private route: ActivatedRoute) {
			this.routeSub = this.route.params.subscribe(params => {
				this.getProfessional(params['id']) 
			});
		}
	
	ngOnInit(): void {
		 
	}

	getProfessional(id: string) {
		this.professionalService.get(id)
			.pipe(take(1))
			.subscribe(
			(professionalProfile: ProfessionalProfile) => {
				this.professionalProfile = professionalProfile;
				this.blankslateMessage = `Ops! <b>${this.professionalProfile?.firstName}</b> não possui horários disponíveis para essa semana.`;
				this.getSchedule(moment('2022-03-18').format('yyyy-MM-DD'), moment('2022-03-22').format('yyyy-MM-DD'))
			}
		)
	}

	getSchedule(startDate: string, endDate: string) {
		this.professionalService.getSchedule(this.professionalProfile.id, startDate, endDate)
			.pipe(take(1))
			.subscribe((availabilitySlots: AvailableSlots[]) => { 
					this.availabilitySlots = availabilitySlots;
					this.loading = false;
			}
		)
	}

	ngOnDestroy(): void {
		this.routeSub.unsubscribe()
	}

}
