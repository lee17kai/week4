let pageTitleElement = document.querySelector(`.page-title`)
pageTitleElement.innerHTML = `Movies to watch!`

let movieElements = document.querySelectorAll(`,movies-to-watch li`)

// loop thorugh all the elemesnts (all the lis)
for (let i = 0; i< movieElements.length; i++) {
    let movieElement = movieElements[i]
    movieElement.innerHTML = `Spaceballs`
}

// a reference to the movies to watch unordered list
let moviesList = document.querySelector(`.movies-to-watch`)

//insert some HTML before the end of the ul
moviesList.insertAdjacentHTML(`beforeend`, `
<li>Spaceballs</li>
<li>Star Wars</li>
<li>Apollo 13</li>
`)