function loadFooter() {
    const footer = document.getElementById("site-footer");

    if (!footer) {
        return;
    }

    footer.innerHTML = `
        <footer>
            <div class="container footer-content">

                <div>
                    <strong>Online Calculator</strong>

                    <p>
                        Simple tools for everyday calculations.
                    </p>
                </div>

                <div class="footer-links">
                    <a href="about.html">About</a>
                    <a href="contact.html">Contact</a>
                    <a href="privacy-policy.html">Privacy Policy</a>
                </div>

                <p class="copyright">
                    © 2026 Online Calculator
                </p>

            </div>
        </footer>
    `;
}

loadFooter();