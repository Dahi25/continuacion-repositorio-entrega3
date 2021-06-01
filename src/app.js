require('./config')
const express = require('express')
const app = express()
const path = require ('path')
const hbs = require ('hbs')
const bodyParser = require ('body-parser')
const mongoose = require ('mongoose')
require('./helpers/helpers')
const session = require('express-session')
var MemoryStore = require('memorystore')(session)

//path//
const dirPublic=path.join(__dirname ,"../public")//para unir carpetas//
const dirViews=path.join(__dirname ,"../template/views")
const dirPartials=path.join(__dirname ,"../template/partials")

app.use(session({
	cookie: { maxAge: 86400000 },
 	store: new MemoryStore({
      	checkPeriod: 86400000 // prune expired entries every 24h(expira a las 24 hrs de su uso)
    	}),
  	secret: 'keyboard cat',//aca se crea los datos de los usuarios 
  	resave: true,
  	saveUninitialized: true //no se guardan los datos de la sesion hasta que esta no sea inicializada
}))
app.use((req, res, next) =>{
	if(req.session.usuario){		
		res.locals.sesion = true
		res.locals.nombre = req.session.nombre
	}	
	next()
})

 //Static
 app.use(express.static(dirPublic))
//BodyParser
app.use(bodyParser.urlencoded({extended : false}))

//hbs
app.set('view engine', 'hbs');
app.set ('views', dirViews);
hbs.registerPartials(dirPartials)
//const MongoClient = require('mongodb').MongoClient;//

app.use(require('./routes/index.js'))

/*
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name : creamos la base de datos
const dbName = 'Datoscursoseducacioncontinua';

// Create a new MongoClient
const client = new MongoClient(url,{ useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function(err) {

  console.log("Conexion exitosa");

  const db = client.db(dbName);
  insertarDocumento(db,() =>{
client.close();
  })
});
const insertarDocumento = function(db, callback) {
  // Get the documents collection :Creamos una coleccion 
  const collection = db.collection('cursos');
  // Insert some documents : insertar informacion
  collection.insertMany([ //insertar muchos
    {idCurso: 1,
    nombreCurso:'Programacionintermedia',
    descripcion:'Serequiereconocimientosprevios',
    precio:80000,
    duracion:50,
    modalidad:'presencial',
    intensidadhoraria:8
  }, 
    {idCurso:2,
      nombreCurso:'Basesdedatosnorelacionales',
      descripcion:'Cursointermedio',
      precio:70000,
      duracion:95,
      modalidad:'virtual',
    intensidadhoraria:6
    }, 
    {idCurso:3,
      nombreCurso:'javascript',
      descripcion:'Cursointermedio',
      precio:95000,
      duracion:95,
      modalidad:'presencial',
    intensidadhoraria:5
    },
    {idCurso:4,
      nombreCurso:'diseñoweb',
      descripcion:'Cursoavanzado',
      precio:90000,
      duracion:95,
      modalidad:'virtual',
    intensidadhoraria:5
    }
  ],(err, result)=> {
    console.log("Informacion insertada");
    callback(result);
  });
}
*/
 /*app.listen(3000, () => {
  console.log ('Servidor en el puerto 3000')
})*/
mongoose.connect(process.env.URLDB, {useNewUrlParser: true, useUnifiedTopology: true}, (err, resultado) => {
	if (err){
		return console.log(error)
	}
	console.log("conectado")
});
app.listen(process.env.PORT, () => {
	console.log ('Servidor en el puerto' + process.env.PORT)
})