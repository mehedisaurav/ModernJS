
const flexBoxes = document.querySelectorAll("div .flexbox-item")
flexBoxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        // console.log( document.get(box.className.split(' ')[1]))
        document.querySelector(`.${box.className.split(' ')[1]}`).style.backgroundColor='white';
        var sound = new Audio("click_sound.mp3");
        sound.play();
        sound.pause();
    })
})
