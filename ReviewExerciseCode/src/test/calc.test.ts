import { sumOnly } from "../domain/calc";

beforeall('small changes', ()=>{

  let grupo:string;
  


  test("verifica resultado", () => {
    let result = sumOnly(1, 2, 3, 4, 5);
    expect(result).toBe(15);
  });
})





