# start-app
A simple translation of the elm-architecture to Javascript with React + Redux

## Why?

React is awesome. Redux is awesome. But the general pattern of using with top-level
reducers makes code less modular and harder to share.

There are patterns like the duck pattern that improve the situation. But with the elm-architecture
we have a much better and more scalable solution

Further, with flow types, we can get many of the same benefits of type-checking as Elm.

## Why not X?

There are some other projects with very similar goals. The problem I see with most of them,
however, is that they don't write idiomatic Javascript. Instead they involve too many helper
functions to make Javascript look like Elm.

Instead I want to build something that is much closer to the code React+Redux developers
write anyway. I'm choosing to be explicit rather than implicit.

## Point of Note

- The entire start-app.simple package itself is *TINY* (~25 LOC). With React and Redux we already
  have all the tools we need. Start-App doesn't even need React-Redux to work!

- The examples are a direct translation of the [elm-architecture tutorial](https://github.com/evancz/elm-architecture-tutorial.git).
  Read the full README there for a step-by-step explanation of the code.

- Every file exports variables with the same name, which adds predictability to module declarations.

- Every React View is stateless. All state is stored in the Redux store.

## Next

- Handle Side-effects in this translation of the elm-architecture. I'll probably rely on Promises/Observables for that.

- Some of the API may change slightly to be more idiomatic.

- Add examples of how to use elm-style modules in typical React apps.
