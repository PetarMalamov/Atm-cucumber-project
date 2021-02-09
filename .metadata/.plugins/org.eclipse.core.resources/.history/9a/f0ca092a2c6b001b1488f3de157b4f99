package fmi.pu;

import java.util.ArrayList;

public class Atm {

	private ArrayList<Card> cards;

	public Atm() {
	}
	
	public void Initialize() {
		Card card1 = new Card("asd123","1234",40000);
		Card card2 = new Card("asd456","4312",120);
		Card card3 = new Card("asd789","2233",312);
		cards.add(card1);
		cards.add(card2);
		cards.add(card3);
	}
	
	private Card findCard(String number) {
		Card foundCard = null;		
		for(Card card : cards) {
			if(card.getNumber().equals(number)) foundCard = card; 
		}
		return foundCard;
	}
	
	public String withdrawal(String number,double amount,String pin) {
		Card foundCard = findCard(number);		
		
		if(foundCard==null) return "Няма намерена карта";
		if(!foundCard.getPin().equals(pin)) return "Невалиден пин код";
		
		double cardAmount = foundCard.getAmount();
		double amountLeft = cardAmount - amount;
		
		if(amount < 0) return "Недостик на средства";
		
		foundCard.setAmount(amountLeft);
		return "Успешна транзакция";
	}
	
	public String deposit(String number,double amount) {
		Card foundCard = findCard(number);		
		
		if(foundCard==null) return "Няма намерена карта";
		
		double cardAmount = foundCard.getAmount();
		double newAmount = cardAmount + amount;
		
		foundCard.setAmount(newAmount);
		return "Транзакцията беше успешна";
	}
	
	public String xhangePin(String number,String pin) {
		Card foundCard = findCard(number);		
		
		if(foundCard==null) return "Няма намерена карта";
		
		String cardPin = foundCard.getPin();
		
		if(cardPin.equals(pin)) return "Новата пароала е същата като старата";
		
		foundCard.setPin(pin);
		return "Смяната на паралота беше успешна";
	}

}
