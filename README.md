# TMNT: Turtle Time 🐢 (Props Fun)

This small application demonstrates React prop passing using a TMNT theme.

Through `console.logs()` and clear examples, we'll see how data flows between components and understand the props object structure.

## Setup

Clone down this repo and run the following to get up and running:

```bash
npm i
npm start
```

Open your browser to [localhost:5173](http://localhost:5173) to see the application.

## Understanding Props in Our Application

React components are JavaScript functions that accept a single parameter called `props`. Just like passing arguments between regular JavaScript functions, React components pass data through props from parent to child components.

In our application, we have three components that demonstrate this data flow:

- `App` (Parent) - The top-level component that holds and manages all turtle data.
- `TurtleList` (Intermediate) - Receives turtle data from `App` component and distributes it to individual `Turtle` components.
- `Turtle` (Child) - Displays information for a single turtle using the data it receives.

## Data Flow Example

When `App` renders `TurtleList`, it passes data like this:

```jsx
<TurtleList turtles={turtles} status={status} />
```

This creates a `props` object in `TurtleList` containing:

- A `turtles` array with each turtle's information.
- A `status` object tracking each turtle's current activity.

Here's what the `TurtleList` component receives and logs to the console:

```jsx
const props = {
  turtles: [
    { id: 1, name: 'Leo', color: 'RoyalBlue' },
    { id: 2, name: 'Raph', color: 'FireBrick' },
    { id: 3, name: 'Don', color: 'DarkOrchid' },
    { id: 4, name: 'Mike', color: 'DarkOrange' },
  ],
  status: {
    Leo: 'Ready',
    Raph: 'Training',
    Don: 'Inventing',
    Mike: 'Gaming',
  },
};
```

The `TurtleList` component then uses `map()` to create multiple `Turtle` components, each receiving specific data:

```jsx
<Turtle turtle={turtle} allTurtles={props.turtles} status={props.status} />
```

Each `Turtle` component receives three props:

- Individual turtle data through the `turtle` prop.
- The complete `turtles` array through the `allTurtles` prop.
- The complete `status` object containing all turtles' statuses.

Here's an example of the props object that each `Turtle` component receives (using Leo's data):

```jsx
const props = {
  turtle: { id: 1, name: 'Leo', color: 'RoyalBlue' },
  allTurtles: [
    /* full array of all turtle objects */
  ],
  status: {
    /* object containing status for all turtles */
  },
};
```

## Key Concepts

- Props are read-only - components cannot modify the props they receive.
- Props can contain any data type - arrays, objects, strings, etc.
- Each prop becomes a property of the props object.
- `console.logs()` help visualize the data available to each component.

By examining the logs in our application, we can trace how data flows from `App` through `TurtleList` and finally to each `Turtle` component, demonstrating React's unidirectional data flow pattern.

## Bonus

Take a look at the [Turtle](./src/components/Turtle/Turtle.jsx) component to explore three different ways of handling props in React components. Each approach achieves the same result but demonstrates different JavaScript and React patterns:

- Try uncommenting each version one at a time.
- Compare how the syntax changes but the functionality stays the same.
- Notice how the console logs help you understand what data is available in each approach.
- Consider which style feels most readable and maintainable to you.

This exercise will help you understand the evolution of props handling in React, from basic object access to modern destructuring patterns.
