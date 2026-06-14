document.addEventListener('DOMContentLoaded', () => {
    
    // --- AOS ANIMACE ---
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            duration: 900,
            easing: 'ease-out-cubic'
        });
    }

    // --- RESPONSIVNÍ MENU (HAMBURGER) ---
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburger && mobileMenu) {
        // Přepínání mobilního menu pomocí třídy .active
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            hamburger.classList.toggle('active');

            const icon = hamburger.querySelector('i');
            if (icon) {
                const isOpen = mobileMenu.classList.contains('active');
                icon.classList.toggle('fa-xmark', isOpen);
                icon.classList.toggle('fa-bars', !isOpen);
            }
        });

        // Zavření menu po kliknutí na odkaz
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
                
                const icon = hamburger.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // --- KONTAKTNÍ FORMULÁŘ A MODÁLNÍ OKNO (EmailJS) ---
    const modal = document.getElementById('contact-modal');
    const form = document.getElementById('contact-form');
    const sendBtn = document.getElementById('send-btn');
    
    const openEmailBtn = document.getElementById('open-email-btn');
    const openLinkedinBtn = document.getElementById('open-linkedin-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');

    if (modal && form) {
        const publicKey = "J2_HL9nulOyt7bZvy";
        if (typeof emailjs !== 'undefined') {
            emailjs.init({ publicKey });
        }

        // Funkce pro otevření modálního okna
        const openContactForm = () => {
            modal.classList.add('active');
            form.reset();
        };

        // Funkce pro zavření modálního okna
        const closeContactForm = () => {
            modal.classList.remove('active');
        };

        // Přidání posluchačů událostí pro ovládání formuláře
        if (openEmailBtn) {
            openEmailBtn.addEventListener('click', openContactForm);
        }

        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', closeContactForm);
        }

        // Zavření kliknutím mimo modální okno (na pozadí)
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeContactForm();
        });

        // Odeslání formuláře pomocí EmailJS
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (typeof emailjs === 'undefined') {
                alert('EmailJS není načten.');
                return;
            }

            const originalText = sendBtn.innerHTML;
            sendBtn.innerHTML = 'Odesílám...';
            sendBtn.disabled = true;

            const templateParams = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                message: document.getElementById('message').value.trim(),
                time: new Date().toLocaleString('cs-CZ')
            };

            emailjs.send('service_5blf9q6', 'template_n0dc9q5', templateParams)
                .then(() => {
                    alert('✅ Zpráva byla úspěšně odeslána!');
                    closeContactForm();
                    form.reset();
                })
                .catch((error) => {
                    console.error(error);
                    alert('❌ Chyba při odesílání. Zkuste to prosím později.');
                })
                .finally(() => {
                    sendBtn.innerHTML = originalText;
                    sendBtn.disabled = false;
                });
        });
    }

    // Externí odkaz na LinkedIn
    if (openLinkedinBtn) {
        openLinkedinBtn.addEventListener('click', () => {
            window.open('https://www.linkedin.com/in/kseniia-kovalenko-4612b940a/', '_blank');
        });
    }
});