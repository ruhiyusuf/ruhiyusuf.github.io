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
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-zero-knowledge-proof-for-image-authentication",
          title: 'Zero-Knowledge Proof for Image Authentication',
          description: "Developed a Zero-Knowledge Proof–based image authentication protocol at Carnegie Mellon’s OurCS conference to verify digital images without revealing content.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-quantum-mnist-autoencoder",
          title: 'Quantum MNIST Autoencoder',
          description: "Implemented a quantum circuit to encode and reconstruct MNIST digits using variational autoencoders for compression and fidelity analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-balanced-homodyne-photodetector-pcb",
          title: 'Balanced Homodyne Photodetector PCB',
          description: "Building a low-noise photodetector circuit for balanced homodyne detection in quantum communication and sensing setups, integrating analog design and optical testing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-esp32-liquid-nitrogen-weight-monitoring-system",
          title: 'ESP32 Liquid Nitrogen Weight Monitoring System',
          description: "Built an ESP32-based IoT system for monitoring cryogen weight and logging data to Google Sheets via Apps Script.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-enhancing-soliton-microcomb-stability-with-custom-waveform-control",
          title: 'Enhancing Soliton Microcomb Stability with Custom Waveform Control',
          description: "Developed a Red Pitaya–based control system that generates tailored pump-laser detuning waveforms to reliably trigger and extend soliton steps in Si₃N₄ microresonators. This approach created longer, more stable pulse trains—improving optical frequency comb coherence and enabling integration into real-world photonic systems used in metrology, communications, and quantum sensing.",
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
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
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
