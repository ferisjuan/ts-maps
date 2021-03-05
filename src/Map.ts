export class Map {
	private googleMap: google.maps.Map

	constructor(private divId: string) {
		this.divId = divId

		this.googleMap = new google.maps.Map(document.getElementById(this.divId), {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0,
			},
		})
	}
}
