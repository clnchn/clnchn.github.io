/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link')

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the shadow-header class
  this.scrollY >= 50 ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== CONTACT FORM ===============*/
const contactForm = document.getElementById('contact-form'),
  contactMessage = document.getElementById('contact-message')

contactForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const name = contactForm.user_name.value.trim()
  const email = contactForm.user_email.value.trim()
  const subject = contactForm.user_subject.value.trim()
  const message = contactForm.user_message.value.trim()

  const mailtoLink = `mailto:hsuan_ling@hotmail.com`
    + `?subject=${encodeURIComponent(subject || 'Message from ' + name)}`
    + `&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`

  window.location.href = mailtoLink
  contactMessage.textContent = 'Opening your email client...'
  setTimeout(() => { contactMessage.textContent = '' }, 4000)
  contactForm.reset()
})

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  // When the scroll is higher than 350 viewport height, add the show-scroll class
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollDown = window.scrollY

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    } else {
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  distance: '40px',
  duration: 1400,
  delay: 150,
  easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
  reset: false
});

// Home: hero text slides in from the left
sr.reveal('.home__data', { origin: 'left', distance: '20px' });

// Section titles: gentle rise so the numbered chip lands first
sr.reveal('.section__title-1, .section__title-2', {
  origin: 'bottom',
  distance: '20px',
  delay: 100
});

// Education: cards drift up with a light stagger
sr.reveal('.education__card', {
  origin: 'bottom',
  interval: 180,
  delay: 200,
  distance: '36px'
});

// Testimonials: reveal the whole slider container — individual cards are clipped
// by overflow:hidden and never enter the viewport, so ScrollReveal would freeze them hidden.
sr.reveal('.testimonial__slider-container', {
  origin: 'bottom',
  delay: 200,
  distance: '30px'
});

// Projects: staggered cards; the scaling makes the teal overlay hover feel earned
sr.reveal('.projects__card', {
  origin: 'bottom',
  interval: 140,
  delay: 150,
  distance: '30px',
  scale: 0.97
});

// Filter buttons rise together
sr.reveal('.projects__filters', { origin: 'bottom', distance: '20px' });

// Contact: form and info slide in from opposite sides
sr.reveal('.contact__info', { origin: 'left', delay: 200 });
sr.reveal('.contact__form-container', { origin: 'right', delay: 400 });

// Footer
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

// Apply saved theme, or dark mode as default
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.querySelector('i').classList[selectedIcon === 'ri-sun-line' ? 'add' : 'remove'](iconTheme)
} else {
  document.body.classList.add(darkTheme)
  themeButton.querySelector('i').classList.add(iconTheme)
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

/*=============== PROJECT MODAL ===============*/
document.addEventListener('DOMContentLoaded', function () {
  const modalOverlay = document.getElementById('project-modal-overlay');
  const modalClose = document.getElementById('project-modal-close');
  const modalImg = document.getElementById('project-modal-img');
  const modalTitle      = document.getElementById('project-modal-title');
  const modalDesc       = document.getElementById('project-modal-description');
  const modalTech       = document.getElementById('project-modal-techstack');
  const modalFeatures   = document.getElementById('project-modal-features');
  const modalBriefs     = document.getElementById('project-modal-briefs');
  const prevBtn         = document.getElementById('project-modal-prev');
  const nextBtn         = document.getElementById('project-modal-next');
  const diagramSection  = document.getElementById('project-modal-diagram-section');
  const diagramContainer = document.getElementById('project-modal-diagram');
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

    // ── IGNIS ──────────────────────────────────────────────────────────────
    {
      order: 1,
      img: 'assets/img/ignis-2.png',
      images: ['assets/img/ignisgif.gif', 'assets/img/ignis-2.png', 'assets/img/ignis-3.png', 'assets/img/ignis-poster.png'],
      title: 'IGNIS: Augmented Flashover Prediction',
      desc: 'A real-time AI system that predicts flashover events during active firefighting using computer vision and sensor data fusion deployed on an edge device.',
      tech: 'Python, OpenCV, Deep Learning, Sensor Fusion, NVIDIA Jetson Nano, Arducam Stereo Camera',
      problem: 'Firefighters have no reliable real-time indicator of impending flashover — a catastrophic fire event that can turn fatal within seconds — leaving them to rely solely on experience and intuition.',
      challenge: 'Running low-latency deep learning inference and multi-sensor fusion simultaneously on a resource-constrained edge device (NVIDIA Jetson Nano) with real-time alerting constraints in a fire environment.',
      architecture: 'Stereo camera and thermal sensor feeds are ingested by the Jetson Nano; a deep learning model fuses visual and environmental sensor data (temperature, gas) to compute flashover probability; an alert pipeline triggers when the threshold is crossed.',
      contribution: 'Led hardware integration of the Jetson Nano and Arducam stereo camera, trained the flashover prediction model, and built the real-time sensor fusion pipeline and alert system.',
      impact: 'Prototype demonstrated real-time flashover prediction at the capstone showcase; project received an Outstanding designation and was documented on the IGNIS technology blog.',
      github: 'https://github.com/clnchn/flashoverprediction',
      demo: 'https://ignistechnology.wordpress.com/'
    },

    // ── NEURODEGENERATION SIMULATION ──────────────────────────────────────
    {
      order: 2.5,
      img: 'assets/img/neuro-cross-disease.png',
      images: [
        'assets/img/neuro-cross-disease.png',
        'assets/img/neuro-degradation.png',
        'assets/img/neuro-compensation-bar.png',
        'assets/img/neuro-pipeline-recovery.png'
      ],
      title: 'Neural Network Neurodegeneration Simulation',
      desc: 'A pure-NumPy simulation of how neural networks degrade under Alzheimer\'s, Parkinson\'s, and stroke disease models across ten severity stages, with five compensation strategies evaluated.',
      tech: 'Python, NumPy, Matplotlib',
      problem: 'Neurodegenerative diseases progressively destroy synaptic connections and neural pathways — but how would analogous damage patterns affect an artificial neural network\'s accuracy and weight structure?',
      challenge: 'Designing biologically motivated damage functions for three distinct diseases (Alzheimer\'s synaptic decay, Parkinson\'s motor pathway disruption, stroke-induced connectivity loss) that produce meaningfully different degradation curves without a framework to lean on.',
      architecture: 'A pure-NumPy MLP is trained from scratch on a structured 10-class synthetic dataset, then subjected to each disease\'s damage function at 10 severity stages; five compensation strategies (Reweighting, Neurogenesis, Fine-Tuning, Full Pipeline) are applied and evaluated at every stage; results feed a visualisation and HTML reporting pipeline.',
      contribution: 'Implemented the full simulation from scratch in NumPy — MLP forward/backward pass, Adam optimiser, all three disease damage models, all five compensation strategies, the metrics pipeline, and the automated HTML report generator.',
      impact: 'Quantified accuracy degradation across three disease profiles at 10 severity levels; demonstrated that the Full Pipeline compensation (Reweighting → Neurogenesis → Fine-Tuning) recovers the majority of lost accuracy across all disease types.',
      github: 'https://github.com/clnchn/Neurodegeneration-Abstration',
      demo: ''
    },

    // ── STOCK TRADING SYSTEM ───────────────────────────────────────────────
    {
      order: 2,
      img: 'assets/img/stock-trading-system.jpg',
      title: 'Stock Trading System',
      desc: 'A multithreaded C++ stock trading platform with a market simulator, implementing Factory and Strategy design patterns for flexible order creation and dynamic trader behaviours.',
      tech: 'C++, Multithreading, Factory Pattern, Strategy Pattern',
      problem: 'Simulating a realistic concurrent trading environment where multiple traders submit market and limit orders simultaneously without data races, deadlocks, or incorrect order matching.',
      challenge: 'Designing a thread-safe shared order book that supports concurrent reads and writes while keeping the codebase extensible for new order types and trader strategies.',
      architecture: 'Factory Pattern instantiates trader and order objects at runtime; Strategy Pattern lets traders swap between market and limit order behaviours dynamically; mutex-protected order book handles concurrent submissions from multiple trading threads.',
      contribution: 'Designed and implemented the full system from scratch — threading model, Factory and Strategy pattern classes, order matching engine, and the market simulator driving trade activity.',
      impact: 'System correctly processes concurrent orders with zero race conditions; demonstrates practical application of Gang of Four design patterns in a performance-critical C++ context.',
      github: 'https://github.com/clnchn/MachineLearningProjects/tree/main/Stock%20Trading%20System',
      demo: ''
    },

    // ── TRAFFIC LIGHT HANDLING ─────────────────────────────────────────────
    {
      order: 3,
      img: 'assets/img/output_labeled_traffic_video.gif',
      title: 'Traffic Light Handling',
      desc: 'Real-time traffic light detection using a pretrained YOLOv5 model and HSV colour classification, with per-frame driving decision overlays on video output.',
      tech: 'Python, YOLOv5, OpenCV, Matplotlib',
      problem: 'Autonomous vehicles must reliably detect and respond to traffic light states in real-time video — a fundamental prerequisite for safe urban navigation.',
      challenge: 'Accurately classifying traffic light colour (red, yellow, green) under varying lighting and environmental conditions using a combination of object detection and colour-space analysis.',
      architecture: 'Pretrained YOLOv5 detects traffic light bounding boxes per frame; detected crops are analysed with HSV thresholding for colour classification; a rule-based decision layer maps colour states to driving actions (stop / caution / go) overlaid on the output video.',
      contribution: 'Built the complete end-to-end pipeline — YOLOv5 integration, HSV colour classifier, driving decision logic, and annotated video generation.',
      impact: 'Achieved accurate real-time traffic light detection and state classification across varied video conditions, producing labelled output ready for integration into an autonomous driving stack.',
      github: 'https://github.com/clnchn/MachineLearningProjects/tree/main/Traffic%20Light%20Handling',
      demo: ''
    },

    // ── KNOWLEDGE DISTILLATION ─────────────────────────────────────────────
    {
      order: 4,
      img: 'assets/img/knowledge-distillation.png',
      title: 'Knowledge Distillation for Building Lightweight Deep Learning Models in Visual Classification Tasks',
      desc: 'Applying transfer learning and knowledge distillation to compress a large pre-trained model into a lightweight student network for clinical histopathology classification on the MHIST dataset.',
      tech: 'TensorFlow, Keras, ResNet',
      problem: 'Large deep learning models achieve high accuracy on medical imaging tasks but are too compute-intensive to deploy in resource-constrained clinical environments.',
      challenge: 'Training a compact student model to replicate the output distribution of a pre-trained teacher on MHIST — complicated by class imbalance and limited training data.',
      architecture: 'Teacher-student framework: a pre-trained ResNet teacher produces soft probability labels that guide student training via a weighted distillation + cross-entropy loss; validated first on MNIST as a proof-of-concept baseline.',
      contribution: 'Implemented both the MNIST baseline distillation pipeline and the full MHIST transfer-learning and knowledge-distillation pipeline, including the custom distillation loss function and evaluation loop.',
      impact: 'The lightweight student model achieved accuracy comparable to the teacher network at a fraction of the parameters, demonstrating the viability of knowledge distillation for resource-constrained medical imaging.',
      github: 'https://github.com/clnchn/MachineLearningProjects/tree/main/Knowledge%20Distillation',
      demo: ''
    },

    // ── MULTI-TERRAIN AUTONOMOUS S&R ───────────────────────────────────────
    {
      order: 5,
      img: 'assets/img/SNR.gif',
      title: 'Multi-Terrain Autonomous S&R',
      desc: 'An autonomous search and rescue robot that navigates sand, obstacles, and uneven terrain using sensor fusion and a state-machine-driven path planner.',
      tech: 'Arduino, Teensy, IMU, TFmini LIDAR, Colour Sensors, Encoders, IR Sensors',
      problem: 'Search and rescue operations in disaster zones require robots that can autonomously traverse varied terrain, locate survivors and supplies, and complete objectives without human guidance.',
      challenge: 'Fusing data from multiple heterogeneous sensors (LIDAR, IMU, encoders, colour sensors) in real-time to enable reliable navigation and object detection — while fitting within strict weight and power constraints.',
      architecture: 'Teensy and Arduino microcontrollers manage sensor polling and motor control; TFmini LIDAR provides obstacle detection; IMU and wheel encoders enable dead-reckoning localisation; colour sensors detect targets buried in sand.',
      contribution: 'Designed and implemented the sensor fusion algorithms, the autonomous navigation state machine, and hardware integration across all subsystems.',
      impact: 'Robot successfully traversed all required terrain types, extinguished a candle, and detected food in sand. Each core subsystem completed independently; full end-to-end autonomous navigation was limited by localisation accuracy under field conditions with obstacles.',
      github: 'https://drive.google.com/drive/folders/19iu8Gw-QRYk_K-uB9fweuGLEyTJPrLLe?usp=drive_link',
      demo: 'https://drive.google.com/file/d/19x91PpY0_d_EH8t9DB4vOO3id3FEf075/view?usp=drive_link'
    },

    // ── ODYSSEYSTEPS ──────────────────────────────────────────────────────
    {
      order: 6,
      img: 'assets/img/OnlineAlbum.png',
      images: ['assets/img/OnlineAlbum.png', 'assets/img/travel1.png', 'assets/img/travel3.png', 'assets/img/travel4.png'],
      title: 'OdysseySteps: Travel Diary',
      desc: 'A cloud-hosted travel diary and photo album platform where users document journeys, share stories, and organise memories with interactive maps and galleries.',
      tech: 'Flask, AWS EC2, AWS Lambda, AWS S3, HTML5, CSS, JavaScript, MySQL, Python',
      problem: 'Travellers lack a personal, structured platform to document and revisit their journeys — existing social platforms are public-facing and not designed for private, organised memory curation.',
      challenge: 'Designing a scalable cloud architecture that handles user photo uploads, storage, and on-demand retrieval efficiently while keeping infrastructure costs low.',
      architecture: 'Flask web app deployed on AWS EC2; user photos stored in S3 with async thumbnail generation via AWS Lambda; MySQL on RDS for trip and photo metadata; session-based authentication for multi-user support.',
      contribution: 'Full-stack development — designed the database schema, built the Flask REST API, implemented the frontend UI, provisioned all AWS infrastructure, and integrated the interactive trip map.',
      impact: 'Delivered a fully functional multi-user travel diary with photo upload, interactive maps, and organised gallery views, deployed live on AWS.',
      github: 'https://github.com/clnchn/ECE1779/tree/main',
      demo: 'assets/docs/OdysseySteps.pdf'
    },

    // ── ANIMAL CLASSIFIER ─────────────────────────────────────────────────
    {
      order: 7,
      images: ['assets/img/animalclassifier.png', 'assets/img/animalclassifier-2.png'],
      title: 'Animal Classifier',
      desc: 'A PyTorch CNN for 20-class animal face classification using the LHI-Animal-Faces dataset, with batch normalisation, dropout, and hyperparameter tuning.',
      tech: 'Python, PyTorch, CNN, LHI-Animal-Faces Dataset',
      problem: 'Fine-grained classification of 20 animal species from face images — a difficult task due to high visual similarity between classes and a limited training set.',
      challenge: 'Preventing overfitting while scaling from a binary cat/dog classifier to a robust 20-class model on the LHI-Animal-Faces dataset.',
      architecture: 'Baseline CNN (4 conv layers, 3 max-pools, 2 FC layers, ReLU) extended with batch normalisation and dropout; validation loop added to track generalisation and save the best checkpoint.',
      contribution: 'Extended the binary classifier to 20 classes, added regularisation layers, implemented the validation loop, and performed systematic hyperparameter tuning across optimisers, learning rates, and batch sizes.',
      impact: 'Achieved strong multi-class accuracy with measurably reduced overfitting versus the unregularised baseline; training and validation loss curves confirmed improved generalisation.',
      github: 'https://github.com/clnchn/UofT-F22-AER1515-RobotPerception/blob/main/AER1515_Assignment1/code/train.py',
      demo: 'https://github.com/clnchn/UofT-F22-AER1515-RobotPerception/blob/main/AER1515_Assignment1/AER1515_Assignment1Report.pdf'
    },

    // ── OPTICAL MUSIC RECOGNITION ─────────────────────────────────────────
    {
      order: 8,
      img: 'assets/img/OMR.png',
      title: 'Optical Music Recognition',
      desc: 'Deep learning recognition of 32 handwritten musical symbol classes using fine-tuned CNNs and ensemble methods on the HOMUS dataset, achieving near state-of-the-art accuracy.',
      tech: 'Python, TensorFlow/Keras, Inception v3, Xception, Inception-ResNet v2, NASNet',
      problem: 'Digitising handwritten sheet music is still largely manual — automated symbol recognition would save significant transcription time for musicians and archivists.',
      challenge: 'Classifying 32 visually similar handwritten musical symbol classes with high accuracy, where many symbols differ only in subtle stroke patterns.',
      architecture: 'Four pre-trained CNNs (Inception v3, Inception-ResNet v2, Xception, NASNet) individually fine-tuned on HOMUS via 10-fold cross-validation; top-performing architectures combined into a probability-averaging ensemble.',
      contribution: 'Fine-tuned all four CNN architectures, implemented the 10-fold cross-validation pipeline, and built the ensemble model combining the best two performers.',
      impact: 'Ensemble achieved 95.45% accuracy — within 0.1% of the published state-of-the-art benchmark of 95.55% — demonstrating that model ensembling nearly closes the gap to top results.',
      github: 'https://github.com/clnchn/MachineLearningProjects/tree/main/Optical%20Music%20Recognition',
      demo: 'https://github.com/clnchn/MachineLearningProjects/blob/main/Optical%20Music%20Recognition/Report.docx'
    },

    // ── N-BODY SIMULATIONS ────────────────────────────────────────────────
    {
      order: 9,
      images: ['assets/img/nbody-galaxy.jpg'],
      title: 'Comparative Analysis of OpenMP vs CUDA in Hermite N-Body Simulations',
      desc: 'A performance study comparing OpenMP (CPU) and CUDA (GPU) parallelisation of a 4th-order Hermite N-body integrator across speed, scalability, and efficiency.',
      tech: 'C/C++, CUDA C, OpenMP, NVIDIA CUDA, gprof',
      problem: 'Gravitational N-body simulations scale as O(N²) — serial computation becomes impractical above a few thousand particles, directly limiting astrophysics research.',
      challenge: 'Correctly parallelising the 4th-order Hermite integrator — which requires per-particle force accumulation with high numerical precision — across both CPU threads (OpenMP) and GPU warps (CUDA) without introducing errors.',
      architecture: 'Three implementations: baseline serial C++ → OpenMP version with parallel force loops across CPU cores → CUDA version with a GPU kernel for per-particle force computation using shared memory for warp-level reduction.',
      contribution: 'Implemented all three versions (serial, OpenMP, CUDA), designed the benchmarking methodology, and analysed speedup, memory usage, and scalability across varying particle counts.',
      impact: 'CUDA delivered significant speedup for large N where GPU parallelism dominates; OpenMP showed strong scaling on multi-core CPUs; results confirmed CUDA as superior for data-parallel scientific workloads at scale.',
      github: 'https://github.com/clnchn/UofT-F22-ECE1747-ParallelProgramming/blob/main/ece1747_FinalProject/ece1747_termproject/ECE1747%20Final%20Project%20Report.pdf',
      demo: 'https://github.com/clnchn/UofT-F22-ECE1747-ParallelProgramming/blob/main/ece1747_FinalProject/ece1747_termproject/ECE1747_N-body%20Presentation.pdf'
    },

    // ── LINE FOLLOWER ROBOT ───────────────────────────────────────────────
    {
      order: 10,
      img: 'assets/img/Line-following.gif',
      title: 'Line Follower Robot',
      desc: 'An autonomous robot that navigates a track with curves, intersections, and obstacles using PID control driven by IR sensors — no prior map required.',
      tech: 'Arduino, C++, IR Sensors, Hall Effect Sensors',
      problem: 'Navigate an unknown track with sharp curves, intersections, and obstacles autonomously using only ground-facing sensors and closed-loop feedback.',
      challenge: 'Tuning a PID controller fast enough to handle sharp curves at speed without overshooting, while simultaneously detecting and avoiding obstacles.',
      architecture: 'IR sensor array reads line position and computes a cross-track error; PID controller outputs differential motor corrections; Hall effect sensors measure wheel speed for closed-loop velocity control; a separate obstacle detection module triggers avoidance manoeuvres.',
      contribution: 'Implemented PID control logic, performed sensor calibration, and built the obstacle detection and avoidance module.',
      impact: 'Robot reliably completed the full course including sharp curves, intersections, and obstacle avoidance, demonstrating stable real-time closed-loop control.',
      github: 'https://github.com/clnchn',
      demo: ''
    },

    // ── ISCORE ────────────────────────────────────────────────────────────
    {
      order: 11,
      img: 'assets/img/iScore.jpg',
      title: 'iScore - Colour Musician',
      desc: 'A real-time computer vision application that automates scoring for colour-based music competitions via a live camera feed and a Flask web interface.',
      tech: 'Python, OpenCV, Flask',
      problem: 'Manually scoring colour-based music competitions is slow, subjective, and error-prone — judges must simultaneously track multiple coloured stimuli and tabulate scores.',
      challenge: 'Achieving accurate real-time colour segmentation under variable ambient lighting using a standard webcam.',
      architecture: 'Live camera feed processed by OpenCV HSV colour segmentation; a rule-based scoring engine maps detected colour events to scores; results are pushed to a Flask web interface and displayed in real time.',
      contribution: 'Built the HSV colour detection algorithm, scoring state machine, and Flask web backend.',
      impact: 'Automated scoring eliminated manual tabulation, reduced judging latency, and improved consistency across competition rounds.',
      github: 'https://github.com/clnchn',
      demo: ''
    },

    // ── RESTAURANT REVIEWER ───────────────────────────────────────────────
    {
      order: 12,
      images: ['assets/img/restaurant-reviewer-0.png', 'assets/img/restaurant-reviewer-1.png', 'assets/img/restaurant-reviewer-2.png'],
      title: 'Restaurant Reviewer',
      desc: 'A fully local RAG-powered restaurant recommendation tool that uses semantic vector search over real reviews to answer nuanced dining queries — no cloud API required.',
      tech: 'Python, LangChain, Ollama (mxbai-embed-large), ChromaDB, Pandas',
      problem: 'Generic restaurant search engines match keywords, not meaning — they fail on nuanced queries like "cozy spot with great pasta near downtown" that require semantic understanding of reviews.',
      challenge: 'Building a fully local RAG pipeline that delivers semantically relevant recommendations without cloud APIs, keeping all data private and inference cost-free.',
      architecture: 'CSV reviews loaded via Pandas → embedded locally with Ollama\'s mxbai-embed-large → stored in a persistent ChromaDB vector store → user query embedded at runtime → top-K semantic similarity retrieval → LLM synthesises the final recommendation.',
      contribution: 'Designed and built the complete RAG pipeline: data ingestion and cleaning, local embedding with Ollama, ChromaDB vector store setup, semantic retrieval engine, and the query interface.',
      impact: 'Delivers context-aware, semantically rich restaurant recommendations entirely on-device — no API costs, no data sent externally, and persistent embeddings that avoid re-processing on repeat runs.',
      github: 'https://github.com/clnchn/MachineLearningProjects/tree/main/RestaurantReviewer_LocalAIAgentWithRAG',
      demo: ''
    }
  ];

// ── Architecture diagrams (Mermaid flowchart) keyed by project title ──────────
const projectDiagrams = {
  'IGNIS: Augmented Flashover Prediction':
    'flowchart LR\n' +
    '  A["Stereo Camera"] --> C["Jetson Nano"]\n' +
    '  B["Env Sensors"] --> C\n' +
    '  C --> D["Fusion Model"]\n' +
    '  D --> E{Risk}\n' +
    '  E -->|High| F["Alert System"]\n' +
    '  E -->|Low| G["Monitor"]',

  'Neural Network Neurodegeneration Simulation':
    'flowchart LR\n' +
    '  A["Train MLP"] --> B["Alzheimer\'s Model"]\n' +
    '  A --> C["Parkinson\'s Model"]\n' +
    '  A --> D["Stroke Model"]\n' +
    '  B --> E["5 Compensation Strategies"]\n' +
    '  C --> E\n' +
    '  D --> E\n' +
    '  E --> F["Metrics + Report"]',

  'Stock Trading System':
    'flowchart LR\n' +
    '  A["Traders"] --> B["Factory Pattern"]\n' +
    '  B --> C["Market Order"]\n' +
    '  B --> D["Limit Order"]\n' +
    '  C --> E["Order Book"]\n' +
    '  D --> E\n' +
    '  E --> F["Match Engine"]\n' +
    '  F --> G["Trade Executed"]',

  'Traffic Light Handling':
    'flowchart LR\n' +
    '  A["Video Frame"] --> B["YOLOv5"]\n' +
    '  B --> C["Crop ROI"]\n' +
    '  C --> D["HSV Classifier"]\n' +
    '  D --> E["Decision Logic"]\n' +
    '  E --> F["Annotated Output"]',

  'Knowledge Distillation for Building Lightweight Deep Learning Models in Visual Classification Tasks':
    'flowchart TB\n' +
    '  A["Training Data"] --> B["Teacher ResNet"]\n' +
    '  A --> D["Student Network"]\n' +
    '  B --> C["Soft Labels"]\n' +
    '  C --> D\n' +
    '  D --> E["Compressed Model"]',

  'Multi-Terrain Autonomous S&R':
    'flowchart LR\n' +
    '  A["LIDAR"] --> D["Sensor Fusion"]\n' +
    '  B["IMU + Encoders"] --> D\n' +
    '  C["Colour Sensors"] --> D\n' +
    '  D --> E["Nav State Machine"]\n' +
    '  E --> F["Motor Drive"]',

  'OdysseySteps: Travel Diary':
    'flowchart LR\n' +
    '  A["Browser"] --> B["Flask / EC2"]\n' +
    '  B --> C["MySQL RDS"]\n' +
    '  B --> D["AWS S3"]\n' +
    '  D --> E["Lambda"]\n' +
    '  B --> F["Session Auth"]',

  'Animal Classifier':
    'flowchart LR\n' +
    '  A["Image Input"] --> B["Augmentation"]\n' +
    '  B --> C["4 Conv Layers"]\n' +
    '  C --> D["BatchNorm + Dropout"]\n' +
    '  D --> E["FC Layers"]\n' +
    '  E --> F["20-Class Output"]',

  'Optical Music Recognition':
    'flowchart LR\n' +
    '  A["HOMUS Dataset"] --> B["4 Fine-tuned CNNs"]\n' +
    '  B --> C["10-fold CV"]\n' +
    '  C --> D["Top 2 Models"]\n' +
    '  D --> E["Ensemble Average"]\n' +
    '  E --> F["95.45% Accuracy"]',

  'Comparative Analysis of OpenMP vs CUDA in Hermite N-Body Simulations':
    'flowchart TB\n' +
    '  A["N-Body Input"] --> B["Serial C++"]\n' +
    '  A --> C["OpenMP CPU"]\n' +
    '  A --> D["CUDA GPU"]\n' +
    '  B --> E["Benchmark"]\n' +
    '  C --> E\n' +
    '  D --> E',

  'Line Follower Robot':
    'flowchart LR\n' +
    '  A["IR Array"] --> B["Error Compute"]\n' +
    '  C["Hall Sensors"] --> D["Speed Feedback"]\n' +
    '  B --> E["PID Controller"]\n' +
    '  D --> E\n' +
    '  E --> F["Motor Drive"]',

  'iScore - Colour Musician':
    'flowchart LR\n' +
    '  A["Camera"] --> B["HSV Segmentation"]\n' +
    '  B --> C["Color Events"]\n' +
    '  C --> D["Scoring Engine"]\n' +
    '  D --> E["Flask Web UI"]',

  'Restaurant Reviewer':
    'flowchart LR\n' +
    '  A["CSV Reviews"] --> B["Ollama Embed"]\n' +
    '  B --> C["ChromaDB"]\n' +
    '  D["User Query"] --> E["Query Embed"]\n' +
    '  E --> C\n' +
    '  C --> F["Top-K Retrieval"]\n' +
    '  F --> G["LLM Response"]',
};

// ── Mermaid render helper ──────────────────────────────────────────────────────
async function renderDiagram(code, container, section) {
  if (typeof mermaid === 'undefined') { section.style.display = 'none'; return; }
  container.innerHTML = '<p class="diagram-loading">Loading diagram...</p>';
  const isDark = document.body.classList.contains('dark-theme');
  mermaid.initialize({
    startOnLoad: false,
    theme: 'base',
    themeVariables: isDark ? {
      background: 'transparent',
      primaryColor: '#1e2d3e',
      primaryTextColor: '#f0ece4',
      primaryBorderColor: '#3d9c9c',
      lineColor: '#4dbdbd',
      secondaryColor: '#162230',
      edgeLabelBackground: '#1e2d3e',
      tertiaryColor: '#162230',
      fontFamily: '"Bai Jamjuree", sans-serif',
      fontSize: '13px',
    } : {
      background: 'transparent',
      primaryColor: '#e4ddd3',
      primaryTextColor: '#1a2a36',
      primaryBorderColor: '#2a8080',
      lineColor: '#3a9090',
      secondaryColor: '#d8d0c5',
      edgeLabelBackground: '#e4ddd3',
      tertiaryColor: '#d8d0c5',
      fontFamily: '"Bai Jamjuree", sans-serif',
      fontSize: '13px',
    },
  });
  try {
    const { svg } = await mermaid.render('md' + Date.now(), code);
    container.innerHTML = svg;
  } catch (e) {
    container.innerHTML = '';
    section.style.display = 'none';
  }
}

// Match each card to its data by title, sort, stamp a data-index, then reorder DOM
(function () {
  const container = document.querySelector('.projects__container');
  if (!container) return;
  const cards = Array.from(container.querySelectorAll('.projects__card'));

  // Build pairs by matching card title text → projectDetails entry
  const paired = cards.map(card => {
    const titleText = (card.querySelector('.projects__title') || {}).textContent || '';
    const data = projectDetails.find(d => d.title.trim() === titleText.trim());
    return { card, data };
  }).filter(p => p.data); // discard any card with no matching data

  // Sort pairs by the order field
  paired.sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));

  // Stamp each card with a stable data-project-index and reorder DOM
  paired.forEach((item, i) => {
    item.card.setAttribute('data-project-index', i);
    projectDetails[i] = item.data;        // keep array in sync with DOM order
    container.appendChild(item.card);
  });
})();

// Open modal on project button click — read index from card attribute, never from forEach position
document.querySelectorAll('.projects__button').forEach(btn => {
  btn.addEventListener('click', async function (e) {
    e.preventDefault();
    const card = btn.closest('.projects__card');
    const idx  = card ? parseInt(card.getAttribute('data-project-index'), 10) : 0;
    const data = projectDetails[idx] || projectDetails[0];
    currentImages = data.images || [data.img];
    currentImgIdx = 0;
    updateModalImage();
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;

    // Tech stack — rendered as chips
    if (data.tech) {
      const chips = data.tech.split(',').map(t => `<span class="modal-tech-chip">${t.trim()}</span>`).join('');
      modalTech.innerHTML = `<b>Tech Stack</b><div class="modal-tech-chips">${chips}</div>`;
      modalTech.style.display = '';
    } else {
      modalTech.innerHTML = '';
      modalTech.style.display = 'none';
    }

    // Structured sections — each renders as a labelled paragraph
    const sectionDefs = [
      { key: 'problem',       label: 'Problem' },
      { key: 'challenge',     label: 'Technical Challenge' },
      { key: 'architecture',  label: 'Architecture' },
      { key: 'contribution',  label: 'My Contribution' },
      { key: 'impact',        label: 'Results & Impact' },
    ];
    const sectionsHtml = sectionDefs
      .filter(s => data[s.key])
      .map(s => `<div class="modal-section"><b>${s.label}</b><p>${data[s.key]}</p></div>`)
      .join('');
    if (sectionsHtml) {
      modalFeatures.innerHTML = sectionsHtml;
      modalFeatures.style.display = '';
    } else {
      modalFeatures.innerHTML = '';
      modalFeatures.style.display = 'none';
    }

    // Legacy briefs hidden
    const briefsEl = document.getElementById('project-modal-briefs');
    briefsEl.innerHTML = '';
    briefsEl.style.display = 'none';

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

    // Architecture diagram
    const diagram = projectDiagrams[data.title];
    if (diagram) {
      diagramSection.style.display = '';
      renderDiagram(diagram, diagramContainer, diagramSection);
    } else {
      diagramSection.style.display = 'none';
      diagramContainer.innerHTML = '';
    }

    modalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    document.querySelector('.project-modal').scrollTop = 0;
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

prevBtn.addEventListener('click', function () {
  if (currentImgIdx > 0) {
    currentImgIdx--;
    updateModalImage();
  }
});
nextBtn.addEventListener('click', function () {
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
modalOverlay.addEventListener('click', function (e) {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (lightbox.style.display === 'flex') { closeLightbox(); return; }
    closeModal();
  }
  if (lightbox.style.display === 'flex') {
    if (e.key === 'ArrowLeft' && lightboxIndex > 0) {
      lightboxIndex--; currentImgIdx = lightboxIndex; updateModalImage(); updateLightbox();
    } else if (e.key === 'ArrowRight' && lightboxIndex < currentImages.length - 1) {
      lightboxIndex++; currentImgIdx = lightboxIndex; updateModalImage(); updateLightbox();
    }
  }
});

// Lightbox
const lightbox       = document.getElementById('img-lightbox');
const lightboxImg    = document.getElementById('img-lightbox-img');
const lightboxClose  = document.getElementById('img-lightbox-close');
const lightboxPrev   = document.getElementById('img-lightbox-prev');
const lightboxNext   = document.getElementById('img-lightbox-next');
const lightboxCounter = document.getElementById('img-lightbox-counter');
let lightboxIndex = 0;

function updateLightbox() {
  lightboxImg.src = currentImages[lightboxIndex];
  const total = currentImages.length;
  const multi = total > 1;
  lightboxPrev.style.display  = multi ? '' : 'none';
  lightboxNext.style.display  = multi ? '' : 'none';
  lightboxCounter.style.display = multi ? '' : 'none';
  if (multi) {
    lightboxPrev.disabled = lightboxIndex === 0;
    lightboxNext.disabled = lightboxIndex === total - 1;
    lightboxCounter.textContent = `${lightboxIndex + 1} / ${total}`;
  }
}

function openLightbox(index) {
  lightboxIndex = index;
  updateLightbox();
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

document.getElementById('project-modal-zoom').addEventListener('click', function () {
  openLightbox(currentImgIdx);
});

lightboxPrev.addEventListener('click', function (e) {
  e.stopPropagation();
  if (lightboxIndex > 0) {
    lightboxIndex--;
    currentImgIdx = lightboxIndex;   // keep modal slider in sync
    updateModalImage();
    updateLightbox();
  }
});

lightboxNext.addEventListener('click', function (e) {
  e.stopPropagation();
  if (lightboxIndex < currentImages.length - 1) {
    lightboxIndex++;
    currentImgIdx = lightboxIndex;   // keep modal slider in sync
    updateModalImage();
    updateLightbox();
  }
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', function (e) {
  if (e.target === lightbox) closeLightbox();
});
});

/*=============== TESTIMONIAL SLIDER ===============*/
(function () {
  const slider = document.querySelector('.testimonial__slider');
  const cards = document.querySelectorAll('.testimonial__card');
  const prevBtn = document.querySelector('.testimonial__slider-btn--prev');
  const nextBtn = document.querySelector('.testimonial__slider-btn--next');
  const dotsContainer = document.querySelector('.testimonial__dots');
  let currentIndex = 0;

  function getCardsToShow() {
    if (window.innerWidth < 500) return 1;
    if (window.innerWidth < 900) return 2;
    return 3;
  }

  function getMaxIndex() {
    return Math.max(0, cards.length - getCardsToShow());
  }

  function buildDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i <= getMaxIndex(); i++) {
      const dot = document.createElement('button');
      dot.classList.add('testimonial__dot');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => { currentIndex = i; updateSlider(); });
      dotsContainer.appendChild(dot);
    }
  }

  function updateSlider() {
    const cardsToShow = getCardsToShow();
    const containerWidth = slider.parentElement.offsetWidth;
    const gapPx = cardsToShow === 1 ? 16 : 24; // matches CSS gap (1rem / 1.5rem)
    const cardWidth = (containerWidth - gapPx * (cardsToShow - 1)) / cardsToShow;

    // Set explicit widths so cards are always the right size
    cards.forEach(card => {
      card.style.flexBasis = cardWidth + 'px';
      card.style.maxWidth  = cardWidth + 'px';
    });

    const stepWidth = cardWidth + gapPx;
    const maxIndex = getMaxIndex();
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    slider.style.transform = `translateX(-${currentIndex * stepWidth}px)`;
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= maxIndex;
    dotsContainer.querySelectorAll('.testimonial__dot').forEach((d, i) => {
      d.classList.toggle('active', i === currentIndex);
    });
  }

  prevBtn.addEventListener('click', () => { if (currentIndex > 0) { currentIndex--; updateSlider(); } });
  nextBtn.addEventListener('click', () => { if (currentIndex < getMaxIndex()) { currentIndex++; updateSlider(); } });
  window.addEventListener('resize', () => { buildDots(); updateSlider(); });

  buildDots();
  updateSlider();
})();

/*=============== PROJECT FILTERING ===============*/
document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.projects__filter-btn');
  const projectCards = document.querySelectorAll('.projects__card');

  // Function to filter projects
  function filterProjects(filterValue) {
    projectCards.forEach(card => {
      const subtitle = card.querySelector('.projects__subtitle').textContent.trim();
      const matches = filterValue === 'all' || subtitle === filterValue;

      if (matches) {
        // Make visible first, then animate in (double rAF ensures paint happens before transition)
        card.style.display = 'block';
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          });
        });
      } else {
        // Hide immediately — no gap left in grid
        card.style.display = 'none';
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
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
