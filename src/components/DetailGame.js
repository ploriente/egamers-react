function DetailGame(props = []) {
    let id = Number(props.params.id);
    let juego = props.find(oneGame => oneGame.id === id);
return(
    <div>
        {
            juego &&
            <>
                <p><b>ID:</b> {juego.id} </p>
                <p><b>Nombre:</b> {juego.name} </p>
                <p><b>Precio:</b> {juego.price} </p>
                <p><b>Descripción:</b> {juego.description} </p>
            </>
        }
        {
            !juego && <p>No hay juego con ese ID</p>
        }
    </div>
)
}

export default DetailGame;