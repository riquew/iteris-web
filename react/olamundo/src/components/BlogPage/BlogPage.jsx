import React from "react";
import { useState} from "react";
import BlogPostModel from "../../models/BlogPostModel";
import BlogPost from "../BlogPost";
import "./BlogPage.css"


function BlogPage() {
  let listaDePostagens = [];
  const [lista, setLista] = useState(listaDePostagens);
  listaDePostagens.push(
  new BlogPostModel(
    "Primeira postagem!",
    "https://www.weblink.com.br/blog/wp-content/uploads/2019/06/O-Que-e-Um-Blog.png",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tortor eu  odio pellentesque ullamcorper. Duis non ipsum mauris. Nullam dolor dui"
  ),
  new BlogPostModel(
    "Segunda postagem!",
    "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/13-copy-o61.jpg?quality=70&strip=info&w=1024",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tortor eu  odio pellentesque ullamcorper. Duis non ipsum mauris. Nullam dolor dui"
  ),
  new BlogPostModel(
    "Terceira postagem!",
    "https://blog.hotmart.com/blog/2017/09/criar-um-blog.png",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tortor eu  odio pellentesque ullamcorper. Duis non ipsum mauris. Nullam dolor dui"
  )
  );

  function handleForm(event) {
    event.preventDefault();
    let novaLista = 
    lista.concat(
      new BlogPostModel(
        event.target.titulo.value,
        event.target.link.value,
        event.target.conteudo.value
      )
    )
    setLista(novaLista);
    event.target.titulo.value ="";
    event.target.link.value = "";
    event.target.conteudo.value = ""
  }

  return (
  <>
    <div className="listaPostagens">
      {lista.map((item, i) => (
        <BlogPost key={i} post={item} />
      ))}
    </div>
    <form action="POST" class="formNovoPost" onSubmit={handleForm}>
        <label for="titulo">Titulo do Post: </label>
        <input type="text" name="titulo"/>
        <label for="link">Link da imagem: </label>
        <input type="text" name="link"/>
        <label for="conteudo">Conteudo do Post: </label>
        <textarea rows="10" columns="10" placeholder="Insira seu texto aqui" name="conteudo"></textarea>
        <div class="buttonContainer">
          <input type="submit" value="Enviar" class="botaoCompartilha"/>
        </div>
    </form>
    </> 
    );
}

export default BlogPage;

