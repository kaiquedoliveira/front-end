function fetchObjetos() {
   fetch("https://jsonplaceholder.typicode.com/posts")
   .then((resposta) => resposta.json())
   .then((posts) => {
    const postContainer = document.getElementById("posts");

    posts.forEach((post)=> {
     const postDiv = document.createElement("div");
     postDiv.classList.add("post");

     //MOntar um H2 ->Title
     const postTitle = document.createElement("h2");
     postTitle.textContent = post.title;

     //adicionar estrutura na tela 
     //chamar estrutura html 
     postDiv.appendChild(postTitle);

     // montar a tag p e buscar o body 
     const postBody = document.createElement("p");
    postBody.textContent = post.body;

     //adicionar estrutura na tela 
    //chamar estrutura html 
    postDiv.appendChild(postTitle);
    postDiv.appendChild(postBody);

    postContainer.appendChild(postDiv);
    });

   });
}


//chamando funçao 
fetchObjetos();