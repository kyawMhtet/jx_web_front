<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import SwiperCore, {
    Autoplay,
    Thumbs,
    Pagination,
    Navigation
} from "swiper";

import {
    Swiper,
    SwiperSlide
} from "swiper/vue";

import "swiper/swiper-bundle.css";
import GoogleMap from "../real-estate/googlemap.vue";

SwiperCore.use([Autoplay, Thumbs, Pagination, Navigation]);
import { SimpleBar } from "simplebar-vue3";

import avatar01 from "../../../images/users/avatar-1.jpg";
import avatar1 from "../../../images/users/32/avatar-1.jpg";
import avatar2 from "../../../images/users/32/avatar-2.jpg";
import avatar4 from "../../../images/users/32/avatar-4.jpg";
import avatar5 from "../../../images/users/32/avatar-5.jpg";
import avatar7 from "../../../images/users/32/avatar-7.jpg";

import rOver1 from "../../../images/real-estate/overview-01.jpg";
import rOver2 from "../../../images/real-estate/overview-02.jpg";
import rOver3 from "../../../images/real-estate/overview-03.jpg";

export default {
    data() {
        return {
            title: "Property Overview",
            items: [{
                    text: "Reale Estate",
                    href: "/",
                },
                {
                    text: "Property Overview",
                    active: true,
                },
            ],
            isChat: false,
            avatar01,
            avatar1,
            avatar2,
            avatar4,
            avatar5,
            avatar7,
            rOver1,
            rOver2,
            rOver3,
        };
    },
    components: {
        Layout,
        PageHeader,
        Swiper,
        SwiperSlide,
        GoogleMap,
        SimpleBar
    },
};
</script>

<template>
<Layout>
    <PageHeader :title="title" :items="items" />
    <b-row>
        <b-col xl="9" lg="8">
            <b-card no-body>
                <b-card-body>
                    <swiper class="property-slider mb-3" :autoplay="{ delay: 2500, disableOnInteraction: false, }" :slidesPerView="1" :spaceBetween="20" :loop="true" :pagination="{ clickable: true, el: '.swiper-pagination' }">
                        <swiper-slide>
                            <div class="position-relative ribbon-box">
                                <div class="ribbon ribbon-danger fw-medium rounded-end mt-2"> For Sale</div>
                                <div class="dropdown position-absolute top-0 end-0 m-3">
                                    <b-button variant="white" class="avatar-xs p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-share"></i>
                                    </b-button>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <b-link class="dropdown-item" href="#addProperty" data-bs-toggle="modal"><i class="bi bi-pencil-square me-1 align-baseline"></i> Edit</b-link>
                                        </li>
                                        <li>
                                            <b-link class="dropdown-item" href="#deleteRecordModal" data-bs-toggle="modal"><i class="bi bi-trash3 me-1 align-baseline"></i> Delete</b-link>
                                        </li>
                                    </ul>
                                </div>
                                <img :src="rOver2" alt="" class="img-fluid" />
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="position-relative ribbon-box">
                                <div class="ribbon ribbon-primary fw-medium rounded-end mt-2"> Front View</div>
                                <div class="dropdown position-absolute top-0 end-0 m-3">
                                    <b-button variant="none" class="bg-white avatar-xs p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-share"></i>
                                    </b-button>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <b-link class="dropdown-item" href="#addProperty" data-bs-toggle="modal"><i class="bi bi-pencil-square me-1 align-baseline"></i> Edit</b-link>
                                        </li>
                                        <li>
                                            <b-link class="dropdown-item" href="#deleteRecordModal" data-bs-toggle="modal"><i class="bi bi-trash3 me-1 align-baseline"></i> Delete</b-link>
                                        </li>
                                    </ul>
                                </div>
                                <img :src="rOver1" alt="" class="img-fluid" />
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="position-relative ribbon-box">
                                <div class="ribbon ribbon-primary fw-medium rounded-end mt-2"> Front View</div>
                                <div class="dropdown position-absolute top-0 end-0 m-3">
                                    <b-button variant="none" class="bg-white avatar-xs p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-share"></i>
                                    </b-button>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <b-link class="dropdown-item" href="#addProperty" data-bs-toggle="modal"><i class="bi bi-pencil-square me-1 align-baseline"></i> Edit</b-link>
                                        </li>
                                        <li>
                                            <b-link class="dropdown-item" href="#deleteRecordModal" data-bs-toggle="modal"><i class="bi bi-trash3 me-1 align-baseline"></i> Delete</b-link>
                                        </li>
                                    </ul>
                                </div>
                                <img :src="rOver3" alt="" class="img-fluid" />
                            </div>
                        </swiper-slide>
                        <div class="swiper-pagination"></div>
                    </swiper>

                    <div class="pt-1">
                        <b-button type="button" variant="subtle-warning" size="sm" class="custom-toggle float-end btn-icon" data-bs-toggle="button">
                            <span class="icon-on"><i class="bi bi-star"></i></span>
                            <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                        </b-button>
                        <b-card-title title-tag="h6">Swimming Pool Side Of The Residential Ascot Home</b-card-title>
                        <div class="text-muted hstack gap-2 flex-wrap list-unstyled mb-3">
                            <div>
                                <i class="bi bi-geo-alt align-baseline me-1"></i> Birmingham, West Midlands, United
                                Kingdom
                            </div>
                            <div class="vr"></div>
                            <div>
                                <i class="bi bi-calendar-event align-baseline me-1"></i> Update 2 days ago
                            </div>
                        </div>
                        <p class="text-muted mb-2">Property is <b>any item that a person or a business has legal
                                title over</b>. Property can be tangible items, such as houses, cars, or appliances,
                            or it can refer to intangible items that carry the promise of future worth, such as
                            stock and bond certificates. There are two types of property. In legal terms, all
                            property will be classified as either <b>personal property or real property</b>. This
                            distinction between types of property comes from English common law, but our modern laws
                            continue to distinguish between the two.</p>
                        <p class="text-muted">Basic Property Unit. Definition. The basic unit of ownership that is
                            recorded in the land books, land registers or equivalent. It is defined by unique
                            ownership and homogeneous real property rights, and may consist of one or more adjacent
                            or geographically separate parcels.</p>
                    </div>

                    <div class="mb-3">
                        <b-card-title title-tag="h6" class="mb-3">Property Overview</b-card-title>
                        <b-row class="g-3">
                            <b-col xl="3" sm="6">
                                <div class="p-3 border border-dashed rounded">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="avatar-xs flex-shrink-0">
                                            <div class="avatar-title bg-dark-subtle text-dark fs-lg rounded">
                                                <i class="bi bi-tag"></i>
                                            </div>
                                        </div>
                                        <p class="fs-md mb-0">$7000 - $8000</p>
                                    </div>
                                </div>
                            </b-col>
                            <b-col xl="3" sm="6">
                                <div class="p-3 border border-dashed rounded">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="avatar-xs flex-shrink-0">
                                            <div class="avatar-title bg-warning-subtle text-warning fs-lg rounded">
                                                <i class="bi bi-house"></i>
                                            </div>
                                        </div>
                                        <p class="fs-md mb-0">4 Bedroom</p>
                                    </div>
                                </div>
                            </b-col>
                            <b-col xl="3" sm="6">
                                <div class="p-3 border border-dashed rounded">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="avatar-xs flex-shrink-0">
                                            <div class="avatar-title bg-danger-subtle text-danger fs-lg rounded">
                                                <i class="ph ph-bathtub"></i>
                                            </div>
                                        </div>
                                        <p class="fs-md mb-0">3 Bathroom</p>
                                    </div>
                                </div>
                            </b-col>
                            <b-col xl="3" sm="6">
                                <div class="p-3 border border-dashed rounded">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="avatar-xs flex-shrink-0">
                                            <div class="avatar-title bg-info-subtle text-info fs-lg rounded">
                                                <i class="bi bi-p-circle"></i>
                                            </div>
                                        </div>
                                        <p class="fs-md mb-0">Parking Available</p>
                                    </div>
                                </div>
                            </b-col>
                            <b-col xl="3" sm="6">
                                <div class="p-3 border border-dashed rounded">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="avatar-xs flex-shrink-0">
                                            <div class="avatar-title bg-success-subtle text-success fs-lg rounded">
                                                <i class="bi bi-columns"></i>
                                            </div>
                                        </div>
                                        <p class="fs-md mb-0">1324 SQFT</p>
                                    </div>
                                </div>
                            </b-col>
                            <b-col xl="3" sm="6">
                                <div class="p-3 border border-dashed rounded">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="avatar-xs flex-shrink-0">
                                            <div class="avatar-title bg-secondary-subtle text-secondary fs-lg rounded">
                                                <i class="bi bi-map"></i>
                                            </div>
                                        </div>
                                        <p class="fs-md mb-0">United Kingdom</p>
                                    </div>
                                </div>
                            </b-col>
                            <b-col xl="3" sm="6">
                                <div class="p-3 border border-dashed rounded">
                                    <div class="d-flex align-items-center gap-2">
                                        <div class="avatar-xs flex-shrink-0">
                                            <div class="avatar-title bg-primary-subtle text-primary fs-lg rounded">
                                                <i class="bi bi-buildings"></i>
                                            </div>
                                        </div>
                                        <p class="fs-md mb-0">Residency</p>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                    </div>

                    <div class="mb-3">
                        <b-card-title title-tag="h6" class="mb-3">Property Features</b-card-title>
                        <ul class="list-unstyled hstack flex-wrap gap-3">
                            <li class="w-lg">
                                Swimming pool
                            </li>
                            <li class="w-lg">
                                Air conditioning
                            </li>
                            <li class="w-lg">
                                Electricity
                            </li>
                            <li class="w-lg">
                                Balcony
                            </li>
                            <li class="w-lg">
                                Near Green Zone
                            </li>
                            <li class="w-lg">
                                Near School
                            </li>
                            <li class="w-lg">
                                Cable TV
                            </li>
                            <li class="w-lg">
                                Near Shop
                            </li>
                            <li class="w-lg">
                                Internet
                            </li>
                            <li class="w-lg">
                                Near Shop
                            </li>
                        </ul>
                    </div>
                </b-card-body>
            </b-card>
            <b-card no-body>
                <b-card-header>
                    <b-card-title title-tag="h6" class="mb-0">Property Location</b-card-title>
                </b-card-header>
                <b-card-body>
                    <GoogleMap style="min-height: 100%;" />
                </b-card-body>
            </b-card>
        </b-col>
        <b-col xl="3" lg="4">
            <b-row>
                <b-col lg="12">
                    <b-card no-body class="card-primary text-center">
                        <b-card-body>
                            <h4 class="text-reset fw-normal">$7000 - $8000</h4>
                            <p class="text-white-75 fs-md mb-0">Sale Price</p>
                        </b-card-body>
                    </b-card>
                </b-col>
                <b-col lg="12">
                    <b-card no-body>
                        <b-card-body>
                            <div class="text-center">
                                <img :src="avatar01" alt="" class="avatar-md rounded mx-auto d-block" />
                                <h5 class="mt-3">Jerry Emard</h5>
                                <p class="text-muted">OWNER</p>
                                <p class="text-muted mb-4">73 Alum Rock Rd, Birmingham, West Midland, United Kingdom
                                    - s B8 1LY</p>
                            </div>
                            <ul class="list-unstyled hstack justify-content-center gap-2 mb-0">
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
                    <b-card no-body>
                        <b-card-header>
                            <b-link href="#!" class="float-end link-effect">View More <i class="bi bi-arrow-right align-baseline ms-1"></i></b-link>
                            <b-card-title title-tag="h6" class="mb-0">Agent Details</b-card-title>
                        </b-card-header>
                        <b-card-body>
                            <div class="d-flex gap-2 align-items-center mb-3">
                                <div class="flex-shrink-0">
                                    <img :src="avatar2" alt="" class="avatar-sm rounded" />
                                </div>
                                <div class="flex-grow-1">
                                    <h6 class="fs-md">Morton Satterfield</h6>
                                    <p class="text-muted mb-0">Agent</p>
                                </div>
                            </div>
                            <b-button variant="secondary" class="w-100" id="agent-chat" @click="isChat = true"><i class="bi bi-chat-text align-baseline me-1"></i> Get In Touch</b-button>
                        </b-card-body>
                    </b-card>
                </b-col>
                <b-col lg="12">
                    <b-card no-body>
                        <b-card-header>
                            <b-card-title class="mb-0">Owner History</b-card-title>
                        </b-card-header>
                        <b-card-body>
                            <div class="table-responsive table-card pt-2">
                                <table class="table mb-0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center gap-1">
                                                    <div class="flex-shrink-0">
                                                        <img :src="avatar1" alt="" class="avatar-sm rounded-circle p-1" />
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="fs-md mb-1">Jerry Emard</h6>
                                                        <p class="text-muted mb-0">03 Nav, 2022 - Present</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-end">
                                                <p class="fs-md mb-0 text-muted"><i class="bi bi-star-half text-warning align-baseline me-1"></i>
                                                    4.9</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center gap-1">
                                                    <div class="flex-shrink-0">
                                                        <img :src="avatar7" alt="" class="avatar-sm rounded-circle p-1" />
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="fs-md mb-1">Sonia Conn</h6>
                                                        <p class="text-muted mb-0">24 March, 2022 - 03 Nav, 2022</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-end">
                                                <p class="fs-md mb-0 text-muted"><i class="bi bi-star-half text-warning align-baseline me-1"></i>
                                                    4.8</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center gap-1">
                                                    <div class="flex-shrink-0">
                                                        <img :src="avatar4" alt="" class="avatar-sm rounded-circle p-1" />
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="fs-md mb-1">Talon Bradtke</h6>
                                                        <p class="text-muted mb-0">27 Aug, 2021 - 24 March, 2022</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-end">
                                                <p class="fs-md mb-0 text-muted"><i class="bi bi-star-half text-warning align-baseline me-1"></i>
                                                    4.4</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center gap-1">
                                                    <div class="flex-shrink-0">
                                                        <img :src="avatar5" alt="" class="avatar-sm rounded-circle p-1" />
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="fs-md mb-1">Tyrell Kerluke</h6>
                                                        <p class="text-muted mb-0">09 June, 2019 - 27 Aug, 2021</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-end">
                                                <p class="fs-md mb-0 text-muted"><i class="bi bi-star-half text-warning align-baseline me-1"></i>
                                                    4.6</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
        </b-col>
    </b-row>

    <div :class="isChat ? 'email-chat-detail d-block' : 'email-chat-detail'">
            <b-card no-body class="mb-0 overflow-hidden">
                <b-card-header class="align-items-center d-flex bg-primary-subtle text-primary p-3">
                    <div class="flex-grow-1">
                        <h5 class="fs-md text-primary-emphasis profile-username">Morton Satterfield</h5>
                        <p class="mb-0 fs-sm lh-1">Active</p>
                    </div>
                    <div class="flex-shrink-0">
                        <div class="mt-n1">
                            <b-button type="button" variant="link" size="sm" class="btn-icon text-primary fs-lg text-decoration-none rounded-circle bg-primary-subtle bg-opacity-10" id="emailchat-btn-close" @click="isChat = false"><i class="ri-close-fill"></i></b-button>
                        </div>
                    </div>
                </b-card-header>

                <b-card-body class="p-0">
                    <div id="users-chat">
                        <SimpleBar class="chat-conversation p-3" id="chat-conversation" style="height: 250px;">
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
                                                    <b-link class="dropdown-toggle" href="#" role="button"
                                                        data-bs-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false">
                                                        <i class="ri-more-2-fill"></i>
                                                    </b-link>
                                                    <div class="dropdown-menu">
                                                        <b-link class="dropdown-item" href="#"><i
                                                                class="ri-reply-line me-2 text-muted align-bottom"></i>Reply</b-link>
                                                        <b-link class="dropdown-item" href="#"><i
                                                                class="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</b-link>
                                                        <b-link class="dropdown-item delete-item" href="#"><i
                                                                class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</b-link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="conversation-name"><small class="text-muted time">09:07 am</small>
                                                <span class="text-success check-message-icon"><i
                                                        class="ri-check-double-line align-bottom"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                

                                <li class="chat-list right">
                                    <div class="conversation-list">
                                        <div class="user-chat-content">
                                            <div class="ctext-wrap">
                                                <div class="ctext-wrap-content">
                                                    <p class="mb-0 ctext-content">Good morning, How are you? What about our
                                                        next meeting?</p>
                                                </div>
                                                <div class="dropdown align-self-start message-box-drop">
                                                    <b-link class="dropdown-toggle" href="#" role="button"
                                                        data-bs-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false">
                                                        <i class="ri-more-2-fill"></i>
                                                    </b-link>
                                                    <div class="dropdown-menu">
                                                        <b-link class="dropdown-item" href="#"><i
                                                                class="ri-reply-line me-2 text-muted align-bottom"></i>Reply</b-link>
                                                        <b-link class="dropdown-item" href="#"><i
                                                                class="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</b-link>
                                                        <b-link class="dropdown-item delete-item" href="#"><i
                                                                class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</b-link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="conversation-name"><small class="text-muted time">09:08 am</small>
                                                <span class="text-success check-message-icon"><i
                                                        class="ri-check-double-line align-bottom"></i></span>
                                            </div>
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
                                                    <p class="mb-0 ctext-content">Yeah everything is fine. Our next meeting
                                                        tomorrow at 10.00 AM</p>
                                                </div>
                                                <div class="dropdown align-self-start message-box-drop">
                                                    <b-link class="dropdown-toggle" href="#" role="button"
                                                        data-bs-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false">
                                                        <i class="ri-more-2-fill"></i>
                                                    </b-link>
                                                    <div class="dropdown-menu">
                                                        <b-link class="dropdown-item" href="#"><i
                                                                class="ri-reply-line me-2 text-muted align-bottom"></i>Reply</b-link>
                                                        <b-link class="dropdown-item" href="#"><i
                                                                class="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</b-link>
                                                        <b-link class="dropdown-item delete-item" href="#"><i
                                                                class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</b-link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="conversation-name"><small class="text-muted time">09:10 am</small>
                                                <span class="text-success check-message-icon"><i
                                                        class="ri-check-double-line align-bottom"></i></span>
                                            </div>
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
                                                    <b-link class="dropdown-toggle" href="#" role="button"
                                                        data-bs-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false">
                                                        <i class="ri-more-2-fill"></i>
                                                    </b-link>
                                                    <div class="dropdown-menu">
                                                        <b-link class="dropdown-item" href="#"><i
                                                                class="ri-reply-line me-2 text-muted align-bottom"></i>Reply</b-link>
                                                        <b-link class="dropdown-item" href="#"><i
                                                                class="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</b-link>
                                                        <b-link class="dropdown-item delete-item" href="#"><i
                                                                class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</b-link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="conversation-name"><small class="text-muted time">09:12 am</small>
                                                <span class="text-success check-message-icon"><i
                                                        class="ri-check-double-line align-bottom"></i></span>
                                            </div>
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
                                    <b-form-input type="text" class="form-control"
                                        placeholder="Enter Message..."></b-form-input>
                                </div>
                            </b-col>
                            <b-col cols="auto">
                                <b-button type="submit" variant="secondary"><i class="mdi mdi-send"></i></b-button>
                            </b-col>
                        </b-row>
                    </div>
                </b-card-body>
            </b-card>
        </div>
</Layout>
</template>
