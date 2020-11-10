import 'bootstrap/dist/css/bootstrap.min.css'

import '../css/main.css'

import './icons'
import './check-updates'
import { prepareForm } from './form-util'
import { warnFacebookBrowserUserIfNecessary } from './facebook-util'
import { addVersion } from './util'
import { createForm } from './form'
import userData from '../userData/userData.json'
import { $ } from './dom-utils'

warnFacebookBrowserUserIfNecessary()

const availableUsers = []
for (const user in userData) {
  availableUsers.push(user)
}
const allUsers = availableUsers.join(', ')
const person = prompt('Qui es tu? (' + allUsers + ')', 'guillaume')
if (person != null) {
  const reason = prompt('Quelle est ta raison? (achats, sante, famille, sport_animaux, enfants)', 'enfants')
  const autoGen = prompt('Direct au pdf? (oui, non)', 'oui')
  if (reason != null) {
    createForm(person, reason)
    prepareForm()
    if (autoGen === 'oui') {
      $('#generate-btn').click()
    }
  }
}
addVersion(process.env.VERSION)
