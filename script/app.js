const inputimgEl = document.querySelector("#input-img");
const btnEl = document.querySelector("#btn");
const cartEl = document.querySelector("#cart");
const nameEl = document.querySelector("#inp-name");
const priceEl = document.querySelector("#inp-price");
const cookEl = document.querySelector("#inp-cook");
const restauranEl = document.querySelector("#inp-restauran");

btnEl.addEventListener("click", () => {


    let div = document.createElement("div")
    div.style.backgroundColor = "#fff"
    div.style.marginBottom = "30px"
    div.style.display = "flex"
    div.style.justifyContent = "space-between"
    div.style.alignItems = "center"
    div.style.borderRadius = "25px"
    cartEl.appendChild(div)


    let divbox = document.createElement("div")
    div.appendChild(divbox)
    divbox.style.display = "flex"
    divbox.style.alignItems = "center"

    let imgbox = document.createElement("div")
    divbox.appendChild(imgbox)

    let divminbox = document.createElement("div")
    divbox.appendChild(divminbox)
    

    let divbox2 =document.createElement('div')
    div.appendChild(divbox2)
    divbox2.style.backgroundColor = "#F5D00D"
    divbox2.style.marginRight = "40px"

    let Img1 = document.createElement('img')
    Img1.src = inputimgEl.value
    imgbox.appendChild(Img1)
    Img1.style.width = "252px"
    Img1.style.height = "168px"
    Img1.style.borderRadius = "16px"
    Img1.style.marginLeft = "31px"
    Img1.style.marginTop = "26px"
    Img1.style.marginBottom = "26px"
    

    let p = document.createElement('p')
    p.innerHTML = `Taom nomi: ${nameEl.value}`
    divminbox.appendChild(p)
    p.style.marginLeft = "42px"
    p.style.marginTop = "-30px"

    let p2 = document.createElement('p')
    p2.innerHTML = `Taom narxi: ${priceEl.value}`
    divminbox.appendChild(p2)
    p2.style.marginLeft = "42px"
    p2.style.marginTop = "17px"

    let p3 = document.createElement('p')
    p3.innerHTML = `Taom oshpazi: ${cookEl.value}`
    divminbox.appendChild(p3)
    p3.style.marginLeft = "42px"
    p3.style.marginTop = "17px"

    let p4 = document.createElement('p')
    p4.innerHTML = `Taom restaran: ${restauranEl.value}`
    divminbox.appendChild(p4)
    p4.style.marginLeft = "42px"
    p4.style.marginTop = "17px"
    
    let month = new Date().getMonth();
    let today = new Date().getDate();
    let year = new Date().getFullYear();

    

    let data = document.createElement('p')
    data.innerHTML = `${month}/${today}/${year}`
    data.style.margin = "0"
    data.style.color = "#fff"
    divbox2.appendChild(data)
    
});












