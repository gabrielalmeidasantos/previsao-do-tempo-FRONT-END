var card = document.getElementsByClassName("card-info")[0];

const fechar = () => {
    card.style.display = "none";
};

const buscar = (e) => {
    e.preventDefault();
    card.style.display = "block";
};