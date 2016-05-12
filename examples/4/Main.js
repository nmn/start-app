/* @flow */
import simple from '../../src/simple'
import * as CounterList from './CounterList'

simple({
  model: CounterList.init([0]),
  update: CounterList.update,
  view: CounterList.View
}, document.getElementById('app'))
