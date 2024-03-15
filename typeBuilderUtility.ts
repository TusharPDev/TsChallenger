// Define the base account interface with common properties
export interface BaseAccount {
    accountNumber: string;
    balance: number;
    owner: string;
}

// Define interfaces for specific account types
export interface SavingsAccount extends BaseAccount {
    type: 'savings';
    interestRate: number;
}

export interface CheckingAccount extends BaseAccount {
    type: 'checking';
    overdraftLimit: number;
}

export interface InvestmentAccount extends BaseAccount {
    type: 'investment';
    investmentType: string;
}

// Function to create an account
export default function createAccount<T extends BaseAccount>(account: T): T {
    return account;
}

