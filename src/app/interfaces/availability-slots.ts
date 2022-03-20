export interface AvailableSlots {
    id: string,
	startDay: string,
	availableHours: AvailableHours[]
}

export interface AvailableHours {
    id: string,
	hour: string,
}