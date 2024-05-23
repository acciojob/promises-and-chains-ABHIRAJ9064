//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("user-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const age = parseInt(document.getElementById("age").value);
    const name = document.getElementById("name").value;

    if (isNaN(age) || age <= 0) {
      alert("Please enter a valid age.");
      return;
    }

    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age >= 18) {
          resolve(`Welcome, ${name}. You can vote.`);
        } else {
          reject(`Oh sorry ${name}. You aren't old enough.`);
        }
      }, 4000);
    });

    promise
      .then(message => {
        alert(message);
      })
      .catch(errorMessage => {
        alert(errorMessage);
      });
  });
});
