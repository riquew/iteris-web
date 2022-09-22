import { useState } from "react";
import ButtonCompartilha from "../ButtonCompartilha";
import "./BlogPost.css";


/**
 * 
 * @param {{post :BlogPostModel}} props 
 * @returns
 */

function BlogPost(props) {
    const [post, setPost] = useState(props.post);
    
    function checkboxChangeBack(event) {
        const novoValorExibirImagem = !post.exibirImagem;
        setPost({ ...post, exibirImagem: novoValorExibirImagem });
      }

    let imgTag = <div></div>;
    if (post.exibirImagem) {
    imgTag = <img src={post.imagem} alt={post.titulo} />;
    }

    return (
        <>
        <article className="blogPost">
            <h2>{post.titulo}</h2>
            <div>
            <input
                type="checkbox"
                defaultChecked={post.exibirImagem}
                onChange={checkboxChangeBack}
            />
            {" "}
            Exibir imagem?
            </div>
            {imgTag}
            <p>{post.texto}</p>
        </article>
        <div className="buttonContainer">
        <ButtonCompartilha /> 
        </div>
        </>
    )

};

export default BlogPost;