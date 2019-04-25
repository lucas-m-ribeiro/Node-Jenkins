const modulo1 = require("./modulo1");

//este e ocodigo que faz os testes da porra toda 
//se eu der run e funcionar é GG
describe("basic feature", ()=>{
    it("Should return the right value", () =>{
        expect(modulo1.soma(10)).toBe(11)
    })
    it("Should return 11", () =>{
        const cb = jest.fn()
        cb.mockReturnValue(1)
        expect(modulo1.sMok(10, cb)).toBe(11)
    })
    it("Should return 20", () =>{

        expect(modulo1.mult(10, 2)).toBe(20)
    })
    it("Should return 5", () =>{

        expect(modulo1.div(10, 2)).toBe(5)
    })
})