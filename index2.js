// Ejercicio 1 - Área del un Rectángulo
var assert = require("assert");
function Rectangulo (base,altura) {
  this.base = base;
  this.altura = altura;
  this.area =  function () {
    return this.base * this.altura; };
}
var areaRec = new Rectangulo (6,4);
console.log(areaRec); // Rectangulo {base: 6, altura: 4, area: 24}
// Ejercicio 1 - Mocha Test
describe("Área del rectángulo", function (){
	it("24 es el área de un rectangulo de 6 por 4", function (){
				assert.equal(24,areaRec.area());
	})
})
