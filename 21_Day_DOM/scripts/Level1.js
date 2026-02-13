const firstParagraph = document.querySelector('p')
console.log(firstParagraph)
const byTagNAme = document.getElementsByTagName('p')
console.log(byTagNAme)
console.log(byTagNAme.length)
for (let i = 0; i < byTagNAme.length; i++){
    console.log(byTagNAme[i])
}
const first = document.getElementById('first-p')
console.log(first)
const byTagNAmeAll = document.querySelectorAll('p')
byTagNAmeAll.forEach(tagname => console.log(tagname))
const forthParagraph = document.querySelectorAll('p')
forthParagraph[3].textContent = 'Forth paragraph'
const paragraphs = document.querySelectorAll('p')
paragraphs[0].className = "first-paragraph"
paragraphs[1].className = "first-paragraph"
paragraphs[2].className="first-paragraph"
paragraphs[3].className="first-paragraph"