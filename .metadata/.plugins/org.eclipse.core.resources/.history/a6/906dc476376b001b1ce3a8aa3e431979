package Models;

import fmi.pu.Services.AtmService;

public class WithdrawalModel {
	
	private String cardNumber;
	private String amount;
	private String pin;
	private String responseMessage;
	

	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
		System.out.println("Добре дошли!");
	}


	public void setAmount(String amount) {
		this.amount = amount;
	}

	public void setPin(String pin) {
		this.pin = pin;
	}


	public void handleConfirm() {
		this.responseMessage = AtmService.withdrawalMoney(cardNumber, amount, pin); 
//		System.out.println("cardNumber " + cardNumber);
//		System.out.println("selectedOption "+ selectedOption);
//		System.out.println("amount "+amount);
//		System.out.println("pin "+ pin);
//		System.out.println("newPin "+ newPin);
//		System.out.println("responseMessage " + responseMessage);
	}
	
	public String getResponseMessage() {
		return this.responseMessage;
	}

}



