/* @flow */
import simple from '../../src/simple'
import * as Counter from './Counter'

simple({
  model: Counter.init(0),
  update: Counter.update,
  view: Counter.View
}, document.getElementById('app'))
