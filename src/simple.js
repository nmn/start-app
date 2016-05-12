/* @flow */
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

type Dispatch<A> = (action: A) => void
type SimpleConfig<A, M> = {
  model: M,
  update: (action: A) => (model: M) => M,
  view: ReactClass<{dispatch: Dispatch<A>, model: M}>
}

export default function simple<A, M> ({model, update, view: View}: SimpleConfig<A, M>, element: HTMLElement) {
  const store = createStore((state, action) => update(action)(state), model)
  const dispatch = (action: A) => store.dispatch(action)

  store.subscribe(() => {
    const currentModel = store.getState()
    ReactDOM.render(<View dispatch={dispatch} model={currentModel} />, element)
  })

  ReactDOM.render(<View dispatch={dispatch} model={model} />, element)
}
