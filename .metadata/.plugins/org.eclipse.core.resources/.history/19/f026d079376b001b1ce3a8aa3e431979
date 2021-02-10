import static org.junit.Assert.assertEquals;

import Models.WithdrawalModel;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class WithdrawalSteps {
	WithdrawalModel model = new WithdrawalModel();
	
	@Given("^Потребителят поставя кредитна/дебитна карта с номер \"([^\"]*)\" в банкомата$")
	public void InsertCard(String cardNumber) throws Throwable {
		model.setCardNumber(cardNumber);
	}

	@When("^Избере сума \"([^\"]*)\"$")
	public void ChooseAmount(String amount) throws Throwable {
	    model.setAmount(amount);
	}

	@When("^Въведе пин код \"([^\"]*)\"$")
	public void EnterPin(String pin) throws Throwable {
	    model.setPin(pin);
	}

	@When("^Натисне бутона за потвърждение$")
	public void ClickConfirmButton() throws Throwable {
	    model.handleConfirm();
	}
	
	@Then("^Показване на съобщение \"([^\"]*)\"$")
	public void ShowEndMessage(String expectedMessage) throws Throwable {
	    assertEquals(expectedMessage,model.getResponseMessage());
	}
}
