fetch('https://api.magicthegathering.io/v1/cards')
    .then(result => result.json())
  .then((res) => {
    myFunction(res);
  })
.catch(err => console.log(err))

function myFunction(result) {
    var createCard = result.cards;
    var cards = document.getElementById('cards');
    var myCards = createCard.map(function(value){
    var myHTMLvariable = '<div><div class = "container content"><h4 class = "name">' + value.name + '</h4><br/><img src= '+value.imageUrl+' class="card"> <p>Property Mana:' + value.manaCost + '</p><br> <p>Property Color:' + value.colors + '</p> <br><a '+value.id+'class="btn btn-success" href="details.html?multiverseid=130483&type=card">Details </a></div></div>';
	
		
        cards.innerHTML += myHTMLvariable;
    });
}

