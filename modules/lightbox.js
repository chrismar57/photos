import { loadRessource } from "./photoloader.js"

function load(node) {
    return loadRessource(node.dataset.uri).then(async res => {
        return { 
            ...res,
            comments: await loadRessource(res.links.comments.href).then(res => res.comments)
        }
    })
}

function postComment(id) {
    const pseudo = document.getElementById("pseudo-form").value;
    const titre = document.getElementById("title-form").value;
    const content = document.getElementById("comment-form").value;
    fetch(`https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/photos/${id}/comments`, {
        "method": "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        "body": JSON.stringify({pseudo, titre, content})
    })
    .then(res => {
        document.getElementById("title-form").value = "";
        document.getElementById("comment-form").value = "";
        window.location.reload();
    })
    .catch(res => console.error(res))
    
}

export {
    load,
    postComment
}