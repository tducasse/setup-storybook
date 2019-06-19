import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
import { action } from "@storybook/addon-actions";

// You can see this as "folders" in Storybook's sidebar
const stories = storiesOf("atoms/Button", module);

// Every story represents a state for our Button component
stories.add("default", () => (
  <Button onClick={action("clicked!")}>Button</Button>
));
stories.add("default disabled", () => (
  <Button onClick={action("clicked!")} disabled>
    Button
  </Button>
));
stories.add("primary", () => (
  <Button onClick={action("clicked!")} variant="primary">
    Button
  </Button>
));
// Passing a prop without a value is basically the same as passing `true`
stories.add("primary disabled", () => (
  <Button onClick={action("clicked!")} variant="primary" disabled>
    Button
  </Button>
));
stories.add("secondary", () => (
  <Button onClick={action("clicked!")} variant="secondary">
    Button
  </Button>
));
stories.add("secondary disabled", () => (
  <Button onClick={action("clicked!")} variant="secondary" disabled>
    Button
  </Button>
));
