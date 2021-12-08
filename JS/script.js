let total = 0
function addToCartClicked(event) {
    let button = event.target
    let shopItem = button.parentElement

    //****************** variable */
    var var1 = shopItem.querySelectorAll('.image')[0].src
    console.log(var1);

    var var2 = shopItem.querySelectorAll('.desc')[0].innerText
    console.log(var2);

    var var3 = shopItem.querySelectorAll('.size')[0].value
    console.log(var3);

    var var4 = shopItem.querySelectorAll('.price')[0].innerText
    console.log(var4);
    //**************************************** */
    total = parseInt(document.getElementById('total').textContent)
    total = total + parseInt(var4)
    document.getElementById('total').textContent = total
    //****************** */
    console.log('dans add **************');

    const section = document.querySelector('.S')

    let divArticle = document.createElement('div')
    divArticle.setAttribute("class", "article")

    let imgArticle = document.createElement('img')
    imgArticle.setAttribute("class", "image")
    imgArticle.setAttribute("src", var1)

    let pArticle = document.createElement('p')
    pArticle.textContent = var2

    let inputArticle = document.createElement('input')
    inputArticle.setAttribute("type", "text")
    inputArticle.setAttribute("class", "size")
    inputArticle.value = var3

    let divArticle1 = document.createElement('div')
    divArticle1.setAttribute("class", "choix")

    let bouttonArticlePlus = document.createElement('button')
    bouttonArticlePlus.setAttribute("class", "plus")
    bouttonArticlePlus.textContent = '+'
    bouttonArticlePlus.addEventListener('click', plus)


    let inputArticleQuantite = document.createElement('input')
    inputArticleQuantite.setAttribute("type", "text")
    inputArticleQuantite.setAttribute("class", "plusmoins")
    inputArticleQuantite.setAttribute("id", "quantite")
    inputArticleQuantite.value = 1

    let bouttonArticleMoins = document.createElement('button')
    bouttonArticleMoins.setAttribute("class", "moins")
    bouttonArticleMoins.textContent = '-'
    bouttonArticleMoins.addEventListener('click', moins)

    let bouttonArticleRemove = document.createElement('button')
    bouttonArticleRemove.setAttribute("class", "delete")
    bouttonArticleRemove.textContent = 'x'
    bouttonArticleRemove.addEventListener('click', deleteFunction)

    let inputArticlePrice = document.createElement('p')
    //  inputArticlePrice.setAttribute("type", "text")
    inputArticlePrice.setAttribute("class", "price")
    inputArticlePrice.textContent = var4


    divArticle1.appendChild(bouttonArticlePlus)
    divArticle1.appendChild(inputArticleQuantite)
    divArticle1.appendChild(bouttonArticleMoins)

    divArticle.appendChild(imgArticle)
    divArticle.appendChild(pArticle)
    divArticle.appendChild(inputArticle)
    divArticle.appendChild(divArticle1)
    divArticle.appendChild(bouttonArticleRemove)
    divArticle.appendChild(inputArticlePrice)

    section.appendChild(divArticle)
    shopItem.querySelectorAll('.size')[0].value = null
}

function ready() {

    let addToCarButtons = document.querySelectorAll('.addItem')
    for (let index = 0; index < addToCarButtons.length; index++) {
        let button = addToCarButtons[index];
        button.addEventListener('click', addToCartClicked)

    }

}
ready()



//***************************** */

function plus(event) {
    let button = event.target
    let shopItem = button.parentElement.parentElement

    console.log(quantite);
    if (isNaN(quantite)) {
        quantite = 0
    }
    quantite = shopItem.querySelectorAll(".plusmoins")[0].value
    quantite++
    shopItem.querySelectorAll(".plusmoins")[0].value = quantite

        
    updateTotal()
}


function moins(event) {
    let button = event.target
    let shopItem = button.parentElement.parentElement

    console.log(quantite);
    if (isNaN(quantite)) {
        quantite = 0
    }
    quantite = shopItem.querySelectorAll(".plusmoins")[0].value
    if (quantite != 0) {
        quantite--
    }
    shopItem.querySelectorAll(".plusmoins")[0].value = quantite

    updateTotal()
}



function deleteFunction(event) {
    let buttonClicked = event.target
    console.log(buttonClicked);
    buttonClicked.parentElement.remove();
    updateTotal() 

}


function updateTotal() {
    let addToCarButtons = document.querySelectorAll('.article')
    console.log('rrrrrrrrrrrrrrr');
    console.log(addToCarButtons.length);
    console.log('rrrrrrrrrrrrrrr');
    total = 0
    for (let index = 0; index < addToCarButtons.length; index++) {
        let shopItem1 = addToCarButtons[index]
        let quantite = parseInt(shopItem1.querySelectorAll(".plusmoins")[0].value)
        let price = parseInt(shopItem1.querySelectorAll(".price")[0].textContent)
        console.log('*****************');
        console.log(quantite);
        console.log(price);
        console.log(total);
        total = total + (quantite * price)
        console.log(total);
        console.log('///////////////////////');


    }
    document.getElementById('total').textContent = total
}




