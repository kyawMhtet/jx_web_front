<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import { CountTo } from "vue3-count-to";

import small4 from "../../../images/small/img-4.jpg";
import avatar1 from "../../../images/users/avatar-1.jpg";

export default {
    data() {
        return {
            title: "Profile",
            items: [
                {
                    text: "Custom UI",
                    href: "/",
                },
                {
                    text: "Profile",
                    active: true,
                },
            ],
            small4,
            avatar1
        };
    },
    components: {
        Layout,
        PageHeader,
        CountTo
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
                            <b-card-title title-tag="h5" class="mb-0">Basic Example</b-card-title>
                        </b-card-header>
                        <b-card-body>
                            <b-card no-body class="border-0 shadow-none mb-0">
                                <b-card-body class="rounded profile-basic pattern">
                                </b-card-body>
                                <b-card-body>
                                    <div class="mt-n5">
                                        <img :src="avatar1" alt=""
                                            class="avatar-lg rounded-circle p-1 mt-n3" />
                                    </div>
                                </b-card-body>
                                <b-card-body class="pt-0">
                                    <b-row class="justify-content-between gy-4">
                                        <b-col xl="5" md="7">
                                            <h5 class="fs-xl">Edward Diana</h5>
                                            <div class="mb-3 text-muted">
                                                <i class="bi bi-geo-alt"></i> Phoenix, USA
                                            </div>
                                            <p>Product visual designer, expert in UI design</p>

                                            <div class="hstack gap-2">
                                                <b-button type="button" variant="primary">Invite to Project</b-button>
                                                <b-button type="button" variant="subtle-info" class="btn-icon"><i
                                                        class="bi bi-chat-left-text"></i></b-button>
                                                <div class="dropdown">
                                                    <b-button variant="subtle-danger" class="btn-icon" type="button"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="bi bi-three-dots-vertical"></i>
                                                    </b-button>
                                                    <ul class="dropdown-menu">
                                                        <li><b-link class="dropdown-item" href="#">Action</b-link></li>
                                                        <li><b-link class="dropdown-item" href="#">Another action</b-link></li>
                                                        <li><b-link class="dropdown-item" href="#">Something else here</b-link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col xl="3" md="5">
                                            <div>
                                                <p class="text-muted fw-medium mb-2">Language Knows</p>
                                                <ul class="list-inline mb-4">
                                                    <li class="list-inline-item">
                                                        <span class="badge bg-info-subtle text-info">English</span>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <span class="badge bg-info-subtle text-info">Russian</span>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <span class="badge bg-info-subtle text-info">Chinese</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div>
                                                <p class="text-muted fw-medium mb-2">Featured Skills</p>
                                                <ul class="d-flex gap-2 flex-wrap list-unstyled mb-0">
                                                    <li>
                                                        <span class="badge bg-secondary-subtle text-secondary">Business
                                                            Marketing</span>
                                                    </li>
                                                    <li>
                                                        <span class="badge bg-secondary-subtle text-secondary">Google Ads
                                                            Management</span>
                                                    </li>
                                                    <li>
                                                        <span class="badge bg-secondary-subtle text-secondary">Social Ads
                                                            Management</span>
                                                    </li>
                                                    <li>
                                                        <span class="badge bg-secondary-subtle text-secondary">Content
                                                            SEO</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                            </b-card>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>

            <b-row>
                <b-col lg="12">
                    <b-card no-body>
                        <b-card-header>
                            <b-card-title title-tag="h5" class="mb-0">Center Profile</b-card-title>
                        </b-card-header>
                        <b-card-body>
                            <b-card no-body class="border-0 shadow-none mb-0">
                                <b-card-body class="rounded profile-basic pattern">
                                </b-card-body>
                                <b-card-body>
                                    <div class="mt-n5 text-center">
                                        <img :src="avatar1" alt=""
                                            class="avatar-lg rounded-circle p-1 mt-n3 mx-auto" />
                                    </div>
                                </b-card-body>
                                <b-card-body class="pt-0">
                                    <b-row class="justify-content-center gy-4">
                                        <b-col lg="5" class="text-center">
                                            <h5 class="fs-xl">Edward Diana</h5>
                                            <div class="mb-3 text-muted">
                                                <i class="bi bi-geo-alt"></i> Phoenix, USA
                                            </div>
                                            <p>Product visual designer, expert in UI design</p>

                                            <div class="hstack gap-2 justify-content-center">
                                                <b-button type="button" variant="primary">Invite to Project</b-button>
                                                <b-button type="button" variant="subtle-info" class="btn-icon"><i
                                                        class="bi bi-chat-left-text"></i></b-button>
                                                <div class="dropdown">
                                                    <b-button variant="subtle-danger" class="btn-icon" type="button"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="bi bi-three-dots-vertical"></i>
                                                    </b-button>
                                                    <ul class="dropdown-menu">
                                                        <li><b-link class="dropdown-item" href="#">Action</b-link></li>
                                                        <li><b-link class="dropdown-item" href="#">Another action</b-link></li>
                                                        <li><b-link class="dropdown-item" href="#">Something else here</b-link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                            </b-card>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>

            <b-row>
                <b-col lg="12">
                    <b-card no-body>
                        <b-card-header>
                            <b-card-title title-tag="h5" class="mb-0">End Profile</b-card-title>
                        </b-card-header>
                        <b-card-body>
                            <b-card no-body class="border-0 shadow-none mb-0">
                                <b-card-body class="rounded profile-basic pattern">
                                </b-card-body>
                                <b-card-body>
                                    <div class="mt-n5 text-end">
                                        <img :src="avatar1" alt=""
                                            class="avatar-lg rounded-circle p-1 mt-n3" />
                                    </div>
                                </b-card-body>
                                <b-card-body class="pt-0">
                                    <b-row class="justify-content-between gy-4">
                                        <b-col xl="3" md="5" class="order-last order-lg-first">
                                            <div class="text-end text-lg-start">
                                                <p class="text-muted fw-medium mb-2">Language Knows</p>
                                                <ul class="list-inline mb-4">
                                                    <li class="list-inline-item">
                                                        <span class="badge bg-info-subtle text-info">English</span>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <span class="badge bg-info-subtle text-info">Russian</span>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <span class="badge bg-info-subtle text-info">Chinese</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="text-end text-lg-start">
                                                <p class="text-muted fw-medium mb-2">Featured Skills</p>
                                                <ul
                                                    class="d-flex gap-2 flex-wrap list-unstyled mb-0 justify-content-end justify-content-lg-start">
                                                    <li>
                                                        <span class="badge bg-secondary-subtle text-secondary">Business
                                                            Marketing</span>
                                                    </li>
                                                    <li>
                                                        <span class="badge bg-secondary-subtle text-secondary">Google Ads
                                                            Management</span>
                                                    </li>
                                                    <li>
                                                        <span class="badge bg-secondary-subtle text-secondary">Social Ads
                                                            Management</span>
                                                    </li>
                                                    <li>
                                                        <span class="badge bg-secondary-subtle text-secondary">Content
                                                            SEO</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </b-col>
                                        <b-col xl="5" md="7" class="text-end">
                                            <h5 class="fs-xl">Edward Diana</h5>
                                            <div class="mb-3 text-muted">
                                                <i class="bi bi-geo-alt"></i> Phoenix, USA
                                            </div>
                                            <p>Product visual designer, expert in UI design</p>

                                            <div class="hstack gap-2 justify-content-end">
                                                <b-button type="button" variant="primary">Invite to Project</b-button>
                                                <b-button type="button" variant="subtle-info" class="btn-icon"><i
                                                        class="bi bi-chat-left-text"></i></b-button>
                                                <div class="dropdown">
                                                    <b-button variant="subtle-danger" class="btn-icon" type="button"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="bi bi-three-dots-vertical"></i>
                                                    </b-button>
                                                    <ul class="dropdown-menu">
                                                        <li><b-link class="dropdown-item" href="#">Action</b-link></li>
                                                        <li><b-link class="dropdown-item" href="#">Another action</b-link></li>
                                                        <li><b-link class="dropdown-item" href="#">Something else here</b-link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                            </b-card>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>

            <b-row>
                <b-col xl="3" md="6">
                    <b-card no-body>
                        <b-card-body>
                            <img :src="small4" alt="" class="w-100 rounded object-cover"
                                height="120" />

                            <div class="text-center">
                                <div class="mt-n4">
                                    <img :src="avatar1" alt=""
                                        class="avatar-md rounded-circle p-1 mt-n2" />
                                </div>
                                <div class="mt-4 border-bottom border-bottom-dashed">
                                    <h5 class="fs-xl">Edward Diana</h5>
                                    <p class="mb-3 text-muted">Marketing Expert</p>
                                </div>
                                <div class="mt-3">
                                    <b-row>
                                        <b-col cols="4">
                                            <div>
                                                <h5>
                                                    <count-to :startVal="0" :duration="5000" :endVal="254"></count-to>
                                                </h5>
                                                <p class="text-muted mb-0">Posts</p>
                                            </div>
                                        </b-col>
                                        <b-col cols="4">
                                            <div>
                                                <h5>
                                                    <count-to :startVal="0" :duration="5000" :endVal="12" suffix="k"></count-to>
                                                </h5>
                                                <p class="text-muted mb-0">Followers</p>
                                            </div>
                                        </b-col>
                                        <b-col cols="4">
                                            <div>
                                                <h5>
                                                    <count-to :startVal="0" :duration="5000" :endVal="3501"></count-to>
                                                </h5>
                                                <p class="text-muted mb-0">Follwing</p>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </div>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-col>
                <b-col xl="3" md="6">
                    <b-card no-body>
                        <b-card-body>
                            <div class="w-100 rounded object-cover bg-secondary" style="height: 120px;"></div>

                            <div class="text-center">
                                <div class="mt-n4">
                                    <img :src="avatar1" alt=""
                                        class="avatar-md rounded-circle p-1 mt-n2" />
                                </div>
                                <div class="mt-4 border-bottom border-bottom-dashed">
                                    <h5 class="fs-xl">Edward Diana</h5>
                                    <p class="mb-3 text-muted">Marketing Expert</p>
                                </div>
                                <div class="mt-3">
                                    <b-row>
                                        <b-col cols="4">
                                            <div>
                                                <h5>
                                                    <count-to :startVal="0" :duration="5000" :endVal="254"></count-to>
                                                </h5>
                                                <p class="text-muted mb-0">Posts</p>
                                            </div>
                                        </b-col>
                                        <b-col cols="4">
                                            <div>
                                                <h5>
                                                    <count-to :startVal="0" :duration="5000" :endVal="12" suffix="k"></count-to>
                                                </h5>
                                                <p class="text-muted mb-0">Followers</p>
                                            </div>
                                        </b-col>
                                        <b-col cols="4">
                                            <div>
                                                <h5>
                                                    <count-to :startVal="0" :duration="5000" :endVal="3501"></count-to>
                                                </h5>
                                                <p class="text-muted mb-0">Follwing</p>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </div>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-col>

                <b-col xl="3" md="6">
                    <b-card no-body>
                        <b-card-body>
                            <div class="w-100 rounded object-cover bg-success-subtle" style="height: 120px;"></div>

                            <div class="text-center">
                                <div class="mt-n4">
                                    <img :src="avatar1" alt=""
                                        class="avatar-md rounded-circle p-1 mt-n2" />
                                </div>
                                <div class="mt-4 border-bottom border-bottom-dashed">
                                    <h5 class="fs-xl">Edward Diana</h5>
                                    <p class="mb-3 text-muted">Marketing Expert</p>
                                </div>
                                <div class="mt-3">
                                    <b-row>
                                        <b-col cols="4">
                                            <div>
                                                <h5>
                                                    <count-to :startVal="0" :duration="5000" :endVal="254"></count-to>
                                                </h5>
                                                <p class="text-muted mb-0">Posts</p>
                                            </div>
                                        </b-col>
                                        <b-col cols="4">
                                            <div>
                                                <h5>
                                                    <count-to :startVal="0" :duration="5000" :endVal="12" suffix="k"></count-to>
                                                </h5>
                                                <p class="text-muted mb-0">Followers</p>
                                            </div>
                                        </b-col>
                                        <b-col cols="4">
                                            <div>
                                                <h5>
                                                    <count-to :startVal="0" :duration="5000" :endVal="3501"></count-to>
                                                </h5>
                                                <p class="text-muted mb-0">Follwing</p>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </div>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-col>

                <b-col xl="3" md="6">
                    <b-card no-body class="border-danger border-opacity-25">
                        <b-card-body>
                            <div class="w-100 rounded object-cover bg-danger-subtle" style="height: 120px;"></div>

                            <div class="text-center">
                                <div class="mt-n4">
                                    <img :src="avatar1" alt=""
                                        class="avatar-md rounded-circle p-1 mt-n2" />
                                </div>
                                <div class="mt-4 border-bottom border-bottom-dashed border-danger border-opacity-25">
                                    <h5 class="fs-xl">Edward Diana</h5>
                                    <p class="mb-3 text-muted">@edward_diana</p>
                                </div>
                                <div class="mt-3">
                                    <b-row>
                                        <b-col cols="4">
                                            <div>
                                                <h5>
                                                    <count-to :startVal="0" :duration="5000" :endVal="254"></count-to>
                                                </h5>
                                                <p class="text-muted mb-0">Posts</p>
                                            </div>
                                        </b-col>
                                        <b-col cols="4">
                                            <div>
                                                <h5>
                                                    <count-to :startVal="0" :duration="5000" :endVal="12" suffix="k"></count-to>
                                                </h5>
                                                <p class="text-muted mb-0">Followers</p>
                                            </div>
                                        </b-col>
                                        <b-col cols="4">
                                            <div>
                                                <h5>
                                                    <count-to :startVal="0" :duration="5000" :endVal="3501"></count-to>
                                                </h5>
                                                <p class="text-muted mb-0">Follwing</p>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </div>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-col>

            </b-row>
</Layout>
</template>

<style scoped>.pattern {
    background-image: url('../../../images/small/img-4.jpg');
    background-size: cover;
}</style>