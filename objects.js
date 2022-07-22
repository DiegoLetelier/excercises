

  
class Structure {
    constructor(name, adress, number, neighborhood, city) {
        this.name = name;
        this.adress = adress;
        this.number = number;
        this.neighborhood = neighborhood;
        this.city = city;
    }

    get parameters (){
        return `${this.name} ${this.adress}`
    }

    set parameters (parameters) {
        for (let parameter in parameters) {
            this[parameter] = parameters[parameter];
        }
        // los parametros se pueden definir imprimir como objetos para poder recorrerlos
    }
}

let estructura = new Structure("Casa", "El Bosque", "123")

console.log(estructura.parameter)

estructura.parameter = {
    name : "casa cambiada",
}

console.log(estructura.parameter)

class Building extends Structure {
    constructor(name, adress, number, neighborhood, city, country)
    

}


  /*
  
  let libros = []

  const addBook = (book, author) => {
      libros.push({book, author});     
  }
  
  addBook("La Odisea", "Homero")
  addBook("El Socio", "Genaro Prieto")
  addBook("Papelucho Programador", "Marcela Paz")
  addBook("La Amortajada", "Maria Luisa Bombal")

  console.log(libros)
  


/*

  const printBook = () => {
      for (i = 0; i <= libros.length; i++) {
          console.log(libros[i]);
      } 
  }
  
  printBook()


/*

function createObject() [

   = {
    nombre: "Los 3 chanchitos" , 
    precio: 1500,
    Autor: "Los Hermanos Greem",
  } ;

  casa.name = "Casa 3 Chanchitos";
  casa.adress = "El bosque";
]
  casa.rooms = [
    {
        name: "Pedrito room",
        area: 20,
    }, 
    {
        name: "Jorgito room",
        area: 20,
    }
  ]

  console.log(libros);
}


createObject() ;









/* 
let asingValuesToObject = (obj) => {
    obj.name = "casa 3 chanchitos";
    obj.adress = "el bosque";
}

console.log(obj)

/* 
Cerar un objeto con un "saludo y despedida, etiquetas"*/
/*

let agregarValor = (key, value, obj) => {
    obj[key] = value;
    return obj;
}

let objeto = {
    saludo: "Hola",
    despedida: "adiós",
}

console.log(objeto);

agregarValor("despedida", "chao", objeto);

console.log(objeto);
*/


