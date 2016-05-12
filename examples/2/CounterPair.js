/* @flow */
import React from 'react'
import * as Counter from '../1/Counter'


// MODEL
export type Model = {top: Counter.Model, bottom: Counter.Model}
export const init = (top: Counter.Model, bottom: Counter.Model) => ({top, bottom})


// UPDATE
export type Action
  = {type: 'TOP', subAction: Counter.Action}
  | {type: 'BOTTOM', subAction: Counter.Action}
export const update = ({type, subAction}: Action) => (model: Model) =>
  type === 'TOP'
  ? Object.assign({}, model, {top: Counter.update(subAction)(model.top)})
  : type === 'BOTTOM'
  ? Object.assign({}, model, {bottom: Counter.update(subAction)(model.bottom)})
  : model


// VIEW
type Props = {dispatch: (action: Action) => void, model: Model }
export function View ({dispatch, model}: Props) {
  return (
    <div>
      <Counter.View
        dispatch={(subAction) => dispatch({type: 'TOP', subAction})}
        model={model.top}
        />
      <Counter.View
        dispatch={(subAction) => dispatch({type: 'BOTTOM', subAction})}
        model={model.bottom}
        />
    </div>
  )
}
