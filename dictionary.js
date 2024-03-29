fetch("/dictionary.json")
    .then(response => response.json())
    .then(dictionary => {
        for (let [key, value] of Object.entries(dictionary)) {
            let link = document.createElement("a");
            link.setAttribute("href", `/slownik/${key}`);
            link.appendChild(document.createTextNode(value));

            let paragraph = document.createElement("p");
            paragraph.appendChild(link);

            document.getElementById("results").appendChild(paragraph);
        }

        document.getElementById("loading").style.display = "none";
    });