<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import "prismjs";

export default {
    data() {
        return {
            title: "Colored Links",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Colored Links",
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
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Link colors</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">You can use the <code>.link-*</code> classes to colorize links. Unlike the <router-link to="/ui/colors"><code>.text-*</code> classes</router-link>, these classes have a <code>:hover</code> and <code>:focus</code> state. Some of the link styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.</p>
                        <div>
                            <p><b-link href="#" class="link-primary">Primary link</b-link></p>
                            <p><b-link href="#" class="link-secondary">Secondary link</b-link></p>
                            <p><b-link href="#" class="link-success">Success link</b-link></p>
                            <p><b-link href="#" class="link-danger">Danger link</b-link></p>
                            <p><b-link href="#" class="link-warning">Warning link</b-link></p>
                            <p><b-link href="#" class="link-info">Info link</b-link></p>
                            <p><b-link href="#" class="link-light">Light link</b-link></p>
                            <p><b-link href="#" class="link-dark">Dark link</b-link></p>
                            <p><b-link href="#" class="link-body-emphasis mb-0">Emphasis link</b-link></p>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 240px;"><code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;link-primary&quot;&gt;Primary link&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;link-secondary&quot;&gt;Secondary link&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;link-success&quot;&gt;Success link&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;link-danger&quot;&gt;Danger link&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;link-warning&quot;&gt;Warning link&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;link-info&quot;&gt;Info link&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;link-light&quot;&gt;Light link&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;link-dark&quot;&gt;Dark link&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;link-body-emphasis mb-0&quot;&gt;Emphasis link&lt;/b-link&gt;&lt;/p&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Link utilities</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Colored links can also be modified by our link utilities.</p>
                        <div>
                            <p><b-link href="#" class="link-primary link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Primary link</b-link></p>
                            <p><b-link href="#" class="link-secondary link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Secondary link</b-link></p>
                            <p><b-link href="#" class="link-success link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Success link</b-link></p>
                            <p><b-link href="#" class="link-danger link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Danger link</b-link></p>
                            <p><b-link href="#" class="link-warning link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Warning link</b-link></p>
                            <p><b-link href="#" class="link-info link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Info link</b-link></p>
                            <p><b-link href="#" class="link-light link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Light link</b-link></p>
                            <p><b-link href="#" class="link-dark link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover">Dark link</b-link></p>
                            <p><b-link href="#" class="link-body-emphasis link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-75-hover mb-0">Emphasis link</b-link></p>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 280px;"><code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;link-primary link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover&quot;&gt;Primary link&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;link-secondary link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover&quot;&gt;Secondary link&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;link-success link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover&quot;&gt;Success link&lt;/b-link&gt;&lt;/p&gt;</code>

<Code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;link-danger link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover&quot;&gt;Danger link&lt;/b-link&gt;&lt;/p&gt;</Code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;link-warning link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover&quot;&gt;Warning link&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;link-info link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover&quot;&gt;Info link&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;link-light link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover&quot;&gt;Light link&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;link-dark link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-100-hover&quot;&gt;Dark link&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;link-body-emphasis link-offset-2 text-decoration-underline link-underline-opacity-25 link-underline-opacity-75-hover mb-0&quot;&gt;Emphasis link&lt;/b-link&gt;&lt;/p&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Link Opacity</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p>Change the alpha opacity of the link <code>rgba()</code> color value with utilities. Please be aware that changes to a color’s opacity can lead to links with <b-link href="https://getbootstrap.com/docs/5.3/getting-started/accessibility/#color-contrast" target="_blank"><em>insufficient</em> contrast</b-link>.</p>
                        <div>
                            <p><b-link class="link-opacity-10" href="#">Link opacity 10</b-link></p>
                            <p><b-link class="link-opacity-25" href="#">Link opacity 25</b-link></p>
                            <p><b-link class="link-opacity-50" href="#">Link opacity 50</b-link></p>
                            <p><b-link class="link-opacity-75" href="#">Link opacity 75</b-link></p>
                            <p class="mb-0"><b-link class="link-opacity-100" href="#">Link opacity 100</b-link></p>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup"><code>&lt;p&gt;&lt;b-link class=&quot;link-opacity-10&quot; href=&quot;#&quot;&gt;Link opacity 10&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link class=&quot;link-opacity-25&quot; href=&quot;#&quot;&gt;Link opacity 25&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link class=&quot;link-opacity-50&quot; href=&quot;#&quot;&gt;Link opacity 50&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link class=&quot;link-opacity-75&quot; href=&quot;#&quot;&gt;Link opacity 75&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link class=&quot;link-opacity-100&quot; href=&quot;#&quot;&gt;Link opacity 100&lt;/b-link&gt;&lt;/p&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Link Opacity Hover</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">You can even change the opacity level on hover.</p>
                        <div>
                            <p><b-link class="link-opacity-10-hover" href="#">Link hover opacity 10</b-link></p>
                            <p><b-link class="link-opacity-25-hover" href="#">Link hover opacity 25</b-link></p>
                            <p><b-link class="link-opacity-50-hover" href="#">Link hover opacity 50</b-link></p>
                            <p><b-link class="link-opacity-75-hover" href="#">Link hover opacity 75</b-link></p>
                            <p class="mb-0"><b-link class="link-opacity-100-hover" href="#">Link hover opacity 100</b-link></p>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 195px;"><code>&lt;p&gt;&lt;b-link class=&quot;link-opacity-10-hover&quot; href=&quot;#&quot;&gt;Link hover opacity 10&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link class=&quot;link-opacity-25-hover&quot; href=&quot;#&quot;&gt;Link hover opacity 25&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link class=&quot;link-opacity-50-hover&quot; href=&quot;#&quot;&gt;Link hover opacity 50&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link class=&quot;link-opacity-75-hover&quot; href=&quot;#&quot;&gt;Link hover opacity 75&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link class=&quot;link-opacity-100-hover&quot; href=&quot;#&quot;&gt;Link hover opacity 100&lt;/b-link&gt;&lt;/p&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xxl="4">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Underline color</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Change the underline’s color independent of the link text color.</p>
                        <div>
                            <p><b-link href="#" class="text-decoration-underline link-underline-primary">Primary underline</b-link></p>
                            <p><b-link href="#" class="text-decoration-underline link-underline-secondary">Secondary underline</b-link></p>
                            <p><b-link href="#" class="text-decoration-underline link-underline-success">Success underline</b-link></p>
                            <p><b-link href="#" class="text-decoration-underline link-underline-danger">Danger underline</b-link></p>
                            <p><b-link href="#" class="text-decoration-underline link-underline-warning">Warning underline</b-link></p>
                            <p><b-link href="#" class="text-decoration-underline link-underline-info">Info underline</b-link></p>
                            <p><b-link href="#" class="text-decoration-underline link-underline-light">Light underline</b-link></p>
                            <p class="mb-0"><b-link href="#" class="text-decoration-underline link-underline-dark">Dark underline</b-link></p>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 195px;"><code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;text-decoration-underline link-underline-primary&quot;&gt;Primary underline&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;text-decoration-underline link-underline-secondary&quot;&gt;Secondary underline&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;text-decoration-underline link-underline-success&quot;&gt;Success underline&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;text-decoration-underline link-underline-danger&quot;&gt;Danger underline&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;text-decoration-underline link-underline-warning&quot;&gt;Warning underline&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;text-decoration-underline link-underline-info&quot;&gt;Info underline&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link href=&quot;#&quot; class=&quot;text-decoration-underline link-underline-light&quot;&gt;Light underline&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p class=&quot;mb-0&quot;&gt;&lt;b-link href=&quot;#&quot; class=&quot;text-decoration-underline link-underline-dark&quot;&gt;Dark underline&lt;/b-link&gt;&lt;/p&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col xxl="4">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Underline opacity</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Change the underline’s opacity. Requires adding <code>.link-underline</code> to first set an <code>rgba()</code> color we use to then modify the alpha opacity.</p>
                        <div>
                            <p><b-link class="link-offset-2 text-decoration-underline link-underline link-underline-opacity-0" href="#">Underline opacity 0</b-link></p>
                            <p><b-link class="link-offset-2 text-decoration-underline link-underline link-underline-opacity-10" href="#">Underline opacity 10</b-link></p>
                            <p><b-link class="link-offset-2 text-decoration-underline link-underline link-underline-opacity-25" href="#">Underline opacity 25</b-link></p>
                            <p><b-link class="link-offset-2 text-decoration-underline link-underline link-underline-opacity-50" href="#">Underline opacity 50</b-link></p>
                            <p><b-link class="link-offset-2 text-decoration-underline link-underline link-underline-opacity-75" href="#">Underline opacity 75</b-link></p>
                            <p class="mb-0"><b-link class="link-offset-2 text-decoration-underline link-underline link-underline-opacity-100" href="#">Underline opacity 100</b-link></p>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
<pre class="language-markup"><code>&lt;p&gt;&lt;b-link class=&quot;link-offset-2 text-decoration-underline link-underline link-underline-opacity-0&quot; href=&quot;#&quot;&gt;Underline opacity 0&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link class=&quot;link-offset-2 text-decoration-underline link-underline link-underline-opacity-10&quot; href=&quot;#&quot;&gt;Underline opacity 10&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link class=&quot;link-offset-2 text-decoration-underline link-underline link-underline-opacity-25&quot; href=&quot;#&quot;&gt;Underline opacity 25&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link class=&quot;link-offset-2 text-decoration-underline link-underline link-underline-opacity-50&quot; href=&quot;#&quot;&gt;Underline opacity 50&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link class=&quot;link-offset-2 text-decoration-underline link-underline link-underline-opacity-75&quot; href=&quot;#&quot;&gt;Underline opacity 75&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p class=&quot;mb-0&quot;&gt;&lt;b-link class=&quot;link-offset-2 text-decoration-underline link-underline link-underline-opacity-100&quot; href=&quot;#&quot;&gt;Underline opacity 100&lt;/b-link&gt;&lt;/p&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
            
            <b-col xxl="4">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Underline offset</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Change the underline’s distance from your text. Offset is set in <code>em</code> units to automatically scale with the element’s current <code>font-size</code>.</p>
                        <div>
                            <p><b-link href="#">Default link</b-link></p>
                            <p><b-link class="text-decoration-underline link-offset-1" href="#">Offset 1 link</b-link></p>
                            <p><b-link class="text-decoration-underline link-offset-2" href="#">Offset 2 link</b-link></p>
                            <p class="mb-0"><b-link class="text-decoration-underline link-offset-3" href="#">Offset 3 link</b-link></p>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup"><code>&lt;p&gt;&lt;b-link class=&quot;link-offset-2 link-underline link-underline-opacity-0&quot; href=&quot;#&quot;&gt;Underline opacity 0&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link class=&quot;link-offset-2 link-underline link-underline-opacity-10&quot; href=&quot;#&quot;&gt;Underline opacity 10&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link class=&quot;link-offset-2 link-underline link-underline-opacity-25&quot; href=&quot;#&quot;&gt;Underline opacity 25&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link class=&quot;link-offset-2 link-underline link-underline-opacity-50&quot; href=&quot;#&quot;&gt;Underline opacity 50&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link class=&quot;link-offset-2 link-underline link-underline-opacity-75&quot; href=&quot;#&quot;&gt;Underline opacity 75&lt;/b-link&gt;&lt;/p&gt;</code>

<code>&lt;p&gt;&lt;b-link class=&quot;link-offset-2 link-underline link-underline-opacity-100&quot; href=&quot;#&quot;&gt;Underline opacity 100&lt;/b-link&gt;&lt;/p&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Icon link</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Take a regular <code>&lt;b-link&gt;</code> element, add <code>.icon-link</code>, and insert an icon on either the left or right of your link text. The icon is automatically sized, placed, and colored.</p>
                        <div class="hstack gap-4">
                            <b-link class="icon-link" href="#">
                                <i class="bi bi-box-seam align-baseline"></i> Icon link
                            </b-link>

                            <b-link class="icon-link" href="#">
                                Icon link <i class="bi bi-arrow-right"></i>
                            </b-link>

                            <b-link class="icon-link icon-link-hover" href="#">
                                Icon link <i class="bi bi-arrow-right"></i>
                            </b-link>
                            <b-link class="icon-link icon-link-hover" style="--tb-icon-link-transform: translate3d(0, -.125rem, 0);" href="#">
                                <i class="bi bi-clipboard"></i> Icon link
                            </b-link>
                            <b-link class="icon-link icon-link-hover" style="--tb-link-hover-color-rgb: var(--tb-success-rgb);" href="#">
                                Icon link <i class="bi bi-arrow-right"></i>
                            </b-link>
                            <b-link class="icon-link icon-link-hover link-success text-decoration-underline link-underline-success link-underline-opacity-25" href="#">
                                Icon link <i class="bi bi-arrow-right"></i>
                            </b-link>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
<pre class="language-markup"><code>&lt;b-link class=&quot;icon-link&quot; href=&quot;#&quot;&gt;
&lt;i class=&quot;bi bi-box-seam align-baseline&quot;&gt;&lt;/i&gt; Icon link
&lt;/b-link&gt;</code>

<code>&lt;b-link class=&quot;icon-link&quot; href=&quot;#&quot;&gt;
Icon link &lt;i class=&quot;bi bi-arrow-right&quot;&gt;&lt;/i&gt;
&lt;/b-link&gt;</code>

<code>&lt;b-link class=&quot;icon-link icon-link-hover&quot; href=&quot;#&quot;&gt;
Icon link &lt;i class=&quot;bi bi-arrow-right&quot;&gt;&lt;/i&gt;
&lt;/b-link&gt;</code>

<code>&lt;b-link class=&quot;icon-link icon-link-hover&quot; style=&quot;--tb-icon-link-transform: translate3d(0, -.125rem, 0);&quot; href=&quot;#&quot;&gt;
&lt;i class=&quot;bi bi-clipboard&quot;&gt;&lt;/i&gt; Icon link
&lt;/b-link&gt;</code>

<code>&lt;b-link class=&quot;icon-link icon-link-hover&quot; style=&quot;--tb-link-hover-color-rgb: var(--tb-success-rgb);&quot; href=&quot;#&quot;&gt;
Icon link &lt;i class=&quot;bi bi-arrow-right&quot;&gt;&lt;/i&gt;
&lt;/b-link&gt;</code>

<code>&lt;b-link class=&quot;icon-link icon-link-hover link-success text-decoration-underline link-underline-success link-underline-opacity-25&quot; href=&quot;#&quot;&gt;
Icon link &lt;i class=&quot;bi bi-arrow-right&quot;&gt;&lt;/i&gt;
&lt;/b-link&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>