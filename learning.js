let libros = []



let addBook=(nombre, autor)=> {
    let libro = {
        nombre: nombre,
        autor: autor
    }
    libros.push(libro)
}

addBook("marcela paz", "papelucho");

/*
addBook = (prompt("Nombre Libro"), prompt("Autor")) 




// Como se hace esto con prompt?

*/
