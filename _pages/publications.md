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
<p class="research-count"><strong>{{ publication_count }}</strong> {% if publication_count == '1' %}publication{% else %}publications{% endif %} · <strong>2</strong> papers in preparation</p>

## Workshop publication

<div class="publications">
{% bibliography %}
</div>

## Unpublished research

The following projects are unpublished. Summaries and abstracts are available on the [Research page]({{ '/research/' | relative_url }}).

### Feasible Flow Matching for Graph Reconstruction via Within-Sampling Primal-Dual Guidance

{% include author-list.liquid authors="chen,zilberstein,paternain,segarra" %}

Adaptive primal–dual guidance for incorporating structural constraints into graph reconstruction without retraining.

[Read about CPD-PIFM →]({{ '/research/#cpd-pifm' | relative_url }})

### The Occupation Translator: Task-Based Alignment of Occupational Taxonomies

{% include author-list.liquid authors="chen,xu,loaiza,uribe" %}

Task-based occupation ranking and interpretable task correspondences across occupational classification systems.

[Read about Occupation Translator →]({{ '/research/#occupation-translator' | relative_url }})

<script defer src="{{ '/assets/js/publication-controls.js' | relative_url | bust_file_cache }}"></script>
