import { Company } from './Company'
import { Map } from './Map'
import { User } from './User'

const user = new User()
const company = new Company()

const customMap = new Map('map')

customMap.addMarker(user)
customMap.addMarker(company)
