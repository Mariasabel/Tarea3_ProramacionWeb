
class Pelicula {
    //propiedades director



    //constructor
    constructor(titulo, subtitulo, Fechaestreno, duracion, direccion, guion, reparto) {
        this.titulo = titulo
        this.subtitulo = subtitulo
        this.Fechaestreno = Fechaestreno
        this.duracion = duracion
        this.direccion = direccion
        this.guion = guion
        this.reparto = reparto

        this.disponible = false
        this.puntuacion = 0

    }

    nombrePelicula() {
        return this.titulo + " " + this.subtitulo
    }



    disponibilidad(valor) {
        this.disponible = valor
        if (valor === true) {
            console.log("Si, esta disponible la pelicula", this.nombrePelicula())
        }else{
            console.log("No esta disponible la pelicula", this.nombrePelicula())  
        }


    }


    puntuaciones(cantidapuntuacion){
        if (this.disponible){
            this.puntuacion = this.puntuacion + cantidapuntuacion
            console.log(`La pelicula ${this.nombrePelicula()} obtuvo una puntuacion de ${cantidapuntuacion} sumando un total de : ${this.puntuacion}`)
        }
    }



}

var pelicula1 = new Pelicula("El señor de los anillos", "El retorno del rey", "2003", "3h 21m", "peter jackson", "J.R.R. Tolkien(novel The Return of the King) ,Fran Walsh(screenplay),Philippa Boyens(screenplay) ", "Elijah");

pelicula1.disponibilidad(true)
pelicula1.puntuaciones(9.0)
console.log(pelicula1)









