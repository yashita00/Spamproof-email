// Encoded email by Base 64
function decryptEmail(encoded) {
    var address = atob(encoded);
    window.location.href = 'mailto:' + address;
}

// By javascript Code
{
    coded = "ASKq.AS8Ae@AS7AT373w.wqT"
    key = "M8pztTlKuAnXYjkJb3xghqWGLZ907c4aF5SPODVdB1rmEfNiUQsvIwyeCH2oR6"
    shift = coded.length
    link = ""
    for (i = 0; i < coded.length; i++) {
        if (key.indexOf(coded.charAt(i)) == -1) {
            ltr = coded.charAt(i)
            link += (ltr)
        } else {
            ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length
            link += (key.charAt(ltr))
        }
    }
    document.write("<a href='mailto:" + link + "'>Email-obfuscator</a>")
}