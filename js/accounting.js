function calCulation() {
  // get input value
  const income = parseInt(document.getElementById("income").value);
  const foodCost = parseInt(document.getElementById("food").value);
  const rentCost = parseInt(document.getElementById("rent").value);
  const clothCost = parseInt(document.getElementById("cloth").value);
  // input validation
  if (!income || !foodCost || !rentCost || !clothCost) {
    alert("plese input income and all expenss");
    return;
  }

  const totalaCost = foodCost + rentCost + clothCost;
  const balanceIs = income - totalaCost;

  const totalExpensesTag = document.getElementById("totalExpenses");
  totalExpensesTag.innerText = totalaCost;
  const balanceTag = document.getElementById("balance");
  balanceTag.innerText = balanceIs;
  const calculateButton = document.getElementById("calculate");
  console.log(calculateButton);
}

function saving() {
  const savingAmount = document.getElementById("saving-amount");
  const remainingAmount = document.getElementById("remaining-amount");
  //console.log(savingAmount, remainingAmount);
  const savingPercentage = parseInt(
    document.getElementById("savingPercentage").value
  );
  if (savingPercentage < 0 || savingPercentage > 100) {
    alert("your saving percentage must be 1 to hundred");
    return;
  }
  const balanceTaka = document.getElementById("balance").innerText;

  const savingsTaka = (balanceTaka * savingPercentage) / 100;
  savingAmount.innerText = savingsTaka;
  const remainingTaka = balanceTaka - savingsTaka;
  remainingAmount.innerText = remainingTaka;

  //console.log(balanceTaka);
  // console.log(savingPercentage);
}
