/* @flow */
import React from 'react'

// MODEL
export type Model = number
export const init = (i: Model) => i


// UPDATE
export type Action
  = {type: 'INCREMENT'}
  | {type: 'DECREMENT'}

export const update = ({type}: Action) => (model: Model) =>
  type === 'INCREMENT'
  ? model + 1
  : type === 'DECREMENT'
  ? model - 1
  : model


// VIEW
const countStyles = {
  fontSize: 20,
  fontFamilt: 'monospace',
  display: 'inline-block',
  width: 50,
  textAlign: 'center'
}

type Props = {dispatch: (action: Action) => void, model: Model }
export const View = ({dispatch, model}: Props) =>
  <div>
    <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
    <input value={model} disabled style={countStyles} />
    <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
  </div>
