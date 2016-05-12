/* @flow */
import simple from '../../src/simple'
import * as CounterPair from './CounterPair'

simple({
  model: CounterPair.init(0, 0),
  update: CounterPair.update,
  view: CounterPair.View
}, document.getElementById('app'))
