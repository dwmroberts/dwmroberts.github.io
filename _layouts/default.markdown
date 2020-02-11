<!DOCTYPE html>
<html lang="en">

{% include head.html %}

<body id="page-top default-layout">
  {% include nav.html %}
  <header>
    <div class="header-content">
        <div class="header-content-inner">
          {% if page.layout != 'post' %}
            <h1>{{ page.title }}</h1>
            <hr>
          {% else %}
            <h1>Latest news</h1>
            <hr>
          {% endif %}
        </div>
    </div>
  </header>
  <section class="bg-primary" id="about">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 text-center">
              {{ content }}
            </div>
        </div>
    </div>
  </section>
  {% include contact.html %}
  {% include scripts.html %}
</body>

</html>
