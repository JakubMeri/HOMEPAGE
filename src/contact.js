const day = document.querySelector(".day");
const date = document.querySelector(".date");

const contactBox = document.querySelector(".contacts");
const contactData = document.querySelector(".contact-data");
const contact = document.getElementById("contacts");

const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");
const addContact = document.querySelector(".add-contact");

const submitNewContact = document.querySelector(".submit-new");

let d = new Date();

const loadDate = () => {
  let mesiac = d.getMonth() + 1;
  let rok = d.getFullYear();
  let den = d.getDate();

  let aktualny_mesiac;
  switch (mesiac) {
    case 1:
      aktualny_mesiac = "january";
      break;
    case 2:
      aktualny_mesiac = "february";
      break;
    case 3:
      aktualny_mesiac = "march";
      break;
    case 4:
      aktualny_mesiac = "april";
      break;
    case 5:
      aktualny_mesiac = "may";
      break;
    case 6:
      aktualny_mesiac = "june";
      break;
    case 7:
      aktualny_mesiac = "july";
      break;
    case 8:
      aktualny_mesiac = "august";
      break;
    case 9:
      aktualny_mesiac = "september";
      break;
    case 10:
      aktualny_mesiac = "october";
      break;
    case 11:
      aktualny_mesiac = "november";
      break;
    case 12:
      aktualny_mesiac = "december";
      break;

    default:
      console.log("error");
      break;
  }

  date.innerText = `${
    den < 10 ? "0" + den : den
  } ${aktualny_mesiac.toUpperCase()} ${rok}`;
};

const loadDen = () => {
  let aktualny_den;
  switch (d.getDay() - 1) {
    case 0:
      aktualny_den = "monday";
      break;
    case 1:
      aktualny_den = "tuesday";
      break;
    case 2:
      aktualny_den = "wednesday";
      break;
    case 3:
      aktualny_den = "thursday";
      break;
    case 4:
      aktualny_den = "friday";
      break;
    case 5:
      aktualny_den = "saturday";
      break;
    case 6:
      aktualny_den = "sunday";
      break;

    default:
      console.log("error");
      break;
  }
  day.innerHTML = aktualny_den.toUpperCase();
};

loadDate();
loadDen();

let hide = true;
contact.addEventListener("click", () => {
  if (hide) {
    contactBox.classList.remove("hide");
    contactBox.classList.add("show");
    contact.classList.add("active");
    hide = !hide;
  } else {
    contactBox.classList.remove("show");
    contact.classList.remove("active");
    contactBox.classList.add("hide");
    hide = !hide;
  }
});

addContact.addEventListener("click", () => {
  contactBox.classList.add("hide");
  modal.classList.add("show-modal");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hide-modal");
  modal.classList.remove("show-modal");
  contactBox.classList.remove("hide");
  contactBox.classList.add("show");
});

let contacts = [];

const loadData = () => {
  contactData.innerHTML = "";
  if (contacts.length <= 0) {
  } else {
    contacts.forEach((data, index) => {
      contactData.innerHTML += `
      <div class="contact" id=${index}>
      <p class="name">${data.name}</p>
      <p class="number">${data.number}</p>
      </div>
      `;
    });
  }
};

submitNewContact.addEventListener("click", async (e) => {
  e.preventDefault();
  let name = document.querySelector(".input-name").value;
  let number = document.querySelector(".input-number").value;

  if (name == "" && (number == undefined || number == null || number == "")) {
  } else {
    contacts.push({ name, number });
    await loadData();
    modal.classList.add("hide-modal");
    modal.classList.remove("show-modal");
    contactBox.classList.remove("hide");
    contactBox.classList.add("show");
    setTimeout(() => {
      document.getElementById("form-contact").reset();
    }, 800);
  }
});

document.addEventListener("click", (e) => {
  console.log(e.target);
  if (
    e.target.classList.contains("hero-text") &&
    contactBox.classList.contains("show")
  ) {
    contact.classList.remove("active");
    contactBox.classList.add("hide");
    contactBox.classList.remove("show");
    hide = !hide;
  }
});
