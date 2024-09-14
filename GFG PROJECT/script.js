
const form = document.querySelector("form");
const firstName = document.querySelector("input[placeholder='First Name']");
const lastName = document.querySelector("input[placeholder='Last Name']");
const address = document.querySelector("input[placeholder='Address']");
const phoneNo = document.querySelector("input[placeholder='Phone No.']");

form.addEventListener("submit", function (event) {

  if (firstName.value === "" || lastName.value === "" || address.value === "" || phoneNo.value === "") {
    alert("All fields are required!");
    event.preventDefault();
  } else {
    alert("Appointment booked successfully!");
  }
});


const serviceCards = document.querySelectorAll(".service__card");
serviceCards.forEach(card => {
  card.addEventListener("click", () => {
    alert(`You selected the ${card.querySelector("h4").textContent} service.`);
  });
});




document.addEventListener("DOMContentLoaded", function() {

  setTimeout(function() {
    const notification = document.getElementById('notification');
    notification.style.display = 'flex';
    setTimeout(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateY(0)';
    }, 10); 
  }, 5000); 


  document.getElementById('closeNotification').addEventListener('click', function() {
    const notification = document.getElementById('notification');
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(100px)';
    setTimeout(() => notification.style.display = 'none', 500); // Hide it after animation ends
  });
});




document.getElementById('chatbotBtn').addEventListener('click', function() {
  window.open('https://character.ai/chat/sDS_S_ZQfZMsTgzterlcrHbTlXMS3nx2ykYEVBQDsrA', '_blank');
});

