/*____Aos Animations____*/
AOS.init();

/*____Dark Mode Toggle____*/           
let toggleMode = document.getElementById("toggleMode");
let mainLogo = document.getElementById("mainLogo");
toggleMode.addEventListener("click", function(){
    document.body.classList.toggle("modeChange");
    toggleMode.classList.toggle("ToggleModeBtn");
    if(document.body.classList.contains("modeChange")){
        mainLogo.src = "images/footerLogo.png";
    }
    else{
        mainLogo.src = "images/logo.png";
    }
})

/*____SignUpLogin Lock Details____*/   
let lockDetails = document.querySelectorAll(".lockDetails");
let lockInfoImg = document.querySelectorAll(".lockInfoImg");
let passwordData = document.querySelectorAll(".passwordData");

lockDetails.forEach((lockDatas) => {
    lockDatas.addEventListener("click", function(){    
    lockDatas.classList.toggle("unlock");
    if(lockDatas.classList.contains("unlock")){
        lockInfoImg.forEach((allImgs) => {
            allImgs.src = "images/hide.png";
        })   
        passwordData.forEach((passwords) => {
            passwords.type = "text";
        })             
    }
    else{
        lockInfoImg.forEach((allImgs) => {
            allImgs.src = "images/view.png";
        })                 
         passwordData.forEach((passwords) => {
            passwords.type = "password";
        })           
    }        
})
})

/*____Destination Logic____*/ 
let locationSearch = document.getElementById("locationSearch");
let searchBtn = document.getElementById("searchBtn");
let destinationItem = document.querySelectorAll(".destinationItem");

let handleClick = () => {
    let userInput = locationSearch.value.toLowerCase().trim();
    destinationItem.forEach((item) => {
        let finalItem = item.textContent.toLowerCase();
        if(finalItem.includes(userInput)){
            item.style.display = "block";
        }
        else{
            item.style.display = "none";            
        }                     
    })
    locationSearch.value = "";        
}

searchBtn.addEventListener("click", handleClick);

/*____Destinations Count____*/ 
/*____Animated Counter Logic____*/
const explorersCount = document.getElementById("explorersCount");
const destinationsCount = document.getElementById("destinationsCount");
const yearsCount = document.getElementById("yearsCount");

let countUp = (element, target, suffix) => {
    let current = 0;
    let speed = target / 50; // Speed control

    let timer = setInterval(() => {
        current += speed;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
};

// Call the function for each target
countUp(explorersCount, 2000, "+");
countUp(destinationsCount, 100, "+");
countUp(yearsCount, 20, "+");

