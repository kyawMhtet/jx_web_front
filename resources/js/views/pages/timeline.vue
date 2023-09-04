<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import small3 from "../../../images/small/img-3.jpg"
import small5 from "../../../images/small/img-5.jpg"
import small7 from "../../../images/small/img-7.jpg"
import small9 from "../../../images/small/img-9.jpg"

// avatar imgs
import avatar1 from "../../../images/users/32/avatar-1.jpg";
import avatar2 from "../../../images/users/32/avatar-2.jpg";
import avatar3 from "../../../images/users/32/avatar-3.jpg";
import avatar5 from "../../../images/users/32/avatar-5.jpg";

export default {
    data() {
        return {
            title: "Timeline",
            items: [{
                    text: "Pages",
                    href: "/",
                },
                {
                    text: "Timeline",
                    active: true,
                },
            ],
            small3,
            small5,
            small7,
            small9,
            avatar1,
            avatar2,
            avatar3,
            avatar5,
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
                    <b-card-title title-tag="h6" class="mb-0">Vertical Timeline 2</b-card-title>
                </b-card-header>
                <b-card-body>
                    <div class="acitivity-timeline acitivity-main">
                        <div class="acitivity-item d-flex">
                            <div class="flex-shrink-0">
                                <img :src="avatar2" alt="" class="avatar-xs rounded-circle acitivity-avatar" />
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h6 class="mb-1 lh-base">Purchased by James Price</h6>
                                <p class="text-muted mb-2">Product noise evolve smartwatch </p>
                                <small class="mb-0 text-muted">05:57 AM Today</small>
                            </div>
                        </div>
                        <div class="acitivity-item py-3 d-flex">
                            <div class="flex-shrink-0">
                                <img :src="avatar1" alt="" class="avatar-xs rounded-circle acitivity-avatar" />
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h6 class="mb-1 lh-base">Natasha Carey have liked the products</h6>
                                <p class="text-muted mb-2">Allow users to like products in your WooCommerce store.</p>
                                <small class="mb-0 text-muted">25 Dec, 2022</small>
                            </div>
                        </div>
                        <div class="acitivity-item py-3 d-flex">
                            <div class="flex-shrink-0">
                                <img :src="avatar3" alt="" class="avatar-xs rounded-circle acitivity-avatar" />
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h6 class="mb-1 lh-base">Today offers by
                                    <router-link to="/ecommerce/seller-overview" class="link-secondary">Digitech
                                        Galaxy</router-link>
                                </h6>
                                <p class="text-muted mb-2">Offer is valid on orders of $230 Or above for selected
                                    products only.</p>
                                <small class="mb-0 text-muted">12 Dec, 2022</small>
                            </div>
                        </div>
                        <div class="acitivity-item py-3 d-flex">
                            <div class="flex-shrink-0">
                                <img :src="avatar2" alt="" class="avatar-xs rounded-circle acitivity-avatar" />
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h6 class="mb-1 lh-base">Favorited Product</h6>
                                <p class="text-muted mb-2">Esther James have favorited product.</p>
                                <small class="mb-0 text-muted">25 Nov, 2022</small>
                            </div>
                        </div>
                        <div class="acitivity-item py-3 d-flex">
                            <div class="flex-shrink-0">
                                <img :src="avatar2" alt="" class="avatar-xs rounded-circle acitivity-avatar" />
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h6 class="mb-1 lh-base">Flash sale starting <span class="text-primary">Tomorrow.</span>
                                </h6>
                                <p class="text-muted mb-2">Flash sale by <b-link href="#" class="link-secondary fw-medium">Zoetic Fashion</b-link>
                                </p>
                                <small class="mb-0 text-muted">22 Oct, 2022</small>
                            </div>
                        </div>
                        <div class="acitivity-item d-flex">
                            <div class="flex-shrink-0">
                                <img :src="avatar5" alt="" class="avatar-xs rounded-circle acitivity-avatar" />
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h6 class="mb-1 lh-base">Monthly sales report</h6>
                                <p class="text-muted mb-2"><span class="text-danger">2 days left</span> notification to
                                    submit the monthly sales report. <b-link href="#" class="link-warning text-decoration-underline">Reports Builder</b-link>
                                </p>
                                <small class="mb-0 text-muted">15 Oct, 2022</small>
                            </div>
                        </div>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col lg="6">
            <b-card no-body>
                <b-card-header>
                    <b-card-title title-tag="h6" class="e mb-0">Vertical Timeline</b-card-title>
                </b-card-header>
                <b-card-body>
                    <ul class="acitivity-timeline-2 list-unstyled mb-0">
                        <li>
                            <h6 class="fs-md">Purchase by James Price</h6>
                            <p>09:24 PM</p>
                            <p class="mb-0">Product noise evolve smartwatch</p>
                        </li>
                        <li>
                            <h6 class="fs-md">New ticket received <span class="badge text-bg-info align-middle ms-1">New</span></h6>
                            <p class="mb-3">4 days ago</p>
                            <p class="text-muted mb-0">User <span class="text-secondary">Erica245</span> submitted a
                                ticket</p>
                        </li>
                        <li>
                            <h6 class="fs-md">Adding a new event with attachments</h6>
                            <p class="mb-3">30 days ago</p>
                            <div class="d-inline-flex gap-2">
                                <b-row class="g-3">
                                    <b-col cols="auto">
                                        <div class="d-flex position-relative gap-2 border border-dashed p-2 rounded">
                                            <div class="flex-shrink-0">
                                                <i class="bi bi-file-earmark-image fs-xl text-danger"></i>
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <b-link href="#" class="stretched-link">
                                                    <h6>UI/UX design</h6>
                                                </b-link>
                                                <small>685 KB</small>
                                            </div>
                                        </div>
                                    </b-col>
                                    <b-col cols="auto">
                                        <div class="d-flex position-relative gap-2 border border-dashed p-2 rounded ">
                                            <div class="flex-shrink-0">
                                                <i class="bi bi-file-pdf fs-xl text-info"></i>
                                            </div>
                                            <div class="flex-grow-1 ms-2">
                                                <b-link href="#" class="stretched-link">
                                                    <h6>Steex Invoice</h6>
                                                </b-link>
                                                <small>342 KB</small>
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>
                        </li>
                        <li>
                            <h6 class="fs-md">Templates layout upload</h6>
                            <p class="mb-3">1 week ago</p>
                            <p class="text-muted fst-italic">
                                Powerful, clean & modern responsive bootstrap 5 admin template. The maximum file size
                                for uploads in this demo :
                            </p>
                            <div class="d-flex flex-wrap border border-dashed gap-2 p-2 rounded">
                                <img :src="small3" alt="" class="avatar-md rounded" />
                                <img :src="small5" alt="" class="avatar-md rounded" />
                                <img :src="small7" alt="" class="avatar-md rounded" />
                                <img :src="small9" alt="" class="avatar-md rounded" />
                            </div>

                        </li>
                    </ul>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</Layout>
</template>
