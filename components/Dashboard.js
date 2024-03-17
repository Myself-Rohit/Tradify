import LeftSidebar from "./LeftSidebar.js"
import RightSidebar from "./RightSidebar.js"
document.getElementById("left-sidebar").innerHTML = LeftSidebar()
document.getElementById("right-sidebar").innerHTML = RightSidebar()


    const logos = [{
        id:1,
        name:"RN Enterprises",
        price:1000,
        image:"../images/RNEnterprises.jpg"
    },
    {
        id: 2,
        name: "AI Powered",
        price: 600,
        image: "../images/AIPowered.jpg"
    },
    {
        id: 3,
        name: "YJ Enterprise",
        price: 600,
        image: "../images/YJEnterprise.jpg"
    },
    {
        id: 4,
        name: "Google",
        price: 600,
        image: "../images/Google.jpg"
    },
    {
        id: 5,
        name: "HP Enterprise",
        price: 600,
        image: "../images/HPEnterprise.jpg"
    },{
        id: 6,
        name: "Amazon",
        price: 600,
        image: "../images/Amazon.jpg"
    }
]

const card = logos.map((info) => {
    return `<div class="card"><img src=${info.image} key=${info.id} />
    <span class="gap"></span>
    <p class="description">${info.name}<span class="gap"></span>Rs. ${Math.floor(Math.random() * 800) + 100}</p>
    </div>`
})
document.querySelector(".main").innerHTML += card
const updatePrice = () => {
    document.querySelector(".main").innerHTML =""
    const card = logos.map((info) => {
    return `<div class="card"><img src=${info.image} />
    <span class="gap"></span>
    <p class="description">${info.name}<span class="gap"></span>Rs. ${Math.floor(Math.random() * 1000) + 100}</p>
    </div>`
})
document.querySelector(".main").innerHTML += card
    logos.map((item) => {
        const newPrice = Math.floor(Math.random())
        
    console.log(item.price)
      return  item.price = newPrice;
    });
}

setInterval(() => {
    updatePrice()
    return ()=>updatePrice()
}, 120000)


