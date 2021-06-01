const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const estudiantesSchema = new Schema ({
	cedula : {
		type : Number,
		required : true,
		trim:true
	},
	nombre : {
		type : String,
		required : true,
		trim : true
	},
	correo : {
		type : String,
		required : true
	},
	telefono: {
		type : Number,
		
		trim : true
	},
	nombreCu:[{
		type : Schema.Types.ObjectId,
		ref: 'cursos' 
	}]

});

const Estudiantes = mongoose.model('Estudiantes', estudiantesSchema);
module.exports = Estudiantes