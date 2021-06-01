const hbs = require ('hbs');

/*hbs.registerHelper('verCursos', ()=>{
	listaCursos = require ('./../Cursos.json')
	let resultado = "";
	resultado=resultado+"<table><thead><th>id</th><th>nombre</th><th>duracion</th><th>precio</th><th>Modalidad</th> <th>Descripcion</th><th>Intensidad horaria</th></thead>"
	listaCursos.forEach(Cur => {
		resultado = `${resultado} <tr><td> <button type="submit"class='form-control btn btn-success' name='id'value='${Cur.idCu}'> Eliminar</button><td>
		               
		               <tr><td> ${Cur.id} </td> 
						<td> ${Cur.nombre} </td>
						<td> ${Cur.duracion} </td>
						 <td>${Cur.precio}</td>
						   <td>${Cur.modalidad}</td>
						   <td>${Cur.descripcion}</td>
						   <td>${Cur.inth}</td> </tr>`
})	
		resultado= resultado + "</tbody></table>"			
	return resultado
});
hbs.registerHelper('registrar', (idC, nombreEst, cedula, correo,modalidad, intensidadh, descurso) =>{
	if(cedula ){
		let aspirante={
			id:idC,
			nombre:nombreEst,
			cedula:cedula,
			correo:correo,
			modalidad:modalidad,
	        inth:intensidadh,
			descripcion:descurso
			
		}
		try{
			return funciones.matricular(aspirante)
		}catch (error){
			
	 return	resultado=`<div class='alert alert-danger alert-dismissible fade show' role='alert'>ese id pertenece a un curso no disponible<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
	}
    }
});

//para eliminar cursos//
  hbs.registerHelper('eliminar',(id)=>{
	console.log("se elimino esto"+idCu)
	return  funciones.eliminar(idCu)
	
});



     //para crear un curso en la pagina cursos//
hbs.registerHelper('crear_Curso', (idCu, nombreCu, duracionCu, precioCu,modalidadCu, intensidadh, descrip) =>{
	//console.log("good" +idCu)//
    if(idCu){
		let curso={
			idCurso:idCu,
			nombreCurso:nombreCu,
			duracionCurso:duracionCu,
			precioCurso:precioCu,
			modalidadCurso:modalidadCu,
	        intensidadCurso:intensidadh,
			descripcionCurso:descrip
			
		}
		try{
			//console.log(curso)
			return funciones.crearCurso(curso)
			}catch (error){
			
	 return	resultado=`<div class='alert alert-danger alert-dismissible fade show' role='alert'>No se puede matricular este curso<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
	}
    }
});
*/
