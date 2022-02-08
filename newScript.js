let autos =[{
    marca:'toyota',
    modelo:1967,
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
  
    return {marca, modelo, referencia, color, precio}
  
  }
const clickCrearAuto = () => {

    function Cars(marca,modelo,referencia,color,precio){
      this.marca=marca,
      this.modelo=modelo,
      this.referencia=referencia,
      this.color=color,
      this.precio=precio
      return this
    }
    const auto2=new Cars(getData().marca,getData().modelo,getData().referencia,getData().color,getData().precio)
    autos.push(auto2)
    console.log(autos)
    
    const clickAñosDeUso=autos.map((carro,index)=>{
      const carAge=currentYear-carro.modelo
      añosDeUso.innerHTML=`El auto ${index+1} tiene ${carAge} años de uso.
      <p>Este es un párrafo desde Javascript usando innerHTML y la etiqueta p</p>`;
    })
    clickAñosDeUso
  }

const currentYear=2022;
const añosDeUso = document.getElementById('container-autos')
const marcaAuto=document.getElementById('marca')
    
const imprimirMarcasAutos= ()=>{
  let años=autos.map((auto)=>{
  console.log(auto.marca)})
  marcaAuto.innerHTML=`estos son los ${años}`
}
