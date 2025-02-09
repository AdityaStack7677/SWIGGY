import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Contact from "../Contact";

describe("Contact Us Page Test Case", () => {
  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    const button1 = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
    expect(button1).toBeInTheDocument();
  });

  test("Should load input name inside Contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes);

    expect(inputBoxes.length).toBe(2);
  });
});
