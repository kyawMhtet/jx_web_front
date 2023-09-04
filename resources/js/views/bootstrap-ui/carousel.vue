<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import { ref } from "vue";
import "prismjs";

import Img1 from "../../../images/small/img-1.jpg";
import Img2 from "../../../images/small/img-2.jpg";
import Img3 from "../../../images/small/img-3.jpg";
import Img4 from "../../../images/small/img-4.jpg";
import Img5 from "../../../images/small/img-5.jpg";
import Img6 from "../../../images/small/img-6.jpg";
import Img7 from "../../../images/small/img-7.jpg";
import Img8 from "../../../images/small/img-8.jpg";
import Img9 from "../../../images/small/img-9.jpg";
import Img10 from "../../../images/small/img-10.jpg";
import Img11 from "../../../images/small/img-11.jpg";

export default {
  data() {
    return {
      Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11,
      title: "Carousel",
      items: [
        {
          text: "Base UI",
          href: "/",
        },
        {
          text: "Carousel",
          active: true,
        },
      ],
      controlSlide: ref(0),
      indicatorSlide: ref(0),
      captionSlide: ref(0),
      crossfadeSlide: ref(0),
      intervalSlide: ref(0),
      touchSlide: ref(0),
      darkSlide: ref(0),
    };
  },
  components: {
    Layout,
    PageHeader,
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <b-row>
      <b-col xl="6">
        <b-card no-body>
          <b-card-header>
            <b-card-title class="mb-0">Slides Only</b-card-title>
          </b-card-header>
          <b-card-body>
            <p class="text-muted">Use<code> slide</code> class to set carousel with slides. Note the presence of the
              <code>d-block</code> and <code>w-100</code> class on carousel images to prevent browser default image
              alignment.
            </p>
            <b-carousel :interval="2000" class="carousel slide">
              <b-carousel-slide active :img-src="Img1" />
              <b-carousel-slide :img-src="Img2" />
              <b-carousel-slide :img-src="Img3" />
            </b-carousel>
          </b-card-body>
          <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </b-card-body>
          <b-card-body>
            <pre class="language-markup">
<code>&lt;!-- Slides Only --&gt;
  &lt;b-carousel :interval=&quot;3000&quot; class=&quot;carousel slide&quot;&gt;
    &lt;b-carousel-slide active :img-src=&quot;Img1&quot; /&gt;
    &lt;b-carousel-slide :img-src=&quot;Img2&quot; /&gt;
    &lt;b-carousel-slide :img-src=&quot;Img3&quot; /&gt;
  &lt;/b-carousel>
</code></pre>
          </b-card-body>
        </b-card>
      </b-col>

      <b-col xl="6">
        <b-card no-body>
          <b-card-header>
            <b-card-title class="mb-0">With Controls</b-card-title>
          </b-card-header>
          <b-card-body>
            <p class="text-muted">Use <code>carousel-control-prev</code> and <code>carousel-control-next</code> class with
              &lt;button&gt; or &lt;b-link&gt; tag element to show carousel with control navigation.</p>

            <b-carousel class="carousel slide" :interval="2000" v-model="controlSlide" controls>
              <b-carousel-slide active :img-src="Img4" />
              <b-carousel-slide :img-src="Img5" />
              <b-carousel-slide :img-src="Img6" />
            </b-carousel>
          </b-card-body>
          <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </b-card-body>
          <b-card-body>
            <pre class="language-markup">
<code>&lt;!-- With Controls --&gt;
  &lt;b-carousel class=&quot;carousel slide&quot; :interval=&quot;2000&quot; controls&gt;
    &lt;b-carousel-slide active :img-src=&quot;Img4&quot; /&gt;
    &lt;b-carousel-slide :img-src=&quot;Img5&quot; /&gt;
    &lt;b-carousel-slide :img-src=&quot;Img6&quot; /&gt;
  &lt;/b-carousel&gt;
</code></pre>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="6">
        <b-card no-body>
          <b-card-header>
            <b-card-title class="mb-0">with Indicators</b-card-title>
          </b-card-header>

          <b-card-body>
            <p class="text-muted">Use <code>carousel-indicators</code> class with &lt;ol&gt; element to show carousel with
              indicators.</p>

            <b-carousel class="carousel slide" :interval="2000" v-model="indicatorSlide" controls indicators>
              <b-carousel-slide active :img-src="Img3" />
              <b-carousel-slide :img-src="Img2" />
              <b-carousel-slide :img-src="Img1" />
            </b-carousel>
          </b-card-body>
          <b-card-body class="bg-light border-bottom border-top bg-opacity-25 d-flex align-items-center">
            <h5 class="flex-grow-1 fs-xs text-muted mb-0">HTML Preview</h5>
            <div class="flex-shrink-0">
              <b-link href="#!"><i class="bi bi-clipboard"></i></b-link>
            </div>
          </b-card-body>
          <b-card-body>
            <pre class="language-markup">
<code>&lt;!-- With Indicators --&gt;
  &lt;b-carousel class=&quot;carousel slide&quot; :interval=&quot;2000&quot; controls indicators&gt;
    &lt;b-carousel-slide active :img-src=&quot;Img3&quot; /&gt;
    &lt;b-carousel-slide :img-src=&quot;Img2&quot; /&gt;
    &lt;b-carousel-slide :img-src=&quot;Img1&quot; /&gt;
  &lt;/b-carousel&gt;
</code></pre>
          </b-card-body>
        </b-card>
      </b-col>


      <b-col xl="6">
        <b-card no-body>
          <b-card-header>
            <b-card-title class="mb-0">with Captions</b-card-title>
          </b-card-header>
          <b-card-body>
            <p class="text-muted">Use <code>carousel-caption</code> class to add captions to the carousel.</p>
            <b-carousel class="carousel slide" :interval="2000" v-model="captionSlide" controls indicators>
              <b-carousel-slide active :img-src="Img7">
                <h5 class="text-white">Sunrise above a beach</h5>
                <p class="text-white-50">
                  You've probably heard that opposites attract. The same
                  is true for fonts. Don't be afraid to combine font
                  styles that are different but complementary.
                </p>
              </b-carousel-slide>
              <b-carousel-slide :img-src="Img2">
                <h5 class="text-white">Working from home little spot</h5>
                <p class="text-white-50">
                  Consistency piques people’s interest is that it has
                  become more and more popular over the years, which is
                  excellent.
                </p>
              </b-carousel-slide>
              <b-carousel-slide :img-src="Img9">
                <h5 class="text-white">
                  Dramatic clouds at the Golden Gate Bridge
                </h5>
                <p class="text-white-50">
                  Increase or decrease the letter spacing depending on the
                  situation and try, try again until it looks right, and
                  each letter.
                </p>
              </b-carousel-slide>
            </b-carousel>
          </b-card-body>
          <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </b-card-body>
          <b-card-body>
            <pre class="language-markup" style="height: 310px;">
                            <code>&lt;!-- With Captions --&gt;
  &lt;b-carousel class=&quot;carousel slide&quot; :interval=&quot;2000&quot; controls indicators&gt;
    &lt;b-carousel-slide active :img-src=&quot;Img7&quot;&gt;
      &lt;h5 class=&quot;text-white&quot;&gt;Sunrise above a beach&lt;/h5&gt;
      &lt;p class=&quot;text-white-50&quot;&gt;
        You've probably heard that opposites attract. The same
        is true for fonts. Don't be afraid to combine font
        styles that are different but complementary.
      &lt;/p&gt;
    &lt;/b-carousel-slide&gt;
    &lt;b-carousel-slide :img-src=&quot;Img2&quot;&gt;
      &lt;h5 class=&quot;text-white&quot;&gt;Working from home little spot&lt;/h5&gt;
      &lt;p class=&quot;text-white-50&quot;&gt;
        Consistency piques people’s interest is that it has
        become more and more popular over the years, which is
        excellent.
      &lt;/p&gt;
    &lt;/b-carousel-slide&gt;
    &lt;b-carousel-slide :img-src=&quot;Img9&quot;&gt;
      &lt;h5 class=&quot;text-white&quot;&gt;
        Dramatic clouds at the Golden Gate Bridge
      &lt;/h5&gt;
      &lt;p class=&quot;text-white-50&quot;&gt;
        Increase or decrease the letter spacing depending on the
        situation and try, try again until it looks right, and
        each letter.
      &lt;/p&gt;
    &lt;/b-carousel-slide&gt;
  &lt;/b-carousel&gt;
</code></pre>
          </b-card-body>
        </b-card>
      </b-col>

    </b-row>

    <b-row>
      <b-col xl="6">
        <b-card no-body>
          <b-card-header>
            <b-card-title class="mb-0">Crossfade Animation</b-card-title>
          </b-card-header>

          <b-card-body>
            <p class="text-muted">Use <code>carousel-fade</code> class to the carousel to animate slides with a fade
              transition instead of a slide.</p>
            <b-carousel class="carousel slide carousel-fade" v-model="crossfadeSlide" controls indicators>
              <b-carousel-slide active :img-src="Img1" />
              <b-carousel-slide :img-src="Img2" />
              <b-carousel-slide :img-src="Img3" />
            </b-carousel>
          </b-card-body>
          <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </b-card-body>
          <b-card-body>
            <pre class="language-markup" style="height: 330px;"><code>&lt;!-- With Crossfade Animation --&gt;
&lt;b-carousel class=&quot;carousel slide carousel-fade&quot; controls indicators&gt;
  &lt;b-carousel-slide active :img-src=&quot;Img1&quot; /&gt;
  &lt;b-carousel-slide :img-src=&quot;Img2&quot; /&gt;
  &lt;b-carousel-slide :img-src=&quot;Img3&quot; /&gt;
&lt;/b-carousel&gt;
</code></pre>
          </b-card-body>
        </b-card>
      </b-col>


      <b-col xl="6">
        <b-card no-body>
          <b-card-header>
            <b-card-title class="mb-0">Individual carousel-item Interval</b-card-title>
          </b-card-header>
          <b-card-body>
            <p class="text-muted">Use <code>data-bs-interval=" "</code> to a carousel-item to change the amount of time to
              delay between automatically cycling to the next item.</p>
            <b-carousel class="carousel slide" :interval="10000" v-model="intervalSlide" controls>
              <b-carousel-slide active :img-src="Img1" />
              <b-carousel-slide :img-src="Img11" />
              <b-carousel-slide :img-src="Img10" />
            </b-carousel>
          </b-card-body>
          <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </b-card-body>
          <b-card-body>
            <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Individual Slide --&gt;
&lt;b-carousel class=&quot;carousel slide&quot; :interval=&quot;10000&quot; controls&gt;
  &lt;b-carousel-slide active :img-src=&quot;Img1&quot; /&gt;
  &lt;b-carousel-slide :img-src=&quot;Img11&quot; /&gt;
  &lt;b-carousel-slide :img-src=&quot;Img10&quot; /&gt;
&lt;/b-carousel&gt;</code></pre>
          </b-card-body>
        </b-card>
      </b-col>

    </b-row>


    <b-row>
      <b-col xl="6">
        <b-card no-body>
          <b-card-header>
            <b-card-title class="mb-0">Disable Touch Swiping</b-card-title>
          </b-card-header>
          <b-card-body>
            <p class="text-muted">Carousels support swiping left/right on touchscreen devices to move between slides.
              This can be disabled using the <code>data-bs-touch</code> attribute. The example below also does not include
              the
              <code>data-bs-ride attribute</code> and has <code>data-bs-interval="false"</code> so it doesn’t autoplay.
            </p>
            <b-carousel class="carousel slide" :interval="2000" v-model="touchSlide" controls no-touch="true">
              <b-carousel-slide active :img-src="Img9" />
              <b-carousel-slide :img-src="Img8" />
              <b-carousel-slide :img-src="Img7" />
            </b-carousel>
          </b-card-body>
          <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </b-card-body>
          <b-card-body>
            <pre class="language-markup" style="height: 310px;">
<code> &lt;!-- Disable Touch Swiping --&gt;
&lt;b-carousel class=&quot;carousel slide&quot; :interval=&quot;2000&quot; controls no-touch=&quot;true&quot;&gt;
    &lt;b-carousel-slide active :img-src=&quot;Img9&quot; /&gt;
    &lt;b-carousel-slide :img-src=&quot;Img8&quot; /&gt;
    &lt;b-carousel-slide :img-src=&quot;Img7&quot; /&gt;
&lt;/b-carousel&gt;</code></pre>
          </b-card-body>
        </b-card>
      </b-col>


      <b-col xl="6">
        <b-card no-body>
          <b-card-header>
            <b-card-title class="mb-0">Dark Variant</b-card-title>
          </b-card-header>
          <b-card-body>
            <p class="text-muted">Use <code>carousel-dark</code> class to the carousel for darker controls, indicators,
              and captions.</p>
            <b-carousel class="carousel slide carousel-dark" :interval="10000" v-model="darkSlide" controls>
              <b-carousel-slide active :img-src="Img4">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Drawing a sketch</h5>
                  <p>
                    Too much or too little spacing, as in the example below,
                    can make things unpleasant for the reader.
                  </p>
                </div>
              </b-carousel-slide>
              <b-carousel-slide :img-src="Img5">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Blue clock on a pastel background</h5>
                  <p>
                    In some designs, you might adjust your tracking to
                    create a certain artistic effect asked them what graphic
                    design tips they live.
                  </p>
                </div>
              </b-carousel-slide>
              <b-carousel-slide :img-src="Img6">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Working at a coffee shop</h5>
                  <p>
                    A wonderful serenity has taken possession of my entire
                    soul, like these sweet mornings of spring.
                  </p>
                </div>
              </b-carousel-slide>
            </b-carousel>
          </b-card-body>
          <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
          </b-card-body>
          <b-card-body>
            <pre class="language-markup" style="height: 350px;">
<code>&lt;!-- Dark Variant --&gt;
    &lt;b-carousel class=&quot;carousel slide carousel-dark&quot; :interval=&quot;10000&quot; controls&gt;
    &lt;b-carousel-slide active :img-src=&quot;Img4&quot;&gt;
      &lt;div class=&quot;carousel-caption d-none d-md-block&quot;&gt;
        &lt;h5&gt;Drawing a sketch&lt;/h5&gt;
        &lt;p&gt;
          Too much or too little spacing, as in the example below,
          can make things unpleasant for the reader.
        &lt;/p&gt;
      &lt;/div&gt;
    &lt;/b-carousel-slide&gt;
    &lt;b-carousel-slide :img-src=&quot;Img5&quot;&gt;
      &lt;div class=&quot;carousel-caption d-none d-md-block&quot;&gt;
        &lt;h5&gt;Blue clock on a pastel background&lt;/h5&gt;
        &lt;p&gt;
          In some designs, you might adjust your tracking to
          create a certain artistic effect asked them what graphic
          design tips they live.
        &lt;/p&gt;
      &lt;/div&gt;
    &lt;/b-carousel-slide&gt;
    &lt;b-carousel-slide :img-src=&quot;Img6&quot;&gt;
      &lt;div class=&quot;carousel-caption d-none d-md-block&quot;&gt;
        &lt;h5&gt;Working at a coffee shop&lt;/h5&gt;
        &lt;p&gt;
          A wonderful serenity has taken possession of my entire
          soul, like these sweet mornings of spring.
        &lt;/p&gt;
      &lt;/div&gt;
    &lt;/b-carousel-slide&gt;
  &lt;/b-carousel&gt;</code></pre>
          </b-card-body>
        </b-card>
      </b-col>

    </b-row>
  </Layout>
</template>