package main

import (
	"fmt"
	"math/rand"
)

// Card has the card suits and types in the deck
type Card struct {
	Type string
	Suit string
}

// Deck contains the cards to be shuffled and played
type Deck []Card

func CreateDeck() (deck Deck) {
	types := []string{"Two", "Three", "Four", "Five", "Six", "Seven",
		"Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"}

	suits := []string{"Club", "Spade", "Diamond", "Hearts"}

	// create the deck by looping and appending each suit and type to a card
	for i := 0; i < len(types); i++ {
		for n := 0; n < len(suits); n++ {
			card := Card{
				Type: types[i],
				Suit: suits[n],
			}
			deck = append(deck, card)
		}
	}
	return deck
}

func Shuffle(d Deck) Deck {
	for i := 0; i < len(d); i++ {
		randint := rand.Intn(i + 1)

		if i != randint {
			d[randint], d[i] = d[i], d[randint]
		}
	}
	return d
}

func Deal(d Deck, n int) {
	for i := 0; i < n; i++ {
		fmt.Println(d[i])
	}
}

func main() {
	deck := CreateDeck()
	Shuffle(deck)
	Deal(deck, 2)
	Shuffle(deck)
	Deal(deck, 2)
}
