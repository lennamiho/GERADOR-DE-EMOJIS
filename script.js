document.addEventListener("DOMContentLoaded", function () {
    const nomeInput = document.getElementById("nome");
    const nomesDiv = document.getElementById("nomes").getElementsByTagName("ul")[0];

    nomeInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter" && nomeInput.value.trim() !== "") {
            const nome = nomeInput.value;
            nomeInput.value = "";

            const li = document.createElement("li");
            li.textContent = nome;
            nomesDiv.appendChild(li);
            addEmoji(li);
        }
    });

    function addEmoji(li) {
        fetch('emojis.json')
            .then(response => response.json())
            .then(data => {
                const emojisPredefinidos = data.emojis;
                const emoji = emojisPredefinidos[Math.floor(Math.random() * emojisPredefinidos.length)];

                const emojiSpan = document.createElement("span");
                emojiSpan.textContent = emoji;
                li.appendChild(emojiSpan);
            })
            .catch(error => {
                console.error("Erro ao carregar emojis:", error);
            });
    }
});
