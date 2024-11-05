// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Chat Widget
const chatToggle = document.getElementById('chatToggle');
const chatBox = document.getElementById('chatBox');
const chatClose = document.getElementById('chatClose');
const chatMessages = document.getElementById('chatMessages');
const chatMessageInput = document.getElementById('chatMessageInput');
const chatSend = document.getElementById('chatSend');

if (chatToggle && chatBox && chatClose && chatMessages && chatMessageInput && chatSend) {
    chatToggle.addEventListener('click', () => {
        chatBox.style.display = 'block';
        chatToggle.style.display = 'none';
    });

    chatClose.addEventListener('click', () => {
        chatBox.style.display = 'none';
        chatToggle.style.display = 'block';
    });

    chatSend.addEventListener('click', sendMessage);
    chatMessageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = chatMessageInput.value.trim();
        if (message) {
            addMessage('Anda', message);
            chatMessageInput.value = '';
            // Simulate a response (replace with actual backend integration)
            setTimeout(() => {
                addMessage('Admin', 'Terima kasih atas pesan Anda. Tim kami akan segera menghubungi Anda.');
            }, 1000);
        }
    }

    function addMessage(sender, text) {
        const messageElement = document.createElement('p');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Form submission (prevent default for demo)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Terima kasih! Pesan Anda telah terkirim.');
        e.target.reset();
    });
}





document.addEventListener("DOMContentLoaded", function () {
    // Update the newsletter form to trigger the modal
    const newsletterForm = document.getElementById("newsletterForm");
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const modal = new bootstrap.Modal(
        document.getElementById("registerModal")
      );
      modal.show();
    });

    // Form validation
    const form = document.getElementById("registrationForm");
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    });
  });



   // Fungsi untuk menampilkan tombol "Back to Top" saat pengguna menggulir ke bawah halaman
   window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
}

// Fungsi untuk menggulir ke atas halaman saat tombol "Back to Top" diklik
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function openChat() {
    // Logika untuk membuka jendela chat
    window.open('https://wa.me/6281548296609', '_blank'); // Ganti dengan link chat yang sesuai
}