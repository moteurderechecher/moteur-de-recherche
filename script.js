document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.addEventListener("click", () => {
            alert(`Vous avez cliqué sur ${section.querySelector("h2").textContent}`);
        });
    });
});
