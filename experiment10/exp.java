public class Exp10 {
    public static void main(String[] args) {

        // Create objects
        SavingsAccount sa = new SavingsAccount(101, "Nitish", 20000);
        CurrentAccount ca = new CurrentAccount(102, "Rahul", 15000);

        // Operations for Savings Account
        System.out.println("----- Savings Account -----");
        sa.deposit(2000);
        sa.displayDetails();
        sa.calculateInterest();

        // Operations for Current Account
        System.out.println("\n----- Current Account -----");
        ca.deposit(3000);
        ca.displayDetails();
        ca.calculateInterest();
    }
}