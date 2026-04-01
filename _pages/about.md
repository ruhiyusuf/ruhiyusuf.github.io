---
layout: about
title: about
permalink: /
subtitle: <a href='https://ece.engin.umich.edu/'>EE Undergrad @ UMich </a>. Integrated Photonics · Experimental Optical Systems & Device Characterization

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false

selected_papers: true
social: true

announcements:
  enabled: false
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

As an undergraduate researcher in Prof. Zheshen Zhang's Quantum Engineering Lab, I work on experimental integrated photonics, specifically the generation and stabilization of dissipative Kerr solitons in silicon nitride microring resonators.

My work spans FPGA-based waveform control for soliton generation, dispersion measurement and mode analysis, custom PCB design for balanced homodyne detection, and mechanical design for cryogenic mounting in a Bluefors dilution refrigerator. This work has contributed to a co-authored publication in Optics Letters and two papers accepted to CLEO 2025.

I am broadly interested in how photonics, quantum optics, and hardware systems intersect. I plan to pursue a PhD in experimental quantum photonics.

---

## Coursework

###### **Electrical Engineering & Circuits**

- Digital Integrated Circuits
- VLSI Design I (in progress)
- Signals and Systems

###### **Photonics, Physics & Quantum Systems**

- Principles of Optics
- Electromagnetism
- Quantum Information Technology

###### **Mathematics**

- Multivariable Calculus
- Differential Equations
- Linear Algebra

###### **Computer Science**

- Programming and Data Structures

###### **Planned Coursework**

- Classical Optics
- Advanced Lasers & Optics Lab
- Optical Waves in Crystals
- VLSI Design II
- VLSI Tapeout Lab
- Micro/Nano Device Fabrication and Characterization

## Selected Projects

<div class="selected-projects-grid">
  {% assign featured_projects = site.projects | where_exp: "p", "p.importance <= 2" | sort: "importance" %}
  {% for project in featured_projects %}
    <div class="project-card">
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
    </div>
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

---

## Beyond the Lab

<div class="fun-grid">
  <!-- Hackathon 1
  <div class="fun-card">
    <img src="assets/img/hackathon1.jpg" alt="Hackathon" class="fun-img">
    <div class="fun-caption">Helping run student hackathons</div>
  </div> -->

  <!-- Hot Chips Volunteering -->
  <div class="fun-card">
    <img src="assets/img/hc.jpeg" alt="Hot Chips" class="fun-img">
    <div class="fun-caption">Volunteering at IEEE Hot Chips</div>
  </div>

  <!-- Quantum Hackathon -->
  <div class="fun-card">
    <img src="assets/img/qhack.jpeg" alt="Quantum Hackathon" class="fun-img">
    <div class="fun-caption">Organizing & mentoring at quantum hackathons</div>
  </div>

  <!-- Side Projects
  <div class="fun-card">
    <img src="assets/img/sideproject.jpg" alt="Side Projects" class="fun-img">
    <div class="fun-caption">Random side projects + fun builds</div>
  </div> -->
</div>

<style>
.fun-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.2rem;
  margin-top: 1.2rem;
}

.fun-card {
  text-align: center;
}

.fun-img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.15);
}

.fun-caption {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--global-text-color);
}
</style>
