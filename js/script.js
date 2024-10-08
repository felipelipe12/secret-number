let secretNumber = parseInt(Math.random() * 10 + 1);

function inputLength(input, maxLength) {
    input.addEventListener('input', function () {
        if (this.value.length > maxLength) {
            this.value = this.value.slice(0, maxLength);
        }
    });
}

function showPopup(popup) {
    popup.classList.remove('hidden');
    popup.classList.add('show');
}

function hidePopup(popup) {
    popup.classList.remove('show');
    popup.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', function () {
    inputLength(document.getElementById('inputNumber'), 2);
});

document.getElementById('buttonConfirm').addEventListener('click', function () {
    const inputNumber = parseInt(document.getElementById('inputNumber').value);

    const popupValidate = document.getElementById('popupValidate');
    const messageValidate = document.getElementById('messageValidate');

    if (isNaN(inputNumber)) {
        messageValidate.textContent = "Please enter valid value.";
        showPopup(popupValidate);
        return;
    }

    if (inputNumber < 1 || inputNumber > 10) {
        messageValidate.textContent = "Please enter a number from 1 to 10.";
        showPopup(popupValidate);
        return;
    }

    const popupResult = document.getElementById('popupResult');
    const messageResult = document.getElementById('messageResult');
    const valueResult = document.getElementById('valueResult');

    if (inputNumber < secretNumber) {
        messageResult.textContent = "You lose! The number is:";
        valueResult.textContent = "Bigger";
    } else if (inputNumber > secretNumber) {
        messageResult.textContent = "You lose! The number is:";
        valueResult.textContent = "Smaller";
    } else {
        messageResult.textContent = "You win! The number is:";
        valueResult.textContent = secretNumber;
    }
    showPopup(popupResult);
});

document.getElementById('buttonValidate').addEventListener('click', function () {
    const popupValidate = document.getElementById('popupValidate');
    hidePopup(popupValidate);
});

document.getElementById('resultContinue').addEventListener('click', function () {
    const popupResult = document.getElementById('popupResult');
    hidePopup(popupResult);
});

document.getElementById('resultRestart').addEventListener('click', function () {
    const popupResult = document.getElementById('popupResult');
    hidePopup(popupResult);

    document.getElementById('inputNumber').value = '';

    secretNumber = parseInt(Math.random() * 10 + 1);
});