const elsTabsItem = document.querySelectorAll('.tabs__item');
const elTabsPanel = document.querySelectorAll('.tabpanels__item');
const elsTabLink = document.querySelectorAll('.js-tab-link');

function DeactivateTabItems () {
    elsTabsItem.forEach(function (elTabsItem) {
        elTabsItem.classList.remove('tabs__item--active');
    })
}

function DeactivateTabPanels () {
    elTabsPanel.forEach(function(elTabPanel) {
        elTabPanel.classList.remove('tabpanels__item-active');
    })
}



elsTabLink.forEach(function (elTabLink) {
    elTabLink.addEventListener('click', function (e) {
        // prevent page remove
        e.preventDefault();

        // remove active class from tabs__item element 
        DeactivateTabItems();
        // add active item to current tabs__item
        elTabLink.parentElement.classList.add('tabs__item--active');
        
        // remove active class from tabs__panels element
        DeactivateTabPanels ()

        // show active 
        // const activePanel =document.querySelector(`#${elTabLink.href.split('#')[1]}`)
        const activePanel = document.querySelector(elTabLink.dataset.target);
        activePanel.classList.add('tabpanels__item-active')
    })
})


// ACCARDION

const elTogglerBtns = document.querySelectorAll('.accardion__item-toggler');
const elAccardionItems =document.querySelectorAll('.accardion__item');


romoveActive = () => {  // arrow funtion
    elAccardionItems.forEach(function(elAccardionItem) {
        elAccardionItem.classList.remove('accardion__item--open');
    })
}

elTogglerBtns.forEach(elTogglerBtn => { //arrow function
    elTogglerBtn.addEventListener('click', function(){
        romoveActive();
        elTogglerBtn.closest('.accardion__item').classList.add('accardion__item--open')
    })
})
