import faker from 'faker'
import { Mappable } from './Map'

export class Company implements Mappable {
	companyName: string
	catchPhrase: string
	location: {
		lat: number
		lng: number
	}

	color: string = 'green'

	constructor() {
		this.companyName = faker.company.companyName()
		this.catchPhrase = faker.company.catchPhrase()
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		}
	}

	markerContent(): string {
		return `<div>
    <h1>Company: ${this.companyName}</h1>
    <h3>Catchprase: ${this.catchPhrase}</h3>
    </div>`
	}
}
