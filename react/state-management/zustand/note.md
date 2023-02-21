# Zustand

- 단순화된 flux 원리를 사용.
- hook에 기반한 API

```
npm install zustand # or yarn add zustand
```

## First create a store

```js
import { create } from "zustand";

interface BearType {
  bears: number;
  increasePopulation: () => void;
}

const useBearStore =
  create <
  BearType >
  ((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
  }));

export default useBearStore;
```

## Then bind your components, and that's it!

```js
function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} around here ...</h1>;
}

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>one up</button>;
}
```

**_Why zustand over redux?_**

- Simple and un-opinionated
- Makes hooks the primary means of consuming state
- Doesn't wrap your app in context providers
- Can inform components transiently (without causing render)

**_Why zustand over context?_**

- Less boilerplate
- Renders components only on changes
- Centralized, action-based state management

## Recipes

### Fetching everything

You can, but bear in mind that it will cause the component to update on every state change!

```js
const state = useBearStore();
```

### Selecting multiple state slices

It detects changes with strict-equality (old === new) by default, this is efficient for atomic state picks.

```js
const nuts = useBearStore((state) => state.nuts);
const honey = useBearStore((state) => state.honey);
```

If you want to construct a single object with multiple state-picks inside, similar to redux's mapStateToProps, you can tell zustand that you want the object to be diffed shallowly by passing the shallow equality function.

```js
import { shallow } from "zustand/shallow";

// Object pick, re-renders the component when either state.nuts or state.honey change
const { nuts, honey } = useBearStore(
  (state) => ({ nuts: state.nuts, honey: state.honey }),
  shallow
);

// Array pick, re-renders the component when either state.nuts or state.honey change
const [nuts, honey] = useBearStore(
  (state) => [state.nuts, state.honey],
  shallow
);

// Mapped picks, re-renders the component when state.treats changes in order, count or keys
const treats = useBearStore((state) => Object.keys(state.treats), shallow);
```

For more control over re-rendering, you may provide any custom equality function.

```js
const treats = useBearStore(
  (state) => state.treats,
  (oldTreats, newTreats) => compare(oldTreats, newTreats)
);
```

## Overwriting state

The set function has a second argument, false by default. Instead of merging, it will replace the state model. Be careful not to wipe out parts you rely on, like actions.

```js
import omit from "lodash-es/omit";

const useFishStore = create((set) => ({
  salmon: 1,
  tuna: 2,
  deleteEverything: () => set({}, true), // clears the entire store, actions included
  deleteTuna: () => set((state) => omit(state, ["tuna"]), true),
}));
```

## Async actions

Just call set when you're ready, zustand doesn't care if your actions are async or not.

```js
const useFishStore = create((set) => ({
  fishies: {},
  fetch: async (pond) => {
    const response = await fetch(pond);
    set({ fishies: await response.json() });
  },
}));
```
