---
title: Arrow
---

{% extends '../../../../../project/templates/default/default.html.swig' %}
{% block content %}

  <aside class='aside active'>
    <h3 class="aside__title">Active arrows</h3>

    <div class="box">
      {% set item = { title: "Test", url: 'framework/design/decorations/arrow/' } %}
      {% set arrow = { item: item, direction: 'left' } %}
      {% include '../../../../../../../site/components/framework/design/decorations/arrow/arrow.html.swig' %}

      {% set arrow = { item: item, direction: 'right' } %}
      {% include '../../../../../../../site/components/framework/design/decorations/arrow/arrow.html.swig' %}
    </div>
  </aside>

  <aside class="aside inactive">
    <h3 class="aside__title">Inactive arrows</h3>

    <div class="box">
      {% set arrow = { item: inactive, direction: 'left' } %}
      {% include '../../../../../../../site/components/framework/design/decorations/arrow/arrow.html.swig' %}

      {% set arrow = { item: inactive, direction: 'right' } %}
      {% include '../../../../../../../site/components/framework/design/decorations/arrow/arrow.html.swig' %}
    </div>
  </aside>

{% endblock %}
