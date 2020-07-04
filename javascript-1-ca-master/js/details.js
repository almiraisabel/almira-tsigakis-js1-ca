// duplicate and change fetch to see if you cant fetch id

fetch('https://api.magicthegathering.io/v1/cards?multiverseid=130483')
    .then(result => result.json())
  .then((res) => {
    myFunction(res);
  })
.catch(err => console.log(err))

function myFunction(result) {
    var createCard = result.cards;
    var cards = document.getElementById('property');
    var myCards = createCard.map(function(value){
    var myHTMLvariable = '<div><div class = "detail-container"><h1>' + value.name + '</h1><br/><img src= '+value.imageUrl+' class="details-image"><p>Property:' + value.type + '</p><br> <p>Property Color:' + value.colors + '</p> <br></div></div>';
		
	
		
        cards.innerHTML += myHTMLvariable;
    });
}

