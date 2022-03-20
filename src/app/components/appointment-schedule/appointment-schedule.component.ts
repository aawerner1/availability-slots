import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import * as moment from 'moment';
import { AvailableSlots } from 'src/app/interfaces/availability-slots';

@Component({
  selector: 'app-appointment-schedule',
  templateUrl: './appointment-schedule.component.html',
  styleUrls: ['./appointment-schedule.component.scss']
})
export class AppointmentScheduleComponent {

	@Input() startDate: moment.Moment = moment();
	@Input() availabilitySlots: any = [];
	@Input() blankslateMessage = 'Ops! Não temos mais horários disponíveis para essa semana';
	@Output() changeDate = new EventEmitter<{startDate: string, endDate:string}>()
	dateFormatType = 'yyyy-MM-DD';
	selectedParent: number | null = null;
	selectedChild: number | null = null;
	hasEmpty  : AvailableSlots[] = [];
	loading: boolean = true;

	ngOnChanges(changes: SimpleChanges): void {
		if(changes['availabilitySlots']) {
			this.hasEmpty = []
			this.loading = false;
			this.availabilitySlots?.map((x: any) =>{ if(x.availableHours ) this.hasEmpty.push(...x.availableHours)})
		}
	}

	nextWeek() {
		this.resetData()
		let startDate = moment(this.availabilitySlots.at(-1).startDay).add(1, 'days').format(this.dateFormatType)
		let endDate =   moment(this.availabilitySlots.at(-1).startDay).add(4, 'days').format(this.dateFormatType)
		this.changeDate.emit({ startDate: startDate, endDate: endDate })
	}

	prevWeek() {
		this.resetData()
		let startDate =  moment(this.availabilitySlots.at(0).startDay).subtract(4, 'days').format(this.dateFormatType)
		let endDate =   moment(this.availabilitySlots.at(0).startDay).subtract(1, 'day').format(this.dateFormatType)
		this.changeDate.emit({ startDate: startDate, endDate: endDate })
	}

	resetData() {
		this.loading = true;
		this.selectedParent = null;
		this.selectedChild = null;
	}

	selectedItem(slotIndex: number, hourIndex: number) {
		this.selectedParent = slotIndex;
		this.selectedChild = hourIndex;
	}

	validatePastHours(date: string, hour: string) {
		if(moment(this.startDate).isSame(date)) {
			let currHour = moment(moment(), 'HH:mm');
			let optionHour = moment(hour, 'HH:mm')	
			return currHour.isBefore(optionHour);
		}

		return true;
	}

}

