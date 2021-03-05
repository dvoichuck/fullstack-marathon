let para;
let atts;

function mainFunc() {
    for (let i = 0;(para = document.getElementsByTagName("li")[i]); i++) {
        atts = para.attributes;
        if (!atts[0])
            para.className = "unknown";
        if (!atts[1])
            para.setAttribute("data-element", "none");

        let strong = atts[1].value.split(' ');
        let nl = document.createElement("BR");

        para.appendChild(nl);
        for (let i = 0; strong[i]; i++) {
            let elem = document.createElement("DIV");
            let line = document.createElement("DIV");
            elem.className = `elem ${strong[i]}`;
            if (strong[i] === "none")
                line.setAttribute("class", "line");
            para.appendChild(elem);
            elem.appendChild(line);
        }
    }
}

mainFunc();