package fmi.pu;

public class Account {
	
	private double balance;
	private String clientName;
	private String accountNumber;
	
	public Account(String accountNumber,String clientName,double balance) {
		this.accountNumber = accountNumber;
		this.clientName = clientName;
		this.balance = balance;
	}
	public double getBalance() {
		return balance;
	}
	public void setBalance(double balance) {
		this.balance = balance;
	}
	public String getClientName() {
		return clientName;
	}
	public void setClientName(String clientName) {
		this.clientName = clientName;
	}
	public String getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}

	

}
