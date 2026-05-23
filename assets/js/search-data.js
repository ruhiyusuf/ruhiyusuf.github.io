// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A selection of research and engineering projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-cleo-2026",
          title: 'CLEO 2026',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-lightmatter",
          title: 'Lightmatter',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "projects-dilution-refrigerator-ribbon-structure-simulation",
          title: 'Dilution Refrigerator Ribbon Structure Simulation',
          description: "Simulated a ribbon-supported mounting structure for dilution refrigerator experiments to study vibration sensitivity and thermal performance under cryogenic conditions. Used COMSOL to evaluate frequency-domain response and heat transport, identifying design trade-offs in ribbon geometry and thermal anchoring (e.g., copper braids) for improved mechanical stability and efficient cooling. This work informs the integration of optomechanical components into cryogenic quantum systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-automated-vna-control-and-cryogenic-data-logging",
          title: 'Automated VNA Control and Cryogenic Data Logging',
          description: "Developed the backend for an automated VNA measurement system for cryogenic experiments, including sweep control, instrument communication, file handling, and dataset logging. Integrated Bluefors API polling to pair S-parameter measurements with temperature and pressure data during extended experimental runs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project/";
            },},{id: "projects-integrated-photonics-device-characterization",
          title: 'Integrated Photonics Device Characterization',
          description: "Performed classical characterization of silicon nitride photonic integrated circuits, including fiber-to-chip coupling, polarization optimization, and resonance measurements. Worked with bidirectional pumping setups, EDFAs, and polarization controllers to configure and stabilize optical experiments. Extracted device parameters through resonance fitting and spectral analysis, and explored nonlinear processes such as second-harmonic generation (SHG) to understand device behavior.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_project/";
            },},{id: "projects-zero-knowledge-proof-for-image-authentication",
          title: 'Zero-Knowledge Proof for Image Authentication',
          description: "Built a Zero-Knowledge Proof-based image authentication system to verify that photo transformations (cropping, redaction) are valid without revealing the original image. Implemented ZK-SNARK circuits in Circom to encode image transformations as mathematical constraints, enabling cryptographic proof generation and verification. Developed as part of Carnegie Mellon&#39;s OurCS 2024 conference, targeting applications in photojournalism, forensic evidence, and AI-generated image detection.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-quantum-autoencoders-tutorial-amp-live-demo-ieee-isit-2025",
          title: 'Quantum Autoencoders - Tutorial &amp;amp; Live Demo, IEEE ISIT 2025',
          description: "Designed and delivered a 1-hour tutorial on quantum autoencoders at the IEEE ISIT 75th Anniversary Quantum Hackathon. Covered QAE architecture, variational circuit design, fidelity-based loss functions, and the Transverse Field Ising Model as a structured quantum data source. Closed with a live Qiskit implementation and demo. Built for an audience ranging from quantum beginners to practitioners.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-balanced-homodyne-photodetector-pcb",
          title: 'Balanced Homodyne Photodetector PCB',
          description: "Designed and fabricated a low-noise balanced photodetector for homodyne detection in quantum optics experiments, focusing on analog circuit design, PCB layout, and optical testing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-liquid-nitrogen-monitoring-system-esp32",
          title: 'Liquid Nitrogen Monitoring System (ESP32)',
          description: "Developed an ESP32-based system to monitor liquid nitrogen levels using weight sensing. Implemented data logging and alert mechanisms to track cryogen usage and ensure reliable operation of lab systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-enhancing-soliton-microcomb-stability-with-custom-waveform-control",
          title: 'Enhancing Soliton Microcomb Stability with Custom Waveform Control',
          description: "Developed a Red Pitaya–based waveform control system for pump-laser detuning in Si₃N₄ microring resonators. Implemented tuning strategies to reliably access and stabilize dissipative Kerr soliton states, enabling longer soliton steps and improved frequency comb stability.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-driver-camera-and-retroreflective-vision-jetson-nano",
          title: 'Driver Camera and Retroreflective Vision (Jetson Nano)',
          description: "Developed a C++ and Gstreamer-based dual-camera vision system with retroreflective target detection for driver assistance.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-chesscam-real-world-chess-ai-system",
          title: 'ChessCam - Real-World Chess AI System',
          description: "Built a computer vision system to recognize physical chessboards and recommend moves using trained ML models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-haptic-feedback-robotic-gripper",
          title: 'Haptic Feedback Robotic Gripper',
          description: "Designed a pressure-sensitive robotic gripper capable of classifying soft and hard materials using force sensors and Arduino-based feedback control. Implemented signal acquisition and threshold calibration to dynamically adjust grip strength, improving precision handling in remote sensing and robotics applications.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-virtual-reality-biofeedback-for-stress-and-cardiac-response",
          title: 'Virtual Reality Biofeedback for Stress and Cardiac Response',
          description: "Integrated real-time heart-rate sensing with Unity and designed custom VR environments visualizing live biofeedback for stress and cardiac research at Santa Clara University’s BioInnovation Lab collab.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%75%68%69%79@%75%6D%69%63%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ruhiyusuf", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ruhiy", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
