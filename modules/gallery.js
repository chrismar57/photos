import {loadRessource} from "./photoloader.js"

let infoPhotos;
let nextLink;
let prevLink;
let firstLink;
let lastLink;
let actualLink;

function load() {
    loadPhoto("/www/canals5/photobox/photos")
    document.getElementById("load_gallery").remove();
    document.getElementById("pagination").classList.remove("is-invisible")
    return infoPhotos;
}

function next() {
    return loadPhoto(nextLink)
}

function prev() {
    return loadPhoto(prevLink)
}

function first() {
    return loadPhoto(firstLink)
}

function last() {
    return loadPhoto(lastLink)
}

function loadPhoto(link) {
    actualLink = link;
    infoPhotos = loadRessource(`https://webetu.iutnc.univ-lorraine.fr${link}`).then(updateLinks).then(updatePagination)
    return infoPhotos
}

function updatePagination(res) {
    let prev = calculatePaginationIndex(prevLink);
    const actual = calculatePaginationIndex(actualLink);
    const next = calculatePaginationIndex(nextLink)
    const previousButton = document.getElementById("previous")
    const nextButton = document.getElementById("next");

    if (actual === prev) {
        previousButton.setAttribute("disabled", true)
        previousButton.setAttribute("title", `Il n'y a pas de page numéro ${prev}.`)
    }
    else {
        previousButton.removeAttribute("disabled")
        previousButton.removeAttribute("title")
        prev++;
    }

    if (actual === next) {
        nextButton.setAttribute("disabled", true)
        nextButton.setAttribute("title", `Il n'y a pas de page numéro ${prev + 2}.`)
    }
    else {
        nextButton.removeAttribute("title")
        nextButton.removeAttribute("disabled")
    }

    previousButton.textContent = prev
    document.getElementById("pagination-current").textContent = prev + 1
    nextButton.textContent = prev + 2;
    return res;
}

function calculatePaginationIndex(url) {
    return Math.floor(parseInt(new URL(`https://webetu.iutnc.univ-lorraine.fr${url}`).searchParams.get("offset")) / 10) || 0
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