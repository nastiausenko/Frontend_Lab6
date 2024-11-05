const downloadButton = document.getElementById('downloadButton');
const personContainer = document.getElementById('person-container');
const message = document.getElementById('message');

downloadButton.addEventListener('click', () => {
  fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((data) => {
      const personCard = document.createElement('div');
      personCard.className = 'person-card';

      const user = data.results[0];
      const picture = document.createElement('img');
      picture.src = user.picture.large;
      picture.alt = `${user.name.first} ${user.name.last}`;

      const email = document.createElement('p');
      email.textContent = `Email: ${user.email}`;

      const name = document.createElement('p');
      name.textContent = `Name: ${user.name.first} ${user.name.last}`;

      const phone = document.createElement('p');
      phone.textContent = `Phone: ${user.phone}`;

      const city = document.createElement('p');
      city.textContent = `City: ${user.location.city}`;

      personCard.append(picture, email, name, phone, city);
      personContainer.appendChild(personCard);

      message.textContent = 'Success!';
      message.style.color = 'green';
    })
    .catch(() => {
      message.textContent = 'Error!';
      message.style.color = 'red';
    })
    .finally(() => setTimeout(() => (message.textContent = ''), 3000));
});
