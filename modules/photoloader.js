﻿function loadRessource(url) 
{
  return fetch(url).then(res => res.json())
}

export
{
    loadRessource
}