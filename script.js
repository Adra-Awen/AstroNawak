/* DATE FOOTER */
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

/* MODALE */
// Récupération des élements HTML 

const cartes = document.querySelectorAll('.pop-up');
const overlay = document.getElementById('overlay');
const fermer = document.getElementById('fermer');
const titreModale = document.getElementById('titre-modale');
const contenuModale = document.getElementById('contenu-modale');

//Prévisions fictives
const previsions = {
    "Bélier": "Une belle journée s'annonce ! En amour, laisse parler tes sentiments.",
    "Taureau": "Prends le temps de te recentrer sur tes envies.",
    "Gémeaux": "Une nouvelle opportunité pourrait pointer le bout de son nez.",
    "Cancer": "Écoute ton intuition et accorde-toi du temps.",
    "Lion": "Ta créativité sera ton meilleur atout aujourd'hui.",
    "Vierge": "Organise tes idées et avance à ton rythme.",
    "Balance": "Une belle harmonie pourrait s'installer dans tes relations.",
    "Scorpion": "Fais confiance à ton instinct.",
    "Sagittaire": "Une envie de nouveauté pourrait te surprendre.",
    "Capricorne": "Tes efforts commencent à porter leurs fruits.",
    "Verseau": "Laisse libre cours à ton imagination.",
    "Poissons": "Une journée propice à la douceur et à l'introspection."
};

// Ouverture modale
cartes.forEach(carte => {
    carte.addEventListener("click", (event) => {
        event.preventDefault();
        const signe = carte.dataset.signe;
        titreModale.textContent = signe;
        contenuModale.innerHTML = `<p class="texte-modale">${previsions[signe]}</p>`;
        overlay.classList.add("active");
    });
});

//Fermeture modale croix
fermer.addEventListener("click", () => {
    overlay.classList.remove("active");
});

// Fermeture modale à l'extérieur
overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        overlay.classList.remove("active");
    }
});