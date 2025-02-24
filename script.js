const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector(".nav-menu")

const clickItchButton = document.getElementById("click__itch")

const playGumballMayhemButton = document.getElementById("play__gumball_mayhem")
const playDevilSharkButton = document.getElementById("play__devil_shark")
const playCuddleNightmareButton = document.getElementById("play__cuddle_nightmares")


const clickYoutubeButton = document.getElementById("click__youtube")
const clickTiktokButton = document.getElementById("click__tiktok")
const clickInstagramButton = document.getElementById("click__instagram")

const clickKofiButton = document.getElementById("click__kofi")

clickItchButton.addEventListener ('click', () => {
    window.location.href = "https://02kristian.itch.io/"
})

playGumballMayhemButton.addEventListener ('click', () => {
    window.location.href = "https://02kristian.itch.io/gumball-mayhem"
})

playDevilSharkButton.addEventListener ('click', () => {
    window.location.href = "https://02kristian.itch.io/devil-shark"
})

playCuddleNightmareButton.addEventListener ('click', () => {
    window.location.href = "https://02kristian.itch.io/cuddle-nightmares"
})

clickYoutubeButton.addEventListener ('click', () => {
    window.location.href = "https://www.youtube.com/@summoningkristiangames"
})

clickTiktokButton.addEventListener ('click', () => {
    window.location.href = "https://www.tiktok.com/@summoningkristiangames"
})

clickInstagramButton.addEventListener ('click', () => {
    window.location.href = "https://www.instagram.com/summoningkristiangames/"
})


clickKofiButton.addEventListener ('click', () => {
    window.location.href = "https://ko-fi.com/kristianhammond"
})


