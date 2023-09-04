<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import DropZone from "@/common/dropZone.vue";
import {
    ref,
    watch
} from "vue";

import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import GoogleMap from "./googlemap.vue";

// property
import rImg1 from "../../../images/real-estate/img-01.jpg";
import rImg2 from "../../../images/real-estate/img-02.jpg";
import rImg3 from "../../../images/real-estate/img-03.jpg";
import rImg4 from "../../../images/real-estate/img-04.jpg";
import rImg5 from "../../../images/real-estate/img-05.jpg";

import newDoc from "../../../images/new-document.png"

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

        watch(() => [...files.value], (currentValue) => {
            return currentValue;
        });
        return {
            dropzoneFile,
            files,
            drop,
            selectedFile
        };
    },
    data() {
        return {
            title: "Listing Map",
            items: [{
                    text: "Reale Estate",
                    href: "/",
                },
                {
                    text: "Listing Map",
                    active: true,
                },
            ],
            // images
            rImg1,
            rImg2,
            rImg3,
            rImg4,
            rImg5,
            newDoc,
            //
            modalShow: false,
            deleteModal: false,
            date: null,
            config: {
                mode: "range",
                dateFormat: "d M, Y",
            },
        };
    },
    components: {
        Layout,
        PageHeader,
        flatPickr,
        DropZone,
        GoogleMap
    },
};
</script>

<template>
<Layout>
    <PageHeader :title="title" :items="items" />
    <b-row>
        <b-col lg="12">
            <b-card no-body>
                <b-card-body>
                    <b-row class="g-3">
                        <b-col xl="3" sm="6">
                            <div class="search-box">
                                <input type="text" class="form-control search" placeholder="Search products, price etc...">
                                <i class="ri-search-line search-icon"></i>
                            </div>
                        </b-col>
                        <b-col xl="2" sm="6">
                            <select class="form-control" id="idType" data-choices data-choices-search-false>
                                <option value="all">Select All Type</option>
                                <option value="Villa">Villa</option>
                                <option value="Apartment">Apartment</option>
                                <option value="Residency">Residency</option>
                                <option value="Others">Others</option>
                            </select>
                        </b-col>
                        <b-col xl="2" sm="6">
                            <select class="form-control" id="idBedroom" data-choices data-choices-search-false>
                                <option value="all">Select All</option>
                                <option value="1">1 Bedroom</option>
                                <option value="2">2 Bedroom</option>
                                <option value="3">3 Bedroom</option>
                                <option value="4">4 Bedroom</option>
                                <option value="5">5 Bedroom</option>
                            </select>
                        </b-col>
                        <b-col xl="2" sm="6">
                            <select class="form-control" id="idBedroom" data-choices data-choices-search-false>
                                <option value="all">Select All</option>
                                <option value="0-$2000">0-$1000</option>
                                <option value="$1000-$2000">$1000-$2000</option>
                                <option value="$2000-$3000">$2000-$3000</option>
                                <option value="$3000-$4000">$3000-$4000</option>
                                <option value="$4000-$5000">$4000-$5000</option>
                            </select>
                        </b-col>
                        <b-col xl="2" sm="6">
                            <div>
                                <flat-pickr placeholder="Select date" v-model="date" :config="config" class="form-control" id="demo-datepicker"></flat-pickr>
                            </div>
                        </b-col>
                        <b-col cols="xl" sm="6">
                            <b-button variant="primary" class="w-100" @click="modalShow = !modalShow">Add
                                Property</b-button>
                        </b-col>
                    </b-row>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>

    <b-card no-body>
        <b-card-body class="p-0">
            <b-row class="g-0">
                <b-col xl="5">
                    <b-card-header>
                        <div class="d-flex align-items-center flex-wrap gap-2 text-muted">
                            <b>249</b> items in
                            <span class="badge bg-danger-subtle text-danger">Villa</span>
                            <div class="vr"></div>
                            <b-link href="#!" class="badge border text-reset">$2000-$3000</b-link>
                            <div class="vr"></div>
                            <b-link href="#!" class="badge border text-reset">4 Bedroom</b-link>
                        </div>
                    </b-card-header>

                    <b-card-body class="border-bottom">
                        <b-row class="gy-3">
                            <b-col lg="5">
                                <div class="position-relative">
                                    <img :src="rImg1" alt="" class="img-fluid rounded d-block mx-auto" />
                                    <div class="position-absolute bottom-0 start-0 m-2">
                                        <span class="badge bg-white text-danger fs-xxs"><i class="bi bi-house-door align-baseline me-1"></i> Villa</span>
                                    </div>
                                </div>
                            </b-col>
                            <b-col lg="7">
                                <div class="d-flex flex-column h-100">
                                    <div>
                                        <div class="dropdown float-end">
                                            <b-button variant="light" size="sm" class="btn-icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="bi bi-three-dots-vertical"></i>
                                            </b-button>
                                            <ul class="dropdown-menu dropdown-menu-end">
                                                <li>
                                                    <b-link class="dropdown-item" @click="modalShow = !modalShow"><i class="bi bi-pencil-square me-1 align-baseline"></i>
                                                        Edit</b-link>
                                                </li>
                                                <li>
                                                    <b-link class="dropdown-item" href="#" @click="deleteModal = !deleteModal"><i class="bi bi-trash3 me-1 align-baseline"></i> Delete</b-link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h6 class="fs-lg text-capitalize text-truncate">
                                            <router-link to="/real-estate/property-overview" class="text-reset">the
                                                Country House</router-link>
                                        </h6>
                                        <p class="text-muted"><i class="bi bi-geo-alt align-baseline me-1"></i> West
                                            Midlands, United Kingdom</p>
                                    </div>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 2 Bedroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 1 Bathroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 1458
                                                sqft</p>
                                        </li>
                                    </ul>
                                    <div class="border-top border-dashed mt-auto pt-3 d-flex align-items-center justify-content-between gap-3">
                                        <h5 class="mb-0">$2451.39</h5>
                                        <router-link to="/real-estate/property-overview" class="link-effect">Read More
                                            <i class="bi bi-chevron-right align-baseline ms-1"></i></router-link>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-body>
                    <b-card-body class="border-bottom">
                        <b-row class="gy-3">
                            <b-col lg="5">
                                <div class="position-relative">
                                    <img :src="rImg2" alt="" class="img-fluid rounded d-block mx-auto" />
                                    <div class="position-absolute bottom-0 start-0 m-2">
                                        <span class="badge bg-white text-success fs-xxs"><i class="bi bi-buildings align-baseline me-1"></i> Residency</span>
                                    </div>
                                </div>
                            </b-col>
                            <b-col lg="7">
                                <div class="d-flex flex-column h-100">
                                    <div>
                                        <div class="dropdown float-end">
                                            <b-button variant="light" size="sm" class="btn-icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="bi bi-three-dots-vertical"></i>
                                            </b-button>
                                            <ul class="dropdown-menu dropdown-menu-end">
                                                <li>
                                                    <b-link class="dropdown-item" @click="modalShow = !modalShow"><i class="bi bi-pencil-square me-1 align-baseline"></i>
                                                        Edit</b-link>
                                                </li>
                                                <li>
                                                    <b-link class="dropdown-item" href="#" @click="deleteModal = !deleteModal"><i class="bi bi-trash3 me-1 align-baseline"></i> Delete</b-link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h6 class="fs-lg text-capitalize text-truncate">
                                            <router-link to="/real-estate/property-overview" class="text-reset">Classic White
                                                House</router-link>
                                        </h6>
                                        <p class="text-muted"><i class="bi bi-geo-alt align-baseline me-1"></i>
                                            Baden-Württemberg, Germany</p>
                                    </div>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 3 Bedroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 2 Bathroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 1324
                                                sqft</p>
                                        </li>
                                    </ul>
                                    <div class="border-top border-dashed mt-auto pt-3 d-flex align-items-center justify-content-between gap-3">
                                        <h5 class="mb-0">$3698.99</h5>
                                        <router-link to="/real-estate/property-overview" class="link-effect">Read More
                                            <i class="bi bi-chevron-right align-baseline ms-1"></i></router-link>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-body>
                    <b-card-body class="border-bottom">
                        <b-row class="gy-3">
                            <b-col lg="5">
                                <div class="position-relative">
                                    <img :src="rImg3" alt="" class="img-fluid rounded d-block mx-auto" />
                                    <div class="position-absolute bottom-0 start-0 m-2">
                                        <span class="badge bg-white text-info fs-xxs"><i class="bi bi-building align-baseline me-1"></i> Apartment</span>
                                    </div>
                                </div>
                            </b-col>
                            <b-col lg="7">
                                <div class="d-flex flex-column h-100">
                                    <div>
                                        <div class="dropdown float-end">
                                            <b-button variant="light" size="sm" class="btn-icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="bi bi-three-dots-vertical"></i>
                                            </b-button>
                                            <ul class="dropdown-menu dropdown-menu-end">
                                                <li>
                                                    <b-link class="dropdown-item" @click="modalShow = !modalShow"><i class="bi bi-pencil-square me-1 align-baseline"></i>
                                                        Edit</b-link>
                                                </li>
                                                <li>
                                                    <b-link class="dropdown-item" href="#" @click="deleteModal = !deleteModal"><i class="bi bi-trash3 me-1 align-baseline"></i> Delete</b-link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h6 class="fs-lg text-capitalize text-truncate">
                                            <router-link to="/real-estate/property-overview" class="text-reset">Vintage
                                                Apartment</router-link>
                                        </h6>
                                        <p class="text-muted"><i class="bi bi-geo-alt align-baseline me-1"></i> Minas
                                            Gerais, Brazil</p>
                                    </div>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 2 Bedroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 1 Bathroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 1025
                                                sqft</p>
                                        </li>
                                    </ul>
                                    <div class="border-top border-dashed mt-auto pt-3 d-flex align-items-center justify-content-between gap-3">
                                        <h5 class="mb-0">$1249.99</h5>
                                        <router-link to="/real-estate/property-overview" class="link-effect">Read More
                                            <i class="bi bi-chevron-right align-baseline ms-1"></i></router-link>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-body>
                    <b-card-body class="border-bottom">
                        <b-row class="gy-3">
                            <b-col lg="5">
                                <div class="position-relative">
                                    <img :src="rImg4" alt="" class="img-fluid rounded d-block mx-auto" />
                                    <div class="position-absolute bottom-0 start-0 m-2">
                                        <span class="badge bg-white text-danger fs-xxs"><i class="bi bi-house-door align-baseline me-1"></i> Villa</span>
                                    </div>
                                </div>
                            </b-col>
                            <b-col lg="7">
                                <div class="d-flex flex-column h-100">
                                    <div>
                                        <div class="dropdown float-end">
                                            <b-button variant="light" size="sm" class="btn-icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="bi bi-three-dots-vertical"></i>
                                            </b-button>
                                            <ul class="dropdown-menu dropdown-menu-end">
                                                <li>
                                                    <b-link class="dropdown-item" @click="modalShow = !modalShow"><i class="bi bi-pencil-square me-1 align-baseline"></i>
                                                        Edit</b-link>
                                                </li>
                                                <li>
                                                    <b-link class="dropdown-item" href="#" @click="deleteModal = !deleteModal"><i class="bi bi-trash3 me-1 align-baseline"></i> Delete</b-link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h6 class="fs-lg text-capitalize text-truncate">
                                            <router-link to="/real-estate/property-overview" class="text-reset">Whitespace
                                                Vintage Villa</router-link>
                                        </h6>
                                        <p class="text-muted"><i class="bi bi-geo-alt align-baseline me-1"></i>
                                            Cantabria, Spain</p>
                                    </div>
                                    <ul class="d-flex align-items-center gap-2 flex-wrap list-unstyled">
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-house align-baseline text-primary me-1"></i> 4 Bedroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="ph ph-bathtub align-middle text-primary me-1"></i> 2 Bathroom
                                            </p>
                                        </li>
                                        <li>
                                            <p class="text-muted mb-0"><i class="bi bi-columns align-baseline text-primary me-1"></i> 1754
                                                sqft</p>
                                        </li>
                                    </ul>
                                    <div class="border-top border-dashed mt-auto pt-3 d-flex align-items-center justify-content-between gap-3">
                                        <h5 class="mb-0">$3495.76</h5>
                                        <router-link to="/real-estate/property-overview" class="link-effect">Read More
                                            <i class="bi bi-chevron-right align-baseline ms-1"></i></router-link>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-body>
                    <b-card-body>
                        <b-row class="align-items-center">
                            <b-col cols="sm">
                                <div class="text-muted text-center text-sm-start">
                                    Showing <span class="fw-semibold">4</span> of <span class="fw-semibold">10</span>
                                    Results
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
                                        <li>
                                            <b-link class="page" href="#" data-i="3" data-page="10">3</b-link>
                                        </li>
                                    </ul>
                                    <b-link class="page-item pagination-next" href="#">
                                        Next
                                    </b-link>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-col>
                <b-col xl="7">
                    <GoogleMap class="" style="min-height: 100%;" />
                </b-col>
            </b-row>
        </b-card-body>
    </b-card>
    <!-- Modal -->
</Layout>

<b-modal v-model="modalShow" title='Add Property' hide-footer no-close-on-backdro centered>
    <form class="tablelist-form" novalidate="" autocomplete="off">

        <div class="mb-3">
            <label class="form-label">Property Images<span class="text-danger">*</span></label>

            <DropZone @drop.prevent="drop" @change="selectedFile" cloudIcon="bootstrap" dropzoneClass="file-dropzone border border-1 border-dashed" />
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
                                <b-button variant="danger" size="sm" @click="deleteRecord">Delete</b-button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div class="mb-3">
            <label for="property-title-input" class="form-label">Property title<span class="text-danger">*</span></label>
            <input type="text" id="property-title-input" class="form-control" placeholder="Enter Property title">
        </div>

        <div class="mb-3">
            <label for="property-type-input" class="form-label">Property Type<span class="text-danger">*</span></label>

            <select class="form-select" name="status-field" id="status-field">
                <option value="">Requirement Type</option>
                <option value="Apartment">Apartment</option>
                <option value="Residency">Residency</option>
                <option value="Villa">Villa</option>
            </select>
        </div>

        <b-row>
            <b-col lg="6">
                <div class="mb-3">
                    <label for="bedroom-input" class="form-label">Bedroom<span class="text-danger">*</span></label>
                    <input type="number" id="bedroom-input" class="form-control" placeholder="Enter Bedroom" required="">
                </div>
            </b-col>
            <b-col lg="6">
                <div class="mb-3">
                    <label for="bathroom-input" class="form-label">Bathroom<span class="text-danger">*</span></label>
                    <input type="number" class="form-control" id="bathroom-input" placeholder="Enter Bathroom" required="">
                </div>
            </b-col>
            <b-col lg="6">
                <div class="mb-3">
                    <label for="sqft-input" class="form-label">SQFT<span class="text-danger">*</span></label>
                    <input type="number" class="form-control" id="sqft-input" placeholder="Enter sqft" required="">
                </div>
            </b-col>
            <b-col lg="6">
                <div class="mb-3">
                    <label for="Property-price-input" class="form-label">Price<span class="text-danger">*</span></label>
                    <div class="input-group">
                        <span class="input-group-text">$</span>
                        <input type="number" class="form-control" id="Property-price-input" placeholder="Enter price" required="">
                    </div>
                </div>
            </b-col>
            <b-col lg="12">
                <div class="mb-3">
                    <label for="addressLine" class="form-label">Sort Address<span class="text-danger">*</span></label>
                    <textarea class="form-control" id="addressLine" rows="3" placeholder="Enter sort address" required=""></textarea>
                </div>
            </b-col>
        </b-row>
        <div class="mt-3 hstack gap-2 justify-content-end">
            <b-button type="button" variant="ghost-danger" @click="modalShow = false">
                <i class="bi bi-x-lg align-baseline me-1"></i> Close</b-button>
            <b-button type="button" variant="primary" id="add-btn"> Add Property</b-button>
        </div>
    </form>
</b-modal>

<!-- delete modal -->
<b-modal v-model="deleteModal" body-class="p-md-5" modal-class="zoomIn" hide-footer no-close-on-backdrop centered>
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
        <b-button type="button" variant="light" class="w-sm btn-hover" @click="deleteModal = false">Close</b-button>
        <b-button type="button" variant="danger" class="w-sm btn-hover" id="delete-record" @click="deleteData">Yes,
            Delete It!</b-button>
    </div>
</b-modal>
</template>
