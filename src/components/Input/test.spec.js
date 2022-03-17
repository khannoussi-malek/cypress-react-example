import * as React from "react";
import { mount } from "@cypress/react";
import { Input } from "./index";

it("renders learn react link", () => {
  mount(<Input name="malek" onChange={val => console.log(val)} />);
});
