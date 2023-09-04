<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import moment from "moment";
import { CountTo } from "vue3-count-to";
import DropZone from "@/common/dropZone.vue";
import { ref, watch } from "vue";

import { ecommerceSellersOverviewChart } from "./chartsData";

import { sellerOverview } from "../../common/data";
import cImg1 from "../../../images/companies/img-1.png";
import docImg from "../../../images/new-document.png";
import pImg4 from "../../../images/products/img-4.png";

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

        return { dropzoneFile, files, drop, selectedFile };
    },
    data() {
        return {
            title: "Sellers Overview",
            items: [
                {
                    text: "Ecommerce",
                    href: "/",
                },
                {
                    text: "Sellers Overview",
                    active: true,
                },
            ],
            cImg1, docImg,
            ecommerceSellersOverviewChart: ecommerceSellersOverviewChart,
            page: 1,
            perPage: 10,
            pages: [],
            sellerList: sellerOverview,

            // 
            submitted: false,
            sellersModal: false,
            dataEdit: false,
            deleteModal: false,
            searchQuery: null,
            event: {
                id: "",
                img: "",
                img_alt: "",
                title: "",
                category: "",
                stock: "",
                price: "",
                discount: "",
                orders: "",
                ratings: "",
                publish: ""
            },
        };
    },
    computed: {
        displayedPosts() {
            return this.paginate(this.sellerList);
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.displayedPosts.filter((data) => {
                    return (
                        data.title.toLowerCase().includes(search) ||
                        data.category.toLowerCase().includes(search) ||
                        data.price.toString().includes(search) ||
                        data.stock.toString().includes(search)
                    );
                });
            } else {
                return this.displayedPosts;
            }
        },
    },
    watch: {
        sellerList() {
            this.setPages();
        },
    },
    created() {
        this.setPages();
    },
    methods: {
        setPages() {
            let numberOfPages = Math.ceil(this.sellerList.length / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        deleteRecord(ele) {
            ele.target.parentElement.parentElement.parentElement.remove();
        },
        paginate(sellerList) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return sellerList.slice(from, to);
        },

        // 
        handleSubmit() {
            if (this.dataEdit) {
                this.submitted = true;
                if (this.submitted && (this.event.title && this.event.category && this.event.stock && this.event.price)) {
                    this.sellerList = this.sellerList.map(item => item.id.toString() == this.event.id.toString() ? { ...item, ...this.event } : item);
                    this.sellersModal = false;
                }
            } else {
                this.submitted = true;
                if (this.submitted && (this.event.title && this.event.category && this.event.stock && this.event.price)) {
                    const data = {
                        id: (Math.floor(Math.random() * 100 + 20) - 20),
                        img: pImg4,
                        img_alt: "img-4.png",
                        orders: "--",
                        ratings: "--",
                        publish: moment(new Date()).format("DD MMM YYYY"),
                        ...this.event
                    };
                    this.sellerList.unshift(data);
                    this.sellersModal = false;
                }
            }
        },

        editDetails(data) {
            this.dataEdit = true;
            this.sellersModal = true;
            this.event = { ...data };
            this.event.publish = moment(new Date()).format("DD MMM YYYY");
            this.submitted = false;
        },

        toggleModal() {
            this.sellersModal = true;
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
                this.sellerList = this.sellerList.filter((item) => {
                    return item.id != this.event.id;
                });
                this.deleteModal = false;
            }
        }
    },
    components: {
        Layout,
        PageHeader,
        CountTo,
        DropZone
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <b-row>
            <b-col xxl="9">
                <b-card no-body>
                    <b-card-body class="d-flex align-items-center gap-2">
                        <b-card-title title-tag="h5" class="flex-grow-1 mb-0">Portfolio Overview</b-card-title>
                        <div class="flex-shrink-0">
                            <b-button type="button" variant="subtle-secondary" size="sm" class="me-1">
                                ALL
                            </b-button>
                            <b-button type="button" variant="subtle-secondary" size="sm" class="me-1">
                                1M
                            </b-button>
                            <b-button type="button" variant="subtle-secondary" size="sm" class="me-1">
                                6M
                            </b-button>
                            <b-button type="button" variant="subtle-primary" size="sm">
                                1Y
                            </b-button>
                        </div>
                    </b-card-body>
                    <div class="border border-start-0 border-end-0">
                        <b-row class="g-0">
                            <b-col lg="3" md="6">
                                <b-card-body class="text-center border-end-md border-bottom-lg-0 border-bottom">
                                    <h5 class="mb-2">
                                        <count-to :startVal="0" :duration="5000" :endVal="7585"></count-to>
                                    </h5>
                                    <p class="text-muted mb-0">Orders</p>
                                </b-card-body>
                            </b-col>
                            <b-col lg="3" md="6">
                                <b-card-body class="text-center border-end-lg border-bottom-lg-0 border-bottom">
                                    <h5 class="mb-2">
                                        <count-to :startVal="0" :duration="5000" :endVal="750.36" decimals="2" prefix="$"
                                            suffix="M"></count-to>
                                    </h5>
                                    <p class="text-muted mb-0">Earnings</p>
                                </b-card-body>
                            </b-col>
                            <b-col lg="3" md="6">
                                <b-card-body class="text-center border-end-md border-bottom-md-0 border-bottom">
                                    <h5 class="mb-2">
                                        <count-to :startVal="0" :duration="5000" :endVal="328"></count-to>
                                    </h5>
                                    <p class="text-muted mb-0">Refunds</p>
                                </b-card-body>
                            </b-col>
                            <b-col lg="3" md="6">
                                <b-card-body class="text-center">
                                    <h5 class="mb-2 text-success">
                                        <count-to :startVal="0" :duration="5000" :endVal="18.92" decimals="2"
                                            suffix="%"></count-to>
                                    </h5>
                                    <p class="text-muted mb-0">Conversation Ratio</p>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </div>
                    <b-card-body class="ps-1">
                        <apexchart class="apex-charts" height="400" dir="ltr" :series="ecommerceSellersOverviewChart.series"
                            :options="ecommerceSellersOverviewChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
                <div id="productList">
                    <b-row class="g-3 justify-content-between mb-3">
                        <b-col lg="3">
                            <div class="search-box">
                                <input type="text" class="form-control search" placeholder="Search products, price etc..."
                                    v-model="searchQuery">
                                <i class="ri-search-line search-icon"></i>
                            </div>
                        </b-col>
                        <b-col lg="auto">
                            <b-button variant="subtle-danger" class="d-none" id="remove-actions"
                                onClick="deleteMultiple()"><i class="ri-delete-bin-2-line"></i></b-button>
                            <b-button type="button" variant="primary" class="add-btn" @click="toggleModal"><i
                                    class="bi bi-plus-circle align-baseline me-1"></i> Add
                                Product</b-button>

                        </b-col>
                    </b-row>
                    <b-card no-body>
                        <b-card-body>
                            <div class="table-responsive">
                                <table class="table table-centered align-middle table-nowrap mb-0">
                                    <thead class="table-active">
                                        <tr>
                                            <th>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="option"
                                                        id="checkAll">
                                                    <label class="form-check-label" for="checkAll"></label>
                                                </div>
                                            </th>
                                            <th class="sort cursor-pointer" data-sort="products">Products</th>
                                            <th class="sort cursor-pointer" data-sort="category">Category</th>
                                            <th class="sort cursor-pointer" data-sort="stock">Stock</th>
                                            <th class="sort cursor-pointer" data-sort="price">Price</th>
                                            <th class="sort cursor-pointer" data-sort="orders">Orders</th>
                                            <th class="sort cursor-pointer" data-sort="rating">Rating</th>
                                            <th class="sort cursor-pointer" data-sort="published">Published</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody class="list form-check-all">

                                        <tr v-for="(data, index) of resultQuery" :key="index">
                                            <td>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" name="chk_child">
                                                    <label class="form-check-label"></label>
                                                </div>
                                            </td>
                                            <td class="id" style="display:none;"><b-link href="#"
                                                    class="fw-medium link-primary">#TB0{{ data.id }}</b-link></td>
                                            <td class="products">
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-xs bg-light rounded p-1 me-2">
                                                        <img :src="data.img" :alt="data.img_alt"
                                                            class="img-fluid d-block" />
                                                    </div>
                                                    <div>
                                                        <h6 class="mb-0">
                                                            <router-link to="/ecommerce/product-details"
                                                                class="text-reset text-capitalize products">
                                                                {{ data.title }}
                                                            </router-link>
                                                        </h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="discount d-none">{{ data.category }}</td>
                                            <td class="category">{{ data.category }}</td>
                                            <td class="stock">{{ data.stock }}</td>
                                            <td class="price">{{ data.price }}</td>
                                            <td class="orders">{{ data.orders }}</td>
                                            <td class="rating">
                                                <span class="badge bg-warning-subtle text-warning"><i
                                                        class="bi bi-star-fill align-baseline me-1"></i>{{ data.ratings
                                                        }}</span>
                                            </td>
                                            <td class="published">{{ data.publish }}</td>
                                            <td>
                                                <div class="dropdown position-static">
                                                    <b-button variant="subtle-secondary" size="sm" class="btn-icon"
                                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="bi bi-three-dots-vertical"></i>
                                                    </b-button>

                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li><router-link class="dropdown-item" to="/ecommerce/product-details"><i
                                                                    class="ph-eye align-middle me-1"></i> View</router-link></li>
                                                        <li><b-link class="dropdown-item edit-item-btn"
                                                                href="javascript: void(0);" @click="editDetails(data)">
                                                                <i class="ph-pencil align-middle me-1"></i> Edit</b-link>
                                                        </li>
                                                        <li><b-link class="dropdown-item remove-item-btn"
                                                                href="javascript: void(0);"
                                                                @click="deleteModalToggle(data)">
                                                                <i class="ph-trash align-middle me-1"></i> Remove</b-link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div><!--end table-responsive-->

                            <div class="noresult" v-if="resultQuery.length < 1">
                                <div class="text-center py-4">
                                    <div class="avatar-md mx-auto mb-4">
                                        <div class="avatar-title bg-light text-primary rounded-circle fs-4xl">
                                            <i class="bi bi-search"></i>
                                        </div>
                                    </div>
                                    <h5 class="mt-2">Sorry! No Result Found</h5>
                                    <p class="text-muted mb-0">We've searched more than 150+ products We did not find
                                        any products for you search.</p>
                                </div>
                            </div>

                            <b-row class="mt-3 align-items-center" id="pagination-element" v-if="resultQuery.length >= 1">
                                <b-col cols="sm">
                                    <div class="text-muted">
                                        Showing <span class="fw-semibold">{{ resultQuery.length }}</span> of <span
                                            class="fw-semibold">{{ sellerList.length }}</span> Results
                                    </div>
                                </b-col>

                                <b-col sm="auto" class="mt-3 mt-sm-0">
                                    <div class="pagination-wrap hstack gap-2">
                                        <b-link class="page-item pagination-prev" href="#" :disabled="page <= 1"
                                            @click="page--">
                                            <i class="mdi mdi-chevron-left align-middle"></i>
                                        </b-link>
                                        <ul class="pagination listjs-pagination mb-0">
                                            <li :class="{ active: pageNumber == page, disabled: pageNumber == '...', }"
                                                v-for="(pageNumber, index) in pages" :key="index"
                                                @click="page = pageNumber">
                                                <b-link class="page" href="#" data-i="1" data-page="10">{{ pageNumber
                                                }}</b-link>
                                            </li>
                                        </ul>
                                        <b-link class="page-item pagination-next" href="#" @click="page++"
                                            :disabled="page >= pages.length">
                                            <i class="mdi mdi-chevron-right align-middle"></i>
                                        </b-link>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-card-body>
                    </b-card>
                </div>
            </b-col>
            <b-col xxl="3">
                <b-card no-body class="overflow-hidden">
                    <div class="ratio ratio-16x9">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509156.773725123!2d-123.79622260161696!3d37.19312212390098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1678106410566!5m2!1sen!2sin"
                            style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <b-card-body class="pt-1">
                        <div class="avatar-lg mt-n5 position-relative mx-auto">
                            <div class="avatar-title bg-body-secondary rounded shadow">
                                <img :src="cImg1" alt="" class="avatar-sm" />
                            </div>
                        </div>
                        <div class="text-center mt-4">
                            <h5 class="mb-2">Terry & Jerry</h5>
                            <p class="text-muted mb-4 pb-2">Manufacture & Retail</p>
                        </div>
                        <div class="table-responsive table-card mb-0">
                            <table class="table align-middle table-borderless mb-0">
                                <tbody>
                                    <tr>
                                        <th>Owner Name</th>
                                        <td>Lenna Labadie</td>
                                    </tr>
                                    <tr>
                                        <th>Company Type</th>
                                        <td>Partnership</td>
                                    </tr>
                                    <tr>
                                        <th>Location</th>
                                        <td>United States</td>
                                    </tr>
                                    <tr>
                                        <th>Website</th>
                                        <td><b-link href="#!" class="text-reset">steex@themesbrand.com</b-link></td>
                                    </tr>
                                    <tr>
                                        <th>Phone Number</th>
                                        <td><b-link href="javascript: void(0);">+(542) 95135 74123</b-link></td>
                                    </tr>
                                    <tr>
                                        <th>Since</th>
                                        <td>1995</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <ul class="hstack gap-2 justify-content-center list-unstyled mt-2 pt-2 mb-0">
                            <li>
                                <b-link href="#!" class="btn btn-success btn-sm"><i class="bi bi-whatsapp"></i></b-link>
                            </li>
                            <li>
                                <b-link href="#!" class="btn btn-primary btn-sm"><i class="bi bi-facebook"></i></b-link>
                            </li>
                            <li>
                                <b-link href="#!" class="btn btn-info btn-sm"><i class="bi bi-twitter"></i></b-link>
                            </li>
                            <li>
                                <b-link href="#!" class="btn btn-danger btn-sm"><i class="bi bi-envelope"></i></b-link>
                            </li>
                        </ul>
                    </b-card-body>
                </b-card>
                <b-card no-body>
                    <b-card-body>
                        <div>
                            <h6 class="text-muted text-uppercase fw-semibold mb-4">Customer Reviews</h6>
                            <div>
                                <div>
                                    <div class="bg-warning-subtle px-3 py-2 rounded-2 mb-2">
                                        <div class="d-flex align-items-center">
                                            <div class="flex-grow-1">
                                                <div class="fs-16 align-middle text-warning">
                                                    <i class="ri-star-fill"></i>
                                                    <i class="ri-star-fill"></i>
                                                    <i class="ri-star-fill"></i>
                                                    <i class="ri-star-fill"></i>
                                                    <i class="ri-star-half-fill"></i>
                                                </div>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <h6 class="mb-0">4.8 out of 5</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <div class="text-muted">Total <span class="fw-medium">5.50k</span> reviews</div>
                                    </div>
                                </div>

                                <div class="mt-3">
                                    <b-row class="align-items-center g-3 pt-2">
                                        <b-col cols="auto">
                                            <div>
                                                <h6 class="mb-0">5 star</h6>
                                            </div>
                                        </b-col>
                                        <b-col>
                                            <div>
                                                <div class="progress animated-progress progress-sm">
                                                    <div class="progress-bar bg-primary" role="progressbar"
                                                        style="width: 50.16%" aria-valuenow="50.16" aria-valuemin="0"
                                                        aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col cols="auto">
                                            <div>
                                                <h6 class="mb-0 text-muted">2758</h6>
                                            </div>
                                        </b-col>
                                    </b-row>


                                    <b-row class="align-items-center g-3 pt-2">
                                        <b-col cols="auto">
                                            <div>
                                                <h6 class="mb-0">4 star</h6>
                                            </div>
                                        </b-col>
                                        <b-col>
                                            <div>
                                                <div class="progress animated-progress progress-sm">
                                                    <div class="progress-bar bg-secondary" role="progressbar"
                                                        style="width: 29.32%" aria-valuenow="29.32" aria-valuemin="0"
                                                        aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col cols="auto">
                                            <div>
                                                <h6 class="mb-0 text-muted">1063</h6>
                                            </div>
                                        </b-col>
                                    </b-row>


                                    <b-row class="align-items-center g-3 pt-2">
                                        <b-col cols="auto">
                                            <div>
                                                <h6 class="mb-0">3 star</h6>
                                            </div>
                                        </b-col>
                                        <b-col>
                                            <div>
                                                <div class="progress animated-progress progress-sm">
                                                    <div class="progress-bar bg-success" role="progressbar"
                                                        style="width: 18.12%" aria-valuenow="18.12" aria-valuemin="0"
                                                        aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col cols="auto">
                                            <div>
                                                <h6 class="mb-0 text-muted">997</h6>
                                            </div>
                                        </b-col>
                                    </b-row>


                                    <b-row class="align-items-center g-3 pt-2">
                                        <b-col cols="auto">
                                            <div>
                                                <h6 class="mb-0">2 star</h6>
                                            </div>
                                        </b-col>
                                        <b-col>
                                            <div>
                                                <div class="progress animated-progress progress-sm">
                                                    <div class="progress-bar bg-warning" role="progressbar"
                                                        style="width: 4.98%" aria-valuenow="4.98" aria-valuemin="0"
                                                        aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </b-col>

                                        <b-col cols="auto">
                                            <div>
                                                <h6 class="mb-0 text-muted">227</h6>
                                            </div>
                                        </b-col>
                                    </b-row>


                                    <b-row class="align-items-center g-3 pt-2">
                                        <b-col cols="auto">
                                            <div>
                                                <h6 class="mb-0">1 star</h6>
                                            </div>
                                        </b-col>
                                        <b-col>
                                            <div>
                                                <div class="progress animated-progress progress-sm">
                                                    <div class="progress-bar bg-danger" role="progressbar"
                                                        style="width: 7.42%" aria-valuenow="7.42" aria-valuemin="0"
                                                        aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col cols="auto">
                                            <div>
                                                <h6 class="mb-0 text-muted">408</h6>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </div>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
                <b-card no-body>
                    <b-card-header>
                        <b-card-title title-tag="h6" class="mb-0">Contact Support</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <form action="#">
                            <div class="mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"
                                    placeholder="Enter your messages..."></textarea>
                            </div>
                            <div class="text-end">
                                <b-button type="submit" variant="secondary"><i
                                        class="bi bi-envelope align-baseline me-1"></i> Send Messages</b-button>
                            </div>
                        </form>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-modal v-model="sellersModal" class="fade" id="showModal" :title="dataEdit ? 'Edit product' : 'Add product'"
            hide-footer header-class="px-4 pt-4" body-class="p-4" centered>
            <b-form class="tablelist-form" novalidate autocomplete="off" @submit.prevent="handleSubmit">

                <div class="mb-3">
                    <label for="product-title-input" class="form-label">Product title</label>
                    <input type="text" id="product-title-input" class="form-control" placeholder="Enter product title"
                        v-model="event.title" :class="{ 'is-invalid': submitted && !event.title }">
                </div>

                <div class="mb-3">
                    <label class="form-label">Product Images</label>

                    <DropZone @drop.prevent="drop" @change="selectedFile" cloudIcon="bootstrap"
                        dropzoneClass="file-dropzone border border-1 border-dashed" />
                    <ul class="list-unstyled mb-0" id="dropzone-preview">
                        <li class="mt-2" id="dropzone-preview-list">

                            <div class="border rounded" v-for="(file, index) of files" :key="index">
                                <div class="d-flex flex-wrap gap-2 p-2">
                                    <div class="flex-shrink-0 me-3">
                                        <div class="avatar-sm bg-light rounded p-2">
                                            <img class="img-fluid rounded d-block" :src="docImg" alt="Dropzone-Image" />
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

                <div class="mb-3">
                    <label for="product-category-input" class="form-label">Product category</label>

                    <select class="form-select" id="product-category-input" v-model="event.category"
                        :class="{ 'is-invalid': submitted && !event.category }">
                        <option value="">Select product category</option>
                        <option value="Appliances">Appliances</option>
                        <option value="Automotive Accessories">Automotive Accessories</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Grocery">Grocery</option>
                        <option value="Headphones">Headphones</option>
                        <option value="Kids">Kids</option>
                        <option value="Luggage">Luggage</option>
                        <option value="Sports">Sports</option>
                        <option value="Watches">Watches</option>
                    </select>
                </div>

                <b-row>
                    <b-col lg="6">
                        <div class="mb-3">
                            <label for="product-stock-input" class="form-label">Stocks</label>
                            <input type="text" id="product-stock-input" class="form-control"
                                placeholder="Enter product stocks" v-model="event.stock"
                                :class="{ 'is-invalid': submitted && !event.stock }">
                        </div>
                    </b-col>
                    <b-col lg="6">
                        <div class="mb-3">
                            <label for="product-price-input" class="form-label">Price</label>
                            <div class="input-group mb-3">
                                <span class="input-group-text">$</span>
                                <input type="text" class="form-control" id="product-price-input"
                                    placeholder="Enter product price" v-model="event.price"
                                    :class="{ 'is-invalid': submitted && !event.price }">
                            </div>
                        </div>
                    </b-col>
                </b-row>

                <div>
                    <div class="hstack gap-2 justify-content-end">
                        <b-button type="button" variant="ghost-danger" @click="sellersModal = false"><i
                                class="bi bi-x-lg align-baseline me-1"></i> Close</b-button>
                        <b-button type="submit" variant="primary" id="add-btn">{{ dataEdit ? "update" : "Add Product"
                        }}</b-button>
                    </div>
                </div>
            </b-form>
        </b-modal>
        <!-- modal -->

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
</Layout></template>