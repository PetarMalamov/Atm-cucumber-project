package fmi.pu.Services;

import java.awt.List;
import java.util.ArrayList;

import fmi.pu.Account;
import fmi.pu.Card;

public class AtmService {
	
	static ArrayList<Account> accounts = new ArrayList<Account>();
	static ArrayList<Card> cards = new ArrayList<Card>();

	
	public static String withdrawalMoney(String cardNumber,String amount,String pin) {
		initialize();
		Card foundCard = findCard(cardNumber);
		
		if(foundCard == null) return "Няма намерена карта";
		
		if(!foundCard.getPin().equals(pin)) return "Невалиден пин код";
		
		Account foundAccount = findAccount(foundCard.getAccountNumber());
		
		if(foundAccount == null) return "Картата е невалидна";
		
		double accountBalance = foundAccount.getBalance();
		double amountLeft = accountBalance - Double.parseDouble(amount);
		
		if(amountLeft < 0) return "Недостик на средства";
		
		
		foundAccount.setBalance(amountLeft);
		
		return "Успешна транзакция";
	}
	
	public static String changePin(String cardNumber,String pin,String newPin) {
		initialize();
		
		if(pin.equals(newPin)) return "Смяната на паролата беше неуспешна,не може новата и старата парола да са еднакви";

		Card foundCard = findCard(cardNumber);
		
		if(foundCard == null) return "Няма намерена карта";
		
		foundCard.setPin(newPin);
		
		return "Смяната на паролата беше успешна";
	}
	
	public static void initialize(){
		Account account1 = new Account("iban1","Petar",4000);
		accounts.add(account1);
		
		Card card1 = new Card("asd123","1234","iban1");
		cards.add(card1);
	}
	
	private static Card findCard(String number) {
		Card foundCard = null;		
		for(Card card : cards) {
			if(card.getNumber().equals(number)) foundCard = card; 
		}
		return foundCard;
	}
	
	private static Account findAccount(String number) {
		Account foundAccount = null;		
		for(Account account : accounts) {
			if(account.getAccountNumber().equals(number)) foundAccount = account; 
		}
		return foundAccount;
	}
}
