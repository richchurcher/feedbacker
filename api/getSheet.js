//import gapi from 'googleapis'

//const CLIENT_ID = '63311552019-vka9pen5tcldl2hhh70mpf8k4oroit3g.apps.googleusercontent.com'
//const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']

//export function checkAuth () {
  //gapi.auth.authorize({
    //'client_id': CLIENT_ID,
    //'scope': SCOPES.join(' '),
    //'immediate': true
  //}, handleAuthResult)
//}

//function handleAuthResult (authResult) {
  //const authorizeDiv = document.getElementById('authorize-div')
  //if (authResult && !authResult.error) {
    //// Hide auth UI, then load client library.
    //authorizeDiv.style.display = 'none'
    //loadSheetsApi()
  //} else {
    //// Show auth UI, allowing the user to initiate authorization by
    //// clicking authorize button.
    //authorizeDiv.style.display = 'inline'
  //}
//}

/**
 * Initiate auth flow in response to user clicking authorize button.
 *
 * @param {Event} event Button click event.
 */
////(function handleAuthClick (event) {
  ////gapi.auth.authorize({
    ////client_id: CLIENT_ID,
    ////scope: SCOPES,
    ////immediate: false
  ////}, handleAuthResult)

  ////return false
////})()

/**
 * Load Sheets API client library.
 */
//function loadSheetsApi () {
  //const discoveryUrl = 'https://sheets.googleapis.com/$discovery/rest?version=v4'
  //gapi.client
    //.load(discoveryUrl)
    //.then(listMajors)
//}

/**
 * Print the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
//function listMajors () {
  //gapi.client.sheets.spreadsheets.values.get({
    //spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
    //range: 'Class Data!A2:E'
  //}).then(function (response) {
    //const range = response.result
    //if (range.values.length > 0) {
      //appendPre('Name, Major:')
      //for (let i = 0; i < range.values.length; i++) {
        //const row = range.values[i]
        //// Print columns A and E, which correspond to indices 0 and 4.
        //appendPre(row[0] + ', ' + row[4])
      //}
    //} else {
      //appendPre('No data found.')
    //}
  //}, function (response) {
    //appendPre('Error: ' + response.result.error.message)
  //})
//}

/**
 * Append a pre element to the body containing the given message
 * as its text node.
 *
 * @param {string} message Text to be placed in pre element.
 */
//function appendPre (message) {
  //const pre = document.getElementById('output')
  //const textContent = document.createTextNode(message + '\n')
  //pre.appendChild(textContent)
//}
