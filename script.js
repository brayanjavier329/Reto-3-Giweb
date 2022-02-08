const textAutos = document.getElementById('container-autos')

let autos =[{
  marca:'toyota',
  modelo:2021,
  referencia:'corolla',
  color:'blanco',
  precio:20000
}]



const getData = () => {
  const marca = document.getElementById('marca').value
  const modelo = document.getElementById('modelo').value
  const referencia = document.getElementById('referencia').value
  const color = document.getElementById('color').value
  const precio = document.getElementById('precio').value

  return (marca, modelo, referencia, color, precio)

}

const writeData = () => {
  textAutos.innerHTML = `El ${autos[0].marca}`
}
const clickCrearAuto = () => {
  //console.log('Se ejecutó clickButton')
  getData()
  writeData()
  //return true
}

console.log(getData())

//PRIMERA PARTE DEL RETO
//crear objetos- metodo que calcule años de uso

//PRIMER FORMA DE CREAR OBJETOS CON PROTOTIPOS 

function Cars(marca,modelo,referencia,color,precio){
        this.marca=marca,
        this.modelo=modelo,
        this.referencia=referencia,
        this.color=color,
        this.precio=precio
        return this
}

// Hero.prototype.greet=function(){
//     console.log(`Hi, I'm ${this.name}`)
// }

const auto=new Cars(getData.marca,getData.modelo,getData.referencia,getData.color,getData.precio)

// function addCar(coche){
//   getData()
//   if (clickButton==true){
//     autos.push(coche)
//   }
//   else{
//     return console.log('No se creó un carro')
//   }
// }

autos.push(auto)

//console.log(autos)



/**
class Cars{
  
    constructor(marca,modelo,referencia,color,precio){
      this.marca=marca
      this.modelo=modelo
      this.referencia=referencia
      this.color=color
      this.precio=precio
    }

    getData = () => {
      const marca = document.getElementById('marca').value
      const modelo = document.getElementById('modelo').value
      const referencia = document.getElementById('referencia').value
      const color = document.getElementById('color').value
      const precio = document.getElementById('precio').value
    
      return {marca, modelo, referencia, color, precio}
    }
    auto = new Cars(getData.marca,getData.modelo,getData.referencia,getData.color,getData.precio)
    autos.push(auto)
    console.log(autos)
}

// const auto = new Cars(getData.marca,getData.modelo,getData.referencia,getData.color,getData.precio)
//let auto= new Cars(clickButton)
 */




//metodos de iteracion para escribir todos los carros - marca - modelo - refe - color - precio
//cuanto cuestan todos los carros - mas 90000


//filtrar por marca - radio button