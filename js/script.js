const challenges = [
    {
        name: "bin2dec",
        description: "Binary-to-Decimal number converter",
        challenge: "1-Beginner/Bin2Dec-App.md"
    },
    {
        name: "real2centavos",
        description: "Convert dollars to cents",
        challenge: "1-Beginner/Word-Frequency-App.md"
    },
]

const table = document.getElementById("table");
const createTable = () => {
    let contentMD = "";
    let content = "<tr>\n<th>Project</th>\n<th>Description</th>\n<th>Original Challenge</th>\n<th>GitHub</th>\n</tr>\n";
    for (let count = 0; count < challenges.length; count++) {
        content += "<tr>\n" +
            "<td><a href='./" + challenges[count].name + "/'>" + challenges[count].name + "</a></td>\n" +
            "<td>" + challenges[count].description + "</td>\n" +
            "<td><a href='https://github.com/gabrielsanva/app-ideas/blob/master/Projects/" + challenges[count].challenge + "'>Challenge</a></td>\n" +
            "<td><a href='https://github.com/gabrielsanva/app-ideas-my-resolutions/tree/main/" + challenges[count].name + "'>GitHub</a></td>\n" +
            "</tr>";

        contentMD += "[" + challenges[count].name + "](" + challenges[count].name + ")|" + challenges[count].description + "|" +
            "[Original Challenge](https://github.com/gabrielsanva/app-ideas/blob/master/Projects/" + challenges[count].challenge + ")|" +
            "[See Working](https://app-ideas-my-resolutions.vercel.app/" + challenges[count].name + ")\n";
    }
    table.innerHTML = content;
    console.log(contentMD);
}

const links = document.getElementsByTagName("a");
const linksBlank = () => {
    for (let count = 0; count < links.length; count++) {
        links[count].setAttribute("target", "_blank");
    }
}

(function () {
    createTable();
    linksBlank();

})()
