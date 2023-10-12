document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registrationForm");

  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("alamat").value;

    if (nama === "" || email === "" || password === "") {
      alert("Pendaftaran berhasil!");
    }
  });
});
