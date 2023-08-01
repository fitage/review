const details = [
    {
        id: 1,
        img: "https://res.cloudinary.com/dznqygxgt/image/upload/v1690796135/isaac_profile_pic_cpbgtb.jpg",
        name: "Isaac Fatogun",
        job: "Web Developer",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"

    },
    {
        id: 2,
        img: "https://res.cloudinary.com/dznqygxgt/image/upload/v1673946241/samples/people/boy-snow-hoodie.jpg",
        name: "Denver James",
        job: "Product Manager",
        text: "lorem12 Software, Lorem Ipsum, Blog, Blogging. udlap. Universidad de las Américas Puebla. 6rb pengikut. Ikuti. ¿Cómo hacer un índice automático en Word?"

    },
    {
        id: 3,
        img: "https://res.cloudinary.com/dznqygxgt/image/upload/v1673946256/cld-sample.jpg",
        name: "Angelina Jolie",
        job: "Software Engineer",
        text: "Lorem ipsum is derived from the Latin dolorem ipsum roughly translated as pain itself. Lorem ipsum presents the sample font and orientation of writing on web pages and other software applications where content is not the main"

    },
    {
        id: 4,
        img: "https://res.cloudinary.com/dznqygxgt/image/upload/v1673946237/samples/people/kitchen-bar.jpg",
        name: "John Jens",
        job: "Cloud Engineer",
        text: "MPTL Analog Watch - For Men - Buy MPTL Analog Watch - For Men LOREM 12-23 Online at Rs. in India Only at Flipkart.com. - Great Discounts, Only Genuine"

    },
    {
        id: 5,
        img: "https://res.cloudinary.com/dznqygxgt/image/upload/v1673946243/samples/people/bicycle.jpg",
        name: "Felix Joe",
        job: "Designer",
        text: "Buy Acnos Brand New Stylish Lather Analog Watches For Men LOREM12 in India at best price from GreatSeller. Free Shipping, Easy Returns & Refunds"

    },

]

const img = document.getElementById("img")
const fulllName = document.getElementById("fullname-text")
const jobText = document.getElementById("job-text")
const reviewText = document.getElementById("review-p")

const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const randomBtn = document.querySelector(".random-btn")

let currentItem = 0

window.addEventListener("DOMContentLoaded", function(){
    showDetails()
})

function showDetails (){
    const item = details[currentItem]
    img.src = item.img 
    fulllName.textContent = item.name
    jobText.textContent = item.job
    reviewText.textContent = item.text
}

nextBtn.addEventListener("click", function(){
    currentItem++
    if(currentItem > details.length -1){
        currentItem = 0
    }
    showDetails()
})
prevBtn.addEventListener("click", function(){
    currentItem--
    if(currentItem < 0){
        currentItem = details.length-1
    }
    showDetails()
})

randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * details.length)
    showDetails()
})

    