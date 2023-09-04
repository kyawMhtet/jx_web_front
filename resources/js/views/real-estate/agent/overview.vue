<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";

import {
    SimpleBar
} from "simplebar-vue3";
import {
    agentOverviewChart
} from "../chartsData"

// property
import rImg1 from "../../../../images/real-estate/img-01.jpg";
import rImg2 from "../../../../images/real-estate/img-02.jpg";
import rImg3 from "../../../../images/real-estate/img-03.jpg";
import rImg4 from "../../../../images/real-estate/img-04.jpg";
import rImg5 from "../../../../images/real-estate/img-05.jpg";
import rImg6 from "../../../../images/real-estate/img-06.jpg";
import rImg7 from "../../../../images/real-estate/img-07.jpg";
import rImg8 from "../../../../images/real-estate/img-08.jpg";

// avatar imgs
import avatar1 from "../../../../images/users/avatar-1.jpg";
import avatar2 from "../../../../images/users/32/avatar-2.jpg";

export default {
    data() {
        return {
            title: "Overview",
            items: [{
                    text: "Agents",
                    href: "/",
                },
                {
                    text: "Overview",
                    active: true,
                },
            ],
            rImg1,
            rImg2,
            rImg3,
            rImg4,
            rImg5,
            rImg6,
            rImg7,
            rImg8,
            avatar1,
            avatar2,
            agentOverviewChart: agentOverviewChart
        };
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
        <b-col xxl="9">
            <b-card no-body>
                <b-card-header class="d-flex align-items-center gap-2">
                    <b-card-title title-tag="h5" class="flex-grow-1 mb-0">Property Overview</b-card-title>
                    <div class="flex-shrink-0">
                        <b-button type="button" variant="subtle-secondary" size="sm" class="me-1">
                            ALL
                        </b-button>
                        <b-button type="button" variant="secondary" size="sm" class="me-1">
                            1M
                        </b-button>
                        <b-button type="button" variant="subtle-secondary" size="sm" class="me-1">
                            6M
                        </b-button>
                        <b-button type="button" variant="subtle-secondary" size="sm">
                            1Y
                        </b-button>
                    </div>
                </b-card-header>
                <b-card-body class="ps-1">
                    <apexchart class="apex-charts" height="400" dir="ltr" :series="agentOverviewChart.series" :options="agentOverviewChart.chartOptions"> </apexchart>
                </b-card-body>
            </b-card>

            <b-row class="justify-content-between align-items-center mb-4">
                <b-col cols="4">
                    <b-card-title title-tag="h5" class="mb-0">Active Listing</b-card-title>
                </b-col>
                <b-col cols="auto">
                    <div class="nav nav-pills gap-2" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <b-button class="active btn-icon" variant="subtle-secondary" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"><i class="bi bi-grid"></i></b-button>
                        <b-button class="btn-icon" variant="subtle-secondary" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i class="bi bi-list-task"></i></b-button>
                    </div>
                </b-col>
            </b-row>
            <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                    <b-row>
                        <b-col xxl="3" md="6">
                            <b-card no-body class="real-estate-grid-widgets card-animate">
                                <b-card-body class="p-2">
                                    <img :src="rImg1" alt="" class="img-fluid rounded" />
                                    <b-button type="button" variant="subtle-warning" size="sm" class="custom-toggle btn-icon active" data-bs-toggle="button">
                                        <span class="icon-on"><i class="bi bi-star"></i></span>
                                        <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                                    </b-button>
                                    <div class="dropdown dropdown-real-estate">
                                        <b-button variant="light" size="sm" class="btn-icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </b-button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <b-link class="dropdown-item" href="#"><i class="bi bi-pencil-square me-1 align-baseline"></i> Edit</b-link>
                                            </li>
                                            <li>
                                                <b-link class="dropdown-item" href="#"><i class="bi bi-trash3 me-1 align-baseline"></i> Delete</b-link>
                                            </li>
                                        </ul>
                                    </div>
                                </b-card-body>
                                <b-card-body class="p-3">
                                    <p class="text-muted float-end mb-0"><i class="bi bi-star text-warning align-baseline me-1"></i> 4.5
                                    </p>
                                    <span class="badge bg-danger-subtle text-danger fs-xxs mb-3"><i class="bi bi-house-door align-baseline me-1"></i> Villa</span>
                                    <b-link href="#!">
                                        <h6 class="fs-lg text-capitalize text-truncate">the Country House</h6>
                                    </b-link>
                                    <p class="text-muted"><i class="bi bi-geo-alt align-baseline me-1"></i> West Midlands, United
                                        Kingdom</p>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 2
                                                Bedroom</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 1
                                                Bathroom</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 1458
                                                sqft</p>
                                        </li>
                                    </ul>
                                    <div class="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between gap-3">
                                        <h5 class="mb-0">$2451.39</h5>
                                        <b-link href="#!" class="link-effect">Read More <i class="bi bi-chevron-right align-baseline ms-1"></i></b-link>
                                    </div>
                                </b-card-body>
                            </b-card>
                        </b-col>
                        <b-col xxl="3" md="6">
                            <b-card no-body class="real-estate-grid-widgets card-animate">
                                <b-card-body class="p-2">
                                    <img :src="rImg2" alt="" class="img-fluid rounded" />
                                    <b-button type="button" variant="subtle-warning" size="sm" class="custom-toggle btn-icon" data-bs-toggle="button">
                                        <span class="icon-on"><i class="bi bi-star"></i></span>
                                        <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                                    </b-button>
                                    <div class="dropdown dropdown-real-estate">
                                        <b-button variant="light" size="sm" class="btn-icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </b-button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <b-link class="dropdown-item" href="#"><i class="bi bi-pencil-square me-1 align-baseline"></i> Edit</b-link>
                                            </li>
                                            <li>
                                                <b-link class="dropdown-item" href="#"><i class="bi bi-trash3 me-1 align-baseline"></i> Delete</b-link>
                                            </li>
                                        </ul>
                                    </div>
                                </b-card-body>
                                <b-card-body class="p-3">
                                    <p class="text-muted float-end mb-0"><i class="bi bi-star text-warning align-baseline me-1"></i> 4.5
                                    </p>
                                    <span class="badge bg-success-subtle text-success fs-xxs mb-3"><i class="bi bi-buildings align-baseline me-1"></i> Residency</span>
                                    <b-link href="#!">
                                        <h6 class="fs-lg text-capitalize text-truncate">Classic White House</h6>
                                    </b-link>
                                    <p class="text-muted"><i class="bi bi-geo-alt align-baseline me-1"></i> Baden-Württemberg, Germany
                                    </p>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 3
                                                Bedroom</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 2
                                                Bathroom</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 1324
                                                sqft</p>
                                        </li>
                                    </ul>
                                    <div class="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between gap-3">
                                        <h5 class="mb-0">$3698.99</h5>
                                        <b-link href="#!" class="link-effect">Read More <i class="bi bi-chevron-right align-baseline ms-1"></i></b-link>
                                    </div>
                                </b-card-body>
                            </b-card>
                        </b-col>
                        <b-col xxl="3" md="6">
                            <b-card no-body class="real-estate-grid-widgets card-animate">
                                <b-card-body class="p-2">
                                    <img :src="rImg3" alt="" class="img-fluid rounded" />
                                    <b-button type="button" variant="subtle-warning" size="sm" class="custom-toggle btn-icon" data-bs-toggle="button">
                                        <span class="icon-on"><i class="bi bi-star"></i></span>
                                        <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                                    </b-button>
                                    <div class="dropdown dropdown-real-estate">
                                        <b-button variant="light" size="sm" class="btn-icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </b-button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <b-link class="dropdown-item" href="#"><i class="bi bi-pencil-square me-1 align-baseline"></i> Edit</b-link>
                                            </li>
                                            <li>
                                                <b-link class="dropdown-item" href="#"><i class="bi bi-trash3 me-1 align-baseline"></i> Delete</b-link>
                                            </li>
                                        </ul>
                                    </div>
                                </b-card-body>
                                <b-card-body class="p-3">
                                    <p class="text-muted float-end mb-0"><i class="bi bi-star text-warning align-baseline me-1"></i> 4.7
                                    </p>
                                    <span class="badge bg-info-subtle text-info fs-xxs mb-3"><i class="bi bi-building align-baseline me-1"></i> Apartment</span>
                                    <b-link href="#!">
                                        <h6 class="fs-lg text-capitalize text-truncate">Vintage Apartment</h6>
                                    </b-link>
                                    <p class="text-muted"><i class="bi bi-geo-alt align-baseline me-1"></i> Minas Gerais, Brazil</p>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 2
                                                Bedroom</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 1
                                                Bathroom</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 1025
                                                sqft</p>
                                        </li>
                                    </ul>
                                    <div class="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between gap-3">
                                        <h5 class="mb-0">$1249.99</h5>
                                        <b-link href="#!" class="link-effect">Read More <i class="bi bi-chevron-right align-baseline ms-1"></i></b-link>
                                    </div>
                                </b-card-body>
                            </b-card>
                        </b-col>
                        <b-col xxl="3" md="6">
                            <b-card no-body class="real-estate-grid-widgets card-animate">
                                <b-card-body class="p-2">
                                    <img :src="rImg4" alt="" class="img-fluid rounded" />
                                    <b-button type="button" variant="subtle-warning" size="sm" class="custom-toggle btn-icon active" data-bs-toggle="button">
                                        <span class="icon-on"><i class="bi bi-star"></i></span>
                                        <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                                    </b-button>
                                    <div class="dropdown dropdown-real-estate">
                                        <b-button variant="light" size="sm" class="btn-icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </b-button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <b-link class="dropdown-item" href="#"><i class="bi bi-pencil-square me-1 align-baseline"></i> Edit</b-link>
                                            </li>
                                            <li>
                                                <b-link class="dropdown-item" href="#"><i class="bi bi-trash3 me-1 align-baseline"></i> Delete</b-link>
                                            </li>
                                        </ul>
                                    </div>
                                </b-card-body>
                                <b-card-body class="p-3">
                                    <p class="text-muted float-end mb-0"><i class="bi bi-star text-warning align-baseline me-1"></i> 4.9
                                    </p>
                                    <span class="badge bg-danger-subtle text-danger fs-xxs mb-3"><i class="bi bi-house-door align-baseline me-1"></i> Villa</span>
                                    <b-link href="#!">
                                        <h6 class="fs-lg text-capitalize text-truncate">Whitepace Vintage Villa</h6>
                                    </b-link>
                                    <p class="text-muted"><i class="bi bi-geo-alt align-baseline me-1"></i> Cantabria, Spain</p>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 4
                                                Bedroom</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 2
                                                Bathroom</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 1754
                                                sqft</p>
                                        </li>
                                    </ul>
                                    <div class="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between gap-3">
                                        <h5 class="mb-0">$3495.76</h5>
                                        <b-link href="#!" class="link-effect">Read More <i class="bi bi-chevron-right align-baseline ms-1"></i></b-link>
                                    </div>
                                </b-card-body>
                            </b-card>
                        </b-col>
                        <b-col xxl="3" md="6">
                            <b-card no-body class="real-estate-grid-widgets card-animate">
                                <b-card-body class="p-2">
                                    <img :src="rImg5" alt="" class="img-fluid rounded" />
                                    <b-button type="button" variant="subtle-warning" size="sm" class="custom-toggle btn-icon" data-bs-toggle="button">
                                        <span class="icon-on"><i class="bi bi-star"></i></span>
                                        <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                                    </b-button>
                                    <div class="dropdown dropdown-real-estate">
                                        <b-button variant="light" size="sm" class="btn-icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </b-button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <b-link class="dropdown-item" href="#"><i class="bi bi-pencil-square me-1 align-baseline"></i> Edit</b-link>
                                            </li>
                                            <li>
                                                <b-link class="dropdown-item" href="#"><i class="bi bi-trash3 me-1 align-baseline"></i> Delete</b-link>
                                            </li>
                                        </ul>
                                    </div>
                                </b-card-body>
                                <b-card-body class="p-3">
                                    <p class="text-muted float-end mb-0"><i class="bi bi-star text-warning align-baseline me-1"></i> 4.4
                                    </p>
                                    <span class="badge bg-success-subtle text-success fs-xxs mb-3"><i class="bi bi-buildings align-baseline me-1"></i> Residency</span>
                                    <b-link href="#!">
                                        <h6 class="fs-lg text-capitalize text-truncate">Duplex square valley</h6>
                                    </b-link>
                                    <p class="text-muted"><i class="bi bi-geo-alt align-baseline me-1"></i> Distrito Federal, Brazil</p>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 3
                                                Bedroom</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 2
                                                Bathroom</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 1596
                                                sqft</p>
                                        </li>
                                    </ul>
                                    <div class="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between gap-3">
                                        <h5 class="mb-0">$2579.31</h5>
                                        <b-link href="#!" class="link-effect">Read More <i class="bi bi-chevron-right align-baseline ms-1"></i></b-link>
                                    </div>
                                </b-card-body>
                            </b-card>
                        </b-col>
                        <b-col xxl="3" md="6">
                            <b-card no-body class="real-estate-grid-widgets card-animate">
                                <b-card-body class="p-2">
                                    <img :src="rImg6" alt="" class="img-fluid rounded" />
                                    <b-button type="button" variant="subtle-warning" size="sm" class="custom-toggle btn-icon active" data-bs-toggle="button">
                                        <span class="icon-on"><i class="bi bi-star"></i></span>
                                        <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                                    </b-button>
                                    <div class="dropdown dropdown-real-estate">
                                        <b-button variant="light" size="sm" class="btn-icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </b-button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <b-link class="dropdown-item" href="#"><i class="bi bi-pencil-square me-1 align-baseline"></i> Edit</b-link>
                                            </li>
                                            <li>
                                                <b-link class="dropdown-item" href="#"><i class="bi bi-trash3 me-1 align-baseline"></i> Delete</b-link>
                                            </li>
                                        </ul>
                                    </div>
                                </b-card-body>
                                <b-card-body class="p-3">
                                    <p class="text-muted float-end mb-0"><i class="bi bi-star text-warning align-baseline me-1"></i> 4.8
                                    </p>
                                    <span class="badge bg-danger-subtle text-danger fs-xxs mb-3"><i class="bi bi-house-door align-baseline me-1"></i> Villa</span>
                                    <b-link href="#!">
                                        <h6 class="fs-lg text-capitalize text-truncate">Crystal House</h6>
                                    </b-link>
                                    <p class="text-muted"><i class="bi bi-geo-alt align-baseline me-1"></i> Guipuzcua, Spain</p>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 2
                                                Bedroom</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 1
                                                Bathroom</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 1039
                                                sqft</p>
                                        </li>
                                    </ul>
                                    <div class="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between gap-3">
                                        <h5 class="mb-0">$1249.99</h5>
                                        <b-link href="#!" class="link-effect">Read More <i class="bi bi-chevron-right align-baseline ms-1"></i></b-link>
                                    </div>
                                </b-card-body>
                            </b-card>
                        </b-col>
                        <b-col xxl="3" md="6">
                            <b-card no-body class="real-estate-grid-widgets card-animate">
                                <b-card-body class="p-2">
                                    <img :src="rImg7" alt="" class="img-fluid rounded" />
                                    <b-button type="button" variant="subtle-warning" size="sm" class="custom-toggle btn-icon active" data-bs-toggle="button">
                                        <span class="icon-on"><i class="bi bi-star"></i></span>
                                        <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                                    </b-button>
                                    <div class="dropdown dropdown-real-estate">
                                        <b-button variant="light" size="sm" class="btn-icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </b-button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <b-link class="dropdown-item" href="#"><i class="bi bi-pencil-square me-1 align-baseline"></i> Edit</b-link>
                                            </li>
                                            <li>
                                                <b-link class="dropdown-item" href="#"><i class="bi bi-trash3 me-1 align-baseline"></i> Delete</b-link>
                                            </li>
                                        </ul>
                                    </div>
                                </b-card-body>
                                <b-card-body class="p-3">
                                    <p class="text-muted float-end mb-0"><i class="bi bi-star text-warning align-baseline me-1"></i> 4.5
                                    </p>
                                    <span class="badge bg-danger-subtle text-danger fs-xxs mb-3"><i class="bi bi-house-door align-baseline me-1"></i> Villa</span>
                                    <b-link href="#!">
                                        <h6 class="fs-lg text-capitalize text-truncate">Swimming pool side of the residential Ascot home.</h6>
                                    </b-link>
                                    <p class="text-muted"><i class="bi bi-geo-alt align-baseline me-1"></i> Estado de Mexico, Mexico</p>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 4
                                                Bedroom</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 2
                                                Bathroom</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 1145
                                                sqft</p>
                                        </li>
                                    </ul>
                                    <div class="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between gap-3">
                                        <h5 class="mb-0">$1452.39</h5>
                                        <b-link href="#!" class="link-effect">Read More <i class="bi bi-chevron-right align-baseline ms-1"></i></b-link>
                                    </div>
                                </b-card-body>
                            </b-card>
                        </b-col>
                        <b-col xxl="3" md="6">
                            <b-card no-body class="real-estate-grid-widgets card-animate">
                                <b-card-body class="p-2">
                                    <img :src="rImg8" alt="" class="img-fluid rounded" />
                                    <b-button type="button" variant="subtle-warning" size="sm" class="custom-toggle btn-icon active" data-bs-toggle="button">
                                        <span class="icon-on"><i class="bi bi-star"></i></span>
                                        <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                                    </b-button>
                                    <div class="dropdown dropdown-real-estate">
                                        <b-button variant="light" size="sm" class="btn-icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </b-button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <b-link class="dropdown-item" href="#"><i class="bi bi-pencil-square me-1 align-baseline"></i> Edit</b-link>
                                            </li>
                                            <li>
                                                <b-link class="dropdown-item" href="#"><i class="bi bi-trash3 me-1 align-baseline"></i> Delete</b-link>
                                            </li>
                                        </ul>
                                    </div>
                                </b-card-body>
                                <b-card-body class="p-3">
                                    <p class="text-muted float-end mb-0"><i class="bi bi-star text-warning align-baseline me-1"></i> 4.9
                                    </p>
                                    <span class="badge bg-info-subtle text-info fs-xxs mb-3"><i class="bi bi-building align-baseline me-1"></i> Apartment</span>
                                    <b-link href="#!">
                                        <h6 class="fs-lg text-capitalize text-truncate">Small house on an autumn’s day</h6>
                                    </b-link>
                                    <p class="text-muted"><i class="bi bi-geo-alt align-baseline me-1"></i> West Midland, United Kingdom
                                    </p>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 4
                                                Bedroom</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 2
                                                Bathroom</p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 1796
                                                sqft</p>
                                        </li>
                                    </ul>
                                    <div class="border-top border-dashed mt-3 pt-3 d-flex align-items-center justify-content-between gap-3">
                                        <h5 class="mb-0">$3895.39</h5>
                                        <b-link href="#!" class="link-effect">Read More <i class="bi bi-chevron-right align-baseline ms-1"></i></b-link>
                                    </div>
                                </b-card-body>
                            </b-card>
                        </b-col>
                    </b-row>

                    <b-row class="align-items-center mb-3">
                        <b-col cols="sm">
                            <div class="text-muted text-center text-sm-start">
                                Showing <span class="fw-semibold">8</span> of <span class="fw-semibold">15</span> Results
                            </div>
                        </b-col>
                        <b-col sm="auto" class="mt-3 mt-sm-0">
                            <div class="pagination-wrap hstack justify-content-center gap-2">
                                <b-link class="page-item pagination-prev disabled" href="#">
                                    Previous
                                </b-link>
                                <ul class="pagination listjs-pagination mb-0">
                                    <li class="active">
                                        <b-link class="page" href="#" data-i="1" data-page="10">1</b-link>
                                    </li>
                                    <li>
                                        <b-link class="page" href="#" data-i="2" data-page="10">2</b-link>
                                    </li>
                                </ul>
                                <b-link class="page-item pagination-next" href="#">
                                    Next
                                </b-link>
                            </div>
                        </b-col>
                    </b-row>
                </div>
                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                    <b-row>
                        <b-col lg="12" md="6">
                            <b-card no-body>
                                <b-card-body>
                                    <b-row class="gy-3">
                                        <b-col xxl="2" lg="3">
                                            <div class="position-relative">
                                                <img :src="rImg1" alt="" class="img-fluid rounded h-100" />
                                                <div class="position-absolute bottom-0 start-0 m-2">
                                                    <span class="badge bg-white text-danger fs-xxs"><i class="bi bi-house-door align-baseline me-1"></i> Villa</span>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col xxl="7" lg="6">
                                            <div class="d-flex flex-column h-100">
                                                <div>
                                                    <h6 class="fs-lg text-capitalize text-truncate">
                                                        <b-link href="#!" class="text-reset">the Country
                                                            House</b-link>
                                                    </h6>
                                                    <p class="text-muted"><i class="bi bi-geo-alt align-baseline me-1"></i> West Midlands,
                                                        United Kingdom</p>
                                                </div>
                                                <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                                    <li>
                                                        <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 2
                                                            Bedroom</p>
                                                    </li>
                                                    <li>
                                                        <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 1
                                                            Bathroom</p>
                                                    </li>
                                                    <li>
                                                        <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i>
                                                            1458 sqft</p>
                                                    </li>
                                                </ul>
                                                <p class="text-muted mb-0">Agent: <b>Jerry Emard</b></p>
                                            </div>
                                        </b-col>
                                        <b-col lg="3">
                                            <div class="d-flex flex-lg-column justify-content-between justify-content-lg-start text-lg-end gap-3 h-100">
                                                <h5 class="mb-0">$2451.39</h5>
                                                <div class="mt-auto">
                                                    <b-link href="#!" class="link-effect">Read More <i class="bi bi-chevron-right align-baseline ms-1"></i></b-link>
                                                </div>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                            </b-card>
                        </b-col>
                        <b-col lg="12" md="6">
                            <b-card no-body>
                                <b-card-body>
                                    <b-row class="gy-3">
                                        <b-col xxl="2" lg="3">
                                            <div class="position-relative">
                                                <img :src="rImg2" alt="" class="img-fluid rounded h-100" />
                                                <div class="position-absolute bottom-0 start-0 m-2">
                                                    <span class="badge bg-white text-success fs-xxs"><i class="bi bi-buildings align-baseline me-1"></i> Residency</span>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col xxl="7" lg="6">
                                            <div class="d-flex flex-column h-100">
                                                <div>
                                                    <h6 class="fs-lg text-capitalize text-truncate">
                                                        <b-link href="#!" class="text-reset">Classic
                                                            White House</b-link>
                                                    </h6>
                                                    <p class="text-muted"><i class="bi bi-geo-alt align-baseline me-1"></i> Baden-Württemberg,
                                                        Germany</p>
                                                </div>
                                                <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                                    <li>
                                                        <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 3
                                                            Bedroom</p>
                                                    </li>
                                                    <li>
                                                        <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 2
                                                            Bathroom</p>
                                                    </li>
                                                    <li>
                                                        <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i>
                                                            1324 sqft</p>
                                                    </li>
                                                </ul>
                                                <p class="text-muted mb-0">Agent: <b>Jerry Emard</b></p>
                                            </div>
                                        </b-col>
                                        <b-col lg="3">
                                            <div class="d-flex flex-lg-column justify-content-between justify-content-lg-start text-lg-end gap-3 h-100">
                                                <h5 class="mb-0">$3698.99</h5>
                                                <div class="mt-auto">
                                                    <b-link href="#!" class="link-effect">Read More <i class="bi bi-chevron-right align-baseline ms-1"></i></b-link>
                                                </div>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                            </b-card>
                        </b-col>
                        <b-col lg="12" md="6">
                            <b-card no-body>
                                <b-card-body>
                                    <b-row class="gy-3">
                                        <b-col xxl="2" lg="3">
                                            <div class="position-relative">
                                                <img :src="rImg3" alt="" class="img-fluid rounded h-100" />
                                                <div class="position-absolute bottom-0 start-0 m-2">
                                                    <span class="badge bg-white text-info fs-xxs"><i class="bi bi-building align-baseline me-1"></i> Apartment</span>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col xxl="7" lg="6">
                                            <div class="d-flex flex-column h-100">
                                                <div>
                                                    <h6 class="fs-lg text-capitalize text-truncate">
                                                        <b-link href="#!" class="text-reset">Vintage
                                                            Apartment</b-link>
                                                    </h6>
                                                    <p class="text-muted"><i class="bi bi-geo-alt align-baseline me-1"></i> Minas Gerais, Brazil
                                                    </p>
                                                </div>
                                                <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                                    <li>
                                                        <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 2
                                                            Bedroom</p>
                                                    </li>
                                                    <li>
                                                        <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 1
                                                            Bathroom</p>
                                                    </li>
                                                    <li>
                                                        <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i>
                                                            1025 sqft</p>
                                                    </li>
                                                </ul>
                                                <p class="text-muted mb-0">Agent: <b>Jerry Emard</b></p>
                                            </div>
                                        </b-col>
                                        <b-col lg="3">
                                            <div class="d-flex flex-lg-column justify-content-between justify-content-lg-start text-lg-end gap-3 h-100">
                                                <h5 class="mb-0">$1249.99</h5>
                                                <div class="mt-auto">
                                                    <b-link href="#!" class="link-effect">Read More <i class="bi bi-chevron-right align-baseline ms-1"></i></b-link>
                                                </div>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                            </b-card>
                        </b-col>
                        <b-col lg="12" md="6">
                            <b-card no-body>
                                <b-card-body>
                                    <b-row class="gy-3">
                                        <b-col xxl="2" lg="3">
                                            <div class="position-relative">
                                                <img :src="rImg4" alt="" class="img-fluid rounded h-100" />
                                                <div class="position-absolute bottom-0 start-0 m-2">
                                                    <span class="badge bg-white text-danger fs-xxs"><i class="bi bi-house-door align-baseline me-1"></i> Villa</span>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col xxl="7" lg="6">
                                            <div class="d-flex flex-column h-100">
                                                <div>
                                                    <h6 class="fs-lg text-capitalize text-truncate">
                                                        <b-link href="#!" class="text-reset">Whitespace
                                                            Vintage Villa</b-link>
                                                    </h6>
                                                    <p class="text-muted"><i class="bi bi-geo-alt align-baseline me-1"></i> Cantabria, Spain</p>
                                                </div>
                                                <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                                    <li>
                                                        <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 4
                                                            Bedroom</p>
                                                    </li>
                                                    <li>
                                                        <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 2
                                                            Bathroom</p>
                                                    </li>
                                                    <li>
                                                        <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i>
                                                            1754 sqft</p>
                                                    </li>
                                                </ul>
                                                <p class="text-muted mb-0">Agent: <b>Jerry Emard</b></p>
                                            </div>
                                        </b-col>
                                        <b-col lg="3">
                                            <div class="d-flex flex-lg-column justify-content-between justify-content-lg-start text-lg-end gap-3 h-100">
                                                <h5 class="mb-0">$3495.76</h5>
                                                <div class="mt-auto">
                                                    <b-link href="#!" class="link-effect">Read More <i class="bi bi-chevron-right align-baseline ms-1"></i></b-link>
                                                </div>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                            </b-card>
                        </b-col>
                    </b-row>

                    <b-row class="align-items-center justify-content-between text-center text-sm-start mb-3">
                        <b-col cols="sm">
                            <div class="text-muted">
                                Showing <span class="fw-semibold">4</span> of <span class="fw-semibold">6</span> Results
                            </div>
                        </b-col>
                        <b-col sm="auto" class="mt-3 mt-sm-0">
                            <div class="pagination-wrap hstack gap-2">
                                <b-link class="page-item pagination-prev disabled" href="#">
                                    Previous
                                </b-link>
                                <ul class="pagination listjs-pagination mb-0">
                                    <li class="active">
                                        <b-link class="page" href="#" data-i="1" data-page="10">1</b-link>
                                    </li>
                                    <li>
                                        <b-link class="page" href="#" data-i="2" data-page="10">2</b-link>
                                    </li>
                                </ul>
                                <b-link class="page-item pagination-next" href="#">
                                    Next
                                </b-link>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </div>
        </b-col>
        <b-col xxl="3">
            <b-row>
                <b-col lg="12">
                    <b-card no-body>
                        <b-card-body>
                            <div class="d-flex align-items-center mb-4">
                                <div class="flex-grow-1">
                                    <b-button type="button" variant="subtle-warning" size="sm" class="custom-toggle btn-icon" data-bs-toggle="button">
                                        <span class="icon-on"><i class="bi bi-star"></i></span>
                                        <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                                    </b-button>
                                </div>
                                <div class="flex-shrink-0">
                                    <div class="dropdown">
                                        <b-button variant="light" size="sm" class="btn-icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </b-button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <b-link class="dropdown-item" href="#"><i class="bi bi-pencil-square me-1 align-baseline"></i> Edit</b-link>
                                            </li>
                                            <li>
                                                <b-link class="dropdown-item" href="#"><i class="bi bi-trash3 me-1 align-baseline"></i> Delete</b-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <img :src="avatar1" alt="" class="avatar-md rounded mx-auto d-block" />
                                <h5 class="mt-3">Jerry Emard <i class="bi bi-patch-check-fill align-baseline text-info ms-1"></i></h5>
                                <p class="text-muted">Agent</p>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-sm table-nowrap table-borderless mb-0">
                                    <tr>
                                        <th>Agency</th>
                                        <td>
                                            <b-link href="#!">Themesbrand</b-link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Agent License</th>
                                        <td>#TBS01</td>
                                    </tr>
                                    <tr>
                                        <th>Agent License</th>
                                        <td>3214 57896 5412</td>
                                    </tr>
                                    <tr>
                                        <th>Tax Number</th>
                                        <td>TBS 214513 54414</td>
                                    </tr>
                                    <tr>
                                        <th>Location</th>
                                        <td>Hamburg, Germany</td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td>jacinthe@steex.com</td>
                                    </tr>
                                    <tr>
                                        <th>Contact Number</th>
                                        <td>+(27) 3041-1766</td>
                                    </tr>
                                    <tr>
                                        <th>Date</th>
                                        <td>11 March, 2023</td>
                                    </tr>
                                </table>
                            </div>
                            <ul class="list-unstyled hstack justify-content-center gap-2 mb-0 mt-4">
                                <li>
                                    <b-link href="#!" class="avatar-xs d-inline-block">
                                        <div class="avatar-title rounded bg-primary-subtle text-primary">
                                            <i class="bi bi-facebook"></i>
                                        </div>
                                    </b-link>
                                </li>
                                <li>
                                    <b-link href="#!" class="avatar-xs d-inline-block">
                                        <div class="avatar-title bg-success-subtle text-success rounded">
                                            <i class="bi bi-whatsapp"></i>
                                        </div>
                                    </b-link>
                                </li>
                                <li>
                                    <b-link href="#!" class="avatar-xs d-inline-block">
                                        <div class="avatar-title bg-info-subtle text-info rounded">
                                            <i class="bi bi-twitter"></i>
                                        </div>
                                    </b-link>
                                </li>
                                <li>
                                    <b-link href="#!" class="avatar-xs d-inline-block">
                                        <div class="avatar-title bg-danger-subtle text-danger rounded">
                                            <i class="bi bi-instagram"></i>
                                        </div>
                                    </b-link>
                                </li>
                            </ul>
                        </b-card-body>
                    </b-card>
                </b-col>
                <b-col lg="12">
                    <b-card no-body class="overflow-hidden">
                        <b-card-header class="align-items-center d-flex bg-primary-subtle text-primary p-3">
                            <div class="flex-grow-1">
                                <b-card-title title-tag="h5" class="text-primary-emphasis profile-username">Jerry Emard</b-card-title>
                                <p class="mb-0 lh-1">Active</p>
                            </div>
                            <div class="flex-shrink-0">
                                <div class="mt-n1">
                                    <b-link href="javascript: void(0);" class="btn btn-icon btn-info btn-sm"><i class="bi bi-telephone"></i></b-link>
                                </div>
                            </div>
                        </b-card-header>

                        <b-card-body class="p-0">
                            <div>
                                <SimpleBar class="chat-conversation p-3" style="height: 300px;">
                                    <ul class="list-unstyled chat-conversation-list chat-sm" id="users-conversation">
                                        <li class="chat-list left">
                                            <div class="conversation-list">
                                                <div class="chat-avatar">
                                                    <img :src="avatar2" alt="" />
                                                </div>
                                                <div class="user-chat-content">
                                                    <div class="ctext-wrap">
                                                        <div class="ctext-wrap-content">
                                                            <p class="mb-0 ctext-content">Good morning 😊</p>
                                                        </div>
                                                        <div class="dropdown align-self-start message-box-drop">
                                                            <b-link class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i class="ri-more-2-fill"></i>
                                                            </b-link>
                                                            <div class="dropdown-menu">
                                                                <b-link class="dropdown-item" href="#"><i class="ri-reply-line me-2 text-muted align-bottom"></i>Reply</b-link>
                                                                <b-link class="dropdown-item" href="#"><i class="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</b-link>
                                                                <b-link class="dropdown-item delete-item" href="#"><i class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</b-link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="conversation-name"><small class="text-muted time">09:07 am</small> <span class="text-success check-message-icon"><i class="ri-check-double-line align-bottom"></i></span></div>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="chat-list right">
                                            <div class="conversation-list">
                                                <div class="user-chat-content">
                                                    <div class="ctext-wrap">
                                                        <div class="ctext-wrap-content">
                                                            <p class="mb-0 ctext-content">Good morning, How are you? What about our next meeting?
                                                            </p>
                                                        </div>
                                                        <div class="dropdown align-self-start message-box-drop">
                                                            <b-link class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i class="ri-more-2-fill"></i>
                                                            </b-link>
                                                            <div class="dropdown-menu">
                                                                <b-link class="dropdown-item" href="#"><i class="ri-reply-line me-2 text-muted align-bottom"></i>Reply</b-link>
                                                                <b-link class="dropdown-item" href="#"><i class="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</b-link>
                                                                <b-link class="dropdown-item delete-item" href="#"><i class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</b-link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="conversation-name"><small class="text-muted time">09:08 am</small> <span class="text-success check-message-icon"><i class="ri-check-double-line align-bottom"></i></span></div>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="chat-list left">
                                            <div class="conversation-list">
                                                <div class="chat-avatar">
                                                    <img :src="avatar2" alt="" />
                                                </div>
                                                <div class="user-chat-content">
                                                    <div class="ctext-wrap">
                                                        <div class="ctext-wrap-content">
                                                            <p class="mb-0 ctext-content">Yeah everything is fine. Our next meeting tomorrow at
                                                                10.00 AM</p>
                                                        </div>
                                                        <div class="dropdown align-self-start message-box-drop">
                                                            <b-link class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i class="ri-more-2-fill"></i>
                                                            </b-link>
                                                            <div class="dropdown-menu">
                                                                <b-link class="dropdown-item" href="#"><i class="ri-reply-line me-2 text-muted align-bottom"></i>Reply</b-link>
                                                                <b-link class="dropdown-item" href="#"><i class="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</b-link>
                                                                <b-link class="dropdown-item delete-item" href="#"><i class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</b-link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="conversation-name"><small class="text-muted time">09:10 am</small> <span class="text-success check-message-icon"><i class="ri-check-double-line align-bottom"></i></span></div>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="chat-list right">
                                            <div class="conversation-list">
                                                <div class="user-chat-content">
                                                    <div class="ctext-wrap">
                                                        <div class="ctext-wrap-content">
                                                            <p class="mb-0 ctext-content">Wow that's great</p>
                                                        </div>
                                                        <div class="dropdown align-self-start message-box-drop">
                                                            <b-link class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i class="ri-more-2-fill"></i>
                                                            </b-link>
                                                            <div class="dropdown-menu">
                                                                <b-link class="dropdown-item" href="#"><i class="ri-reply-line me-2 text-muted align-bottom"></i>Reply</b-link>
                                                                <b-link class="dropdown-item" href="#"><i class="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</b-link>
                                                                <b-link class="dropdown-item delete-item" href="#"><i class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</b-link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="conversation-name"><small class="text-muted time">09:12 am</small> <span class="text-success check-message-icon"><i class="ri-check-double-line align-bottom"></i></span></div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </SimpleBar>
                            </div>

                            <div class="border-top border-top-dashed">
                                <b-row class="g-2 mx-3 mt-2 mb-3">
                                    <b-col>
                                        <div class="position-relative">
                                            <input type="text" class="form-control border-light bg-light" placeholder="Enter Message...">
                                        </div>
                                    </b-col>
                                    <b-col cols="auto">
                                        <b-button type="submit" variant="secondary"><i class="mdi mdi-send"></i></b-button>
                                    </b-col>
                                </b-row>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</Layout>
</template>
