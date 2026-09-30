---
layout: page
title: Publications
permalink: /publications/
description: Publications and unpublished research.
nav: true
nav_order: 2
---

{% capture publication_count %}{% bibliography_count %}{% endcapture %}
{%- assign publication_count = publication_count | strip -%}
<p class="research-count"><strong>{{ publication_count }}</strong> {% if publication_count == '1' %}publication{% else %}publications{% endif %} · <strong>1</strong> preprint · <strong>1</strong> paper in preparation</p>

## Publications

<div class="publications">
{% bibliography %}
</div>

## Preprints

### [Feasible Flow Matching for Graph Reconstruction via Within-Sampling Primal-Dual Guidance](https://arxiv.org/abs/2609.32980)

{% include author-list.liquid authors="chen,zilberstein,paternain,segarra" %}

Adaptive primal–dual guidance for incorporating structural constraints into graph reconstruction without retraining.

<nav class="paper-actions" aria-label="CPD-PIFM links">
  <a href="https://arxiv.org/abs/2609.32980">Paper</a>
  <a href="https://arxiv.org/pdf/2609.32980">PDF</a>
  <a href="{{ '/research/#cpd-pifm' | relative_url }}">Read about CPD-PIFM <span aria-hidden="true">→</span></a>
</nav>

## Unpublished research

The following project is unpublished. A summary is available on the [Research page]({{ '/research/' | relative_url }}).

### The Occupation Translator: Task-Based Alignment of Occupational Taxonomies

{% include author-list.liquid authors="chen,xu,loaiza,uribe" %}

Task-based occupation ranking and interpretable task correspondences across occupational classification systems.

[Read about Occupation Translator →]({{ '/research/#occupation-translator' | relative_url }})

<script defer src="{{ '/assets/js/publication-controls.js' | relative_url | bust_file_cache }}"></script>
