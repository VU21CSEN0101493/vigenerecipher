function encrypt(text, keyword) {
    let ciphertext = "";
    keyword = keyword.toUpperCase();
    text = text.toUpperCase();

    let keywordIndex = 0;
    for (let i = 0; i < text.length; i++) {
        let letterCode = text.charCodeAt(i) - 65; 
        let keyCode = keyword.charCodeAt(keywordIndex) - 65;

        let shiftedCode = (letterCode + keyCode) % 26;
        let encryptedLetter = String.fromCharCode(shiftedCode + 65);

        ciphertext += encryptedLetter;

        keywordIndex = (keywordIndex + 1) % keyword.length; 
    }

    return ciphertext;
}

function decrypt(text, keyword) {
    let plaintext = "";
    keyword = keyword.toUpperCase();
    text = text.toUpperCase();

    let keywordIndex = 0;
    for (let i = 0; i < text.length; i++) {
        let letterCode = text.charCodeAt(i) - 65; 
        let keyCode = keyword.charCodeAt(keywordIndex) - 65;

        let shiftedCode = (letterCode - keyCode + 26) % 26; 
        let plaintextLetter = String.fromCharCode(shiftedCode + 65);

        plaintext += plaintextLetter;

        keywordIndex = (keywordIndex + 1) % keyword.length; 
    }

    return plaintext;
}

function multiEncrypt() {
    let keyword1 = document.getElementById("keyword1").value.toUpperCase();
    let keyword2 = document.getElementById("keyword2").value.toUpperCase();
    let plaintext = document.getElementById("plaintext").value.toUpperCase();

    let intermediateCiphertext = encrypt(plaintext, keyword1); 
    let finalCiphertext = encrypt(intermediateCiphertext, keyword2); 

    document.getElementById("ciphertext").value = finalCiphertext;
}

function multiDecrypt() {
    let keyword1 = document.getElementById("keyword1").value.toUpperCase();
    let keyword2 = document.getElementById("keyword2").value.toUpperCase();
    let ciphertext = document.getElementById("ciphertext").value.toUpperCase();

    let intermediatePlaintext = decrypt(ciphertext, keyword2); 
    let finalPlaintext = decrypt(intermediatePlaintext, keyword1); 

    document.getElementById("plaintext").value = finalPlaintext;
}
