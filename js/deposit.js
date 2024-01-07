document.getElementById('depositBtn').addEventListener('click',function(){
   const previousDepositTotal = getElementText('depositTotal');
   const currentDeposit = getInputValue('depositInput');
   const previousBalance = getElementText('balanceTotal');
   
   if(isNaN(currentDeposit)){
    alert('Value Required');
}
else{
    const newDeposit = previousDepositTotal + currentDeposit;
    setElementText('depositTotal',newDeposit);
    const newBalance = currentDeposit + previousBalance;
    setElementText('balanceTotal',newBalance);
}
})