/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the shadow-header class
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                      : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_your_id','template_your_id','#contact-form','your_public_key')
        .then(() =>{
            // Show sent message
            contactMessage.textContent = 'Message sent successfully ✅'

            // Remove message after five seconds
            setTimeout(() =>{
                contactMessage.textContent = ''
            }, 5000)

            // Clear input fields
            contactForm.reset()

        }, () =>{
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                       : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: false // Set to true if you want animations to repeat on scroll up
});

// Home section: fade in from left
sr.reveal('.home__data', { origin: 'left' });
sr.reveal('.home__image', { origin: 'right', delay: 400 });
sr.reveal('.home__social', { origin: 'bottom', interval: 100 });

// About section: fade in from bottom, stagger content
sr.reveal('.about__image', { origin: 'left', delay: 200 });
sr.reveal('.about__content', { origin: 'right', delay: 400 });
sr.reveal('.about__info > *', { origin: 'bottom', interval: 150, delay: 600 });

// Services section: each card pops up with scale and stagger
sr.reveal('.services__card', {
    origin: 'bottom',
    interval: 200,
    scale: 0.85,
    delay: 200
});

// Testimonial section: fade in from top, stagger cards
sr.reveal('.testimonial__card', {
    origin: 'top',
    interval: 200,
    delay: 200
});

// Projects section: fade in from bottom, stagger cards
sr.reveal('.projects__card', {
    origin: 'bottom',
    interval: 200,
    delay: 200
});

// Contact section: fade in from left and right
sr.reveal('.contact__info', { origin: 'left', delay: 200 });
sr.reveal('.contact__form-container', { origin: 'right', delay: 400 });

// Footer: fade in from bottom
sr.reveal('.footer__container', { origin: 'bottom', delay: 200 });

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.querySelector('.nav__theme')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.querySelector('i').classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.querySelector('i').classList[selectedIcon === 'ri-sun-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.querySelector('i').classList.toggle(iconTheme)
    
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL PROGRESS BAR ===============*/
window.addEventListener('scroll', () => {
  const scrollProgress = document.getElementById('scroll-progress');
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrollPercent + '%';
});

/*=============== TESTIMONIAL SLIDER ===============*/
(function() {
  const slider = document.querySelector('.testimonial__slider');
  const cards = document.querySelectorAll('.testimonial__card');
  const prevBtn = document.querySelector('.testimonial__slider-btn--prev');
  const nextBtn = document.querySelector('.testimonial__slider-btn--next');
  let currentIndex = 0;
  const cardsToShow = 3;

  function updateSlider() {
    const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(slider).gap || 0);
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  function showPrev() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  }

  function showNext() {
    if (currentIndex < cards.length - cardsToShow) {
      currentIndex++;
      updateSlider();
    }
  }

  prevBtn.addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);

  window.addEventListener('resize', updateSlider);
  updateSlider();
})();

/*=============== PROJECT MODAL ===============*/
document.addEventListener('DOMContentLoaded', function() {
  const modalOverlay = document.getElementById('project-modal-overlay');
  const modalClose = document.getElementById('project-modal-close');
  const modalImg = document.getElementById('project-modal-img');
  const modalTitle = document.getElementById('project-modal-title');
  const modalDesc = document.getElementById('project-modal-description');
  const modalTech = document.getElementById('project-modal-techstack');
  const modalFeatures = document.getElementById('project-modal-features');
  const prevBtn = document.getElementById('project-modal-prev');
  const nextBtn = document.getElementById('project-modal-next');
  let currentImgIdx = 0;
  let currentImages = [];

  // Placeholder data for each project (index matches order in HTML)
  const projectDetails = [
    {
      img: 'assets/img/project-1.jpg',
      title: 'Restaurant Website',
      desc: 'A modern restaurant website with online menu and reservation system.',
      tech: 'HTML, CSS, JavaScript',
      features: ['Responsive design', 'Online booking', 'Menu gallery']
    },
    {
      img: 'assets/img/project-2.jpg',
      title: 'Yoga App',
      desc: 'A mobile-friendly yoga app for daily routines and progress tracking.',
      tech: 'React, CSS, Firebase',
      features: ['User authentication', 'Routine tracking', 'Progress analytics']
    },
    {
      img: 'assets/img/project-3.jpg',
      title: 'Fast Food App',
      desc: 'A fast food ordering app with real-time order tracking.',
      tech: 'Flutter, Firebase',
      features: ['Order management', 'Push notifications', 'Live tracking']
    },
    {
      img: 'assets/img/iScore.jpg',
      title: 'iScore - Colour Musician',
      desc: 'A smart scoring application designed to automate and enhance the evaluation process for sports and academic competitions.',
      tech: 'Python, OpenCV, Flask',
      features: ['Automated scoring', 'Color detection', 'Result analytics']
    },
    {
      img: 'assets/img/omr.png',
      title: 'Optical Music Recognition',
      desc: 'A deep learning system that converts images of sheet music into digital music notation, enabling automated music transcription.',
      tech: 'Python, TensorFlow, Keras',
      features: ['Sheet music recognition', 'MIDI export', 'Batch processing']
    },
    {
      img: 'assets/img/Line-following.gif',
      title: 'Line Follower Robot',
      desc: 'An autonomous robot designed to follow a visual line path using sensors and real-time feedback control algorithms.',
      tech: 'Arduino, C++, IR Sensors',
      features: ['Line following', 'Obstacle avoidance', 'PID control']
    },
    {
      img: 'assets/img/SNR.gif',
      title: 'Multi-Terrain Autonomous S&R',
      desc: 'An autonomous search and rescue robot capable of navigating diverse terrains using advanced sensor fusion and AI-driven path planning.',
      tech: 'ROS, Python, LIDAR, GPS, Deep Learning',
      features: [
        'Multi-terrain navigation',
        'Sensor fusion (LIDAR, GPS, IMU)',
        'AI-based path planning',
        'Autonomous obstacle avoidance',
        'Real-time remote monitoring'
      ]
    },
    {
      img: 'assets/img/ignis-2.png',
      images: [
        'assets/img/ignisgif.gif',
        'assets/img/ignis-2.png',
        'assets/img/ignis-3.png',
        'assets/img/ignis-poster.png'
      ],
      title: 'IGNIS: Augmented Flashover Prediction',
      desc: 'A real-time AI-powered system for predicting flashover events in firefighting scenarios using computer vision and sensor data fusion.',
      tech: 'Python, OpenCV, Deep Learning, Sensor Fusion, NVIDIA Jetson Nano, Arducam Stereo Camera',
      features: [
        'Real-time flashover prediction',
        'Thermal and visual data fusion',
        'AI-based risk assessment',
        'Firefighter safety alerts',
        'Edge device deployment'
      ]
    },
    {
      img: 'assets/img/OnlineAlbum.png',
      title: 'OdysseySteps: Travel Diary',
      desc: 'A digital travel diary and photo album platform for documenting journeys, sharing stories, and organizing memories with interactive maps and galleries.',
      tech: 'React, Node.js, MongoDB, Mapbox, Cloudinary',
      features: [
        'Interactive travel map',
        'Photo and video album',
        'Story sharing',
        'Location tagging',
        'Social media integration'
      ]
    },
    {
      images: [
        'assets/img/animalclassifier.png',
        'assets/img/animalclassifier-2.png'
      ],
      title: 'Animal Classifier',
      desc: 'A convolutional neural network (CNN) for animal classification using the LHI-Animal-Faces dataset. The model distinguishes between 19 animal classes and one human faces class, enabling robust multi-class image recognition.',
      tech: 'Python, TensorFlow, Keras, CNN, LHI-Animal-Faces Dataset',
      features: [
        '20-class image classification',
        '19 animal classes + 1 human class',
        'Convolutional neural network architecture',
        'Data augmentation',
        'Evaluation metrics and visualization'
      ]
    },
    {
      img: 'assets/img/stock-trading-system.jpg',
      title: 'Stock Trading System',
      desc: 'A multithreaded C++ stock trading system implementing the Factory Pattern and Strategy Pattern for traders placing market and limit orders, with a market simulator.',
      tech: 'C++, Multithreading, Factory Pattern, Strategy Pattern',
      features: [
        'Multithreaded order processing',
        'Factory Pattern for order creation',
        'Strategy Pattern for market and limit orders',
        'Market simulator for realistic trading scenarios'
      ]
    }
  ];

  // Open modal on project button click
  document.querySelectorAll('.projects__button').forEach((btn, idx) => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const data = projectDetails[idx] || projectDetails[0];
      currentImages = data.images || [data.img]; // fallback for old projects
      currentImgIdx = 0;
      updateModalImage();
      modalTitle.textContent = data.title;
      modalDesc.textContent = data.desc;
      modalTech.innerHTML = `<b>Tech Stack:</b> <span>${data.tech}</span>`;
      modalFeatures.innerHTML = `<b>Features:</b><ul>${data.features.map(f => `<li>${f}</li>`).join('')}</ul>`;
      modalOverlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  function updateModalImage() {
    if (currentImages.length > 0) {
      modalImg.src = currentImages[currentImgIdx];
    }
    // Show/hide arrows based on image count
    if (currentImages.length > 1) {
      prevBtn.style.display = '';
      nextBtn.style.display = '';
      prevBtn.disabled = currentImgIdx === 0;
      nextBtn.disabled = currentImgIdx === currentImages.length - 1;
    } else {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    }
  }

  prevBtn.addEventListener('click', function() {
    if (currentImgIdx > 0) {
      currentImgIdx--;
      updateModalImage();
    }
  });
  nextBtn.addEventListener('click', function() {
    if (currentImgIdx < currentImages.length - 1) {
      currentImgIdx++;
      updateModalImage();
    }
  });

  // Close modal
  function closeModal() {
    modalOverlay.style.display = 'none';
    document.body.style.overflow = '';
  }
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) closeModal();
  });
});

/*=============== PROJECT FILTERING ===============*/
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.projects__filter-btn');
    const projectCards = document.querySelectorAll('.projects__card');

    // Function to filter projects
    function filterProjects(filterValue) {
        projectCards.forEach(card => {
            const subtitle = card.querySelector('.projects__subtitle').textContent.trim();
            
            if (filterValue === 'all' || subtitle === filterValue) {
                card.style.display = 'block';
                // Add a small delay for animation
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                // Wait for animation to complete before hiding
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get filter value and apply filter
            const filterValue = button.getAttribute('data-filter');
            filterProjects(filterValue);
        });
    });
});
