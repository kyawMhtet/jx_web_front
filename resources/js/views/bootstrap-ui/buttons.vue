<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import "prismjs";

export default {
    data() {
        return {
            title: "Buttons",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Buttons",
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
                    <b-card-header>
                        <b-card-title class="mb-0">Default Buttons</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use the<code> btn</code> class to show the default button style.</p>
                        <div class="d-flex flex-wrap gap-2">
                            <b-button type="button" variant="primary">Primary</b-button>
                            <b-button type="button" variant="secondary">Secondary</b-button>
                            <b-button type="button" variant="success">Success</b-button>
                            <b-button type="button" variant="info">Info</b-button>
                            <b-button type="button" variant="warning">Warning</b-button>
                            <b-button type="button" variant="danger">Danger</b-button>
                            <b-button type="button" variant="dark">Dark</b-button>
                            <b-button type="button" variant="link">Link</b-button>
                            <b-button type="button" variant="light">Light</b-button>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 240px;"><code>&lt;!-- Base Buttons --&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;primary&quot;&gt;Primary&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;secondary&quot;&gt;Secondary&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;success&quot;&gt;Success&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;info&quot;&gt;Info&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;warning&quot;&gt;Warning&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;danger&quot;&gt;Danger&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;dark&quot;&gt;Dark&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;link&quot;&gt;Link&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;light&quot;&gt;Light&lt;/b-button&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Outline Buttons</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>btn-outline-</code> class with the below-mentioned variation to create a button with the outline.</p>
                        <div class="d-flex flex-wrap gap-2">
                            <b-button type="button" variant="outline-primary">Primary</b-button>
                            <b-button type="button" variant="outline-secondary">Secondary</b-button>
                            <b-button type="button" variant="outline-success">Success</b-button>
                            <b-button type="button" variant="outline-info">Info</b-button>
                            <b-button type="button" variant="outline-warning">Warning</b-button>
                            <b-button type="button" variant="outline-danger">Danger</b-button>
                            <b-button type="button" variant="outline-dark">Dark</b-button>
                            <b-button type="button" variant="outline-light">Light</b-button>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 240px;"><code>&lt;!-- Outline Buttons --&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;outline-primary&quot;&gt;Primary&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;outline-secondary&quot;&gt;Secondary&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;outline-success&quot;&gt;Success&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;outline-info&quot;&gt;Info&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;outline-warning&quot;&gt;Warning&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;outline-danger&quot;&gt;Danger&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;outline-dark&quot;&gt;Dark&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;outline-light&quot;&gt;Light&lt;/b-button&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Rounded Buttons</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use the <code>rounded-pill </code>class to make a rounded button.</p>
                        <div class="d-flex flex-wrap gap-2">
                            <b-button type="button" pill variant="primary">Primary</b-button>
                            <b-button type="button" pill variant="secondary">Secondary</b-button>
                            <b-button type="button" pill variant="success">Success</b-button>
                            <b-button type="button" pill variant="info">Info</b-button>
                            <b-button type="button" pill variant="warning">Warning</b-button>
                            <b-button type="button" pill variant="danger">Danger</b-button>
                            <b-button type="button" pill variant="dark">Dark</b-button>
                            <b-button type="button" pill variant="light">Light</b-button>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 240px;"><code>&lt;!-- Rounded Buttons --&gt;
&lt;b-button type=&quot;button&quot; pill variant=&quot;primary&quot;&gt;Primary&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; pill variant=&quot;secondary&quot;&gt;Secondary&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; pill variant=&quot;success&quot;&gt;Success&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; pill variant=&quot;info&quot;&gt;Info&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; pill variant=&quot;warning&quot;&gt;Warning&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; pill variant=&quot;danger&quot;&gt;Danger&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; pill variant=&quot;dark&quot;&gt;Dark&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; pill variant=&quot;light&quot;&gt;Light&lt;/b-button&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Subtle Buttons</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>btn-subtle-</code> class with the below-mentioned variation to create a button with the subtle background.</p>
                        <div class="d-flex flex-wrap gap-2">
                            <b-button type="button" variant="subtle-primary">Primary</b-button>
                            <b-button type="button" variant="subtle-secondary">Secondary</b-button>
                            <b-button type="button" variant="subtle-success">Success</b-button>
                            <b-button type="button" variant="subtle-info">Info</b-button>
                            <b-button type="button" variant="subtle-warning">Warning</b-button>
                            <b-button type="button" variant="subtle-danger">Danger</b-button>
                            <b-button type="button" variant="subtle-dark">Dark</b-button>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 240px;"><code>&lt;!-- Subtle Buttons --&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;subtle-primary&quot;&gt;Primary&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;subtle-secondary&quot;&gt;Secondary&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;subtle-success&quot;&gt;Success&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;subtle-info&quot;&gt;Info&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;subtle-warning&quot;&gt;Warning&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;subtle-danger&quot;&gt;Danger&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;subtle-dark&quot;&gt;Dark&lt;/b-button&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Ghost Buttons</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>btn-ghost-</code> class with the below-mentioned variation to create a button with the transparent background.</p>
                        <div class="d-flex flex-wrap gap-2">
                            <b-button type="button" variant="ghost-primary">Primary</b-button>
                            <b-button type="button" variant="ghost-secondary">Secondary</b-button>
                            <b-button type="button" variant="ghost-success">Success</b-button>
                            <b-button type="button" variant="ghost-info">Info</b-button>
                            <b-button type="button" variant="ghost-warning">Warning</b-button>
                            <b-button type="button" variant="ghost-danger">Danger</b-button>
                            <b-button type="button" variant="ghost-dark">Dark</b-button>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 240px;"><code>&lt;!-- ghost Buttons --&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;ghost-primary&quot;&gt;Primary&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;ghost-secondary&quot;&gt;Secondary&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;ghost-success&quot;&gt;Success&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;ghost-info&quot;&gt;Info&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;ghost-warning&quot;&gt;Warning&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;ghost-danger&quot;&gt;Danger&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;ghost-dark&quot;&gt;Dark&lt;/b-button&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Gradient Buttons</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>bg-gradient </code>class to create a gradient button.</p>
                        <div class="d-flex flex-wrap gap-2">
                            <b-button type="button" variant="primary" class="bg-gradient">Primary</b-button>
                            <b-button type="button" variant="secondary" class="bg-gradient">Secondary</b-button>
                            <b-button type="button" variant="success" class="bg-gradient">Success</b-button>
                            <b-button type="button" variant="info" class="bg-gradient">Info</b-button>
                            <b-button type="button" variant="warning" class="bg-gradient">Warning</b-button>
                            <b-button type="button" variant="danger" class="bg-gradient">Danger</b-button>
                            <b-button type="button" variant="dark" class="bg-gradient">Dark</b-button>
                            <b-button type="button" variant="light" class="bg-gradient">Light</b-button>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 240px;"><code>&lt;!-- Gradient Buttons --&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;primary&quot; class=&quot;bg-gradient&quot;&gt;Primary&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;secondary&quot; class=&quot;bg-gradient&quot;&gt;Secondary&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;success&quot; class=&quot;bg-gradient&quot;&gt;Success&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;info&quot; class=&quot;bg-gradient&quot;&gt;Info&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;warning&quot; class=&quot;bg-gradient&quot;&gt;Warning&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;danger&quot; class=&quot;bg-gradient&quot;&gt;Danger&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;dark&quot; class=&quot;bg-gradient&quot;&gt;Dark&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;light&quot; class=&quot;bg-gradient&quot;&gt;Light&lt;/b-button&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Buttons with Label</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>btn-label </code>class to create a button with the label.</p>
                        <b-row>
                            <b-col lg="4">
                                <div class="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
                                    <b-button type="button" variant="primary" class="btn-label"><i class="ri-user-smile-line label-icon align-middle fs-lg me-2"></i> Primary</b-button>
                                    <b-button type="button" variant="success" class="btn-label"><i class="ri-check-double-line label-icon align-middle fs-lg me-2"></i> Success</b-button>
                                    <b-button type="button" variant="warning" class="btn-label"><i class="ri-error-warning-line label-icon align-middle fs-lg me-2 "></i> Warning</b-button>
                                </div>
                            </b-col>
                            <b-col lg="4">
                                <div class="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
                                    <b-button type="button" variant="primary" pill class="btn-label"><i class="ri-user-smile-line label-icon align-middle rounded-pill fs-lg me-2"></i> Primary</b-button>
                                    <b-button type="button" variant="success" pill class="btn-label"><i class="ri-check-double-line label-icon align-middle rounded-pill fs-lg me-2"></i> Success</b-button>
                                    <b-button type="button" variant="warning" pill class="btn-label"><i class="ri-error-warning-line label-icon align-middle rounded-pill fs-lg me-2 "></i> Warning</b-button>
                                </div>
                            </b-col>
                            <b-col lg="4">
                                <div class="d-flex flex-wrap gap-2">
                                    <b-button type="button" variant="primary" class="btn-label right"><i class="ri-user-smile-line label-icon align-middle fs-lg ms-2"></i> Primary</b-button>
                                    <b-button type="button" variant="success" pill class="btn-label right"><i class="ri-check-double-line label-icon align-middle rounded-pill fs-lg ms-2"></i> Success</b-button>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 240px;"><code>&lt;!-- Buttons with Label --&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;primary&quot; class=&quot;btn-label&quot;&gt;&lt;i class=&quot;ri-user-smile-line label-icon align-middle fs-lg me-2&quot;&gt;&lt;/i&gt; Primary&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;success&quot; class=&quot;btn-label&quot;&gt;&lt;i class=&quot;ri-check-double-line label-icon align-middle fs-lg me-2&quot;&gt;&lt;/i&gt; Success&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;warning&quot; class=&quot;btn-label&quot;&gt;&lt;i class=&quot;ri-error-warning-line label-icon align-middle fs-lg me-2 &quot;&gt;&lt;/i&gt; Warning&lt;/b-button&gt;</code>

<code>&lt;!-- Rounded with Label --&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;primary&quot; pill class=&quot;btn-label&quot;&gt;&lt;i class=&quot;ri-user-smile-line label-icon align-middle rounded-pill fs-lg me-2&quot;&gt;&lt;/i&gt; Primary&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;success&quot; pill class=&quot;btn-label&quot;&gt;&lt;i class=&quot;ri-check-double-line label-icon align-middle rounded-pill fs-lg me-2&quot;&gt;&lt;/i&gt; Success&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;warning&quot; pill class=&quot;btn-label&quot;&gt;&lt;i class=&quot;ri-error-warning-line label-icon align-middle rounded-pill fs-lg me-2 &quot;&gt;&lt;/i&gt; Warning&lt;/b-button&gt;&gt;</code>

<code>&lt;!-- Buttons with Label Right --&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;primary&quot; class=&quot;btn-label right&quot;&gt;&lt;i class=&quot;ri-user-smile-line label-icon align-middle fs-lg ms-2&quot;&gt;&lt;/i&gt; Primary&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;success&quot; pill class=&quot;btn-label right&quot;&gt;&lt;i class=&quot;ri-check-double-line label-icon align-middle rounded-pill fs-lg ms-2&quot;&gt;&lt;/i&gt; Success&lt;/b-button&gt;&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Load More Buttons</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Example of loading buttons.</p>
                        <b-row>
                            <b-col lg="6">
                                <div class="hstack flex-wrap gap-2 mb-3 mb-lg-0">
                                    <b-button type="button" variant="outline-primary" class="btn-load">
                                        <span class="d-flex align-items-center">
                                            <b-spinner />
                                            <span class="flex-grow-1 ms-2">
                                                Loading...
                                            </span>
                                        </span>
                                    </b-button>
                                    <b-button type="button" variant="success" class="btn-load">
                                        <span class="d-flex align-items-center">
                                            <b-spinner />
                                            <span class="flex-grow-1 ms-2">
                                                Loading...
                                            </span>
                                        </span>
                                    </b-button>
                                    <b-button type="button" variant="outline-secondary" class="btn-load">
                                        <span class="d-flex align-items-center">
                                            <b-spinner type="grow"/>
                                            <span class="flex-grow-1 ms-2">
                                                Loading...
                                            </span>
                                        </span>
                                    </b-button>
                                    <b-button type="button" variant="danger" class="btn-load">
                                        <span class="d-flex align-items-center">
                                            <b-spinner type="grow"/>
                                            <span class="flex-grow-1 ms-2">
                                                Loading...
                                            </span>
                                        </span>
                                    </b-button>
                                </div>
                            </b-col>
                            <b-col lg="6">
                                <div class="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
                                    <b-button variant="outline-primary" class="btn-load">
                                        <span class="d-flex align-items-center">
                                            <span class="flex-grow-1 me-2">
                                                Loading...
                                            </span>
                                            <b-spinner />
                                        </span>
                                    </b-button>
                                    <b-button type="button" variant="success" class="btn-load">
                                        <span class="d-flex align-items-center">
                                            <span class="flex-grow-1 me-2">
                                                Loading...
                                            </span>
                                            <b-spinner />
                                        </span>
                                    </b-button>
                                    <b-button type="button" variant="outline-warning" class="btn-load">
                                        <span class="d-flex align-items-center">
                                            <span class="flex-grow-1 me-2">
                                                Loading...
                                            </span>
                                            <b-spinner type="grow"/>
                                        </span>
                                    </b-button>
                                    <b-button type="button" variant="info" class="btn-load">
                                        <span class="d-flex align-items-center">
                                            <span class="flex-grow-1 me-2">
                                                Loading...
                                            </span>
                                            <b-spinner type="grow"/>
                                        </span>
                                    </b-button>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Load More Buttons --&gt;
&lt;div class=&quot;hstack flex-wrap gap-2 mb-3 mb-lg-0&quot;&gt;
    &lt;button class=&quot;btn btn-outline-primary btn-load&quot;&gt;
        &lt;span class=&quot;d-flex align-items-center&quot;&gt;
            &lt;span class=&quot;spinner-border flex-shrink-0&quot; role=&quot;status&quot;&gt;
                    &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
            &lt;/span&gt;
            &lt;span class=&quot;flex-grow-1 ms-2&quot;&gt;
                Loading...
            &lt;/span&gt;
        &lt;/span&gt;
    &lt;/button&gt;

    &lt;button type=&quot;button&quot; class=&quot;btn btn-success btn-load&quot;&gt;
        &lt;span class=&quot;d-flex align-items-center&quot;&gt;
            &lt;span class=&quot;spinner-border flex-shrink-0&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
            &lt;/span&gt;
            &lt;span class=&quot;flex-grow-1 ms-2&quot;&gt;
                Loading...
            &lt;/span&gt;
        &lt;/span&gt;
    &lt;/button&gt;

    &lt;button type=&quot;button&quot; class=&quot;btn btn-outline-secondary btn-load&quot;&gt;
        &lt;span class=&quot;d-flex align-items-center&quot;&gt;
            &lt;span class=&quot;spinner-grow flex-shrink-0&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
            &lt;/span&gt;
            &lt;span class=&quot;flex-grow-1 ms-2&quot;&gt;
                Loading...
            &lt;/span&gt;
        &lt;/span&gt;
    &lt;/button&gt;

    &lt;button type=&quot;button&quot; class=&quot;btn btn-danger btn-load&quot;&gt;
        &lt;span class=&quot;d-flex align-items-center&quot;&gt;
            &lt;span class=&quot;spinner-grow flex-shrink-0&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
            &lt;/span&gt;
            &lt;span class=&quot;flex-grow-1 ms-2&quot;&gt;
                Loading...
            &lt;/span&gt;
        &lt;/span&gt;
    &lt;/button&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;d-flex flex-wrap gap-2 mb-3 mb-lg-0&quot;&gt;
    &lt;button class=&quot;btn btn-outline-primary btn-load&quot;&gt;
        &lt;span class=&quot;d-flex align-items-center&quot;&gt;
            &lt;span class=&quot;flex-grow-1 me-2&quot;&gt;
                Loading...
            &lt;/span&gt;
            &lt;span class=&quot;spinner-border flex-shrink-0&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
            &lt;/span&gt;
        &lt;/span&gt;
    &lt;/button&gt;

    &lt;button type=&quot;button&quot; class=&quot;btn btn-success btn-load&quot;&gt;
        &lt;span class=&quot;d-flex align-items-center&quot;&gt;
            &lt;span class=&quot;flex-grow-1 me-2&quot;&gt;
                Loading...
            &lt;/span&gt;
            &lt;span class=&quot;spinner-border flex-shrink-0&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
            &lt;/span&gt;
        &lt;/span&gt;
    &lt;/button&gt;

    &lt;button type=&quot;button&quot; class=&quot;btn btn-outline-warning btn-load&quot;&gt;
        &lt;span class=&quot;d-flex align-items-center&quot;&gt;
            &lt;span class=&quot;flex-grow-1 me-2&quot;&gt;
                Loading...
            &lt;/span&gt;
            &lt;span class=&quot;spinner-grow flex-shrink-0&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
            &lt;/span&gt;
        &lt;/span&gt;
    &lt;/button&gt;

    &lt;button type=&quot;button&quot; class=&quot;btn btn-info btn-load&quot;&gt;
        &lt;span class=&quot;d-flex align-items-center&quot;&gt;
            &lt;span class=&quot;flex-grow-1 me-2&quot;&gt;
                Loading...
            &lt;/span&gt;
            &lt;span class=&quot;spinner-grow flex-shrink-0&quot; role=&quot;status&quot;&gt;
                &lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
            &lt;/span&gt;
        &lt;/span&gt;
    &lt;/button&gt;
&lt;/div&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Custom Toggle Buttons</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Example of toggle buttons.</p>
                        <b-row>
                            <b-col lg="6">
                                <div class="d-flex flex-wrap align-items-center gap-2">
                                    <b-button type="button" variant="primary" class="custom-toggle active" data-bs-toggle="button">
                                        <span class="icon-on"><i class="ri-alarm-line align-bottom"></i> Active</span>
                                        <span class="icon-off">Unactive</span>
                                    </b-button>
                                    <b-button type="button" variant="secondary" class="custom-toggle active" data-bs-toggle="button">
                                        <span class="icon-on"><i class="ri-user-add-line align-bottom me-1"></i> Connect</span>
                                        <span class="icon-off"><i class="ri-check-fill align-bottom me-1"></i> Unconnect</span>
                                    </b-button>
                                    <b-button type="button" variant="success" class="custom-toggle" data-bs-toggle="button">
                                        <span class="icon-on"><i class="ri-thumb-up-line align-bottom me-1"></i> Yes</span>
                                        <span class="icon-off"><i class="ri-thumb-down-line align-bottom me-1"></i> No</span>
                                    </b-button>
                                    <b-button type="button" variant="warning" class="custom-toggle active" data-bs-toggle="button">
                                        <span class="icon-on"><i class="ri-add-line align-bottom me-1"></i> Follow</span>
                                        <span class="icon-off"><i class="ri-user-unfollow-line align-bottom me-1"></i> Unfollow</span>
                                    </b-button>
                                    <b-button type="button" variant="danger" class="custom-toggle" data-bs-toggle="button">
                                        <span class="icon-on">On</span>
                                        <span class="icon-off">Off</span>
                                    </b-button>
                                    <b-button type="button" variant="dark" class="custom-toggle" data-bs-toggle="button">
                                        <span class="icon-on"><i class="ri-bookmark-line align-bottom me-1"></i> Bookmark</span>
                                        <span class="icon-off"><i class="ri-bookmark-3-fill align-bottom me-1"></i> Unbookmark</span>
                                    </b-button>
                                </div>
                            </b-col>
                            <b-col lg="6">
                                <div class="d-flex flex-wrap align-items-center gap-2">
                                    <b-button type="button" variant="outline-primary" class="custom-toggle" data-bs-toggle="button">
                                        <span class="icon-on">Active</span>
                                        <span class="icon-off">Unactive</span>
                                    </b-button>
                                    <b-button type="button" variant="outline-secondary" class="custom-toggle" data-bs-toggle="button">
                                        <span class="icon-on"><i class="ri-add-line align-bottom me-1"></i> Follow</span>
                                        <span class="icon-off"><i class="ri-user-unfollow-line align-bottom me-1"></i> Unfollow</span>
                                    </b-button>
                                    <b-button type="button" variant="outline-success" class="custom-toggle active" data-bs-toggle="button">
                                        <span class="icon-on">On</span>
                                        <span class="icon-off">Off</span>
                                    </b-button>
                                    <b-button type="button" variant="subtle-warning" class="custom-toggle active" data-bs-toggle="button">
                                        <span class="icon-on">Follow</span>
                                        <span class="icon-off">Unfollow</span>
                                    </b-button>
                                    <b-button type="button" variant="subtle-danger" class="custom-toggle" data-bs-toggle="button">
                                        <span class="icon-on">On</span>
                                        <span class="icon-off">Off</span>
                                    </b-button>
                                    <b-button type="button" variant="dark" class="btn btn-dark custom-toggle active" data-bs-toggle="button">
                                        <span class="icon-on"><i class="ri-bookmark-line align-bottom"></i></span>
                                        <span class="icon-off"><i class="ri-bookmark-3-fill align-bottom"></i></span>
                                    </b-button>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Custom Toggle Buttons --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-alarm-line align-bottom&quot;&gt;&lt;/i&gt; Active&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;Unactive&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-user-add-line align-bottom me-1&quot;&gt;&lt;/i&gt; Connect&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-check-fill align-bottom me-1&quot;&gt;&lt;/i&gt; Unconnect&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-success custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-thumb-up-line align-bottom me-1&quot;&gt;&lt;/i&gt; Yes&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-thumb-down-line align-bottom me-1&quot;&gt;&lt;/i&gt; No&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-warning custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-add-line align-bottom me-1&quot;&gt;&lt;/i&gt; Follow&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-user-unfollow-line align-bottom me-1&quot;&gt;&lt;/i&gt; Unfollow&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-danger custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;On&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;Off&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-dark custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-bookmark-line align-bottom me-1&quot;&gt;&lt;/i&gt; Bookmark&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-bookmark-3-fill align-bottom me-1&quot;&gt;&lt;/i&gt; Unbookmark&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-primary custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;Active&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;Unactive&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-secondary custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-add-line align-bottom me-1&quot;&gt;&lt;/i&gt; Follow&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-user-unfollow-line align-bottom me-1&quot;&gt;&lt;/i&gt; Unfollow&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-success custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;On&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;Off&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-subtle-warning custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;Follow&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;Unfollow&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-subtle-danger custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;On&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;Off&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-dark custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
&lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-bookmark-line align-bottom&quot;&gt;&lt;/i&gt;&lt;/span&gt;
&lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-bookmark-3-fill align-bottom&quot;&gt;&lt;/i&gt;&lt;/span&gt;
&lt;/button&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Base class</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Bootstrap has a base <code>.btn</code> class that sets up basic styles such as padding and content alignment. By default, <code>.btn</code> controls have a transparent border and background color, and lack any explicit focus and hover styles.</p>
                        <b-button variant="white" type="button" class="btn">Base class</b-button>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup"><code>&lt;b-button variant=&quot;white&quot; type=&quot;button&quot; class=&quot;btn&quot;&gt;Base class&lt;/b-button&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Custom sizing with CSS variables</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">You can even roll your own custom sizing with CSS variables:</p>
                        <b-button type="button" variant="primary" style="--tb-btn-padding-y: .25rem; --tb-btn-padding-x: .5rem; --tb-btn-font-size: .75rem;">
                            Custom button
                        </b-button>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup"><code>&lt;b-button type=&quot;button&quot; variant=&quot;primary&quot; style=&quot;--tb-btn-padding-y: .25rem; --tb-btn-padding-x: .5rem; --tb-btn-font-size: .75rem;&quot;&gt;
    Custom button
&lt;/b-button&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Buttons Sizes</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>btn-lg</code> class to create a large size button and <code>btn-sm</code> class to create a small size button.</p>
                        <div class="d-flex flex-wrap align-items-center gap-2">
                            <!-- Large Button -->
                            <b-button type="button" variant="primary" size="lg">Large button</b-button>
                            <b-button type="button" variant="light" size="lg">Large button</b-button>

                            <!-- Small Button -->
                            <b-button type="button" variant="primary" size="sm">Small button</b-button>
                            <b-button type="button" variant="light" size="sm">Small button</b-button>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup">
<code>&lt;!-- Large Button --&gt;
    &lt;b-button type=&quot;button&quot; variant=&quot;primary&quot; size=&quot;lg&quot;&gt;Large button&lt;/b-button&gt;
    &lt;b-button type=&quot;button&quot; variant=&quot;light&quot; size=&quot;lg&quot;&gt;Large button&lt;/b-button&gt;</code>

<code>&lt;!-- Small Button --&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;primary&quot; size=&quot;sm&quot;&gt;Small button&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;light&quot; size=&quot;sm&quot;&gt;Small button&lt;/b-button&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Buttons Width</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>w-xs,w-sm,w-md,w-lg</code> class to make different sized buttons respectively.
                        </p>
                        <div class="d-flex flex-wrap gap-2">
                            <b-button type="button" variant="primary" class="w-xs">Xs</b-button>
                            <b-button type="button" variant="danger" class="w-sm">Small</b-button>
                            <b-button type="button" variant="warning" class="w-md">Medium</b-button>
                            <b-button type="button" variant="success" class="w-lg">Large</b-button>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup">
<code>&lt;!-- Width Button --&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;primary&quot; class=&quot;w-xs&quot;&gt;Xs&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;danger&quot; class=&quot;w-sm&quot;&gt;Small&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;warning&quot; class=&quot;w-md&quot;&gt;Medium&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;success&quot; class=&quot;w-lg&quot;&gt;Large&lt;/b-button&gt;&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center">
                        <b-card-title class="mb-0">Buttons Tag</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>btn</code> class with different HTML elements. (though some browsers may apply a slightly different rendering)
                        </p>
                        <div class="d-flex flex-wrap gap-2">
                            <b-link class="btn btn-primary" href="#" role="button">Link</b-link>
                            <b-button variant="success" type="submit">Button</b-button>
                            <input class="btn btn-info" type="button" value="Input">
                            <input class="btn btn-danger" type="submit" value="Submit">
                            <input class="btn btn-warning" type="reset" value="Reset">
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup"><code>&lt;!-- Tag Button --&gt;
&lt;b-link class=&quot;btn btn-primary&quot; href=&quot;#&quot; role=&quot;button&quot;&gt;Link&lt;/b-link&gt;</code>

<code>&lt;b-button variant=&quot;success&quot; type=&quot;submit&quot;&gt;Button&lt;/b-button&gt;</code>

<code>&lt;input class=&quot;btn btn-info&quot; type=&quot;button&quot; value=&quot;Input&quot;&gt;</code>

<code>&lt;input class=&quot;btn btn-danger&quot; type=&quot;submit&quot; value=&quot;Submit&quot;&gt;</code>

<code>&lt;input class=&quot;btn btn-warning&quot; type=&quot;reset&quot; value=&quot;Reset&quot;&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Buttons Toggle Status</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use <code>data-bs-toggle="button"</code> to toggle a button’s active state.
                        </p>
                        <div class="d-flex flex-wrap gap-2">
                            <b-button type="button" variant="primary" data-bs-toggle="button" aria-pressed="false">
                                Single toggle
                            </b-button>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup">
<code>&lt;!-- Toggle Button Status --&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;primary&quot; data-bs-toggle=&quot;button&quot; aria-pressed=&quot;false&quot;&gt;
Single toggle
&lt;/b-button&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Buttons Grid</b-card-title>
                    </b-card-header>
                    <b-card-body>

                        <p class="text-muted">
                            Use <code>d-grid</code> class to create a full-width block button.
                        </p>
                        <div class="d-grid gap-2">
                            <b-button variant="primary" type="button">Button</b-button>
                            <b-button variant="primary" type="button">Button</b-button>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup"><code>&lt;!-- Buttons Grid --&gt;
&lt;div class=&quot;d-grid gap-2&quot; &gt;
&lt;b-button variant=&quot;primary&quot; type=&quot;button&quot;&gt;Button&lt;/b-button&gt;
&lt;b-button variant=&quot;primary&quot; type=&quot;button&quot;&gt;Button&lt;/b-button&gt;
&lt;/div&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Checkbox & Radio Buttons</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Combine button-like <code>checkbox and radio</code> <b-link href="https://getbootstrap.com/docs/5.1/forms/checks-radios/">toggle buttons</b-link> into a seamless looking button group.
                        </p>
                        <div class="d-flex flex-wrap align-items-center gap-2">
                            <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                <input type="checkbox" class="btn-check" id="btncheck1" checked="">
                                <label class="btn btn-primary mb-0" for="btncheck1">Checkbox 1</label>

                                <input type="checkbox" class="btn-check" id="btncheck2">
                                <label class="btn btn-primary mb-0" for="btncheck2">Checkbox 2</label>

                                <input type="checkbox" class="btn-check" id="btncheck3">
                                <label class="btn btn-primary mb-0" for="btncheck3">Checkbox 3</label>
                            </div>

                            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" checked="">
                                <label class="btn btn-outline-secondary mb-0" for="btnradio1">Radio 1</label>

                                <input type="radio" class="btn-check" name="btnradio" id="btnradio2">
                                <label class="btn btn-outline-secondary mb-0" for="btnradio2">Radio 2</label>

                                <input type="radio" class="btn-check" name="btnradio" id="btnradio3">
                                <label class="btn btn-outline-secondary mb-0" for="btnradio3">Radio 3</label>
                            </div>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 310px;">
<code>&lt;!-- Checkbox Buttons --&gt;
&lt;div class=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;Basic checkbox toggle button group&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;btn-check&quot; id=&quot;btncheck1&quot; autocomplete=&quot;off&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;btn btn-primary&quot; for=&quot;btncheck1&quot;&gt;Checkbox 1&lt;/label&gt;

&lt;input type=&quot;checkbox&quot; class=&quot;btn-check&quot; id=&quot;btncheck2&quot; autocomplete=&quot;off&quot;&gt;
&lt;label class=&quot;btn btn-primary&quot; for=&quot;btncheck2&quot;&gt;Checkbox 2&lt;/label&gt;

&lt;input type=&quot;checkbox&quot; class=&quot;btn-check&quot; id=&quot;btncheck3&quot; autocomplete=&quot;off&quot;&gt;
&lt;label class=&quot;btn btn-primary&quot; for=&quot;btncheck3&quot;&gt;Checkbox 3&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Radio Buttons --&gt;
&lt;div class=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;Basic radio toggle button group&quot;&gt;
&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;btnradio&quot; id=&quot;btnradio1&quot; autocomplete=&quot;off&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;btnradio1&quot;&gt;Radio 1&lt;/label&gt;

&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;btnradio&quot; id=&quot;btnradio2&quot; autocomplete=&quot;off&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;btnradio2&quot;&gt;Radio 2&lt;/label&gt;

&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;btnradio&quot; id=&quot;btnradio3&quot; autocomplete=&quot;off&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;btnradio3&quot;&gt;Radio 3&lt;/label&gt;
&lt;/div&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Buttons Group</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use the <code>btn-group </code> class in the parent class to wrap a series of buttons.</p>
                        <b-row>
                            <b-col sm="6">
                                <b-button-group>
                                    <b-button type="button" variant="primary">Left</b-button>
                                    <b-button type="button" variant="primary">Middle</b-button>
                                    <b-button type="button" variant="primary">Right</b-button>
                                </b-button-group>
                            </b-col>
                            <b-col sm="6">
                                <b-button-group class="mt-4 mt-sm-0">
                                    <b-button type="button" variant="light" class="btn-icon"><i class="ri-align-right"></i></b-button>
                                    <b-button type="button" variant="light" class="btn-icon"><i class="ri-align-center"></i></b-button>
                                    <b-button type="button" variant="light" class="btn-icon"><i class="ri-align-left"></i></b-button>
                                </b-button-group>
                            </b-col>
                        </b-row>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 200px;">
<code>&lt;!-- Buttons Group --&gt;
&lt;b-button-group&gt;
    &lt;b-button type=&quot;button&quot; variant=&quot;primary&quot;&gt;Left&lt;/b-button&gt;
    &lt;b-button type=&quot;button&quot; variant=&quot;primary&quot;&gt;Middle&lt;/b-button&gt;
    &lt;b-button type=&quot;button&quot; variant=&quot;primary&quot;&gt;Right&lt;/b-button&gt;
&lt;/b-button-group&gt;</code>

<code>&lt;b-button-group class=&quot;mt-4 mt-md-0&quot;&gt;
    &lt;b-button type=&quot;button&quot; variant=&quot;light&quot;&gt;&lt;i class=&quot;ri-align-right&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;
    &lt;b-button type=&quot;button&quot; variant=&quot;light&quot;&gt;&lt;i class=&quot;ri-align-center&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;
    &lt;b-button type=&quot;button&quot; variant=&quot;light&quot;&gt;&lt;i class=&quot;ri-align-left&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;
&lt;/b-button-group&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Icon Buttons</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>btn-icon</code> class to wrap icon in button</p>
                        <b-row>
                            <b-col sm="6">
                                <div class="hstack gap-2 ">
                                    <b-button type="button" variant="primary" class="btn-icon"><i class="ri-map-pin-line"></i></b-button>
                                    <b-button type="button" variant="danger" class="btn-icon"><i class="ri-delete-bin-5-line"></i></b-button>
                                    <b-button type="button" variant="success" class="btn-icon"><i class="ri-check-double-line"></i></b-button>
                                    <b-button type="button" variant="light" class="btn-icon"><i class="ri-brush-2-fill"></i></b-button>
                                </div>
                            </b-col>
                            <b-col sm="6">
                                <div class="hstack gap-2 mt-4 mt-sm-0">
                                    <b-button type="button" variant="outline-primary" class="btn-icon"><i class="ri-24-hours-fill"></i></b-button>
                                    <b-button type="button" variant="outline-danger" class="btn-icon"><i class="ri-customer-service-2-line"></i></b-button>
                                    <b-button type="button" variant="outline-success" class="btn-icon"><i class="ri-mail-send-line"></i></b-button>
                                    <b-button type="button" variant="outline-warning" class="btn-icon"><i class="ri-menu-2-line"></i></b-button>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 200px;">
<code>&lt;!-- Buttons Group --&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;primary&quot;&gt;&lt;i class=&quot;ri-map-pin-line&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;</code>
<code>&lt;b-button type=&quot;button&quot; variant=&quot;danger&quot; class=&quot;btn-icon&quot;&gt;&lt;i class=&quot;ri-delete-bin-5-line&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;</code>
<code>&lt;b-button type=&quot;button&quot; variant=&quot;succesy&quot; class=&quot;btn-icon&quot;&gt;&lt;i class=&quot;ri-check-double-line&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;</code>
<code>&lt;b-button type=&quot;button&quot; variant=&quot;light &quot;class=&quot;btn-icon&quot;&gt;&lt;i class=&quot;ri-brush-2-fill&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;</code>

<code>&lt;b-button type=&quot;button&quot; variant=&quot;outline-primary&quot; class=&quot;btn-icon&quot;&gt;&lt;i class=&quot;ri-24-hours-fill&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;</code>
<code>&lt;b-button type=&quot;button&quot; variant=&quot;outline-danger&quot; class=&quot;btn-icon&quot;&gt;&lt;i class=&quot;ri-customer-service-2-line&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;</code>
<code>&lt;b-button type=&quot;button&quot; variant=&quot;outline-success&quot; class=&quot;btn-icon&quot;&gt;&lt;i class=&quot;ri-mail-send-line&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;</code>
<code>&lt;b-button type=&quot;button&quot; variant=&quot;outline-warning&quot; class=&quot;btn-icon&quot;&gt;&lt;i class=&quot;ri-menu-2-line&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Buttons Toolbar</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>btn-toolbar</code> class to combine sets of button groups into more complex components.</p>
                        <div class="d-flex flex-wrap gap-3">
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <b-button-group class="me-2">
                                    <b-button type="button" variant="light">1</b-button>
                                    <b-button type="button" variant="light">2</b-button>
                                    <b-button type="button" variant="light">3</b-button>
                                    <b-button type="button" variant="light">4</b-button>
                                </b-button-group>
                                <b-button-group class="me-2">
                                    <b-button type="button" variant="light">5</b-button>
                                    <b-button type="button" variant="light">6</b-button>
                                    <b-button type="button" variant="light">7</b-button>
                                </b-button-group>
                                <b-button-group>
                                    <b-button type="button" variant="light">8</b-button>
                                </b-button-group>
                            </div>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup">
<code>&lt;!-- Buttons Toolbar --&gt;
&lt;div class=&quot;btn-toolbar&quot; role=&quot;toolbar&quot; aria-label=&quot;Toolbar with button groups&quot;&gt;
    &lt;b-button-group class=&quot;me-2&quot; role=&quot;group&quot; aria-label=&quot;First group&quot;&gt;
        &lt;b-button type=&quot;button&quot; variant=&quot;light&quot;&gt;1&lt;/b-button&gt;
        &lt;b-button type=&quot;button&quot; variant=&quot;light&quot;&gt;2&lt;/b-button&gt;
        &lt;b-button type=&quot;button&quot; variant=&quot;light&quot;&gt;3&lt;/b-button&gt;
        &lt;b-button type=&quot;button&quot; variant=&quot;light&quot;&gt;4&lt;/b-button&gt;
    &lt;/b-button-group&gt;

    &lt;div class=&quot;btn-group me-2&quot; role=&quot;group&quot; aria-label=&quot;Second group&quot;&gt;
        &lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot;&gt;5&lt;/button&gt;
        &lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot;&gt;6&lt;/button&gt;
        &lt;button type=&quot;button&quot; class=&quot;btn btn-light&quot;&gt;7&lt;/button&gt;
    &lt;/div&gt;

    &lt;b-button-group&gt;
        &lt;b-button type=&quot;button&quot; class=&quot;light&quot;&gt;8&lt;/b-button&gt;
    &lt;/b-button-group&gt;
&lt;/div&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Button Group Sizing</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>btn-group-</code> class with the below-mentioned variation to set the different sizes of button groups.</p>
                        <div class="d-flex flex-wrap align-items-center gap-2">
                            <b-button-group size="lg">
                                <b-button type="button" variant="primary">Left</b-button>
                                <b-button type="button" variant="primary">Middle</b-button>
                                <b-button type="button" variant="primary">Right</b-button>
                            </b-button-group>
                            <b-button-group class="mt-2">
                                <b-button type="button" variant="light">Left</b-button>
                                <b-button type="button" variant="light">Middle</b-button>
                                <b-button type="button" variant="light">Right</b-button>
                            </b-button-group>
                            <b-button-group class="mt-2" size="sm">
                                <b-button type="button" variant="secondary">Left</b-button>
                                <b-button type="button" variant="secondary">Middle</b-button>
                                <b-button type="button" variant="secondary">Right</b-button>
                            </b-button-group>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 240px;">
<code>&lt;!-- Group Buttons Sizing --&gt;
&lt;b-button-group size=&quot;lg&quot;&gt;
    &lt;b-button type=&quot;button&quot; variant=&quot;primary&quot;&gt;Left&lt;/b-button&gt;
    &lt;b-button type=&quot;button&quot; variant=&quot;primary&quot;&gt;Middle&lt;/b-button&gt;
    &lt;b-button type=&quot;button&quot; variant=&quot;primary&quot;&gt;Right&lt;/b-button&gt;
&lt;/b-button-group&gt;</code> 

<code>&lt;b-button-group class=&quot;mt-2&quot;&gt;
    &lt;b-button type=&quot;button&quot; variant=&quot;light&quot;&gt;Left&lt;/b-button&gt;
    &lt;b-button type=&quot;button&quot; variant=&quot;light&quot;&gt;Middle&lt;/b-button&gt;
    &lt;b-button type=&quot;button&quot; variant=&quot;light&quot;&gt;Right&lt;/b-button&gt;
&lt;/b-button-group&gt;</code>

<code>&lt;b-button-group class=&quot;mt-2&quot; size=&quot;sm&quot;&gt;
    &lt;b-button type=&quot;button&quot; variant=&quot;secondary&quot;&gt;Left&lt;/b-button&gt;
    &lt;b-button type=&quot;button&quot; variant=&quot;secondary&quot;&gt;Middle&lt;/b-button&gt;
    &lt;b-button type=&quot;button&quot; variant=&quot;secondary&quot;&gt;Right&lt;/b-button&gt;
&lt;/b-button-group&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Vertical Variation</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Make a set of buttons appear <code>vertically</code> stacked .Split button dropdowns are not supported here.</p>
                        <b-row class="gy-3">
                            <b-col cols="auto">
                                <b-button-group>
                                    <b-button type="button" variant="primary">1</b-button>
                                    <b-button type="button" variant="primary">2</b-button>
                                    <b-button-group>
                                        <b-button id="btnGroupDrop1" type="button" variant="primary" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </b-button>
                                        <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                            <li><b-link class="dropdown-item" href="#">Dropdown link</b-link></li>
                                            <li><b-link class="dropdown-item" href="#">Dropdown link</b-link></li>
                                        </ul>
                                    </b-button-group>
                                </b-button-group>
                            </b-col>
                            <b-col cols="auto">
                                <b-button-group vertical>
                                    <b-button type="button" variant="light">Button</b-button>
                                    <b-button-group>
                                        <b-button id="btnGroupVerticalDrop1" type="button" variant="light" class="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dropdown
                                        </b-button>
                                        <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop1">
                                            <b-link class="dropdown-item" href="#">Dropdown link</b-link>
                                            <b-link class="dropdown-item" href="#">Dropdown link</b-link>
                                        </div>
                                    </b-button-group>
                                    <b-button type="button" variant="light">Button</b-button>
                                    <b-button type="button" variant="light">Button</b-button>
                                </b-button-group>
                            </b-col>
                            <b-col cols="auto">
                                <b-button-group vertical>
                                    <input type="radio" class="btn-check" name="vbtn" id="vbtn-radio1" checked="">
                                    <label class="btn btn-outline-secondary" for="vbtn-radio1">Radio 1</label>
                                    <input type="radio" class="btn-check" name="vbtn" id="vbtn-radio2">
                                    <label class="btn btn-outline-secondary" for="vbtn-radio2">Radio 2</label>
                                    <input type="radio" class="btn-check" name="vbtn" id="vbtn-radio3">
                                    <label class="btn btn-outline-secondary" for="vbtn-radio3">Radio 3</label>
                                </b-button-group>
                            </b-col>
                        </b-row>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 240px;">
<code>&lt;!-- Vertical Variation --&gt;
&lt;b-button-group&gt;
    &lt;b-button type=&quot;button&quot; variant=&quot;primary&quot;&gt;1&lt;/b-button&gt;
    &lt;b-button type=&quot;button&quot; variant=&quot;primary&quot;&gt;2&lt;/b-button&gt;
    &lt;b-button-group&gt;
        &lt;b-button id=&quot;btnGroupDrop1&quot; type=&quot;button&quot; variant=&quot;primary&quot; class=&quot;dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;
            Dropdown
        &lt;/b-button&gt;
        &lt;ul class=&quot;dropdown-menu&quot; aria-labelledby=&quot;btnGroupDrop1&quot;&gt;
            &lt;li&gt;&lt;b-link class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Dropdown link&lt;/b-link&gt;&lt;/li&gt;
            &lt;li&gt;&lt;b-link class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Dropdown link&lt;/b-link&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/b-button-group&gt;
&lt;/b-button-group&gt;

&lt;b-button-group vertical&gt;
    &lt;b-button type=&quot;button&quot; variant=&quot;light&quot;&gt;Button&lt;/b-button&gt;
    &lt;b-button-group&gt;
        &lt;b-button id=&quot;btnGroupVerticalDrop1&quot; type=&quot;button&quot; variant=&quot;light&quot; class=&quot;dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
            Dropdown
        &lt;/b-button&gt;
        &lt;div class=&quot;dropdown-menu&quot; aria-labelledby=&quot;btnGroupVerticalDrop1&quot;&gt;
            &lt;b-link class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Dropdown link&lt;/b-link&gt;
            &lt;b-link class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Dropdown link&lt;/b-link&gt;
        &lt;/div&gt;
    &lt;/b-button-group&gt;
    &lt;b-button type=&quot;button&quot; variant=&quot;light&quot;&gt;Button&lt;/b-button&gt;
    &lt;b-button type=&quot;button&quot; variant=&quot;light&quot;&gt;Button&lt;/b-button&gt;
&lt;/b-button-group&gt;</code>

<code>&lt;b-button-group vertical&gt;
    &lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;vbtn&quot; id=&quot;vbtn-radio1&quot; checked=&quot;&quot;&gt;
    &lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;vbtn-radio1&quot;&gt;Radio 1&lt;/label&gt;
    &lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;vbtn&quot; id=&quot;vbtn-radio2&quot;&gt;
    &lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;vbtn-radio2&quot;&gt;Radio 2&lt;/label&gt;
    &lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;vbtn&quot; id=&quot;vbtn-radio3&quot;&gt;
    &lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;vbtn-radio3&quot;&gt;Radio 3&lt;/label&gt;
&lt;/b-button-group&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Focus Ring</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Click directly on the link below to see the focus ring in action, or into the example below and then press <kbd>Tab</kbd>.</p>
                        <div class="d-flex gap-3">
                            <b-link href="#!" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
                                Focus ring
                            </b-link>
                            <!--custom focus ring color-->
                            <b-link href="#!" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2" style="--tb-focus-ring-color: rgba(118, 93, 255, .25)">
                                Custom focus ring
                            </b-link>
                            <!---custom blurry offset focus ring-->
                            <b-link href="#!" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2" style="--tb-focus-ring-x: 10px; --tb-focus-ring-y: 10px; --tb-focus-ring-blur: 4px">
                                Blurry offset focus ring
                            </b-link>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 240px;"><code>&lt;b-link href=&quot;#!&quot; class=&quot;d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2&quot;&gt;
Focus ring
&lt;/b-link&gt;</code>

<code>&lt;!--custom focus ring color--&gt;
&lt;b-link href=&quot;#!&quot; class=&quot;d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2&quot; style=&quot;--tb-focus-ring-color: rgba(118, 93, 255, .25)&quot;&gt;
    Custom focus ring
&lt;/b-link&gt;</code>

<code>&lt;!---custom blurry offset focus ring--&gt;
&lt;b-link href=&quot;#!&quot; class=&quot;d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2&quot; style=&quot;--tb-focus-ring-x: 10px; --tb-focus-ring-y: 10px; --tb-focus-ring-blur: 4px&quot;&gt;
    Blurry offset focus ring
&lt;/b-link&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Focus Ring Utilities</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">In addition to <code>.focus-ring</code>, we have several <code>.focus-ring-*</code> utilities to modify the helper class defaults. Modify the color with any of our <router-link to="/ui/colors">theme colors</router-link>. Note that the light and dark variants may not be visible on all background colors given current color mode support.</p>
                        <b-row>
                            <b-col lg="6">
                                <p><b-link href="#!" class="d-inline-flex focus-ring focus-ring-primary py-1 px-2 text-decoration-none border rounded-2">Primary focus</b-link></p>
                                <p><b-link href="#!" class="d-inline-flex focus-ring focus-ring-secondary py-1 px-2 text-decoration-none border rounded-2">Secondary focus</b-link></p>
                                <p><b-link href="#!" class="d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none border rounded-2">Success focus</b-link></p>
                                <p class="mb-lg-0"><b-link href="#!" class="d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2">Danger focus</b-link></p>
                            </b-col>
                            <b-col lg="6">
                                <p><b-link href="#!" class="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2">Warning focus</b-link></p>
                                <p><b-link href="#!" class="d-inline-flex focus-ring focus-ring-info py-1 px-2 text-decoration-none border rounded-2">Info focus</b-link></p>
                                <p><b-link href="#!" class="d-inline-flex focus-ring focus-ring-light py-1 px-2 text-decoration-none border rounded-2">Light focus</b-link></p>
                                <p class="mb-0"><b-link href="#!" class="d-inline-flex focus-ring focus-ring-dark py-1 px-2 text-decoration-none border rounded-2">Dark focus</b-link></p>
                            </b-col>
                        </b-row>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 240px;"><code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-primary py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Primary focus&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-secondary py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Secondary focus&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Success focus&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Danger focus&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Warning focus&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-info py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Info focus&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-light py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Light focus&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;d-inline-flex focus-ring focus-ring-dark py-1 px-2 text-decoration-none border rounded-2&quot;&gt;Dark focus&lt;/b-link&gt;&lt;/p&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

    </Layout>
</template>