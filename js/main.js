// Initialize AOS if available
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        once: true
    });
}

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('-translate-y-full');
});

// Section visibility on scroll
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveSection() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-primary');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('text-primary');
        }
    });
}

// Back to top button visibility
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
    setActiveSection();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            mobileMenu.classList.add('-translate-y-full');
        }
    });
});

// Experience items toggle
const experienceItems = document.querySelectorAll('.experience-item');

experienceItems.forEach(item => {
    const header = item.querySelector('.experience-header');
    header.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Load content dynamically
window.addEventListener('load', () => {
    try {
        // Load experience items
        const experienceItems = [
            {
                title: "CLEAN TECH MARKETER",
                company: "Freelance",
                period: "Jan 2023 - Present",
                description: [
                    "Executed targeted demand generation campaigns for early-stage cleantech startups",
                    "Improved lead quality and reduced CAC through SEO, PPC, and HubSpot",
                    "Supported cross-functional GTM activities across energy and mobility sectors"
                ]
            }
        ];

        const experienceContainer = document.querySelector('#experience .space-y-8');
        if (experienceContainer) {
            experienceItems.forEach((item, index) => {
                const experienceCard = document.createElement('div');
                experienceCard.className = 'card p-6';
                experienceCard.setAttribute('data-aos', 'fade-up');
                experienceCard.setAttribute('data-aos-delay', index * 200);
                
                experienceCard.innerHTML = `
                    <h3 class="text-xl font-bold mb-2">${item.title}</h3>
                    <h4 class="text-lg text-gray-600 mb-2">${item.company}</h4>
                    <p class="text-gray-500 mb-4">${item.period}</p>
                    <ul class="list-disc list-inside space-y-2">
                        ${item.description.map(desc => `<li>${desc}</li>`).join('')}
                    </ul>
                `;
                
                experienceContainer.appendChild(experienceCard);
            });
        }

        // Load project cards
        const projects = [
            {
                title: "Upcoming Geothermal Heat Grid",
                location: "Leeuwarden, Netherlands",
                period: "Feb 2022 - Apr 2022",
                description: [
                    "Conducted comprehensive social impact assessment",
                    "Explored public concerns regarding integration of geothermal energy",
                    "Implemented DESSIN-ESS conceptual framework"
                ]
            },
            // Add more projects here
        ];

        const projectsContainer = document.querySelector('#projects .grid:last-child');
        projects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'card p-6';
            projectCard.setAttribute('data-aos', 'fade-up');
            projectCard.setAttribute('data-aos-delay', index * 200);
            
            projectCard.innerHTML = `
                <h3 class="text-xl font-bold mb-2">${project.title}</h3>
                <h4 class="text-lg text-gray-600 mb-2">${project.location}</h4>
                <p class="text-gray-500 mb-4">${project.period}</p>
                <ul class="list-disc list-inside space-y-2">
                    ${project.description.map(desc => `<li>${desc}</li>`).join('')}
                </ul>
            `;
            
            projectsContainer.appendChild(projectCard);
        });

        // Load skill cards
        const skills = [
            {
                title: "Marketing & Demand Generation",
                items: ["HubSpot", "Salesforce", "Mailchimp", "Zendesk", "Coldoutreach"]
            },
            // Add more skills here
        ];

        const skillsContainer = document.querySelector('#skills .grid');
        skills.forEach((skill, index) => {
            const skillCard = document.createElement('div');
            skillCard.className = 'card p-6';
            skillCard.setAttribute('data-aos', 'fade-up');
            skillCard.setAttribute('data-aos-delay', index * 200);
            
            skillCard.innerHTML = `
                <h3 class="text-xl font-bold mb-4">${skill.title}</h3>
                <ul class="space-y-2">
                    ${skill.items.map(item => `<li class="flex items-center space-x-2">
                        <i class="fas fa-check text-primary"></i>
                        <span>${item}</span>
                    </li>`).join('')}
                </ul>
            `;
            
            skillsContainer.appendChild(skillCard);
        });

    } catch (error) {
        console.error('Error loading dynamic content:', error);
    }
}); 