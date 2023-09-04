<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";
import {
    SimpleBar
} from "simplebar-vue3";

import DropZone from "@/common/dropZone.vue";
import {
    ref,
    watch
} from "vue";

import {
    reviews
} from "@/common/data";

import StarRating from 'vue-star-rating';

import newDoc from "../../../../images/new-document.png";
import react from "../../../../images/learning/react.png";
import avatar2 from "../../../../images/users/48/avatar-2.jpg";

export default {
    setup() {
        let files = ref([]);
        let dropzoneFile = ref("");
        const drop = (e) => {
            dropzoneFile.value = e.dataTransfer.files[0];
            files.value.push(dropzoneFile.value);
        };
        const selectedFile = () => {
            dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
            files.value.push(dropzoneFile.value);
        };
        watch(
            () => [...files.value],
            (currentValue) => {
                return currentValue;
            }
        );
        return {
            dropzoneFile,
            files,
            drop,
            selectedFile
        };
    },
    data() {
        return {
            title: "Overview",
            items: [{
                text: "Courses",
                href: "/",
            },
            {
                text: "Overview",
                active: true,
            },
            ],
            reviews: reviews,
            isChat: false,
            newDoc,
            // 
            submitted: false,
            addReviewModal: false,
            dataEdit: false,
            deleteModal: false,
            react,
            avatar2,
            event: {
                id: "",
                rating: null,
                name: "",
                date: "",
                title: "",
                decs: "",
                img: []
            }
        };
    },
    methods: {
        deleteRecord(ele) {
            ele.target.parentElement.parentElement.parentElement.remove();
        },
        // 
        handleSubmit() {
            this.submitted = true;
            if (this.submitted && (this.event.title && this.event.decs)) {
                if (this.dataEdit) {
                    this.reviews = this.reviews.map(item => item.id.toString() == this.event.id.toString() ? {
                        ...item,
                        ...this.event
                    } : item);
                    this.addReviewModal = false;
                }
            } else {
                this.submitted = true;
                if (this.submitted && (this.event.title && this.event.decs)) {
                    const data = {
                        id: (Math.floor(Math.random() * 100 + 20) - 20),
                        name: "Richard Marshall",
                        ...this.event
                    };
                    this.reviews.unshift(data);
                    this.addReviewModal = false;
                }
            }
        },

        editDetails(data) {
            this.dataEdit = true;
            this.addReviewModal = true;
            this.event = {
                ...data
            };
            this.submitted = false;
        },

        toggleModal() {
            this.addReviewModal = true;
            this.dataEdit = false;
            this.event = {};
            this.submitted = false;
        },

        deleteModalToggle(data) {
            this.deleteModal = true;
            this.event.id = data.id;
        },

        deleteData() {
            if (this.event.id) {
                this.reviews = this.reviews.filter((item) => {
                    return item.id != this.event.id;
                });
                this.deleteModal = false;
            }
        }
        //
    },
    components: {
        Layout,
        PageHeader,
        SimpleBar,
        DropZone,
        StarRating
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
                        <div class="position-relative rounded overflow-hidden mb-4">
                            <div class="ratio ratio-21x9">
                                <iframe src="https://www.youtube.com/embed/Hu4Yvq-g7_Y" title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>
                            <div class="position-absolute d-flex gap-2 top-0 end-0 m-3">
                                <router-link to="/learning/create" class="btn bg-white">
                                    <i class="bi bi-pencil-square me-1 align-baseline"></i> Edit Course
                                </router-link>
                                <div class="dropdown">
                                    <b-button variant="none" class="bg-white btn-icon" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-share"></i>
                                    </b-button>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <b-link class="dropdown-item" href="#!"><i
                                                    class="bi bi-facebook me-1 align-baseline"></i> Facebook</b-link>
                                        </li>
                                        <li>
                                            <b-link class="dropdown-item" href="#!"><i
                                                    class="bi bi-instagram me-1 align-baseline"></i> Instagram</b-link>
                                        </li>
                                        <li>
                                            <b-link class="dropdown-item" href="#!"><i
                                                    class="bi bi-whatsapp me-1 align-baseline"></i> Whatsapp</b-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <b-button type="button" variant="subtle-warning" size="sm"
                            class="custom-toggle btn-icon active float-end" data-bs-toggle="button" aria-pressed="true">
                            <span class="icon-on"><i class="bi bi-star"></i></span>
                            <span class="icon-off"><i class="bi bi-star-fill"></i></span>
                        </b-button>
                        <h4>Getting Started with JavaScript</h4>
                        <ul class="list-unstyled hstack gap-2 flex-wrap mb-0">
                            <li>
                                <b-link href="#!" class="text-reset"><i class="bi bi-box-seam align-baseline me-1"></i>
                                    React
                                    Development</b-link>
                            </li>
                            <li class="text-warning">
                                <i class="bi bi-star-fill align-baseline"></i>
                                <i class="bi bi-star-fill align-baseline"></i>
                                <i class="bi bi-star-fill align-baseline"></i>
                                <i class="bi bi-star-fill align-baseline"></i>
                                <i class="bi bi-star-half align-baseline"></i>
                                <span class="text-body ms-1">4.5</span>
                            </li>
                            <li>
                                <span class="badge bg-success-subtle text-success">Beginner</span>
                            </li>
                        </ul>
                    </b-card-body>
                    <b-card-body>
                        <ul class="nav nav-tabs-custom rounded card-header-tabs border-bottom-0 mx-0" role="tablist">
                            <li class="nav-item" role="presentation">
                                <b-link class="nav-link active" data-bs-toggle="tab" href="#description" role="tab"
                                    aria-selected="true">
                                    Description
                                </b-link>
                            </li>
                            <li class="nav-item" role="presentation">
                                <b-link class="nav-link" data-bs-toggle="tab" href="#videoTutorials" role="tab"
                                    aria-selected="false" tabindex="-1">
                                    Video Tutorials
                                </b-link>
                            </li>
                            <li class="nav-item" role="presentation">
                                <b-link class="nav-link" data-bs-toggle="tab" href="#reviews" role="tab"
                                    aria-selected="false" tabindex="-1">
                                    Reviews
                                </b-link>
                            </li>
                            <li class="nav-item" role="presentation">
                                <b-link class="nav-link" data-bs-toggle="tab" href="#faqs" role="tab" aria-selected="false"
                                    tabindex="-1">
                                    FAQs
                                </b-link>
                            </li>
                        </ul>
                    </b-card-body>
                </b-card>
                <b-card no-body>
                    <b-card-body>
                        <div class="tab-content">
                            <div class="tab-pane active" id="description" role="tabpanel">
                                <b-card-title title-tag="h6" class="mb-3">Overview</b-card-title>
                                <p class="text-muted mb-2">JavaScript is a programming language commonly used for web
                                    development, among many other things. It works in conjunction with HTML and CSS to add
                                    dynamic functionality to websites. JavaScript is the sauce of the web. It is what makes
                                    things dance. JavaScript enables web pages to do things like display updated content,
                                    show maps that you can interact with, and many other things.</p>
                                <p class="text-muted">Today we are going to learn how to learn JavaScript faster so that you
                                    can command JavaScript as you please and use it effectively in your projects.</p>
                                <b-card-title title-tag="h6" class="mb-3">What We'll Cover in this Article</b-card-title>
                                <ul class="list-unstyled vstack gap-2">
                                    <li><i class="bi bi-caret-right"></i> How to learn JavaScript faster – an overview</li>
                                    <li><i class="bi bi-caret-right"></i> How to practice coding in JavaScript</li>
                                    <li><i class="bi bi-caret-right"></i> Why you should read the documentation</li>
                                    <li><i class="bi bi-caret-right"></i> Some best practices you can adopt from reading
                                        documentation</li>
                                    <li><i class="bi bi-caret-right"></i> How to contribute to open source projects</li>
                                    <li><i class="bi bi-caret-right"></i> How to find projects to contribute to</li>
                                    <li><i class="bi bi-caret-right"></i> Why you should build lots of projects</li>
                                    <li><i class="bi bi-caret-right"></i> Resources that might inspire you to build projects
                                    </li>
                                </ul>
                                <b-card-title title-tag="h6" class="mb-3">How to Practice Coding in
                                    JavaScript</b-card-title>
                                <p class="text-muted mb-2">Practicing is what makes you progress. Whether it's in music,
                                    dancing, singing, playing basketball – or coding.</p>
                                <p class="text-muted">Practicing is really repetitive and can be tiring, but it is what
                                    helps us and sets us apart in the long run. It is through the action of practicing and
                                    repetition that we are able to be good at all these activities. Coding is not different.
                                </p>
                                <b-card-title title-tag="h6" class="mb-3">Work through Courses and Tutorials</b-card-title>
                                <p class="text-muted mb-2">Courses and tutorials are a good way to learn. You can find
                                    various learning materials from a lot of places on the web. If you would like to take a
                                    course on a particular programming language, you can find them on sites like LinkedIn.
                                </p>
                                <p class="text-muted mb-0">If you like videos, there are many great channels on YouTube that
                                    post coding tutorials for free. My favorite one-stop-shop is <b-link
                                        href="http://themesbrand.com/" target="_blank">Themesbrand</b-link>.</p>
                            </div>
                            <div class="tab-pane" id="videoTutorials" role="tabpanel">
                                <!-- START Accordions -->
                                <div class="accordion accordion-border-box" id="accordionlefticon">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="accordionlefticonExample1">
                                            <b-button variant="none" class="accordion-button" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#accor_lefticonExamplecollapse1"
                                                aria-expanded="true" aria-controls="accor_lefticonExamplecollapse1">
                                                Introduction to JavaScript + Setup <small class="ms-1 align-baseline">(4
                                                    Lessons)</small>
                                            </b-button>
                                        </h2>
                                        <div id="accor_lefticonExamplecollapse1" class="accordion-collapse collapse show"
                                            aria-labelledby="accordionlefticonExample1" data-bs-parent="#accordionlefticon">
                                            <div class="accordion-body">
                                                <ul class="list-group list">
                                                    <li class="list-group-item position-relative">
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-shrink-0 avatar-xs">
                                                                <div
                                                                    class="avatar-title rounded bg-danger-subtle text-danger">
                                                                    <i class="bi bi-play"></i>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1 ms-2">
                                                                <b-link href="#!" class="stretched-link text-reset">What
                                                                    JavaScript framework should I learn?</b-link>
                                                            </div>
                                                            <div class="flex-shrink-0">
                                                                03:20 min
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-shrink-0 avatar-xs">
                                                                <div
                                                                    class="avatar-title rounded bg-danger-subtle text-danger">
                                                                    <i class="bi bi-play"></i>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1 ms-2">
                                                                <b-link href="#!" class="stretched-link text-reset">What is
                                                                    JavaScript for example?</b-link>
                                                            </div>
                                                            <div class="flex-shrink-0">
                                                                07:32 min
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item active list-group-item-action">
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-shrink-0 avatar-xs">
                                                                <div
                                                                    class="avatar-title rounded bg-primary-subtle text-primary">
                                                                    <i class="bi bi-stop-fill"></i>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1 ms-2">
                                                                <b-link href="#!" class="stretched-link text-reset">Which is
                                                                    a
                                                                    framework of JavaScript?</b-link>
                                                            </div>
                                                            <div class="flex-shrink-0">
                                                                08:54 min
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-shrink-0 avatar-xs">
                                                                <div
                                                                    class="avatar-title rounded bg-danger-subtle text-danger">
                                                                    <i class="bi bi-play"></i>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1 ms-2">
                                                                <b-link href="#!" class="stretched-link text-reset">What is
                                                                    JavaScript and why it is used?</b-link>
                                                            </div>
                                                            <div class="flex-shrink-0">
                                                                06:37 min
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item mt-2">
                                        <h2 class="accordion-header" id="accordionlefticonExample2">
                                            <b-button variant="none" class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#accor_lefticonExamplecollapse2"
                                                aria-expanded="false" aria-controls="accor_lefticonExamplecollapse2">
                                                Variables in JavaScript <small class="ms-1 align-baseline">(7
                                                    Lessons)</small>
                                            </b-button>
                                        </h2>
                                        <div id="accor_lefticonExamplecollapse2" class="accordion-collapse collapse"
                                            aria-labelledby="accordionlefticonExample2" data-bs-parent="#accordionlefticon">
                                            <div class="accordion-body">
                                                <ul class="list-group list">
                                                    <li class="list-group-item position-relative">
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-shrink-0 avatar-xs">
                                                                <div
                                                                    class="avatar-title rounded bg-danger-subtle text-danger">
                                                                    <i class="bi bi-play"></i>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1 ms-2">
                                                                <b-link href="#!" class="stretched-link text-reset">What are
                                                                    the
                                                                    variables in JavaScript?</b-link>
                                                            </div>
                                                            <div class="flex-shrink-0">
                                                                08:34 min
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-shrink-0 avatar-xs">
                                                                <div
                                                                    class="avatar-title rounded bg-danger-subtle text-danger">
                                                                    <i class="bi bi-play"></i>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1 ms-2">
                                                                <b-link href="#!" class="stretched-link text-reset">What is
                                                                    a
                                                                    variable in JavaScript example?</b-link>
                                                            </div>
                                                            <div class="flex-shrink-0">
                                                                10:08 min
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-shrink-0 avatar-xs">
                                                                <div
                                                                    class="avatar-title rounded bg-danger-subtle text-danger">
                                                                    <i class="bi bi-play"></i>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1 ms-2">
                                                                <b-link href="#!" class="stretched-link text-reset">What are
                                                                    the
                                                                    three variables in JavaScript?</b-link>
                                                            </div>
                                                            <div class="flex-shrink-0">
                                                                11:33 min
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-shrink-0 avatar-xs">
                                                                <div
                                                                    class="avatar-title rounded bg-danger-subtle text-danger">
                                                                    <i class="bi bi-play"></i>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1 ms-2">
                                                                <b-link href="#!" class="stretched-link text-reset">How to
                                                                    write
                                                                    variables in JavaScript?</b-link>
                                                            </div>
                                                            <div class="flex-shrink-0">
                                                                07:31 min
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-shrink-0 avatar-xs">
                                                                <div
                                                                    class="avatar-title rounded bg-danger-subtle text-danger">
                                                                    <i class="bi bi-play"></i>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1 ms-2">
                                                                <b-link href="#!" class="stretched-link text-reset">What are
                                                                    3
                                                                    types of variables?</b-link>
                                                            </div>
                                                            <div class="flex-shrink-0">
                                                                14:46 min
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-shrink-0 avatar-xs">
                                                                <div
                                                                    class="avatar-title rounded bg-danger-subtle text-danger">
                                                                    <i class="bi bi-play"></i>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1 ms-2">
                                                                <b-link href="#!" class="stretched-link text-reset">What is
                                                                    a
                                                                    variable with example?</b-link>
                                                            </div>
                                                            <div class="flex-shrink-0">
                                                                09:33 min
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item mt-2">
                                        <h2 class="accordion-header" id="accordionlefticonExample3">
                                            <b-button variant="none" class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#accor_lefticonExamplecollapse3"
                                                aria-expanded="false" aria-controls="accor_lefticonExamplecollapse3">
                                                Const, let and var in JavaScript <small class="ms-1 align-baseline">(3
                                                    Lessons)</small>
                                            </b-button>
                                        </h2>
                                        <div id="accor_lefticonExamplecollapse3" class="accordion-collapse collapse"
                                            aria-labelledby="accordionlefticonExample3" data-bs-parent="#accordionlefticon">
                                            <ul class="list-group list">
                                                <li class="list-group-item position-relative">
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 avatar-xs">
                                                            <div class="avatar-title rounded bg-danger-subtle text-danger">
                                                                <i class="bi bi-play"></i>
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1 ms-2">
                                                            <b-link href="#!" class="stretched-link text-reset">What
                                                                JavaScript
                                                                framework should I learn?</b-link>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            03:20 min
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 avatar-xs">
                                                            <div class="avatar-title rounded bg-danger-subtle text-danger">
                                                                <i class="bi bi-play"></i>
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1 ms-2">
                                                            <b-link href="#!" class="stretched-link text-reset">What is
                                                                JavaScript for example?</b-link>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            07:32 min
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 avatar-xs">
                                                            <div class="avatar-title rounded bg-danger-subtle text-danger">
                                                                <i class="bi bi-play"></i>
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1 ms-2">
                                                            <b-link href="#!" class="stretched-link text-reset">What is
                                                                JavaScript and why it is used?</b-link>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            06:37 min
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <!-- END Accordions -->
                            </div>
                            <div class="tab-pane" id="reviews" role="tabpanel">
                                <div class="d-flex flex-wrap align-items-center gap-3 mb-2">
                                    <b-card-title title-tag="h6" class="flex-grow-1 mb-0">Ratings & Reviews</b-card-title>
                                    <div class="flex-shrink-0">
                                        <b-button variant="primary" type="button" @click="toggleModal"><i
                                                class="ph-plus-circle align-middle me-1"></i> Add Review</b-button>
                                    </div>
                                </div>
                                <b-row class="gy-3">
                                    <b-col lg="2">
                                        <div class="text-center mt-3 mt-lg-5">
                                            <h1 class="mb-3">4.9 <small class="fs-sm text-muted fw-normal">/ 5.0</small>
                                            </h1>
                                            <div class="text-warning hstack gap-2 justify-content-center mb-2">
                                                <i class="bi bi-star-fill align-baseline"></i>
                                                <i class="bi bi-star-fill align-baseline"></i>
                                                <i class="bi bi-star-fill align-baseline"></i>
                                                <i class="bi bi-star-fill align-baseline"></i>
                                                <i class="bi bi-star-fill align-baseline"></i>
                                            </div>
                                            <p class="mb-0"><b>3.5k</b> Reviews</p>
                                        </div>
                                    </b-col>
                                    <b-col lg="10">
                                        <div>
                                            <SimpleBar class="me-lg-n3 pe-lg-4" data-simplebar style="max-height: 500px;">
                                                <ul class="list-unstyled mb-0" id="review-list">
                                                    <li class="review-list py-2" v-for="(data, index) of reviews"
                                                        :key="index">
                                                        <div class="border border-dashed rounded p-3">
                                                            <div class="hstack flex-wrap gap-3 mb-4">
                                                                <div
                                                                    class="badge rounded-pill bg-danger-subtle text-danger mb-0">
                                                                    <i class="mdi mdi-star"></i> <span class="rate-num">{{
                                                                        data.rating }}</span>
                                                                </div>
                                                                <div class="vr"></div>
                                                                <div class="flex-grow-1">
                                                                    <p class="mb-0">
                                                                        <b-link href="#!">{{ data.name }}</b-link>
                                                                    </p>
                                                                </div>
                                                                <div class="flex-shrink-0">
                                                                    <span class="text-muted fs-13 mb-0">{{ data.date
                                                                    }}</span>
                                                                </div>
                                                                <div class="flex-shrink-0">
                                                                    <b-link href="javascript: void(0);"
                                                                        class="badge bg-secondary-subtle text-secondary edit-item-list me-1"
                                                                        @click="editDetails(data)">
                                                                        <i class="ph-pencil align-baseline me-1"></i>
                                                                        Edit
                                                                    </b-link>
                                                                    <b-link href="javascript: void(0);"
                                                                        class="badge bg-danger-subtle text-danger"
                                                                        @click="deleteModalToggle(data)">
                                                                        <i class="ph-trash align-baseline"></i>
                                                                    </b-link>
                                                                </div>
                                                            </div>

                                                            <h6 class="review-title fs-md">{{ data.title }}</h6>
                                                            <p class="review-desc mb-0">
                                                                {{ data.decs }}
                                                            </p>

                                                            <div class="d-flex flex-grow-1 gap-2 mt-3"
                                                                v-if="data.img && data.img.length">
                                                                <b-link href="#" class="avatar-md"
                                                                    v-for="(data, index) of data.img" :key="index">
                                                                    <div class="avatar-title bg-light rounded">
                                                                        <img :src="data.priview" :alt="data.path"
                                                                            class="product-img avatar-sm" />
                                                                    </div>
                                                                </b-link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </SimpleBar>
                                        </div>
                                    </b-col>

                                </b-row>
                            </div>
                            <div class="tab-pane" id="faqs" role="tabpanel">
                                <b-row class="g-3">
                                    <b-col lg="6">
                                        <div class="d-flex gap-2">
                                            <div class="flex-shrink-0">
                                                <i class="bi bi-question-circle text-primary"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <b-card-title title-tag="h6">What are good questions to ask about
                                                    course?</b-card-title>
                                                <p class="text-muted mb-0">What textbooks are required for the course? What
                                                    days/times do class sessions occur or are they fully online? Are there
                                                    any online platforms, programs, and/or softwares needed for the course?
                                                    When are major assignments/ exams due for this course and what are its
                                                    point values?</p>
                                            </div>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="d-flex gap-2">
                                            <div class="flex-shrink-0">
                                                <i class="bi bi-question-circle text-primary"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <b-card-title title-tag="h6">How does online learning work?</b-card-title>
                                                <p class="text-muted mb-0">Distance learning is an educational process where
                                                    students receive instruction through online classes, video recordings,
                                                    video conferencing, or any other audio/visual technology medium.</p>
                                            </div>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="d-flex gap-2">
                                            <div class="flex-shrink-0">
                                                <i class="bi bi-question-circle text-primary"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <b-card-title title-tag="h6">Why is online learning better?</b-card-title>
                                                <p class="text-muted mb-0">Because online courses provide students with full
                                                    control over their studies, they can work at their own pace. Pupils, on
                                                    average, work faster and absorb more information in online courses than
                                                    they would otherwise.</p>
                                            </div>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="d-flex gap-2">
                                            <div class="flex-shrink-0">
                                                <i class="bi bi-question-circle text-primary"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <b-card-title title-tag="h6">How successful is online
                                                    learning?</b-card-title>
                                                <p class="text-muted mb-0">Some students do as well in online courses as in
                                                    in-person courses, some may actually do better, but, on average,
                                                    students do worse in the online setting, and this is particularly true
                                                    for students with weaker academic backgrounds.</p>
                                            </div>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="d-flex gap-2">
                                            <div class="flex-shrink-0">
                                                <i class="bi bi-question-circle text-primary"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <b-card-title title-tag="h6">How do you ask questions about
                                                    learning?</b-card-title>
                                                <p class="text-muted mb-0">Avoid asking leading questions, those that prompt
                                                    or suggest the answer, and yes/no questions. If a yes/no question is
                                                    warranted, be ready with a follow-up question to encourage students to
                                                    critically evaluate the material and engage in discussion.</p>
                                            </div>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="d-flex gap-2">
                                            <div class="flex-shrink-0">
                                                <i class="bi bi-question-circle text-primary"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <b-card-title title-tag="h6">What are course objectives?</b-card-title>
                                                <p class="text-muted mb-0">A course objective specifies a behavior, skill,
                                                    or action that a student can demonstrate if they have achieved mastery
                                                    of the objective.</p>
                                            </div>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="d-flex gap-2">
                                            <div class="flex-shrink-0">
                                                <i class="bi bi-question-circle text-primary"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <b-card-title title-tag="h6">What is the advantage of
                                                    learning?</b-card-title>
                                                <p class="text-muted mb-0">By consistently educating yourself and trying new
                                                    things, you'll learn you're capable of change and growth, which keeps
                                                    you open to new opportunities in life. “Learning a new skill can get you
                                                    out of a rut.</p>
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="3" lg="4">
                <b-card no-body class="overflow-hidden ribbon-box">
                    <span class="ribbon ribbon-danger rounded-end">Off 20%</span>
                    <b-card-body
                        class="bg-info-subtle text-center learning-widgets d-flex align-items-center justify-content-center">
                        <img :src="react" alt="" class="avatar-lg" />
                        <img :src="react" alt="" class="effect" />
                    </b-card-body>
                    <b-card-body>
                        <h4 class="text-truncate text-capitalize">$245.95 <small
                                class="text-decoration-line-through fs-xs text-muted align-baseline">499.99</small></h4>
                        <p class="text-danger"><i class="bi bi-clock me-2"></i> <b>10</b> days left at this price</p>
                        <div class="hstack gap-2">
                            <b-button variant="secondary" class="w-100">Free Trial</b-button>
                            <b-button variant="primary" class="w-100"><i class="bi bi-bag align-baseline me-1"></i> Buy
                                Now</b-button>
                        </div>
                    </b-card-body>
                </b-card>
                <b-card no-body>
                    <b-card-header>
                        <b-card-title title-tag="h6" class="mb-0">This course includes</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <ul class="list-unstyled vstack gap-2 mb-0">
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1">
                                        <i class="ph ph-book-open align-middle me-1 text-primary-emphasis"></i> Lessons
                                    </div>
                                    <div class="flex-shrink-0 text-muted">
                                        35
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1">
                                        <i class="ph ph-timer align-middle me-1 text-primary-emphasis"></i> Duration
                                    </div>
                                    <div class="flex-shrink-0 text-muted">
                                        6 Months
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1">
                                        <i class="ph ph-chart-bar align-middle me-1 text-primary-emphasis"></i> Skills
                                    </div>
                                    <div class="flex-shrink-0 text-muted">
                                        Beginner
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1">
                                        <i class="ph ph-book-open align-middle me-1 text-primary-emphasis"></i> Language
                                    </div>
                                    <div class="flex-shrink-0 text-muted">
                                        English
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1">
                                        <i class="bi bi-card-heading align-baseline me-1 text-primary-emphasis"></i>
                                        Certificate
                                    </div>
                                    <div class="flex-shrink-0 text-muted">
                                        Yes
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </b-card-body>
                </b-card>
                <b-card no-body>
                    <b-card-header>
                        <router-link to="/instructors/overview" class="float-end link-effect">View More <i
                                class="bi bi-arrow-right align-baseline ms-1"></i></router-link>
                        <b-card-title title-tag="h6" class="mb-0">Instructor Details</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <div class="d-flex gap-2 align-items-center mb-3">
                            <div class="flex-shrink-0">
                                <img :src="avatar2" alt="" class="avatar-sm rounded" />
                            </div>
                            <div class="flex-grow-1">
                                <h6 class="fs-md">Morton Satterfield</h6>
                                <p class="text-muted mb-0">Software Engineering</p>
                            </div>
                        </div>
                        <b-button type="button" variant="subtle-info" class="w-100" @click="isChat = true" id="agent-chat"><i
                                class="bi bi-chat-text align-baseline me-1"></i> Get In Touch</b-button>
                    </b-card-body>
                </b-card>
                <b-card no-body class="card-primary file-manager-widgets">
                    <b-card-body>
                        <b-card-title title-tag="h6" class="text-reset"> Join Membership</b-card-title>
                        <p class="text-white-50 mb-5">Access all course anywhere and any time</p>
                        <div class="mt-4">
                            <router-link to="/pages/pricing" class="btn btn-light w-md">Join Now</router-link>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <div class="email-chat-detail d-block" v-if="isChat">
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

    <!-- addReview Modal -->
    <b-modal class="fade" v-model="addReviewModal" centered id="addReview" size="lg" hide-footer title="Add Review"
        title-class="fs-5">
        <form class="tablelist-form" novalidate autocomplete="off" @submit.prevent="handleSubmit">
            <input type="hidden" id="id-field">
            <div class="mb-3">
                <label class="form-label d-block">Select Review <span class="text-danger">*</span></label>
                <star-rating v-model:rating="event.rating" :show-rating="false" :star-size="25"></star-rating>
            </div>
            <div class="mb-3">
                <label for="reviewTitle-input" class="form-label">Review Title <span class="text-danger">*</span></label>
                <b-form-input type="text" id="reviewTitle-input" placeholder="Title" v-model="event.title"
                    :class="{ 'is-invalid': submitted && !event.title }"></b-form-input>
            </div>
            <div class="mb-3">
                <label for="reviewDesc-input" class="form-label">Review <span class="text-danger">*</span></label>
                <b-form-textarea id="reviewDesc-input" rows="4" placeholder="Enter review" v-model="event.decs"
                    :class="{ 'is-invalid': submitted && !event.decs }"></b-form-textarea>
        </div>
        <div class="mb-3">
            <label class="form-label">Product Images</label>
            <DropZone @drop.prevent="drop" @change="selectedFile" files="files" cloudIcon="remix"
                dropzoneFile="dropzoneFile" />
            <ul class="list-unstyled mb-0" id="dropzone-preview">
                <li class="mt-2" id="dropzone-preview-list">

                    <div class="border rounded" v-for="(file, index) of files" :key="index">
                        <div class="d-flex flex-wrap gap-2 p-2">
                            <div class="flex-shrink-0 me-3">
                                <div class="avatar-sm bg-light rounded p-2">
                                    <img class="img-fluid rounded d-block" :src="newDoc" alt="Dropzone-Image" />
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <div class="pt-1">
                                    <h5 class="fs-md mb-1">&nbsp;
                                        {{ file.name }}
                                    </h5>
                                    <p class="fs-sm text-muted mb-0">
                                        <strong>{{ file.size / 1024 }}</strong> KB
                                    </p>
                                    <strong class="error text-danger"></strong>
                                </div>
                            </div>
                            <div class="flex-shrink-0 ms-3">
                                <b-button size="sm" variant="danger" @click="deleteRecord">Delete</b-button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <!-- end dropzon-preview -->
        </div>
        <div class="text-end">
            <b-button type="button" variant="ghost-danger" class="me-1" @click="addReviewModal = false"><i
                    class="ph-x align-middle me-1"></i> Close</b-button>
            <b-button type="submit" variant="primary">Add Review</b-button>
        </div>
    </form>
</b-modal>

<b-modal v-model="deleteModal" hide-footer centered class="zoomIn" body-class="p-md-5">
    <div class="text-center">
        <div class="text-danger">
            <i class="bi bi-trash display-4"></i>
        </div>
        <div class="mt-4">
            <h3 class="mb-2">Are you sure ?</h3>
            <p class="text-muted fs-lg mx-3 mb-0">Are you sure you want to remove this record ?</p>
        </div>
    </div>
    <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
        <b-button type="button" variant="light" class="w-sm" @click="deleteModal = false">Close</b-button>
        <b-button type="button" variant="danger" class="w-sm" id="remove-cartproduct" @click="deleteData">Yes, Delete
            It!</b-button>
    </div>
</b-modal></template>
