/* global gapi */
import config from '../config.json'

export function checkAuth () {
  setTimeout(() => {
    gapi.auth.authorize({
      'client_id': config.client_id,
      'scope': config.scope,
      'immediate': true
    }, handleAuthResult)
  }, 200)
}

function handleAuthResult (authResult) {
  if (authResult && !authResult.error) {
    loadSheetsApi()
  } else {
    gapi.auth.authorize({
      'client_id': config.client_id,
      'scope': config.scope,
      'immediate': false
    }, handleAuthResult)
  }
}

function loadSheetsApi () {
  gapi.client
    .load(config.discovery_url)
    .then(displaySheet, err => {
      console.error('Error retrieving spredsheet:', err)
    })
}

function displaySheet () {
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: config.sheet,
    range: 'NEW u1.w1!A:Z'
  }).then(response => {
    const range = response.result
    if (range.values.length > 0) {
      console.log(range)
    } else {
      console.log('No data found.')
    }
  }, response => {
    console.error('Error: ' + response.result.error.message)
  })
}
