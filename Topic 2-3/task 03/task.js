const arrTab = Array.from(document.querySelectorAll('.tab'));
const arrTabContent = Array.from(document.querySelectorAll('.tab__content'));

function activeTab(index) {
    
    currentTab = arrTab.findIndex(tab => tab.classList.contains('tab_active'))
    arrTab[currentTab].classList.remove('tab_active');
    arrTabContent[currentTab].classList.remove('tab__content_active');
    
    arrTab[index].classList.add('tab_active');
    arrTabContent[index].classList.add('tab__content_active');

}

arrTab.forEach((item, index) => {
    item.addEventListener('click', 
        () => {
            activeTab(index);
        }
    );

/*    item.onclick = () => {
        activeTab(index);
    }
    */
})