function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        name: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_2bn4qkb", "template_qflnasj", params)
        .then(() => {
            alert("Email sent!");
        })
        .catch((error) => {
            alert("Failed to send email: " + error);
        });
}

(function(){
    emailjs.init({
      publicKey: "2_JL4GN-qLz5qRT2y",
    });
 })();