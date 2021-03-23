import { loadRessource } from "./photoloader.js"

function load(node) {
    return loadRessource(node.dataset.uri).then(async res => {
        return { ...res, comments: await loadRessource(res.links.comments.href).then(res => res.comments) }
    })
}

export {
    load
}