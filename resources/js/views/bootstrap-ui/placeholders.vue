<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import small1 from "../../../images/small/img-1.jpg"
import small2 from "../../../images/small/img-2.jpg"

import "prismjs";

export default {
    data() {
        return {
            title: "Placeholders",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Placeholders",
                    active: true,
                },
            ],
            small1,
            small2
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
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Default Placeholder</b-card-title>
                    </b-card-header>

                    <b-card-body>

                        <p class="text-muted">In the example below, we take a typical card component and recreate it with
                            placeholders applied to create a “loading card”.</p>

                        <b-row class="justify-content-center">
                            <b-col xl="7">
                                <b-row class="justify-content-between">
                                    <b-col lg="5" sm="6">
                                        <b-card no-body>
                                            <img :src="small1" class="card-img-top" alt="card img">
                                            <b-card-body>
                                                <b-card-title tag="h5">Card title</b-card-title>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <b-link href="#" class="btn btn-primary">Go somewhere</b-link>
                                            </b-card-body>
                                        </b-card>
                                    </b-col>
                                    <b-col lg="5" sm="6">
                                        <b-card no-body>
                                            <img :src="small2" class="card-img-top" alt="card dummy img">
                                            <b-card-body>
                                                <b-card-title tag="h5" class="placeholder-glow"> <span class="placeholder col-6"></span> </b-card-title>
                                                <p class="card-text placeholder-glow">
                                                    <span class="placeholder col-7"></span>
                                                    <span class="placeholder col-4"></span>
                                                    <span class="placeholder col-4"></span>
                                                    <span class="placeholder col-6"></span>
                                                </p>
                                                <b-link href="#" class="btn btn-primary disabled placeholder col-6"></b-link>
                                            </b-card-body>
                                        </b-card>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 310px">
<code>&lt;!-- Base Examples --&gt;
&lt;b-card no-body&gt;
    &lt;img src=&quot;@/assets/images/small/img-1.jpg&quot; class=&quot;card-img-top&quot; alt=&quot;card img&quot;&gt;
    &lt;b-card-body&gt;
        &lt;b-card-title tag=&quot;h5&quot;&gt;Card title&lt;/b-card-title&gt;
        &lt;p class=&quot;card-text&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
        &lt;b-link href=&quot;#&quot; class=&quot;btn btn-primary&quot;&gt;Go somewhere&lt;/b-link&gt;
    &lt;/b-card-body&gt;
&lt;/b-card&gt;</code>

<code>&lt;b-card no-body&gt;
    &lt;img src=&quot;@/assets/images/small/img-2.jpg&quot; class=&quot;card-img-top&quot; alt=&quot;card dummy img&quot;&gt;
    &lt;b-card-body&gt;
        &lt;b-card-title tag=&quot;h5&quot; class=&quot;placeholder-glow&quot;&gt; &lt;span class=&quot;placeholder col-6&quot;&gt;&lt;/span&gt; &lt;/b-card-title&gt;
        &lt;p class=&quot;card-text placeholder-glow&quot;&gt;
            &lt;span class=&quot;placeholder col-7&quot;&gt;&lt;/span&gt;
            &lt;span class=&quot;placeholder col-4&quot;&gt;&lt;/span&gt;
            &lt;span class=&quot;placeholder col-4&quot;&gt;&lt;/span&gt;
            &lt;span class=&quot;placeholder col-6&quot;&gt;&lt;/span&gt;
        &lt;/p&gt;
        &lt;b-link href=&quot;#&quot; class=&quot;btn btn-primary disabled placeholder col-6&quot;&gt;&lt;/b-link&gt;
    &lt;/b-card-body&gt;
&lt;/b-card&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
            
        </b-row>
        

        <b-row>
            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Width</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>w-25,w-50,w-75</code> or <code>w-100</code> class to placeholder
                            class to set different widths to the placeholder.</p>
                        <div>
                            <span class="placeholder w-50"></span>
                            <span class="placeholder w-75"></span>
                            <span class="placeholder w-25"></span>
                            <span class="placeholder w-100"></span>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup"><code>&lt;!-- Width Sizing--&gt;
&lt;div class=&quot;live-preview&quot;&gt;
    &lt;span class=&quot;placeholder col-6&quot;&gt;&lt;/span&gt;
    &lt;span class=&quot;placeholder w-75&quot;&gt;&lt;/span&gt;
    &lt;span class=&quot;placeholder&quot; style=&quot;width: 25%;&quot;&gt;&lt;/span&gt;
&lt;/div&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
            
            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Sizing</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>placeholder-lg</code>, <code>placeholder-sm</code>, or
                            <code>placeholder-xs</code> class to placeholder class to set different size placeholder.</p>
                        <b-row class="gap-0">
                            <b-col cols="12">
                                <span class="placeholder placeholder-lg w-100"></span>
                            </b-col>
                            <b-col cols="12">
                                <span class="placeholder w-100"></span>
                            </b-col>
                            <b-col cols="12">
                                <span class="placeholder placeholder-sm w-100"></span>
                            </b-col>
                            <b-col cols="12">
                                <span class="placeholder placeholder-xs w-100"></span>
                            </b-col>
                        </b-row>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 117px;"><code>&lt;!-- Sizing --&gt;
&lt;span class=&quot;placeholder col-12 placeholder-lg&quot;&gt;&lt;/span&gt;</code>

<code>&lt;span class=&quot;placeholder col-12&quot;&gt;&lt;/span&gt;</code>

<code>&lt;span class=&quot;placeholder col-12 placeholder-sm&quot;&gt;&lt;/span&gt;</code>

<code>&lt;span class=&quot;placeholder col-12 placeholder-xs&quot;&gt;&lt;/span&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
            
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Color</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>bg-</code> class with the below-mentioned color variation to set a
                            custom color.</p>
                        <b-row class="g-2">
                            <b-col cols="12">
                                <span class="placeholder w-100"></span>
                            </b-col>
                            
                            <b-col cols="12">
                                <span class="placeholder bg-primary w-100"></span>
                            </b-col>
                            
                            <b-col cols="12">
                                <span class="placeholder bg-secondary w-100"></span>
                            </b-col>
                            
                            <b-col cols="12">
                                <span class="placeholder bg-success w-100"></span>
                            </b-col>
                            
                            <b-col cols="12">
                                <span class="placeholder bg-danger w-100"></span>
                            </b-col>
                            
                            <b-col cols="12">
                                <span class="placeholder bg-warning w-100"></span>
                            </b-col>
                            
                            <b-col cols="12">
                                <span class="placeholder bg-info w-100"></span>
                            </b-col>
                            
                            <b-col cols="12">
                                <span class="placeholder bg-light w-100"></span>
                            </b-col>
                            
                            <b-col cols="12">
                                <span class="placeholder bg-dark w-100"></span>
                            </b-col>
                            
                        </b-row>
                        
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 310px"><code>&lt;!-- Color --&gt;
&lt;span class=&quot;placeholder col-12 mb-3&quot;&gt;&lt;/span&gt;</code>

<code>&lt;span class=&quot;placeholder col-12 mb-3 bg-primary&quot;&gt;&lt;/span&gt;</code>

<code>&lt;span class=&quot;placeholder col-12 mb-3 bg-secondary&quot;&gt;&lt;/span&gt;</code>

<code>&lt;span class=&quot;placeholder col-12 mb-3 bg-success&quot;&gt;&lt;/span&gt;</code>

<code>&lt;span class=&quot;placeholder col-12 mb-3 bg-danger&quot;&gt;&lt;/span&gt;</code>

<code>&lt;span class=&quot;placeholder col-12 mb-3 bg-warning&quot;&gt;&lt;/span&gt;</code>

<code>&lt;span class=&quot;placeholder col-12 mb-3 bg-info&quot;&gt;&lt;/span&gt;</code>

<code>&lt;span class=&quot;placeholder col-12 mb-3 bg-light&quot;&gt;&lt;/span&gt;</code>

<code>&lt;span class=&quot;placeholder col-12 mb-3 bg-dark&quot;&gt;&lt;/span&gt;</code></pre>
                    </b-card-body>
                </b-card>
        </b-col>
        
    </b-row>
    
</Layout></template>