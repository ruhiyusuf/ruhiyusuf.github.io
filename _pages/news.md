---
layout: page
title: news
permalink: /news/
---

<div class="news-list">

  <div class="news-item">
    <div class="news-meta">
      <div class="news-date">2026.05</div>
      <span class="news-tag tag-internship">Internship</span>
    </div>
    <div class="news-content">
      <p class="news-headline">Joining <a href="https://lightmatter.co/">Lightmatter</a> as an Embedded Laser Intern</p>
      <p class="news-body">Working on control and stabilization of multi-wavelength laser systems for photonic computing. Based in Boston, MA.</p>
    </div>
  </div>

  <div class="news-item">
    <div class="news-meta">
      <div class="news-date">2026.05</div>
      <span class="news-tag tag-talk">Conference Talk</span>
    </div>
    <div class="news-content">
      <p class="news-headline">Oral presentation at <a href="https://cleoconference.org/">CLEO 2026</a></p>
      <p class="news-body">Presented on wafer-scale Si₃N₄ photonic integrated circuit fabrication in Charlotte, NC.</p>
      <div class="news-images">
        <div class="news-img-wrap">
          <img src="/assets/img/cleo2026_sign.jpeg" class="news-img" style="object-position: bottom;" alt="CLEO 2026">
        </div>
        <div class="news-img-wrap">
          <img src="/assets/img/cleo2026_talk.png" class="news-img" alt="Presenting at CLEO 2026">
        </div>
      </div>
    </div>
  </div>

</div>

<style>
.news-list {
  margin-top: 2rem;
}

.news-item {
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 1.5rem;
  padding: 1.8rem 0;
  border-bottom: 1px solid var(--global-divider-color);
}

.news-meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 0.1rem;
}

.news-date {
  font-size: 0.82rem;
  color: var(--global-text-color-light);
  white-space: nowrap;
  font-weight: 500;
}

.news-tag {
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  white-space: nowrap;
}

.tag-internship {
  background-color: rgba(0, 120, 212, 0.1);
  color: #0078d4;
}

.tag-talk {
  background-color: rgba(16, 124, 16, 0.1);
  color: #107c10;
}

.news-headline {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: var(--global-text-color);
}

.news-body {
  font-size: 0.9rem;
  color: var(--global-text-color-light);
  margin-bottom: 0.8rem;
}

.news-images {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 0.6rem;
  margin-top: 0.8rem;
  max-width: 380px;
}

.news-img-wrap {
  overflow: hidden;
  border-radius: 6px;
}

.news-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 6px;
  transition: transform 0.3s ease;
}

.news-img-wrap:hover .news-img {
  transform: scale(1.03);
}

@media (max-width: 600px) {
  .news-item {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
  .news-images {
    grid-template-columns: 1fr;
    max-width: 100%;
  }
}
</style>