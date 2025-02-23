<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";

import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import react from "../../../../images/learning/react.png";
import shopify from "../../../../images/learning/shopify.png";
import core from "../../../../images/learning/core.png";
import laravel from "../../../../images/learning/laravel.png";

// avatar imgs
import avatar1 from "../../../../images/users/avatar-1.jpg";
import avatar2 from "../../../../images/users/32/avatar-2.jpg";
import avatar3 from "../../../../images/users/32/avatar-3.jpg";
import avatar6 from "../../../../images/users/32/avatar-6.jpg";
import avatar10 from "../../../../images/users/32/avatar-10.jpg";

export default {
    data() {
        return {
            title: "My Courses",
            items: [{
                    text: "Students",
                    href: "/",
                },
                {
                    text: "My Courses",
                    active: true,
                },
            ],
            react,
            shopify,
            core,
            laravel,
            avatar1,
            avatar2,
            avatar3,
            avatar6,
            avatar10,
            data: null,
            config: {
                defaultDate: "today",
                dateFormat: "d M, Y",
                inline: true,
            }
        };
    },
    components: {
        Layout,
        PageHeader,
        flatPickr
    },
};
</script>

<template>
<Layout>
    <PageHeader :title="title" :items="items" />
    <b-row>
        <b-col xl="9" lg="8">
            <b-card no-body>
                <b-card-body class="d-flex gap-3 align-items-center">
                    <b-card-title class="flex-grow-1 mb-0">My Courses <span class="badge bg-dark-subtle text-body align-baseline ms-1">23</span></b-card-title>
                    <div class="flex-shrink-0">
                        <router-link to="/student/subscriptions" type="button" class="btn btn-primary"><i class="bi bi-bag align-baseline me-1"></i> Upgrade Courses</router-link>
                    </div>
                </b-card-body>
            </b-card>
            <b-row>
                <b-col lg="12">
                    <b-card no-body class="overflow-hidden">
                        <b-row class="g-0">
                            <b-col xl="3" md="4">
                                <b-card-body class="bg-info-subtle text-center learning-widgets d-flex align-items-center justify-content-center h-100">
                                    <img :src="react" alt="" class="avatar-lg" />
                                    <img :src="react" alt="" class="effect" />
                                </b-card-body>
                            </b-col>
                            <b-col xl="9" md="8">
                                <b-card-body>
                                    <div class="d-flex mb-3 align-items-center">
                                        <div class="flex-grow-1">
                                            <span class="badge bg-success-subtle text-success">Beginner</span>
                                        </div>
                                        <div class="flex-shrink-0 fs-lg fw-medium">
                                            $425.36
                                        </div>
                                    </div>
                                    <h5 class="text-truncate text-capitalize">
                                        <router-link to="/learning/overview" class="text-reset">Advanced React and Redux</router-link>
                                    </h5>
                                    <p class="text-muted">React Development</p>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-clock align-baseline text-primary me-1"></i> 6 Months</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-student align-middle text-primary me-1"></i> 256</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-graduation-cap align-middle text-primary me-1"></i> 15 Lessons</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-globe-stand align-middle text-primary me-1"></i> English, France</p>
                                        </li>
                                    </ul>
                                </b-card-body>
                                <b-card-body class="border-top border-dashed hstack align-items-center gap-2">
                                    <div class="d-flex align-items-center gap-2 flex-grow-1 position-relative">
                                        <div class="flex-shrink-0">
                                            <img :src="avatar2" alt="" class="avatar-xxs rounded-circle" />
                                        </div>
                                        <h6 class="flex-grow-1 mb-0">
                                            <router-link to="/pages/profile" class="text-reset stretched-link">Ayaan Bowen</router-link>
                                        </h6>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <span class="badge bg-warning-subtle text-warning"><i class="bi bi-star-fill align-baseline me-1"></i> 4.5</span>
                                    </div>
                                </b-card-body>
                                <div class="progress bg-primary-subtle progress-sm rounded-0" data-bs-toggle="tooltip" data-bs-title="74% Completed">
                                    <div class="progress-bar bg-primary" role="progressbar" style="width: 74%" aria-valuenow="74" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
                <b-col lg="12">
                    <b-card no-body class="overflow-hidden">
                        <b-row class="g-0">
                            <b-col xl="3" md="4">
                                <b-card-body class="bg-danger-subtle text-center learning-widgets d-flex align-items-center justify-content-center h-100">
                                    <img :src="laravel" alt="" class="avatar-lg" />
                                    <img :src="laravel" alt="" class="effect" />
                                </b-card-body>
                            </b-col>
                            <b-col xl="9" md="8">
                                <b-card-body>
                                    <div class="d-flex mb-3 align-items-center">
                                        <div class="flex-grow-1">
                                            <span class="badge bg-info-subtle text-info">Advance</span>
                                        </div>
                                        <div class="flex-shrink-0 fs-lg fw-medium">
                                            $264.71
                                        </div>
                                    </div>
                                    <h5 class="text-truncate text-capitalize">
                                        <router-link to="/learning/overview" class="text-reset">Master Laravel for Beginners & Intermediate</router-link>
                                    </h5>
                                    <p class="text-muted">Laravel Development</p>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-clock align-baseline text-primary me-1"></i> 1 Years</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-student align-middle text-primary me-1"></i> 84</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-graduation-cap align-middle text-primary me-1"></i> 57 Lessons</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-globe-stand align-middle text-primary me-1"></i> English</p>
                                        </li>
                                    </ul>
                                </b-card-body>
                                <b-card-body class="border-top border-dashed hstack align-items-center gap-2">
                                    <div class="d-flex align-items-center gap-2 flex-grow-1 position-relative">
                                        <div class="flex-shrink-0">
                                            <img :src="avatar6" alt="" class="avatar-xxs rounded-circle" />
                                        </div>
                                        <h6 class="flex-grow-1 mb-0">
                                            <router-link to="/pages/profile" class="text-reset stretched-link">Ophelia Steuber</router-link>
                                        </h6>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <span class="badge bg-warning-subtle text-warning"><i class="bi bi-star-fill align-baseline me-1"></i> 4.8</span>
                                    </div>
                                </b-card-body>
                                <div class="progress bg-warning-subtle progress-sm rounded-0" data-bs-toggle="tooltip" data-bs-title="53% Completed">
                                    <div class="progress-bar bg-warning" role="progressbar" style="width: 53%" aria-valuenow="53" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
                <b-col lg="12">
                    <b-card no-body class="overflow-hidden">
                        <b-row class="g-0">
                            <b-col xl="3" md="4">
                                <b-card-body class="bg-primary-subtle text-center learning-widgets d-flex align-items-center justify-content-center h-100">
                                    <img :src="core" alt="" class="avatar-lg" />
                                    <img :src="core" alt="" class="effect" />
                                </b-card-body>
                            </b-col>
                            <b-col xl="9" md="8">
                                <b-card-body>
                                    <div class="d-flex mb-3 align-items-center">
                                        <div class="flex-grow-1">
                                            <span class="badge bg-danger-subtle text-danger">Intermediate</span>
                                        </div>
                                        <div class="flex-shrink-0 fs-lg fw-medium">
                                            $249.99
                                        </div>
                                    </div>
                                    <h5 class="text-truncate text-capitalize">
                                        <router-link to="/learning/overview" class="text-reset">Asp.Net Core 7 True Ultimate Guide</router-link>
                                    </h5>
                                    <p class="text-muted">Asp.Net Development</p>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-clock align-baseline text-primary me-1"></i> 8 Years</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-student align-middle text-primary me-1"></i> 321</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-graduation-cap align-middle text-primary me-1"></i> 95 Lessons</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-globe-stand align-middle text-primary me-1"></i> English, France</p>
                                        </li>
                                    </ul>
                                </b-card-body>
                                <b-card-body class="border-top border-dashed hstack align-items-center gap-2">
                                    <div class="d-flex align-items-center gap-2 flex-grow-1 position-relative">
                                        <div class="flex-shrink-0">
                                            <img :src="avatar10" alt="" class="avatar-xxs rounded-circle" />
                                        </div>
                                        <h6 class="flex-grow-1 mb-0">
                                            <router-link to="/pages/profile" class="text-reset stretched-link">Deondre Huel</router-link>
                                        </h6>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <span class="badge bg-warning-subtle text-warning"><i class="bi bi-star-fill align-baseline me-1"></i> 4.7</span>
                                    </div>
                                </b-card-body>
                                <div class="progress bg-success-subtle progress-sm rounded-0" data-bs-toggle="tooltip" data-bs-title="87% Completed">
                                    <div class="progress-bar bg-success" role="progressbar" style="width: 87%" aria-valuenow="87" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
                <b-col lg="12">
                    <b-card no-body class="overflow-hidden">
                        <b-row class="g-0">
                            <b-col xl="3" md="4">
                                <b-card-body class="bg-success-subtle text-center learning-widgets d-flex align-items-center justify-content-center h-100">
                                    <img :src="shopify" alt="" class="avatar-lg" />
                                    <img :src="shopify" alt="" class="effect" />
                                </b-card-body>
                            </b-col>
                            <b-col xl="9" md="8">
                                <b-card-body>
                                    <div class="d-flex mb-3 align-items-center">
                                        <div class="flex-grow-1">
                                            <span class="badge bg-success-subtle text-success">Beginner</span>
                                        </div>
                                        <div class="flex-shrink-0 fs-lg fw-medium">
                                            $134.69
                                        </div>
                                    </div>
                                    <h5 class="text-truncate text-capitalize">
                                        <router-link to="/learning/overview" class="text-reset">The Complete Shopify Dropship course</router-link>
                                    </h5>
                                    <p class="text-muted">Shopify Development</p>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled mb-0">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-clock align-baseline text-primary me-1"></i> 9 Months</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-student align-middle text-primary me-1"></i> 134</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-graduation-cap align-middle text-primary me-1"></i> 36 Lessons</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-globe-stand align-middle text-primary me-1"></i> English, France</p>
                                        </li>
                                    </ul>
                                </b-card-body>
                                <b-card-body class="border-top border-dashed hstack align-items-center gap-2">
                                    <div class="d-flex align-items-center gap-2 flex-grow-1 position-relative">
                                        <div class="flex-shrink-0">
                                            <img :src="avatar3" alt="" class="avatar-xxs rounded-circle" />
                                        </div>
                                        <h6 class="flex-grow-1 mb-0">
                                            <router-link to="/pages/profile" class="text-reset stretched-link">Nelson Schaden</router-link>
                                        </h6>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <span class="badge bg-warning-subtle text-warning"><i class="bi bi-star-fill align-baseline me-1"></i> 4.9</span>
                                    </div>
                                </b-card-body>
                                <div class="progress bg-secondary-subtle progress-sm rounded-0" data-bs-toggle="tooltip" data-bs-title="30% Completed">
                                    <div class="progress-bar bg-secondary" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
            </b-row>
        </b-col>
        <b-col xl="3" lg="4">
            <b-card no-body>
                <b-card-body>
                    <div class="text-center mb-4 pb-2">
                        <img :src="avatar1" alt="" class="avatar-md rounded-circle d-block mx-auto" />
                        <div class="mt-3">
                            <router-link to="/pages/profile">
                                <h5>Josefa Weissna</h5>
                            </router-link>
                            <p class="text-muted mb-0">Student</p>
                        </div>
                    </div>
                    <div class="upcoming-scheduled pt-4">
                        <flat-pickr v-model="date" :config="config" class="form-control d-none"></flat-pickr>
                    </div>
                </b-card-body>
            </b-card>
            <div class="mb-3">
                <b-card-title title-tag="h6">Courses Schedule</b-card-title>
            </div>
            <b-card no-body>
                <b-card-body class="d-flex gap-3">
                    <div class="flex-shrink-0">
                        <div class="avatar-sm border-end border-dashed">
                            <div class="avatar-title bg-body-secondary text-body-secondary p-2 text-center">
                                16 Feb
                            </div>
                        </div>
                    </div>
                    <div class="flex-grow-1">
                        <router-link to="/learning/overview" class="stretched-link">
                            <h6 class="fs-md">React Development</h6>
                        </router-link>
                        <p class="text-muted mb-0"><b>9</b> of 15 Lessons</p>
                    </div>
                    <div class="flex-shrink-0 text-muted">
                        08:54 AM
                    </div>
                </b-card-body>
            </b-card>
            <b-card no-body>
                <b-card-body class="d-flex gap-3">
                    <div class="flex-shrink-0">
                        <div class="avatar-sm border-end border-dashed">
                            <div class="avatar-title bg-body-secondary text-body-secondary p-2 text-center">
                                28 Jan
                            </div>
                        </div>
                    </div>
                    <div class="flex-grow-1">
                        <router-link to="/learning/overview" class="stretched-link">
                            <h6 class="fs-md">Shopify Development</h6>
                        </router-link>
                        <p class="text-muted mb-0"><b>18</b> of 43 Lessons</p>
                    </div>
                    <div class="flex-shrink-0 text-muted">
                        10:49 PM
                    </div>
                </b-card-body>
            </b-card>
            <b-card no-body>
                <b-card-body class="d-flex gap-3">
                    <div class="flex-shrink-0">
                        <div class="avatar-sm border-end border-dashed">
                            <div class="avatar-title bg-body-secondary text-body-secondary p-2 text-center">
                                19 Jan
                            </div>
                        </div>
                    </div>
                    <div class="flex-grow-1">
                        <router-link to="/learning/overview" class="stretched-link">
                            <h6 class="fs-md">Laravel Development</h6>
                        </router-link>
                        <p class="text-muted mb-0"><b>3</b> of 68 Lessons</p>
                    </div>
                    <div class="flex-shrink-0 text-muted">
                        03:24 PM
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</Layout>
</template>
