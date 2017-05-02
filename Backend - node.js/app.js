var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var express = require('express')
  , cors = require('cors')
  , app = express();

app.use(cors());

app.use(bodyParser.json()); 

let books = [{
    
    "title":"SUEÑOS DE ACERO Y NEON",
    "description":"Los personajes que protagonizan este relato sobreviven en una sociedad en decadencia a la que, no obstante, lograrán devolver la posibilidad de un futuro. Año 2484. En un mundo dominado por las grandes corporaciones, solo un hombre, Jordi Thompson, detective privado deslenguado y vividor, pero de gran talento y sentido d...",
    "id":1
},
{
    "title":"LA VIDA SECRETA DE LA MENTE",
    "description":"La vida secreta de la mentees un viaje especular que recorre el cerebro y el pensamiento: se trata de descubrir nuestra mente para entendernos hasta en los más pequeños rincones que componen lo que somos, cómo forjamos las ideas en los primeros días de vida, cómo damos forma a las decisiones que nos constituyen, cómo soñamos y cómo imaginamos, por qué sentimos ciertas emociones hacia los demás, cómo los demás influyen en nosotros, y cómo el cerebro se transforma y, con él, lo que somos.",
    "id":2
},
{
    "title":"CASI SIN QUERER",
    "description":"El amor algunas veces es tan complicado como impredecible. Pero al final lo que más valoramos son los detalles más simples, los más bonitos, los que llegan sin avisar. Y a la hora de escribir sobre sentimientos, no hay nada más limpio que hacerlo desde el corazón. Y eso hace Defreds en este libro.",
    "id":3
},
{
    "title":"TERMINAMOS Y OTROS POEMAS SIN TERMINAR",
    "description":"Recopilación de nuevos poemas, textos en prosa y pensamientos del autor. Un sabio dijo una vez: «Pocas cosas hipnotizan tanto en este mundo como una llama y como la luna, será porque no podemos cogerlas o porque nos iluminan en la penumbra». Realmente no sé si alguien dijo esta cita o me la acabo de inventar pero deberían de haberla escrito porque el poder hipnótico que ejercen esa mujer de rojo y esa dama blanca sobre el ser humano es digna de estudio.",
    "id":4
},
{
    "title":"LA LEGIÓN PERDIDA",
    "description":"En el año 53 a. C. el cónsul Craso cruzó el Éufrates para conquistar Oriente, pero su ejército fue destrozado en Carrhae. Una legión entera cayó prisionera de los partos. Nadie sabe a ciencia cierta qué pasó con aquella legión perdida.150 años después, Trajano está a punto de volver a cruzar el Éufrates. ...",
    "id":5
},
{
    "title":"BAR DEL INFIERNO",
    "description": "El cafetín es un laberinto. Nuestro destino es extraviarnos en sus encrucijadas. Pero algunos presienten una verdad aún más terrible: no se puede salir del bar, no por la falta de puertas ni por la disposición caprichosa de sus instalaciones, sino porque no hay otra cosa que el bar. El afuera no existe.El hombre a quien llaman el Narrador de Historias está obligado a contar un cuento cada noche, cuando el reloj da las doce. Nadie le presta atención. Anda siempre con unos libros grasientos. En ellos hay -según se dice- infinitos relatos.Amores imposibles de la provincia de Buenos Aires, ciudades lejanas gobernadas por jaurías, santos levitadores, mendigos impiadosos y seres insaciables que se devoran a sí mismos integran el curioso repertorio.",
    "id":6
},
{
    "title":"BESTIARIO",
    "description": "Bestiario es el primer libro de relatos que Julio Cortázar publicó con su auténtico nombre.Pero no hay en estas ocho obras maestras ni el menor balbuceo ni resacas juveniles: son perfectas.Estos cuentos, que hablan de objetos y hechos cotidianos, pasan a la dimensión de la pesadilla o de la revelación de un modo natural e imperceptible.",
    "id":7
},
{
    "title":"CUENTOS DE NAVIDAD",
    "description":"Cuento de Navidad (también conocido como Un Cuento de Navidad o Canción de Navidad) es un relato de fantasmas que ha gozado del favor del público desde el mismo momento de su aparición y es uno de los clásicos del genial Dickens.Este libro narra la inquietante noche que en la víspera de esta festividad pasa Ebenezer Scrooge, un anciano miserable y tacaño que es una de las más acabadas representaciones del avaro en la historia de la literatura y otro de los inolvidables personajes de la amplia galería de Dickens." ,
    "id":8
},
{
    "title":"EL ALEPH",
    "description": "Considerado entre otras cosas como una prefiguración de Internet y la aldea global, el relato que da título a este libro -el más famoso de Jorge Luis Borges- mantiene una inagotable capacidad sugestiva. Esa riqueza se extiende a las demás historias del volumen.",
    "id":9
}];

let id = 10;

function searchItem(id){
    for (let t = 0; t < books.length; t++){
        if (books[t].id === id){
            return t;
        }
    }
    return undefined;
}
app.route('/books/')
    .get((req,res)=>{
        res.json(books);
    })
    .post((req,res)=>{
        let item = req.body;
        item.id = id;
        id++;
        books.push(item);
        res.json(item);
    })
app.route('/books/:id')
    .put((req,res)=>{
        let rId = parseInt(req.params['id']);
        let pos = searchItem (rId);
        if (pos !== undefined){
            let newItem = req.body;
            newItem.id = rId;
            books[pos] = newItem;
            res.json(newItem);
        } else {
            res.sendStatus(404);
        }
    })
    .delete((req,res)=>{
        let pos = searchItem(parseInt(req.params['id']));
        if (pos !== undefined){
            let deletedItem = books[pos];
            books.splice(pos,1);
            res.json(deletedItem);
        }else{
            res.statusCode(404);
        }
    })

app.listen(3000, function () {
    console.log('Backend running');
    console.log('Author: Eloy Alfageme');
});