import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

// You can see this as "folders" in Storybook's sidebar
const stories = storiesOf("atoms/Button", module);

stories.addDecorator(withKnobs);

const variantOptions = {
  none: "",
  primary: "primary",
  secondary: "secondary"
};

stories.add("with knobs", () => (
  <Button
    onClick={action("clicked!")}
    // syntax is (name, options, default)
    variant={select("variant", variantOptions, "")}
    // syntax is (name, default)
    disabled={boolean("disabled", false)}
  >
    Button
  </Button>
));
