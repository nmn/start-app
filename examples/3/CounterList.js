/* @flow */
import React from 'react'
import * as Counter from '../1/Counter'


// MODEL
export type Model = Array<Counter.Model>
export const init = (arr: Model) => arr.map(Counter.init)


// UPDATE
export type Action
  = {type: 'INSERT'}
  | {type: 'REMOVE', index: number}
  | {type: 'MODIFY', index: number, subAction: Counter.Action}

export const update = (action: Action) => (model: Model) => {
  switch (action.type) {
    case 'INSERT':
      return [Counter.init(0)].concat(model)
    case 'REMOVE':
      const {index} = action
      return model.filter((_, i) => i !== index)
    case 'MODIFY':
      const {subAction} = action
      return model.map((old, i) =>
          i === index
          ? Counter.update(subAction)(old)
          : old
        )
    default:
      return model
  }
}


// VIEW
type Props = {dispatch: (action: Action) => void, model: Model }

export const View = ({dispatch, model}: Props) =>
  <div>
    <button onClick={() => dispatch({type: 'INSERT'})}>INSERT</button>
    {model.map((m: Counter.Model, index: number) =>
      <div key={'c' + index}>
        <Counter.View
          dispatch={(subAction) => dispatch({type: 'MODIFY', index, subAction})}
          />
        <button onClick={() => dispatch({type: 'REMOVE', index})}>REMOVE</button>
      </div>
    )}
  </div>
