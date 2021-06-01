const express = require('express')
const app = express()
const path = require ('path')
const hbs = require ('hbs')
const bodyParser = require ('body-parser')
require('./../helpers/helpers')
const bcrypt = require('bcryptjs');
const estudiantes = require('../models/estudiantes')
//path//
const dirPublic=path.join(__dirname ,"../../public")//para unir carpetas//
const dirViews=path.join(__dirname ,"../../template/views")
const dirPartials=path.join(__dirname ,"../../template/partials")
const cursos= require('./../models/cursos')
const Estudiantes= require ('./../models/estudiantes')
//hbs
app.set('view engine', 'hbs');
app.set ('views', dirViews);
hbs.registerPartials(dirPartials)

//Paginas
app.get('/', function (req, res) {
	console.log('ingreso a la pagina principal')
  res.render('index', {
  	titulo: 'Coordinador',
	  mensaje: ''
  	})
})
app.get('/coordinador', function (req, res) {
	console.log('ingreso a la pagina')
  res.render('coordinador', {
  	titulo: 'Coordinador',
	  mensaje: ''
  	})
})

app.post('/coordinador', function (req, res) {
	console.log(parseInt(req.body.usuario), req.body.contrasena)
		mensaje="";
		estudiante.findOne({cedula : parseInt(req.body.usuario)},(err, resultado)=>{
				if (err){
					return console.log(err)
				}
				if (!resultado){
					mensaje= "El usuario no existe"
				}
				else{
					if(!bcrypt.compareSync(req.body.contrasena, resultado.contrasena)){
						mensaje= "Contraseña incorrecta"
					}
					else{
						req.session.usuario = resultado._id
						console.log("variable de sesión" + req.session.usuario)
						req.session.nombre = resultado.nombre
						mensaje= "Bienvenid@ " + resultado.nombre
					}	
					
				}
				res.render('coordinador',{
				titulo: 'coordinador',
				mensaje: mensaje,
				sesion : true,
				nombre : req.session.nombre
				})
		})
	
	})
	app.get('/registrarestudiantes', function (req, res){
		res.render('registrarestudiantes', {
			titulo:'Registro de estudiantes'		
		})
	})
	//registrar estudiante//
	console.log("entro al registro de estudiantes")
	app.post('/registrarestudiantes', function (req, res){
		//const salt = bcrypt.genSaltSync(saltRounds);//
		let estudiantes = new Estudiantes ({
			cedula: req.body.cedula,
	        nombre: req.body.nombre,
			correo:req.body.correo,
			telefono:req.body.telefono
			
		})
		estudiantes.save ((err, resultado)=>{
			if (err){
				return console.log(err)
			}
			console.log("ingresado el estudiante ")
			res.render('registrarestudiantes', {
			titulo:'Regristro de estudiantes',		
			mensaje: 'Se ha creado con exito el estudiante '	
			})
		})
	
		
	})
	

     //crear

	 /*module.exports.estudiantes=(req,res)=>{
		 console.log(req.body)
		 const estudiantes=new estudiantes({
			cedula: req.body.cedula,
	        nombre: req.body.nombre,
			correo:req.body.correo,
			telefono:req.body.telefono
		 })
		
		 estudiantes.save ((err, resultado)=>{
			if (err){
				return console.log(err)
			}
			console.log("ingresado a la BD este estudiante")
			res.render('registrarestudiantes', {
			titulo:'Regristrando los estudiantes',		
			mensaje: 'Se ha creado con exito el estudiante'	
			})
		})
	};
	*/
	





























module.exports = app