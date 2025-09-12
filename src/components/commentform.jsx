import { useState } from "react";

let CommentForm = ({ getCommentData }) => {

    let [comment, setComment] = useState("");
    let getComment = (e)=>{
        setComment(e.target.value);
    }
    // Retorna el formulario de comentarios
    return (
        // Sección principal del formulario con clase 'comentarios'
        <section className="comentarios">
            {/* Área de texto para que el usuario escriba su comentario */}
            <textarea className="form-control"
                placeholder="Deja tu comentario"
                value={comment}
                onChange={getComment}>
            </textarea>
            {/* Salto de línea para separar el textarea del botón */}
            <br />
            {/* Botón para enviar el comentario */}
            <button className="btn btn-secondary"
            onClick={() => getCommentData(comment)}
            >Comentar</button>
        </section>
    );
};

export default CommentForm;