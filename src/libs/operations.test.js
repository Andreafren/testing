import {sum, divisione, moltiplicazione, sottrazione} from "./operations";
import {describe} from "vitest";

describe("sum", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("adds 2 + 0 to equal 1", () => {
    expect(sum(2, 0)).toBe(2);
  });
});

describe("sottrazione", () => {
  it("sottrazione 2-1 to equal 1", () => {
    expect(sottrazione(2, 1)).toBe(1);
  });
  it("sottrazione 2 - 0 to equal 2", () => {
    expect(sottrazione(2, 0)).toBe(2);
  });
});

describe("moltiplicazione", () => {
  it("", () => {
    expect(moltiplicazione(2, 1)).toBe(2);
  });
  it("", () => {
    expect(moltiplicazione(2, 0)).toBe(0);
  });
});

describe("divisione", () => {
  it("", () => {
    expect(divisione(2, 1)).toBe(2);
  });
});
