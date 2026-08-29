---
layout: page
permalink: /publications/
title: Publications
description: Research papers on self-evolving AI, robust language models, and unbiased learning.
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<section class="publication-group">
  <h2 class="publication-category">Publication</h2>
  {% bibliography --group_by none --query @*[peer_reviewed=true]* %}
</section>

<section class="publication-group">
  <h2 class="publication-category">Preprint</h2>
  {% bibliography --group_by none --query @*[preprint=true]* %}
</section>

</div>
