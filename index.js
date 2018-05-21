var coin = {
    state: 0,
    flip: function() {
        this.state = Math.round(Math.random());
        console.log(this.state);
        // randomly set this.state to be either 0 or 1
    },
    toString: function() {
        let flipResultDiv = document.getElementById("coinResults");
        
        if(this.state === 0){
            let flipResultString = document.createTextNode("Heads ");
            flipResultDiv.appendChild(flipResultString);
            return "H";
        }else{
            let flipResultString = document.createTextNode("Tails ");
            flipResultDiv.appendChild(flipResultString);
            return "T";
        }
        
        // return “H” or “T” depending on whether this.state is 0 or 1
    },
    toHTML: function() {
        var img = document.createElement("img");

        if(coin.toString() === "H"){
            img.src = './images/quarterHeads.png';
            document.body.appendChild(img);
        }else{
            img.src = './images/quarterTails.jpg';
            document.body.appendChild(img);
        }
        // set the properties of the image element to show either heads or tails
        // return img;
    }
};

for(let i = 0; i < 20; i++ ){
    coin.flip();
    coin.toHTML();
}

