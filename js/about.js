function replaceText(){
    let header = document.querySelector("h1");
    let paragraph1 = document.querySelector("blockquote").children[0];
    let paragraph2 = document.querySelector("blockquote").children[1];

    let textArray = [header, paragraph1, paragraph2];

    for(i = 0; i < textArray.length; i++){
       textArray[i].innerText = textArray[i].innerText.replace("The", "Replaced");
       textArray[i].innerText = textArray[i].innerText.replace("the", "replaced");
    }
}

setTimeout(replaceText, 4000);
