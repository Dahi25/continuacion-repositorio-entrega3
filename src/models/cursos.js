const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const cursosSchema = new Schema ({
	idCurso : {
		type : Number,
		required : true
	},
	nombre : {
		type : String,
		required : true,
		trim : true
	},
	descripcion : {
		type : String,
		required : true,
       trim:true
	},
	precio : {
		type : Number,
		required : true,
		trim: true
	},
    duracion : {
		type : Number,
		required : true,
		trim: true
	},
    modalidad : {
		type : String,
        required : true
		  
	},
    estado : {
		type : String,
		default : "disponible",
		},
		intens8idadhoraria : {
			type : String,
			required : true,
			trim:true
			},
   nombreEst: [{
		type : Schema.Types.ObjectId,
		ref: 'estudiantes' 
	}]
});

const cursos = mongoose.model('cursos', cursosSchema);
module.exports = cursos