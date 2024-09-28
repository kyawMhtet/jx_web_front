<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";
import NotFoundText from '../../components/NotFoundText.vue';
import { productsGrid } from "../../common/data";
import Multiselect from "@vueform/multiselect";
import Slider from "@vueform/slider";
import "@vueform/slider/themes/default.css";
import axios from "axios";
import useFetch from "../../composables/useFetch";
import Spinner from "../../components/spinner.vue";
import Navbar from "../../components/nav-bar.vue";
import megaShop from "../../axios";
import { mapState, mapActions } from "vuex";

export default {
    data() {
        return {
            title: "Products Grid",
            items: [
                {
                    text: "Ecommerce",
                    href: "/",
                },
                {
                    text: "Products Grid",
                    active: true,
                },
            ],
            // MultiSelect
            filterValue: ["All"],
            filterOptions: [
                { value: "All", label: "All Select" },
                { value: "Best Rated", label: "Best Rated" },
                { value: "Best Selling", label: "Best Selling" },
                { value: "Latest", label: "Latest" },
                { value: "Trending", label: "Trending" },
            ],
            page: 1,
            current_page: 1,
            perPage: 12,
            pages: [],
            error: "",
            loading: null,
            // products: productsGrid,
            // products: [],
            prev_url: "",
            next_url: "",
            removeModal: false,
            searchQuery: null,
            event: {
                id: null,
            },
            minCost: 0,
            maxCost: 1000,
            // Slider
            value: [0, 1000],
            searchTerm: "",
            loader: false,
        };
    },
    computed: {
        ...mapState("products", {
            products: (state) => state.products,
            product: (state) => state.product,
            categories: (state) => state.categories,
            total: (state) => state.total,
        }),

        displayedPosts() {
            return this.paginate(this.products);
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.displayedPosts.filter((data) => {
                    return data.title.toLowerCase().includes(search);
                });
            } else if (this.minCost || this.maxCost) {
                return this.displayedPosts.filter((data) => {
                    return (
                        parseInt(data.price) >= this.minCost &&
                        parseInt(data.price) <= this.maxCost
                    );
                });
            } else {
                return this.displayedPosts;
            }
        },
    },

    watch: {
        searchTerm(newValue) {
            this.searchProducts();
        },
    },

    // watch: {
    //     products() {
    //         this.setPages();
    //     },

    //     data(newData) {
    //   if (newData) {
    //     this.products = newData.data || [];
    //     this.pagination.current_page = newData.current_page || 1;
    //     this.pagination.next_page_url = newData.next_page_url;
    //     this.pagination.prev_page_url = newData.prev_page_url;
    //   }
    // }
    // },
    // created() {
    //     this.setPages();
    // },
    methods: {
        ...mapActions("products", ["fetchProducts"]),

        async searchProducts() {
        this.loader = true;

            try {
                const url = `/shop/products?sid=1&search=${this.searchTerm}`;
               await this.fetchProducts(url);
            } catch (error) {
                console.log("error search products");
            } finally {
                this.loader = false;
            }
        },

        prevPage() {
            if (this.product.prev_page_url) {
                console.log("hit");
                this.fetchProducts(this.product.prev_page_url);
            }
        },

        nextPage() {
            if (this.product.next_page_url) {
                console.log("hit");
                this.fetchProducts(this.product.next_page_url);
            }
        },

        filterCat(category) {
            this.products = productsGrid.filter((data) => {
                return data.category == category;
            });
        },
        resetFilter() {
            this.products = productsGrid;
        },
        deleteModalToggle(data) {
            this.removeModal = true;
            this.event.id = data.id;
        },

        deleteData() {
            if (this.event.id) {
                this.products = this.products.filter((item) => {
                    return item.id != this.event.id;
                });
                this.removeModal = false;
            }
        },

        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        },
    },

    async mounted() {
        this.loader = true;
        try {
            await this.fetchProducts(
                `/shop/products?sid=1&page=${this.current_page}`
            );
            console.log(this.products);
            this.scrollToTop();
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            this.loader = false;
        }
    },

    components: {
        Layout,
        Navbar,
        PageHeader,
        Multiselect,
        Spinner,
        Slider,
    },
};
</script>

<template>
    <layout>
        <!-- <Navbar /> -->
    <div class="container py-3">
        <!-- <pre>
                {{ product.subItems.next_page_url }}

            </pre> -->

        <PageHeader :title="title" :items="items" />
        <b-row>
            <b-col xxl="3">
                <b-card no-body>
                    <b-card-header class="d-flex align-items-center">
                        <div class="flex-grow-1">
                            <b-card-title title-tag="h5" class="mb-0"
                                >Filters</b-card-title
                            >
                        </div>
                        <div class="flex-shrink-0">
                            <b-link
                                href="#!"
                                class="text-reset text-decoration-underline"
                                @click="resetFilter"
                                >Clear All</b-link
                            >
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <div class="search-box mb-3">
                            <input
                                type="text"
                                class="form-control"
                                v-model="searchTerm"
                                @input="searchProducts"
                                id="searchResultList"
                                autocomplete="off"
                                placeholder="Search products, category etc..."
                            />
                            <i class="ri-search-line search-icon"></i>
                        </div>
                        <div
                            class="accordion accordion-flush filter-panel"
                            id="accordionExample"
                        >
                            <div class="accordion-item">
                                <h2
                                    class="accordion-header"
                                    id="categoryAccordion"
                                >
                                    <b-button
                                        variant="none"
                                        class="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseCategory"
                                        aria-expanded="true"
                                        aria-controls="collapseCategory"
                                    >
                                        Product Category
                                    </b-button>
                                </h2>
                                <div
                                    id="collapseCategory"
                                    class="accordion-collapse collapse show"
                                    aria-labelledby="categoryAccordion"
                                    data-bs-parent="#categoryFilters"
                                >
                                    <div class="accordion-body">
                                        <ul
                                            class="list-unstyled mb-0 filter-list"
                                        >
                                            <li
                                                v-for="category in categories"
                                                :key="category.id"
                                            >
                                                <b-link
                                                    href="#"
                                                    class="d-flex py-1 align-items-center"
                                                    @click="
                                                        filterCat('Appliances')
                                                    "
                                                >
                                                    <div class="flex-grow-1">
                                                        <h5
                                                            class="fs-sm mb-0 listname"
                                                        >
                                                            {{
                                                                category.category_name
                                                            }}
                                                        </h5>
                                                    </div>
                                                </b-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2
                                    class="accordion-header"
                                    id="priceAccordion"
                                >
                                    <b-button
                                        variant="none"
                                        class="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapsePrice"
                                        aria-expanded="true"
                                        aria-controls="collapsePrice"
                                    >
                                        Price
                                    </b-button>
                                </h2>
                                <div
                                    id="collapsePrice"
                                    class="accordion-collapse collapse show"
                                    aria-labelledby="priceAccordion"
                                    data-bs-parent="#priceFilters"
                                >
                                    <div class="accordion-body">
                                        <Slider
                                            class="form-range"
                                            v-model="value"
                                            :min="0"
                                            :max="1200"
                                            :tooltips="false"
                                        />
                                        <div
                                            class="formCost d-flex gap-2 align-items-center mt-3"
                                        >
                                            <input
                                                class="form-control form-control-sm"
                                                v-model="minCost"
                                                type="number"
                                                id="minCost"
                                            />
                                            <span class="fw-semibold text-muted"
                                                >to</span
                                            >
                                            <input
                                                class="form-control form-control-sm"
                                                v-model="maxCost"
                                                type="number"
                                                id="maxCost"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2
                                    class="accordion-header"
                                    id="ColorsAccordion"
                                >
                                    <b-button
                                        variant="none"
                                        class="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseColors"
                                        aria-expanded="true"
                                        aria-controls="collapseColors"
                                    >
                                        Colors
                                    </b-button>
                                </h2>
                                <div
                                    id="collapseColors"
                                    class="accordion-collapse collapse show"
                                    aria-labelledby="ColorsAccordion"
                                    data-bs-parent="#ColorsFilters"
                                >
                                    <div class="accordion-body">
                                        <div class="hstack gap-2 flex-wrap">
                                            <b-link
                                                href="#!"
                                                class="btn btn-sm btn-subtle-primary"
                                                >Blue</b-link
                                            >
                                            <b-link
                                                href="#!"
                                                class="btn btn-sm btn-subtle-secondary"
                                                >Dark</b-link
                                            >
                                            <b-link
                                                href="#!"
                                                class="btn btn-sm btn-subtle-success"
                                                >Green</b-link
                                            >
                                            <b-link
                                                href="#!"
                                                class="btn btn-sm btn-subtle-danger"
                                                >Red</b-link
                                            >
                                            <b-link
                                                href="#!"
                                                class="btn btn-sm btn-subtle-dark"
                                                >Black</b-link
                                            >
                                            <b-link
                                                href="#!"
                                                class="btn btn-sm btn-subtle-warning"
                                                >Yellow</b-link
                                            >
                                            <b-link
                                                href="#!"
                                                class="btn btn-sm btn-subtle-info"
                                                >Cyan</b-link
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2
                                    class="accordion-header"
                                    id="brandsAccordion"
                                >
                                    <b-button
                                        variant="none"
                                        class="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseBrands"
                                        aria-expanded="true"
                                        aria-controls="collapseBrands"
                                    >
                                        Brands
                                        <span
                                            class="badge bg-primary ms-2 fs-xxs"
                                            >3</span
                                        >
                                    </b-button>
                                </h2>
                                <div
                                    id="collapseBrands"
                                    class="accordion-collapse collapse show"
                                    aria-labelledby="brandsAccordion"
                                    data-bs-parent="#brandsFilters"
                                >
                                    <div class="accordion-body">
                                        <div
                                            class="d-flex flex-column gap-2 filter-check"
                                        >
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    value="Boat"
                                                    id="productBrandAll"
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="productBrandAll"
                                                    >All Select</label
                                                >
                                            </div>
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    value="Boat"
                                                    id="productBrandRadio5"
                                                    checked
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="productBrandRadio5"
                                                    >Boat</label
                                                >
                                            </div>
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    value="OnePlus"
                                                    id="productBrandRadio4"
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="productBrandRadio4"
                                                    >OnePlus</label
                                                >
                                            </div>
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    value="Realme"
                                                    id="productBrandRadio3"
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="productBrandRadio3"
                                                    >Realme</label
                                                >
                                            </div>
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    value="Sony"
                                                    id="productBrandRadio2"
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="productBrandRadio2"
                                                    >Sony</label
                                                >
                                            </div>
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    value="JBL"
                                                    id="productBrandRadio1"
                                                    checked
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="productBrandRadio1"
                                                    >JBL</label
                                                >
                                            </div>

                                            <div>
                                                <b-button
                                                    type="button"
                                                    variant="link"
                                                    class="text-decoration-none text-uppercase fw-medium p-0"
                                                    >1,235 More</b-button
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2
                                    class="accordion-header"
                                    id="discountAccordion"
                                >
                                    <b-button
                                        variant="none"
                                        class="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseDiscount"
                                        aria-expanded="false"
                                        aria-controls="collapseDiscount"
                                    >
                                        Discount
                                    </b-button>
                                </h2>
                                <div
                                    id="collapseDiscount"
                                    class="accordion-collapse collapse"
                                    aria-labelledby="discountAccordion"
                                    data-bs-parent="#brandsFilters"
                                >
                                    <div class="accordion-body">
                                        <div
                                            class="d-flex flex-column gap-2 filter-check"
                                            id="discount-filter"
                                        >
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    value="50"
                                                    id="productdiscountRadio6"
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="productdiscountRadio6"
                                                    >50% or more</label
                                                >
                                            </div>
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    value="40"
                                                    id="productdiscountRadio5"
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="productdiscountRadio5"
                                                    >40% or more</label
                                                >
                                            </div>
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    value="30"
                                                    id="productdiscountRadio4"
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="productdiscountRadio4"
                                                >
                                                    30% or more
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    value="20"
                                                    id="productdiscountRadio3"
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="productdiscountRadio3"
                                                >
                                                    20% or more
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    value="10"
                                                    id="productdiscountRadio2"
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="productdiscountRadio2"
                                                >
                                                    10% or more
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    value="0"
                                                    id="productdiscountRadio1"
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="productdiscountRadio1"
                                                >
                                                    Less than 10%
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col xxl="9">
                <b-row class="align-items-center mb-4 g-3">
                    <b-col xxl="2" lg="4" sm="6" class="me-auto">
                        <h5 class="mb-0">
                            Products
                            <span
                                class="badge bg-secondary-subtle text-secondary align-middle ms-1"
                                >{{ total }}</span
                            >
                        </h5>
                    </b-col>
                    <!-- <b-col xxl="2" lg="4" sm="6">
                        <Multiselect
                            placeholder="Select Filter"
                            v-model="filterSelectValue"
                            :options="filterOptions"
                        />
                    </b-col> -->
                </b-row>

                <Spinner v-if="loader" />
                <div v-else>
                    <div v-if="products.length">
                        <b-row id="product-grid"  >
                            <b-col
                                xxl="3"
                                lg="4"
                                md="6"
                                v-for="(product, index) in products"
                                :key="index"
                            >

                                <b-card no-body class="ribbon-box ribbon-fill">
                                    <b-card-body class="p-4 m-4">
                                        <img
                                            v-if="product.image_url"
                                            :src="product.image_url"
                                            class="img-fluid"
                                        />

                                        <img v-else src="https://via.placeholder.com/150x175" alt="image">
                                    </b-card-body>
                                    <b-card-body class="pt-0">
                                        <span
                                            class="badge bg-warning-subtle text-warning float-end"
                                        >
                                            <i
                                                class="bi bi-star-fill align-baseline me-1"
                                            ></i>
                                            <!-- <span class="rate">{{ data.ratings }}</span> -->
                                        </span>
                                        <h5 class="fs-lg mb-3">
                                            {{ product?.price }} Ks
                                        </h5>
                                        <router-link to="/ecommerce/product-details">
                                            <h6 class="fs-md text-truncate">
                                                {{ product?.sub_item_name }}
                                            </h6>
                                        </router-link>
                                        <b-link
                                            href="#!"
                                            class="text-decoration-underline text-muted mb-0"
                                            >{{ product?.category }}</b-link
                                        >
                                        <div class="mt-3 hstack gap-2">
                                            <router-link
                                            :to="{
                                                name: 'product-details',
                                                params: { id: product?.id },
                                            }"
                                            class="btn btn-secondary w-100"
                                        >
                                            <i class="ph-eye me-1 align-middle"></i
                                            >Overview
                                        </router-link>
                                            <button
                                                class="btn btn-primary py-2 w-25"
                                            >
                                            <svg xmlns="http://www.w3.org/2000/svg" class="" height="20px" viewBox="0 -960 960 960" width="20px" fill="#eeeeee"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
                                            </button>

                                        </div>
                                    </b-card-body>
                                </b-card>
                            </b-col>
                        </b-row>
                        <!-- Display products -->
                        <!-- Pagination Controls -->
                        <div>
                            <nav aria-label="Page navigation">
                                <ul class="pagination justify-content-center">
                                    <!-- Previous Button -->
                                    <li
                                        class="page-item"
                                        :class="{ disabled: !product.prev_page_url }"
                                    >
                                        <button
                                            class="page-link btn"
                                            @click="prevPage"
                                            :disabled="product.prev_page_url === null"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="24px"
                                                viewBox="0 -960 960 960"
                                                width="24px"
                                                fill="#5f6368"
                                            >
                                                <path
                                                    d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z"
                                                />
                                            </svg>
                                        </button>
                                    </li>

                                    <button
                                        class="btn border-0 outline-none bg-primary text-white"
                                    >
                                        {{ product.current_page }}
                                    </button>
                                    <!-- Next Button -->
                                    <li class="page-item"
                                    :class="{ disabled: !product.prev_page_url }"

                                    >
                                        <button class="page-link btn"
                                         @click="nextPage"
                                         :disabled="product.next_page_url === null"

                                         >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="24px"
                                                viewBox="0 -960 960 960"
                                                width="24px"
                                                fill="#5f6368"
                                            >
                                                <path
                                                    d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"
                                                />
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div v-else class="d-flex justify-content-center">
                        <h3>No result found!</h3>
                    </div>
                </div>

                <!-- <b-row class="mb-4 align-items-center" id="pagination-element" v-if="resultQuery.length >= 1">
                        <b-col cols="sm">
                            <div class="text-muted">
                                Showing <span class="fw-semibold">{{ displayedPosts.length }}</span> of <span
                                    class="fw-semibold">{{ products.length }}</span> Results
                            </div>
                        </b-col>

                        <b-col sm="auto" class="mt-3 mt-sm-0">
                            <div
                                class="pagination-block pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                                <div class="page-item">
                                    <b-link href="#" class="page-link" id="page-prev" :disabled="page <= 1"
                                        @click="page--">←</b-link>
                                </div>
                                <span id="page-num" class="pagination">
                                    <div class="page-item "
                                        :class="{ active: pageNumber == page, disabled: pageNumber == '...' }"
                                        v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                                        <b-link class="page-link clickPageNumber" href="#">{{ pageNumber }}</b-link>
                                    </div>
                                </span>
                                <div class="page-item">
                                    <b-link href="#" class="page-link" id="page-next" @click="page++"
                                        :disabled="page >= pages.length">→</b-link>
                                </div>
                            </div>
                        </b-col>
                    </b-row> -->
                <!-- end pagination -->

                <!-- <b-row v-if="resultQuery.length < 1" id="search-result-elem">
                        <b-col lg="12">
                            <div class="text-center py-5">
                                <div class="avatar-lg mx-auto mb-4">
                                    <div class="avatar-title bg-light text-primary rounded-circle fs-4xl">
                                        <i class="bi bi-search"></i>
                                    </div>
                                </div>

                                <h5>No matching records found</h5>
                            </div>
                        </b-col>
                    </b-row> -->
                <!-- end search-result -->
            </b-col>
        </b-row>

        <b-modal
            v-model="removeModal"
            hide-footer
            centered
            class="zoomIn"
            body-class="p-md-5"
        >
            <div class="text-center">
                <div class="text-danger">
                    <i class="bi bi-trash display-5"></i>
                </div>
                <div class="mt-4">
                    <h4>Are you sure ?</h4>
                    <p class="text-muted mx-4 mb-0">
                        Are you sure you want to remove this record ?
                    </p>
                </div>
            </div>
            <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
                <b-button
                    type="button"
                    variant="light"
                    class="w-sm"
                    @click="removeModal = false"
                    >Close</b-button
                >
                <b-button
                    type="button"
                    variant="danger"
                    class="w-sm"
                    id="remove-cartproduct"
                    @click="deleteData"
                    >Yes, Delete It!</b-button
                >
            </div>
        </b-modal>
    </div>
    </layout>
</template>
