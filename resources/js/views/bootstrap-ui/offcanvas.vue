<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

// avatar imgs
import avatar1 from "../../../images/users/32/avatar-1.jpg";
import avatar2 from "../../../images/users/32/avatar-2.jpg";
import avatar3 from "../../../images/users/32/avatar-3.jpg";
import avatar4 from "../../../images/users/32/avatar-4.jpg";
import avatar6 from "../../../images/users/32/avatar-6.jpg";
import avatar7 from "../../../images/users/32/avatar-7.jpg";
import avatar8 from "../../../images/users/32/avatar-8.jpg";

import small1 from "../../../images/small/img-1.jpg"
import small2 from "../../../images/small/img-2.jpg"
import small3 from "../../../images/small/img-3.jpg"
import small4 from "../../../images/small/img-4.jpg"
import small9 from "../../../images/small/img-9.jpg"
import small10 from "../../../images/small/img-10.jpg"
import small11 from "../../../images/small/img-11.jpg"
import small12 from "../../../images/small/img-12.jpg"

import { SimpleBar } from "simplebar-vue3";
import "prismjs";

export default {
    data() {
        return {
            title: "Offcanvas",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Offcanvas",
                    active: true,
                },
            ],
            placement: null,
            defaultOff: false,
            offTop: false,
            offRight: false,
            backdropOff: false,
            backdrop: null,
            avatar1, avatar2, avatar3, avatar4, avatar6, avatar7, avatar8, small1, small2, small3, small4, small9, small10, small11, small12, 
        };
    },
    methods: {
        offPlacement(val) {
            if (val == 'top') {
                this.offTop = true;
                this.placement = 'top';
            } else if (val == 'bottom') {
                this.offTop = true;
                this.placement = 'bottom';
            } else if (val == 'end') {
                this.offRight = true;
                this.placement = 'end';
            } else if (val == 'start') {
                this.offRight = true;
                this.placement = 'start';
            }
        },
        backdropType(type) {
            if(type == false) {
                this.backdropOff = true;
                this.backdrop = 'false';
            } else {
                this.backdropOff = true;
                this.backdrop = 'true';
            }
        }
    },
    components: {
        Layout,
        PageHeader,
        SimpleBar
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
                        <b-card-title class="mb-0">Default Offcanvas</b-card-title>
                    </b-card-header><!-- end card header -->
                    <b-card-body>
                        <div class="hstack flex-wrap gap-2">
                            <b-button @click="defaultOff = !defaultOff">Show OffCanvas</b-button>
                        </div>
                        <b-offcanvas v-model="defaultOff">
                            <template #header>
                                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Recent Acitivity</h5>
                                <button type="button" class="btn-close text-reset" @click="defaultOff = false"></button>
                            </template>
                            <template #default>
                                <SimpleBar style="height: calc(100vh - 112px);">
                                    <div class="acitivity-timeline p-4">
                                        <div class="acitivity-item d-flex">
                                            <div class="flex-shrink-0">
                                                <img :src="avatar1" alt=""
                                                    class="avatar-xs rounded-circle acitivity-avatar">
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1">Oliver Phillips <span
                                                        class="badge bg-primary-subtle text-primary align-middle">New</span>
                                                </h6>
                                                <p class="text-muted mb-2">We talked about a project on linkedin.</p>
                                                <small class="mb-0 text-muted">Today</small>
                                            </div>
                                        </div>
                                        <div class="acitivity-item py-3 d-flex">
                                            <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                                                <div class="avatar-title bg-success-subtle text-success rounded-circle">
                                                    N
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1">Nancy Martino <span
                                                        class="badge bg-secondary-subtle text-secondary align-middle">In
                                                        Progress</span></h6>
                                                <p class="text-muted mb-2"><i
                                                        class="ri-file-text-line align-middle ms-2"></i> Create new project
                                                    Buildng product</p>
                                                <div class="avatar-group mb-2">
                                                    <b-link href="#" class="avatar-group-item" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" title="" data-bs-original-title="Christi">
                                                        <img :src="avatar4" alt=""
                                                            class="rounded-circle avatar-xs">
                                                    </b-link>
                                                    <b-link href="#" class="avatar-group-item" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" title=""
                                                        data-bs-original-title="Frank Hook">
                                                        <img :src="avatar3" alt=""
                                                            class="rounded-circle avatar-xs">
                                                    </b-link>
                                                    <b-link href="#" class="avatar-group-item" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" title="" data-bs-original-title=" Ruby">
                                                        <div class="avatar-xs">
                                                            <div class="avatar-title rounded-circle bg-light text-primary">
                                                                R
                                                            </div>
                                                        </div>
                                                    </b-link>
                                                    <b-link href="#" class="avatar-group-item" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" title="" data-bs-original-title="more">
                                                        <div class="avatar-xs">
                                                            <div class="avatar-title rounded-circle">
                                                                2+
                                                            </div>
                                                        </div>
                                                    </b-link>
                                                </div>
                                                <small class="mb-0 text-muted">Yesterday</small>
                                            </div>
                                        </div>
                                        <div class="acitivity-item py-3 d-flex">
                                            <div class="flex-shrink-0">
                                                <img :src="avatar2" alt=""
                                                    class="avatar-xs rounded-circle acitivity-avatar">
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1">Natasha Carey <span
                                                        class="badge bg-success-subtle text-success align-middle">Completed</span>
                                                </h6>
                                                <p class="text-muted mb-2">Adding a new event with attachments</p>
                                                <b-row class="border border-dashed gx-2 p-2 mb-2">
                                                    <b-col cols="4">
                                                        <img :src="small2" alt=""
                                                            class="img-fluid rounded">
                                                    </b-col>
                                                    <b-col cols="4">
                                                        <img :src="small3" alt=""
                                                            class="img-fluid rounded">
                                                    </b-col>
                                                    <b-col cols="4">
                                                        <img :src="small4" alt=""
                                                            class="img-fluid rounded">
                                                    </b-col>
                                                </b-row>
                                                <small class="mb-0 text-muted">25 Nov</small>
                                            </div>
                                        </div>
                                        <div class="acitivity-item py-3 d-flex">
                                            <div class="flex-shrink-0">
                                                <img :src="avatar6" alt=""
                                                    class="avatar-xs rounded-circle acitivity-avatar">
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1">Bethany Johnson</h6>
                                                <p class="text-muted mb-2">added a new member to Hybrix dashboard</p>
                                                <small class="mb-0 text-muted">19 Nov</small>
                                            </div>
                                        </div>
                                        <div class="acitivity-item py-3 d-flex">
                                            <div class="flex-shrink-0">
                                                <div class="avatar-xs acitivity-avatar">
                                                    <div class="avatar-title rounded-circle bg-danger-subtle text-danger">
                                                        <i class="ri-shopping-bag-line"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1">Your order is placed <span
                                                        class="badge bg-danger-subtle text-danger align-middle ms-1">Out of
                                                        Delivery</span></h6>
                                                <p class="text-muted mb-2">These customers can rest assured their order has
                                                    been placed.</p>
                                                <small class="mb-0 text-muted">16 Nov</small>
                                            </div>
                                        </div>
                                        <div class="acitivity-item py-3 d-flex">
                                            <div class="flex-shrink-0">
                                                <img :src="avatar7" alt=""
                                                    class="avatar-xs rounded-circle acitivity-avatar">
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1">Lewis Pratt</h6>
                                                <p class="text-muted mb-2">They all have something to say beyond the words
                                                    on the page. They can come across as casual or neutral, exotic or
                                                    graphic. </p>
                                                <small class="mb-0 text-muted">22 Oct</small>
                                            </div>
                                        </div>
                                        <div class="acitivity-item py-3 d-flex">
                                            <div class="flex-shrink-0">
                                                <div class="avatar-xs acitivity-avatar">
                                                    <div class="avatar-title rounded-circle bg-info-subtle text-info">
                                                        <i class="ri-line-chart-line"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1">Monthly sales report</h6>
                                                <p class="text-muted mb-2"><span class="text-danger">2 days left</span>
                                                    notification to submit the monthly sales report. <b-link href="#"
                                                        class="link-warning text-decoration-underline">Reports
                                                        Builder</b-link></p>
                                                <small class="mb-0 text-muted">15 Oct</small>
                                            </div>
                                        </div>
                                        <div class="acitivity-item d-flex">
                                            <div class="flex-shrink-0">
                                                <img :src="avatar8" alt=""
                                                    class="avatar-xs rounded-circle acitivity-avatar">
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1">New ticket received <span
                                                        class="badge bg-success-subtle text-success align-middle">Completed</span>
                                                </h6>
                                                <p class="text-muted mb-2">User <span class="text-secondary">Erica245</span>
                                                    submitted a ticket.</p>
                                                <small class="mb-0 text-muted">26 Aug</small>
                                            </div>
                                        </div>
                                    </div>
                                </SimpleBar>
                            </template>
                        </b-offcanvas>
                    </b-card-body><!-- end card-body -->
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup">
<code>&lt;!-- Base Examples --&gt;
&lt;b-button @click="defaultOff = true"&gt;Show OffCanvas&lt;/b-button&gt;
&lt;b-offcanvas v-model="defaultOff"&gt;
  &lt;template #header&gt;
    &lt;-- Enter header code here --&gt;
  &lt;/template&gt;
  &lt;template #default&gt;
    &lt;-- Enter body code here --&gt;
  &lt;/template&gt;
&lt;/b-offcanvas&gt;</code></pre>
                    </b-card-body>
                </b-card><!-- end card -->
            </b-col><!-- end col -->
        </b-row><!-- end row -->

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Placement Offcanvas</b-card-title>
                    </b-card-header><!-- end card header -->
                    <b-card-body>
                        <div>
                            <div class="d-flex flex-wrap gap-2">
                                <b-button @click="offPlacement('top')" variant="primary">
                                    Toggle Top Offcanvas
                                </b-button>
                                <b-button @click="offPlacement('end')" variant="secondary">
                                    Toggle Right Offcanvas
                                </b-button>
                                <b-button @click="offPlacement('bottom')" variant="success">
                                    Toggle Bottom Offcanvas
                                </b-button>
                                <b-button @click="offPlacement('start')" variant="danger">
                                    Toggle Left Offcanvas
                                </b-button>
                            </div>

                            <b-offcanvas v-model="offTop" :placement="placement" title="Gallery" style="min-height:46vh;">
                                <template #default>
                                    <b-row class="gallery-light">
                                        <b-col xl="3" lg="4" sm="6">
                                            <div class="gallery-box card light mb-0">
                                                <div class="gallery-container">
                                                    <b-link href="#" title="">
                                                        <img class="gallery-img img-fluid mx-auto"
                                                            :src="small12" alt="">
                                                    </b-link>
                                                </div>
                                                <div class="box-content px-3 py-2">
                                                    <div class="gallery-overlay">
                                                        <h5 class="overlay-caption">A mix of friends and strangers
                                                            adventure.</h5>
                                                    </div>
                                                    <div class="d-flex align-items-center mt-1">
                                                        <div class="flex-grow-1 text-muted">by <b-link href="#"
                                                                class="text-body text-truncate">Erica Kernan</b-link></div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <button type="button"
                                                                    class="btn btn-sm fs-xs btn-link text-body text-decoration-none px-0">
                                                                    <i
                                                                        class="ri-thumb-up-fill text-muted align-bottom me-1"></i>
                                                                    3.4K
                                                                </button>
                                                                <button type="button"
                                                                    class="btn btn-sm fs-xs btn-link text-body text-decoration-none px-0">
                                                                    <i
                                                                        class="ri-question-answer-fill text-muted align-bottom me-1"></i>
                                                                    1.3k
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-col>
                                        <!--end col-->
                                        <b-col xl="3" lg="4" sm="6">
                                            <div class="gallery-box card light mb-0">
                                                <div class="gallery-container">
                                                    <b-link href="#" title="">
                                                        <img class="gallery-img img-fluid mx-auto"
                                                            :src="small9" alt="">
                                                    </b-link>
                                                </div>
                                                <div class="box-content px-3 py-2">
                                                    <div class="gallery-overlay">
                                                        <h5 class="overlay-caption">Dramatic clouds at the Golden Gate
                                                            Bridge</h5>
                                                    </div>
                                                    <div class="d-flex align-items-center mt-1">
                                                        <div class="flex-grow-1 text-muted">by <b-link href="#"
                                                                class="text-body text-truncate">Ron Mackie</b-link></div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <button type="button"
                                                                    class="btn btn-sm fs-xs btn-link text-body text-decoration-none px-0">
                                                                    <i
                                                                        class="ri-thumb-up-fill text-muted align-bottom me-1"></i>
                                                                    5.1K
                                                                </button>
                                                                <button type="button"
                                                                    class="btn btn-sm fs-xs btn-link text-body text-decoration-none px-0">
                                                                    <i
                                                                        class="ri-question-answer-fill text-muted align-bottom me-1"></i>
                                                                    4.7k
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-col>
                                        <!--end col-->
                                        <b-col xl="3" lg="4" sm="6">
                                            <div class="gallery-box card mb-0">
                                                <div class="gallery-container">
                                                    <b-link href="#" title="">
                                                        <img class="gallery-img img-fluid mx-auto"
                                                            :src="small11" alt="">
                                                    </b-link>
                                                </div>
                                                <div class="box-content px-3 py-2">
                                                    <div class="gallery-overlay">
                                                        <h5 class="overlay-caption">Cycling in the countryside</h5>
                                                    </div>


                                                    <div class="d-flex align-items-center mt-1">
                                                        <div class="flex-grow-1 text-muted">by <b-link href="#"
                                                                class="text-body text-truncate">Nancy Martino</b-link></div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <button type="button"
                                                                    class="btn btn-sm fs-xs btn-link text-body text-decoration-none px-0">
                                                                    <i
                                                                        class="ri-thumb-up-fill text-muted align-bottom me-1"></i>
                                                                    3.2K
                                                                </button>
                                                                <button type="button"
                                                                    class="btn btn-sm fs-xs btn-link text-body text-decoration-none px-0">
                                                                    <i
                                                                        class="ri-question-answer-fill text-muted align-bottom me-1"></i>
                                                                    1.1K
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-col>
                                        <!--end col-->
                                        <b-col xl="3" lg="4" sm="6" class="d-md-none d-xl-block">
                                            <div class="gallery-box card mb-0">
                                                <div class="gallery-container">
                                                    <b-link href="#" title="">
                                                        <img class="gallery-img img-fluid mx-auto"
                                                            :src="small10" alt="">
                                                    </b-link>
                                                </div>
                                                <div class="box-content px-3 py-2">
                                                    <div class="gallery-overlay">
                                                        <h5 class="overlay-caption">Fun day at the Hill Station</h5>
                                                    </div>
                                                    <div class="d-flex align-items-center mt-1">
                                                        <div class="flex-grow-1 text-muted">by <b-link href="#"
                                                                class="text-body text-truncate">Henry Baird</b-link></div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <button type="button"
                                                                    class="btn btn-sm fs-xs btn-link text-body text-decoration-none px-0">
                                                                    <i
                                                                        class="ri-thumb-up-fill text-muted align-bottom me-1"></i>
                                                                    632
                                                                </button>
                                                                <button type="button"
                                                                    class="btn btn-sm fs-xs btn-link text-body text-decoration-none px-0">
                                                                    <i
                                                                        class="ri-question-answer-fill text-muted align-bottom me-1"></i>
                                                                    95
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-col>
                                        <!--end col-->
                                    </b-row>
                                    <!--end row-->
                                </template>
                            </b-offcanvas>

                            <b-offcanvas v-model="offRight" :placement="placement" title="Recent Acitivity">
                                <template #default>
                                    <SimpleBar style="height: calc(100vh - 112px);">
                                        <div class="acitivity-timeline p-4">
                                            <div class="acitivity-item d-flex">
                                                <div class="flex-shrink-0">
                                                    <img :src="avatar1" alt=""
                                                        class="avatar-xs rounded-circle acitivity-avatar">
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Oliver Phillips <span
                                                            class="badge bg-primary-subtle text-primary align-middle">New</span>
                                                    </h6>
                                                    <p class="text-muted mb-2">We talked about a project on linkedin.</p>
                                                    <small class="mb-0 text-muted">Today</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                                                    <div class="avatar-title bg-success-subtle text-success rounded-circle">
                                                        N
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Nancy Martino <span
                                                            class="badge bg-secondary-subtle text-secondary align-middle">In
                                                            Progress</span></h6>
                                                    <p class="text-muted mb-2"><i
                                                            class="ri-file-text-line align-middle ms-2"></i> Create new
                                                        project
                                                        Buildng product</p>
                                                    <div class="avatar-group mb-2">
                                                        <b-link href="#" class="avatar-group-item" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title=""
                                                            data-bs-original-title="Christi">
                                                            <img :src="avatar4" alt=""
                                                                class="rounded-circle avatar-xs">
                                                        </b-link>
                                                        <b-link href="#" class="avatar-group-item" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title=""
                                                            data-bs-original-title="Frank Hook">
                                                            <img :src="avatar3" alt=""
                                                                class="rounded-circle avatar-xs">
                                                        </b-link>
                                                        <b-link href="#" class="avatar-group-item" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title=" Ruby">
                                                            <div class="avatar-xs">
                                                                <div
                                                                    class="avatar-title rounded-circle bg-light text-primary">
                                                                    R
                                                                </div>
                                                            </div>
                                                        </b-link>
                                                        <b-link href="#" class="avatar-group-item" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="more">
                                                            <div class="avatar-xs">
                                                                <div class="avatar-title rounded-circle">
                                                                    2+
                                                                </div>
                                                            </div>
                                                        </b-link>
                                                    </div>
                                                    <small class="mb-0 text-muted">Yesterday</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img :src="avatar2" alt=""
                                                        class="avatar-xs rounded-circle acitivity-avatar">
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Natasha Carey <span
                                                            class="badge bg-success-subtle text-success align-middle">Completed</span>
                                                    </h6>
                                                    <p class="text-muted mb-2">Adding a new event with attachments</p>
                                                    <b-row class="border border-dashed gx-2 p-2 mb-2">
                                                        <b-col cols="4">
                                                            <img :src="small2" alt=""
                                                                class="img-fluid rounded">
                                                        </b-col>
                                                        <b-col cols="4">
                                                            <img :src="small3" alt=""
                                                                class="img-fluid rounded">
                                                        </b-col>
                                                        <b-col cols="4">
                                                            <img :src="small4" alt=""
                                                                class="img-fluid rounded">
                                                        </b-col>
                                                    </b-row>
                                                    <small class="mb-0 text-muted">25 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img :src="avatar6" alt=""
                                                        class="avatar-xs rounded-circle acitivity-avatar">
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Bethany Johnson</h6>
                                                    <p class="text-muted mb-2">added a new member to Hybrix dashboard</p>
                                                    <small class="mb-0 text-muted">19 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <div class="avatar-xs acitivity-avatar">
                                                        <div
                                                            class="avatar-title rounded-circle bg-danger-subtle text-danger">
                                                            <i class="ri-shopping-bag-line"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Your order is placed <span
                                                            class="badge bg-danger-subtle text-danger align-middle ms-1">Out
                                                            of
                                                            Delivery</span></h6>
                                                    <p class="text-muted mb-2">These customers can rest assured their order
                                                        has
                                                        been placed.</p>
                                                    <small class="mb-0 text-muted">16 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img :src="avatar7" alt=""
                                                        class="avatar-xs rounded-circle acitivity-avatar">
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Lewis Pratt</h6>
                                                    <p class="text-muted mb-2">They all have something to say beyond the
                                                        words
                                                        on the page. They can come across as casual or neutral, exotic or
                                                        graphic. </p>
                                                    <small class="mb-0 text-muted">22 Oct</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <div class="avatar-xs acitivity-avatar">
                                                        <div class="avatar-title rounded-circle bg-info-subtle text-info">
                                                            <i class="ri-line-chart-line"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Monthly sales report</h6>
                                                    <p class="text-muted mb-2"><span class="text-danger">2 days left</span>
                                                        notification to submit the monthly sales report. <b-link href="#"
                                                            class="link-warning text-decoration-underline">Reports
                                                            Builder</b-link></p>
                                                    <small class="mb-0 text-muted">15 Oct</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item d-flex">
                                                <div class="flex-shrink-0">
                                                    <img :src="avatar8" alt=""
                                                        class="avatar-xs rounded-circle acitivity-avatar">
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">New ticket received <span
                                                            class="badge bg-success-subtle text-success align-middle">Completed</span>
                                                    </h6>
                                                    <p class="text-muted mb-2">User <span
                                                            class="text-secondary">Erica245</span>
                                                        submitted a ticket.</p>
                                                    <small class="mb-0 text-muted">26 Aug</small>
                                                </div>
                                            </div>
                                        </div>
                                    </SimpleBar>
                                </template>
                            </b-offcanvas>

                        </div>
                    </b-card-body><!-- end card-body -->
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup">
<code>&lt;!-- Placement Offcanvas --&gt;
&lt;b-button @click=&quot;defaultOff = true&quot;&gt;Show OffCanvas&lt;/b-button&gt;
&lt;b-offcanvas v-model=&quot;defaultOff&quot; placement=&quot;top&quot; &gt;
  &lt;template #header&gt;
    &lt;-- Enter header code here --&gt;
  &lt;/template&gt;
  &lt;template #default&gt;
    &lt;-- Enter body code here --&gt;
  &lt;/template&gt;
&lt;/b-offcanvas&gt;</code></pre>
                    </b-card-body>
                </b-card><!-- end card -->
            </b-col><!-- end col -->
        </b-row><!-- end row -->

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Backdrop Offcanvas</b-card-title>
                    </b-card-header><!-- end card header -->
                    <b-card-body>
                        <p class="text-muted">Here are the example of offcanvas with scrolling active and backdrop visible.
                        </p>
                        <div>
                            <div class="d-flex flex-wrap gap-2">
                                <b-button @click="backdropType(false)" variant="light">
                                    Enable Body Scrolling
                                </b-button>
                                <b-button @click="backdropType(true)" variant="light">
                                    Enable Both Scrolling & Backdrop
                                </b-button>
                            </div>

                            <b-offcanvas v-model="backdropOff" title="Customer Acitivity" :backdrop="backdrop">
                                <template #default>
                                    <SimpleBar style="height: calc(100vh - 112px);">
                                        <div class="acitivity-timeline p-4">
                                            <div class="acitivity-item d-flex">
                                                <div class="flex-shrink-0">
                                                    <img :src="avatar1" alt=""
                                                        class="avatar-xs rounded-circle acitivity-avatar">
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Oliver Phillips <span
                                                            class="badge bg-primary-subtle text-primary align-middle">New</span>
                                                    </h6>
                                                    <p class="text-muted mb-2">We talked about a project on linkedin.</p>
                                                    <small class="mb-0 text-muted">Today</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                                                    <div class="avatar-title bg-success-subtle text-success rounded-circle">
                                                        N
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Nancy Martino <span
                                                            class="badge bg-secondary-subtle text-secondary align-middle">In
                                                            Progress</span></h6>
                                                    <p class="text-muted mb-2"><i
                                                            class="ri-file-text-line align-middle ms-2"></i> Create new
                                                        project
                                                        Buildng product</p>
                                                    <div class="avatar-group mb-2">
                                                        <b-link href="#" class="avatar-group-item" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title=""
                                                            data-bs-original-title="Christi">
                                                            <img :src="avatar4" alt=""
                                                                class="rounded-circle avatar-xs">
                                                        </b-link>
                                                        <b-link href="#" class="avatar-group-item" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title=""
                                                            data-bs-original-title="Frank Hook">
                                                            <img :src="avatar3" alt=""
                                                                class="rounded-circle avatar-xs">
                                                        </b-link>
                                                        <b-link href="#" class="avatar-group-item" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title=" Ruby">
                                                            <div class="avatar-xs">
                                                                <div
                                                                    class="avatar-title rounded-circle bg-light text-primary">
                                                                    R
                                                                </div>
                                                            </div>
                                                        </b-link>
                                                        <b-link href="#" class="avatar-group-item" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="" data-bs-original-title="more">
                                                            <div class="avatar-xs">
                                                                <div class="avatar-title rounded-circle">
                                                                    2+
                                                                </div>
                                                            </div>
                                                        </b-link>
                                                    </div>
                                                    <small class="mb-0 text-muted">Yesterday</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img :src="avatar2" alt=""
                                                        class="avatar-xs rounded-circle acitivity-avatar">
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Natasha Carey <span
                                                            class="badge bg-success-subtle text-success align-middle">Completed</span>
                                                    </h6>
                                                    <p class="text-muted mb-2">Adding a new event with attachments</p>
                                                    <b-row class="border border-dashed gx-2 p-2 mb-2">
                                                        <b-col cols="4">
                                                            <img :src="small2" alt=""
                                                                class="img-fluid rounded">
                                                        </b-col>
                                                        <b-col cols="4">
                                                            <img :src="small3" alt=""
                                                                class="img-fluid rounded">
                                                        </b-col>
                                                        <b-col cols="4">
                                                            <img :src="small4" alt=""
                                                                class="img-fluid rounded">
                                                        </b-col>
                                                    </b-row>
                                                    <small class="mb-0 text-muted">25 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img :src="avatar6" alt=""
                                                        class="avatar-xs rounded-circle acitivity-avatar">
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Bethany Johnson</h6>
                                                    <p class="text-muted mb-2">added a new member to Hybrix dashboard</p>
                                                    <small class="mb-0 text-muted">19 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <div class="avatar-xs acitivity-avatar">
                                                        <div
                                                            class="avatar-title rounded-circle bg-danger-subtle text-danger">
                                                            <i class="ri-shopping-bag-line"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Your order is placed <span
                                                            class="badge bg-danger-subtle text-danger align-middle ms-1">Out
                                                            of
                                                            Delivery</span></h6>
                                                    <p class="text-muted mb-2">These customers can rest assured their order
                                                        has
                                                        been placed.</p>
                                                    <small class="mb-0 text-muted">16 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img :src="avatar7" alt=""
                                                        class="avatar-xs rounded-circle acitivity-avatar">
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Lewis Pratt</h6>
                                                    <p class="text-muted mb-2">They all have something to say beyond the
                                                        words
                                                        on the page. They can come across as casual or neutral, exotic or
                                                        graphic. </p>
                                                    <small class="mb-0 text-muted">22 Oct</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <div class="avatar-xs acitivity-avatar">
                                                        <div class="avatar-title rounded-circle bg-info-subtle text-info">
                                                            <i class="ri-line-chart-line"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Monthly sales report</h6>
                                                    <p class="text-muted mb-2"><span class="text-danger">2 days left</span>
                                                        notification to submit the monthly sales report. <b-link href="#"
                                                            class="link-warning text-decoration-underline">Reports
                                                            Builder</b-link></p>
                                                    <small class="mb-0 text-muted">15 Oct</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item d-flex">
                                                <div class="flex-shrink-0">
                                                    <img :src="avatar8" alt=""
                                                        class="avatar-xs rounded-circle acitivity-avatar">
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">New ticket received <span
                                                            class="badge bg-success-subtle text-success align-middle">Completed</span>
                                                    </h6>
                                                    <p class="text-muted mb-2">User <span
                                                            class="text-secondary">Erica245</span>
                                                        submitted a ticket.</p>
                                                    <small class="mb-0 text-muted">26 Aug</small>
                                                </div>
                                            </div>
                                        </div>
                                    </SimpleBar>
                                </template>
                            </b-offcanvas>

                        </div>
                    </b-card-body><!-- end card-body -->
                    <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                        <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                    </b-card-body>
                    <b-card-body>
                        <pre class="language-markup">
<code>&lt;!-- Backdrop Offcanvas --&gt;
&lt;b-button @click=&quot;defaultOff = true&quot;&gt;Show OffCanvas&lt;/b-button&gt;
&lt;b-offcanvas v-model=&quot;defaultOff&quot; backdrop=&quot;false&quot; &gt;
  &lt;template #header&gt;
    &lt;-- Enter header code here --&gt;
  &lt;/template&gt;
  &lt;template #default&gt;
    &lt;-- Enter body code here --&gt;
  &lt;/template&gt;
&lt;/b-offcanvas&gt;
</code></pre>
                    </b-card-body>
                </b-card><!-- end card -->
            </b-col>
            <!-- end col -->
        </b-row>
        <!-- end row -->
    </Layout>
</template>
