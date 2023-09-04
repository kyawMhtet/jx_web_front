<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import "prismjs";

export default {
    data() {
        return {
            title: "Grid",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Grid",
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
            <b-col cols="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Grid Options</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">See how aspects of the Bootstrap grid system work across multiple devices with a handy table.</p>
                        <div class="table-responsive">
                            <table class="table table-bordered table-nowrap mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col" class="text-center">
                                            xs<br>
                                            <span class="fw-normal">&lt;576px</span>
                                        </th>
                                        <th scope="col" class="text-center">
                                            sm<br>
                                            <span class="fw-normal">≥576px</span>
                                        </th>
                                        <th scope="col" class="text-center">
                                            md<br>
                                            <span class="fw-normal">≥768px</span>
                                        </th>
                                        <th scope="col" class="text-center">
                                            lg<br>
                                            <span class="fw-normal">≥992px</span>
                                        </th>
                                        <th scope="col" class="text-center">
                                            xl<br>
                                            <span class="fw-normal">≥1200px</span>
                                        </th>
                                        <th scope="col" class="text-center">
                                            xxl<br>
                                            <span class="fw-normal">≥1400px</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th class="text-nowrap" scope="row">Grid behavior</th>
                                        <td>Horizontal at all times</td>
                                        <td colspan="5">Collapsed to start, horizontal above breakpoints</td>
                                    </tr>
                                    <tr>
                                        <th class="text-nowrap" scope="row">Max container width</th>
                                        <td>None (auto)</td>
                                        <td>540px</td>
                                        <td>720px</td>
                                        <td>960px</td>
                                        <td>1140px</td>
                                        <td>1320px</td>
                                    </tr>
                                    <tr>
                                        <th class="text-nowrap" scope="row">Class prefix</th>
                                        <td><code>col-</code></td>
                                        <td><code>col-sm-</code></td>
                                        <td><code>col-md-</code></td>
                                        <td><code>col-lg-</code></td>
                                        <td><code>col-xl-</code></td>
                                        <td><code>col-xxl-</code></td>
                                    </tr>
                                    <tr>
                                        <th class="text-nowrap" scope="row"># of columns</th>
                                        <td colspan="6">12</td>
                                    </tr>
                                    <tr>
                                        <th class="text-nowrap" scope="row">Gutter width</th>
                                        <td colspan="6">24px (12px on each side of a column)</td>
                                    </tr>
                                    <tr>
                                        <th class="text-nowrap" scope="row">Custom gutters</th>
                                        <td colspan="6">Yes</td>
                                    </tr>
                                    <tr>
                                        <th class="text-nowrap" scope="row">Nestable</th>
                                        <td colspan="6">Yes</td>
                                    </tr>
                                    <tr>
                                        <th class="text-nowrap" scope="row">Offsets</th>
                                        <td colspan="6">Yes</td>
                                    </tr>
                                    <tr>
                                        <th class="text-nowrap" scope="row">Column ordering</th>
                                        <td colspan="6">Yes</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Vertical alignment (align-items-start)</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use <code>align-items-start</code> class to vertically align-items at the start.</p>
                        <div class="bg-light p-3 text-center">
                            <b-row class="align-items-start" style="min-height: 6rem;">
                                <b-col sm="4">
                                    <div class="bg-primary-subtle text-primary rounded p-2">
                                        col-sm-4
                                    </div>
                                </b-col>
                                <b-col sm="4">
                                    <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                        col-sm-4
                                    </div>
                                </b-col>
                                <b-col sm="4">
                                    <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                        col-sm-4
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup">
<code>&lt;!-- Vertical alignment (align-items-start) --&gt;
&lt;b-row class=&quot;align-items-start&quot;&gt;
    &lt;b-col sm=&quot;4&quot;&gt;
        ...
    &lt;/b-col&gt;
    &lt;b-col sm=&quot;4&quot;&gt;
        ...
    &lt;/b-col&gt;
    &lt;b-col sm=&quot;4&quot;&gt;
        ...
    &lt;/b-col&gt;
&lt;/b-row&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Vertical alignment (align-items-center)</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use <code>align-items-center</code> class to vertically align-items at the center.</p>

                        <div class="bg-light p-3 text-center">
                            <b-row class="align-items-center" style="min-height: 6rem;">
                                <b-col sm="4">
                                    <div class="bg-primary-subtle text-primary rounded p-2">
                                        col-sm-4
                                    </div>
                                </b-col>
                                <b-col sm="4">
                                    <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                        col-sm-4
                                    </div>
                                </b-col>
                                <b-col sm="4">
                                    <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                        col-sm-4
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup">
<code>&lt;!-- Vertical alignment (align-items-center) --&gt;
&lt;b-row class=&quot;align-items-center&quot;&gt;
    &lt;b-col sm=&quot;4&quot;&gt;
        ...
    &lt;/b-col&gt;
    &lt;b-col sm=&quot;4&quot;&gt;
        ...
    &lt;/b-col&gt;
    &lt;b-col sm=&quot;4&quot;&gt;
        ...
    &lt;/b-col&gt;
&lt;/b-row&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Vertical alignment (align-items-end)</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use <code>align-items-end</code> class to vertically align-items at the end.</p>
                        <div class="bg-light p-3 text-center">
                            <b-row class="align-items-end" style="min-height: 6rem;">
                                <b-col sm="4">
                                    <div class="bg-primary-subtle text-primary rounded p-2">
                                        col-sm-4
                                    </div>
                                </b-col>
                                <b-col sm="4">
                                    <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                        col-sm-4
                                    </div>
                                </b-col>
                                <b-col sm="4">
                                    <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                        col-sm-4
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup">
<code>&lt;!-- Vertical alignment (align-items-end) --&gt;
&lt;b-row class=&quot;align-items-end&quot;&gt;
    &lt;b-col sm=&quot;4&quot;&gt;
        ...
    &lt;/b-col&gt;
    &lt;b-col sm=&quot;4&quot;&gt;
        ...
    &lt;/b-col&gt;
    &lt;b-col sm=&quot;4&quot;&gt;
        ...
    &lt;/b-col&gt;
&lt;/b-row&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Align Self</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use the <code>align-self-start</code>,<code>align-self-center</code>, or <code>align-self-end</code> class respectively to vertically align items with a different position.</p>

                        <div class="bg-light p-3 text-center">
                            <b-row class="g-2" style="min-height: 9rem;">
                                <b-col sm="4" class="align-self-start">
                                    <div class="bg-primary-subtle text-primary rounded p-2">
                                        align-self-start
                                    </div>
                                </b-col>
                                <b-col sm="4" class="align-self-center">
                                    <div class="bg-primary-subtle text-primary rounded p-2">
                                        align-self-center
                                    </div>
                                </b-col>
                                <b-col sm="4" class="align-self-end">
                                    <div class="bg-primary-subtle text-primary rounded p-2">
                                        align-self-end
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
<pre class="language-markup"><code>&lt;!-- Align Self --&gt;
&lt;b-row&gt;
    &lt;b-col sm=&quot;4&quot; class=&quot;align-self-start&quot;&gt;
        ...
    &lt;/b-col&gt;
    &lt;b-col sm="4" class=&quot;align-self-center&quot;&gt;
        ...
    &lt;/b-col&gt;
    &lt;b-col sm="4" class=&quot;align-self-end&quot;&gt;
        ...
    &lt;/b-col&gt;
&lt;/b-row&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Horizontal Alignment</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use the <code>justify-content-start</code>,<code>justify-content-center</code>, or <code>justify-content-end</code> class respectively to horizontally align items with a different position.</p>
                        <div class="bg-light p-3 text-center">
                            <b-row class="justify-content-start">
                                <b-col sm="4">
                                    <div class="bg-primary-subtle text-primary rounded p-2">
                                        justify-content-start
                                    </div>
                                </b-col>
                            </b-row>
                            <b-row class="justify-content-center">
                                <b-col sm="4">
                                    <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                        justify-content-center
                                    </div>
                                </b-col>
                            </b-row>
                            <b-row class="justify-content-end">
                                <b-col sm="4">
                                    <div class="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                        justify-content-end
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
<pre class="language-markup"><code>&lt;!-- Horizontal Alignment --&gt;
&lt;b-row class=&quot;justify-content-start&quot;&gt;
    &lt;b-col sm=&quot;4&quot;&gt;
        ...
    &lt;/b-col&gt;
&lt;/b-row&gt;</code>

<code>&lt;b-row class=&quot;justify-content-center&quot;&gt;
    &lt;b-col sm=&quot;4&quot;&gt;
        ...
    &lt;/b-col&gt;
&lt;/b-row&gt;</code>

<code>&lt;b-row class=&quot;justify-content-end&quot;&gt;
    &lt;b-col sm=&quot;4&quot;&gt;
        ...
    &lt;/b-col&gt;
&lt;/b-row&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>