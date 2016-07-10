/* global gapi */

const config = {
  CLIENT_ID: '63311552019-vka9pen5tcldl2hhh70mpf8k4oroit3g.apps.googleusercontent.com',
  SCOPE: 'https://www.googleapis.com/auth/spreadsheets.readonly',
  SHEET: '1vD-7Oq3YCSocZqrJEfTEmsG45sX8hYo_M8IoZfxSLDc',
  DISCOVERY_URL: 'https://sheets.googleapis.com/$discovery/rest?version=v4'
}

export function checkAuth () {
  setTimeout(() => {
    gapi.auth.authorize({
      'client_id': config.CLIENT_ID,
      'scope': config.SCOPE,
      'immediate': true
    }, handleAuthResult)
  }, 100)
}

function handleAuthResult (authResult) {
  if (authResult && !authResult.error) {
    console.log('AUTH')
    loadSheetsApi()
  } else {
    gapi.auth.authorize({
      'client_id': config.CLIENT_ID,
      'scope': config.SCOPE,
      'immediate': false
    }, handleAuthResult)
  }
}

function loadSheetsApi () {
  gapi.client
    .load(config.DISCOVERY_URL)
    .then(displaySheet)
}

function displaySheet () {
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: config.SHEET,
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
