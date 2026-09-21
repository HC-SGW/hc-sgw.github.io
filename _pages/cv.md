---
layout: page
title: CV
permalink: /cv/
body_class: cv-page
description: Academic background and experience.
nav: true
nav_order: 3
---

{% assign cv = site.data.cv.cv %}

<div class="cv-toolbar">
  <p>{{ cv.location }} · <a href="mailto:{{ cv.email }}">{{ cv.email }}</a> · <a href="{{ "/" | relative_url }}">hc-sgw.github.io</a></p>
  <a class="cv-download" href="{{ '/assets/pdf/Haoming_Harvey_Chen_CV.pdf' | relative_url }}">Download full CV (PDF) <span aria-hidden="true">↓</span></a>
</div>

<div class="cv-layout">
  <nav class="cv-navigation" aria-label="CV sections">
    <a href="#education">Education</a>
    <a href="#research">Research</a>
    <a href="#publications-talks">Publications & talks</a>
    <a href="#teaching">Teaching</a>
    <a href="#awards">Awards</a>
    <a href="#service">Service</a>
    <a href="#projects">Projects</a>
    <a href="#skills">Skills</a>
  </nav>
  <div class="cv-content">
    <section class="cv-section" id="education" aria-labelledby="education-heading">
      <h2 id="education-heading">Education</h2>
      {% for entry in cv.education %}
      <div class="cv-entry">
        <div class="cv-entry-heading"><h3>{{ entry.institution }}</h3><span class="cv-date">{{ entry.date }}</span></div>
        <p>{{ entry.degree }}</p>
        <p class="cv-affiliation">GPA: {{ entry.gpa }}</p>
        <details>
          <summary>Selected coursework</summary>
          <ul>
            {% for course in entry.coursework %}<li>{{ course }}</li>{% endfor %}
          </ul>
        </details>
      </div>
      {% endfor %}
    </section>

    <section class="cv-section" id="research" aria-labelledby="research-heading">
      <h2 id="research-heading">Research experience</h2>
      {% for entry in cv.research %}
      <div class="cv-entry">
        <div class="cv-entry-heading"><h3>{{ entry.role }}</h3><span class="cv-date">{{ entry.date }}</span></div>
        <p class="cv-affiliation">{{ entry.institution }} · {{ entry.advisor }}</p>
        {% if entry.program %}<p class="cv-affiliation">{{ entry.program }}</p>{% endif %}
        <ul>{% for point in entry.highlights %}<li>{{ point }}</li>{% endfor %}</ul>
      </div>
      {% endfor %}
    </section>

    <section class="cv-section" id="publications-talks" aria-labelledby="publications-talks-heading">
      <h2 id="publications-talks-heading">Publications & talks</h2>
      {% for entry in cv.publications %}
      <div class="cv-entry">
        <h3><a href="{{ entry.url }}">{{ entry.title }}</a></h3>
        <p>{{ entry.authors }}</p>
        <p class="cv-affiliation">{{ entry.venue }}</p>
        <nav class="publication-links" aria-label="Publication links"><a href="{{ entry.url }}">Paper</a><a href="{{ entry.code }}">Code</a><a href="{{ '/publications/' | relative_url }}">All publications</a></nav>
      </div>
      {% endfor %}
      {% for entry in cv.presentations %}
      <div class="cv-entry">
        <div class="cv-entry-heading"><h3>{{ entry.format }}</h3><span class="cv-date">{{ entry.date }}</span></div>
        <p>{{ entry.title }}</p>
        <p class="cv-affiliation">{{ entry.event }}</p>
      </div>
      {% endfor %}
    </section>

    <section class="cv-section" id="teaching" aria-labelledby="teaching-heading">
      <h2 id="teaching-heading">Teaching</h2>
      <div class="cv-entry">
        <h3>{{ cv.teaching.role }}</h3>
        <p class="cv-affiliation">{{ cv.teaching.institution }}</p>
      </div>
      <ul class="cv-list">
        {% for course in cv.teaching.courses %}<li><span><strong>{{ course.code }}</strong><small>{{ course.title }}</small></span><span class="cv-date">{{ course.term }}</span></li>{% endfor %}
      </ul>
    </section>

    <section class="cv-section" id="awards" aria-labelledby="awards-heading">
      <h2 id="awards-heading">Honors & awards</h2>
      <ul class="cv-list">
        {% for entry in cv.awards %}<li><span><strong>{{ entry.title }}</strong><small>{{ entry.institution }}</small></span><span class="cv-date">{{ entry.date }}</span></li>{% endfor %}
      </ul>
    </section>

    <section class="cv-section" id="service" aria-labelledby="service-heading">
      <h2 id="service-heading">Mentoring & service</h2>
      {% for entry in cv.service %}
      <div class="cv-entry">
        <div class="cv-entry-heading"><h3>{{ entry.role }}</h3><span class="cv-date">{{ entry.date }}</span></div>
        <p class="cv-affiliation">{{ entry.organization }}</p>
        <p>{{ entry.summary }}</p>
      </div>
      {% endfor %}
    </section>

    <section class="cv-section" id="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading">Selected projects</h2>
      {% for entry in cv.projects %}
      <div class="cv-entry">
        <div class="cv-entry-heading"><h3>{% if entry.url %}<a href="{{ entry.url }}">{{ entry.title }}</a>{% else %}{{ entry.title }}{% endif %}</h3><span class="cv-date">{{ entry.date }}</span></div>
        <p>{{ entry.summary }}</p>
      </div>
      {% endfor %}
    </section>

    <section class="cv-section" id="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading">Technical skills</h2>
      <dl class="cv-skills">
        {% for skill in cv.skills %}<dt>{{ skill.area }}</dt><dd>{{ skill.items }}</dd>{% endfor %}
      </dl>
    </section>

  </div>
</div>
