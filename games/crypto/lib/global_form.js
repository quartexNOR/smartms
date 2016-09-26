var _keySizeInBits = 128;
var _keySize = _keySizeInBits / 8;
var _text = 'Type your plaintext here. Then click "Encrypt" to encrypt it.';
var en_time, de_time;
function cmdEncryptClick() {
	$("#cmdEncrypt").attr("disabled", true);
	var b = 0,
	a = 1,
	d = false;
	var c = setInterval(function () {
			if (!d) {
				d = true;
				if (b == 0) {
					b++;
					_cmdEncryptClick()
				} else {
					if (b == a) {
						b++;
						clearInterval(c);
						$("#cmdEncrypt").attr("disabled", false)
					}
				}
				d = false
			}
		}, 100)
}
function _cmdEncryptClick() {
	$("#txtVerification").css({
		border : ""
	});
	$("#txtCiphertext").css({
		border : ""
	});
	//$("#div_save").hide();
	//$("#save_test").hide();
	//$("#success_test").hide();
	if ((document.getElementById("txtPlaintext") == null) || (document.getElementById("txtCiphertext") == null) || (document.getElementById("txtVerification") == null) || (document.getElementById("txtMessages") == null) || (document.getElementById("passphrase") == null)) {
		alert("form non valid!");
		return false
	}
	document.getElementById("txtCiphertext").value = "";
	document.getElementById("txtVerification").value = "";
	en_time = "";
	de_time = "";
	var c = document.getElementById("txtPlaintext").value;
	if (c.length == 0) {
		alert("Insert plaintext please!");
		return false
	}
	var h = document.getElementById("passphrase").value;
	if (h.length == 0) {
		alert("Insert passphrase please!");
		return false
	}
	document.getElementById("txtMessages").value = "Encrypting. Please wait...";
	try {
		
	var p = document.getElementById("txtPlaintext").value; 
	var k = document.getElementById("passphrase").value; 
	var i = document.getElementById("iv").value;
	
	var key = CryptoJS.enc.Hex.parse(k);
	var iv = CryptoJS.enc.Utf8.parse(i);
	var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse("test"), key,
		{
			keySize: 128 / 8,
			iv: iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7
		});

	var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
		keySize: 128 / 8,
		iv: iv,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7
	});

	
	document.getElementById("txtCiphertext").value = encrypted.toString();

	
		
		//var b = _encrypt(c.trim(), h.trim());
		//var a = b.status;
		//var f = b.time;
		//en_time = f;
		//if (a === "success") {
			//json_string = array2json(b);
			//document.getElementById("txtCiphertext").value = json_string;
			//$("#div_save").show();
			//$("#save_test").show();
			//$("#success_test").hide()
		//} else {
			//$("#div_save").hide();
			//$("#save_test").hide();
			//$("#success_test").hide();
			//$("#txtCiphertext").css({
			//	border : "2px solid red"
			//})
		//}
		//document.getElementById("txtMessages").value = "Done. Encryption took " + (f) + " milliseconds."
	} catch (d) {
		var f = 0;
		var g = "* " + d.message;
		document.getElementById("txtMessages").value = "Done. Encryption took " + (f) + " milliseconds.\r\n" + g;
		$("#txtCiphertext").css({
			border : "2px solid red"
		});
		en_time = ""
	}
	
	return true
}
function cmdVerifyClick() {
	$("#cmdVerify").attr("disabled", true);
	var b = 0,
	a = 1,
	d = false;
	var c = setInterval(function () {
			if (!d) {
				d = true;
				if (b == 0) {
					b++;
					_cmdVerifyClick()
				} else {
					if (b == a) {
						b++;
						clearInterval(c);
						$("#cmdVerify").attr("disabled", false)
					}
				}
				d = false
			}
		}, 100)
}
function _cmdVerifyClick() {
	//$("#txtVerification").css({
	//	border : ""
	//});
	//$("#div_save").hide();
	//$("#save_test").hide();
	//$("#success_test").hide();
	//if ((document.getElementById("txtPlaintext") == null) || (document.getElementById("txtCiphertext") == null) || (document.getElementById("txtVerification") == null) || (document.getElementById("txtMessages") == null) || (document.getElementById("passphrase") == null)) {
	//	alert("form non valid!");
	//	return false
	//}
	//document.getElementById("txtVerification").value = "";
	//var c = document.getElementById("txtCiphertext").value;
	//var i = document.getElementById("passphrase").value;
	//if (c.length == 0) {
	//	alert("Insert ciphertext please!");
	//	$("#txtCiphertext").css({
	//		border : "2px solid red"
	//	});
	//	return false
	//}
	//if (i.length == 0) {
	//	alert("Insert passphrase please!");
	//	return false
	//}
	//document.getElementById("txtMessages").value = "Decrypting. Please wait...";
	//try {
		
	var p = document.getElementById("txtPlaintext").value; 
	var k = document.getElementById("passphrase").value; 
	var i = document.getElementById("iv").value;
	
	var key = CryptoJS.enc.Hex.parse(k);
	var iv = CryptoJS.enc.Utf8.parse(i);
	var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse("test"), key,
		{
			keySize: 128 / 8,
			iv: iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7
		});

	var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
		keySize: 128 / 8,
		iv: iv,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7
	});
	
	document.getElementById("txtVerification").value = decrypted.toString(CryptoJS.enc.Utf8);

	
		//var h = _decrypt(c.trim(), i.trim());
		//var d = h.status;
		//var b = h.time;
		//de_time = b;
		//if (d === "success") {
	//		var a = h.plaintext;
		//	if (a != undefined) {
		//		document.getElementById("txtVerification").value = a;
		//		$("#div_save").show();
		//		$("#save_test").show();
		//		$("#success_test").hide()
		//	}
		//} else {
		//	$("#div_save").hide();
		//	$("#save_test").hide();
		//	$("#success_test").hide();
		//	$("#txtVerification").css({
		//		border : "2px solid red"
		//	})
		//}
		//document.getElementById("txtMessages").value = "Done. Decryption took " + (b) + " milliseconds.";
		//var j = document.getElementById("txtPlaintext").value;
		//if (j.length != a.length) {
		//	$("#txtVerification").css({
		//		border : "2px solid red"
		//	});
		//	var g = "ERROR: the plaintext does not match.\r\n";
		//	g += "--> " + j.length + " - " + a.length + " bytes";
		//	document.getElementById("txtMessages").value = "Done. Decryption took " + (b) + " milliseconds.\r\n" + g;
		//	g += "\r\n--> " + a;
		//	console.log(g)
		//} else {
		//	$("#txtVerification").css({
		//		border : "2px solid green"
		//	})
		//}
	//} catch (f) {
		//var b = 0;
		//var g = "* " + f.message;
		//document.getElementById("txtMessages").value = "Done. Decryption took " + (b) + " milliseconds.\r\n" + g;
		//$("#txtVerification").css({
		//	border : "2px solid red"
		//});
		//de_time = ""
	//}
	return true
}
function selKeySizeChange(a) {
	a = parseInt(a);
	if ((a == 128) || (a == 192) || (a == 256)) {
		_keySizeInBits = a;
		_keySize = _keySizeInBits / 8;
		return true
	}
	return false
};
