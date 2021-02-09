import static org.junit.Assert.assertEquals;

import Models.AtmModel;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps {
	AtmModel atmModel = new AtmModel();
	
	@Given("^Потребителят поставя кредитна/дебитна карта с номер \"([^\"]*)\" в банкомата$")
	public void InsertCard(String cardNumber) throws Throwable {
	    atmModel.setCardNumber(cardNumber);
	}

	@Given("^Избере опция \"([^\"]*)\"$")
	public void ChooseOption(String option) throws Throwable {
	    atmModel.setOption(option);
	}

	@When("^Избере сума \"([^\"]*)\"$")
	public void ChooseAmount(String amount) throws Throwable {
		atmModel.setAmount(amount);
	    
	}

	@When("^Въведе пин код \"([^\"]*)\"$")
	public void EnterPin(String pin) throws Throwable {
	    atmModel.setPin(pin);
	}
	
	@When("^Въведе нов пин код \"([^\"]*)\"$")
	public void EnterNewPin(String newPin) throws Throwable {
	    atmModel.setNewPin(newPin);
	}

	@When("^Натисне бутона за потвърждение$")
	public void PressConfirmButton() throws Throwable {
	    atmModel.handleConfirm();
	}
	
	@Then("^Показване на съобщение \"([^\"]*)\"$")
	public void ShowEndMessage(String expectedMessage) throws Throwable {
	    assertEquals(expectedMessage,atmModel.getResponseMessage());
	}

}
