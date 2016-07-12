/* global gapi */
import config from '../config.json'

export default function login (next) {
  // Temp: needs a slight timeout to avoid gapi being undefined
  setTimeout(() => {
    checkAuth(next)
  }, 200)
}

function checkAuth (next) {
  gapi.auth.authorize({
    'client_id': config.client_id,
    'scope': config.scope,
    'immediate': true
  }, (res) => {
    handleAuthResult(res, next)
  })
}

// TODO: fail if auth denied by user
function handleAuthResult (authResult, next) {
  if (authResult && !authResult.error) {
    next()
  } else {
    gapi.auth.authorize({
      'client_id': config.client_id,
      'scope': config.scope,
      'immediate': false
    }, (res) => {
      handleAuthResult(res, next)
    })
  }
}
