---
layout: page
title: Research
permalink: /research/
description: Generative modeling, graph reconstruction, and task-based alignment.
nav: true
nav_order: 1
---

My research interests center on generative modeling, particularly flow matching and diffusion models. My current work explores graph reconstruction from partial observations, incorporating structural constraints during sampling, and task-based comparisons across occupational taxonomies.

{% capture publication_count %}{% bibliography_count %}{% endcapture %}
{%- assign publication_count = publication_count | strip -%}
<nav class="research-overview" aria-label="Papers on this page">
  <p class="research-count"><strong>{{ publication_count }}</strong> {% if publication_count == '1' %}publication{% else %}publications{% endif %} · <strong>1</strong> preprint · <strong>1</strong> paper in preparation</p>
  <ul class="jump-links">
    <li><a href="#pifm">PIFM</a></li>
    <li><a href="#cpd-pifm">CPD-PIFM</a></li>
    <li><a href="#occupation-translator">Occupation Translator</a></li>
  </ul>
</nav>

## Prior-Informed Flow Matching for Graph Reconstruction {#pifm}

{% include author-list.liquid authors="chen,zilberstein,segarra" %}
<p class="paper-meta"><span class="paper-status is-published">Published</span> PIFM · TMLR 2026</p>

<figure class="research-figure">
  <img src="{{ '/assets/img/pifm-pipeline.png' | relative_url }}" alt="PIFM combines a partially observed graph with a local prior, then transports the initial estimate through a learned flow toward a reconstructed graph." width="1686" height="761" loading="lazy" decoding="async">
  <figcaption>PIFM: from partial observations and a local prior to a reconstructed graph.</figcaption>
</figure>

Reconstructing a graph from partial observations requires both local evidence and an understanding of its overall structure. PIFM combines local structural estimates with flow matching, transporting an informed initial estimate toward the distribution of complete graphs and capturing dependencies beyond individual edge predictions.

Working with Dr. Nicolas Zilberstein and Prof. Santiago Segarra, I developed the research codebase and led experiments, analysis, figure preparation, and writing for the paper, on which I am the first author.

<nav class="paper-actions" aria-label="PIFM links">
  <a href="https://openreview.net/forum?id=9sEWrLXGPp">Paper</a>
  <a href="https://openreview.net/pdf?id=9sEWrLXGPp">PDF</a>
  <a href="https://arxiv.org/abs/2601.22107">arXiv</a>
  <a href="https://github.com/HC-SGW/PIFM">Code</a>
  <a href="{{ '/publications/#chen2026pifm' | relative_url }}">Cite</a>
</nav>

---

## Feasible Flow Matching for Graph Reconstruction via Within-Sampling Primal-Dual Guidance {#cpd-pifm}

{% include author-list.liquid authors="chen,zilberstein,paternain,segarra" %}
<p class="paper-meta"><span class="paper-status">Preprint</span> CPD-PIFM · arXiv</p>

<figure class="research-figure">
  <img src="{{ '/assets/img/cpd-pifm-overview.png' | relative_url }}" alt="CPD-PIFM initializes missing graph entries from a prior and noise, then combines pretrained PIFM velocity with adaptive constraint guidance. Each step predicts an endpoint, evaluates constraint slack, and updates constraint weights. Observed entries and model weights remain fixed." width="2088" height="1152" loading="lazy" decoding="async">
  <figcaption>CPD-PIFM adds adaptive constraint guidance during sampling, keeping observed entries fixed without retraining.</figcaption>
</figure>

Graph reconstruction often comes with structural requirements, such as degree bounds, triangle counts, or a sparsity band. Constrained Primal-Dual PIFM incorporates these requirements through adaptive Lagrange multipliers that guide sampling without retraining.

The method preserves PIFM's permutation equivariance, provides a bound on expected terminal slack, and improves feasibility across three link-prediction benchmarks.

<details>
<summary>Read the abstract</summary>
<p>Graph reconstruction from partial observations often comes with structural side information, such as degree bounds, triangle counts, or a sparsity band. Prior-Informed Flow Matching (PIFM) reconstructs graphs by transporting a local prior toward the graph distribution, but it provides no mechanism to incorporate this side information. We put forth Constrained Primal-Dual PIFM (CPD-PIFM), which augments the sampler with Lagrange multipliers that evolve along each trajectory. The multipliers respond to constraint violations at a predicted endpoint and guide subsequent sampling steps without retraining. We prove that the sampler inherits PIFM's permutation equivariance and bound its expected terminal slack by a term that decays as the inverse square root of the number of steps, plus two approximation terms. On three link-prediction benchmarks and nine combinations of datasets and constraints, CPD-PIFM raises feasibility by 11%–26% and remains competitive with fixed-weight guidance without selecting a separate multiplier for each constraint.</p>
</details>

<nav class="paper-actions" aria-label="CPD-PIFM links">
  <a href="https://arxiv.org/abs/2609.32980">Paper</a>
  <a href="https://arxiv.org/pdf/2609.32980">PDF</a>
</nav>

---

## Translating Occupations Across Taxonomies With Inspectable Task Correspondences {#occupation-translator}

{% include author-list.liquid authors="chen,xu,loaiza,uribe" %}
<p class="paper-meta"><span class="paper-status">In preparation</span> Occupation Translator</p>

<figure class="research-figure">
  <img src="{{ '/assets/img/occupation-translator-overview.png' | relative_url }}" alt="Top, a toy example: every source occupation is compared with every candidate occupation; their task statements are embedded, an exact optimal transport plan moves task weight from a source to a candidate at the least total cost, with an optional network term (FGW) tested as a control; candidates are ranked by plan cost. Bottom, real O*NET data: of 37 task statements for Web Developers in 2017, 27 are kept word for word in the 29 statements of 2024, and the transport plan spreads one statement without a copy across several 2024 statements. Among 919 candidates, the lowest costs are Web Developers (0.217), Web and Digital Interface Designers (0.372), and Web Administrators (0.816); the first two are listed by the official crosswalk." width="2164" height="1200" loading="lazy" decoding="async">
  <figcaption>The translator compares every source occupation with every candidate, ranks candidates by the cost of an exact optimal transport plan between their task statements, and shows that plan as a task correspondence. Bottom: Web Developers, O*NET 2017 to 2024.</figcaption>
</figure>

Occupational crosswalks connect codes across taxonomy revisions and countries, but they do not show which tasks support each pairing. This project's translator ranks candidate occupations by exact optimal transport between embedded task statements. The plan behind each ranking is also an inspectable task correspondence: it moves the full weight of every statement on both sides, so tasks without a close counterpart stay visible as costly links.

With Prof. César A. Uribe, I built an extraction and embedding pipeline for occupational taxonomies to study occupation splits, merges, task reorganization, and ambiguous matches.

On the O\*NET 2017-to-2024 revision, every listed successor ranks within the top five for all 959 evaluated sources, and the sole listed successor ranks first for 935 of the 943 sources with one. Word matching does as well there because revisions reuse task text verbatim, while on independently written ISCO-08 and ESCO texts, embedding methods place more listed targets first. In most settings a simpler embedding comparison (MaxSim) places more listed targets first than the translator, and a network term (fused Gromov–Wasserstein), tested as a control, adds no consistent gain. An expert study is needed to test whether the plans help reviewers.

<details>
<summary>Read the abstract</summary>
<p>Occupational crosswalks map codes across revisions and countries without showing which tasks support a pairing. Our translator ranks candidate occupations by exact optimal transport between embedded task statements. The transport plan behind that ranking is also an inspectable correspondence that moves the full weight of every statement on both sides and needs no choice of how much weight to keep. On the Occupational Information Network (O*NET) 2017-to-2024 revision, every listed successor ranks within five for all 959 evaluated sources. The sole listed successor ranks first for 935 of the 943 sources with one, and each of the 16 sources with several has one first. Word matching does as well where statements persist verbatim. On independently written texts of the International Standard Classification of Occupations (ISCO-08) and European Skills, Competences, Qualifications and Occupations (ESCO), embedding methods place more listed targets first than word matching. Clustering statements lowers measured agreement, on the O*NET revision mostly because cluster centroids replace them. Plans favor statement pairs that share O*NET records, although on English text a word-based transport control largely reproduces this result. Partial and unbalanced transport can improve on the translator but stay below MaxSim, which averages each statement's best cosine match, on ESCO and on Brazil's titles and synonyms. On Brazil's classification, with an embedding configuration chosen on the evaluated sources, MaxSim places more listed targets first than the translator on every input under strict scoring.</p>
</details>
