import React from 'react'

export const MisJuegos = () => {

  const conseguirDatosForm = e => {
    e.preventDefault();

    let juego = {
      id: new Date().getTime(),
      titulo: e.target.titulo.value,
      descripcion: e.target.descripcion.value
    };
    console.log(juego);

  }

  return (
    <div>
        <h1>Estos son mis videojuegos</h1>
        <p>Número de Videojuegos: 15</p>
        <ul>
            <li>GTA</li>
            <li>Mortal Combat</li>
            <li>Mario Bross</li>
        </ul>

        <h3>Agregar Juego</h3>

        <form onSubmit={conseguirDatosForm}>
            <input type="text" name="titulo" placeholder="Titulo" />
            <textarea name="descripcion" placeholder="Descripción"/>
            <input type="submit" value="Guardar"/>
        </form>
    </div>
  )
}
