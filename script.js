const menuBtn = document.querySelector('.menu'),
closeBtn = document.querySelector('.close'),
navBox = document.querySelector('.nav-links'),
navLinks = document.querySelectorAll('.nav-links li'),
masterContainer = document.querySelector('.mastercraft-box'),
analysisContainer = document.querySelector('.analysis'),
mainContainer = document.querySelector('.container'),
subContainer = document.querySelector('.sub-container'),
backBtn = document.querySelector('.back-btn'),
backProjectContainer = document.querySelector('.back-this-project-box'),
closeModalBtn = document.querySelector('.back-this-project-close'),
bambooBtn = document.getElementById('bamboo'),
bambooLine = document.querySelector('.bamboo-line'),
bambooFooter = document.querySelector('.bamboo-footer'),
bambooPledge = document.querySelector('#bamboo-pledge-val'),
blackEditionBtn = document.getElementById('black-edition'),
editionLine = document.querySelector('.edition-line'),
editionFooter = document.querySelector('.edition-footer'),
editionPledge = document.querySelector('#black-edition-pledge-val'),
bookmarkBtn = document.querySelector('.bookmark-box'),
bambooContinueBtn = document.querySelector('.bamboo-continue'),
editionContinueBtn = document.querySelector('.edition-continue'),
analysisVal = document.querySelector('.price'),
totalBackersTxt = document.querySelector('.backers'),
analysisBar = document.querySelector('.analysis-bar'),
bambooRewardBtn = document.querySelector('.bamboo-reward'),
editionRewardBtn = document.querySelector('.edition-reward'),
completedContainer = document.querySelector('.completed-card'),
gotItBtn = document.querySelector('.got-it');




gotItBtn.addEventListener('click', ()=>{
    completedContainer.classList.toggle('none');
    
    masterContainer.classList.remove('bg-toggler')
    analysisContainer.classList.remove('bg-toggler')
    subContainer.classList.remove('bg-toggler')
})


let bookmarkFlag = false;
let totalOfBackers = 5007,
priceVal = 89914,
addedVal,
bambooStock = 101,
editionStock = 64;

function reward(){
    backProjectContainer.classList.toggle('none');
    subContainer.style.pointerEvents = 'none';
    masterContainer.classList.add('bg-toggler')
    analysisContainer.classList.add('bg-toggler')
    subContainer.classList.add('bg-toggler')
}

bambooRewardBtn.addEventListener('click',()=>{
    reward();
    bambooBtn.click();
    bambooPledge.focus();
})

editionRewardBtn.addEventListener('click', ()=>{
    reward();
    blackEditionBtn.click();
    editionPledge.focus();
})

function addComma(num){
    let numStr = `${num}`.split('').reverse().join('');
    const max_size = 3;
    const yardstick = new RegExp(`.{${max_size}}`, 'g');
    const pieces = numStr.match(yardstick);
    const accumulated = (pieces.length * max_size);
    const modulo = numStr.length % accumulated;
    if (modulo) pieces.push(numStr.slice(accumulated));
    return pieces.map(e=>e.split('').reverse().join('')).reverse().join(',')
}

function calculate(btn){
    backProjectContainer.classList.toggle('none');
    
    totalOfBackers++;
    totalBackersTxt.textContent = addComma(totalOfBackers);

    addedVal = +btn.previousElementSibling.lastElementChild.value;
    
    priceVal += addedVal;
    analysisVal.textContent = '$'+ addComma(priceVal);
    subContainer.style.pointerEvents = 'auto';

    analysisBar.style.width = `${(priceVal/1000).toFixed(2)}%`;

    
    completedContainer.classList.toggle('none')

}

bambooContinueBtn.addEventListener('click',()=>{
    calculate(bambooContinueBtn);
    bambooBtn.checked=false;

    bambooStock--;
    document.querySelectorAll('.bamboo-stock').forEach(el =>{
        el.textContent = bambooStock;
    })

    bambooLine.classList.add('div-none');
    bambooFooter.classList.add('div-none');
    bambooPledge.style.borderColor = 'hsl(0, 5%, 91%)';
})

editionContinueBtn.addEventListener('click', ()=>{
    calculate(editionContinueBtn);
    blackEditionBtn.checked = false;

    editionStock--;
    document.querySelectorAll('.edition-stock').forEach(el =>{
        el.textContent = editionStock;
    })

    editionLine.classList.add('div-none');
    editionFooter.classList.add('div-none');
    editionPledge.style.borderColor = 'hsl(0, 5%, 91%)';
});

bookmarkBtn.addEventListener('click', ()=>{
    if(!bookmarkFlag){
        bookmarkBtn.firstElementChild.src = 'images/icon-bookmarked.svg';
        bookmarkBtn.lastElementChild.textContent = 'Bookmarked';
        bookmarkBtn.lastElementChild.style.color = 'hsl(176, 72%, 28%)';
        bookmarkFlag = true;
    }else{
        bookmarkBtn.firstElementChild.src = 'images/icon-bookmark.svg';
        bookmarkBtn.lastElementChild.textContent = 'Bookmark';
        bookmarkBtn.lastElementChild.style.color = 'hsl(0, 0%, 0%)';
        bookmarkFlag = false;
    }
    
})

bambooBtn.addEventListener('change',()=>{
    if(bambooBtn.checked){
        bambooLine.classList.remove('div-none');
        bambooFooter.classList.remove('div-none');
        bambooPledge.style.borderColor = 'hsl(176, 72%, 28%)';
        bambooPledge.focus();
    }else{
        bambooLine.classList.add('div-none');
        bambooFooter.classList.add('div-none');
        bambooPledge.style.borderColor = 'hsl(0, 5%, 91%)';
    }
})

blackEditionBtn.addEventListener('change', ()=>{
    if(blackEditionBtn.checked){
        editionLine.classList.remove('div-none');
        editionFooter.classList.remove('div-none');
        editionPledge.style.borderColor = 'hsl(176, 72%, 28%)';
        editionPledge.focus();
    }else{
        editionLine.classList.add('div-none');
        editionFooter.classList.add('div-none');
        editionPledge.style.borderColor = 'hsl(0, 5%, 91%)';
    }
})

backBtn.addEventListener('click', ()=>{
    backProjectContainer.classList.toggle('none');
    subContainer.style.pointerEvents = 'none';

    masterContainer.classList.add('bg-toggler')
    analysisContainer.classList.add('bg-toggler')
    subContainer.classList.add('bg-toggler')
})

closeModalBtn.addEventListener('click', ()=>{
    backProjectContainer.classList.toggle('none');
    subContainer.style.pointerEvents = 'auto';

    masterContainer.classList.remove('bg-toggler')
    analysisContainer.classList.remove('bg-toggler')
    subContainer.classList.remove('bg-toggler')
})

function showHide(){
    navBox.classList.toggle('hidden');
    menuBtn.classList.toggle('hidden');
    closeBtn.classList.toggle('hidden');
}

menuBtn.addEventListener('click', ()=>{
    showHide();
    masterContainer.classList.add('bg-toggler')
    analysisContainer.classList.add('bg-toggler')
    mainContainer.classList.add('bg-toggler')
})

closeBtn.addEventListener('click', ()=>{
    showHide();
    masterContainer.classList.remove('bg-toggler');
    analysisContainer.classList.remove('bg-toggler');
    mainContainer.classList.remove('bg-toggler');
})

navLinks.forEach(link =>{
    link.addEventListener('click', ()=>{
        showHide();
        masterContainer.classList.remove('bg-toggler');
        analysisContainer.classList.remove('bg-toggler');
    mainContainer.classList.remove('bg-toggler');
    })
})