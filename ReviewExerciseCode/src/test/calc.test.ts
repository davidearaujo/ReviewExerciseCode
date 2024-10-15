import { sumOnly } from "../domain/calc";

describe('', () => {
  test("verifica resultado", () => {
    let result = sumOnly(1, 2, 3, 4, 5);
    expect(result).toBe(15);
  });
});

// emilia adicionou um describe