---
layout: about
title: about
permalink: /
subtitle: <a href='https://ece.engin.umich.edu/'>EE @ UMich</a> · Integrated Photonics · Experimental Optical Systems · Lightmatter '26

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false

selected_papers: true
social: true

announcements:
  enabled: true
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

I am an undergraduate researcher at the University of Michigan working across integrated photonics, nonlinear optics, and experimental quantum photonics in Prof. Zheshen Zhang's <a href='https://quantumlab.engin.umich.edu/'>Quantum Engineering Lab</a>.

My research focuses on the characterization of silicon nitride photonic integrated circuits and the generation and stabilization of dissipative Kerr solitons in microring resonators, supported by custom FPGA control systems, low-noise photodetectors, and cryogenic instrumentation I've built for these experiments.

My work has contributed to a co-authored publication in <i>Optics Letters</i> and two conference papers at <a href='https://cleoconference.org/'>CLEO 2026</a>, including an oral presentation on wafer-scale Si₃N₄ photonic integrated circuits, and a poster at NCUR 2025. In summer 2025, my proposal on control and detector units for quantum photonics was selected for the Michigan Undergraduate Research in Quantum (MURiQ) program.

I am broadly interested in the physics and engineering of photonic devices, from device characterization to the control systems that make them useful in real platforms for communication, sensing, and computation. This summer, I am completing an internship as an Embedded Laser Intern at <a href='https://lightmatter.co/'>Lightmatter</a>, working on automated characterization and control-parameter optimization for a multi-wavelength laser system used in optical interconnects for AI infrastructure.

I plan to pursue a PhD in integrated photonics and photonic device physics, with an interest in quantum photonic systems.

**Tools:** analog & RF circuit design · PCB layout · FPGA (Red Pitaya) · embedded software · Python · COMSOL (thermal/mechanical) · cryogenic instrumentation · optical characterization

---

## selected projects

<div class="selected-projects-grid">
  {% assign featured_projects = site.projects | where_exp: "p", "p.importance <= 2" | sort: "importance" %}
  {% for project in featured_projects %}
    <a href="{{ '/projects/' | relative_url }}" class="project-card">
      {% if project.image %}
        <div class="project-image">
          <img src="{{ project.image | relative_url }}" alt="{{ project.title }}">
          <div class="project-overlay">
            <h3 class="project-title">{{ project.title }}</h3>
          </div>
        </div>
      {% else %}
        <div class="project-placeholder">
          <h3 class="project-title">{{ project.title }}</h3>
        </div>
      {% endif %}
    </a>
  {% endfor %}
</div>

<p class="projects-link">
  <a href="{{ '/projects/' | relative_url }}">Check out my projects here →</a>
</p>

<style>
.selected-projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.4rem;
  margin-top: 1.8rem;
}

/* Project card */
.project-card {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background: #111; /* fallback for no image */
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.25);
}

/* Image layer */
.project-image img {
  width: 100%;
  height: 170px;
  object-fit: cover;
  display: block;
  border-radius: 12px;
  filter: brightness(85%);
  transition: filter 0.3s ease;
}
.project-card:hover img {
  filter: brightness(100%);
}

/* Overlay (gradient and blur glass effect) */
.project-overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0.8rem 0.9rem;
  background: linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.05));
  backdrop-filter: blur(4px);
  border-radius: 0 0 12px 12px;
}

/* Title text */
.project-title {
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0,0,0,0.4);
}

/* Link below grid */
.projects-link {
  margin-top: 1.8rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
}
.projects-link a {
  color: #0077cc;
  text-decoration: none;
  transition: color 0.2s ease;
}
.projects-link a:hover {
  color: #005fa3;
  text-decoration: underline;
}
</style>

