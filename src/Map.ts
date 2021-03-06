interface Mappable {
	location: {
		lat: number
		lng: number
	}
}

export class Map {
	private googleMap: google.maps.Map

	constructor(private divId: string) {
		this.googleMap = new google.maps.Map(document.getElementById(this.divId), {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0,
			},
		})
	}

	addMarker(mappable: Mappable) {
		new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: mappable.location.lat,
				lng: mappable.location.lng,
			},
		})
	}
}
