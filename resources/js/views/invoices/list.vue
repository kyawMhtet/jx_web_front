<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import { CountTo } from "vue3-count-to";

import { invoicesList } from "../../common/data";

export default {
    data() {
        return {
            title: "Invoice List",
            items: [
                {
                    text: "Invoice",
                    href: "/",
                },
                {
                    text: "Invoice List",
                    active: true,
                },
            ],
            page: 1,
            perPage: 10,
            pages: [],
            invoicesList: invoicesList,
            searchQuery: null,
            deleteModal: false,
            event: {
                id: ""
            },
        };
    },
    computed: {
        displayedPosts() {
            return this.paginate(this.invoicesList);
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.displayedPosts.filter((data) => {
                    return (
                        data.customer.toLowerCase().includes(search) ||
                        data.email.toLowerCase().includes(search) ||
                        data.invoice_no.toString().includes(search) ||
                        data.createDate.toLowerCase().includes(search)
                    );
                });
            } else {
                return this.displayedPosts;
            }
        },
    },
    watch: {
        invoicesList() {
            this.setPages();
        },
    },
    created() {
        this.setPages();
    },
    methods: {
        setPages() {
            let numberOfPages = Math.ceil(this.invoicesList.length / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(invoicesList) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return invoicesList.slice(from, to);
        },

        deleteModalToggle(data) {
            this.deleteModal = true;
            this.event.id = data.id;
        },

        deleteData() {
            if (this.event.id) {
                this.invoicesList = this.invoicesList.filter((item) => {
                    return item.id != this.event.id;
                });
                this.deleteModal = false;
            }
        }
    },
    components: {
        Layout,
        PageHeader,
        CountTo
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <b-row>
            <b-col xl="7">
                <b-card no-body>
                    <b-card-body>
                        <b-row class="g-4">
                            <b-col lg="3" sm="6">
                                <div class="border-end-sm">
                                    <div class="d-flex align-items-center gap-2 mb-4">
                                        <div class="avatar-xs flex-shrink-0">
                                            <div
                                                class="avatar-title bg-body-secondary text-primary border border-primary-subtle rounded-circle">
                                                <i class="bi bi-file-earmark-text"></i>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <p class="text-muted mb-0">Total Invoices</p>
                                        </div>
                                    </div>
                                    <h3 class="mb-0">
                                        <count-to :startVal="0" :duration="5000" :endVal="8956"></count-to>
                                        <small class="text-success fs-xs fw-normal ms-1"><i
                                                class="bi bi-arrow-up align-baseline"></i> 12.09%</small>
                                    </h3>
                                </div>
                            </b-col>
                            <b-col lg="3" sm="6">
                                <div class="border-end-lg">
                                    <div class="d-flex align-items-center gap-2 mb-4">
                                        <div class="avatar-xs flex-shrink-0">
                                            <div
                                                class="avatar-title bg-body-secondary text-success border border-success-subtle rounded-circle">
                                                <i class="bi bi-patch-check-fill"></i>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <p class="text-muted mb-0">Paid Invoices</p>
                                        </div>
                                    </div>
                                    <h3 class="mb-0">
                                        <count-to :startVal="0" :duration="5000" :endVal="4519"></count-to>
                                        <small class="text-success fs-xs fw-normal ms-1"><i
                                                class="bi bi-arrow-up align-baseline"></i> 6.57%</small>
                                    </h3>
                                </div>
                            </b-col>
                            <b-col lg="3" sm="6">
                                <div class="border-end-sm">
                                    <div class="d-flex align-items-center gap-2 mb-4">
                                        <div class="avatar-xs flex-shrink-0">
                                            <div
                                                class="avatar-title bg-body-secondary text-warning border border-warning-subtle rounded-circle">
                                                <i class="bi bi-clock-history"></i>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <p class="text-muted mb-0">Pending Invoices</p>
                                        </div>
                                    </div>
                                    <h3 class="mb-0">
                                        <count-to :startVal="0" :duration="5000" :endVal="2648"></count-to>
                                        <small class="text-success fs-xs fw-normal ms-1"><i
                                                class="bi bi-arrow-up align-baseline"></i> 4.07%</small>
                                    </h3>
                                </div>
                            </b-col>
                            <b-col lg="3" sm="6">
                                <div>
                                    <div class="d-flex align-items-center gap-2 mb-4">
                                        <div class="avatar-xs flex-shrink-0">
                                            <div
                                                class="avatar-title bg-body-secondary text-danger border border-danger-subtle rounded-circle">
                                                <i class="bi bi-file-earmark-text"></i>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <p class="text-muted mb-0">Overdue Invoices</p>
                                        </div>
                                    </div>
                                    <h3 class="mb-0">
                                        <count-to :startVal="0" :duration="5000" :endVal="871"></count-to>
                                        <small class="text-danger fs-xs fw-normal ms-1"><i
                                                class="bi bi-arrow-down align-baseline"></i> 3.49%</small>
                                    </h3>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="5">
                <b-card no-body>
                    <b-card-body>
                        <div class="d-flex mb-4 pb-1">
                            <div class="flex-grow-1">
                                <b-card-title title-tag="h6">Total Receivables <i
                                        class="bi bi-exclamation-circle align-baseline ms-1 fs-sm" data-bs-toggle="tooltip"
                                        data-bs-title="Once you send an invoice (or bill), it becomes part of your accounts receivable – until it's paid."></i></b-card-title>
                                <p class="text-muted mb-0"><b>$985.32k</b> Total unpaid invoices</p>
                            </div>
                            <div class="flex-shrink-0">
                                <router-link to="/ecommerce/seller-overview" class="link-effect">View Profile <i
                                        class="bi bi-arrow-right align-baseline ms-1"></i></router-link>
                            </div>
                        </div>
                        <div class="progress" data-bs-toggle="tooltip" data-bs-title="$234.95 Paid Amount">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row id="invoiceList">
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-row class="align-items-center g-2">
                            <b-col lg="3" class="me-auto">
                                <b-card-title title-tag="h6" class="mb-0">Invoices List</b-card-title>
                            </b-col>
                            <b-col xl="2" md="3">
                                <div class="search-box">
                                    <input type="text" class="form-control search" placeholder="Search for invoice, date, client or something..." v-model="searchQuery">
                                    <i class="ri-search-line search-icon"></i>
                                </div>
                            </b-col>
                            <b-col md="auto">
                                <div class="hstack gap-2">
                                    <b-button variant="subtle-danger" class="d-none" id="remove-actions"
                                        onClick="deleteMultiple()"><i class="ri-delete-bin-2-line"></i></b-button>
                                    <router-link to="/invoices/create" class="btn btn-secondary"><i
                                            class="bi bi-plus-circle align-baseline me-1"></i> Add Invoice</router-link>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-header>
                    <b-card-body class="mt-3">
                        <div class="table-responsive table-card">
                            <table class="table table-centered align-middle table-custom-effect table-nowrap mb-0">
                                <thead class="table-light">
                                    <tr>
                                        <th>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="checkAll">
                                                <label class="form-check-label" for="checkAll"></label>
                                            </div>
                                        </th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="invoice_id">ID</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="customer_name">Customer Name
                                        </th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="email">Email</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="create_date">Create Date</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="due_date">Due Date</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="amount">Amount</th>
                                        <th scope="col" class="sort cursor-pointer" data-sort="status">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody class="list form-check-all" id="invoice-list-data">
                                    <tr v-for="(data, index) of resultQuery" :key="index">
                                        <td>
                                            <div class="form-check"> <input class="form-check-input" type="checkbox"
                                                    name="chk_child" :value="data.invoice_no">
                                                <label class="form-check-label"></label>
                                            </div>
                                        </td>
                                        <td class="invoice_id">
                                            <router-link to="/invoices/overview">#TBS{{ data.invoice_no }}</router-link>
                                        </td>
                                        <td class="customer_name">{{ data.customer }}</td>
                                        <td class="email">{{ data.email }}</td>
                                        <td class="create_date">{{ data.createDate }}</td>
                                        <td class="due_date">{{ data.dueDate }}</td>
                                        <td class="amount">{{ data.invoice_amount }}</td>
                                        <td class="status" v-if="data.status == 'Paid'">
                                            <span class="badge bg-success-subtle text-success">{{ data.status }}</span>
                                        </td>

                                        <td class="status" v-if="data.status == 'Pending'">
                                            <span class="badge bg-warning-subtle text-warning">{{ data.status }}</span>
                                        </td>

                                        <td class="status" v-if="data.status == 'Unpaid'">
                                            <span class="badge bg-danger-subtle text-danger">{{ data.status }}</span>
                                        </td>

                                        <td class="status" v-if="data.status == 'Refund'">
                                            <span class="badge bg-danger-subtle text-danger">{{ data.status }}</span>
                                        </td>

                                        <td>
                                            <ul class="d-flex gap-2 list-unstyled mb-0">
                                                <li>
                                                    <router-link to="/invoices/overview" class="btn btn-subtle-primary btn-icon btn-sm">
                                                        <i class="ph-eye"></i>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/invoices/create" class="btn btn-subtle-secondary btn-icon btn-sm">
                                                        <i class="ph-pencil"></i>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <b-link href="javascript: void(0);"
                                                        class="btn btn-subtle-danger btn-icon btn-sm remove-item-btn" @click="deleteModalToggle(data)">
                                                        <i class="ph-trash"></i>
                                                    </b-link>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody><!-- end tbody -->
                            </table>
                            <div class="noresult" v-if="resultQuery.length < 1">
                                <div class="text-center py-4">
                                    <i class="ph-magnifying-glass fs-1 text-primary"></i>
                                    <h5 class="mt-2">Sorry! No Result Found</h5>
                                    <p class="text-muted mb-0">We've searched more than 6+ invoice We did not find any
                                        invoice for you search.</p>
                                </div>
                            </div>
                        </div>
                        <b-row class="align-items-center mt-4 pt-3" id="pagination-element" v-if="resultQuery.length >= 1">
                            <b-col cols="sm">
                                <div class="text-muted text-center text-sm-start">
                                    Showing <span class="fw-semibold">{{ resultQuery.length }}</span> of <span
                                        class="fw-semibold">{{ invoicesList.length }}</span>
                                    Results
                                </div>
                            </b-col>
                            <b-col sm="auto" class="mt-3 mt-sm-0">
                                <div class="pagination-wrap hstack justify-content-center gap-2">
                                    <b-link class="page-item pagination-prev" href="#" :disabled="page <= 1" @click="page--">
                                        Previous
                                    </b-link>
                                    <ul class="pagination listjs-pagination mb-0">
                                        <li :class="{ active: pageNumber == page, disabled: pageNumber == '...', }"
                                            v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                                            <b-link class="page" href="#" data-i="1" data-page="10">{{ pageNumber }}</b-link>
                                        </li>
                                    </ul>
                                    <b-link class="page-item pagination-next" href="#" @click="page++"
                                    :disabled="page >= pages.length">
                                        Next
                                    </b-link>
                                </div>
                            </b-col>
                        </b-row>

                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>

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