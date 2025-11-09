# Component Structure

```text
App.jsx       -> Renders <Dashboard />
Dashboard.jsx -> Owns count & count2, shows total + reset
Counter.jsx   -> Displays count, +/- via setCount, shows last updated
main.jsx      -> Bootstraps React, imports styles.css
styles.css    -> Basic card + button styles
```

Hierarchy:

```text
<App>
  <Dashboard>
    <Counter label="Counter A" />
    <Counter label="Counter B" />
```

State: Dashboard owns counts; passes value + setter to Counters. Counters call setter on click.
