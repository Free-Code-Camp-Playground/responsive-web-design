const sumCID = (cid) =>{
  let sum = 0;
  for (let i = 0; i<cid.length; i++){
    sum += cid[i][1];
  }
  return parseFloat(sum.toFixed(2));
}

function checkCashRegister(price, cash, cid) {
  let changeCash = cash - price;
  let change = [];
  let cidCash = [...cid]; //Copy cid so we don't change it when no needed
  const cashName=[
            ["PENNY", 0.01], 
            ["NICKEL", 0.05], 
            ["DIME", 0.1], 
            ["QUARTER", 0.25], 
            ["ONE", 1], 
            ["FIVE", 5], 
            ["TEN", 10], 
            ["TWENTY", 20], 
            ["ONE HUNDRED", 100]
          ];
  if (changeCash > sumCID(cidCash)) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  else if (changeCash == sumCID(cidCash)) {
    return {status: "CLOSED", change: cid}
  }
  else {
    for (let i = cidCash.length-1; i>=0; i--){
      let changeDeb = 0;
      
      while (changeCash.toFixed(2) >= cashName[i][1] && cid[i][1] >= cashName[i][1]){
        changeCash -= cashName[i][1];
        changeDeb += cashName[i][1];
        cid[i][1] -= cashName[i][1];
      }
      
      if (changeDeb != 0){
        change.push([cashName[i][0], changeDeb]);
      }
    }
    
    if (changeCash > 0){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    } else {
      cid = cidCash;
      return {status: "OPEN", change: change};
    }
  }
}

let cid=[
          ["PENNY", 1.01],
          ["NICKEL", 2.05],
          ["DIME", 3.1],
          ["QUARTER", 4.25],
          ["ONE", 90],
          ["FIVE", 55],
          ["TEN", 20],
          ["TWENTY", 60],
          ["ONE HUNDRED", 100]
        ];

console.log(checkCashRegister(19.5, 20, cid));
                  
                  
