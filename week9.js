class Menu {
  start() {
    console.log('Game started!');
   
}
}

class Card {
    constructor(value, suit) {
      this.value = value;
      this.suit = suit;
    }
  }
  

  class Deck {
    constructor() {
      this.cards = [];
      this.createDeck();
      this.shuffle();
    }
  
    createDeck() {
      const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
      const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  
      for (const suit of suits) {
        for (const value of values) {
          this.cards.push(new Card(value, suit));
        }
      }
    }
  
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  
    dealCard() {
      return this.cards.pop();
    }
  }
  

  class Player {
    constructor(name) {
      this.name = name;
      this.deck = [];
      this.score = 0;
    }
  
    playCard() {
      return this.deck.pop();
    }
  
    receiveCards(cards) {
      this.deck = this.deck.concat(cards);
    }
  
    incrementScore() {
      this.score++;
    }
  }
  
 
  const deck = new Deck();
  const player1 = new Player('Player 1');
  const player2 = new Player('Player 2');
  
  for (let i = 0; i < 26; i++) {
    player1.deck.push(deck.dealCard());
    player2.deck.push(deck.dealCard());
  }
  

  while (player1.deck.length > 0 && player2.deck.length > 0) {
    const card1 = player1.playCard();
    const card2 = player2.playCard();
  
    if (card1.value > card2.value) {
      player1.receiveCards([card1, card2]);
      player1.incrementScore();
    } else if (card2.value > card1.value) {
      player2.receiveCards([card1, card2]);
      player2.incrementScore();
    } else {
      player1.receiveCards([card1]);
      player2.receiveCards([card2]);
    }
  }
  

  if (player1.score > player2.score) {
    console.log('Player 1 wins!');
  } else if (player2.score > player1.score) {
    console.log('Player 2 wins!');
  } else {
    console.log('It\'s a tie!');

  }

  const menu = new Menu();