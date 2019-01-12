const changeHandler = () => {
    let inputText = document.querySelector('.inputText').value;
    let outputText = document.querySelector('.outputText');
    let textContainer = [...inputText];

    outputText.innerText = '';

    textContainer.forEach((obj, index) => {
        setTimeout(() => {
            outputText.textContent += obj;
        }, 150 * (index));
    });
    
}