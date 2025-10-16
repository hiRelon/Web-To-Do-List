const form = document.getElementById("isiForm");
const input = document.getElementById("itemInput");
const list = document.getElementById("daftar");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (input.value.trim() === "") {
        input.classList.add("invalid");
        input.classList.remove("valid");
        return;
    }

    const li = document.createElement("li");
    li.classList.add("listItem");

    const span = document.createElement("span");
    span.textContent = input.value;
    span.classList.add("taskText");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "×";
    deleteBtn.classList.add("delete");

    span.addEventListener("click", function(e) {
        span.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        li.remove();
    });

    li.append(span, deleteBtn);
    daftar.append(li);

    setTimeout(() => {
    li.classList.add("show");
    }, 10);

    input.value = "";
    input.classList.remove("invalid", "valid");
})

    