document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    // Your WhatsApp number (with country code, no +)
    let whatsappNumber = "8943651213";

    let finalMessage = `Name: ${name}%0APhone: ${phone}%0AMessage: ${message}`;

    let url = `https://wa.me/${whatsappNumber}?text=${finalMessage}`;

    window.open(url, "_blank");
});