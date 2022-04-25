const shape = document.getElementById("shape"),
    rtl = document.getElementById("rtl"),
    rtr = document.getElementById("rtr"),
    rbl = document.getElementById("rbl"),
    rbr = document.getElementById("rbr"),
    rh = document.getElementById("rh"),
    rw = document.getElementById("rw"),
    stl = document.getElementById("stl"),
    str = document.getElementById("str"),
    sbl = document.getElementById("sbl"),
    sbr = document.getElementById("sbr"),
    sh = document.getElementById("sh"),
    sw = document.getElementById("sw"),
    copyText = document.getElementById("outputToCopy"),
    output = document.getElementById("output");
let setRadius = () => {
    shape.style.width = rw.value + "px";
    shape.style.height = rh.value + "px";
    shape.style.borderTopLeftRadius = rtl.value + "%";
    shape.style.borderTopRightRadius = rtr.value + "%";
    shape.style.borderBottomLeftRadius = rbl.value + "%";
    shape.style.borderBottomRightRadius = rbr.value + "%";
    stl.innerHTML = rtl.value;
    str.innerHTML = rtr.value;
    sbl.innerHTML = rbl.value;
    sbr.innerHTML = rbr.value;
    sh.innerHTML = rh.value;
    sw.innerHTML = rw.value;
    output.innerHTML = "border-radius: " + rtl.value + "% " + rtr.value + "% " + rbr.value + "% " + rbl.value + "%;" +
        " width:" + rw.value + "px;" +
        " heigth:" + rh.value + "px";
    copyText.value = "border-radius: " + rtl.value + "% " + rtr.value + "% " + rbr.value + "% " + rbl.value + "%; " +
        "width:" + rw.value + "px; " +
        "heigth:" + rh.value + "px";
};

function copy() {
    copyText.select();
    copyText.setSelectionRange(0, 35);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}

(function () {
    rtl.setAttribute("max", "100");
    rtr.setAttribute("max", "100");
    rbl.setAttribute("max", "100");
    rbr.setAttribute("max", "100");
    rh.setAttribute("max", "200");
    rw.setAttribute("max", "200");
    rtl.setAttribute("min", "0");
    rtr.setAttribute("min", "0");
    rbl.setAttribute("min", "0");
    rbr.setAttribute("min", "0");
    rh.setAttribute("min", "50");
    rw.setAttribute("min", "50");
    rw.value = 150;
    rh.value = 150;
    setRadius();

})();