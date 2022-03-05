var card = document.getElementsByClassName("card-info")[0];

const fechar = () => {
    card.style.display = "none";
};

const buscar = (e) => {
    e.preventDefault();
    card.style.display = "block";

    getApi("campinas")
        .then((json) => {
            console.log(json)
        })
        .catch((err) => {
            console.log(err)
        })
};

const getApi = (nome) => {
    return new Promise((resolve, reject) => {
        // fetch(`https://api.github.com/users/${nome}`)
        fetch(`http://api.hgbrasil.com/weather?key=05bf96d7&city_name=${nome}`)
            .then((response) => {
                if (response.status == 404) {
                    reject(response.message);
                }
                resolve(response.json());
            })
            .catch((error) => {
                reject(error);
            });
    });
};
