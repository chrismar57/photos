import { postComment } from "./lightbox.js";

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
        `<article class="media box">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>${comment.titre}</strong> <small>@${comment.pseudo}</small>
              <br>
              ${comment.content}
            </p>
          </div>
        </div>
        <div class="media-right">
          ${comment.date}
        </div>
      </article>
        `
    });
    zoneComs.innerHTML = txt;
    document.getElementById("post-comment-button").onclick = () => postComment(data.photo.id)
    show();
}

function show()
{
    let contain = document.getElementById("lightbox_container")
    contain.classList.add("is-active")
    document.getElementById("lightbox-close").addEventListener("click", hide)

}

function hide()
{
    let contain = document.getElementById("lightbox_container")
    contain.classList.remove("is-active")
    document.getElementById("lightbox-close").removeEventListener("click", hide)
}

export
{
    display_lightbox
}