---
layout: page
title: CV
permalink: /cv/
description: Education, research, teaching, and service.
nav: true
nav_order: 3
toc:
  sidebar: left
---

[Download CV (PDF) ↓]({{ '/assets/pdf/Haoming_Harvey_Chen_CV.pdf' | relative_url }})

**Haoming (Harvey) Chen** · Houston, Texas · [hc80@rice.edu](mailto:hc80@rice.edu)

{% for section in site.data.cv.cv.sections %}

## {{ section[0] }}

{% for entry in section[1] %}
{% if entry.label %}

### {{ entry.label }}

{{ entry.details }}

{% elsif section[0] == 'Education' %}

### {{ entry.institution }}

{{ entry.studyType }} in {{ entry.area }} · {{ entry.location }}

**GPA:** {{ entry.score }}

{% for item in entry.highlights %}

- {{ item }}
  {% endfor %}

{% elsif section[0] == 'Publications' %}

**[{{ entry.title }}]({{ entry.url }})**

{{ entry.authors | join: ', ' }}. _{{ entry.publisher }}_, {{ entry.releaseDate }}.

[Code](https://github.com/HC-SGW/PIFM) · [All publications and unpublished research]({{ '/publications/' | relative_url }})

{% elsif section[0] == 'Honors and Awards' %}

- **{{ entry.title }}**, {{ entry.awarder }} · {{ entry.date }}{% if entry.summary %}. {{ entry.summary }}{% endif %}

{% elsif section[0] == 'Projects' %}

### {% if entry.url %}[{{ entry.name }}]({{ entry.url }}){% else %}{{ entry.name }}{% endif %}

_{{ entry.date }}_

{{ entry.summary }}

{% for item in entry.highlights %}

- {{ item }}
  {% endfor %}

{% elsif section[0] == 'Skills' %}

**{{ entry.name }}:** {{ entry.keywords | join: ', ' }}

{% endif %}
{% endfor %}
{% endfor %}
