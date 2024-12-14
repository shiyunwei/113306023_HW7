document.addEventListener("DOMContentLoaded", () => {
    const nameLabel = document.getElementById("nameLabel");
    const editButton = document.getElementById("editName");
    let isEditing = false;

    editButton.addEventListener("click", () => {
        if (isEditing) {
            const inputField = document.getElementById("nameInput");
            nameLabel.textContent = inputField.value;
            nameLabel.style.display = "block";
            inputField.remove();
            editButton.textContent = "edit";
        } else {
            const inputField = document.createElement("input");
            inputField.type = "text";
            inputField.id = "nameInput";
            inputField.value = nameLabel.textContent;
            nameLabel.style.display = "none";
            nameLabel.insertAdjacentElement("afterend", inputField);
            editButton.textContent = "save";
        }
        isEditing = !isEditing;
    });

    const addMusicButton = document.getElementById("addMusic");
    const musicForm = document.getElementById("musicForm");
    const musicSection = document.getElementById("musicSection");
    const addMusicForm = document.getElementById("addMusicForm");

    addMusicButton.addEventListener("click", () => {
        musicForm.style.display = "block";
    });

    addMusicForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const musicLink = document.getElementById("musicLink").value.trim();
        const musicName = document.getElementById("musicName").value.trim();

        if (!musicLink || !musicName) {
            alert("請完整填寫所有欄位！");
            return;
        }

        const musicItem = document.createElement("div");
        musicItem.className = "song";

        const link = document.createElement("a");
        link.href = musicLink;
        link.target = "_blank";

        const img = document.createElement("img");
        img.src = "Youtube.jpg";
        img.alt = "Youtube Icon";

        const description = document.createElement("p");
        description.textContent = musicName;

        link.appendChild(img);
        musicItem.appendChild(link);
        musicItem.appendChild(description);

        musicSection.appendChild(musicItem);

        musicForm.style.display = "none";
        addMusicForm.reset();
    });
});
