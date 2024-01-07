document.getElementById('withdrawBtn').addEventListener('click',function(){
    const previouswithdrawTotal = getElementText('withdrawTotal');
    const currentwithdraw = getInputValue('withdrawInput');
    const previousBalance = getElementText('balanceTotal');
   
if(isNaN(currentwithdraw)){
    alert('Value Required');
}
else{
    if(currentwithdraw>previousBalance){
        alert("NAI TO KI TULBI BAAAP")                    
    }
    else{
        const newwithdraw = previouswithdrawTotal + currentwithdraw;
        setElementText('withdrawTotal',newwithdraw);
        const newBalance = previousBalance - currentwithdraw;
        setElementText('balanceTotal',newBalance);
    }
}
   
 })