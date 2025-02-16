import {describe, expect, it} from "vitest";
import {fireEvent, render, screen} from "@testing-library/react";
import App from "./App";
import {click} from "@testing-library/user-event/dist/cjs/convenience/click.js";

describe("App", () => {
  it("renders a components", () => {
    render(<App />);

    //screen.debug();
    expect(screen.getByText("Calcolatrice")).toBeInTheDocument();
  });
});

describe("Form Input", () => {
  it("renders two imput value", () => {
    render(<App />);

    //
    expect(screen.queryAllByRole("spinbutton")).toHaveLength(2);

    const input1 = screen.getByPlaceholderText("Numero 1");
    const input2 = screen.getByPlaceholderText("Numero 2");

    fireEvent.change(input1, {target: {value: 10}});
    fireEvent.change(input2, {target: {value: 20}});

    expect(input1).toHaveValue(10);
    expect(input2).toHaveValue(20);

    const sumButton = screen.getByText("+");
    fireEvent.click(sumButton);

    screen.debug();
  });
});
