
function closeBrowser() {
    window.close();
}

function lightMode() {
    body.classList = [];
    body.classList.add('lightMode');

    document.getElementById('darkmode').innerHTML = /*html*/ `
    <button id="darkmodeButton" onclick="darkMode()">darkmode</button>
    `;
}

function darkMode() {
    body.classList = [];
    body.classList.add('darkMode');
    
    document.getElementById('darkmode').innerHTML = /*html*/ `
    <button id="darkmodeButton" onclick="lightMode()">lightmode</button>
    `;
}
