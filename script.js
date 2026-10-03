// --- 1. EFEK KETIK OTOMATIS (TYPING EFFECT) ---
const textElement = document.getElementById("typing-desc");
const words = ["SOC | GRC | CTF player | Pentester | Network Security"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    let currentWord = words[wordIndex];
    
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typingSpeed = isDeleting ? 100 : 150;

    if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 2000; // Jeda sebelum menghapus teks
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500; // Jeda sebelum mengetik teks baru
    }

    setTimeout(typeEffect, typingSpeed);
}

// Jalankan efek ketik saat halaman dimuat
document.addEventListener("DOMContentLoaded", typeEffect);


// --- 2. NOTIFIKASI SAAT PESAN KONTAK DIKIRIM ---
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Mencegah halaman mereset otomatis
    
    // Tampilkan pesan sukses sederhana
    alert("Obrigadu ba ita boot nia Mensagem.");
    
    // Bersihkan isi form
    contactForm.reset();
});


// javascript halo foto boot

/* --- SERTIFIKAT LIGHTBOX --- */

const certImages = document.querySelectorAll(
    '.cert-img-wrapper img'
);

const certModal = document.getElementById('certModal');
const certModalImg = document.getElementById('certModalImg');
const closeCert = document.getElementById('closeCert');

// Klik foto sertifikat untuk memperbesar
certImages.forEach(function (img) {
    img.addEventListener('click', function () {
        certModalImg.src = img.src;
        certModalImg.alt = img.alt;

        certModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Fungsi menutup modal
function closeCertificate() {
    certModal.classList.remove('active');
    certModalImg.src = '';
    document.body.style.overflow = '';
}

// Klik tombol X
closeCert.addEventListener('click', closeCertificate);

// Klik area gelap di luar gambar
certModal.addEventListener('click', function (event) {
    if (event.target === certModal) {
        closeCertificate();
    }
});

// Tutup dengan tombol Escape
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeCertificate();
    }
});