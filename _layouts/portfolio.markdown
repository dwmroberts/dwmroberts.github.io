<!DOCTYPE html>
<html lang="en">

{% include head.html %}

<body id="page-top" class="default-layout">
  {% include nav.html %}
  <header>
    <div class="header-content">
      {% if page.layout != 'post' %}
        <h1>{{ page.title }}</h1>
      {% else %}
        <h1><a href="/exhibitions">Exhibitions</a></h1>
      {% endif %}
    </div>
  </header>
  <section class="bg-dark">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 col-lg-offset-1 text-center">
              {{ content }}
            </div>
        </div>
    </div>
  </section>
  {% include contact.html %}
  {% include scripts.html %}
</body>

</html>
