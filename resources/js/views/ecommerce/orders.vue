<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";
import { CountTo } from "vue3-count-to";

import { ecommerceOrdersChart } from "./chartsData";

import { orders } from "../../common/data";

import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import multiUser from "../../../images/users/multi-user.jpg";

export default {
    data() {
        return {
            title: "Orders",
            items: [
                {
                    text: "Ecommerce",
                    href: "/",
                },
                {
                    text: "Orders",
                    active: true,
                },
            ],
            multiUser,
            ecommerceOrdersChart: ecommerceOrdersChart,
            page: 1,
            perPage: 10,
            pages: [],
            orders: orders,
            deleteRecordModal: false,

            date: "01 Feb 2023 to 28 Feb 2023",
            config: {
                mode: "range",
                dateFormat: "d M, Y",
                defaultDate: "01 Feb 2023 to 28 Feb 2023",
            },

            // 
            submitted: false,
            orderModal: false,
            dataEdit: false,
            deleteModal: false,
            searchQuery: null,
            event: {
                id: "",
                order_date: "",
                delivery_date: "",
                product: "",
                customer: "",
                img: "",
                name: "",
                pay_method: "",
                price: "",
                ratings: "",
                delivery_status: ""
            }
        };
    },
    computed: {
        displayedPosts() {
            return this.paginate(this.orders);
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.displayedPosts.filter((data) => {
                    return (
                        data.product.toLowerCase().includes(search) ||
                        data.customer.toLowerCase().includes(search) ||
                        data.name.toLowerCase().includes(search) ||
                        data.delivery_status.toLowerCase().includes(search)

                    );
                });
            } else {
                return this.displayedPosts;
            }
        },
    },
    watch: {
        orders() {
            this.setPages();
        },
    },
    created() {
        this.setPages();
    },
    methods: {
        setPages() {
            let numberOfPages = Math.ceil(this.orders.length / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(orders) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return orders.slice(from, to);
        },

        // 
        handleSubmit() {
            if (this.dataEdit) {
                this.submitted = true;
                if (this.submitted && (this.event.customer && this.event.product && this.event.order_date && this.event.name && this.event.price && this.event.pay_method && this.event.delivery_status)) {
                    this.orders = this.orders.map(item => item.id.toString() == this.event.id.toString() ? { ...item, ...this.event } : item);
                    this.orderModal = false;
                }
            } else {
                this.submitted = true;
                if (this.submitted && (this.event.customer && this.event.product && this.event.order_date && this.event.name && this.event.price && this.event.pay_method && this.event.delivery_status)) {
                    const data = {
                        id: (Math.floor(Math.random() * 100 + 20) - 20),
                        img: multiUser,
                        delivery_date: "--",
                        ratings: "--",
                        ...this.event
                    };
                    this.orders.unshift(data);
                    this.orderModal = false;
                }
            }
        },

        editDetails(data) {
            this.dataEdit = true;
            this.orderModal = true;
            this.event = { ...data };
            this.submitted = false;
        },

        toggleModal() {
            this.orderModal = true;
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
                this.orders = this.orders.filter((item) => {
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
        CountTo,
        flatPickr
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-body class="pb-0 mb-lg-n4">
                        <div class="d-flex z-1 position-relative">
                            <div class="flex-shrink-0">
                                <flat-pickr v-model="date" :config="config" class="form-select"></flat-pickr>
                            </div>
                        </div>
                    </b-card-body>
                    <b-card-body class="pt-0">
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="ecommerceOrdersChart.series"
                            :options="ecommerceOrdersChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row class="row-cols-xxl-5 row-cols-lg-3 row-cols-md-2 row-cols-1">
            <b-col>
                <b-card no-body class="border-bottom border-3 card-animate border-secondary">
                    <b-card-body>
                        <span class="badge bg-success-subtle text-success float-end"><i
                                class="ph-trend-up align-middle me-1"></i> 3.8%</span>
                        <h4 class="mb-4">
                            <count-to :startVal="0" :duration="5000" :endVal="21438"></count-to>
                        </h4>
                        <p class="text-muted fw-medium text-uppercase mb-0">Total Orders</p>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col>
                <b-card no-body class="border-bottom border-3 card-animate border-primary">
                    <b-card-body>
                        <span class="badge bg-success-subtle text-success float-end"><i
                                class="ph-trend-up align-middle me-1"></i> 20.8%</span>
                        <h4 class="mb-4">
                            <count-to :startVal="0" :duration="5000" :endVal="5963"></count-to>
                        </h4>

                        <p class="text-muted fw-medium text-uppercase mb-0">New Orders</p>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col>
                <b-card no-body class="border-bottom border-3 card-animate border-warning">
                    <b-card-body>
                        <span class="badge bg-success-subtle text-success float-end"><i
                                class="ph-trend-up align-middle me-1"></i> 12.6%</span>
                        <h4 class="mb-4">
                            <count-to :startVal="0" :duration="5000" :endVal="4620"></count-to>
                        </h4>

                        <p class="text-muted fw-medium text-uppercase mb-0">Pending Orders</p>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col>
                <b-card no-body class="border-bottom border-3 card-animate border-success">
                    <b-card-body>
                        <span class="badge bg-success-subtle text-success float-end"><i
                                class="ph-trend-up align-middle me-1"></i> 18.7%</span>
                        <h4 class="mb-4">
                            <count-to :startVal="0" :duration="5000" :endVal="8541"></count-to>
                        </h4>

                        <p class="text-muted fw-medium text-uppercase mb-0">Delivered Orders</p>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col>
                <b-card no-body class="border-bottom border-3 card-animate border-danger">
                    <b-card-body>
                        <span class="badge bg-danger-subtle text-danger float-end"><i
                                class="ph-trend-down align-middle me-1"></i> 7.1%</span>
                        <h4 class="mb-4">
                            <count-to :startVal="0" :duration="5000" :endVal="2314"></count-to>
                        </h4>

                        <p class="text-muted fw-medium text-uppercase mb-0">Cancelled Orders</p>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body id="orderList">

                    <b-card-header>
                        <b-row class="align-items-center gy-3">
                            <b-col lg="3" md="6">
                                <div class="search-box">
                                    <input type="text" class="form-control search"
                                        placeholder="Search for order ID, customer, order status or something..."
                                        v-model="searchQuery">
                                    <i class="ri-search-line search-icon"></i>
                                </div>
                            </b-col>

                            <b-col md="auto" class="ms-md-auto">
                                <div class="d-flex flex-wrap align-items-center gap-2">
                                    <b-button variant="subtle-danger" class="d-none" id="remove-actions"
                                        onClick="deleteMultiple()"><i class="ri-delete-bin-2-line"></i></b-button>
                                    <div class="dropdown card-header-dropdown sortble-dropdown flex-shrink-0">
                                        <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                            <span class="text-muted dropdown-title">Order Date</span> <i
                                                class="mdi mdi-chevron-down ms-1"></i>
                                        </b-link>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <b-link href="#" class="dropdown-item sort" data-sort="order_date">Order
                                                Date</b-link>
                                            <b-link href="#" class="dropdown-item sort" data-sort="order_id">Order
                                                ID</b-link>
                                            <b-link href="#" class="dropdown-item sort" data-sort="amount">Amount</b-link>
                                            <b-link href="#" class="dropdown-item sort" data-sort="status">Status</b-link>
                                        </div>
                                    </div>

                                    <b-button type="button" variant="primary" class="add-btn ms-auto"
                                        @click="toggleModal"><i class="bi bi-plus-circle align-baseline me-1"></i>
                                        Add Order</b-button>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-header>
                    <b-card-body>
                        <div class="table-responsive">
                            <table class="table table-borderless table-centered align-middle table-nowrap mb-0">
                                <thead class="text-muted table-light">
                                    <tr>
                                        <th>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="option"
                                                    id="checkAll">
                                                <label class="form-check-label" for="checkAll"></label>
                                            </div>
                                        </th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="order_id">Order ID</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="order_date">Order Date
                                        </th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="delivery_date">Delivery
                                            Date</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="products">Products</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="customer">Customers</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="shop">Shop</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="payment_method">Payment
                                            Method</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="amount">Amount</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="rating">Rating</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="status">Delivery Status
                                        </th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody class="list form-check-all">
                                    <tr v-for="(data, index) of resultQuery" :key="index">
                                        <th>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" name="chk_child">
                                                <label class="form-check-label"></label>
                                            </div>
                                        </th>
                                        <td class="order_id">
                                            <router-link to="/ecommerce/order-overview"
                                                class="fw-medium link-primary">#TBS25000{{ data.id }}
                                            </router-link>
                                        </td>
                                        <td class="order_date">
                                            {{ data.order_date }}
                                        </td>
                                        <td class="delivery_date">
                                            {{ data.delivery_date }}
                                        </td>
                                        <td class="products">{{ data.product }}</td>
                                        <td class="customer">
                                            {{ data.customer }}
                                        </td>
                                        <td class="shop">
                                            <b-link href="#!" class="text-reset">
                                                <img :src="data.img" alt=""
                                                    class="avatar-xxs rounded-circle me-1 shop-logo" />
                                                <span class="shop-name">{{ data.name }}</span>
                                            </b-link>
                                        </td>
                                        <td class="payment_method">{{ data.pay_method }}</td>
                                        <td class="amount"><span class="fw-medium">{{ data.price }}</span></td>
                                        <td class="rating">
                                            <h5 class="fs-md fw-medium mb-0">{{ data.ratings }}</h5>
                                        </td>
                                        <td class="status" v-if="data.delivery_status == 'New'">
                                            <span class="badge bg-primary-subtle text-primary">{{ data.delivery_status
                                            }}</span>
                                        </td>
                                        <td class="status" v-if="data.delivery_status == 'Pending'">
                                            <span class="badge bg-warning-subtle text-warning">{{ data.delivery_status
                                            }}</span>
                                        </td>
                                        <td class="status" v-if="data.delivery_status == 'Out of Delivered'">
                                            <span class="badge bg-danger-subtle text-danger">{{ data.delivery_status
                                            }}</span>
                                        </td>
                                        <td class="status" v-if="data.delivery_status == 'Shipping'">
                                            <span class="badge bg-info-subtle text-info">{{ data.delivery_status }}</span>
                                        </td>
                                        <td class="status" v-if="data.delivery_status == 'Delivered'">
                                            <span class="badge bg-success-subtle text-success">{{ data.delivery_status
                                            }}</span>
                                        </td>
                                        <td>
                                            <ul class="d-flex gap-2 list-unstyled mb-0">
                                                <li>
                                                    <router-link to="/ecommerce/order-overview"
                                                        class="btn btn-subtle-primary btn-icon btn-sm "><i
                                                            class="ph-eye"></i>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <b-link href="javascript: void(0);"
                                                        class="btn btn-subtle-secondary btn-icon btn-sm edit-item-btn"
                                                        @click="editDetails(data)">
                                                        <i class="ph-pencil"></i>
                                                    </b-link>
                                                </li>
                                                <li>
                                                    <b-link href="javascript: void(0);"
                                                        class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn"
                                                        @click="deleteModalToggle(data)">
                                                        <i class="ph-trash"></i></b-link>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="noresult" v-if="resultQuery.length < 1">
                                <div class="text-center py-4">
                                    <i class="ph-magnifying-glass fs-1 text-primary"></i>
                                    <h5 class="mt-2">Sorry! No Result Found</h5>
                                    <p class="text-muted mb-0">We've searched more than 150+ orders We did not find any
                                        orders for you search.</p>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center justify-content-sm-end mt-2"
                            v-if="resultQuery.length >= 1">
                            <div class="pagination-wrap hstack gap-2">
                                <b-link class="page-item pagination-prev" href="#" :disabled="page <= 1" @click="page--">
                                    <i class="mdi mdi-chevron-left align-middle"></i>
                                </b-link>
                                <ul class="pagination listjs-pagination mb-0">
                                    <li :class="{ active: pageNumber == page, disabled: pageNumber == '...', }"
                                        v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                                        <b-link class="page" href="#" data-i="1" data-page="10">{{ pageNumber }}</b-link>
                                    </li>
                                </ul>
                                <b-link class="page-item pagination-next" href="#" :disabled="page >= pages.length"
                                    @click="page++">
                                    <i class="mdi mdi-chevron-right align-middle"></i>
                                </b-link>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>

            </b-col>

        </b-row>


        <!-- Order Modal Show -->
        <b-modal v-model="orderModal" class="fade" id="modalShow" hide-footer :title="dataEdit ? 'Edit Order' : 'Add Order'"
            header-class="bg-light p-3">
            <b-form class="tablelist-form" novalidate autocomplete="off" @submit.prevent="handleSubmit">
                <div class="mb-3">
                    <label for="customername-field" class="form-label">Customer Name</label>
                    <input type="text" id="customername-field" class="form-control" placeholder="Enter name"
                        v-model="event.customer" :class="{ 'is-invalid': submitted && !event.customer }" />
                </div>

                <div class="mb-3">
                    <label for="productname-field" class="form-label">Product</label>
                    <select class="form-control" data-trigger name="productname-field" id="productname-field"
                        v-model="event.product" :class="{ 'is-invalid': submitted && !event.product }">
                        <option value="">Product</option>
                        <option value="Cotton collar t-shirts for men">Cotton collar t-shirts for men</option>
                        <option value="Like style travel black handbag">Like style travel black handbag</option>
                        <option value="Fossil gen 5E smart watch">Fossil gen 5E smart watch</option>
                        <option value="Super bass bluetooth wireless headphone">Super bass bluetooth wireless headphone
                        </option>
                        <option value="Willage volleyball ball size 4">Willage volleyball ball size 4</option>
                        <option value="Branded T-Shirts">Branded T-Shirts</option>
                        <option value="Flip-Flops and house slippers">Flip-Flops and house slippers</option>
                        <option value="Jeans blue men boxer">Jeans blue men boxer</option>
                        <option value="MAG back to the future shoes">MAG back to the future shoes</option>
                        <option value="Super bass bluetooth wireless headphone">Super bass bluetooth wireless headphone
                        </option>
                    </select>
                </div>

                <b-row>
                    <b-col lg="6">
                        <div class="mb-3">
                            <label for="date-field" class="form-label">Order Date</label>
                            <input type="date" id="date-field" class="form-control" v-model="event.order_date"
                                :class="{ 'is-invalid': submitted && !event.order_date }" />
                        </div>
                        <div class="mb-3">
                            <label for="shopName-input" class="form-label">Shop</label>
                            <input type="text" id="shopName-input" class="form-control" placeholder="Enter shop name"
                                v-model="event.name" :class="{ 'is-invalid': submitted && !event.name }" />
                        </div>
                    </b-col>

                    <b-col lg="6">
                        <label class="form-label mb-3">Shop logo</label>
                        <div class="text-center mb-3">
                            <div class="position-relative d-inline-block">
                                <div class="position-absolute top-100 start-100 translate-middle">
                                    <label for="companyLogo-image-input" class="mb-0" data-bs-toggle="tooltip"
                                        data-bs-placement="right" title="Select company logo">
                                        <span class="avatar-xs d-inline-block">
                                            <span
                                                class="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                                <i class="ri-image-fill"></i>
                                            </span>
                                        </span>
                                    </label>
                                    <input class="form-control d-none" id="companyLogo-image-input" type="file"
                                        accept="image/png, image/gif, image/jpeg">
                                </div>
                                <div class="avatar-lg">
                                    <div class="avatar-title bg-light rounded-3">
                                        <img :src="multiUser" alt="" id="companyLogo-img"
                                            class="avatar-md h-auto rounded-3 object-fit-cover">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-col>
                </b-row>

                <b-row class="gy-4 mb-3">
                    <b-col md="6">
                        <div>
                            <label for="amount-field" class="form-label">Amount</label>
                            <input type="text" id="amount-field" class="form-control" placeholder="Total amount"
                                v-model="event.price" :class="{ 'is-invalid': submitted && !event.price }" />
                        </div>
                    </b-col>
                    <b-col md="6">
                        <div>
                            <label for="payment-field" class="form-label">Payment Method</label>
                            <select class="form-control" data-trigger name="payment-method" id="payment-field"
                                v-model="event.pay_method" :class="{ 'is-invalid': submitted && !event.pay_method }">
                                <option value="">Payment Method</option>
                                <option value="Mastercard">Mastercard</option>
                                <option value="Visa">Visa</option>
                                <option value="COD">COD</option>
                                <option value="Paypal">Paypal</option>
                            </select>
                        </div>
                    </b-col>
                </b-row>

                <div class="mb-3">
                    <label for="delivered-status" class="form-label">Delivery Status</label>
                    <select class="form-control" data-trigger name="delivered-status" id="delivered-status"
                        v-model="event.delivery_status" :class="{ 'is-invalid': submitted && !event.delivery_status }">
                        <option value="">Delivery Status</option>
                        <option value="New">New</option>
                        <option value="Pending">Pending</option>
                        <option value="Out of Delivered">Out of Delivered</option>
                        <option value="Shipping">Shipping</option>
                        <option value="Delivered">Delivered</option>
                    </select>
                </div>
                <input type="hidden" id="delivery-status-field">
                <input type="hidden" id="rating-field">
                <div>
                    <div class="hstack gap-2 justify-content-end">
                        <b-button type="button" variant="light" @click="orderModal = false">Close</b-button>
                        <b-button type="submit" variant="success" id="add-btn">
                            {{ dataEdit ? "update" : "Add Order" }}
                        </b-button>
                    </div>
                </div>
            </b-form>
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
                <b-button type="button" variant="danger" class="w-sm btn-hover" id="delete-record"
                    @click="deleteData">Yes,Delete It!</b-button>
            </div>
        </b-modal>
    </Layout>
</template>
