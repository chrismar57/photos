import {loadRessource} from "./photoloader.js"

let infoPhotos;
let nextLink;
let prevLink;
let firstLink;
let lastLink;

function load() {
    infoPhotos = loadRessource("https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/photos").then(updateLinks);
    return infoPhotos;
}

function next() {
    infoPhotos = loadRessource(`https://webetu.iutnc.univ-lorraine.fr${nextLink}`).then(updateLinks)
    return infoPhotos
}

function prev() {
    infoPhotos = loadRessource(`https://webetu.iutnc.univ-lorraine.fr${prevLink}`).then(updateLinks)
    return infoPhotos
}

function first() {
    infoPhotos = loadRessource(`https://webetu.iutnc.univ-lorraine.fr${firstLink}`).then(updateLinks)
    return infoPhotos
}

function last() {
    infoPhotos = loadRessource(`https://webetu.iutnc.univ-lorraine.fr${lastLink}`).then(updateLinks)
    return infoPhotos
}

function updateLinks(res) {
    nextLink = res.links.next.href
    prevLink = res.links.prev.href
    firstLink = res.links.first.href
    lastLink = res.links.last.href
    return res
}

export {
    load,
    next,
    prev,
    first,
    last
}