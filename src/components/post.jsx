// Importamos los hooks de React para manejar estado y efectos
import {useState, useEffect} from "react";
// Importamos el componente CommentForm para mostrar el formulario de comentarios
import CommentForm from "./commentform";
// Importamos el componente listcomment (no se usa en este código)
import ListComment from "./listcomment";


// Definimos el componente funcional Post
let Post = () => {
  //manejo de estados de los likes
  // Estado para contar los likes
  let [ like, setLike ] = useState(0);
  // Función para aumentar el contador de likes
  let updateLikes = () => setLike(like+1)

  // Estado para mostrar/ocultar el formulario de comentarios
  let [ btnComment, setBtnComment ]  = useState(false); 
  // Función para alternar la visibilidad del formulario de comentarios
    let isShowComment = ()=> setBtnComment(!btnComment); 
  // Mostrar en consola el estado del botón de comentarios
    //console.log(btnComment);
    
  // funccion para obtener comentarios del formulario
  let [textComment, setTextComment] = useState("");
  let getCommentData = (comment)=>{setTextComment(comment);}

    // Listado de Comentarios
   let [listData, setListData] = useState([]);
    //comprobar si hay un nuevo comentario
    useEffect(()=>{
      //agregar el nuevo comentario al listado
    if (textComment)
    {
      setListData([
        ...listData,
        {id: Date.now(), text: textComment}
      ])    }
    }, [textComment]);

  return (
    // Fragmento principal del componente
    <>
      {/* Tarjeta principal del post */}
      <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                {/* Título del post */}
                <h5 className="card-title">El Mejor jugador de Colombia</h5>
                {/* Texto descriptivo del post */}
                <p className="card-text">
                El viejo CRACKDONA </p>
                {/* Imagen del post */}
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyehriiZQJdINBfjlpJc9oSF8dfPUj6mdi_A&s"} className="card-img-top" alt="..." />
            </div>
            {/* Lista de elementos de la tarjeta */}
            <ul className="list-group list-group-flush" >
            {/* Primer elemento: muestra likes y comentarios */}
            <li className="list-group-item d-flex justify-content-around">
              <span>👌😁❤️ {like}</span> <span>{listData.length}💬</span> 
            </li>
            {/* Segundo elemento: botones para dar like y mostrar comentarios */}
            <li className="list-group-item d-flex justify-content-around">
              <button className="btn btn-secondary" onClick={updateLikes}
              >👌Likes</button> 
              <button className="btn btn-secondary"
              onClick={isShowComment}
              >💬Comments</button>
            </li>
            </ul>
            {/* Pie de la tarjeta: muestra el formulario de comentarios si btnComment es true */}
            <div className="card-footer">
              { btnComment === true ? <CommentForm getCommentData={getCommentData}/> : ""}
            </div>
            <ListComment listComData = {listData} />  
      </div>
    </>
  );
};

// Exportamos el componente para usarlo en otros archivos
export default Post;
