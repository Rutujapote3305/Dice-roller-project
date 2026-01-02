function rolldice(){

    const numofdice = document.getElementById("input").value;
    const Result = document.getElementById("Result");
    const images = document.getElementById("images");
    const values = [];
    const images1 = [];

    for(let i=0; i<numofdice; i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images1.push(`<img src="diceimages/${value}.png">`);
    }

    Result.textContent = `dice: ${values.join(`, `)}`;
    images.innerHTML = images1.join(``);

}