const homePage = require ('./homePage');
const enCartelera = require ('./enCartelera');
const masVotadas = require ('./masVotadas');
const sucursales = require ('./sucursales');
const contacto = require ('./contacto');
const preguntasFrecuentes = require ('./preguntasFrecuentes');
const { listarPelis } = require('./homePage');

let index = {
    homePage:function(res){
        res.write(homePage.titulo)
        res.write('.\n\n')
        res.write("Total:  " + homePage.cantidad())
        res.write('\n\n')
    let pelis = homePage.listarPelis();
    for(peli of pelis){
        res.write(peli)
        res.write('\n')
}
        res.write('\nRecordá que podés visitar las secciones: \n\n');
            res.write('I. En Cartelera\n');
            res.write('II. Más Votadas\n');
            res.write('III. Sucursales\n');
            res.write('IV. Contacto\n');
            res.write('V. Preguntas Frecuentes\n');
            res.end()
 },

    enCartelera:function(res){
        res.write("Total: " + enCartelera.cantidad() + '.\n\n')

        let peliculas = enCartelera.listarPelis();

        for(pelicula of peliculas){
            res.write(pelicula.title)
            res.write('\n')
            res.write(pelicula.overview)
            res.write('\n\n')
        }
          res.end()
    },
    masVotadas:function(res){
        res.write(masVotadas.titulo)
        res.write('\n \n \n')
        res.write("Total de peliculas mas votadas: " + masVotadas.cantidad())
        res.write('\n')
        res.write('\n')
        res.write("Rating promedio \n" + masVotadas.promedio())
        res.write('\n')
        res.write('Listado de peliculas \n')
        let movies = masVotadas.listarPelis();
        res.write('\n')
        movies.forEach(function(movie){
        res.write('\n \n')    
        res.write(movie.title +' Rating: '  + movie.vote_average + '\n')
        res.write('\n')
        res.write(movie.overview)
        
        })
        res.end ()
    },
    sucursales:function(res){
        res.write(sucursales.titulo + '\n')
        res.write("Total de salas: " + sucursales.cantidad())
        res.write('\n')
        res.write('\n')
        res.write('Listado de salas disponibles \n')
        res.write('\n')
        res.write('\n')
        let theaters = sucursales.listarCines();
        theaters.forEach(function(theater){
            res.write('\n \n')
            res.write(theater.name)
            res.write('\n \n')
            res.write(theater.address)
            res.write('\n \n')
            res.write(theater.description)

        })
        res.end()

    },
    contacto:function(res){
        res.write(contacto.titulo)
        res.write('\n \n')
        res.write(contacto.contenido)
        res.end()

    },
    preguntasFrecuentes:function(res){
        res.write(preguntasFrecuentes.titulo)
        res.write('\n \n')
        res.write("Total de preguntas: " + preguntasFrecuentes.cantidad())
        res.write('\n \n \n')
        res.write("Listado de preguntas frecuentes \n")
        let faqs = preguntasFrecuentes.listarFaqs();
        for(faq of faqs){
            res.write("Pregunta: " + faq.faq_title)
            res.write('\n \n \n')
            res.write("Respuesta: " + faq.faq_answer + '\n \n')

        }
        res.write('\n')
        res.end()



    }

}
module.exports = index 