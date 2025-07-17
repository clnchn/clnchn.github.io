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
  const modalBriefs = document.getElementById('project-modal-briefs');
  const prevBtn = document.getElementById('project-modal-prev');
  const nextBtn = document.getElementById('project-modal-next');
  let currentImgIdx = 0;
  let currentImages = [];

  // Placeholder data for each project (index matches order in HTML)
  const projectDetails = [
    // Fast Food App (hidden)
    /*
    {
      img: 'assets/img/project-3.jpg',
      title: 'Fast Food App',
      desc: 'A fast food ordering app with real-time order tracking.',
      tech: 'Flutter, Firebase',
      features: ['Order management', 'Push notifications', 'Live tracking'],
      github: 'https://github.com/your-repo',
      demo: 'https://your-demo-link.com'
    },
    */
    
    // Yoga App (hidden)
    /*
    {
      img: 'assets/img/project-2.jpg',
      title: 'Yoga App',
      desc: 'A mobile-friendly yoga app for daily routines and progress tracking.',
      tech: 'React, CSS, Firebase',
      features: ['User authentication', 'Routine tracking', 'Progress analytics'],
      github: 'https://github.com/clnchn/MachineLearningProjects/tree/main/RestaurantReviewer_LocalAIAgentWithRAG',
      demo: 'https://your-demo-link.com'
    },
    */
    
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
      ],
      github: 'https://github.com/clnchn/MachineLearningProjects/tree/main/Stock%20Trading%20System',
      demo: 'https://github.com/clnchn/MachineLearningProjects/tree/main/Stock%20Trading%20System'
    },

    {
      img: 'assets/img/output_labeled_traffic_video.gif',
      title: 'Traffic Light Handling',
      desc: 'Traffic Light Detection on Video using pretrained YOLOv5 model.',
      tech: 'Jupyter Notebook, Python, OpenCV, matplotlib',
      features: [
        'Use a pretrained YOLOv5 model (e.g. yolov5s)',
        'Detect traffic lights (some pretrained models have traffic light in classes)',
        'Crop detected traffic lights and classify their color with HSV thresholding from above',
        'Display detections + color + driving decision on video frames'
      ],
      github: 'https://github.com/clnchn/MachineLearningProjects/tree/main/Traffic%20Light%20Handling',
      demo: 'https://github.com/clnchn/MachineLearningProjects/tree/main/Traffic%20Light%20Handling', 
      briefs: [
        "Next Step: Train with aUToLights. aUToLights is a traffic light dataset that can be used to train, validate, and evaluate traffic light detection and tracking performance on a multi-camera setup. "
      ]
    },
    {
      img: 'assets/img/OnlineAlbum.png',
      images: [
        'assets/img/OnlineAlbum.png',
        'assets/img/travel1.png',
        'assets/img/travel3.png',
        'assets/img/travel4.png'
      ],
      title: 'OdysseySteps: Travel Diary',
      desc: 'A digital travel diary and photo album platform for documenting journeys, sharing stories, and organizing memories with interactive maps and galleries.',
      tech: 'Flask, AWS EC2,lambda, HTML5, CSS, Javascript, MySQL, Python',
      features: [
        'Interactive travel map',
        'Photo and video album',
        'Location tagging'
      ],
      github: 'https://github.com/clnchn/ECE1779/tree/main',
      demo: 'assets/docs/OdysseySteps.pdf'
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
      ],
      github: 'https://github.com/clnchn/flashoverprediction',
      demo: 'https://ignistechnology.wordpress.com/'
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
      ],
      github: 'https://github.com/clnchn',
      demo: ''
    },
    {
      img: 'assets/img/Line-following.gif',
      title: 'Line Follower Robot',
      desc: 'An autonomous robot designed to follow a visual line path using sensors and real-time feedback control algorithms.',
      tech: 'Arduino, C++, IR Sensors',
      features: ['Line following', 'Obstacle avoidance', 'PID control'],
      github: 'https://github.com/clnchn',
      demo: ''
    },
    {
      images: [
        'assets/img/animalclassifier.png',
        'assets/img/animalclassifier-2.png'
      ],
      title: 'Animal Classifier',
      desc: 'A convolutional neural network (CNN) for animal classification using the LHI-Animal-Faces dataset. The model distinguishes between 19 animal classes and one human faces class, enabling robust multi-class image recognition.',
      tech: 'Python, Pytorch, CNN, LHI-Animal-Faces Dataset',
      features: [
        '20-class image classification',
        'Convolutional neural network architecture',
        'Data augmentation',
        'Evaluation metrics and visualization'
      ],
      github: 'https://github.com/clnchn/UofT-F22-AER1515-RobotPerception/blob/main/AER1515_Assignment1/code/train.py',
      demo: 'https://github.com/clnchn/UofT-F22-AER1515-RobotPerception/blob/main/AER1515_Assignment1/AER1515_Assignment1Report.pdf',
      briefs: [
        "For this project, I implemented and extended a convolutional neural network (CNN) using PyTorch to perform multi-class image classification on the LHI-Animal-Faces dataset. Starting off by training a baseline binary classifier (original: 4 conv layers, 3 max-pools, 2 FC layers, ReLU activations) for cats and dogs, then modified the code to support all 20 classes.<br>",
        "To improve model performance, I enhanced the CNN architecture by adding <strong>batch normalization</strong> and <strong>dropout layers</strong>(reduce overfitting). I also introduced a validation loop to monitor performance during training and saved the model with the lowest validation loss.<br>", 
        "Finally, I performed <strong>hyperparameter tuning</strong> by experimenting with <strong>different optimizers, learning rates, and batch sizes</strong> to maximize classification accuracy on the test set.<br>", 
        "Throughout the project, I visualized training and validation loss curves to analyze and guide model improvements.",
        "<br>", 
        "• CNN model design and implementation in PyTorch.",
        "• Multi-class classification and evaluation.", 
        "• Training optimization via architecture tuning, validation usage, and hyperparameter search.",
        "• Visualization and interpretation of training dynamics."

      ]
    },
    {
      images: [
        'assets/img/nbody-galaxy.jpg'
      ],
      title: 'Comparative Analysis of OpenMP vs CUDA in Hermite N-Body Simulations',
      desc: 'A performance comparison of OpenMP (CPU) and CUDA (GPU) in accelerating Hermite N-body simulations, highlighting speed, scalability, and efficiency in modeling gravitational systems.',
      tech: ["<strong>Languages:</strong> C/C++, CUDA C <br><strong>Frameworks/APIs:</strong> OpenMP, NVIDIA CUDA <br><strong>Tools:</strong> gprof, Visual Studio Code <br><strong>Hardware:</strong> Multi-core CPU, NVIDIA GPU (CUDA-enabled) <br>"],
      features: [
        '4th-order Hermite integrator for N-body gravitational simulations',
        'Parallelized force computation using OpenMP for CPU multi-threading',
        'Parallelized force computation using CUDA for GPU acceleration',
        'Performance benchmarking (speedup, memory usage, scalability)'
      ],
      github: 'https://github.com/clnchn/UofT-F22-ECE1747-ParallelProgramming/blob/main/ece1747_FinalProject/ece1747_termproject/ECE1747%20Final%20Project%20Report.pdf',
      demo: 'https://github.com/clnchn/UofT-F22-ECE1747-ParallelProgramming/blob/main/ece1747_FinalProject/ece1747_termproject/ECE1747_N-body%20Presentation.pdf',
      briefs: [
        "This project explores the performance and efficiency of two parallel computing frameworks—OpenMP and CUDA—for accelerating Hermite N-body simulations, a method used to model gravitational interactions among multiple particles. The simulation uses a 4th-order Hermite integration scheme and is implemented in both CPU-parallel (OpenMP) and GPU-parallel (CUDA) environments. The project compares execution time, scalability, accuracy, and resource utilization across various particle counts to determine the most effective approach for high-performance scientific computing tasks in astrophysics."
      ]
    },
    {
      img: 'assets/img/omr.png',
      title: 'Optical Music Recognition',
      desc: 'This project investigates the application of deep learning to Optical Music Recognition (OMR), focusing on identifying handwritten musical symbols from images. By evaluating and fine-tuning top-performing convolutional neural networks (CNNs), the study aims to improve symbol classification accuracy on the HOMUS dataset. Ensemble models are also explored to enhance performance beyond individual architectures.',
      tech: `Programming Language:
• Python

Libraries & Frameworks:
• TensorFlow / Keras – for building and training CNN models
• NumPy, Pandas – for data handling and preprocessing
• Matplotlib / Seaborn – for visualization

Model Architectures:
• Inception v3
• Inception-ResNet v2
• Xception
• NASNet

Evaluation Method: 10-fold Cross-Validation
Dataset: HOMUS Dataset`,
      features: ['• Handwritten Music Symbol Recognition - Classifies 32 different types of handwritten musical symbols.', 
                '• Model Comparison - Benchmarks multiple high-performing CNNs to identify the most effective architecture.', 
                '• Ensemble Learning - Combines multiple models to boost recognition accuracy.'],
      github: 'https://github.com/clnchn/MachineLearningProjects/tree/main/Optical%20Music%20Recognition',
      demo: 'https://github.com/clnchn/MachineLearningProjects/blob/main/Optical%20Music%20Recognition/Report.docx',
      briefs: [
        "The project addresses the challenge of recognizing handwritten musical notation by treating it as a multiclass image classification problem. Using the HOMUS dataset, the team evaluates and fine-tunes four prominent CNN architectures—Inception v3, Inception-ResNet v2, Xception, and NASNet.",
        "Each model's performance is assessed via 10-fold cross-validation, with Xception and Inception v3 emerging as top performers.",
        "Ensemble models combining these architectures further enhance recognition accuracy, achieving up to 95.45%, nearly matching the state-of-the-art benchmark of 95.55%.",
        "Misclassifications are mostly due to visual similarity among a few classes, suggesting a targeted classifier could offer future improvements."
      ]
    },
    {
      img: 'assets/img/iScore.jpg',
      title: 'iScore - Colour Musician',
      desc: 'A smart scoring application designed to automate and enhance the evaluation process for sports and academic competitions.',
      tech: 'Python, OpenCV, Flask',
      features: ['Automated scoring', 'Color detection', 'Result analytics'],
      github: 'https://github.com/clnchn',
      demo: ''
    },
    {
      img: 'assets/img/project-1.jpg',
      images: [
        'assets/img/restaurant-reviewer-0.png',
        'assets/img/restaurant-reviewer-1.png',
        'assets/img/restaurant-reviewer-2.png'
      ],
      title: 'Restaurant Reviewer',
      desc: 'An AI-powered restaurant recommendation tool that combines Retrieval-Augmented Generation (RAG) with local AI Agent to deliver smart, location-based dining insights. The system analyzes user preferences, reviews, and location data to provide personalized restaurant recommendations.',
      tech: 'Python, LangChain, Ollama (mxbai-embed-large), ChromaDB, Pandas',
      features: [
        '• AI-powered restaurant recommendations using RAG',
        '• Realistic Review Parsing - Loads and processes restaurant reviews from a real-world CSV dataset with metadata like rating and date.',
        '• Smart Embedding with Ollama - Uses a local, high-quality embedding model (mxbai-embed-large) to transform reviews into dense vector representations.',
        '• Semantic Retrieval Engine - Retrieves the most relevant reviews for a given query using vector similarity, not just keyword matching.',
        '• Persistent Vector Store - Chroma stores embeddings locally, allowing reusability without reprocessing on every run.'
      ],
      github: 'https://github.com/clnchn/MachineLearningProjects/tree/main/RestaurantReviewer_LocalAIAgentWithRAG',
      demo: '',
      briefs: [
        "Developed an AI-powered restaurant recommendation system using RAG and local AI Agent",
        "Implemented real-time review analysis and sentiment detection",
        "Created a responsive web interface with interactive map integration",
        "Deployed the application using Docker for easy scaling and maintenance"
      ]
    }
  ].map(project => {
    if (project.demo === 'https://dribbble.com/') {
      return { ...project, demo: 'not-linked.html' };
    }
    return project;
  });

  // Open modal on project button click
  document.querySelectorAll('.projects__button').forEach((btn, idx) => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const data = projectDetails[idx] || projectDetails[0];
      currentImages = data.images || [data.img];
      currentImgIdx = 0;
      updateModalImage();
      modalTitle.textContent = data.title;
      modalDesc.textContent = data.desc;
      modalTech.innerHTML = `<b>Tech Stack:</b> <span>${data.tech}</span>`;
      modalFeatures.innerHTML = `<b>Features:</b><ul>${data.features.map(f => `<li>${f}</li>`).join('')}</ul>`;
      
      // Update briefs
      const briefsList = data.briefs ? data.briefs.map(brief => `<li>${brief}</li>`).join('') : '';
      document.getElementById('project-modal-briefs').innerHTML = 
          `<b>Project Briefs:</b><ul>${briefsList}</ul>`;
      
      // Update button links
      const githubLink = document.getElementById('project-modal-github');
      const demoLink = document.getElementById('project-modal-demo');
      
      if (data.github) {
        githubLink.href = data.github;
        githubLink.style.display = 'inline-flex';
      } else {
        githubLink.style.display = 'none';
      }
      
      if (data.demo) {
        demoLink.href = data.demo;
        demoLink.style.display = 'inline-flex';
      } else {
        demoLink.style.display = 'none';
      }
      
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
