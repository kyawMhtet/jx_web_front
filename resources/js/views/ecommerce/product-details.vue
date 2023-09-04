<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";
import {
    SimpleBar
} from "simplebar-vue3";
import DropZone from "@/common/dropZone.vue";
import {
    ref,
    watch
} from "vue";
import {
    Thumbs
} from 'swiper';
import SwiperCore, {
    Pagination,
    Navigation
} from "swiper";
import {
    Swiper,
    SwiperSlide
} from "swiper/vue";
import "swiper/swiper-bundle.css";

import StarRating from 'vue-star-rating';

SwiperCore.use([Pagination, Navigation]);

import {
    reviews
} from "@/common/data";

// product imgs
import pImg1 from "../../../images/products/img-1.png";
import pImg6 from "../../../images/products/img-6.png";
import pImg7 from "../../../images/products/img-7.png";
import pImg8 from "../../../images/products/img-8.png";
import pImg10 from "../../../images/products/img-10.png";
import docImg from "../../../images/new-document.png";

export default {
    setup() {
        const thumbsSwiper = ref(null);
        const setThumbsSwiper = (swiper) => {
            thumbsSwiper.value = swiper;
        };

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
            Thumbs,
            thumbsSwiper,
            setThumbsSwiper,
            dropzoneFile,
            files,
            drop,
            selectedFile
        };
    },
    data() {
        return {
            title: "Product Overview",
            items: [{
                text: "Ecommerce",
                href: "/",
            },
            {
                text: "Product Overview",
                active: true,
            },
            ],
            reviews: reviews,
            pImg1,
            pImg6,
            pImg7,
            pImg8,
            pImg10,
            docImg,
            // 
            submitted: false,
            addReviewModal: false,
            dataEdit: false,
            deleteModal: false,

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
            if (this.dataEdit) {
                this.submitted = true;
                if (this.submitted && (this.event.title && this.event.decs)) {
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
        Swiper,
        SwiperSlide,
        DropZone,
        StarRating
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />

        <b-row>
            <b-col xxl="4">
                <b-card no-body class="p-3 sticky-side-div">
                    <div class="product-img-slider">
                        <swiper class="product-thumbnail-slider p-2 rounded bg-light" :loop="true" :modules="[Thumbs]"
                            :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', }" :thumbs="{ swiper: thumbsSwiper }">

                            <swiper-slide>
                                <div class="p-5 mx-4">
                                    <img :src="pImg1" alt="" class="img-fluid d-block" />
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="p-5 mx-4">
                                    <img :src="pImg7" alt="" class="img-fluid d-block" />
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="p-5 mx-4">
                                    <img :src="pImg8" alt="" class="img-fluid d-block" />
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="p-5 mx-4">
                                    <img :src="pImg10" alt="" class="img-fluid d-block" />
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="p-5 mx-4">
                                    <img :src="pImg6" alt="" class="img-fluid d-block" />
                                </div>
                            </swiper-slide>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </swiper>
                        <swiper :modules="[Thumbs]" class="product-nav-slider mt-2" :loop="false" :spaceBetween="10"
                            :slidesPerView="4" :freeMode="true" watch-slides-progress @swiper="setThumbsSwiper">
                            
                            <swiper-slide>
                                <div class="nav-slide-item">
                                    <img :src="pImg1" alt="" class="img-fluid d-block" />
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="nav-slide-item">
                                    <img :src="pImg7" alt="" class="img-fluid d-block" />
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="nav-slide-item">
                                    <img :src="pImg8" alt="" class="img-fluid d-block" />
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="nav-slide-item">
                                    <img :src="pImg10" alt="" class="img-fluid d-block" />
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="nav-slide-item">
                                    <img :src="pImg6" alt="" class="img-fluid d-block" />
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </b-card>
            </b-col>
            <b-col xxl="8">
                <b-row class="g-0">
                    <b-col xxl="8">
                        <b-card no-body class="rounded-end-0">
                            <b-card-body class="p-4">
                                <p class="text-muted float-md-end mb-md-0"><b-link href="#!"><i
                                            class="ph-storefront align-middle me-1"></i> Visit Store</b-link></p>
                                <h4 class="text-capitalize mb-3">Unite wear solid men hooded neck blue T-shirt</h4>
                                <div class="hstack gap-3 flex-wrap mb-4">
                                    <div class="text-muted"><b class="text-body fw-medium">3.7k</b> Sold</div>
                                    <div class="vr"></div>
                                    <div class="text-muted"><b class="text-body fw-medium">3.5k</b> Reviews</div>
                                    <div class="vr"></div>
                                    <div class="text-muted">Published : <span class="text-body fw-medium">26 Mar,
                                            2021</span></div>
                                </div>

                                <h6 class="fs-md mb-3">Choose Size:</h6>
                                <div class="d-flex flex-wrap gap-2">
                                    <div>
                                        <input type="radio" class="btn-check" name="productsize-radio"
                                            id="productsize-radio1" disabled>
                                        <label
                                            class="btn btn-subtle-primary avatar-xs rounded-circle p-0 d-flex justify-content-center align-items-center"
                                            for="productsize-radio1">S</label>
                                    </div>

                                    <div>
                                        <input type="radio" class="btn-check" name="productsize-radio"
                                            id="productsize-radio2">
                                        <label
                                            class="btn btn-subtle-primary avatar-xs rounded-circle p-0 d-flex justify-content-center align-items-center"
                                            for="productsize-radio2">M</label>
                                    </div>
                                    <div>
                                        <input type="radio" class="btn-check" name="productsize-radio"
                                            id="productsize-radio3">
                                        <label
                                            class="btn btn-subtle-primary avatar-xs rounded-circle p-0 d-flex justify-content-center align-items-center"
                                            for="productsize-radio3">L</label>
                                    </div>

                                    <div>
                                        <input type="radio" class="btn-check" name="productsize-radio"
                                            id="productsize-radio4" disabled>
                                        <label
                                            class="btn btn-subtle-primary avatar-xs rounded-circle p-0 d-flex justify-content-center align-items-center"
                                            for="productsize-radio4">XL</label>
                                    </div>

                                    <div>
                                        <input type="radio" class="btn-check" name="productsize-radio"
                                            id="productsize-radio5">
                                        <label
                                            class="btn btn-subtle-primary avatar-xs rounded-circle p-0 d-flex justify-content-center align-items-center"
                                            for="productsize-radio5">2xl</label>
                                    </div>
                                </div>

                                <div class="mt-4">
                                    <h5 class="fs-md mb-3">Colors :</h5>
                                    <div class="d-flex flex-wrap gap-2">
                                        <div>
                                            <button type="button"
                                                class="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-5xl text-primary"
                                                disabled="">
                                                <i class="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </div>
                                        <div>
                                            <button type="button"
                                                class="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-5xl text-secondary">
                                                <i class="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </div>
                                        <div>
                                            <button type="button"
                                                class="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-5xl text-success">
                                                <i class="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </div>
                                        <div>
                                            <button type="button"
                                                class="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-5xl text-info">
                                                <i class="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </div>
                                        <div>
                                            <button type="button"
                                                class="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-5xl text-warning">
                                                <i class="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </div>
                                        <div>
                                            <button type="button"
                                                class="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-5xl text-danger">
                                                <i class="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </div>
                                        <div>
                                            <button type="button"
                                                class="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-5xl text-light">
                                                <i class="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </div>
                                        <div>
                                            <button type="button"
                                                class="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-5xl text-dark">
                                                <i class="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-4">
                                    <h5 class="fs-md mb-3">Shipping Information:</h5>
                                    <p class="text-muted mb-2"><b>Delivery Location</b> </p>
                                    <p class="text-muted mb-0">A thicker knit T-Shirt with a rag cut edge and sleeves
                                        and a printed muscle man on the back, you will feel #ULTRA in one of these.</p>
                                </div>

                            </b-card-body>
                        </b-card>
                    </b-col>
                    <b-col xxl="4">
                        <b-card no-body class="card-height-100 border-start rounded-start-0">
                            <b-card-body class="p-4">
                                <b-row>
                                    <b-col lg="12">
                                        <b-card no-body class="card-primary">
                                            <b-card-body class="d-flex align-items-center">
                                                <div class="flex-grow-1">
                                                    <b-card-title title-tag="h5" class="text-white fs-xl">25%
                                                        Off</b-card-title>
                                                    <p class="mb-0 text-white-50">If order over $120</p>
                                                </div>
                                                <div class="flex-shrink-0">
                                                    <b-button type="button" variant="secondary">Util 10 Feb,
                                                        2024</b-button>
                                                </div>
                                            </b-card-body>
                                        </b-card>
                                    </b-col>
                                    <b-col lg="12">
                                        <b-row class="g-3">
                                            <b-col md="6">
                                                <b-card no-body class="border shadow-none mb-0">
                                                    <b-card-body class="p-2">
                                                        <div class="text-center">
                                                            <p class="text-muted text-truncate mb-2">PRICE</p>
                                                            <h6 class="fs-lg">$245.99</h6>
                                                        </div>
                                                    </b-card-body>
                                                </b-card>
                                            </b-col>
                                            <b-col md="6">
                                                <b-card no-body class="border shadow-none mb-0">
                                                    <b-card-body class="p-2">
                                                        <div class="text-center">
                                                            <p class="text-muted text-truncate mb-2">No. of Orders</p>
                                                            <h6 class="fs-lg">3.7k</h6>
                                                        </div>
                                                    </b-card-body>
                                                </b-card>
                                            </b-col>
                                            <b-col md="6">
                                                <b-card no-body class="border shadow-none mb-0">
                                                    <b-card-body class="p-2">
                                                        <div class="text-center">
                                                            <p class="text-muted text-truncate mb-2">Available Stocks
                                                            </p>
                                                            <h6 class="fs-lg">764</h6>
                                                        </div>
                                                    </b-card-body>
                                                </b-card>
                                            </b-col>
                                            <b-col md="6">
                                                <b-card no-body class="border shadow-none mb-0">
                                                    <b-card-body class="p-2">
                                                        <div class="text-center">
                                                            <p class="text-muted text-truncate mb-2">Total Revenue</p>
                                                            <h6 class="fs-lg">$59,239</h6>
                                                        </div>
                                                    </b-card-body>
                                                </b-card>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                                <div class="mt-4 d-flex gap-2">
                                    <b-button type="button" variant="primary" class="w-100">Edit</b-button>
                                    <b-button type="button" variant="danger" class="w-100"><i
                                            class="ph-trash align-middle me-1"></i> Delete</b-button>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
                <b-card no-body>
                    <b-card-body class="p-4">
                        <div>
                            <h5 class="fs-md mb-3">Description:</h5>
                            <p class="text-muted mb-2">A <b>hoodie</b> is a sweatshirt with a hood attached that may
                                also have a kangaroo pocket or full zipper. A sweatshirt is a long-sleeved pullover
                                shirt fashioned out of thick, usually cotton cloth material. Sweatshirts are almost
                                exclusively casual attire and hence not as dressy as some sweaters.</p>
                            <p class="text-muted">A thicker knit T-Shirt with a rag cut edge and sleeves and a printed
                                muscle man on the back, you will feel #ULTRA in one of these.</p>
                        </div>

                        <div class="mt-4">
                            <h5 class="fs-md mb-3">Product Details:</h5>
                            <div class="table-responsive">
                                <table class="table table-sm table-borderless align-middle description-table mb-0">
                                    <tbody>
                                        <tr>
                                            <th>Type</th>
                                            <td>Stripped shirts</td>
                                        </tr>
                                        <tr>
                                            <th>Sleeve</th>
                                            <td>Full Sleeve</td>
                                        </tr>
                                        <tr>
                                            <th>Country of Origin</th>
                                            <td>California</td>
                                        </tr>
                                        <tr>
                                            <th>Pack of</th>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <th>Style</th>
                                            <td>Modern</td>
                                        </tr>
                                        <tr>
                                            <th>Style Code</th>
                                            <td>TBS037</td>
                                        </tr>
                                        <tr>
                                            <th>Generic Name</th>
                                            <td>Formal Shirt</td>
                                        </tr>
                                        <tr>
                                            <th>Ideal For</th>
                                            <td>Men</td>
                                        </tr>
                                        <tr>
                                            <th>Size</th>
                                            <td>All Available</td>
                                        </tr>
                                        <tr>
                                            <th>Suitable For</th>
                                            <td>Formal Wear,Party Wear</td>
                                        </tr>
                                        <tr>
                                            <th>Seller</th>
                                            <td>Zibra Fashion</td>
                                        </tr>
                                        <tr>
                                            <th>Fabric</th>
                                            <td>Cotton</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="d-flex flex-wrap align-items-center gap-3 mb-2">
                        <b-card-title title-tag="h6" class="flex-grow-1 mb-0">Ratings & Reviews</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="dropdown card-header-dropdown">
                                <b-link class="text-muted dropdown-btn" href="#" data-bs-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    This Month <i class="mdi mdi-chevron-down ms-1"></i>
                                </b-link>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <b-link class="dropdown-item" href="#">Today</b-link>
                                    <b-link class="dropdown-item" href="#">Yesterday</b-link>
                                    <b-link class="dropdown-item" href="#">Last 7 Days</b-link>
                                    <b-link class="dropdown-item" href="#">Last 30 Days</b-link>
                                    <b-link class="dropdown-item" href="#">This Month</b-link>
                                    <b-link class="dropdown-item" href="#">Last Month</b-link>
                                </div>
                            </div>
                        </div>
                        <div class="flex-shrink-0">
                            <b-button type="button" variant="primary" @click="toggleModal">
                                <i class="ph-plus-circle align-middle me-1"></i> Add Review</b-button>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <b-row class="gy-3">
                            <b-col lg="2">
                                <div class="text-center mt-3 mt-lg-5">
                                    <h1 class="mb-3">4.9 <small class="fs-sm text-muted fw-normal">/ 5.0</small></h1>
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
                                    <SimpleBar class="me-lg-n3 pe-lg-4" style="max-height: 500px;">
                                        <ul class="list-unstyled mb-0" id="review-list">
                                            <li class="review-list py-2" v-for="(data, index) of reviews" :key="index">
                                                <div class="border border-dashed rounded p-3">
                                                    <div class="hstack flex-wrap gap-3 mb-4">
                                                        <div class="badge rounded-pill bg-danger-subtle text-danger mb-0">
                                                            <i class="mdi mdi-star"></i> <span class="rate-num">{{
                                                                data.rating }}</span>
                                                        </div>
                                                        <div class="vr"></div>
                                                        <div class="flex-grow-1">
                                                            <p class="mb-0"><b-link href="#!">{{ data.name }}</b-link></p>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <span class="text-muted fs-13 mb-0">{{ data.date }}</span>
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
                                                        <b-link href="javascript: void(0);" class="avatar-md"
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
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <!-- addReview Modal -->
        <b-modal class="fade" v-model="addReviewModal" id="addReview" size="lg" hide-footer title="Add Review"
            title-class="fs-5">
            <form class="tablelist-form" novalidate autocomplete="off" @submit.prevent="handleSubmit">
                <div class="mb-3">
                    <label for="reviewTitle-input" class="form-label">Review Title <span
                            class="text-danger">*</span></label>
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
                                            <img  class="img-fluid rounded d-block"
                                                :src="docImg" alt="Dropzone-Image" />
                                        </div>
                                    </div>
                                    <div class="flex-grow-1">
                                        <div class="pt-1">
                                            <h5 class="fs-md mb-1" >&nbsp;
                                                {{ file.name }}
                                            </h5>
                                            <p class="fs-sm text-muted mb-0" >
                                                <strong>{{ file.size / 1024 }}</strong> KB
                                            </p>
                                            <strong class="error text-danger" ></strong>
                                        </div>
                                    </div>
                                    <div class="flex-shrink-0 ms-3">
                                        <b-button  size="sm" variant="danger"
                                            @click="deleteRecord">Delete</b-button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    
                </div>
                <div class="text-end">
                    <b-button type="button" variant="ghost-danger" class="me-1" @click="addReviewModal = false"><i
                            class="ph-x align-middle me-1"></i> Close</b-button>
                    <b-button type="submit" variant="primary">Add Review</b-button>
                </div>
            </form>
        </b-modal>

        <!-- review delete modal -->
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
                <b-button type="button" variant="danger" class="w-sm" id="remove-cartproduct" @click="deleteData">Yes,
                    Delete It!</b-button>
            </div>
        </b-modal>
    </Layout>
</template>
