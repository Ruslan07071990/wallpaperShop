import { render } from "@testing-library/react";
import Button from "./Button";


describe("Snapshot test", () => {
    test("should Item render", () => {
      const { asFragment } = render(<Button type="button" text="Hello"> Click </Button>);
      expect(asFragment()).toMatchSnapshot();
    });
  });