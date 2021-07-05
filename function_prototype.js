let matchCount=0;
const flexBoxes = document.querySelectorAll("div .flexbox-item")

flexBoxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        // console.log( document.get(box.className.split(' ')[1]))
        // var sound = new Audio("click_sound.mp3");
        // sound.play();        
        // document.querySelector(`.${box.className.split(' ')[1]}`).style.backgroundColor='white';
        document.querySelector(`.${box.className.split(' ')[1]}`).classList.add("slide");
        // sound.pause();
        matchCount++;
        // setTimeout(matchingBlock(), 400);
        transitionMove(box);
    })
})

//grab the DOM element button

const matchingBlock =()=> {
    if(matchCount == 2){
        const sliders = document.querySelectorAll(".slide .label-1")
        // console.log(sliders)
        let first = sliders[0];
        let second = sliders[1];
        if(first.innerHTML == second.innerHTML){
            first.parentElement.classList.remove("slide")
            second.parentElement.classList.remove("slide")
            // first.classList.add("none-display")
            // second.classList.add("none-display")
        }
        else{
            first.parentElement.classList.remove("slide")
            second.parentElement.classList.remove("slide")
        }
        matchCount=0;
    }
}


const transitionMove = (box)=>{
    console.log(box);
    // let item13 = document.querySelector(".flexbox-item-13")
    // // let X=item13.getBoundingClientRect().x;
    // // let Y = item13.getBoundingClientRect().y;
    // console.log(box.getBoundingClientRect().y)
    // console.log(box.getBoundingClientRect().x)
    // // item13.style.transform = `translateY(${box.getBoundingClientRect().y}px)`;
    // // item13.style.transform = `translateX(${box.getBoundingClientRect().x}px)`;
    // // item13.style.transition = 'transform 1s';
    // box.style.transform = 'translateY(400px)';
    // box.style.transform += 'translateX(400px)';
    // box.style.transition = 'transform 1s';

    // box.style.transform = `translateY(${X}}px)`;
    // box.style.transform = `translateY(${Y}}px)`;
    
    const footerGrid = document.querySelector(".footer-grid");
    footerGrid.appendChild(box);
    box.classList.add('animate');
    footerGrid.style.transition = 'transform 1s';
    box.style.transition = 'transform 1s';
}


