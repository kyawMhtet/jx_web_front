<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import "prismjs";
import "prismjs/themes/prism.css";

import logoSm from "../../../images/logo-sm.png"

export default {
    data() {
        return {
            title: "Notifications",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Notifications",
                    active: true,
                },
            ],
            logoSm
        };
    },
    mounted() {
        // toast.show({ body: "test" }, {pos: 'bottom-center'})
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
                        <b-card-title class="mb-0">Bootstrap Toasts</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <div>
                            <b-row class="g-3">
                                <b-col xxl="6">
                                    <h5 class="fs-md mb-3">Default Toast</h5>
                                    <p class="text-muted">Use <code>toast</code> class to set a default toast.</p>
                                    <!-- Basic Toasts Example -->
                                    <div class="toast fade show" role="alert" aria-live="assertive" data-bs-autohide="false" aria-atomic="true">
                                        <div class="toast-header">
                                            <img :src="logoSm" class="rounded me-2" alt="..." height="20">
                                            <span class="fw-semibold me-auto">Hybrix</span>
                                            <small>06 mins ago</small>
                                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                        </div>
                                        <div class="toast-body">
                                            Hello, world! This is a toast message.
                                        </div>
                                    </div>

                                    <div class="mt-4">
                                        <h5 class="fs-md">Translucent</h5>
                                        <p class="text-muted">Toasts are slightly translucent, too, so they blend over whatever they might appear over.</p>
                                        <!-- Toasts Translucent -->
                                        <div class="p-3 bg-light">
                                            <div class="toast fade show" role="alert" aria-live="assertive" data-bs-autohide="false" aria-atomic="true">
                                                <div class="toast-header">
                                                    <img :src="logoSm" class="rounded me-2" alt="..." height="20">
                                                    <span class="fw-semibold me-auto">Hybrix</span>
                                                    <small>11 mins ago</small>
                                                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                                </div>
                                                <div class="toast-body">
                                                    Hello, world! This is a toast message.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-col>
                                

                                <b-col xxl="6">
                                    <div>
                                        <h5 class="fs-md">Stacking</h5>
                                        <p class="text-muted">When you have multiple toasts, we default to vertically stacking them in a readable manner.</p>

                                        <div class="p-3 bg-light">
                                            <!-- Toasts Stacking -->
                                            <div class="toast fade show" role="alert" aria-live="assertive" data-bs-autohide="false" aria-atomic="true">
                                                <div class="toast-header">
                                                    <img :src="logoSm" class="rounded me-2" alt="..." height="20">
                                                    <span class="fw-semibold me-auto">Hybrix</span>
                                                    <small>Just now</small>
                                                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                                </div>
                                                <div class="toast-body">
                                                    See? Just like this.
                                                </div>
                                            </div>

                                            <div class="toast fade show" role="alert" aria-live="assertive" data-bs-autohide="false" aria-atomic="true">
                                                <div class="toast-header">
                                                    <img :src="logoSm" class="rounded me-2" alt="..." height="20">
                                                    <span class="fw-semibold me-auto">Hybrix</span>
                                                    <small>2 seconds ago</small>
                                                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                                </div>
                                                <div class="toast-body">
                                                    Heads up, toasts will stack automatically
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-col>
                                
                            </b-row>
                            

                            <div class="mt-5">
                                <h5 class="fs-md">Placement</h5>
                                <b-row class="g-3">
                                    <b-col xxl="6">
                                        <div>
                                            <p class="text-muted">Place toasts with custom CSS as you need them.
                                                The top right
                                                is often used
                                                for notifications, as is the top middle. If you’re only ever
                                                going to show one toast
                                                at a time, put
                                                the positioning styles right on the <code>.toast</code>.</p>

                                            <!-- Toasts Placement -->
                                            <div class="bg-light" aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
                                                <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-toggle="toast" style="position: absolute; top: 16px; right: 16px;">
                                                    <div class="toast-header">
                                                        <img :src="logoSm" class="rounded me-2" alt="..." height="20">
                                                        <span class="fw-semibold me-auto">Hybrix</span>
                                                        <small>06 mins ago</small>
                                                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                                    </div>
                                                    <div class="toast-body">
                                                        Hello, world! This is a toast message.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </b-col>
                                    

                                    <b-col xxl="6">
                                        <div>
                                            <p class="text-muted">You can also get fancy with flexbox utilities
                                                to align toasts horizontally and/or vertically.</p>

                                            <!-- Flexbox container for aligning the toasts -->
                                            <div aria-live="polite" aria-atomic="true" class="bg-light d-flex justify-content-center align-items-center" style="height: 200px;">
                                                <div class="toast fade show" role="alert" aria-live="assertive" data-bs-autohide="false" aria-atomic="true">
                                                    <div class="toast-header">
                                                        <img :src="logoSm" class="rounded me-2" alt="..." height="20">
                                                        <span class="fw-semibold me-auto">Hybrix</span>
                                                        <small>11 mins ago</small>
                                                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                                    </div>
                                                    <div class="toast-body">
                                                        Hello, world! This is a toast message.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </b-col>
                                    
                                </b-row>
                                
                            </div>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
<pre class="language-markup" style="height: 300px;"><code>&lt;!-- Default Toast --&gt; 
&lt;div class=&quot;toast fade show&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; data-bs-autohide=&quot;false&quot; aria-atomic=&quot;true&quot;&gt;
    &lt;div class=&quot;toast-header&quot;&gt;
        &lt;img src=&quot;assets/images/logo-sm.png&quot; class=&quot;rounded me-2&quot; alt=&quot;...&quot; height=&quot;20&quot;&gt;
        &lt;span class=&quot;fw-semibold me-auto&quot;&gt;Hybrix&lt;/span&gt;
        &lt;small&gt;06 mins ago&lt;/small&gt;
        &lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;toast&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class=&quot;toast-body&quot;&gt;
        Hello, world! This is a toast message.
    &lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Translucent Toast --&gt; 
&lt;div class=&quot;p-3 bg-light&quot;&gt;
&lt;div class=&quot;toast fade show&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot;
data-bs-autohide=&quot;false&quot; aria-atomic=&quot;true&quot;&gt;
&lt;div class=&quot;toast-header&quot;&gt;
&lt;img src=&quot;assets/images/logo-sm.png&quot; class=&quot;rounded me-2&quot;
alt=&quot;...&quot; height=&quot;20&quot;&gt;
&lt;span class=&quot;fw-semibold me-auto&quot;&gt;Hybrix&lt;/span&gt;
&lt;small&gt;11 mins ago&lt;/small&gt;
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot;
data-bs-dismiss=&quot;toast&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;toast-body&quot;&gt;
Hello, world! This is a toast message.
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Stacking Toast --&gt; 
&lt;div class=&quot;toast fade show&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; data-bs-autohide=&quot;false&quot; aria-atomic=&quot;true&quot;&gt;
    &lt;div class=&quot;toast-header&quot;&gt;
        &lt;img src=&quot;assets/images/logo-sm.png&quot; class=&quot;rounded me-2&quot; alt=&quot;...&quot; height=&quot;20&quot;&gt;
    &lt;span class=&quot;fw-semibold me-auto&quot;&gt;Hybrix&lt;/span&gt;
        &lt;small&gt;Just now&lt;/small&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;toast&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;toast-body&quot;&gt; See? Just like this. &lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Placement Toast --&gt; 
&lt;div class=&quot;bg-light&quot; aria-live=&quot;polite&quot; aria-atomic=&quot;true&quot;
style=&quot;position: relative; min-height: 200px;&quot;&gt;
&lt;div class=&quot;toast fade show&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot;
aria-atomic=&quot;true&quot; data-bs-toggle=&quot;toast&quot;
style=&quot;position: absolute; top: 16px; right: 16px;&quot;&gt;
&lt;div class=&quot;toast-header&quot;&gt;
&lt;img src=&quot;assets/images/logo-sm.png&quot;
class=&quot;rounded me-2&quot; alt=&quot;...&quot; height=&quot;20&quot;&gt;
&lt;span class=&quot;fw-semibold me-auto&quot;&gt;Hybrix&lt;/span&gt;
&lt;small&gt;06 mins ago&lt;/small&gt;
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot;
data-bs-dismiss=&quot;toast&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;toast-body&quot;&gt;
Hello, world! This is a toast message.
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code> &lt;!-- Flexbox container for aligning the toasts --&gt;
&lt;div aria-live=&quot;polite&quot; aria-atomic=&quot;true&quot;
class=&quot;bg-light d-flex justify-content-center align-items-center&quot;
style=&quot;height: 200px;&quot;&gt;
&lt;div class=&quot;toast fade show&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot;
data-bs-autohide=&quot;false&quot; aria-atomic=&quot;true&quot;&gt;
&lt;div class=&quot;toast-header&quot;&gt;
&lt;img src=&quot;assets/images/logo-sm.png&quot;
class=&quot;rounded me-2&quot; alt=&quot;...&quot; height=&quot;20&quot;&gt;
&lt;span class=&quot;fw-semibold me-auto&quot;&gt;Hybrix&lt;/span&gt;
&lt;small&gt;11 mins ago&lt;/small&gt;
&lt;button type=&quot;button&quot; class=&quot;btn-close&quot;
data-bs-dismiss=&quot;toast&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;toast-body&quot;&gt;
Hello, world! This is a toast message.
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>