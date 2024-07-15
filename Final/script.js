function createNewDiv() {
   
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.style.display = 'flex';

    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';

    const contentText = document.createElement('p');
    contentText.innerText = 'Dragos Sosyal Merkezi Projesi --- Kartal/İstanbul';

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
    contentText.innerText = 'Spor Merkezi Projesi --- Maltepe/İstanbul';

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
    contentText.innerText = 'Boğaziçi Üniversitesi Öğrenci Yurdu Projesi --- Beşiktaş/İstanbul';

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
    contentText.innerText = 'Milas Arkeoloji Müzesi Projesi --- Milas/Muğla';

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
    contentText.innerText = 'Tiber Nehir Müzesi Projesi --- Z. LVI Grottarossa/Roma';

    popupContent.appendChild(contentText);
    popup.appendChild(popupContent);

    document.body.appendChild(popup);

    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            document.body.removeChild(popup);
        }
    });
}