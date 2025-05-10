function showGift() {
    const name = document.getElementById("name").value;
    if (name.trim() !== "") {
        document.getElementById("userName").textContent = name;
        document.getElementById("setup").classList.add("hidden");
        document.getElementById("reveal").classList.remove("hidden");
    }
}
