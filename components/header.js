class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="logo">
                    <a href="index.html">
                        <img src="assets/epicpraxis.svg" alt="EPIC PRAXIS Logo">
                    </a>
                </div>
                <nav>
                    <ul>
                        <li><a href="brand.html" class="${this.isActive('brand.html')}">브랜드</a></li>
                        <!--<li class="dropdown">
                            <a href="brand.html" class="${this.isActive('brand.html')}">브랜드</a>
                            <ul class="dropdown-menu">
                                <li><a href="brand.html">에픽영어학원</a></li>
                            </ul>
                        </li>-->
                        <li><a href="#">사람들</a></li>
                        <li><a href="#">함께하기</a></li>
                        <li>
                            <div class="language-toggle">
                                <a href="?lang=en">ENG</a> <span class="divider">|</span> <a href="?lang=ko">KOR</a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <button class="hamburger" aria-label="메뉴">
                    <span></span>
                    <span class="hamburger-line"></span>
                    <span></span>
                </button>
                <div class="mobile-menu">
                    <ul>
                        <li><a href="brand.html" class="${this.isActive('brand.html')}">브랜드</a></li>
                        <li><a href="#">사람들</a></li>
                        <li><a href="#">함께하기</a></li>
                        <li>
                            <div class="language-toggle">
                                <a href="?lang=en">ENG</a> <span class="divider">|</span> <a href="?lang=ko">KOR</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </header>
        `;

        // Add event listener for hamburger menu
        const hamburger = this.querySelector('.hamburger');
        const mobileMenu = this.querySelector('.mobile-menu');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });

        // Close mobile menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }

    isActive(path) {
        return window.location.pathname.includes(path) ? 'active' : '';
    }
}

customElements.define('header-component', Header);