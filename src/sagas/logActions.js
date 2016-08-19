import { take, select } from 'redux-saga/effects'

function* sagaLogActions() {
  if (process.env.NODE_ENV === 'production') {
    return
  }

  while (true) { // eslint-disable-line no-constant-condition
    const action = yield take('*')
    const state = yield select()

    console.info('action', action, 'state', state)
  }
}


export default sagaLogActions
