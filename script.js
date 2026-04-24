document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    // ✅ Validation
    if (name === "" || phone === "" || message === "") {
        alert("⚠️ Please fill all fields");
        return;
    }

    // ✅ Name validation (only letters and spaces)
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        alert("⚠️ Name should contain only letters");
        return;
    }

    // ✅ Phone validation (10 digits)
    if (!/^[0-9]{10}$/.test(phone)) {
        alert("⚠️ Enter valid 10-digit phone number");
        return;
    }

    // ✅ Message length check
    if (message.length < 5) {
        alert("⚠️ Message must be at least 5 characters");
        return;
    }

    // ✅ WhatsApp number (no +, no spaces)
    let whatsappNumber = "918943651213";

    // ✅ Create message properly
    let finalMessage = `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`;

    // ✅ Encode message
    let encodedMessage = encodeURIComponent(finalMessage);

    // ✅ WhatsApp URL
    let url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // ✅ Open WhatsApp
    window.open(url, "_blank");

    // ✅ Success message
    alert("✅ Redirecting to WhatsApp...");

    // ✅ Reset form
    document.getElementById("whatsappForm").reset();
});