import { AvailableSlots } from './../interfaces/availability-slots';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProfessionalProfile } from '../interfaces/professional-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

 	constructor(private http: HttpClient) { }

	get(id: string): Observable<ProfessionalProfile> {
		return this.http.get<ProfessionalProfile>(`${environment.URL}/professional/${id}`)
	}

	getSchedule(professionalID: string, startDate: string, endDate: string): Observable<AvailableSlots[]> {
		return this.http.get<AvailableSlots[]>(`${environment.URL}/professional/${professionalID}/availabilitySlots?startDate=${startDate}&endDate=${endDate}`)
			.pipe(map(() => WEEK_SCHEDULE[startDate] ? WEEK_SCHEDULE[startDate]() : WEEK_SCHEDULE['2022-04-07']()))
	}
}

 
const WEEK_SCHEDULE: any = {
	'2022-03-18': () => {
		return [
			{
				'id': '9310938129834920471',
				"startDay": "2022-03-18",
				"availableHours": [
					{
						'id': '9310938129834920471',
						'hour': '08:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '14:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '18:00',
					}
				]
			},
			{
				'id': '9310938129834920471',
				"startDay": "2022-03-19",
				"availableHours": []
			},
			{
				'id': '9310938129834920471',
				"startDay": "2022-03-20",
				"availableHours": [
					{
						'id': '9310938129834920471',
						'hour': '08:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '09:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '18:00',
					}
			
				]
			},
			{
				'id': '9310938129834920471',
				"startDay": "2022-03-21",
				"availableHours": [
					{
						'id': '9310938129834920471',
						'hour': '08:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '14:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '18:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '22:00',
					}
				]
			}
		];
	},
	'2022-03-22': () => { 
		return [
			{
				'id': '9310938129834920471',
				"startDay": "2022-03-22",
				"availableHours": [
					{
						'id': '9310938129834920471',
						'hour': '15:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '17:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '18:00',
					}
				]
			},
			{
				'id': '9310938129834920471',
				"startDay": "2022-03-23",
				"availableHours": [
					{
						'id': '9310938129834920471',
						'hour': '08:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '09:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '10:00',
					},
				]
			},
			{
				'id': '9310938129834920471',
				"startDay": "2022-03-24",
				"availableHours": [
					{
						'id': '9310938129834920471',
						'hour': '07:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '09:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '10:00',
					}
				]
			},
			{
				'id': '9310938129834920471',
				"startDay": "2022-03-25",
				"availableHours": [
					{
						'id': '9310938129834920471',
						'hour': '07:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '09:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '10:00',
					}
				]
			}
		];
	},
	'2022-03-26': () => {
		return [
			{
				'id': '9310938129834920471',
				"startDay": "2022-03-26",
				"availableHours": null
			},
			{
				'id': '9310938129834920471',
				"startDay": "2022-03-27",
				"availableHours": null
			},
			{
				'id': '9310938129834920471',
				"startDay": "2022-03-28",
				"availableHours": null
			},
			{
				'id': '9310938129834920471',
				"startDay": "2022-03-29",
				"availableHours": null
			}
		];
	},
	'2022-03-30': () => { 
		return [
			{
				'id': '9310938129834920471',
				"startDay": "2022-03-30",
				"availableHours": [
					{
						'id': '9310938129834920471',
						'hour': '20:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '21:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '22:00',
					}
				]
			},
			{
				'id': '9310938129834920471',
				"startDay": "2022-03-31",
				"availableHours": [
					{
						'id': '9310938129834920471',
						'hour': '17:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '18:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '19:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '20:00',
					}
				]
			},
			{
				'id': '9310938129834920471',
				"startDay": "2022-04-01",
				"availableHours": [
					{
						'id': '9310938129834920471',
						'hour': '08:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '09:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '10:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '15:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '16:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '18:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '19:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '20:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '21:00',
					}
				]
			},
			{
				'id': '9310938129834920471',
				"startDay": "2022-04-02",
				"availableHours": null
			}
		];
	},
	'2022-04-03': () => { 
		return [
			{
				'id': '9310938129834920471',
				"startDay": "2022-04-03",
				"availableHours": null
			},
			{
				'id': '9310938129834920471',
				"startDay": "2022-04-04",
				"availableHours": [
					{
						'id': '9310938129834920471',
						'hour': '08:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '14:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '18:00',
					}
				]
			},
			{
				'id': '9310938129834920471',
				"startDay": "2022-04-05",
				"availableHours": [
					{
						'id': '9310938129834920471',
						'hour': '14:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '15:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '16:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '17:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '18:00',
					}
				]
			},
			{
				'id': '9310938129834920471',
				"startDay": "2022-04-06",
				"availableHours": [
					{
						'id': '9310938129834920471',
						'hour': '06:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '07:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '08:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '09:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '10:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '11:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '12:00',
					}
				]
			}
		];
	},
	'2022-04-07': () => {
		return [
			{
				'id': '9310938129834920471',
				"startDay": "2022-04-07",
				"availableHours": [
					{
						'id': '9310938129834920471',
						'hour': '10:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '11:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '14:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '15:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '16:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '18:00',
					}
				]
			},
			{
				'id': '9310938129834920471',
				"startDay": "2022-04-08",
				"availableHours": [
					{
						'id': '9310938129834920471',
						'hour': '18:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '19:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '20:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '21:00',
					}
				]
			},
			{
				'id': '9310938129834920471',
				"startDay": "2022-04-09",
				"availableHours": null
			},
			{
				'id': '9310938129834920471',
				"startDay": "2022-04-10",
				"availableHours": [
					{
						'id': '9310938129834920471',
						'hour': '16:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '17:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '18:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '19:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '20:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '21:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '22:00',
					},
					{
						'id': '9310938129834920471',
						'hour': '23:00',
					}
				]
			}
		];
	}
}