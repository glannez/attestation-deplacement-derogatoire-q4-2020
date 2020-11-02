import 'bootstrap/dist/css/bootstrap.min.css'

import '../css/main.css'

import './icons'
import './check-updates'
import { prepareForm } from './form-util'
import { warnFacebookBrowserUserIfNecessary } from './facebook-util'
import { addVersion } from './util'
import { createForm } from './form'

warnFacebookBrowserUserIfNecessary()
const person = prompt('Qui es tu? (guillaume, mathilde)', 'guillaume')
if (person != null) {
  const reason = prompt('Quel est ta raison? (achats, sante, famille, sport_animaux, enfants)', 'enfants')
  if (reason != null) {
    createForm(person, reason)
    prepareForm()
  }
}
addVersion(process.env.VERSION)
