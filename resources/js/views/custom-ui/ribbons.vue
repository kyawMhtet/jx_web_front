<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";
import "prismjs";

export default {
    data() {
        return {
            title: "Ribbons",
            items: [
                {
                    text: "Custom UI",
                    href: "/",
                },
                {
                    text: "Ribbons",
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
                <b-col lg="12">
                    <b-card no-body>
                        <b-card-header class="align-items-center">
                            <b-card-title class="mb-0">Round Shape</b-card-title>
                        </b-card-header>

                        <b-card-body>
                            <b-row class="g-3">
                                <p class="text-muted">Use <code>round-shape</code> class to show round-shaped ribbon.</p>
                                <b-col xxl="4">
                                    <b-card no-body class="ribbon-box border shadow-none mb-lg-0">
                                        <b-card-body>
                                            <div class="ribbon ribbon-primary round-shape">Primary</div>
                                            <h5 class="fs-md text-end">Rounded Ribbon</h5>

                                            <div class="ribbon-content mt-4 text-muted">
                                                <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse
                                                    convallis dignissim eros at volutpat. In egestas
                                                    mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend
                                                    et sem ac, commodo dapibus odio.</p>
                                            </div>
                                        </b-card-body>
                                    </b-card>
                                </b-col>

                                <b-col xxl="4">
                                    <b-card no-body class="ribbon-box border shadow-none mb-lg-0">
                                        <b-card-body>
                                            <div class="ribbon ribbon-success round-shape">Success</div>
                                            <h5 class="fs-md text-end">Rounded Ribbon</h5>
                                            <div class="ribbon-content mt-4 text-muted">
                                                <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse
                                                    convallis dignissim eros at volutpat. In egestas
                                                    mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend
                                                    et sem ac, commodo dapibus odio.</p>
                                            </div>
                                        </b-card-body>
                                    </b-card>
                                </b-col>

                                <b-col xxl="4">
                                    <b-card no-body class="ribbon-box border shadow-none right mb-lg-0">
                                        <b-card-body>
                                            <div class="ribbon ribbon-info round-shape">Info</div>
                                            <h5 class="fs-md text-start">Rounded Ribbon Right</h5>
                                            <div class="ribbon-content mt-4 text-muted">
                                                <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse
                                                    convallis dignissim eros at volutpat. In egestas
                                                    mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend
                                                    et sem ac, commodo dapibus odio.</p>
                                            </div>
                                        </b-card-body>
                                    </b-card>
                                </b-col>
                            </b-row>

                        </b-card-body>
                        <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                        </b-card-body>
                        <b-card-body>
                            <pre class="language-markup" style="height: 310px;"><code>&lt;b-card no-body class=&quot;ribbon-box border shadow-none mb-lg-0&quot;&gt;
    &lt;b-card-body&gt;
        &lt;div class=&quot;ribbon ribbon-primary round-shape&quot;&gt;Primary&lt;/div&gt;
        &lt;h5 class=&quot;fs-md text-end&quot;&gt;Rounded Ribbon&lt;/h5&gt;
        &lt;div class=&quot;ribbon-content mt-4 text-muted&quot;&gt;
            &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse
                convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend
                et sem ac, commodo dapibus odio.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/b-card-body&gt;
&lt;/b-card&gt;</code>

<code>&lt;b-card no-body class=&quot;ribbon-box border shadow-none mb-lg-0&quot;&gt;
    &lt;b-card-body&gt;
        &lt;div class=&quot;ribbon ribbon-success round-shape&quot;&gt;Success&lt;/div&gt;
        &lt;h5 class=&quot;fs-md text-end&quot;&gt;Rounded Ribbon&lt;/h5&gt;
        &lt;div class=&quot;ribbon-content mt-4 text-muted&quot;&gt;
            &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse
                convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend
                et sem ac, commodo dapibus odio.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/b-card-body&gt;
&lt;/b-card&gt;</code>

<code>&lt;!-- Right Ribbon --&gt;
&lt;b-card no-body class=&quot;ribbon-box border shadow-none right mb-lg-0&quot;&gt;
    &lt;b-card-body&gt;
        &lt;div class=&quot;ribbon ribbon-info round-shape&quot;&gt;Info&lt;/div&gt;
        &lt;h5 class=&quot;fs-md text-start&quot;&gt;Rounded Ribbon Right&lt;/h5&gt;
        &lt;div class=&quot;ribbon-content mt-4 text-muted&quot;&gt;
            &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse
                convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend
                et sem ac, commodo dapibus odio.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/b-card-body&gt;
&lt;/b-card&gt;
</code></pre>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>

            <b-row>
                <b-col lg="12">
                    <b-card no-body>
                        <b-card-header class="align-items-center">
                            <b-card-title class="mb-0">Vertical Shape</b-card-title>
                        </b-card-header>

                        <b-card-body>
                            <b-row class="g-3">
                                <p class="text-muted">Use <code>vertical-shape</code> class to show round-shaped ribbon.</p>
                                <b-col xxl="4">
                                    <b-card no-body class="ribbon-box border shadow-none mb-lg-0">
                                        <b-card-body>
                                            <div class="d-flex">
                                                <div class="ribbon ribbon-primary vertical-shape">Primary</div>
                                                <div class="flex-grow-1">
                                                    <div class="ribbon-content text-muted ms-5">
                                                        <h5 class="fs-md text-end">Rounded Ribbon</h5>
                                                        <p class="mb-0">Quisque nec turpis at urna dictum luctus.
                                                            Suspendisse convallis dignissim eros at volutpat. In egestas
                                                            mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris,
                                                            eleifend et sem ac, commodo dapibus odio.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-card-body>
                                    </b-card>
                                </b-col>

                                <b-col xxl="4">
                                    <b-card no-body class="ribbon-box border shadow-none mb-lg-0">
                                        <b-card-body>
                                            <div class="d-flex">
                                                <div class="ribbon ribbon-success vertical-shape">Success</div>
                                                <div class="flex-grow-1">
                                                    <div class="ribbon-content text-muted ms-5">
                                                        <h5 class="fs-md text-end">Rounded Ribbon</h5>
                                                        <p class="mb-0">Quisque nec turpis at urna dictum luctus.
                                                            Suspendisse convallis dignissim eros at volutpat. In egestas
                                                            mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris,
                                                            eleifend et sem ac, commodo dapibus odio.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-card-body>
                                    </b-card>
                                </b-col>

                                <b-col xxl="4">
                                    <!-- Right Ribbon -->
                                    <b-card no-body class="ribbon-box border shadow-none right mb-lg-0">
                                        <b-card-body>
                                            <div class="d-flex">
                                                <div class="ribbon ribbon-info vertical-shape">Info</div>
                                                <div class="flex-grow-1">
                                                    <div class="ribbon-content text-muted me-5">
                                                        <h5 class="fs-md text-start">Rounded Ribbon Right</h5>
                                                        <p class="mb-0">Quisque nec turpis at urna dictum luctus.
                                                            Suspendisse convallis dignissim eros at volutpat. In egestas
                                                            mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris,
                                                            eleifend et sem ac, commodo dapibus odio.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-card-body>
                                    </b-card>
                                </b-col>
                            </b-row>

                        </b-card-body>
                        <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                        </b-card-body>
                        <b-card-body>
                            <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Rounded Ribbon --&gt;
&lt;b-card no-body class=&quot;ribbon-box border shadow-none mb-lg-0&quot;&gt;
    &lt;b-card-body&gt;
        &lt;div class=&quot;d-flex&quot;&gt;
            &lt;div class=&quot;ribbon ribbon-primary vertical-shape&quot;&gt;Primary&lt;/div&gt;
            &lt;div class=&quot;flex-grow-1&quot;&gt;
                &lt;div class=&quot;ribbon-content text-muted ms-5&quot;&gt;
                    &lt;h5 class=&quot;fs-md text-end&quot;&gt;Rounded Ribbon&lt;/h5&gt;
                    &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus.
                        Suspendisse convallis dignissim eros at volutpat. In egestas
                        mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris,
                        eleifend et sem ac, commodo dapibus odio.&lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-card-body&gt;
&lt;/b-card&gt;</code>

<code>&lt;b-card no-body class=&quot;ribbon-box border shadow-none mb-lg-0&quot;&gt;
    &lt;b-card-body&gt;
        &lt;div class=&quot;d-flex&quot;&gt;
            &lt;div class=&quot;ribbon ribbon-success vertical-shape&quot;&gt;Success&lt;/div&gt;
            &lt;div class=&quot;flex-grow-1&quot;&gt;
                &lt;div class=&quot;ribbon-content text-muted ms-5&quot;&gt;
                    &lt;h5 class=&quot;fs-md text-end&quot;&gt;Rounded Ribbon&lt;/h5&gt;
                    &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus.
                        Suspendisse convallis dignissim eros at volutpat. In egestas
                        mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris,
                        eleifend et sem ac, commodo dapibus odio.&lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-card-body&gt;
&lt;/b-card&gt;</code>

<code>&lt;!-- Right Ribbon --&gt;
&lt;b-card no-body class=&quot;ribbon-box border shadow-none right mb-lg-0&quot;&gt;
    &lt;b-card-body&gt;
        &lt;div class=&quot;d-flex&quot;&gt;
            &lt;div class=&quot;ribbon ribbon-info vertical-shape&quot;&gt;Info&lt;/div&gt;
            &lt;div class=&quot;flex-grow-1&quot;&gt;
                &lt;div class=&quot;ribbon-content text-muted me-5&quot;&gt;
                    &lt;h5 class=&quot;fs-md text-start&quot;&gt;Rounded Ribbon Right&lt;/h5&gt;
                    &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus.
                        Suspendisse convallis dignissim eros at volutpat. In egestas
                        mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris,
                        eleifend et sem ac, commodo dapibus odio.&lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-card-body&gt;
&lt;/b-card&gt;</code></pre>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>

            <b-row>
                <b-col lg="12">
                    <b-card no-body>
                        <b-card-header>
                            <b-card-title class="mb-0">Ribbon Shape</b-card-title>
                        </b-card-header>

                        <b-card-body>
                            <b-row class="g-3">
                                <p class="text-muted">Use <code>ribbon-shape</code> class to show ribbon shaped ribbon.</p>
                                <b-col xxl="4">
                                    <b-card no-body class="ribbon-box border shadow-none mb-lg-0">
                                        <b-card-body>
                                            <div class="ribbon ribbon-primary ribbon-shape">Primary</div>
                                            <h5 class="fs-md text-end">Ribbon Shape</h5>
                                            <div class="ribbon-content text-muted mt-4">
                                                <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse
                                                    convallis dignissim eros at volutpat. In egestas
                                                    mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend
                                                    et sem ac, commodo dapibus odio.</p>
                                            </div>
                                        </b-card-body>
                                    </b-card>
                                </b-col>

                                <b-col xxl="4">
                                    <b-card no-body class="ribbon-box border shadow-none mb-lg-0">
                                        <b-card-body>
                                            <div class="ribbon ribbon-success ribbon-shape">Success</div>
                                            <h5 class="fs-md text-end">Ribbon Shape</h5>
                                            <div class="ribbon-content text-muted mt-4">
                                                <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse
                                                    convallis dignissim eros at volutpat. In egestas
                                                    mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend
                                                    et sem ac, commodo dapibus odio.</p>
                                            </div>
                                        </b-card-body>
                                    </b-card>
                                </b-col>

                                <b-col xxl="4">
                                    <b-card no-body class="ribbon-box border shadow-none mb-lg-0 right">
                                        <b-card-body>
                                            <div class="ribbon ribbon-info ribbon-shape">Info</div>
                                            <h5 class="fs-md text-start">Ribbon Shape Right</h5>
                                            <div class="ribbon-content text-muted mt-4">
                                                <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse
                                                    convallis dignissim eros at volutpat. In egestas
                                                    mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend
                                                    et sem ac, commodo dapibus odio.</p>
                                            </div>
                                        </b-card-body>
                                    </b-card>
                                </b-col>
                            </b-row>

                        </b-card-body>
                        <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                        </b-card-body>
                        <b-card-body>
                            <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Ribbon Shape --&gt;
&lt;b-card no-body class=&quot;ribbon-box border shadow-none mb-lg-0&quot;&gt;
    &lt;b-card-body&gt;
        &lt;div class=&quot;ribbon ribbon-primary ribbon-shape&quot;&gt;Primary&lt;/div&gt;
        &lt;h5 class=&quot;fs-md text-end&quot;&gt;Ribbon Shape&lt;/h5&gt;
        &lt;div class=&quot;ribbon-content text-muted mt-4&quot;&gt;
            &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse
                convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend
                et sem ac, commodo dapibus odio.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/b-card-body&gt;
&lt;/b-card&gt;</code>

<code>&lt;b-card no-body class=&quot;ribbon-box border shadow-none mb-lg-0&quot;&gt;
    &lt;b-card-body&gt;
        &lt;div class=&quot;ribbon ribbon-success ribbon-shape&quot;&gt;Success&lt;/div&gt;
        &lt;h5 class=&quot;fs-md text-end&quot;&gt;Ribbon Shape&lt;/h5&gt;
        &lt;div class=&quot;ribbon-content text-muted mt-4&quot;&gt;
            &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse
                convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend
                et sem ac, commodo dapibus odio.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/b-card-body&gt;
&lt;/b-card&gt;</code>

<code>&lt;b-card no-body class=&quot;ribbon-box border shadow-none mb-lg-0 right&quot;&gt;
    &lt;b-card-body&gt;
        &lt;div class=&quot;ribbon ribbon-info ribbon-shape&quot;&gt;Info&lt;/div&gt;
        &lt;h5 class=&quot;fs-md text-start&quot;&gt;Ribbon Shape Right&lt;/h5&gt;
        &lt;div class=&quot;ribbon-content text-muted mt-4&quot;&gt;
            &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse
                convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend
                et sem ac, commodo dapibus odio.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/b-card-body&gt;
&lt;/b-card&gt;</code></pre>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>

            <b-row>
                <b-col lg="12">

                    <b-card no-body>

                        <b-card-header>
                            <b-card-title class="mb-0">Filled Ribbons</b-card-title>
                        </b-card-header>

                        <b-card-body>
                            <b-row class="g-3">
                                <p class="text-muted">Use <code>ribbon-fill</code> class to show fill-shaped ribbon.</p>
                                <b-col xxl="4">
                                    <b-card no-body class="ribbon-box border ribbon-fill shadow-none mb-lg-0">
                                        <b-card-body>
                                            <div class="ribbon ribbon-primary">New</div>
                                            <h5 class="fs-md text-end">Fill Ribbon</h5>
                                            <div class="ribbon-content mt-3 text-muted">
                                                <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse
                                                    convallis dignissim eros at volutpat. In egestas
                                                    mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend
                                                    et sem ac, commodo dapibus odio.</p>
                                            </div>
                                        </b-card-body>
                                    </b-card>
                                </b-col>

                                <b-col xxl="4">
                                    <b-card no-body class="ribbon-box border ribbon-fill shadow-none mb-lg-0">
                                        <b-card-body>
                                            <div class="ribbon ribbon-success">Sale</div>
                                            <h5 class="fs-md text-end">Fill Ribbon</h5>
                                            <div class="ribbon-content mt-3 text-muted">
                                                <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse
                                                    convallis dignissim eros at volutpat. In egestas
                                                    mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend
                                                    et sem ac, commodo dapibus odio.</p>
                                            </div>
                                        </b-card-body>
                                    </b-card>
                                </b-col>

                                <b-col xxl="4">
                                    <!-- Right Ribbon -->
                                    <b-card no-body class="ribbon-box border ribbon-fill shadow-none right mb-lg-0">
                                        <b-card-body>
                                            <div class="ribbon ribbon-info">New</div>
                                            <h5 class="fs-md text-start">Fill Ribbon Right</h5>
                                            <div class="ribbon-content mt-3 text-muted">
                                                <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse
                                                    convallis dignissim eros at volutpat. In egestas
                                                    mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend
                                                    et sem ac, commodo dapibus odio.</p>
                                            </div>
                                        </b-card-body>
                                    </b-card>
                                </b-col>
                            </b-row>

                        </b-card-body>
                        <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                        </b-card-body>
                        <b-card-body>
                            <pre class="language-markup" style="height: 310px;"><code>&lt;b-card no-body class=&quot;ribbon-box border ribbon-fill shadow-none mb-lg-0&quot;&gt;
    &lt;b-card-body&gt;
        &lt;div class=&quot;ribbon ribbon-primary&quot;&gt;New&lt;/div&gt;
        &lt;h5 class=&quot;fs-md text-end&quot;&gt;Fill Ribbon&lt;/h5&gt;
        &lt;div class=&quot;ribbon-content mt-3 text-muted&quot;&gt;
            &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse
                convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend
                et sem ac, commodo dapibus odio.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/b-card-body&gt;
&lt;/b-card&gt;</code>

<code>&lt;b-card no-body class=&quot;ribbon-box border ribbon-fill shadow-none mb-lg-0&quot;&gt;
    &lt;b-card-body&gt;
        &lt;div class=&quot;ribbon ribbon-success&quot;&gt;Sale&lt;/div&gt;
        &lt;h5 class=&quot;fs-md text-end&quot;&gt;Fill Ribbon&lt;/h5&gt;
        &lt;div class=&quot;ribbon-content mt-3 text-muted&quot;&gt;
            &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse
                convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend
                et sem ac, commodo dapibus odio.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/b-card-body&gt;
&lt;/b-card&gt;</code>

<code>&lt;!-- Right Ribbon --&gt;
&lt;b-card no-body class=&quot;ribbon-box border ribbon-fill shadow-none right mb-lg-0&quot;&gt;
    &lt;b-card-body&gt;
        &lt;div class=&quot;ribbon ribbon-info&quot;&gt;New&lt;/div&gt;
        &lt;h5 class=&quot;fs-md text-start&quot;&gt;Fill Ribbon Right&lt;/h5&gt;
        &lt;div class=&quot;ribbon-content mt-3 text-muted&quot;&gt;
            &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse
                convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend
                et sem ac, commodo dapibus odio.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/b-card-body&gt;
&lt;/b-card&gt;</code></pre>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>

            <b-row>
                <b-col lg="12">
                    <b-card no-body>
                        <b-card-header>
                            <b-card-title class="mb-0">Ribbons Hover</b-card-title>
                        </b-card-header>

                        <b-card-body>
                            <b-row class="g-3">
                                <p class="text-muted">Use <code>trending-ribbon</code> class to show ribbon with hovering
                                    effect.</p>
                                <b-col xxl="4">
                                    <b-card no-body class="ribbon-box border shadow-none overflow-hidden mb-lg-0">
                                        <b-card-body class="text-muted">
                                            <div class="ribbon ribbon-info ribbon-shape trending-ribbon">
                                                <span class="trending-ribbon-text">Trending</span> <i
                                                    class="ri-flashlight-fill text-white align-bottom float-end ms-1"></i>
                                            </div>
                                            <h5 class="fs-md text-end mb-3">Ribbon Shape</h5>
                                            <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis
                                                dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum
                                                aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.
                                                Vivamus pretium nec odio cursus.</p>
                                        </b-card-body>
                                    </b-card>
                                </b-col>

                                <b-col xxl="4">
                                    <b-card no-body class="ribbon-box border shadow-none overflow-hidden mb-lg-0">
                                        <b-card-body class="text-muted">
                                            <div class="ribbon ribbon-info ribbon-shape trending-ribbon">
                                                <span class="trending-ribbon-text">Trending</span> <i
                                                    class="ri-flashlight-fill text-white align-bottom float-end ms-1"></i>
                                            </div>
                                            <h5 class="fs-md text-end mb-3">Ribbon Shape</h5>
                                            <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis
                                                dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum
                                                aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.
                                                Vivamus pretium nec odio cursus.</p>
                                        </b-card-body>
                                    </b-card>
                                </b-col>

                                <b-col xxl="4">
                                    <b-card no-body class="ribbon-box right border shadow-none overflow-hidden mb-lg-0">
                                        <b-card-body class="text-muted">
                                            <div class="ribbon ribbon-info ribbon-shape trending-ribbon">
                                                <i class="ri-flashlight-fill text-white align-bottom float-start me-1"></i>
                                                <span class="trending-ribbon-text">Trending</span>
                                            </div>
                                            <h5 class="fs-md mb-3">Ribbon Right Shape</h5>
                                            <p class="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis
                                                dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum
                                                aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.
                                                Vivamus pretium nec odio cursus.</p>
                                        </b-card-body>
                                    </b-card>
                                </b-col>
                            </b-row>

                        </b-card-body>
                        <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                            <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                        </b-card-body>
                        <b-card-body>
                            <pre class="language-markup" style="height: 310px;"><code>&lt;b-card no-body class=&quot;ribbon-box border shadow-none overflow-hidden mb-lg-0&quot;&gt;
    &lt;b-card-body class=&quot;text-muted&quot;&gt;
        &lt;div class=&quot;ribbon ribbon-info ribbon-shape trending-ribbon&quot;&gt;
            &lt;span class=&quot;trending-ribbon-text&quot;&gt;Trending&lt;/span&gt; &lt;i
                class=&quot;ri-flashlight-fill text-white align-bottom float-end ms-1&quot;&gt;&lt;/i&gt;
        &lt;/div&gt;
        &lt;h5 class=&quot;fs-md text-end mb-3&quot;&gt;Ribbon Shape&lt;/h5&gt;
        &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse convallis
            dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum
            aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.
            Vivamus pretium nec odio cursus.&lt;/p&gt;
    &lt;/b-card-body&gt;
&lt;/b-card&gt;</code>

<code>&lt;b-card no-body class=&quot;ribbon-box border shadow-none overflow-hidden mb-lg-0&quot;&gt;
    &lt;b-card-body class=&quot;text-muted&quot;&gt;
        &lt;div class=&quot;ribbon ribbon-info ribbon-shape trending-ribbon&quot;&gt;
            &lt;span class=&quot;trending-ribbon-text&quot;&gt;Trending&lt;/span&gt; &lt;i
                class=&quot;ri-flashlight-fill text-white align-bottom float-end ms-1&quot;&gt;&lt;/i&gt;
        &lt;/div&gt;
        &lt;h5 class=&quot;fs-md text-end mb-3&quot;&gt;Ribbon Shape&lt;/h5&gt;
        &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse convallis
            dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum
            aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.
            Vivamus pretium nec odio cursus.&lt;/p&gt;
    &lt;/b-card-body&gt;
&lt;/b-card&gt;</code>

<code>&lt;b-card no-body class=&quot;ribbon-box right border shadow-none overflow-hidden mb-lg-0&quot;&gt;
    &lt;b-card-body class=&quot;text-muted&quot;&gt;
        &lt;div class=&quot;ribbon ribbon-info ribbon-shape trending-ribbon&quot;&gt;
            &lt;i class=&quot;ri-flashlight-fill text-white align-bottom float-start me-1&quot;&gt;&lt;/i&gt;
            &lt;span class=&quot;trending-ribbon-text&quot;&gt;Trending&lt;/span&gt;
        &lt;/div&gt;
        &lt;h5 class=&quot;fs-md mb-3&quot;&gt;Ribbon Right Shape&lt;/h5&gt;
        &lt;p class=&quot;mb-0&quot;&gt;Quisque nec turpis at urna dictum luctus. Suspendisse convallis
            dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum
            aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.
            Vivamus pretium nec odio cursus.&lt;/p&gt;
    &lt;/b-card-body&gt;
&lt;/b-card&gt;</code></pre>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
    </Layout>
</template>