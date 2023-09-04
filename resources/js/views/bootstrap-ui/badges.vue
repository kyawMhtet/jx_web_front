<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import "prismjs";

export default {
    data() {
        return {
            title: "Badges",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Badges",
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
            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Default Badges</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use the <code>badge</code> class to set a default badge.</p>
                        <div class="d-flex flex-wrap gap-2">
                            <b-badge class="bg-primary" variant="primary">Primary</b-badge>
                            <b-badge class="bg-secondary">Secondary</b-badge>
                            <b-badge class="bg-success">Success</b-badge>
                            <b-badge class="bg-info">Info</b-badge>
                            <b-badge class="bg-warning">Warning</b-badge>
                            <b-badge class="bg-danger">Danger</b-badge>
                            <b-badge class="bg-dark">Dark</b-badge>
                            <b-badge class="bg-light text-body">Light</b-badge>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 175px;">
<code>&lt;b-badge class=&quot;bg-primary&quot; variant=&quot;primary&quot;&gt;Primary&lt;/b-badge&gt;
&lt;b-badge class=&quot;bg-secondary&quot;&gt;Secondary&lt;/b-badge&gt;
&lt;b-badge class=&quot;bg-success&quot;&gt;Success&lt;/b-badge&gt;
&lt;b-badge class=&quot;bg-info&quot;&gt;Info&lt;/b-badge&gt;
&lt;b-badge class=&quot;bg-warning&quot;&gt;Warning&lt;/b-badge&gt;
&lt;b-badge class=&quot;bg-danger&quot;&gt;Danger&lt;/b-badge&gt;
&lt;b-badge class=&quot;bg-dark&quot;&gt;Dark&lt;/b-badge&gt;
&lt;b-badge class=&quot;bg-light text-body&quot;&gt;Light&lt;/b-badge&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Subtle Badges </b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use the <code>badge-subtle-</code> class with the below-mentioned variation to
                            create a subtle badge. </p>
                        <div class="d-flex flex-wrap gap-2">
                            <b-badge variant="primary-subtle" class="text-primary">Primary</b-badge>
                            <b-badge variant="secondary-subtle" class="text-secondary">Secondary</b-badge>
                            <b-badge variant="success-subtle" class="text-success">Success</b-badge>
                            <b-badge variant="info-subtle" class="text-info">Info</b-badge>
                            <b-badge variant="warning-subtle" class="text-warning">Warning</b-badge>
                            <b-badge variant="danger-subtle" class="text-danger">Danger</b-badge>
                            <b-badge variant="dark-subtle" class="text-dark">Dark</b-badge>
                            <b-badge variant="light-subtle" class="text-body">Light</b-badge>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 175px;">
<code>&lt;b-badge variant=&quot;primary-subtle&quot; class=&quot;text-primary&quot;&gt;Primary&lt;/b-badge&gt;
&lt;b-badge variant=&quot;secondary-subtle&quot; class=&quot;text-secondary&quot;&gt;Secondary&lt;/b-badge&gt;
&lt;b-badge variant=&quot;success-subtle&quot; class=&quot;text-success&quot;&gt;Success&lt;/b-badge&gt;
&lt;b-badge variant=&quot;info-subtle&quot; class=&quot;text-info&quot;&gt;Info&lt;/b-badge&gt;
&lt;b-badge variant=&quot;warning-subtle&quot; class=&quot;text-warning&quot;&gt;Warning&lt;/b-badge&gt;
&lt;b-badge variant=&quot;danger-subtle&quot; class=&quot;text-danger&quot;&gt;Danger&lt;/b-badge&gt;
&lt;b-badge variant=&quot;dark-subtle&quot; class=&quot;text-dark&quot;&gt;Dark&lt;/b-badge&gt;
&lt;b-badge variant=&quot;light-subtle&quot; class=&quot;text-body&quot;&gt;Light&lt;/b-badge&gt;&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Outline Badges </b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use the <code>bg-body-secondary</code>, <code>border</code>
                            <code>border-*</code>, <code>text-*</code> class with the below-mentioned variation to create a
                            badge with the outline. </p>
                        <div class="d-flex flex-wrap gap-2">
                            <b-badge variant="body-secondary" class="border border-primary text-primary">Primary</b-badge>
                            <b-badge variant="body-secondary" class="border border-secondary text-secondary">Secondary</b-badge>
                            <b-badge variant="body-secondary" class="border border-success text-success">Success</b-badge>
                            <b-badge variant="body-secondary" class="border border-info text-info">Info</b-badge>
                            <b-badge variant="body-secondary" class="border border-warning text-warning">Warning</b-badge>
                            <b-badge variant="body-secondary" class="border border-danger text-danger">Danger</b-badge>
                            <b-badge variant="body-secondary" class="border border-dark text-dark">Dark</b-badge>
                            <b-badge variant="body-secondary" class="border border-light text-light">Light</b-badge>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 175px;">
<code>&lt;b-badge variant=&quot;body-secondary&quot; class=&quot;border border-primary text-primary&quot;&gt;Primary&lt;/b-badge&gt;
&lt;b-badge variant=&quot;body-secondary&quot; class=&quot;border border-secondary text-secondary&quot;&gt;Secondary&lt;/b-badge&gt;
&lt;b-badge variant=&quot;body-secondary&quot; class=&quot;border border-success text-success&quot;&gt;Success&lt;/b-badge&gt;
&lt;b-badge variant=&quot;body-secondary&quot; class=&quot;border border-info text-info&quot;&gt;Info&lt;/b-badge&gt;
&lt;b-badge variant=&quot;body-secondary&quot; class=&quot;border border-warning text-warning&quot;&gt;Warning&lt;/b-badge&gt;
&lt;b-badge variant=&quot;body-secondary&quot; class=&quot;border border-danger text-danger&quot;&gt;Danger&lt;/b-badge&gt;
&lt;b-badge variant=&quot;body-secondary&quot; class=&quot;border border-dark text-dark&quot;&gt;Dark&lt;/b-badge&gt;
&lt;b-badge variant=&quot;body-secondary&quot; class=&quot;border border-light text-light&quot;&gt;Light&lt;/b-badge&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Rounded Pill Badges </b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use the <code>rounded-pill</code> class to make badges more rounded with a
                            larger border-radius.</p>
                        <div class="d-flex flex-wrap gap-2">
                            <b-badge pill variant="primary" class="bg-primary">Primary</b-badge>
                            <b-badge pill class="bg-secondary">Secondary</b-badge>
                            <b-badge pill class="bg-success">Success</b-badge>
                            <b-badge pill class="bg-info">Info</b-badge>
                            <b-badge pill class="bg-warning">Warning</b-badge>
                            <b-badge pill class="bg-danger">Danger</b-badge>
                            <b-badge pill class="bg-dark">Dark</b-badge>
                            <b-badge pill class="bg-light">Light</b-badge>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 175px;">
<code>&lt;b-badge pill variant=&quot;primary&quot; class=&quot;bg-primary&quot;&gt;Primary&lt;/b-badge&gt;
&lt;b-badge pill class=&quot;bg-secondary&quot;&gt;Secondary&lt;/b-badge&gt;
&lt;b-badge pill class=&quot;bg-success&quot;&gt;Success&lt;/b-badge&gt;
&lt;b-badge pill class=&quot;bg-info&quot;&gt;Info&lt;/b-badge&gt;
&lt;b-badge pill class=&quot;bg-warning&quot;&gt;Warning&lt;/b-badge&gt;
&lt;b-badge pill class=&quot;bg-danger&quot;&gt;Danger&lt;/b-badge&gt;
&lt;b-badge pill class=&quot;bg-dark&quot;&gt;Dark&lt;/b-badge&gt;
&lt;b-badge pill class=&quot;bg-light&quot;&gt;Light&lt;/b-badge</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Rounded Pill Badges with subtle effect </b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use the <code>rounded-pill badge-subtle-</code> class with the below-mentioned
                            variation to create a badge more rounded with a soft background.</p>
                        <div class="d-flex flex-wrap gap-2">
                            <b-badge pill variant="primary-subtle" class="text-primary">Primary</b-badge>
                            <b-badge pill variant="secondary-subtle" class="text-secondary">Secondary</b-badge>
                            <b-badge pill variant="success-subtle" class="text-success">Success</b-badge>
                            <b-badge pill variant="info-subtle" class="text-info">Info</b-badge>
                            <b-badge pill variant="warning-subtle" class="text-warning">Warning</b-badge>
                            <b-badge pill variant="danger-subtle" class="text-danger">Danger</b-badge>
                            <b-badge pill variant="dark-subtle" class="text-dark">Dark</b-badge>
                            <b-badge pill variant="light-subtle" class="text-body">Light</b-badge>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 175px;">
<code>&lt;b-badge pill variant=&quot;primary-subtle&quot; class=&quot;text-primary&quot;&gt;Primary&lt;/b-badge&gt;
&lt;b-badge pill variant=&quot;secondary-subtle&quot; class=&quot;text-secondary&quot;&gt;Secondary&lt;/b-badge&gt;
&lt;b-badge pill variant=&quot;success-subtle&quot; class=&quot;text-success&quot;&gt;Success&lt;/b-badge&gt;
&lt;b-badge pill variant=&quot;info-subtle&quot; class=&quot;text-info&quot;&gt;Info&lt;/b-badge&gt;
&lt;b-badge pill variant=&quot;warning-subtle&quot; class=&quot;text-warning&quot;&gt;Warning&lt;/b-badge&gt;
&lt;b-badge pill variant=&quot;danger-subtle&quot; class=&quot;text-danger&quot;&gt;Danger&lt;/b-badge&gt;
&lt;b-badge pill variant=&quot;dark-subtle&quot; class=&quot;text-dark&quot;&gt;Dark&lt;/b-badge&gt;
&lt;b-badge pill variant=&quot;light-subtle&quot; class=&quot;text-body&quot;&gt;Light&lt;/b-badge&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Subtle Border Badges</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            Use the <code>badge-border</code> and <code>badge-subtle-</code> with below
                            mentioned modifier classes to make badges with border & subtle backgorund.
                        </p>
                        <div class="d-flex flex-wrap gap-2">
                            <b-badge variant="primary-subtle" class="text-primary badge-border">Primary</b-badge>
                            <b-badge variant="secondary-subtle" class="text-secondary badge-border">Secondary</b-badge>
                            <b-badge variant="success-subtle" class="text-success badge-border">Success</b-badge>
                            <b-badge variant="danger-subtle" class="text-danger badge-border">Danger</b-badge>
                            <b-badge variant="warning-subtle" class="text-warning badge-border">Warning</b-badge>
                            <b-badge variant="info-subtle" class="text-info badge-border">Info</b-badge>
                            <b-badge variant="dark-subtle" class="text-dark badge-border">Dark</b-badge>
                            <b-badge variant="light-subtle" class="text-body badge-border">Light</b-badge>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 175px;">
<code>&lt;b-badge variant=&quot;primary-subtle&quot; class=&quot;text-primary badge-border&quot;>Primary&lt;/b-badge&gt;
&lt;b-badge variant=&quot;secondary-subtle&quot; class=&quot;text-secondary badge-border&quot;&gt;Secondary&lt;/b-badge&gt;
&lt;b-badge variant=&quot;success-subtle&quot; class=&quot;text-success badge-border&quot;&gt;Success&lt;/b-badge&gt;
&lt;b-badge variant=&quot;danger-subtle&quot; class=&quot;text-danger badge-border&quot;&gt;Danger&lt;/b-badge&gt;
&lt;b-badge variant=&quot;warning-subtle&quot; class=&quot;text-warning badge-border&quot;&gt;Warning&lt;/b-badge&gt;
&lt;b-badge variant=&quot;info-subtle&quot; class=&quot;text-info badge-border&quot;&gt;Info&lt;/b-badge&gt;
&lt;b-badge variant=&quot;dark-subtle&quot; class=&quot;text-dark badge-border&quot;&gt;Dark&lt;/b-badge&gt;
&lt;b-badge variant=&quot;light-subtle&quot; class=&quot;text-body badge-border&quot;&gt;Light&lt;/b-badge&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Outline Pill Badges </b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            Use the <code>rounded-pill</code> class with the below-mentioned
                            variation to create a outline Pill badge.
                        </p>
                        <div class="d-flex flex-wrap gap-2">
                            <b-badge pill variant="body-secondary" class="border border-primary text-primary">Primary</b-badge>
                            <b-badge pill variant="body-secondary" class="border border-secondary text-secondary">Secondary</b-badge>
                            <b-badge pill variant="body-secondary" class="border border-success text-success">Success</b-badge>
                            <b-badge pill variant="body-secondary" class="border border-info text-info">Info</b-badge>
                            <b-badge pill variant="body-secondary" class="border border-warning text-warning">Warning</b-badge>
                            <b-badge pill variant="body-secondary" class="border border-danger text-danger">Danger</b-badge>
                            <b-badge pill variant="body-secondary" class="border border-dark text-dark">Dark</b-badge>
                            <b-badge pill variant="body-secondary" class="border border-light text-light">Light</b-badge>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 175px;">
<code>&lt;b-badge pill variant=&quot;body-secondary&quot; class=&quot;border border-primary text-primary&quot;&gt;Primary&lt;/b-badge&gt;
&lt;b-badge pill variant=&quot;body-secondary&quot; class=&quot;border border-secondary text-secondary&quot;&gt;Secondary&lt;/b-badge&gt;
&lt;b-badge pill variant=&quot;body-secondary&quot; class=&quot;border border-success text-success&quot;&gt;Success&lt;/b-badge&gt;
&lt;b-badge pill variant=&quot;body-secondary&quot; class=&quot;border border-info text-info&quot;&gt;Info&lt;/b-badge&gt;
&lt;b-badge pill variant=&quot;body-secondary&quot; class=&quot;border border-warning text-warning&quot;&gt;Warning&lt;/b-badge&gt;
&lt;b-badge pill variant=&quot;body-secondary&quot; class=&quot;border border-danger text-danger&quot;&gt;Danger&lt;/b-badge&gt;
&lt;b-badge pill variant=&quot;body-secondary&quot; class=&quot;border border-dark text-dark&quot;&gt;Dark&lt;/b-badge&gt;
&lt;b-badge pill variant=&quot;body-secondary&quot; class=&quot;border border-light text-light&quot;&gt;Light&lt;/b-badge&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Label Badges </b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            Use the <code>badge-label</code> class to create a badge with the label.
                        </p>
                        <div class="d-flex flex-wrap gap-2">
                            <b-badge class="badge-label bg-primary" variant="primary"><i class="mdi mdi-circle-medium"></i> Primary</b-badge>
                            <b-badge class="badge-label bg-secondary"><i class="mdi mdi-circle-medium"></i>Secondary</b-badge>
                            <b-badge class="badge-label bg-success"><i class="mdi mdi-circle-medium"></i> Success</b-badge>
                            <b-badge class="badge-label bg-danger"><i class="mdi mdi-circle-medium"></i> Danger</b-badge>
                            <b-badge class="badge-label bg-warning"><i class="mdi mdi-circle-medium"></i> Warning</b-badge>
                            <b-badge class="badge-label bg-info"><i class="mdi mdi-circle-medium"></i> Info</b-badge>
                            <b-badge class="badge-label bg-dark"><i class="mdi mdi-circle-medium"></i> Dark</b-badge>
                            <b-badge class="badge-label bg-light"><i class="mdi mdi-circle-medium"></i> Light</b-badge>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 175px;">
<code>&lt;b-badge class=&quot;badge-label bg-primary&quot; variant=&quot;primary&quot;&gt;&lt;i class=&quot;mdi mdi-circle-medium&quot;&gt;&lt;/i&gt; Primary&lt;/b-badge&gt;
&lt;b-badge class=&quot;badge-label bg-secondary&quot;&gt;&lt;i class=&quot;mdi mdi-circle-medium&quot;&gt;&lt;/i&gt;Secondary&lt;/b-badge&gt;
&lt;b-badge class=&quot;badge-label bg-success&quot;&gt;&lt;i class=&quot;mdi mdi-circle-medium&quot;&gt;&lt;/i&gt; Success&lt;/b-badge&gt;
&lt;b-badge class=&quot;badge-label bg-danger&quot;&gt;&lt;i class=&quot;mdi mdi-circle-medium&quot;&gt;&lt;/i&gt; Danger&lt;/b-badge&gt;
&lt;b-badge class=&quot;badge-label bg-warning&quot;&gt;&lt;i class=&quot;mdi mdi-circle-medium&quot;&gt;&lt;/i&gt; Warning&lt;/b-badge&gt;
&lt;b-badge class=&quot;badge-label bg-info&quot;&gt;&lt;i class=&quot;mdi mdi-circle-medium&quot;&gt;&lt;/i&gt; Info&lt;/b-badge&gt;
&lt;b-badge class=&quot;badge-label bg-dark&quot;&gt;&lt;i class=&quot;mdi mdi-circle-medium&quot;&gt;&lt;/i&gt; Dark&lt;/b-badge&gt;
&lt;b-badge class=&quot;badge-label bg-light&quot;&gt;&lt;i class=&quot;mdi mdi-circle-medium&quot;&gt;&lt;/i&gt; Light&lt;/b-badge&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xxl="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Gradient Badges</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            Use the <code>badge-gradient-*</code> class to create a gradient styled badge.
                        </p>
                        <div class="d-flex flex-wrap gap-2">
                            <b-badge class="badge-gradient-primary">Primary</b-badge>
                            <b-badge class="badge-gradient-secondary">Secondary</b-badge>
                            <b-badge class="badge-gradient-success">Success</b-badge>
                            <b-badge class="badge-gradient-danger">Danger</b-badge>
                            <b-badge class="badge-gradient-warning">Warning</b-badge>
                            <b-badge class="badge-gradient-info">Info</b-badge>
                            <b-badge class="badge-gradient-dark">Dark</b-badge>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 175px;">
<code>&lt;b-badge class=&quot;badge-gradient-primary&quot;&gt;Primary&lt;/b-badge&gt;
&lt;b-badge class=&quot;badge-gradient-secondary&quot;&gt;Secondary&lt;/b-badge&gt;
&lt;b-badge class=&quot;badge-gradient-success&quot;&gt;Success&lt;/b-badge&gt;
&lt;b-badge class=&quot;badge-gradient-danger&quot;&gt;Danger&lt;/b-badge&gt;
&lt;b-badge class=&quot;badge-gradient-warning&quot;&gt;Warning&lt;/b-badge&gt;
&lt;b-badge class=&quot;badge-gradient-info&quot;&gt;Info&lt;/b-badge&gt;
&lt;b-badge class=&quot;badge-gradient-dark&quot;&gt;Dark&lt;/b-badge&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
            
        </b-row>
        

        <b-row>
            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Button Position Badges</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use the below utilities to modify a badge and position it in the corner of a
                            link or button.</p>
                        <div class="d-flex flex-wrap gap-3">
                            <b-button type="button" variant="primary" class="position-relative"> Mails 
                                <b-badge variant="success" class="position-absolute top-0 start-100 translate-middle rounded-pill">+99
                                    <span class="visually-hidden">unread messages</span>
                                </b-badge>
                            </b-button>

                            <b-button type="button" variant="light" class="position-relative"> Alerts 
                                <b-badge variant="danger" class="position-absolute top-0 start-100 translate-middle border border-light rounded-circle p-1">
                                    <span class="visually-hidden">unread messages</span>
                                </b-badge>
                            </b-button>

                            <b-button type="button" variant="primary" class="position-relative p-0 avatar-xs rounded">
                                <span class="avatar-title bg-transparent">
                                    <i class="bx bxs-envelope"></i>
                                </span>
                                <b-badge variant="danger" class="position-absolute top-0 start-100 translate-middle border border-light rounded-circle p-1">
                                    <span class="visually-hidden">unread messages</span>
                                </b-badge>
                            </b-button>

                            <b-button type="button" variant="light" class="position-relative p-0 avatar-xs rounded-circle">
                                <span class="avatar-title bg-transparent text-reset">
                                    <i class="bx bxs-bell"></i>
                                </span>
                            </b-button>

                            <b-button type="button" variant="light" class="position-relative p-0 avatar-xs rounded-circle">
                                <span class="avatar-title bg-transparent text-reset">
                                    <i class="bx bx-menu"></i>
                                </span>
                                <b-badge variant="success" class="position-absolute top-0 start-100 translate-middle border border-light rounded-circle p-1">
                                    <span class="visually-hidden">unread messages</span>
                                </b-badge>
                            </b-button>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 175px;">
<code>&lt;b-button type=&quot;button&quot; variant=&quot;primary&quot; class=&quot;position-relative&quot;&gt; Mails 
    &lt;b-badge variant=&quot;success&quot; class=&quot;position-absolute top-0 start-100 translate-middle rounded-pill&quot;&gt;+99
        &lt;span class=&quot;visually-hidden&quot;&gt;unread messages&lt;/span&gt;
    &lt;/b-badge&gt;
&lt;/b-button&gt;

&lt;b-button type=&quot;button&quot; variant=&quot;light&quot; class=&quot;position-relative&quot;&gt; Alerts 
    &lt;b-badge variant=&quot;danger&quot; class=&quot;position-absolute top-0 start-100 translate-middle border border-light rounded-circle p-1&quot;&gt;
        &lt;span class=&quot;visually-hidden&quot;&gt;unread messages&lt;/span&gt;
    &lt;/b-badge&gt;
&lt;/b-button&gt;

&lt;b-button type=&quot;button&quot; variant=&quot;primary&quot; class=&quot;position-relative p-0 avatar-xs rounded&quot;&gt;
    &lt;span class=&quot;avatar-title bg-transparent&quot;&gt;
        &lt;i class=&quot;bx bxs-envelope&quot;&gt;&lt;/i&gt;
    &lt;/span&gt;
    &lt;b-badge variant=&quot;danger&quot; class=&quot;position-absolute top-0 start-100 translate-middle border border-light rounded-circle p-1&quot;&gt;
        &lt;span class=&quot;visually-hidden&quot;&gt;unread messages&lt;/span&gt;
    &lt;/b-badge&gt;
&lt;/b-button&gt;

&lt;b-button type=&quot;button&quot; variant=&quot;light&quot; class=&quot;position-relative p-0 avatar-xs rounded-circle&quot;&gt;
    &lt;span class=&quot;avatar-title bg-transparent text-reset&quot;&gt;
        &lt;i class=&quot;bx bxs-bell&quot;&gt;&lt;/i&gt;
    &lt;/span&gt;
&lt;/b-button&gt;

&lt;b-button type=&quot;button&quot; variant=&quot;light&quot; class=&quot;position-relative p-0 avatar-xs rounded-circle&quot;&gt;
    &lt;span class=&quot;avatar-title bg-transparent text-reset&quot;&gt;
        &lt;i class=&quot;bx bx-menu&quot;&gt;&lt;/i&gt;
    &lt;/span&gt;
    &lt;b-badge variant=&quot;success&quot; class=&quot;position-absolute top-0 start-100 translate-middle border border-light rounded-circle p-1&quot;&gt;
        &lt;span class=&quot;visually-hidden&quot;&gt;unread messages&lt;/span&gt;
    &lt;/b-badge&gt;
&lt;/b-button&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Badges With Button</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Badges can be used as part of buttons to provide a counter.</p>
                        <div class="d-flex flex-wrap gap-2">
                            <b-button type="button" variant="primary">
                                Notifications <b-badge variant="success" class="ms-1">4</b-badge>
                            </b-button>
                            <b-button type="button" variant="success">
                                Messages <b-badge variant="danger" class="ms-1">2</b-badge>
                            </b-button>
                            <b-button type="button" variant="outline-secondary">
                                Draft <b-badge variant="success" class="ms-1">2</b-badge>
                            </b-button>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 175px;">
<code>&lt;b-button type=&quot;button&quot; variant=&quot;primary&quot;&gt;
    Notifications &lt;b-badge variant=&quot;success&quot; class=&quot;ms-1&quot;&gt;4&lt;/b-badge&gt;
&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;success&quot;&gt;
    Messages &lt;b-badge variant=&quot;danger&quot; class=&quot;ms-1&quot;&gt;2&lt;/b-badge&gt;
&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;outline-secondary&quot;&gt;
    Draft &lt;b-badge variant=&quot;success&quot; class=&quot;ms-1&quot;&gt;2&lt;/b-badge&gt;
&lt;/b-button&gt;
</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col xxl="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Badges with Heading</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Example of the badge used in the HTML Heading.</p>
                        <h1>Example heading <b-badge>New</b-badge></h1>
                        <h2>Example heading <b-badge>New</b-badge></h2>
                        <h3>Example heading <b-badge>New</b-badge></h3>
                        <h4>Example heading <b-badge>New</b-badge></h4>
                        <h5>Example heading <b-badge>New</b-badge></h5>
                        <h6 class="mb-0">Example heading <b-badge>New</b-badge></h6>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                    <pre class="language-markup">
<code>&lt;h1&gt;Example heading &lt;b-badge&gt;New&lt;/b-badge&gt;&lt;/h1&gt;
&lt;h2&gt;Example heading &lt;b-badge&gt;New&lt;/b-badge&gt;&lt;/h2&gt;
&lt;h3&gt;Example heading &lt;b-badge&gt;New&lt;/b-badge&gt;&lt;/h3&gt;
&lt;h4&gt;Example heading &lt;b-badge&gt;New&lt;/b-badge&gt;&lt;/h4&gt;
&lt;h5&gt;Example heading &lt;b-badge&gt;New&lt;/b-badge&gt;&lt;/h5&gt;
&lt;h6 class="mb-0"&gt;Example heading &lt;b-badge&gt;New&lt;/b-badge&gt;&lt;/h6&gt;</code></pre>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</Layout></template>