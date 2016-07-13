/* global gapi */
import config from '../config.json'

export default function loadSheetsApi (next) {
  gapi.client
    .load(config.discovery_url)
    .then(() => {
      displaySheet(next)
    })
}

function displaySheet (next) {
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: config.sheet,
    range: 'NEW u1.w1!A:Z'
  })
    .then(response => {
      console.log(response)
      if (response.result.values.length === 0) {
        return next('No results', null)
      }
      return next(null, response.result.values)
    }, response => {
      console.error('Error: ' + response.result.error.message)
    })
}
