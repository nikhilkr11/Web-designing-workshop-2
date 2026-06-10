abstract class BankAccount {
     int accountNumber;
    String accountHolderName;
    double balance;
     BankAccount(int accountNumber, String accountHolderName, double balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance; }
     int getAccountNumber() {
        return accountNumber;}
     String getAccountHolderName() {
        return accountHolderName;}
     double getBalance() {
        return balance;}
    void setBalance(double balance) {
        this.balance = balance; }
    void deposit(double amount) {
        balance += amount;
        System.out.println("Amount Deposited: " + amount); }
     void displayDetails() {
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder Name: " + accountHolderName);
        System.out.println("Balance: " + balance); }
    abstract void calculateInterest();}
class SavingsAccount extends BankAccount {
    SavingsAccount(int accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);}
    void calculateInterest() {
        double interest = balance * 0.05;
        System.out.println("Savings Account Interest: " + interest); }}
class CurrentAccount extends BankAccount {
     CurrentAccount(int accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance); }
    void calculateInterest() {
        double interest = balance * 0.03;
        System.out.println("Current Account Interest: " + interest);}}