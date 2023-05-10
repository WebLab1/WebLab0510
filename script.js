const insert = () => {

    let type = document.querySelector('#type').value 
    let label = document.querySelector('#label').value 

    switch(type){
        case 'text': appendText(label)
            break
        case 'button': appendButton(label)
            break
        case 'textfield': appendTextField(label)
            break
        case 'checkbox': appendCheckbox(label)
            break
        case 'radio': appendRadio(label)
            break
        case 'file': appendFile(label)
            break            
    }
    
    makeElementDraggable(document.querySelector('.goat').firstChild)

}

const appendText = (label = "Default") => {
    let elem = document.createElement('input');
    elem.setAttribute('placeholder', label);
    elem.setAttribute('class', 'form-control mt-2');

    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'btn btn-danger delete-btn ms-2');
    deleteBtn.textContent = 'Delete';
    
    deleteBtn.addEventListener('click', () => {
        elem.remove();
        deleteBtn.remove();
    });

    let container = document.createElement('div');
    container.setAttribute('class', 'goat d-flex justify-content-between');
    container.appendChild(elem);
    container.appendChild(deleteBtn);

    document.querySelector('#displaytext').appendChild(container);
}

const appendButton = (label = "Default") => {

    let elem = document.createElement('button')
 
    elem.setAttribute('class', 'btn btn-primary form-control mt-2')
    elem.textContent = label

    document.querySelector('#displaybutton').append(elem)

    let deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class', 'btn btn-danger delete-btn ms-2')
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click', () => {
        elem.remove()
        deleteBtn.remove()
    })

    let container = document.createElement('div');
    container.setAttribute('class', 'goat d-flex justify-content-between');
    container.appendChild(elem);
    container.appendChild(deleteBtn);

    document.querySelector('#displaybutton').appendChild(container);

}

const appendTextField = (label = "Default") => {

    let elem = document.createElement('input')
 
    elem.setAttribute('placeholder', label)
    elem.setAttribute('class', 'form-control mt-2')

    document.querySelector('#displaytextfield').append(elem)

    let deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class', 'btn btn-danger delete-btn')
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click', () => {
        elem.remove()
        deleteBtn.remove()
    })

    let container = document.createElement('div');
    container.setAttribute('class', 'goat d-flex justify-content-between align-items-center');
    container.appendChild(elem);
    container.appendChild(deleteBtn);

    document.querySelector('#displaytextfield').appendChild(container);

}

const appendCheckbox = (label = "Default") => {

    let elem = document.createElement('input')

    elem.setAttribute('type', 'checkbox')
    elem.setAttribute('id', label)
    elem.setAttribute('name', label)
    elem.setAttribute('class', 'form-check-input mt-2')

    let elemLabel = document.createElement('label')
    elemLabel.setAttribute('for', label)
    elemLabel.textContent = label;

    let container1 = document.createElement('div')
    container1.setAttribute('class', 'goat form-check d-flex align-items-center justify-content-center')
    container1.append(elem,elemLabel)
    document.querySelector('#displaycheckbox').append(container1)

    let deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class', 'btn btn-danger delete-btn ms-2')
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click', () => {
        elem.remove()
        elemLabel.remove()
        deleteBtn.remove()
    })
    
    let container = document.createElement('div');
    container.setAttribute('class', 'd-flex justify-content-between');
    container.appendChild(elem);
    container.appendChild(elemLabel);
    container.appendChild(deleteBtn);

    document.querySelector('#displaycheckbox').appendChild(container);
}

const appendRadio = (label = "Default") => {

    let elem = document.createElement('input')

    elem.setAttribute('type', 'radio')
    elem.setAttribute('id', label)
    elem.setAttribute('name', label)
    elem.setAttribute('class', 'form-check-input mt-2')

    let elemLabel = document.createElement('label')
    elemLabel.setAttribute('for', label)
    elemLabel.textContent = label;

    let container1= document.createElement('div')
    container1.setAttribute('class', 'form-check')
    container1.append(elem,elemLabel)
    document.querySelector('#displayradio').append(container1)

    let deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class', 'btn btn-danger delete-btn ms-2')
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click', () => {
        elem.remove()
        elemLabel.remove()
        deleteBtn.remove()
    })
    let container = document.createElement('div');
    container.setAttribute('class', 'd-flex justify-content-between');
    container.appendChild(elem);
    container.appendChild(elemLabel);
    container.appendChild(deleteBtn);

    document.querySelector('#displayradio').appendChild(container);
}

const appendFile = (label = "Default") => {

    let elem = document.createElement('input')

    elem.setAttribute('type', 'file')

    let elemLabel = document.createElement('label')
    elemLabel.setAttribute('for', label)
    elemLabel.textContent = label;

    let container1 = document.createElement('div')
    container1.setAttribute('class', 'form-check')
    container1.append(elem,elemLabel)
    document.querySelector('#displayfile').append(container1)

    let deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class', 'btn btn-danger delete-btn ms-2')
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click', () => {
        elem.remove()
        elemLabel.remove()
        deleteBtn.remove()
    })    
    let container = document.createElement('div');
    container.setAttribute('class', 'goat d-flex justify-content-between');
    container.appendChild(elem);
    container.appendChild(elemLabel);
    container.appendChild(deleteBtn);

    document.querySelector('#displayfile').appendChild(container);
}

const makeElementDraggable = (element) => {
    let isDragging = false
    let currentX
    let currentY
    let initialX
    let initialY
    let xOffset = 0
    let yOffset = 0

    element.addEventListener("click", function(event) {
        if (!isDragging) {
          dragStart(event);
        } else {
          dragEnd(event);
        }
      });
      element.addEventListener("mousemove", drag);

    function dragStart(e) {
        initialX = e.clientX - xOffset
        initialY = e.clientY - yOffset

        if (e.target === element) {
            isDragging = true
        }
    }

    function dragEnd(e) {
        initialX = currentX
        initialY = currentY

        isDragging = false
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault()

            currentX = e.clientX - initialX
            currentY = e.clientY - initialY

            xOffset = currentX
            yOffset = currentY

            setTranslate(currentX, currentY, element)
        }
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)"
    }
}