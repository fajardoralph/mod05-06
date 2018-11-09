var currentBalance = 230,
 	transactionFee = 2.50,
 	loadValue;

let loadBalance = document.querySelector('#loadBalance').innerHTML = currentBalance;
	 
function load(currentBalance,loadValue) {
	let balance = currentBalance - loadValue;
	return balance;
}

let transactionHistory = document.querySelector('#transactionHistory');

let load10btn = document.querySelector('#load10btn');
	load10btn.addEventListener('click',function(){

		if (currentBalance >= (10 + transactionFee)) {
				let loadValue = 10 + transactionFee;
				let transaction = load(currentBalance,loadValue);
				let customerNo = document.querySelector('#customerNo').value;
			    currentBalance = transaction;
				console.log(currentBalance)
			transactionHistory.innerHTML += `<li class="list-group-item">P 10.00 is loaded to ${customerNo}. Current Balance: ${currentBalance.toFixed(2)}</li>`;
			let loadBalance = document.querySelector('#loadBalance').innerHTML = currentBalance.toFixed(2);
		}
		else {
			transactionHistory.innerHTML += `<li class="list-group-item">Insufficient Balance.</li>`
		}
	});

let load50btn = document.querySelector('#load50btn');
	load50btn.addEventListener('click',function(){
		let loadValue = 50;
		if (currentBalance >= (50 + transactionFee)) {
				let loadValue = 50 + transactionFee;
				let transaction = load(currentBalance,loadValue);
				let customerNo = document.querySelector('#customerNo').value;
			    currentBalance = transaction;
				console.log(currentBalance)
			transactionHistory.innerHTML += `<li class="list-group-item">P 50.00 is loaded to ${customerNo}. Current Balance: ${currentBalance.toFixed(2)}</li>`;
			let loadBalance = document.querySelector('#loadBalance').innerHTML = currentBalance.toFixed(2);
		}
		else {
			transactionHistory.innerHTML += `<li class="list-group-item">Insufficient Balance.</li>`
		}
	});

let load100btn = document.querySelector('#load100btn');
	load100btn.addEventListener('click',function(){
		let loadValue = 100;
		if (currentBalance >= (100 + transactionFee)) {
				let loadValue = 100 + transactionFee;
				let transaction = load(currentBalance,loadValue);
				let customerNo = document.querySelector('#customerNo').value;
			    currentBalance = transaction;
				console.log(currentBalance)
			transactionHistory.innerHTML += `<li class="list-group-item">P 100.00 is loaded to . Current Balance: ${currentBalance.toFixed(2)}</li>`;
			let loadBalance = document.querySelector('#loadBalance').innerHTML = currentBalance.toFixed(2);
		}
		else {
			transactionHistory.innerHTML += `<li class="list-group-item">Insufficient Balance.</li>`
		}
	});

