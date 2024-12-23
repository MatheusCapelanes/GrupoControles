// async function buscarRSS(url) {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`Erro na requisição: ${response.status}`);
//         }
//         const text = await response.text(); // Obtém o XML como texto
//         const parser = new DOMParser();
//         const xmlDoc = parser.parseFromString(text, "application/xml");

//         const items = xmlDoc.querySelectorAll("item"); // Seleciona os itens do feed

//         const noticias = [];
//         items.forEach(item => {
//             const title = item.querySelector("title").textContent;
//             const link = item.querySelector("link").textContent;
//             const description = item.querySelector("description").textContent;
//             noticias.push({ title, link, description });
//         });
//         return noticias;
//     } catch (error) {
//         console.error("Erro ao buscar RSS:", error);
//         return null;
//     }
// }


// const urlRSS = "https://www.contabeis.com.br/rss/conteudo/";

// buscarRSS(urlRSS)
//     .then(noticias => {
//         if (noticias) {
//             console.log("Notícias:", noticias);
//             noticias.forEach(noticia => {
//                 const div = document.createElement('div');
//                 div.innerHTML = `<h3><a href="${noticia.link}">${noticia.title}</a></h3><p>${noticia.description}</p><hr>`;
//                 document.body.appendChild(div);
//             })
//         }
//     });

// function buscarRSS(url) {
//     const requestOptions = {
//         method: "GET",
//         redirect: "follow"
//     };

//     fetch("https://www.contabeis.com.br/rss/noticias/", requestOptions)
//         .then((response) => response.text())
//         .then((result) => console.log(result))
//         .catch((error) => console.error(error));
// }

// buscarRSS("https://www.contabeis.com.br/rss/noticias/");