/**
    An atm has 100, 20, 9, and 1 Naira bills (NGN) available to be dispensed.  
    Given an amount between 0 and 10,000 Naira (inclusive) and assuming that the ATM wants to use as few bills as possible, 
    determine  the minimal number of 100, 20, 9, and 1 (NGN) bills the ATM needs to dispense (in that order).
 */
const atmMachineWithdrawal = (amountRequested) => {
  const moneyDenominations = [];
  const first = Math.floor(amountRequested / 100);
  const second = Math.floor((amountRequested % 100) / 20);
  const third = Math.floor(((amountRequested % 100) % 20) / 9);
  const fourth = Math.floor(((amountRequested % 100) % 20) % 9);

  moneyDenominations.push(first, second, third, fourth);
  return moneyDenominations;
};
console.log(atmMachineWithdrawal(1049));
