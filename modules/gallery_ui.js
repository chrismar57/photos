import {display_lightbox} from "./lightbox_ui.js";
import {next, prev} from "./gallery.js";
import { load } from "./lightbox.js";

function display_gallery(gallery) {
    let galAff = gallery.photos.reduce((acc, photo) => {
        let txtHtml = `
        <div class="vignette"><img data-uri="/www/canals5/photobox/photos/${photo.photo.id}" src="https://webetu.iutnc.univ-lorraine.fr/${photo.photo.original.href}"></div>
        `;
        return acc+txtHtml;
    }, "")

    document.getElementById("gallery_container").innerHTML = galAff;

    document.querySelectorAll(".vignette").forEach( elem => {
        elem.addEventListener("click", async e => display_lightbox(await load(elem.firstChild)));
    })

    document.getElementById("previous").replaceWith(document.getElementById("previous").cloneNode(true));
    document.getElementById("next").replaceWith(document.getElementById("next").cloneNode(true));
    document.getElementById("previous").addEventListener("click",async e => display_gallery(await prev()));
    document.getElementById("next").addEventListener("click",async e => display_gallery(await next()));
}

export {
    display_gallery
}