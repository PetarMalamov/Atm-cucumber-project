package fmi.pu;

public class Card {

	private String number;
	private String pin;
	private String accountNumber;

	public Card(String number,String pin,String accountNumber) {
		this.number = number;
		this.pin = pin;
		this.accountNumber = accountNumber;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public String getPin() {
		return pin;
	}

	public void setPin(String pin) {
		this.pin = pin;
	}

	public String getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}


	
}