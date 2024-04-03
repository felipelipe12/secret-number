let attemptNumber = 1;
let randomNumber = generateNumber();
console.log(randomNumber);

function generateNumber() {
    return parseInt(Math.random() * 10 + 1);
}

function hintText(className, text) {
    let field = document.querySelector('.' + className);
    field.innerHTML = text;
}

function validateNumber() {
    let writtenNumber = document.querySelector('input').value;
    let attemptWord = attemptNumber > 1 ? 'attempts!' : 'attempt!';

    document.getElementById('modal').style.display = 'block';

    if (writtenNumber == randomNumber) {
        hintText('modal_title', 'You win!');
        hintText('modal_subtitle', 'Congratulations!!');
        hintText('modal_number', `${attemptNumber}`);
        hintText('modal_word', `${attemptWord}`);
        hintText('button', 'Yeah!');
    } else if (writtenNumber == '' || writtenNumber == '0' || writtenNumber == 'e') {
        hintText('modal_title', 'Invalid value!');
        hintText('modal_subtitle', 'The value is invalid!');
        hintText('modal_number', '');
        hintText('modal_word', '');
        hintText('button', 'I understand');
    } else {
        hintText('modal_title', 'You lose!');
        hintText('modal_number', `${attemptNumber}`);
        hintText('modal_word', `${attemptWord}`);
        hintText('button', 'Try again');
        
        if (writtenNumber > randomNumber) {
            hintText('modal_subtitle', 'The number is SMALLER!');
        } else {
            hintText('modal_subtitle', 'The number is HIGHER!');
        }
        attemptNumber++;
        clearInput();
    }
}

function clearInput() {
    writtenNumber = document.querySelector('input');
    writtenNumber.value = '';
}

function hideModal() {
    document.getElementById('modal').style.display = 'none';
}

function restartGame() {
    window.location.reload();
}