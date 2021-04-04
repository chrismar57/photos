function loadRessource(url) 
{
  return fetch(url, {"credentials": "include"}).then(res => res.json())
}

export
{
    loadRessource
}