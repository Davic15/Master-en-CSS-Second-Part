document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        document.querySelector('#load-iframe-map').innerHTML = `
            <iframe
                class="contact__iframe"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                maringwidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.1228885023597!2d12.48965597655033!3d41.890214164654786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28f1c82e908503c4!2sColosseum!5e0!3m2!1sen!2sit!4v1690232111999!5m2!1sen!2sit"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        `;
    }, 500);
});
