import {first, load, last} from "./modules/gallery.js"
import {display_gallery} from "./modules/gallery_ui.js"
import { loadRessource } from "./modules/photoloader.js";

window.addEventListener('load', e => {
  document.querySelector('#load_gallery').addEventListener('click',  async (ev) => {
    display_gallery(await load());
    document.getElementById("first").addEventListener("click", async evt => {
      display_gallery(await first());
    })
    document.getElementById("last").addEventListener("click", async evt => {
      display_gallery(await last());
    })
  })
})
