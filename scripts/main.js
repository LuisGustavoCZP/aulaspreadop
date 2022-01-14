function CriarButtons (...args) 
{
    const mainButtons = document.getElementById("mainbuttons");
    args.forEach(l => {mainButtons.innerHTML += `<button onclick="ChangeTo('${l}')">Questão ${l.toUpperCase()}</button>`;});    
}
var mainScript;

function ChangeTo (l)
{
    if(mainScript) {
        mainScript.remove();
    }
    mainScript = document.createElement("script");
    mainScript.src = `scripts/${l}.js`;
    document.getElementById("resultQ").innerText = `Resultados ${l.toUpperCase()}`;
    document.body.append(mainScript);
}

function PrintLog (...args) 
{
    const results = document.getElementById("results");
    results.innerText = "";
    args.forEach(x => { results.innerText += x; }); 
}

CriarButtons (["a", "b", "c"]);