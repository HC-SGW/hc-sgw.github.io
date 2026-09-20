---
layout: page
title: Research
permalink: /research/
description: Generative modeling, graph reconstruction, and task-based alignment.
nav: true
nav_order: 1
---

My research interests center on generative modeling, particularly flow matching and diffusion models. My current work explores graph reconstruction from partial observations, incorporating structural constraints during sampling, and task-based comparisons across occupational taxonomies.

## Prior-Informed Flow Matching for Graph Reconstruction

**PIFM · ICML 2026 SPIGM Workshop**

Reconstructing a graph from partial observations requires both local evidence and an understanding of its overall structure. PIFM combines local structural estimates with flow matching, transporting an informed initial estimate toward the distribution of complete graphs and capturing dependencies beyond individual edge predictions.

Working with Nicolas Zilberstein and Santiago Segarra, I developed the research codebase and led experiments, analysis, figure preparation, and writing for the workshop paper, on which I am the first author.

[Paper](https://arxiv.org/abs/2601.22107) · [Code](https://github.com/HC-SGW/PIFM) · [Publication details]({{ '/publications/' | relative_url }})

---

## Feasible Flow Matching for Graph Reconstruction via Within-Sampling Primal-Dual Guidance

**CPD-PIFM · Unpublished research**

Graph reconstruction often comes with structural requirements, such as degree bounds, triangle counts, or a sparsity band. Constrained Primal-Dual PIFM incorporates these requirements through adaptive Lagrange multipliers that guide sampling without retraining.

The method preserves PIFM's permutation equivariance, provides a bound on expected terminal slack, and improves feasibility across three link-prediction benchmarks.

<details>
<summary>Read the abstract</summary>
<p>Graph reconstruction from partial observations often comes with structural side information, such as degree bounds, triangle counts, or a sparsity band. Prior-Informed Flow Matching (PIFM) reconstructs graphs by transporting a local prior toward the graph distribution, but it provides no mechanism to incorporate this side information. We put forth Constrained Primal-Dual PIFM (CPD-PIFM), which augments the sampler with Lagrange multipliers that evolve along each trajectory. The multipliers respond to constraint violations at a predicted endpoint and guide subsequent sampling steps without retraining. We prove that the sampler inherits PIFM's permutation equivariance and bound its expected terminal slack by a term that decays as the inverse square root of the number of steps, plus two approximation terms. On three link-prediction benchmarks and nine combinations of datasets and constraints, CPD-PIFM raises feasibility by 11%–26% and remains competitive with fixed-weight guidance without selecting a separate multiplier for each constraint.</p>
</details>

---

## The Occupation Translator: Task-Based Alignment of Occupational Taxonomies

**Occupation Translator · Unpublished research**

Occupational classification systems describe work differently across countries and over time. This project ranks candidate occupation matches using task descriptions and produces task-level correspondences that explain selected matches. It compares text-based methods with approaches incorporating task-network structure through fused Gromov–Wasserstein comparisons.

With Prof. César A. Uribe, I built an extraction and embedding pipeline for occupational taxonomies to study occupation splits, merges, task reorganization, and ambiguous matches.

On the main O\*NET revision benchmark, strong text-based comparisons recover the official crosswalk for almost every source occupation. Adding network structure does not improve the strongest rankings under matched smoothing. Broader comparisons show that performance depends on the setting, candidate pool, and reference, motivating expert evaluation of an evidence-based matching workflow.

<details>
<summary>Read the abstract</summary>
<p>Occupational taxonomies change over time and describe work differently across countries, making their categories difficult to compare. Official crosswalks connect occupation codes but provide limited task evidence for each connection. We present a translator that ranks candidate occupations from their task text and produces task correspondences for selected pairs. We compare individual statements and task clusters, using text-based methods and fused Gromov-Wasserstein (FGW) comparisons that add task-network structure. In the main Occupational Information Network (O*NET) revision benchmark, individual-task comparisons recover the official crosswalk for almost every source occupation. Adding structure does not improve on the strongest text ranking or improve cluster-correspondence agreement with O*NET task records when smoothing is matched. Network and correspondence features help identify disagreements for an earlier FGW configuration, but this confidence result has not been established for the stronger rankings. Comparisons with other taxonomies, Brazilian occupations, and company roles show that the strongest text input varies by setting. Their agreement rates also depend on the candidate pool and reference used. These findings support task-based comparison and motivate expert evaluation of a workflow that displays the evidence behind proposed matches.</p>
</details>
