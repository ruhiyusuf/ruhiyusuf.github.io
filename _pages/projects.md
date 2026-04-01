---
layout: page
title: projects
permalink: /projects/
description: A selection of research and engineering projects.
nav: true
nav_order: 3
display_categories: [research, hardware, embedded, software]
---

<div class="projects">

{% assign sorted_projects = site.projects | sort: "importance" %}

{% for project in sorted_projects %}
  <div class="proj-item {% if project.img_side == 'right' %}image-right{% elsif project.img_side == 'left' %}image-left{% endif %}">
    {% if project.image %}
      <div class="proj-thumb-row">
        <img
          src="{{ project.image | relative_url }}"
          alt="{{ project.title }}"
          style="width: {{ project.img_size | default: 180 }}px;"
        >
        {% if project.image2 %}
          <img
            src="{{ project.image2 | relative_url }}"
            alt="{{ project.title }} second image"
            style="width: {{ project.img_size | default: 180 }}px;"
          >
        {% endif %}
      </div>
    {% endif %}
    <div class="proj-info">
      <h3 class="proj-title">{{ project.title }}</h3>
      <p class="proj-category">{{ project.category }}</p>
      <p class="proj-desc">{{ project.description }}</p>
    </div>
  </div>
{% endfor %}

</div>

<style>
.projects {
  margin-top: 2rem;
}
/* .year-section {
  position: relative;
  margin-bottom: 3rem;
}
.year {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 2rem;
  font-weight: 200;
  color: var(--global-divider-color);
  margin: 0;
} */
.year-section {
  margin-bottom: 3rem;
}
.year {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--global-divider-color);
  margin: 0 0 1.5rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--global-divider-color);
}
.proj-item {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}
.proj-item.image-right {
  flex-direction: row-reverse;
}
.proj-item.image-left {
  flex-direction: row;
}
.proj-category {
  margin: 0 0 0.35rem 0;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--global-theme-color);
}
.proj-thumb-row {
  display: flex;
  gap: 0.75rem;
  flex-shrink: 0;
}
.proj-thumb-row img {
  height: auto;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  object-fit: cover;
}
.proj-info {
  max-width: 650px;
  flex: 1;
}
.proj-title {
  margin: 0 0 0.35rem 0;
  font-size: 1.15rem;
  font-weight: 600;
}
.proj-desc {
  margin: 0;
  color: var(--global-text-color);
  font-size: 0.98rem;
  line-height: 1.5;
}
@media (max-width: 700px) {
  .proj-item,
  .proj-item.image-right,
  .proj-item.image-left {
    flex-direction: column;
    align-items: flex-start;
  }
  .year {
    position: static;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  .proj-thumb-row {
    flex-wrap: wrap;
  }
  .proj-thumb-row img {
    width: 100% !important;
    max-width: 220px;
  }
}
</style>