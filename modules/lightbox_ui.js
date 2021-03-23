function display_lightbox(data) 
{
    let title = document.getElementById("lightbox_title");
    title.textContent = data.photo.titre;
    let img = document.getElementById("lightbox_full_img");
    img.src = `https://webetu.iutnc.univ-lorraine.fr/${data.photo.url.href}`
    let zoneComs = document.getElementById("lightbox-comments")
    let txt = ""
    data.comments.forEach(comment => {
        txt += 
        `<p>Pseudo: ${comment.pseudo}</p>
        <p>Titre: ${comment.titre}</p>
        <p>Message: ${comment.content}</p>
        <p>Posté le : ${comment.date}</p>
        <br>
        `
    });
    console.log(txt)
    zoneComs.innerHTML = txt
    show();
}

function show()
{
    let contain = document.getElementById("lightbox_container")
    contain.classList.remove("lightbox_container--hidden")
    contain.classList.add("lightbox_container--visible")
    document.getElementById("lightbox_close").addEventListener("click",hide)

}

function hide()
{
    let contain = document.getElementById("lightbox_container")
    contain.classList.add("lightbox_container--hidden")
    contain.classList.remove("lightbox_container--visible")
    document.getElementById("lightbox_close").removeEventListener("click",hide)
}

export
{
    display_lightbox
}