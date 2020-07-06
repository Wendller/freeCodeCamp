function checkCashRegister(price, cash, cid) {
  
  let drawer = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };


  const allMoney = cid.reduce((total, value) => { return total + value[1] }, 0);

  let value = cash - price;
  let change = [];
  cid = cid.reverse();  

  if (value > allMoney) {
    return { status: "INSUFFICIENT_FUNDS", change: change }
  }

  if (value == allMoney) {
    for (let i = 0; i < cid.length; i++) {
      let currentValue = 0;
      if (value >= drawer[cid[i][0]]) {
        while (cid[i][1] > 0 && value >= currentValue) {
            currentValue += drawer[cid[i][0]];
            cid[i][1] -= drawer[cid[i][0]];
            cid[i][1] = Math.round(cid[i][1] * 100) / 100;
            
            if (currentValue > value) {
              currentValue -= drawer[cid[i][0]];
              break;
            }
        }
        
        change.push([cid[i][0], Number(currentValue.toFixed(1))]);
        value -= currentValue;
      
      } else {
        change.push([cid[i][0], 0]);
      }
    }

    return { status: "CLOSED", change: change.reverse() };
  }  

  if (value < allMoney) {
    for (let i = 0; i < cid.length; i++) {
      if (value > drawer[cid[i][0]] && cid[i][1] == 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      }
    }

  }

  if (value < allMoney) {
    for (let i = 0; i < cid.length; i++) {
      let currentValue = 0;
      if (value >= drawer[cid[i][0]]) {
        while (cid[i][1] > 0 && value >= currentValue) {
            currentValue += drawer[cid[i][0]];
            cid[i][1] -= drawer[cid[i][0]];
            cid[i][1] = Math.round(cid[i][1] * 100) / 100;
            
            if (currentValue > value) {
              currentValue -= drawer[cid[i][0]];
              break;
            }
        }
        
        change.push([cid[i][0], Number(currentValue.toFixed(2))]);
        value -= currentValue;
        value = Number(value.toFixed(2));
      } 
    }

    return { status: "OPEN", change: change };
  }  


}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));