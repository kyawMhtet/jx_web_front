<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import "prismjs";

export default {
    data() {
        return {
            title: "Embed Video",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Embed Video",
                    active: true,
                },
            ],
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
                        <b-card-title class="mb-0">Ratio Video 16:9</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Wrap any embed in<code>&lt;iframe&gt;</code> tag, in a parent element, use <code>ratio-16x9</code> class to set aspect ratio 16:9. </p>
                        <div>
                            <!-- 16:9 aspect ratio -->
                            <div class="ratio ratio-16x9">
                                <iframe class="rounded" src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowfullscreen></iframe>
                            </div>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup">
<code>&lt;!-- Ratio Video 16:9 --&gt;
&lt;div class=&quot;ratio ratio-16x9&quot;&gt;
    &lt;iframe src=&quot;https://www.youtube.com/embed/1y_kfWUCFDQ&quot; title=&quot;YouTube video&quot; allowfullscreen&gt;&lt;/iframe&gt;
&lt;/div&gt;</code></pre>
                    </b-card-body>
                </b-card>

                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Ratio Video 4:3</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>ratio-4x3</code> class to set aspect ratio 4:3.</p>
                        <!-- 4:3 aspect ratio -->
                        <div class="ratio ratio-4x3">
                            <iframe class="rounded" src="https://www.youtube.com/embed/PHcgN1GTjdU" title="YouTube video" allowfullscreen></iframe>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
<pre class="language-markup"><code>&lt;!-- Ratio Video 4:3 --&gt;
&lt;div class=&quot;ratio ratio-4x3&quot;&gt;
    &lt;iframe src=&quot;https://www.youtube.com/embed/1y_kfWUCFDQ&quot; title=&quot;YouTube video&quot; allowfullscreen&gt;&lt;/iframe&gt;
&lt;/div&gt;</code></pre>
                    </b-card-body>
                </b-card>

                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Custom Ratios</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>--tb-aspect-ratio: 50%</code> to style element to set aspect ratio 2:1.</p>
                        <!-- 16:9 aspect ratio -->
                        <div class="ratio" style="--tb-aspect-ratio: 50%;">
                            <iframe class="rounded" src="https://www.youtube.com/embed/2RZQN_ko0iU" title="YouTube video" allowfullscreen></iframe>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
<pre class="language-markup"><code>&lt;!-- Custom Ratio Video --&gt;
&lt;div class=&quot;ratio&quot; style=&quot;--tb-aspect-ratio: 50%;&quot;&gt;
    &lt;iframe src=&quot;https://www.youtube.com/embed/2RZQN_ko0iU&quot; title=&quot;YouTube video&quot; allowfullscreen&gt;&lt;/iframe&gt;
&lt;/div&gt;</code></pre>
                    </b-card-body>
                </b-card>

            </b-col>
            

            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Ratio Video 21:9</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>ratio-21x9</code> class to set aspect ratio 21:9.</p>
                        <!-- 21:9 aspect ratio -->
                        <div class="ratio ratio-21x9">
                            <iframe class="rounded" src="https://www.youtube.com/embed/Z-fV2lGKnnU" title="YouTube video" allowfullscreen></iframe>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
<pre class="language-markup"><code>&lt;!-- Ratio Video 21:9 --&gt;
&lt;div class=&quot;ratio ratio-21x9&quot;&gt;
    &lt;iframe src=&quot;https://www.youtube.com/embed/Z-fV2lGKnnU&quot; title=&quot;YouTube video&quot; allowfullscreen&gt;&lt;/iframe&gt;
&lt;/div&gt;</code></pre>
                    </b-card-body>
                </b-card>

                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Ratio Video 1:1</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>ratio-1x1</code> class to set aspect ratio 1:1.</p>
                        <!-- 1:1 aspect ratio -->
                        <div class="ratio ratio-1x1">
                            <iframe class="rounded" src="https://www.youtube.com/embed/GfSZtaoc5bw" title="YouTube video" allowfullscreen></iframe>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
<pre class="language-markup"><code>&lt;!-- Ratio Video 1:1 --&gt;
&lt;div class=&quot;ratio ratio-1x1&quot;&gt;
    &lt;iframe src=&quot;https://www.youtube.com/embed/GfSZtaoc5bw&quot; title=&quot;YouTube video&quot; allowfullscreen&gt;&lt;/iframe&gt;
&lt;/div&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
            
        </b-row>
    </Layout>
</template>