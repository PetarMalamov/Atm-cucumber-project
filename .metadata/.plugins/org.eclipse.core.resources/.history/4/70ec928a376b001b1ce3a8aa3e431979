package Models;

import fmi.pu.Services.AtmService;

public class ChangePinModel {
	private String cardNumber;
	private String pin;
	private String newPin;
	private String responseMessage;
	

	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
		System.out.println("Добре дошли!");
	}

	public void setPin(String pin) {
		this.pin = pin;
	}

	public void setNewPin(String newPin) {
		this.newPin = newPin;
	}

	public void handleConfirm() {
		this.responseMessage = AtmService.changePin(cardNumber, pin, newPin);
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
