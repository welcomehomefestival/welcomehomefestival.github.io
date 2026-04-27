const validPages = [
    "index.html",
    "about.html",
    "portfolio.html",
    "portfolio-page.html",
    "contact.html",
    "team.html",
    "team-details.html",
    "404.html"
];


// prende il nome della pagina corrente
let currentPage = window.location.pathname.split("/").pop();

// se l'utente entra nella root (/)
if (currentPage === "") {
    currentPage = "index.html";
}

// redirect alla pagina 404 se non valida
if (!validPages.includes(currentPage)) {
    window.location.href = "404.html";
}