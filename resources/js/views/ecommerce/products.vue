<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";
import { ref, watch } from "vue";
import moment from "moment";
import Multiselect from '@vueform/multiselect';
import useVuelidate from "@vuelidate/core";
import DropZone from "../../common/dropZone.vue";

import { products } from "../../common/data";
import pImg4 from "../../../images/products/img-4.png";
import docImg from "../../../images/new-document.png";

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
            dropzoneFile, files, drop, selectedFile,
            v$: useVuelidate()
        };
    },

    data() {
        return {
            title: "Products",
            items: [
                {
                    text: "Ecommerce",
                    href: "/",
                },
                {
                    text: "Products",
                    active: true,
                },
            ],
            products: products,
            docImg,

            // MultiSelect
            brandSelectValue: ['Adidas', 'Boat'],
            brandOptions: [
                { value: 'Adidas', label: 'Adidas' },
                { value: 'Boat', label: 'Boat' },
                { value: 'Puma', label: 'Puma' },
                { value: 'Realme', label: 'Realme' },
            ],

            categorySelectValue: 'all',
            categoryOptions: [
                { value: 'all', label: 'Select Category' },
                { value: 'Appliances', label: 'Appliances' },
                { value: 'Automotive Accessories', label: 'Automotive Accessories' },
                { value: 'Electronics', label: 'Electronics' },
                { value: 'Fashion', label: 'Fashion' },
                { value: 'Furniture', label: 'Furniture' },
                { value: 'Grocery', label: 'Grocery' },
                { value: 'Headphones', label: 'Headphones' },
                { value: 'Kids', label: 'Kids' },
                { value: 'Luggage', label: 'Luggage' },
                { value: 'Sports', label: 'Sports' },
                { value: 'Watches', label: 'Watches' },
            ],

            discountSelectValue: 'all',
            discountOptions: [
                { value: 'all', label: 'Select All Discount' },
                { value: '50$', label: '50% or more' },
                { value: '40%', label: '40% or more' },
                { value: '30%', label: '30% or more' },
                { value: '20%', label: '20% or more' },
                { value: '10%', label: '10% or more' },
                { value: '0%', label: 'Less than 10%' }
            ],

            searchQuery: null,

            // Pagination
            page: 1,
            perPage: 10,
            pages: [],

            // 
            submitted: false,
            productModal: false,
            dataEdit: false,
            deleteModal: false,

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
            }
            //
        };
    },
    computed: {
        // Pagination
        displayedPosts() {
            return this.paginate(this.products);
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.displayedPosts.filter((data) => {
                    return (
                        data.title.toLowerCase().includes(search) ||
                        data.orders.toString().toLowerCase().includes(search) ||
                        data.stock.toString().toLowerCase().includes(search)
                    );
                });
            } else {
                return this.displayedPosts;
            }
        },
    },
    watch: {
        products() {
            this.setPages();
        },
    },
    created() {
        this.setPages();
    },
    methods: {
        filterData() {
            // this.brandSelectValue
            console.log(this.categorySelectValue);
            var discountFilter = false;
            var categoryFilter = false;
            this.products = products.filter((data) => {
                if (this.categorySelectValue == "all" || this.categorySelectValue == null) {
                    categoryFilter = true;
                } else {
                    categoryFilter = data.category == this.categorySelectValue;
                }

                if (this.discountSelectValue == "all" || this.discountSelectValue == null) {
                    discountFilter = true;
                } else if (this.discountSelectValue == "0%") {
                    discountFilter = data.discount < "10%";
                } else {
                    discountFilter = data.discount >= this.discountSelectValue;
                }

                if (discountFilter && categoryFilter) {
                    return discountFilter && categoryFilter;
                }
            });
        },

        deleteRecord(ele) {
            ele.target.parentElement.parentElement.parentElement.remove();
        },

        // Pagination
        setPages() {
            let numberOfPages = Math.ceil(this.products.length / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(products) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return products.slice(from, to);
        },

        // 
        handleSubmit() {
            if (this.dataEdit) {
                this.submitted = true;
                if (this.submitted && (this.event.title && this.event.category && this.event.stock && this.event.price)) {
                    this.products = this.products.map(item => item.id.toString() == this.event.id.toString() ? { ...item, ...this.event } : item);
                    this.productModal = false;
                }
            } else {
                this.submitted = true;
                if (this.submitted && (this.event.title && this.event.category && this.event.stock && this.event.price)) {
                    const data = {
                        id: (Math.floor(Math.random() * 100 + 20) - 20),
                        img: pImg4,
                        img_alt: "img-4.png",
                        // title: this.event.title,
                        // category: this.event.category,
                        // stock: this.event.stock,
                        // price: this.event.price,
                        // discount: this.event.discount,
                        orders: "01",
                        ratings: "4.5",
                        publish: moment(new Date()).format("DD MMM YYYY"),
                        ...this.event
                    };
                    this.products.unshift(data);
                    this.productModal = false;
                    this.event = {};
                }
            }
        },

        editDetails(data) {
            this.dataEdit = true;
            this.productModal = true;

            // this.event.id = data.id,
            //     this.event.img = data.img,
            //     this.event.img_alt = data.img_alt,
            //     this.event.title = data.title,
            //     this.event.category = data.category,
            //     this.event.stock = data.stock,
            //     this.event.price = data.price,
            //     this.event.discount = data.discount,
            //     this.event.orders = data.orders,
            //     this.event.ratings = data.ratings,
            //     this.event.publish = data.publish;

            this.event = { ...data };

            this.submitted = false;
        },

        toggleModal() {
            this.productModal = true;
            this.dataEdit = false;
            this.event = {};
            this.files = []
            this.submitted = false;
        },

        deleteModalToggle(data) {
            this.deleteModal = true;
            this.event.id = data.id;
        },

        deleteData() {
            if (this.event.id) {
                this.products = this.products.filter((item) => {
                    return item.id != this.event.id;
                });
                this.deleteModal = false;
            }
        }
    },
    components: {
        Layout,
        PageHeader,
        DropZone,
        Multiselect
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <div id="productList">
            <b-row>
                <b-col lg="12">
                    <b-card no-body>
                        <b-card-body>
                            <b-row class="g-3">
                                <b-col xxl="3">
                                    <div class="search-box">
                                        <input type="text" class="form-control search"
                                            placeholder="Search products, orders and stocks..." v-model="searchQuery">
                                        <i class="ri-search-line search-icon"></i>
                                    </div>
                                </b-col>
                                <b-col xxl="3" sm="6">
                                    <div>
                                        <Multiselect placeholder="Select Brands" :searchable="true" mode="tags"
                                            v-model="brandSelectValue" :options="brandOptions" />
                                    </div>
                                </b-col>
                                <b-col xxl="3" sm="6">
                                    <div>
                                        <Multiselect placeholder="Select Category" :searchable="true"
                                            v-model="categorySelectValue" :options="categoryOptions" />
                                    </div>
                                </b-col>
                                <b-col xxl="2" sm="6">
                                    <div>
                                        <Multiselect placeholder="Select All Discount" :searchable="true"
                                            v-model="discountSelectValue" :options="discountOptions" />
                                    </div>
                                </b-col>
                                <b-col xxl="1" sm="6">
                                    <b-button type="button" variant="secondary" class="w-100" @click="filterData"><i
                                            class="bi bi-funnel align-baseline me-1"></i> Filters</b-button>
                                </b-col>
                            </b-row>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>

            <b-row>
                <b-col lg="12">
                    <b-card no-body>
                        <b-card-header class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <b-card-title title-tag="h5" class="mb-0">Products <span
                                        class="badge bg-dark-subtle text-dark ms-1">254</span></b-card-title>
                            </div>
                            <div class="flex-shrink-0">
                                <div class="d-flex flex-wrap align-items-start gap-2">
                                    <b-button variant="subtle-danger" class="d-none" id="remove-actions"
                                        onClick="deleteMultiple()"><i class="ri-delete-bin-2-line"></i></b-button>
                                    <b-button type="button" variant="primary" class="add-btn" @click="toggleModal">
                                        <i class="bi bi-plus-circle align-baseline me-1"></i>
                                        Add Product
                                    </b-button>
                                </div>
                            </div>
                        </b-card-header>
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
                                            <td class="id" style="display:none;"><a href="javascript:void(0);"
                                                    class="fw-medium link-primary">#TB0{{ data.id }}</a></td>
                                            <td class="products">
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-xs bg-light rounded p-1 me-2">
                                                        <img :src="data.img" :alt="data.img_alt"
                                                            class="img-fluid d-block" />
                                                    </div>
                                                    <div>
                                                        <h6 class="mb-0"><router-link to="/ecommerce/product-details"
                                                                class="text-reset products">{{ data.title }}</router-link>
                                                        </h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="discount d-none">{{ data.category }}</td>
                                            <td class="category">{{ data.category }}</td>
                                            <td class="stock">{{ data.stock }}</td>
                                            <td class="price">${{ data.price }}</td>
                                            <td class="orders">{{ data.orders }}</td>
                                            <td class="rating">
                                                <span class="badge bg-warning-subtle text-warning"><i
                                                        class="bi bi-star-fill align-baseline me-1"></i>
                                                    {{ data.ratings }}</span>
                                            </td>
                                            <td class="published">{{ data.publish }}</td>
                                            <td>
                                                <div class="dropdown position-static">
                                                    <b-button variant="subtle-secondary" size="sm" class="btn-icon"
                                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="bi bi-three-dots-vertical"></i>
                                                    </b-button>

                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <router-link class="dropdown-item"
                                                                to="/ecommerce/product-details"><i
                                                                    class="ph-eye align-middle me-1"></i> View</router-link>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item edit-item-btn"
                                                                @click="editDetails(data)">
                                                                <i class="ph-pencil align-middle me-1"></i> Edit
                                                            </a>
                                                        </li>
                                                        <li><a class="dropdown-item remove-item-btn"
                                                                @click="deleteModalToggle(data)"><i
                                                                    class="ph-trash align-middle me-1"></i> Remove</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div><!--end table-responsive-->

                            <div class="noresult" style="display: none">
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
                            <!-- end noresult -->

                            <b-row class="mt-3 align-items-center" id="pagination-element" v-if="resultQuery.length >= 1">
                                <b-col cols="sm">
                                    <div class="text-muted text-center text-sm-start">
                                        Showing <span class="fw-semibold">{{ displayedPosts.length }}</span> of <span
                                            class="fw-semibold">{{ products.length }}</span> Results
                                    </div>
                                </b-col>
                                <b-col sm="auto" class="mt-3 mt-sm-0">
                                    <div class="pagination-wrap hstack gap-2 justify-content-center">
                                        <b-link class="page-item pagination-prev" href="#" :disabled="page <= 1"
                                            @click="page--">
                                            <i class="mdi mdi-chevron-left align-middle"></i>
                                        </b-link>
                                        <ul class="pagination listjs-pagination mb-0">
                                            <li :class="{ active: pageNumber == page, disabled: pageNumber == '...', }"
                                                v-for="(pageNumber, index) in pages" :key="index"
                                                @click="page = pageNumber">
                                                <a class="page" href="#" data-i="1" data-page="10">{{ pageNumber }}</a>
                                            </li>
                                        </ul>
                                        <b-link class="page-item pagination-next" href="#" @click="page++"
                                            :disabled="page >= pages.length">
                                            <i class="mdi mdi-chevron-right align-middle"></i>
                                        </b-link>
                                    </div>
                                </b-col>
                            </b-row>

                            <div class="noresult" style="display: block;" v-if="resultQuery.length < 1">
                                <div class="text-center py-4">
                                    <div class="avatar-md mx-auto mb-4">
                                        <div class="avatar-title bg-light text-primary rounded-circle fs-4xl">
                                            <i class="bi bi-search"></i>
                                        </div>
                                    </div>
                                    <h5 class="mt-2">Sorry! No Result Found</h5>
                                    <p class="text-muted mb-0">We've searched more than 150+ products We did not find any
                                        products for you search.</p>
                                </div>
                            </div>
                            <!-- end pagination-element -->
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
        </div>

        <b-modal v-model="productModal" title-class="exampleModalLabel" :title="dataEdit ? 'Edit Product' : 'Add Product'"
            body-class="p-4" header-class="px-4 pt-4" hide-footer no-close-on-backdrop centered>
            <form @submit.prevent="handleSubmit" class="tablelist-form" novalidate="" autocomplete="off">

                <div class="mb-3">
                    <label for="product-title-input" class="form-label">Product title</label>
                    <input type="text" id="product-title-input" class="form-control" placeholder="Enter product title"
                        v-model="event.title" :class="{ 'is-invalid': submitted && !event.title }">
                </div>

                <div class="mb-3">
                    <DropZone @drop.prevent="drop" @change="selectedFile" cloudIcon="bootstrap"
                        dropzoneClass="my-dropzone border border-1 border-dashed" />
                    <ul class="list-unstyled mb-0" id="dropzone-preview">
                        <li class="mt-2" id="dropzone-preview-list">
                            <div class="border rounded" v-for="(file, index) of files" :key="index">
                                <div class="d-flex p-2">
                                    <div class="flex-shrink-0 me-3">
                                        <div class="avatar-sm bg-light rounded">
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
                </div>

                <div class="mb-3">
                    <label for="product-category-input" class="form-label">Product category</label>
                    <select class="form-control" placeholder="Select product category" id="product-category-input"
                        v-model="event.category" :class="{ 'is-invalid': submitted && !event.category }">
                        <option value="Appliances">Select product category</option>
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
                            <input type="number" id="product-stock-input" class="form-control"
                                placeholder="Enter product stocks" v-model="event.stock"
                                :class="{ 'is-invalid': submitted && !event.stock }" />
                        </div>
                    </b-col>
                    <b-col lg="6">
                        <div class="mb-3">
                            <label for="product-price-input" class="form-label">Price</label>
                            <div class="input-group mb-3">
                                <span class="input-group-text">$</span>
                                <input type="number" class="form-control" id="product-price-input"
                                    placeholder="Enter product price" v-model="event.price"
                                    :class="{ 'is-invalid': submitted && !event.price }" />
                            </div>
                        </div>
                    </b-col>
                </b-row>
                <div class="hstack gap-2 justify-content-end">
                    <b-button type="button" variant="ghost-danger" @click="productModal = false">
                        <i class="bi bi-x-lg align-baseline me-1"></i> Close</b-button>
                    <b-button type="submit" variant="primary" id="add-btn">{{ dataEdit ? "Edit Product" : "Add Product"
                    }}</b-button>

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

    </Layout>
</template>