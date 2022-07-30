const persons = [
  {
    "First Name": "André",
    "Last Name": "Andrade",
    Phone: "(99) 9 9999-9999",
    Birthday: "01/10/1989",
  },
  {
    "First Name": "Silvana",
    "Last Name": "Silva",
    Phone: "(99) 9 9999-8888",
    Birthday: "01/04/1989",
  },
  {
    "First Name": "Ana",
    "Last Name": "Sant'Anna",
    Phone: "(11) 9 1234-1233",
    Birthday: "01/01/2000",
  },
  {
    "First Name": "Bernado",
    "Last Name": "Bernades",
    Phone: "(11) 9 1000-1233",
    Birthday: "01/01/2002",
  },
  {
    "First Name": "Fernanda",
    "Last Name": "Fernandes",
    Phone: "(11) 9 1000-9999",
    Birthday: "01/05/2001",
  },
];

function showProps(idDiv, idTitle) {
  if (document.getElementById(idDiv).style.display == "none") {
    hideByClass("props");
    removeClass("selected");
    document.getElementById(idDiv).style.display = "block";
    document.getElementById(idTitle).classList.add("selected");
  } else {
    document.getElementById(idDiv).style.display = "none";
    document.getElementById(idTitle).classList.remove("selected");
  }
}

function createUsers(users, main) {
  let count = 0;
  users.forEach((element) => {
    let cardDiv = document.createElement("div"),
      titleDiv = document.createElement("div"),
      propsDiv = document.createElement("div");
    titleContent = document.createTextNode(
      element["First Name"] + " " + element["Last Name"]
    );
    titleDiv.appendChild(titleContent);
    titleDiv.classList.add("title");
    titleDiv.setAttribute(
      "onclick",
      `showProps('props-${count}','title-${count}')`
    );
    titleDiv.setAttribute("id", `title-${count}`);
    cardDiv.appendChild(titleDiv);
    Object.keys(element).forEach((prop) => {
      let propDiv = document.createElement("div"),
        propDivContent = document.createTextNode(`${prop}: ${element[prop]}`);
      titleDiv.setAttribute(
        "title",
        titleDiv.title + propDivContent.nodeValue + "\n"
      );
      propDiv.appendChild(propDivContent);
      propsDiv.appendChild(propDiv);
    });
    propsDiv.classList.add("props");
    propsDiv.setAttribute("id", `props-${count}`);
    cardDiv.appendChild(propsDiv);
    cardDiv.classList.add("card");
    main.appendChild(cardDiv);
    count++;
  });
}

function hideByClass(className) {
  let elements = document.getElementsByClassName(className);
  Array.from(elements).forEach((element) => {
    element.style.display = "none";
  });
}

function removeClass(className) {
  let elements = document.getElementsByClassName(className);
  Array.from(elements).forEach((element) => {
    element.classList.remove(className);
  });
}

let main = document.getElementById("main");
createUsers(persons, main);
hideByClass("props");
