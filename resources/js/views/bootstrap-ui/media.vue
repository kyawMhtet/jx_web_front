<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import "prismjs";

import avatar2 from "../../../images/users/avatar-2.jpg";
import avatar3 from "../../../images/users/avatar-3.jpg";
import avatar4 from "../../../images/users/avatar-4.jpg";
import avatar6 from "../../../images/users/avatar-6.jpg";
import avatar8 from "../../../images/users/avatar-8.jpg";


export default {
    data() {
        return {
            title: "Media Object",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Media Object",
                    active: true,
                },
            ],
            avatar2, avatar3, avatar4, avatar6, avatar8,
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
                        <b-card-title class="mb-0">Examples</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted mb-4">Use few flex utilities that allow even more flexibility and
                            customization than before.</p>
                        <div>
                            <b-media>
                                <div class="d-flex align-items-start text-muted mb-4">
                                    <div class="flex-shrink-0 me-3">
                                        <img :src="avatar2" class="avatar-sm rounded" alt="...">
                                    </div>

                                    <div class="flex-grow-1">
                                        <h5 class="fs-md">Media heading</h5>
                                        This is some content from a media component. You can replace this with any content
                                        and adjust it as needed.
                                    </div>
                                </div>
                            </b-media>
                            <b-media>
                                <div class="d-flex align-items-start text-muted mb-4">
                                    <div class="flex-grow-1">
                                        <h5 class="fs-md">Media heading</h5>
                                        This is some content from a media component. You can replace this with any content
                                        and adjust it as needed.
                                    </div>
                                    <div class="flex-shrink-0 ms-3">
                                        <img :src="avatar3" class="avatar-sm rounded" alt="...">
                                    </div>
                                </div>
                            </b-media>
                            <b-media>
                                <div class="d-flex align-items-start text-muted">
                                    <div class="flex-shrink-0 me-3">
                                        <img :src="avatar2" class="avatar-sm rounded" alt="...">
                                    </div>
                                    <div class="flex-grow-1">
                                        <h5 class="fs-md">Media heading</h5>
                                        This is some content from a media component. You can replace this with any content
                                        and adjust it as needed.
                                    </div>
                                </div>
                            </b-media>
                        </div>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 333px;"><code> &lt;b-media&gt;
    &lt;div class=&quot;d-flex align-items-start text-muted mb-4&quot;&gt;
        &lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
            &lt;img src=&quot;@/assets/images/users/avatar-2.jpg&quot; class=&quot;avatar-sm rounded&quot; alt=&quot;...&quot;&gt;
        &lt;/div&gt;

        &lt;div class=&quot;flex-grow-1&quot;&gt;
            &lt;h5 class=&quot;fs-md&quot;&gt;Media heading&lt;/h5&gt;
                This is some content from a media component. You can replace this with any content and adjust it as needed.
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/b-media&gt;</code>

<code>&lt;b-media&gt;
    &lt;div class=&quot;d-flex align-items-start text-muted mb-4&quot;&gt;
        &lt;div class=&quot;flex-grow-1&quot;&gt;
            &lt;h5 class=&quot;fs-md&quot;&gt;Media heading&lt;/h5&gt;
            This is some content from a media component. You can replace this with any content and adjust it as needed.
        &lt;/div&gt;
        &lt;div class=&quot;flex-shrink-0 ms-3&quot;&gt;
            &lt;img src=&quot;@/assets/images/users/avatar-3.jpg&quot; class=&quot;avatar-sm rounded&quot; alt=&quot;...&quot;&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/b-media&gt;</code>

<code>&lt;b-media&gt;
    &lt;div class=&quot;d-flex align-items-start text-muted&quot;&gt;
        &lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
            &lt;img src=&quot;@/assets/images/users/avatar-2.jpg&quot; class=&quot;avatar-sm rounded&quot; alt=&quot;...&quot;&gt;
        &lt;/div&gt;
        &lt;div class=&quot;flex-grow-1&quot;&gt;
            &lt;h5 class=&quot;fs-md&quot;&gt;Media heading&lt;/h5&gt;
            This is some content from a media component. You can replace this with any content and adjust it as needed.
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/b-media&gt;</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>


            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Nesting Example</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <b-media>
                            <p class="text-muted mb-4">Media objects can be infinitely nested, though we suggest you stop at
                                some point. Place nested <code>d-flex align-items-start</code> within the
                                <code>flex-grow-1</code> of a parent media object.
                            </p>
                            <div>
                                <div class="d-flex align-items-start text-muted mb-4">
                                    <div class="flex-shrink-0 me-3">
                                        <img :src="avatar2" class="avatar-sm rounded" alt="...">
                                    </div>
                                    <div class="flex-grow-1">
                                        <h5 class="fs-md">Media heading</h5>
                                        This is some content from a media component. You can replace this with any content
                                        and
                                        adjust it as needed.
                                        <div class="d-flex align-items-start text-muted mt-3">
                                            <div class="flex-shrink-0 me-3">
                                                <img :src="avatar3" class="avatar-sm rounded"
                                                    alt="...">
                                            </div>
                                            <div class="flex-grow-1">
                                                <h5 class="fs-md">Media heading</h5>
                                                This is some content from a media component. You can replace this with any
                                                content and adjust it as needed.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-start text-muted">
                                    <div class="flex-shrink-0 me-3">
                                        <img :src="avatar4" class="avatar-sm rounded" alt="...">
                                    </div>
                                    <div class="flex-grow-1">
                                        <h5 class="fs-md">Media heading</h5>
                                        This is some content from a media component. You can replace this with any content
                                        and
                                        adjust it as needed.
                                    </div>
                                </div>
                            </div>
                        </b-media>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Nesting Example --&gt;
&lt;b-media&gt;
    &lt;div class=&quot;d-flex align-items-start text-muted mb-4&quot;&gt;
        &lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
            &lt;img src=&quot;@/assets/images/users/avatar-2.jpg&quot; class=&quot;avatar-sm rounded&quot; alt=&quot;...&quot;&gt;
        &lt;/div&gt;

        &lt;div class=&quot;flex-grow-1&quot;&gt;
            &lt;h5 class=&quot;fs-md&quot;&gt;Media heading&lt;/h5&gt;
                This is some content from a media component. You can replace this with any content and adjust it as needed.
            &lt;div class=&quot;d-flex align-items-start text-muted mt-3&quot;&gt;
                &lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
                    &lt;img src=&quot;@/assets/images/users/avatar-3.jpg&quot; class=&quot;avatar-sm rounded&quot; alt=&quot;...&quot;&gt;
                &lt;/div&gt;
                &lt;div class=&quot;flex-grow-1&quot;&gt;
                    &lt;h5 class=&quot;fs-md&quot;&gt;Media heading&lt;/h5&gt;
                        This is some content from a media component. You can replace this with any content and adjust it as needed.
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/b-media&gt;</code>

<code>&lt;b-media&gt;
    &lt;div class=&quot;d-flex align-items-start text-muted&quot;&gt;
        &lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
            &lt;img src=&quot;@/assets/images/users/avatar-4.jpg&quot; class=&quot;avatar-sm rounded&quot; alt=&quot;...&quot;&gt;
        &lt;/div&gt;
        &lt;div class=&quot;flex-grow-1&quot;&gt;
            &lt;h5 class=&quot;fs-md&quot;&gt;Media heading&lt;/h5&gt;
                This is some content from a media component. You can replace this with any content and adjust it as needed.
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/b-media&gt;
</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>

        </b-row>


        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Media Alignment</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <b-media>
                            <p class="text-muted mb-4">The images or other media can be aligned top, middle, or bottom. The
                                default is top aligned.</p>
                            <div>
                                <div class="d-flex align-items-start text-muted mb-4">
                                    <div class="flex-shrink-0 me-3">
                                        <img :src="avatar2" class="avatar-sm rounded" alt="...">
                                    </div>

                                    <div class="flex-grow-1">
                                        <h5 class="fs-md">Top Aligned media</h5>
                                        <p class="mb-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                            scelerisque
                                            ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                            turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                                            felis in faucibus.</p>
                                        <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                                            leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                            ridiculus mus.</p>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center text-muted mb-4">
                                    <div class="flex-shrink-0 me-3">
                                        <img :src="avatar6" class="avatar-sm rounded" alt="...">
                                    </div>

                                    <div class="flex-grow-1">
                                        <h5 class="fs-md">Center Aligned media</h5>
                                        <p class="mb-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                            scelerisque
                                            ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                            turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                                            felis in faucibus.</p>
                                        <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                                            leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                            ridiculus mus.</p>
                                    </div>
                                </div>
                                <div class="d-flex align-items-end text-muted">
                                    <div class="flex-shrink-0 me-3">
                                        <img :src="avatar8" class="avatar-sm rounded" alt="...">
                                    </div>
                                    <div class="flex-grow-1">
                                        <h5 class="fs-md">Bottom Aligned media</h5>
                                        <p class="mb-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                            scelerisque
                                            ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                            turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
                                            felis in faucibus.</p>
                                        <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                                            leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                            ridiculus mus.</p>
                                    </div>
                                </div>
                            </div>
                        </b-media>
                    </b-card-body>
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup" style="height: 310px;"><code>&lt;!-- Media Alignment --&gt;
&lt;b-media&gt;
    &lt;div class=&quot;d-flex align-items-start text-muted mb-4&quot;&gt;
        &lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
            &lt;img src=&quot;@/assets/images/users/avatar-2.jpg&quot; class=&quot;avatar-sm rounded&quot; alt=&quot;...&quot;&gt;
        &lt;/div&gt;
        &lt;div class=&quot;flex-grow-1&quot;&gt;
            &lt;h5 class=&quot;fs-md&quot;&gt;Top Aligned media&lt;/h5&gt;
                &lt;p class=&quot;mb-1&quot;&gt;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&lt;/p&gt;
                &lt;p class=&quot;mb-0&quot;&gt;Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/b-media&gt;</code>

<code>&lt;b-media&gt;
    &lt;div class=&quot;d-flex align-items-center text-muted mb-4&quot;&gt;
        &lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
            &lt;img src=&quot;@/assets/images/users/avatar-6.jpg&quot; class=&quot;avatar-sm rounded&quot; alt=&quot;...&quot;&gt;
        &lt;/div&gt;
        &lt;div class=&quot;flex-grow-1&quot;&gt;
            &lt;h5 class=&quot;fs-md&quot;&gt;Center Aligned media&lt;/h5&gt;
                &lt;p class=&quot;mb-1&quot;&gt;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&lt;/p&gt;
            &lt;p class=&quot;mb-0&quot;&gt;Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/b-media&gt;</code>

<code>&lt;b-media&gt;
    &lt;div class=&quot;d-flex align-items-end text-muted&quot;&gt;
        &lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
            &lt;img src=&quot;@/assets/images/users/avatar-8.jpg&quot; class=&quot;avatar-sm rounded&quot; alt=&quot;...&quot;&gt;
        &lt;/div&gt;
        &lt;div class=&quot;flex-grow-1&quot;&gt;
            &lt;h5 class=&quot;fs-md&quot;&gt;Bottom Aligned media&lt;/h5&gt;
                &lt;p class=&quot;mb-1&quot;&gt;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&lt;/p&gt;
                &lt;p class=&quot;mb-0&quot;&gt;Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/b-media&gt;
</code></pre>
                    </b-card-body>
                </b-card>
            </b-col>

        </b-row>

    </Layout>
</template>