<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import { ref } from "vue";

import "prismjs";

export default {
    data() {
        return {
            title: "General",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "General",
                    active: true,
                },
            ],
            ex1CurrentPage: ref(2),
            ex1PerPage: ref(3),
            ex1Rows: ref(9),

            ex1CurrentPage1: ref(2),
            ex1PerPage1: ref(3),
            ex1Rows1: ref(9),

            ex1CurrentPage2: ref(2),
            ex1PerPage2: ref(3),
            ex1Rows2: ref(15),

            ex1CurrentPage3: ref(2),
            ex1PerPage3: ref(3),
            ex1Rows3: ref(15)
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
                        <b-card-title class="mb-0">Popovers</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Popovers example are available with follwing options , Directions are mirrored
                            when using Bootstrap in RTL.</p>
                        <div class="hstack flex-wrap gap-2">
                            <b-button variant="light" id="popover-button-top">
                                Popover on top
                            </b-button>
                            <b-popover target="popover-button-top" triggers="focus" html placement="top">
                                <template #title>Top Popover</template>
                                Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                            </b-popover>

                            <b-button variant="light" id="popover-button-right">
                                Popover on right
                            </b-button>
                            <b-popover target="popover-button-right" triggers="focus" html placement="right">
                                <template #title>Right Popover</template>
                                Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                            </b-popover>

                            <b-button variant="light" id="popover-button-bottom">
                                Popover on bottom
                            </b-button>
                            <b-popover target="popover-button-bottom" triggers="focus" html placement="bottom">
                                <template #title>Bottom Popover</template>
                                Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                            </b-popover>


                            <b-button variant="light" id="popover-button-left">
                                Popover on left
                            </b-button>
                            <b-popover target="popover-button-left" triggers="focus" html placement="left">
                                <template #title>Left Popover</template>
                                Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                            </b-popover>

                            <b-button variant="success" id="popover-button-variant" href="#" tabindex="0">Dismissible
                                popover
                            </b-button>
                            <b-popover target="popover-button-variant" variant="danger" triggers="focus" html>
                                <template #title>Dismissible Popover</template>
                                And here some amazing content. Its very engaging. Right?
                            </b-popover>
                        </div>

                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 250px;"><code>&lt;div class=&quot;hstack flex-wrap gap-2&quot;&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;light&quot; v-b-popover.click.top=&quot;&lsquo;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&rsquo;&quot; title=&quot;Top Popover&quot;&gt;
    Popover on top
&lt;/b-button&gt;

&lt;b-button type=&quot;button&quot; variant=&quot;light&quot; v-b-popover.click.right=&quot;&lsquo;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&rsquo;&quot; title=&quot;Right Popover&quot;&gt;
    Popover on right
&lt;/b-button&gt;

&lt;b-button type=&quot;button&quot; variant=&quot;light&quot; v-b-popover.click.bottom=&quot;&lsquo;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&rsquo;&quot; title=&quot;Bottom Popover&quot;&gt;
    Popover on bottom
&lt;/b-button&gt;

&lt;b-button type=&quot;button&quot; variant=&quot;light&quot; v-b-popover.click.left=&quot;&lsquo;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&rsquo;&quot; title=&quot;Left Popover&quot;&gt;
    Popover on left
&lt;/b-button&gt;

&lt;b-button variant=&quot;success&quot; id=&quot;popover-button-variant&quot; href=&quot;#&quot; tabindex=&quot;0&quot;&gt;Dismissible popover&lt;/b-button&gt;

&lt;b-popover target=&quot;popover-button-variant&quot; variant=&quot;danger&quot; triggers=&quot;focus&quot;&gt;
    &lt;template #title&gt;Dismissible Popover&lt;/template&gt; And here some amazing content. Its very engaging. Right?
&lt;/b-popover&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Tooltips</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Tooltip example are available with follwing options, Directions are mirrored
                            when using Bootstrap in RTL.</p>
                        <div class="hstack flex-wrap gap-2">    
                            <b-button variant="light" v-b-tooltip.hover title="Tooltip on top">Tooltip on top</b-button>
                            <b-button variant="light" v-b-tooltip.hover.right title="Tooltip on right">Tooltip on
                                right</b-button>
                            <b-button variant="light" v-b-tooltip.hover.bottom title="Tooltip on bottom">Tooltip on
                                bottom</b-button>
                            <b-button variant="light" v-b-tooltip.hover.left title="Tooltip on left">Tooltip on
                                left</b-button>
                            <b-button variant="primary" v-b-tooltip.hover title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
                                Tooltip with HTML</b-button>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 250px;"><code>&lt;!-- Tooltips --&gt;
&lt;div class=&quot;hstack flex-wrap gap-2&quot;&gt;
    &lt;b-button variant=&quot;light&quot; v-b-tooltip.hover title=&quot;Tooltip on top&quot;&gt;Tooltip on top&lt;/b-button&gt;

    &lt;b-button variant=&quot;light&quot; v-b-tooltip.hover.right title=&quot;Tooltip on right&quot;&gt;Tooltip on right&lt;/b-button&gt;

    &lt;b-button variant=&quot;light&quot; v-b-tooltip.hover.bottom title=&quot;Tooltip on bottom&quot;&gt;Tooltip on bottom&lt;/b-button&gt;

    &lt;b-button variant=&quot;light&quot; v-b-tooltip.hover.left title=&quot;Tooltip on left&quot;&gt;Tooltip on left&lt;/b-button&gt;

    &lt;b-button variant=&quot;primary&quot; v-b-tooltip.hover title=&quot;&lt;em&gt;Tooltip&lt;/em&gt; &lt;u&gt;with&lt;/u&gt; &lt;b&gt;HTML&lt;/b&gt;&quot;&gt; Tooltip with HTML&lt;/b-button&gt;
&lt;/div&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Tooltips Custom Colors</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use the <code>data-bs-custom-class="*-tooltip" </code> attributes to make a
                            custom tooltip colors.</p>
                        <div class="hstack flex-wrap gap-2">
                            <b-button variant="primary" v-b-tooltip.hover.v-danger title="Tooltip primary">Primary
                                Tooltip</b-button>
                            <b-button variant="secondary" v-b-tooltip.hover.v-secondary title="Tooltip secondary">Secondary
                                Tooltip</b-button>
                            <b-button variant="success" v-b-tooltip.hover.v-success title="Tooltip success">Success
                                Tooltip</b-button>
                            <b-button variant="danger" v-b-tooltip.hover.v-danger title="Tooltip danger">Danger
                                Tooltip</b-button>
                            <b-button variant="info" v-b-tooltip.hover.v-info title="Tooltip info">Info Tooltip</b-button>
                            <b-button variant="warning" v-b-tooltip.hover.v-warning title="Tooltip warning">Warning
                                Tooltip</b-button>
                            <b-button variant="dark" v-b-tooltip.hover.v-dark title="Tooltip dark">Dark Tooltip</b-button>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup"
                            style="height: 250px;"><code>&lt;b-button variant=&quot;primary&quot; v-b-tooltip.hover.v-danger title=&quot;Tooltip primary&quot;&gt;Primary Tooltip&lt;/b-button&gt;

&lt;b-button variant=&quot;secondary&quot; v-b-tooltip.hover.v-secondary title=&quot;Tooltip secondary&quot;&gt;Secondary Tooltip&lt;/b-button&gt;

&lt;b-button variant=&quot;success&quot; v-b-tooltip.hover.v-success title=&quot;Tooltip success&quot;&gt;Success Tooltip&lt;/b-button&gt;

&lt;b-button variant=&quot;danger&quot; v-b-tooltip.hover.v-danger title=&quot;Tooltip danger&quot;&gt;Danger Tooltip&lt;/b-button&gt;

&lt;b-button variant=&quot;info&quot; v-b-tooltip.hover.v-info title=&quot;Tooltip info&quot;&gt;Info Tooltip&lt;/b-button&gt;

&lt;b-button variant=&quot;warning&quot; v-b-tooltip.hover.v-warning title=&quot;Tooltip warning&quot;&gt;Warning Tooltip&lt;/b-button&gt;

&lt;b-button variant=&quot;dark&quot; v-b-tooltip.hover.v-dark title=&quot;Tooltip dark&quot;&gt;Dark Tooltip&lt;/b-button&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Breadcrumb</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Indicate the current page’s location within a navigational hierarchy</p>
                        <div>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb p-3 py-2 bg-light">
                                    <li class="breadcrumb-item active" aria-current="page">Home</li>
                                </ol>
                            </nav>

                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb p-3 py-2 bg-light">
                                    <li class="breadcrumb-item"><b-link href="#">Home</b-link></li>
                                    <li class="breadcrumb-item active" aria-current="page">Library</li>
                                </ol>
                            </nav>

                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb p-3 py-2 bg-light">
                                    <li class="breadcrumb-item"><b-link href="#">Home</b-link></li>
                                    <li class="breadcrumb-item"><b-link href="#">Base UI</b-link></li>
                                    <li class="breadcrumb-item active" aria-current="page">General</li>
                                </ol>
                            </nav>

                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb p-3 py-2 bg-light mb-0">
                                    <li class="breadcrumb-item"><b-link href="#"><i class="ri-home-5-fill"></i></b-link>
                                    </li>
                                    <li class="breadcrumb-item"><b-link href="#">Base UI</b-link></li>
                                    <li class="breadcrumb-item active" aria-current="page">General</li>
                                </ol>
                            </nav>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 250px;"><code>&lt;b-breadcrumb class=&quot;p-3 py-2 bg-light&quot;&gt;
    &lt;b-breadcrumb-item href=&quot;#home&quot;&gt; Home &lt;/b-breadcrumb-item&gt;
&lt;/b-breadcrumb&gt;

&lt;b-breadcrumb class=&quot;p-3 py-2 bg-light&quot;&gt;
  &lt;b-breadcrumb-item href=&quot;#home&quot;&gt; Home &lt;/b-breadcrumb-item&gt;
  &lt;b-breadcrumb-item href=&quot;#library&quot;&gt; Library &lt;/b-breadcrumb-item&gt;
&lt;/b-breadcrumb&gt;

&lt;b-breadcrumb class=&quot;p-3 py-2 bg-light&quot;&gt;
  &lt;b-breadcrumb-item href=&quot;#home&quot;&gt; Home &lt;/b-breadcrumb-item&gt;
  &lt;b-breadcrumb-item href=&quot;#base-ui&quot;&gt; Base UI &lt;/b-breadcrumb-item&gt;
  &lt;b-breadcrumb-item href=&quot;#general&quot;&gt; General &lt;/b-breadcrumb-item&gt;
&lt;/b-breadcrumb&gt;

&lt;b-breadcrumb class=&quot;p-3 py-2 bg-light&quot;&gt;
  &lt;b-breadcrumb-item href=&quot;#home&quot;&gt; &lt;i class=&quot;ri-home-5-fill&quot;&gt;&lt;/i&gt; &lt;/b-breadcrumb-item&gt;
  &lt;b-breadcrumb-item href=&quot;#base-ui&quot;&gt; Base UI &lt;/b-breadcrumb-item&gt;
  &lt;b-breadcrumb-item href=&quot;#general&quot;&gt; General &lt;/b-breadcrumb-item&gt;
&lt;/b-breadcrumb&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Pagination</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <div>
                            <b-row>
                                <b-col lg="6">
                                    <h5 class="fs-base">Default Pagination</h5>
                                    <p class="text-muted">Use <code>pagination</code> class to ul element to indicate a
                                        series of related content exists across multiple pages.</p>
                                    <b-pagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true" prev-text="Previous" next-text="Next"></b-pagination>
                                    <b-pagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true">
                                        <template #prev-text>← &nbsp; Prev</template>
                                        <template #next-text>Next &nbsp; →</template>
                                    </b-pagination>
                                </b-col>

                                <b-col lg="6">
                                    <div class="mt-4 mt-lg-0">
                                        <h5 class="fs-base">Disabled and Active states</h5>
                                        <p class="text-muted">Use <code>disabled</code> class to links that appear
                                            un-clickable and <code>active</code> class to indicate the current page.</p>

                                        <!-- Pagination Disabled & Active -->

                                        <b-pagination v-model="ex1CurrentPage" :total-rows="ex1Rows" :per-page="ex1PerPage" hide-goto-end-buttons="true">
                                            <template #prev-text>← &nbsp; Prev</template>
                                            <template #next-text>Next &nbsp; →</template>
                                        </b-pagination>
                                        <b-pagination v-model="ex1CurrentPage1" :total-rows="ex1Rows1"
                                            :per-page="ex1PerPage1" hide-goto-end-buttons="true">
                                            <template #prev-text><i class="mdi mdi-chevron-left" /></template>
                                            <template #next-text><i class="mdi mdi-chevron-right" /></template>
                                        </b-pagination>
                                    </div>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="6">
                                    <div class="mt-4">
                                        <h5 class="fs-base">Sizing</h5>
                                        <p class="text-muted">Use <code>pagination-lg</code> or <code>pagination-sm</code>
                                            to set different pagination sizes.</p>
                                        <!-- Pagination Large -->
                                        <b-pagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true" size="lg" class="flex-wrap">
                                            <template #prev-text>← &nbsp; Prev</template>
                                            <template #next-text>Next &nbsp; →</template>
                                        </b-pagination>

                                        <!-- Pagination Small -->
                                        <b-pagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true" size="sm">
                                            <template #prev-text>← &nbsp; Prev</template>
                                            <template #next-text>Next &nbsp; →</template>
                                        </b-pagination>

                                    </div>

                                </b-col>

                                <b-col lg="6">
                                    <div class="mt-4">
                                        <h5 class="fs-base">Alignment</h5>

                                        <p class="text-muted">Use <code>justify-content-start</code>,
                                            <code>justify-content-start</code>, or <code>justify-content-start</code>, class
                                            to pagination class to change the alignment of pagination respectively.
                                        </p>
                                        <!-- Pagination Alignment -->

                                        <!-- Center Alignment -->
                                        <b-pagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true" align="center">
                                            <template #prev-text>← &nbsp; Prev</template>
                                            <template #next-text>Next &nbsp; →</template>
                                        </b-pagination>


                                        <!-- Right Alignment -->
                                        <b-pagination :total-rows="9" :per-page="3" hide-goto-end-buttons="true" align="end">
                                            <template #prev-text>← &nbsp; Prev</template>
                                            <template #next-text>Next &nbsp; →</template>
                                        </b-pagination>
                                    </div>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="6">
                                    <div class="mt-4">
                                        <h5 class="fs-base">Custom Separated Pagination</h5>
                                        <p class="text-muted">Use <code>pagination-separated</code> class to pagination
                                            class to set custom separated pagination.</p>
                                        <!-- Custom Separated Pagination Large -->
                                        <b-pagination v-model="ex1CurrentPage2" :total-rows="ex1Rows2" :per-page="ex1PerPage2" prev-text="←" next-text="→" hide-goto-end-buttons="true" size="lg" class="pagination-separated flex-wrap"> </b-pagination>
                                        <b-pagination v-model="ex1CurrentPage2" :total-rows="ex1Rows2" :per-page="ex1PerPage2" prev-text="←" next-text="→" hide-goto-end-buttons="true" class="pagination-separated flex-wrap"> </b-pagination>
                                        <b-pagination v-model="ex1CurrentPage2" :total-rows="ex1Rows2" :per-page="ex1PerPage2" prev-text="←" next-text="→" hide-goto-end-buttons="true" size="sm" class="pagination-separated"> </b-pagination>
                                    </div>
                                </b-col>

                                <b-col lg="6">
                                    <div class="mt-4">
                                        <h5 class="fs-base">Custom Rounded Pagination</h5>
                                        <p class="text-muted">Use <code>pagination-rounded</code> class to pagination class
                                            to set custom rounded pagination.</p>
                                        <!-- Pagination rounded -->

                                        <b-pagination v-model="ex1CurrentPage3" :total-rows="ex1Rows3" :per-page="ex1PerPage3" pills prev-text="←" next-text="→" hide-goto-end-buttons="true" size="lg" class="pagination-rounded flex-wrap"> </b-pagination>
                                        <b-pagination v-model="ex1CurrentPage3" :total-rows="ex1Rows3" :per-page="ex1PerPage3" pills prev-text="←" next-text="→" hide-goto-end-buttons="true" class="pagination-rounded flex-wrap"> </b-pagination>
                                        <b-pagination v-model="ex1CurrentPage3" :total-rows="ex1Rows3" :per-page="ex1PerPage3" pills prev-text="←" next-text="→" hide-goto-end-buttons="true" size="sm" class="pagination-rounded"> </b-pagination>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 250px;"><code>&lt;nav aria-label=&quot;Page navigation example&quot;&gt;
    &lt;ul class=&quot;pagination&quot;&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;Previous&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;2&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/b-link&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</code>

<code>&lt;nav aria-label=&quot;Page navigation example&quot;&gt;
    &lt;ul class=&quot;pagination&quot;&gt;
        &lt;li class=&quot;page-item&quot;&gt;
            &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot; aria-label=&quot;Previous&quot;&gt;
                &lt;i class=&quot;mdi mdi-chevron-left&quot;&gt;&lt;/i&gt;
            &lt;/b-link&gt;
        &lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;2&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;
            &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot; aria-label=&quot;Next&quot;&gt;
                &lt;i class=&quot;mdi mdi-chevron-right&quot;&gt;&lt;/i&gt;
            &lt;/b-link&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</code>


<code>&lt;!-- Pagination Disabled &amp; Active --&gt;
&lt;nav aria-label=&quot;...&quot;&gt;
    &lt;ul class=&quot;pagination&quot;&gt;
        &lt;li class=&quot;page-item disabled&quot;&gt;
            &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot; tabindex=&quot;-1&quot;&gt;Previous&lt;/b-link&gt;
        &lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item active&quot;&gt;
            &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;2 &lt;span class=&quot;visually-hidden&quot;&gt;(current)&lt;/span&gt;&lt;/b-link&gt;
        &lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;
            &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/b-link&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</code>

<code>&lt;nav aria-label=&quot;...&quot;&gt;
    &lt;ul class=&quot;pagination&quot;&gt;
        &lt;li class=&quot;page-item disabled&quot;&gt;
            &lt;span class=&quot;page-link&quot;&gt;&lt;i class=&quot;mdi mdi-chevron-left&quot;&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item active&quot;&gt;
            &lt;span class=&quot;page-link&quot;&gt;
                2
            &lt;span class=&quot;visually-hidden&quot;&gt;(current)&lt;/span&gt;
            &lt;/span&gt;
        &lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;
            &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;&lt;i class=&quot;mdi mdi-chevron-right&quot;&gt;&lt;/i&gt;&lt;/b-link&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</code>


<code>&lt;!-- Pagination sizing --&gt;

&lt;!-- Pagination Large --&gt;
&lt;nav aria-label=&quot;...&quot;&gt;
    &lt;ul class=&quot;pagination pagination-lg&quot;&gt;
        &lt;li class=&quot;page-item disabled&quot;&gt;
            &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot; tabindex=&quot;-1&quot;&gt;Previous&lt;/b-link&gt;
        &lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;2&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;
            &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/b-link&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</code>

<code>&lt;!-- Pagination Small --&gt;
&lt;nav aria-label=&quot;...&quot;&gt;
    &lt;ul class=&quot;pagination pagination-sm&quot;&gt;
        &lt;li class=&quot;page-item disabled&quot;&gt;
            &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot; tabindex=&quot;-1&quot;&gt;Previous&lt;/b-link&gt;
        &lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;2&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;
            &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/b-link&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</code>


<code>&lt;!-- Pagination Alignment --&gt;

&lt;!-- Center Alignment --&gt;
&lt;nav aria-label=&quot;Page navigation example&quot;&gt;
    &lt;ul class=&quot;pagination justify-content-center&quot;&gt;
        &lt;li class=&quot;page-item disabled&quot;&gt;
            &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot; tabindex=&quot;-1&quot;&gt;Previous&lt;/b-link&gt;
        &lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;2&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/b-link&gt;&lt;/li&gt;
        &lt;li class=&quot;page-item&quot;&gt;
            &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/b-link&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</code>

<code>&lt;!-- Right Alignment --&gt;
&lt;nav aria-label=&quot;Page navigation example&quot;&gt;
        &lt;ul class=&quot;pagination justify-content-end&quot;&gt;
            &lt;li class=&quot;page-item disabled&quot;&gt;
                &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot; tabindex=&quot;-1&quot;&gt;Previous&lt;/b-link&gt;
            &lt;/li&gt;
            &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/b-link&gt;&lt;/li&gt;
            &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;2&lt;/b-link&gt;&lt;/li&gt;
            &lt;li class=&quot;page-item&quot;&gt;&lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/b-link&gt;&lt;/li&gt;
            &lt;li class=&quot;page-item&quot;&gt;
                &lt;b-link class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/b-link&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
&lt;/nav&gt;</code>


<code>&lt;!-- Pagination Rounded --&gt;
&lt;ul class=&quot;pagination pagination-rounded&quot;&gt;
    &lt;li class=&quot;page-item disabled&quot;&gt;
        &lt;b-link href=&quot;#&quot; class=&quot;page-link&quot;&gt;&lt;i class=&quot;mdi mdi-chevron-left&quot;&gt;&lt;/i&gt;&lt;/b-link&gt;
    &lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;
        &lt;b-link href=&quot;#&quot; class=&quot;page-link&quot;&gt;1&lt;/b-link&gt;
    &lt;/li&gt;
    &lt;li class=&quot;page-item active&quot;&gt;
        &lt;b-link href=&quot;#&quot; class=&quot;page-link&quot;&gt;2&lt;/b-link&gt;
    &lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;
        &lt;b-link href=&quot;#&quot; class=&quot;page-link&quot;&gt;3&lt;/b-link&gt;
    &lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;
        &lt;b-link href=&quot;#&quot; class=&quot;page-link&quot;&gt;4&lt;/b-link&gt;
    &lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;
        &lt;b-link href=&quot;#&quot; class=&quot;page-link&quot;&gt;5&lt;/b-link&gt;
    &lt;/li&gt;
    &lt;li class=&quot;page-item&quot;&gt;
        &lt;b-link href=&quot;#&quot; class=&quot;page-link&quot;&gt;&lt;i class=&quot;mdi mdi-chevron-right&quot;&gt;&lt;/i&gt;&lt;/b-link&gt;
    &lt;/li&gt;
&lt;/ul&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Spinners</b-card-title>
                    </b-card-header>

                    <b-card-body>

                        <div>
                            <b-row>
                                <b-col lg="6">
                                    <div>
                                        <h5 class="fs-base">Border spinner</h5>
                                        <p class="text-muted">Use <code>spinner-border</code> class for a lightweight
                                            loading indicator.</p>
                                        <div class="d-flex flex-wrap gap-3 mb-2">
                                            <!-- Border spinner -->
                                            <b-spinner variant="primary" label="Spinning" />
                                            <b-spinner variant="secondary" label="Spinning" />
                                            <b-spinner variant="success" label="Spinning" />
                                            <b-spinner variant="info" label="Spinning" />
                                            <b-spinner variant="warning" label="Spinning" />
                                            <b-spinner variant="danger" label="Spinning" />
                                            <b-spinner variant="dark" label="Spinning" />
                                            <b-spinner variant="light" label="Spinning" />
                                        </div>
                                    </div>
                                </b-col>

                                <b-col lg="6">
                                    <div>
                                        <h5 class="fs-base">Growing spinner</h5>
                                        <p class="text-muted">Use <code>spinner-grow</code> class for a lightweight spinner
                                            with growing effect.</p>
                                        <div class="d-flex flex-wrap gap-3 mb-2">
                                            <!-- Growing spinner -->
                                            <b-spinner variant="primary" type="grow" label="Spinning" />
                                            <b-spinner variant="secondary" type="grow" label="Spinning" />
                                            <b-spinner variant="success" type="grow" label="Spinning" />
                                            <b-spinner variant="info" type="grow" label="Spinning" />
                                            <b-spinner variant="warning" type="grow" label="Spinning" />
                                            <b-spinner variant="danger" type="grow" label="Spinning" />
                                            <b-spinner variant="dark" type="grow" label="Spinning" />
                                            <b-spinner variant="light" type="grow" label="Spinning" />
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>

                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 250px;"><code>&lt;!-- Border spinner --&gt;
&lt;b-spinner variant=&quot;primary&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner variant=&quot;secondary&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner variant=&quot;success&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner variant=&quot;info&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner variant=&quot;warning&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner variant=&quot;danger&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner variant=&quot;dark&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner variant=&quot;light&quot;&gt;&lt;/b-spinner&gt;</code>


<code>&lt;!-- Growing spinner --&gt;
&lt;b-spinner type=&quot;grow&quot; variant=&quot;primary&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner type=&quot;grow&quot; variant=&quot;secondary&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner type=&quot;grow&quot; variant=&quot;success&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner type=&quot;grow&quot; variant=&quot;info&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner type=&quot;grow&quot; variant=&quot;warning&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner type=&quot;grow&quot; variant=&quot;danger&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner type=&quot;grow&quot; variant=&quot;dark&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner type=&quot;grow&quot; variant=&quot;light&quot;&gt;&lt;/b-spinner&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Spinners Size</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Add <code>.spinner-border-sm</code> and <code>.spinner-grow-sm</code> to make
                            a smaller spinner that can quickly be used within other components.</p>

                        <div class="d-flex gap-4">
                            <b-spinner small label="Small Spinning" />
                            <b-spinner small label="Small Spinner" type="grow" />

                            <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" />
                            <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" type="grow" />
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre
                            class="language-markup"><code>&lt;b-spinner small label=&quot;Small Spinning&quot; /&gt;
                                
&lt;b-spinner small label=&quot;Small Spinner&quot; type=&quot;grow&quot; /&gt;</code>

<code>&lt;b-spinner style=&quot;width: 3rem; height: 3rem;&quot; label=&quot;Large Spinner&quot; /&gt;
    
&lt;b-spinner style=&quot;width: 3rem; height: 3rem;&quot; label=&quot;Large Spinner&quot; type="grow" /&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Spinners Buttons</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use spinners within buttons to indicate an action is currently processing or
                            taking place. You may also swap the text out of the spinner element and utilize button text as
                            needed.</p>

                        <div class="d-flex gap-2 flex-wrap">
                            <b-button variant="primary" disabled>
                                <b-spinner small />
                            </b-button>

                            <b-button variant="primary" disabled>
                                <b-spinner small />
                                <span class="sr-only"> Loading...</span>
                            </b-button>

                            <b-button variant="primary" disabled>
                                <b-spinner small type="grow" />
                            </b-button>

                            <b-button variant="primary" disabled>
                                <b-spinner small type="grow" />
                                Loading...
                            </b-button>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre
                            class="language-markup"><code>&lt;b-button variant=&quot;primary&quot; disabled&gt; &lt;b-spinner small /&gt; &lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;primary&quot; disabled&gt; &lt;b-spinner small /&gt; &lt;span class=&quot;sr-only&quot;&gt; Loading...&lt;/span&gt; &lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;primary&quot; disabled&gt; &lt;b-spinner small type=&quot;grow&quot; /&gt; &lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;primary&quot; disabled&gt; &lt;b-spinner small type="grow" /&gt; Loading... &lt;/b-button&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
    </b-row>
</Layout></template>