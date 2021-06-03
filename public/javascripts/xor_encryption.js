function scrollTo(element) {
	$('html, body').animate({
		scrollTop: $(element).offset().top
	}, 2000);
}

function encrypt() {
	var xmlhttp;
	var data = document.querySelector(".textarea1").value;
	var key = document.querySelector(".textarea2").value;

	if (data != '' && key != '') {
		xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var receivedData = xmlhttp.responseText;
				document.querySelector(".textarea3").value = receivedData;
				scrollTo('.headingOfEncryptedData');
			}
		};
		xmlhttp.open("POST", '/xor_sifravimas', true);
		xmlhttp.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
		xmlhttp.send(JSON.stringify({ "data": data, "key": key, "encrypted": 'false' }));
	} else {
		var errorMessage = 'Neįvedėte rakto ir (arba) teksto užšifravimui!';
		document.querySelector(".textarea3").placeholder = errorMessage;
		scrollTo('.headingOfEncryptedData');
    }
}

function decrypt() {
	var xmlhttp;
	var data = document.querySelector(".textarea3").value;
	var key = document.querySelector(".textarea4").value;

	if (data != '' && key != '') {
		xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var receivedData = xmlhttp.responseText;
				document.querySelector(".textarea5").value = receivedData;
				scrollTo('.headingOfDecryptedData');
			}
		};
		xmlhttp.open("POST", '/xor_sifravimas', true);
		xmlhttp.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
		xmlhttp.send(JSON.stringify({ "data": data, "key": key, "encrypted": 'true' }));
	} else {
		var errorMessage = 'Neįvedėte rakto ir (arba) teksto dešifravimui!';
		document.querySelector(".textarea5").placeholder = errorMessage;
		scrollTo('.headingOfDecryptedData');
    }
}

function copyKey() {
	var key = document.querySelector(".textarea2").value;
	if (key == '') {
		var errorMessage = "Neįvestas raktas šifravimui!";
		document.querySelector(".textarea4").placeholder = errorMessage;
	} else {
		document.querySelector(".textarea4").value = key;
	}
}









