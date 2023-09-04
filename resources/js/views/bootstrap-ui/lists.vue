<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import "prismjs";

import avatar1 from "../../../images/users/32/avatar-1.jpg";
import avatar2 from "../../../images/users/32/avatar-2.jpg";
import avatar3 from "../../../images/users/32/avatar-3.jpg";
import avatar4 from "../../../images/users/32/avatar-4.jpg";

export default {
    data() {
        return {
            title: "Lists",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Lists",
                    active: true,
                },
            ],
            avatar1, avatar2, avatar3, avatar4,
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
            <b-col xxl="4" xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Default List</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>list-group</code> class in an unordered list and
                            <code>list-group-item</code> class to create a default list group.
                        </p>
                        <div>
                            <b-list-group tag="ul">
                                <b-list-group-item tag="li"><i class="ri-bill-line align-middle me-2"></i> Send the billing
                                    agreement</b-list-group-item>
                                <b-list-group-item tag="li"><i class="ri-file-copy-2-line align-middle me-2"></i>Send over
                                    all the documentation.</b-list-group-item>
                                <b-list-group-item tag="li"><i class="ri-question-answer-line align-middle me-2"></i>Meeting
                                    with daron to review the intake form</b-list-group-item>
                                <b-list-group-item tag="li"><i class="ri-secure-payment-line align-middle me-2"></i>Check
                                    uikings theme and give customer support</b-list-group-item>
                            </b-list-group>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup"><code>&lt;b-list-group tag=&quot;ul&quot;&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;&lt;i class=&quot;ri-bill-line align-middle me-2&quot;&gt;&lt;/i&gt; Send the billing agreement&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;&lt;i class=&quot;ri-file-copy-2-line align-middle me-2&quot;&gt;&lt;/i&gt;Send over all the documentation.&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;&lt;i class=&quot;ri-question-answer-line align-middle me-2&quot;&gt;&lt;/i&gt;Meeting with daron to review the intake form&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;&lt;i class=&quot;ri-secure-payment-line align-middle me-2&quot;&gt;&lt;/i&gt;Check uikings theme and give customer support&lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="4" xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Active Item</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>active</code> class to <code>list-group-item</code> to indicate the
                            current active selection.</p>
                        <div>
                            <b-list-group tag="ul">
                                <b-list-group-item tag="li" active>Send the billing agreement</b-list-group-item>
                                <b-list-group-item tag="li">Send over all the documentation.</b-list-group-item>
                                <b-list-group-item tag="li">Meeting with daron to review the intake form</b-list-group-item>
                                <b-list-group-item tag="li">Check uikings theme and give customer
                                    support</b-list-group-item>
                                <b-list-group-item tag="li">Start making a presentation</b-list-group-item>
                            </b-list-group>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height:110px;"><code>&lt;b-list-group tag=&quot;ul&quot;&gt;
    &lt;b-list-group-item tag=&quot;li&quot; active&gt;Send the billing agreement&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;Send over all the documentation.&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;Meeting with daron to review the intake form&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;Check uikings theme and give customer support&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;Start making a presentation&lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="4" xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Disabled Items</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>disabled</code> class to <code>list-group-item</code> to make it
                            <em>appear</em> disabled.
                        </p>
                        <b-list-group tag="ul">
                            <b-list-group-item tag="li" disabled>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0">
                                        <img :src="avatar1" alt=""
                                            class="avatar-xs rounded-circle">
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        James Ballard
                                    </div>
                                </div>
                            </b-list-group-item>
                            <b-list-group-item tag="li">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0">
                                        <img :src="avatar2" alt=""
                                            class="avatar-xs rounded-circle">
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        Nancy Martino
                                    </div>
                                </div>
                            </b-list-group-item>
                            <b-list-group-item tag="li">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0">
                                        <img :src="avatar3" alt=""
                                            class="avatar-xs rounded-circle">
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        Henry Baird
                                    </div>
                                </div>
                            </b-list-group-item>
                            <b-list-group-item tag="li">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0">
                                        <img :src="avatar3" alt=""
                                            class="avatar-xs rounded-circle">
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        Erica Kernan
                                    </div>
                                </div>
                            </b-list-group-item>
                        </b-list-group>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height:105px;"><code>&lt;b-list-group tag=&quot;ul&quot;&gt;
    &lt;b-list-group-item tag=&quot;li&quot; disabled&gt;
        &lt;div class=&quot;d-flex align-items-center&quot;&gt;
            &lt;div class=&quot;flex-shrink-0&quot;&gt;
                &lt;img src=&quot;@/assets/images/users/avatar-1.jpg&quot; alt=&quot;&quot;
                    class=&quot;avatar-xs rounded-circle&quot;&gt;
            &lt;/div&gt;
            &lt;div class=&quot;flex-grow-1 ms-2&quot;&gt;
                James Ballard
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;
        &lt;div class=&quot;d-flex align-items-center&quot;&gt;
            &lt;div class=&quot;flex-shrink-0&quot;&gt;
                &lt;img src=&quot;@/assets/images/users/avatar-2.jpg&quot; alt=&quot;&quot;
                    class=&quot;avatar-xs rounded-circle&quot;&gt;
            &lt;/div&gt;
            &lt;div class=&quot;flex-grow-1 ms-2&quot;&gt;
                Nancy Martino
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;
        &lt;div class=&quot;d-flex align-items-center&quot;&gt;
            &lt;div class=&quot;flex-shrink-0&quot;&gt;
                &lt;img src=&quot;@/assets/images/users/avatar-3.jpg&quot; alt=&quot;&quot;
                    class=&quot;avatar-xs rounded-circle&quot;&gt;
            &lt;/div&gt;
            &lt;div class=&quot;flex-grow-1 ms-2&quot;&gt;
                Henry Baird
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;
        &lt;div class=&quot;d-flex align-items-center&quot;&gt;
            &lt;div class=&quot;flex-shrink-0&quot;&gt;
                &lt;img src=&quot;@/assets/images/users/avatar-3.jpg&quot; alt=&quot;&quot;
                    class=&quot;avatar-xs rounded-circle&quot;&gt;
            &lt;/div&gt;
            &lt;div class=&quot;flex-grow-1 ms-2&quot;&gt;
                Erica Kernan
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="4" xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">List with Link</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>&lt;b-link&gt;</code> tag to create actionable list group items with
                            hover, disabled, and active states by adding list-group-item-action.</p>
                        <b-list-group>
                            <b-list-group-item href="#" active> <i class="ri-download-2-fill align-middle me-2"></i>Category
                                Download </b-list-group-item>
                            <b-list-group-item href="#"> <i class="ri-shield-check-line align-middle me-2"></i>Security
                                Access </b-list-group-item>
                            <b-list-group-item href="#"> <i class="ri-database-2-line align-middle me-2"></i>Storage folder
                            </b-list-group-item>
                            <b-list-group-item href="#"> <i class="ri-notification-3-line align-middle me-2"></i>Push
                                Notification </b-list-group-item>
                            <b-list-group-item href="#" disabled> <i class="ri-moon-fill align-middle me-2"></i>Dark Mode
                            </b-list-group-item>
                        </b-list-group>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup"><code>&lt;b-list-group&gt;
    &lt;b-list-group-item href=&quot;#&quot; active&gt; &lt;i class=&quot;ri-download-2-fill align-middle me-2&quot;&gt;&lt;/i&gt;Category Download &lt;/b-list-group-item&gt;
    &lt;b-list-group-item href=&quot;#&quot;&gt; &lt;i class=&quot;ri-shield-check-line align-middle me-2&quot;&gt;&lt;/i&gt;Security Access &lt;/b-list-group-item&gt;
    &lt;b-list-group-item href=&quot;#&quot;&gt; &lt;i class=&quot;ri-database-2-line align-middle me-2&quot;&gt;&lt;/i&gt;Storage folder &lt;/b-list-group-item&gt;
    &lt;b-list-group-item href=&quot;#&quot;&gt; &lt;i class=&quot;ri-notification-3-line align-middle me-2&quot;&gt;&lt;/i&gt;Push Notification &lt;/b-list-group-item&gt;
    &lt;b-list-group-item href=&quot;#&quot; disabled&gt; &lt;i class=&quot;ri-moon-fill align-middle me-2&quot;&gt;&lt;/i&gt;Dark Mode &lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="4" xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">List with Button</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>&lt;button&gt;</code> tag to create actionable list group items with
                            hover, disabled, and active states by adding list-group-item-action.</p>
                        <b-list-group>
                            <b-list-group-item button active> <i class="ri-reply-fill align-middle me-2"></i>Reply
                            </b-list-group-item>
                            <b-list-group-item button> <i class="ri-share-forward-fill align-middle me-2"></i>Forward
                                Message </b-list-group-item>
                            <b-list-group-item button> <i class="ri-equalizer-line align-middle me-2"></i>Filter Message
                            </b-list-group-item>
                            <b-list-group-item button> <i class="ri-delete-bin-5-line align-middle me-2"></i>Delete Message
                            </b-list-group-item>
                            <b-list-group-item button disabled> <i class="ri-forbid-line align-middle me-2"></i>Block "Mark
                                Spencer </b-list-group-item>
                        </b-list-group>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup"><code>&lt;b-list-group&gt;
    &lt;b-list-group-item button active&gt; &lt;i class=&quot;ri-reply-fill align-middle me-2&quot;&gt;&lt;/i&gt;Reply &lt;/b-list-group-item&gt;
    &lt;b-list-group-item button&gt; &lt;i class=&quot;ri-share-forward-fill align-middle me-2&quot;&gt;&lt;/i&gt;Forward Message &lt;/b-list-group-item&gt;
    &lt;b-list-group-item button&gt; &lt;i class=&quot;ri-equalizer-line align-middle me-2&quot;&gt;&lt;/i&gt;Filter Message &lt;/b-list-group-item&gt;
    &lt;b-list-group-item button&gt; &lt;i class=&quot;ri-delete-bin-5-line align-middle me-2&quot;&gt;&lt;/i&gt;Delete Message &lt;/b-list-group-item&gt;
    &lt;b-list-group-item button disabled&gt; &lt;i class=&quot;ri-forbid-line align-middle me-2&quot;&gt;&lt;/i&gt;Block &quot;Mark Spencer &lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="4" xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Flush List</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>list-group-flush</code> class to remove some borders and rounded
                            corners to render list group items.</p>
                        <b-list-group tag="ul" flush>
                            <b-list-group-item tag="li">Send the billing agreement</b-list-group-item>
                            <b-list-group-item tag="li">Send over all the documentation.</b-list-group-item>
                            <b-list-group-item tag="li">Meeting with daron to review the intake form</b-list-group-item>
                            <b-list-group-item tag="li">Check uikings theme and give customer support</b-list-group-item>
                            <b-list-group-item tag="li">Start making a presentation</b-list-group-item>
                        </b-list-group>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height:155px;"><code>&lt;b-list-group tag=&quot;ul&quot; flush&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;Send the billing agreement&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;Send over all the documentation.&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;Meeting with daron to review the intake form&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;Check uikings theme and give customer support&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;Start making a presentation&lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xl="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Horizontal List</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>list-group-horizontal</code> class to change the layout of list
                            group items from vertical to horizontal across all breakpoints.</p>
                        <div>
                            <b-list-group tag="ul" horizontal="md" class="mb-3">
                                <b-list-group-item tag="li">Inbox</b-list-group-item>
                                <b-list-group-item tag="li">Work</b-list-group-item>
                                <b-list-group-item tag="li">Shopping</b-list-group-item>
                            </b-list-group>
                            <b-list-group tag="ul" horizontal="md" class="justify-content-center mb-3">
                                <b-list-group-item tag="li">Inbox</b-list-group-item>
                                <b-list-group-item tag="li">Work</b-list-group-item>
                                <b-list-group-item tag="li">Shopping</b-list-group-item>
                            </b-list-group>
                            <b-list-group tag="ul" horizontal="md" class="justify-content-end">
                                <b-list-group-item tag="li">Inbox</b-list-group-item>
                                <b-list-group-item tag="li">Work</b-list-group-item>
                                <b-list-group-item tag="li">Shopping</b-list-group-item>
                            </b-list-group>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 240px;"><code>&lt;!-- Start Alignment --&gt;
&lt;b-list-group tag=&quot;ul&quot; horizontal=&quot;md&quot; class=&quot;mb-3&quot;&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;Inbox&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;Work&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;Shopping&lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;
&lt;b-list-group tag=&quot;ul&quot; horizontal=&quot;md&quot; class=&quot;justify-content-center mb-3&quot;&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;Inbox&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;Work&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;Shopping&lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;
&lt;b-list-group tag=&quot;ul&quot; horizontal=&quot;md&quot; class=&quot;justify-content-end&quot;&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;Inbox&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;Work&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;Shopping&lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Contextual Classes</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use contextual classes to style list items with a stateful background and
                            color.</p>
                        <b-list-group tag="ul">
                            <b-list-group-item tag="li">Dapibus ac facilisis in</b-list-group-item>
                            <b-list-group-item tag="li" variant="primary">A simple primary list group
                                item</b-list-group-item>
                            <b-list-group-item tag="li" variant="secondary">A simple secondary list group
                                item</b-list-group-item>
                            <b-list-group-item tag="li" variant="success">A simple success list group
                                item</b-list-group-item>
                            <b-list-group-item tag="li" variant="danger">A simple danger list group item</b-list-group-item>
                            <b-list-group-item tag="li" variant="warning">A simple warning list group
                                item</b-list-group-item>
                            <b-list-group-item tag="li" variant="info">A simple info list group item</b-list-group-item>
                            <b-list-group-item tag="li" variant="light">A simple light list group item</b-list-group-item>
                            <b-list-group-item tag="li" variant="dark">A simple dark list group item</b-list-group-item>
                        </b-list-group>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup"><code>&lt;b-list-group tag=&quot;ul&quot;&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;Dapibus ac facilisis in&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot; variant=&quot;primary&quot;&gt;A simple primary list group item&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot; variant=&quot;secondary&quot;&gt;A simple secondary list group item&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot; variant=&quot;success&quot;&gt;A simple success list group item&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot; variant=&quot;danger&quot;&gt;A simple danger list group item&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot; variant=&quot;warning&quot;&gt;A simple warning list group item&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot; variant=&quot;info&quot;&gt;A simple info list group item&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot; variant=&quot;light&quot;&gt;A simple light list group item&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot; variant=&quot;dark&quot;&gt;A simple dark list group item&lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Contextual Classes with Link</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Contextual classes also work with <code>.list-group-item-action</code>. Note
                            the addition of the hover styles here not present in the previous example.</p>
                        <div class="live-preview">
                            <b-list-group>
                                <b-list-group-item href="#">A simple default list group item</b-list-group-item>
                                <b-list-group-item href="#" variant="primary">A simple primary list group
                                    item</b-list-group-item>
                                <b-list-group-item href="#" variant="secondary">A simple secondary list group
                                    item</b-list-group-item>
                                <b-list-group-item href="#" variant="success">A simple success list group
                                    item</b-list-group-item>
                                <b-list-group-item href="#" variant="danger">A simple danger list group
                                    item</b-list-group-item>
                                <b-list-group-item href="#" variant="warning">A simple warning list group
                                    item</b-list-group-item>
                                <b-list-group-item href="#" variant="info">A simple info list group item</b-list-group-item>
                                <b-list-group-item href="#" variant="light">A simple light list group
                                    item</b-list-group-item>
                                <b-list-group-item href="#" variant="dark">A simple dark list group item</b-list-group-item>
                            </b-list-group>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 195px;"><code>&lt;b-list-group&gt;
    &lt;b-list-group-item href=&quot;#&quot;&gt;A simple default list group item&lt;/b-list-group-item&gt;
    &lt;b-list-group-item href=&quot;#&quot; variant=&quot;primary&quot;&gt;A simple primary list group item&lt;/b-list-group-item&gt;
    &lt;b-list-group-item href=&quot;#&quot; variant=&quot;secondary&quot;&gt;A simple secondary list group item&lt;/b-list-group-item&gt;
    &lt;b-list-group-item href=&quot;#&quot; variant=&quot;success&quot;&gt;A simple success list group item&lt;/b-list-group-item&gt;
    &lt;b-list-group-item href=&quot;#&quot; variant=&quot;danger&quot;&gt;A simple danger list group item&lt;/b-list-group-item&gt;
    &lt;b-list-group-item href=&quot;#&quot; variant=&quot;warning&quot;&gt;A simple warning list group item&lt;/b-list-group-item&gt;
    &lt;b-list-group-item href=&quot;#&quot; variant=&quot;info&quot;&gt;A simple info list group item&lt;/b-list-group-item&gt;
    &lt;b-list-group-item href=&quot;#&quot; variant=&quot;light&quot;&gt;A simple light list group item&lt;/b-list-group-item&gt;
    &lt;b-list-group-item href=&quot;#&quot; variant=&quot;dark&quot;&gt;A simple dark list group item&lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col> </b-row>

        <b-row>
            <b-col xl="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Custom Content</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Add nearly any HTML within, even for linked list groups like the one below,
                            with the help of <router-link to="https://getbootstrap.com/docs/5.1/utilities/flex/">flexbox
                                utilities</router-link>.</p>
                        <b-list-group>
                            <b-list-group-item href="#" active>
                                <div class="float-end"> Pending </div>
                                <div class="d-flex mb-2 align-items-center">
                                    <div class="flex-shrink-0"> <img :src="avatar1" alt=""
                                            class="avatar-sm rounded-circle"> </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h5 class="list-title fs-base mb-1">Charlie Pritchard</h5>
                                        <p class="list-text mb-0 fs-xs">12 min Ago</p>
                                    </div>
                                </div>
                                <p class="list-text mb-0">They all have something to say beyond the words on the page. They
                                    can come across as casual or neutral, exotic or graphic. That's why it's important to
                                    think about your message, then choose a font that fits. Cosby sweater eu banh mi, qui
                                    irure terry richardson ex squid.</p>
                            </b-list-group-item>
                            <b-list-group-item href="#">
                                <div class="float-end"> Pending </div>
                                <div class="d-flex mb-2 align-items-center">
                                    <div class="flex-shrink-0"> <img :src="avatar2" alt=""
                                            class="avatar-sm rounded-circle"> </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h5 class="list-title fs-base mb-1">Dominic Charlton</h5>
                                        <p class="list-text mb-0 fs-xs">12 min Ago</p>
                                    </div>
                                </div>
                                <p class="list-text mb-0">Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art
                                    party before they sold out master cleanse gluten-free squid scenester freegan cosby
                                    sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo
                                    park Austin.</p>
                            </b-list-group-item>
                            <b-list-group-item href="#">
                                <div class="float-end"> Rejected </div>
                                <div class="d-flex mb-2 align-items-center">
                                    <div class="flex-shrink-0"> <img :src="avatar3" alt=""
                                            class="avatar-sm rounded-circle"> </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h5 class="list-title fs-base mb-1">Declan Long</h5>
                                        <p class="list-text mb-0 fs-xs">12 min Ago</p>
                                    </div>
                                </div>
                                <p class="list-text mb-0">Big July earthquakes confound zany experimental vow. My girl wove
                                    six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to
                                    waltz. try again until it looks right, and each assumenda labore aes Homo nostrud
                                    organic, assumenda labore aesthetic magna elements, buttons, everything.</p>
                            </b-list-group-item>
                            <b-list-group-item href="#">
                                <div class="float-end"> Successful </div>
                                <div class="d-flex mb-2 align-items-center">
                                    <div class="flex-shrink-0"> <img :src="avatar4" alt=""
                                            class="avatar-sm rounded-circle"> </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h5 class="list-title fs-base mb-1">Angela Bernier</h5>
                                        <p class="list-text mb-0 fs-xs">5 days Ago</p>
                                    </div>
                                </div>
                                <p class="list-text mb-0">Just like in the image where we talked about using multiple fonts,
                                    you can see that the background in this graphic design is blurred. Whenever you put text
                                    on top of an image, it’s important that your viewers can understand the text, and
                                    sometimes that means applying a gaussian readable.</p>
                            </b-list-group-item>
                        </b-list-group>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 310px;">
<code>&lt;b-list-group&gt;
    &lt;b-list-group-item href=&quot;#&quot; active&gt;
        &lt;div class=&quot;float-end&quot;&gt; Pending &lt;/div&gt;
        &lt;div class=&quot;d-flex mb-2 align-items-center&quot;&gt;
            &lt;div class=&quot;flex-shrink-0&quot;&gt; &lt;img src=&quot;@/assets/images/users/avatar-1.jpg&quot; alt=&quot;&quot; class=&quot;avatar-sm rounded-circle&quot;&gt; &lt;/div&gt;
            &lt;div class=&quot;flex-grow-1 ms-3&quot;&gt;
                &lt;h5 class=&quot;list-title fs-base mb-1&quot;&gt;Charlie Pritchard&lt;/h5&gt;
                &lt;p class=&quot;list-text mb-0 fs-xs&quot;&gt;12 min Ago&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;p class=&quot;list-text mb-0&quot;&gt;They all have something to say beyond the words on the page. They
            can come across as casual or neutral, exotic or graphic. That's why it's important to
            think about your message, then choose a font that fits. Cosby sweater eu banh mi, qui
            irure terry richardson ex squid.&lt;/p&gt;
    &lt;/b-list-group-item&gt;
    &lt;b-list-group-item href=&quot;#&quot;&gt;
        &lt;div class=&quot;float-end&quot;&gt; Pending &lt;/div&gt;
        &lt;div class=&quot;d-flex mb-2 align-items-center&quot;&gt;
            &lt;div class=&quot;flex-shrink-0&quot;&gt; &lt;img src=&quot;@/assets/images/users/avatar-2.jpg&quot; alt=&quot;&quot; class=&quot;avatar-sm rounded-circle&quot;&gt; &lt;/div&gt;
            &lt;div class=&quot;flex-grow-1 ms-3&quot;&gt;
                &lt;h5 class=&quot;list-title fs-base mb-1&quot;&gt;Dominic Charlton&lt;/h5&gt;
                &lt;p class=&quot;list-text mb-0 fs-xs&quot;&gt;12 min Ago&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;p class=&quot;list-text mb-0&quot;&gt;Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art
            party before they sold out master cleanse gluten-free squid scenester freegan cosby
            sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo
            park Austin.&lt;/p&gt;
    &lt;/b-list-group-item&gt;
    &lt;b-list-group-item href=&quot;#&quot;&gt;
        &lt;div class=&quot;float-end&quot;&gt; Rejected &lt;/div&gt;
        &lt;div class=&quot;d-flex mb-2 align-items-center&quot;&gt;
            &lt;div class=&quot;flex-shrink-0&quot;&gt; &lt;img src=&quot;@/assets/images/users/avatar-3.jpg&quot; alt=&quot;&quot; class=&quot;avatar-sm rounded-circle&quot;&gt; &lt;/div&gt;
            &lt;div class=&quot;flex-grow-1 ms-3&quot;&gt;
                &lt;h5 class=&quot;list-title fs-base mb-1&quot;&gt;Declan Long&lt;/h5&gt;
                &lt;p class=&quot;list-text mb-0 fs-xs&quot;&gt;12 min Ago&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;p class=&quot;list-text mb-0&quot;&gt;Big July earthquakes confound zany experimental vow. My girl wove
            six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to
            waltz. try again until it looks right, and each assumenda labore aes Homo nostrud
            organic, assumenda labore aesthetic magna elements, buttons, everything.&lt;/p&gt;
    &lt;/b-list-group-item&gt;
    &lt;b-list-group-item href=&quot;#&quot;&gt;
        &lt;div class=&quot;float-end&quot;&gt; Successful &lt;/div&gt;
        &lt;div class=&quot;d-flex mb-2 align-items-center&quot;&gt;
            &lt;div class=&quot;flex-shrink-0&quot;&gt; &lt;img src=&quot;@/assets/images/users/avatar-4.jpg&quot; alt=&quot;&quot; class=&quot;avatar-sm rounded-circle&quot;&gt; &lt;/div&gt;
            &lt;div class=&quot;flex-grow-1 ms-3&quot;&gt;
                &lt;h5 class=&quot;list-title fs-base mb-1&quot;&gt;Angela Bernier&lt;/h5&gt;
                &lt;p class=&quot;list-text mb-0 fs-xs&quot;&gt;5 days Ago&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;p class=&quot;list-text mb-0&quot;&gt;Just like in the image where we talked about using multiple fonts,
            you can see that the background in this graphic design is blurred. Whenever you put text
            on top of an image, it’s important that your viewers can understand the text, and
            sometimes that means applying a gaussian readable.&lt;/p&gt;
    &lt;/b-list-group-item>
&lt;/b-list-group&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>


        <b-row>
            <b-col xxl="4" xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">List with Badges</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use badges to any list group item to show unread counts, activity, and more
                            with the help of some <router-link to="https://getbootstrap.com/docs/5.1/utilities/">utilities</router-link>.</p>
                        <b-list-group tag="ul">
                            <b-list-group-item tag="li"
                                class="list-group-item d-flex justify-content-between align-items-center"> Send the billing
                                agreement <span class="badge bg-success">High</span> </b-list-group-item>
                            <b-list-group-item tag="li"
                                class="list-group-item d-flex justify-content-between align-items-center"> Send over all the
                                documentation </b-list-group-item>
                            <b-list-group-item tag="li"
                                class="list-group-item d-flex justify-content-between align-items-center"> Meeting with
                                daron to review the intake form <span class="badge bg-danger">Low</span>
                            </b-list-group-item>
                            <b-list-group-item tag="li"
                                class="list-group-item d-flex justify-content-between align-items-center"> Check uikings
                                theme and give customer support <span class="badge bg-secondary">Medium</span>
                            </b-list-group-item>
                            <b-list-group-item tag="li"
                                class="list-group-item d-flex justify-content-between align-items-center"> Start making a
                                presentation <span class="badge bg-success">High</span> </b-list-group-item>
                        </b-list-group>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 222px;"><code>&lt;b-list-group tag=&quot;ul&quot;&gt;
    &lt;b-list-group-item tag=&quot;li&quot; class=&quot;list-group-item d-flex justify-content-between align-items-center&quot;&gt; Send the billing agreement &lt;span class=&quot;badge bg-success&quot;&gt;High&lt;/span&gt; &lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot; class=&quot;list-group-item d-flex justify-content-between align-items-center&quot;&gt; Send over all the documentation &lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot; class=&quot;list-group-item d-flex justify-content-between align-items-center&quot;&gt; Meeting with daron to review the intake form &lt;span class=&quot;badge bg-danger&quot;&gt;Low&lt;/span&gt; &lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot; class=&quot;list-group-item d-flex justify-content-between align-items-center&quot;&gt; Check uikings theme and give customer support &lt;span class=&quot;badge bg-secondary&quot;&gt;Medium&lt;/span&gt; &lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot; class=&quot;list-group-item d-flex justify-content-between align-items-center&quot;&gt; Start making a presentation &lt;span class=&quot;badge bg-success&quot;&gt;High&lt;/span&gt; &lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="4" xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">List with Checkboxs</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use Bootstrap’s checkboxes within list group items and customize as needed.
                        </p>
                        <b-list-group>
                            <b-list-group-item tag="label"> <input class="form-check-input me-1" type="checkbox" value="">
                                Declined Payment </b-list-group-item>
                            <b-list-group-item tag="label"> <input class="form-check-input me-1" type="checkbox" value=""
                                    checked> Delivery Error </b-list-group-item>
                            <b-list-group-item tag="label"> <input class="form-check-input me-1" type="checkbox" value=""
                                    checked> Wrong Amount </b-list-group-item>
                            <b-list-group-item tag="label"> <input class="form-check-input me-1" type="checkbox" value="">
                                Wrong Address </b-list-group-item>
                            <b-list-group-item tag="label"> <input class="form-check-input me-1" type="checkbox" value="">
                                Wrong UX/UI Solution </b-list-group-item>
                        </b-list-group>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 240px;">
<code>&lt;b-list-group&gt;
    &lt;b-list-group-item tag=&quot;label&quot;&gt; &lt;input class=&quot;form-check-input me-1&quot; type=&quot;checkbox&quot; value=&quot; &quot;&gt; Declined Payment &lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;label&quot;&gt; &lt;input class=&quot;form-check-input me-1&quot; type=&quot;checkbox&quot; value=&quot; &quot; checked&gt; Delivery Error &lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;label&quot;&gt; &lt;input class=&quot;form-check-input me-1&quot; type=&quot;checkbox&quot; value=&quot; &quot; checked&gt; Wrong Amount &lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;label&quot;&gt; &lt;input class=&quot;form-check-input me-1&quot; type=&quot;checkbox&quot; value=&quot; &quot;&gt; Wrong Address &lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;label&quot;&gt; &lt;input class=&quot;form-check-input me-1&quot; type=&quot;checkbox&quot; value=&quot; &quot;&gt; Wrong UX/UI Solution &lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="4" xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">List with Radios</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use Bootstrap’s radios within list group items and customize as needed. </p>
                        <b-list-group>
                            <b-list-group-item tag="label"><input class="form-check-input fs-md mt-0 align-middle me-1"
                                    name="exampleRadios" type="radio" value=""> Declined Payment </b-list-group-item>
                            <b-list-group-item tag="label"><input class="form-check-input fs-md mt-0 align-middle me-1"
                                    name="exampleRadios" type="radio" value="" checked> Delivery Error </b-list-group-item>
                            <b-list-group-item tag="label"><input class="form-check-input fs-md mt-0 align-middle me-1"
                                    name="exampleRadios" type="radio" value=""> Wrong Amount </b-list-group-item>
                            <b-list-group-item tag="label"><input class="form-check-input fs-md mt-0 align-middle me-1"
                                    name="exampleRadios" type="radio" value=""> Wrong Address </b-list-group-item>
                            <b-list-group-item tag="label"><input class="form-check-input fs-md mt-0 align-middle me-1"
                                    name="exampleRadios" type="radio" value=""> Wrong UX/UI Solution </b-list-group-item>
                        </b-list-group>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 240px;">
<code>&lt;b-list-group&gt;
    &lt;b-list-group-item tag=&quot;label&quot;&gt;&lt;input class=&quot;form-check-input fs-md mt-0 align-middle me-1&quot; name=&quot;exampleRadios&quot; type=&quot;radio&quot; value=&quot; &quot;&gt; Declined Payment &lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;label&quot;&gt;&lt;input class=&quot;form-check-input fs-md mt-0 align-middle me-1&quot; name=&quot;exampleRadios&quot; type=&quot;radio&quot; value=&quot; &quot; checked&gt; Delivery Error &lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;label&quot;&gt;&lt;input class=&quot;form-check-input fs-md mt-0 align-middle me-1&quot; name=&quot;exampleRadios&quot; type=&quot;radio&quot; value=&quot; &quot;&gt; Wrong Amount &lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;label&quot;&gt;&lt;input class=&quot;form-check-input fs-md mt-0 align-middle me-1&quot; name=&quot;exampleRadios&quot; type=&quot;radio&quot; value=&quot; &quot;&gt; Wrong Address &lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;label&quot;&gt;&lt;input class=&quot;form-check-input fs-md mt-0 align-middle me-1&quot; name=&quot;exampleRadios&quot; type=&quot;radio&quot; value=&quot; &quot;&gt; Wrong UX/UI Solution &lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="4" xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">List with Icon</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use icons to any list group item to show icons to list group items.</p>
                        <b-list-group tag="ul">
                            <b-list-group-item tag="li"><i class="mdi mdi-check-bold align-middle lh-1 me-2"></i> Send the
                                billing agreement</b-list-group-item>
                            <b-list-group-item tag="li"><i class="mdi mdi-check-bold align-middle lh-1 me-2"></i> Send over
                                all the documentation.</b-list-group-item>
                            <b-list-group-item tag="li"><i class="mdi mdi-check-bold align-middle lh-1 me-2"></i> Meeting
                                with daron to review the intake form</b-list-group-item>
                            <b-list-group-item tag="li"><i class="mdi mdi-check-bold align-middle lh-1 me-2"></i> Check
                                uikings theme and give customer support</b-list-group-item>
                            <b-list-group-item tag="li"><i class="mdi mdi-check-bold align-middle lh-1 me-2"></i> Start
                                making a presentation</b-list-group-item>
                        </b-list-group>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup"><code>&lt;b-list-group tag=&quot;ul&quot;&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;&lt;i class=&quot;mdi mdi-check-bold align-middle lh-1 me-2&quot;&gt;&lt;/i&gt; Send the billing agreement&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;&lt;i class=&quot;mdi mdi-check-bold align-middle lh-1 me-2&quot;&gt;&lt;/i&gt; Send over all the documentation.&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;&lt;i class=&quot;mdi mdi-check-bold align-middle lh-1 me-2&quot;&gt;&lt;/i&gt; Meeting with daron to review the intake form&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;&lt;i class=&quot;mdi mdi-check-bold align-middle lh-1 me-2&quot;&gt;&lt;/i&gt; Check uikings theme and give customer support&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;&lt;i class=&quot;mdi mdi-check-bold align-middle lh-1 me-2&quot;&gt;&lt;/i&gt; Start making a presentation&lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="4" xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">List with Numbered</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>list-group-numbered</code> class (optionally use an
                            <code>&lt;ol&gt;</code> element) to show numbered list group items.
                        </p>
                        <b-list-group tag="ol" class="list-group-numbered">
                            <b-list-group-item tag="li">Send the billing agreement</b-list-group-item>
                            <b-list-group-item tag="li">Send over all the documentation.</b-list-group-item>
                            <b-list-group-item tag="li">Meeting with daron to review the intake form</b-list-group-item>
                            <b-list-group-item tag="li">Check uikings theme and give customer support</b-list-group-item>
                            <b-list-group-item tag="li">Start making a presentation</b-list-group-item>
                        </b-list-group>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 128px;"><code>&lt;b-list-group tag=&quot;ol&quot; class=&quot;list-group-numbered&quot;&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;Send the billing agreement&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;Send over all the documentation.&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;Meeting with daron to review the intake form&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;Check uikings theme and give customer support&lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;Start making a presentation&lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="4" xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Custom Content Lists</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p>Add nearly any HTML within, even for linked list groups like the one below, with the help of 
                            <router-link to="https://getbootstrap.com/docs/5.1/utilities/flex/">flexbox utilities</router-link>.</p>
                        <div data-simplebar style="max-height: 215px;">
                            <b-list-group tag="ul" class="mb-1">
                                <b-list-group-item tag="li">
                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 avatar-xs">
                                                    <div class="avatar-title bg-danger-subtle text-danger rounded">
                                                        <i class="ri-netflix-fill"></i>
                                                    </div>
                                                </div>
                                                <div class="flex-shrink-0 ms-2">
                                                    <h6 class="fs-md mb-0">Netfilx</h6>
                                                    <small class="text-muted">2 min Ago</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <span class="text-danger">-$25.50</span>
                                        </div>
                                    </div>
                                </b-list-group-item>
                                <b-list-group-item tag="li">
                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 avatar-xs">
                                                    <div class="avatar-title bg-success-subtle text-success rounded">
                                                        <i class="ri-spotify-fill"></i>
                                                    </div>
                                                </div>
                                                <div class="flex-shrink-0 ms-2">
                                                    <h6 class="fs-md mb-0">Spotify</h6>
                                                    <small class="text-muted">5 days Ago</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <span class="text-success">$48.25</span>
                                        </div>
                                    </div>
                                </b-list-group-item>
                                <b-list-group-item tag="li">
                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                            <div class="d-flex">
                                                <div class="flex-shrink-0">
                                                    <img :src="avatar2" alt=""
                                                        class="avatar-xs rounded">
                                                </div>
                                                <div class="flex-shrink-0 ms-2">
                                                    <h6 class="fs-md mb-0">Emily Slater</h6>
                                                    <small class="text-muted">8 days Ago</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <span class="text-success">$354.90</span>
                                        </div>
                                    </div>
                                </b-list-group-item>
                                <b-list-group-item tag="li">
                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                            <div class="d-flex">
                                                <div class="flex-shrink-0 avatar-xs">
                                                    <div class="avatar-title bg-secondary-subtle text-secondary rounded">
                                                        <i class="ri-paypal-fill"></i>
                                                    </div>
                                                </div>
                                                <div class="flex-shrink-0 ms-2">
                                                    <h6 class="fs-md mb-0">Paypal</h6>
                                                    <small class="text-muted">1 month Ago</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <span class="text-danger">-$12.22</span>
                                        </div>
                                    </div>
                                </b-list-group-item>
                                <b-list-group-item tag="li">
                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                            <div class="d-flex">
                                                <div class="flex-shrink-0">
                                                    <img :src="avatar3" alt=""
                                                        class="avatar-xs rounded">
                                                </div>
                                                <div class="flex-shrink-0 ms-2">
                                                    <h6 class="fs-md mb-0">Harvey Wells</h6>
                                                    <small class="text-muted">4 month Ago</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <span class="text-success">-$459.78</span>
                                        </div>
                                    </div>
                                </b-list-group-item>
                            </b-list-group>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 128px;">
<code>&lt;b-list-group tag=&quot;ul&quot; class=&quot;mb-1&quot;&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;
        &lt;div class=&quot;d-flex align-items-center&quot;&gt;
            &lt;div class=&quot;flex-grow-1&quot;&gt;
                &lt;div class=&quot;d-flex&quot;&gt;
                    &lt;div class=&quot;flex-shrink-0 avatar-xs&quot;&gt;
                        &lt;div class=&quot;avatar-title bg-danger-subtle text-danger rounded&quot;&gt;
                            &lt;i class=&quot;ri-netflix-fill&quot;&gt;&lt;/i&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;flex-shrink-0 ms-2&quot;&gt;
                        &lt;h6 class=&quot;fs-md mb-0&quot;&gt;Netfilx&lt;/h6&gt;
                        &lt;small class=&quot;text-muted&quot;&gt;2 min Ago&lt;/small&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;flex-shrink-0&quot;&gt;
                &lt;span class=&quot;text-danger&quot;&gt;-$25.50&lt;/span&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;
        &lt;div class=&quot;d-flex align-items-center&quot;&gt;
            &lt;div class=&quot;flex-grow-1&quot;&gt;
                &lt;div class=&quot;d-flex&quot;&gt;
                    &lt;div class=&quot;flex-shrink-0 avatar-xs&quot;&gt;
                        &lt;div class=&quot;avatar-title bg-success-subtle text-success rounded&quot;&gt;
                            &lt;i class=&quot;ri-spotify-fill&quot;&gt;&lt;/i&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;flex-shrink-0 ms-2&quot;&gt;
                        &lt;h6 class=&quot;fs-md mb-0&quot;&gt;Spotify&lt;/h6&gt;
                        &lt;small class=&quot;text-muted&quot;&gt;5 days Ago&lt;/small&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;flex-shrink-0&quot;&gt;
                &lt;span class=&quot;text-success&quot;&gt;$48.25&lt;/span&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;
        &lt;div class=&quot;d-flex align-items-center&quot;&gt;
            &lt;div class=&quot;flex-grow-1&quot;&gt;
                &lt;div class=&quot;d-flex&quot;&gt;
                    &lt;div class=&quot;flex-shrink-0&quot;&gt;
                        &lt;img src=&quot;@/assets/images/users/avatar-2.jpg&quot; alt=&quot;&quot;
                            class=&quot;avatar-xs rounded&quot;&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;flex-shrink-0 ms-2&quot;&gt;
                        &lt;h6 class=&quot;fs-md mb-0&quot;&gt;Emily Slater&lt;/h6&gt;
                        &lt;small class=&quot;text-muted&quot;&gt;8 days Ago&lt;/small&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;flex-shrink-0&quot;&gt;
                &lt;span class=&quot;text-success&quot;&gt;$354.90&lt;/span&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;
        &lt;div class=&quot;d-flex align-items-center&quot;&gt;
            &lt;div class=&quot;flex-grow-1&quot;&gt;
                &lt;div class=&quot;d-flex&quot;&gt;
                    &lt;div class=&quot;flex-shrink-0 avatar-xs&quot;&gt;
                        &lt;div class=&quot;avatar-title bg-secondary-subtle text-secondary rounded&quot;&gt;
                            &lt;i class=&quot;ri-paypal-fill&quot;&gt;&lt;/i&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;flex-shrink-0 ms-2&quot;&gt;
                        &lt;h6 class=&quot;fs-md mb-0&quot;&gt;Paypal&lt;/h6&gt;
                        &lt;small class=&quot;text-muted&quot;&gt;1 month Ago&lt;/small&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;flex-shrink-0&quot;&gt;
                &lt;span class=&quot;text-danger&quot;&gt;-$12.22&lt;/span&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-list-group-item&gt;
    &lt;b-list-group-item tag=&quot;li&quot;&gt;
        &lt;div class=&quot;d-flex align-items-center&quot;&gt;
            &lt;div class=&quot;flex-grow-1&quot;&gt;
                &lt;div class=&quot;d-flex&quot;&gt;
                    &lt;div class=&quot;flex-shrink-0&quot;&gt;
                        &lt;img src=&quot;@/assets/images/users/avatar-3.jpg&quot; alt=&quot;&quot;
                            class=&quot;avatar-xs rounded&quot;&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;flex-shrink-0 ms-2&quot;&gt;
                        &lt;h6 class=&quot;fs-md mb-0&quot;&gt;Harvey Wells&lt;/h6&gt;
                        &lt;small class=&quot;text-muted&quot;&gt;4 month Ago&lt;/small&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;flex-shrink-0&quot;&gt;
                &lt;span class=&quot;text-success&quot;&gt;-$459.78&lt;/span&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;</code></pre>
                </b-card-body>
            </b-card>
        </b-col> </b-row>
</Layout></template>