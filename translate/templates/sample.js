window.addEventListener("DOMContentLoaded", conversion(), false);

function translation() {
    var text = document.getElementById("target").value;
    text = text.replace(" ", "%20");
    const link = "https://www.deepl.com/translator#en/ja/" + text;
    window.open(link, "_blank");
};
function copy() {
    var copy_text = document.getElementById("target");
    copy_text.select();
    document.execCommand("copy");
    alert("コピーできました！ : " + copyTarget.value);
};

function conversion() {
    const textareaElem = document.getElementById("source");

    const currentLengthElem = document.getElementById("target");

    const b = RegExp("(\.)([A-Z])", "g");
    const haifun = RegExp("([a-zA-Z])(-)([a-zA-Z])","g");

    textareaElem.addEventListener("input", (event) => {
        let source_text = event.target.value;

        source_text = source_text.replace(b, "$1 $2")
        source_text = source_text.replace(haifun, "$1$3");
        currentLengthElem.innerText = source_text;

    })
};