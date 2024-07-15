function createNewDiv() {
   
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.style.display = 'flex';

    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';

    const contentText = document.createElement('p');
    contentText.innerText = 'Dragos Social Center Project --- Kartal/İstanbul';

    popupContent.appendChild(contentText);
    popup.appendChild(popupContent);

    document.body.appendChild(popup);

    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            document.body.removeChild(popup);
        }
    });
}
function createNewDiv1() {
   
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.style.display = 'flex';

    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';

    const contentText = document.createElement('p');
    contentText.innerText = 'Sports Center Project --- Maltepe/İstanbul';

    popupContent.appendChild(contentText);
    popup.appendChild(popupContent);

    document.body.appendChild(popup);

    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            document.body.removeChild(popup);
        }
    });
}

function createNewDiv2() {
   
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.style.display = 'flex';

    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';

    const contentText = document.createElement('p');
    contentText.innerText = 'Boğaziçi University Student Dormitory Project --- Beşiktaş/İstanbul';

    popupContent.appendChild(contentText);
    popup.appendChild(popupContent);

    document.body.appendChild(popup);

    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            document.body.removeChild(popup);
        }
    });
}
function createNewDiv3() {
   
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.style.display = 'flex';

    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';

    const contentText = document.createElement('p');
    contentText.innerText = 'Milas Archeological Museum Project --- Milas/Muğla';

    popupContent.appendChild(contentText);
    popup.appendChild(popupContent);

    document.body.appendChild(popup);

    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            document.body.removeChild(popup);
        }
    });
}

function createNewDiv4() {
   
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.style.display = 'flex';

    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';

    const contentText = document.createElement('p');
    contentText.innerText = 'Tiber Museum Project --- Z. LVI Grottarossa/Rome';

    popupContent.appendChild(contentText);
    popup.appendChild(popupContent);

    document.body.appendChild(popup);

    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            document.body.removeChild(popup);
        }
    });
}