const changeHandler = () => {
    let inputText = document.querySelector('.inputText').value;
    let outputText = document.querySelector('.outputText');
    let textContainer = inputText.split('');

    outputText.innerText = '';
    
    let i = 0;

    textContainer.forEach((obj, index) => {
        setTimeout(() => {
            outputText.innerText += obj
        }, 200 * (index + 1));
    });
    
}