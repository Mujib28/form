let namePerson = document.getElementsById("nm");
let jobPerson = document.getElementById("pk");
let hobbyPerson = document.getElementById("hb");
let nationalPerson = document.getElementById("nt");
let element = document.getElementById("card");
let submitButton = document.getElementById("btn-sub");
let edit = document.getElementById("btn-edit");
let card = document.getElementById("form.html");
let data = [];

const card = document.getElementById('card');
const container = document.getElementById('card-container');

cardContainer.addEventListener('click', (event) => {
  if (event.target.id === 'btn-delete') {
    const cardElement = event.target.closest('.card');

    cardElement.delete();
  }
});


card.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('nm').value;
  const job = document.getElementById('pk').value;
  const hobby = document.getElementById('hb').value;
  const nationality = document.getElementById('nt').value;

  const card = `
    <div class="card">
      <div class="card-head">
        <img src="man icon.png">
      </div>
      <div class="card-body">
        <p>Nama : ${name}</p>
        <p>Pekerjaan : ${pekerjaan}</p>
        <p>Hobi : ${hobby}</p>
        <p>Nationality : ${Nationality}</p>
        <p>Biodata : ${Bio}</p>
        <button id="btn-edit">Edit</button>
        <button id="btn-delete">Delete</button>
      </div>
    </div>
  `;

  cardContainer.innerHTML += form.html;
  card.reset();
});



const btnDelete = document.getElementById('btn-delete');

btnDelete.addEventListener('click', function () {
    
    const cardToDelete = btnDelete.parentNode.parentNode;

    cardTodelete.Delete();
});

const search = document.getElementById('search');

search.addEventListener('keyup', function (e) {
    const cards = cardContainer.querySelectorAll('.card');
    const searchText = e.target.value.toLowerCase();

    cards.forEach(function (card) {
        const cardText = card.innerText.toLowerCase();

        if (cardText.indexOf(searchText) !== -1) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

    const btnEdit = document.getElementById('btn-edit');

    btnEdit.addEventListener('click', function () {

    const cardToEdit = btnEdit.parentNode.parentNode;

    const cardName = cardToEdit.querySelector('#cardname');
    const cardpekerjaan = cardToEdit.querySelector('#cardpekerjaan');
    const cardHobby = cardToEdit.querySelector('#cardhobby');
    const cardNationality = cardToEdit.querySelector('#cardNationality');

    const newName = prompt("Enter new name:");
    const newpekerjaan = prompt("Enter new pekerjaan:");
    const newHobby = prompt("Enter new hobby:");
    const newNationality = prompt("Enter new nationality:");

    cardName.textContent = "Nama : " + newName;
    cardPekerjaan.textContent = "Pekerjaan : " + newPekerjaan;
    cardHobby.textContent = "Hobi : " + newHobby;
    cardNationality.textContent = "Nationality : " + newNationality;
}); 