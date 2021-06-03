function scrollTo(element) {
	$('html, body').animate({
		scrollTop: $(element).offset().top
	}, 2000);
}

function generateKeys() {
	var xmlhttp;
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var data = JSON.parse(xmlhttp.responseText);
			var public_key = data.publicKey;
			var private_key = data.privateKey;
			document.querySelector(".textarea1").value = public_key;
			document.querySelector(".textarea2").value = private_key;
		}
	};
	xmlhttp.open("POST", '/rsa_sifravimas', true);
	xmlhttp.send();
}

function transformData(x) {
	var data;
	var key;
	var encrypted;
	var xmlhttp;
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var responseData = JSON.parse(xmlhttp.responseText);
			if (responseData.encrypted == "true") {
				document.querySelector(".textarea5").value = responseData.data;
				scrollTo('.headingOfEncryptedData');
			}

			if (responseData.encrypted == "false") {
				document.querySelector(".textarea7").value = responseData.data;
				scrollTo('.headingOfDecryptedData');
			}
		}

		if (xmlhttp.readyState == 4 && xmlhttp.status == 500) {
			if (x == "encrypt") {
				var errorMessage = "Netinkamas arba neįvestas viešasis raktas! Sugeneruokite raktų porą ir įkopijuokite tinkantį raktą!";
				document.querySelector(".textarea5").placeholder = errorMessage;
				scrollTo('.headingOfEncryptedData');
			}

			if (x == "decrypt") {
				var errorMessage = "Netinkamas arba neįvestas privatusis raktas! Sugeneruokite raktų porą ir įkopijuokite tinkantį raktą!";
				document.querySelector(".textarea7").placeholder = errorMessage;
				scrollTo('.headingOfDecryptedData');
			}
        }
	};
	xmlhttp.open("POST", '/rsa_sifravimas', true);
	xmlhttp.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
	if (x == "encrypt") {
		data = document.querySelector(".textarea3").value;
		key = document.querySelector(".textarea4").value; 
		encrypted = "false";
	}
	if (x == "decrypt") {
		data = document.querySelector(".textarea5").value; 
		key = document.querySelector(".textarea6").value;  
		encrypted = "true";
	}
	xmlhttp.send(JSON.stringify({ "data": data, "key": key, "encrypted": encrypted }));
}

function copyKey(x) {
	if (x == 'public') {
		var key = document.querySelector(".textarea1").value;
		if (key == '') {
			var errorMessage = "Sugeneruokite viešąjį raktą!";
			document.querySelector(".textarea4").placeholder = errorMessage;
		} else {
			document.querySelector(".textarea4").value = key;
		}
	}

	if (x == 'private') {
		var key = document.querySelector(".textarea2").value;
		if (key == '') {
			var errorMessage = "Sugeneruokite privatųjį raktą!";
			document.querySelector(".textarea6").placeholder = errorMessage;
		} else {
			document.querySelector(".textarea6").value = key;
		}
	}
}




