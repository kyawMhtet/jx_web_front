<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

import { SimpleBar } from "simplebar-vue3";
import Multiselect from '@vueform/multiselect';

// avatar imgs
import avatar1 from "../../../images/users/avatar-1.jpg";
import avatar3 from "../../../images/users/32/avatar-3.jpg";
import avatar4 from "../../../images/users/32/avatar-4.jpg";
import avatar6 from "../../../images/users/32/avatar-6.jpg";
import avatar8 from "../../../images/users/32/avatar-8.jpg";
import avatar10 from "../../../images/users/32/avatar-10.jpg";

import small4 from "../../../images/small/img-4.jpg"
import small5 from "../../../images/small/img-5.jpg"

import cImg3 from "../../../images/companies/img-3.png";

export default {
    data() {
        return {
            title: "Overview",
            items: [
                {
                    text: "Support Tickets",
                    href: "/",
                },
                {
                    text: "Overview",
                    active: true,
                },
            ],
            value: null,
            options: [
                { value: 'Status', label: 'Status', disabled: true },
                { value: 'New', label: 'New' },
                { value: 'Open', label: 'Open'},
                { value: 'Inprogress', label: 'Inprogress' },
                { value: 'Closed', label: 'Closed' },
            ],
            avatar1,
            avatar3,
            avatar4,
            avatar6,
            avatar8,
            avatar10,
            small4,
            small5,
            cImg3,
        };
    },
    components: {
        Layout,
        PageHeader,
        SimpleBar,
        Multiselect
    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <b-card no-body>
            <b-row class="g-0">
                <b-col xl="9" lg="8">
                    <b-card-body class="border-end h-100">
                        <b-row class="mb-4 pb-2 g-3">
                            <b-col cols="auto">
                                <div class="avatar-sm">
                                    <div class="avatar-title bg-success-subtle rounded">
                                        <img :src="cImg3" alt="" class="avatar-xs" />
                                    </div>
                                </div>
                            </b-col>
                            <b-col cols="md" class="order-3 order-md-2">
                                <div>
                                    <h5>#TBS24301901 - Forgetting to start a component name with a capital letter</h5>
                                    <div class="hstack gap-2 gap-md-3 flex-wrap">
                                        <div class="text-muted"><i class="ri-building-line align-bottom me-1"></i><span
                                                id="ticket-client">Themesbrand</span></div>
                                        <div class="vr"></div>
                                        <div class="text-muted">Create Date : <span class="fw-medium " id="create-date">20
                                                Dec, 2023</span></div>
                                        <div class="vr"></div>
                                        <div class="text-muted">Due Date : <span class="fw-medium" id="due-date">29 Dec,
                                                2023</span></div>
                                        <div class="vr"></div>
                                        <div class="badge rounded-pill bg-info fs-12" id="ticket-status">New</div>
                                        <div class="badge rounded-pill bg-danger fs-12" id="ticket-priority">High</div>
                                    </div>
                                </div>
                            </b-col>
                            <b-col cols="auto" class="ms-auto order-2 order-md-3">
                                <router-link to="/tickets/list" class="btn btn-primary btn-sm"> Add Ticket</router-link>
                            </b-col>
                        </b-row>

                        <h6 class="fw-semibold text-uppercase mb-2">Ticket Descriptions</h6>
                        <p class="text-muted mb-4">It's used for building interactive user interfaces and web applications
                            quickly and efficiently with significantly less code than you would with vanilla JavaScript. In
                            React, you develop your applications by creating reusable components that you can think of as
                            independent Lego blocks. React is a JavaScript library developed by Facebook which, among other
                            things, was used to build Instagram.com. Its aim is to allow developers to easily create fast
                            user interfaces for websites and applications alike. The main concept of React. js is virtual
                            DOM. If you need a fast and responsive user interface, ReactJS is the better option. But if you
                            need to handle complex data analysis or number-crunching.</p>
                        <h6 class="fw-semibold text-uppercase mb-3">Create an Excellent UI for a Dashboard</h6>
                        <ul class="text-muted vstack gap-2 mb-4 list-unstyled">
                            <li><i class="bi bi-check-lg text-success"></i> App Registry Error in React</li>
                            <li><i class="bi bi-check-lg text-success"></i> Development Server Error in React</li>
                            <li><i class="bi bi-check-lg text-success"></i> Undefined is not an object error in React</li>
                            <li><i class="bi bi-check-lg text-success"></i> Not following the ReactJS folder structure</li>
                            <li><i class="bi bi-check-lg text-success"></i> Webstorm does not recognize tags</li>
                        </ul>
                        <h6 class="fw-semibold text-uppercase mb-4">Discussion with Themesbrand</h6>
                        <SimpleBar data-simplebar style="height: 300px;" class="px-3 mx-n3">
                            <div class="d-flex mb-4">
                                <div class="flex-shrink-0">
                                    <img :src="avatar8" alt="" class="avatar-xs rounded-circle" />
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6>Joseph Parker <small class="text-muted">20 Dec 2023 - 05:47AM</small></h6>
                                    <p class="text-muted">I am getting message from customers that when they place order
                                        always get error message .</p>
                                    <b-link to="#" class="badge text-muted bg-light"><i class="mdi mdi-reply"></i>
                                        Reply</b-link>
                                    <div class="d-flex mt-4">
                                        <div class="flex-shrink-0">
                                            <img :src="avatar10" alt=""
                                                class="avatar-xs rounded-circle" />
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h6>Alexis Clarke <small class="text-muted">22 Dec 2023 - 02:32PM</small></h6>
                                            <p class="text-muted">Please be sure to check your Spam mailbox to see if your
                                                email filters have identified the email from Dell as spam.</p>
                                            <b-link to="#" class="badge text-muted bg-light"><i class="mdi mdi-reply"></i>
                                                Reply</b-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex mb-4">
                                <div class="flex-shrink-0">
                                    <img :src="avatar6" alt="" class="avatar-xs rounded-circle" />
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6>Donald Palmer <small class="text-muted">24 Dec 2023 - 05:20PM</small></h6>
                                    <p class="text-muted">If you have further questions, please contact Customer Support
                                        from the “Action Menu” on your <b-link href="#"
                                            class="text-decoration-underline">Online Order Support</b-link>.</p>
                                    <b-link href="#" class="badge text-muted bg-light"><i class="mdi mdi-reply"></i>
                                        Reply</b-link>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="flex-shrink-0">
                                    <img :src="avatar10" alt=""
                                        class="avatar-xs rounded-circle" />
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6>Alexis Clarke <small class="text-muted">26 min ago</small></h6>
                                    <p class="text-muted">Your <b-link href="#" class="text-decoration-underline">Online
                                            Order Support</b-link> provides you with the
                                        most current status of your order. To help manage your order refer to the “Action
                                        Menu” to initiate return, contact Customer Support and more.</p>
                                    <b-row class="g-2 mb-3">
                                        <b-col lg="1" sm="2" cols="6">
                                            <img :src="small4" alt="" class="img-fluid rounded" />
                                        </b-col>
                                        <b-col lg="1" sm="2" cols="6">
                                            <img :src="small5" alt="" class="img-fluid rounded" />
                                        </b-col>
                                    </b-row>
                                    <b-link href="#" class="badge text-muted bg-light"><i class="mdi mdi-reply"></i>
                                        Reply</b-link>
                                    <div class="d-flex mt-4">
                                        <div class="flex-shrink-0">
                                            <img :src="avatar6" alt=""
                                                class="avatar-xs rounded-circle" />
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h6>Donald Palmer <small class="text-muted">8 sec ago</small></h6>
                                            <p class="text-muted">Other shipping methods are available at checkout if you
                                                want your purchase delivered faster.</p>
                                            <b-link href="#" class="badge text-muted bg-light"><i class="mdi mdi-reply"></i>
                                                Reply</b-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SimpleBar>
                        <form action="#" class="mt-3">
                            <b-row class="g-3">
                                <b-col lg="12">
                                    <label for="exampleFormControlTextarea1" class="form-label">Leave a Comments</label>
                                    <textarea class="form-control bg-light border-light" id="exampleFormControlTextarea1"
                                        rows="3" placeholder="Enter comments"></textarea>
                                </b-col>
                                <b-col lg="12" class="text-end">
                                    <b-link href="#" class="btn btn-success">Post Comments</b-link>
                                </b-col>
                            </b-row>
                        </form>
                    </b-card-body>
                </b-col>
                <b-col xl="3" lg="4">
                    <b-card-header>
                        <b-card-title title-tag="h6" class="mb-0">Ticket Details</b-card-title>
                    </b-card-header>
                    <b-card-body class="mt-2">
                        <div class="table-responsive table-card">
                            <table class="table table-borderless align-middle mb-0">
                                <tbody>
                                    <tr>
                                        <th>Ticket No</th>
                                        <td>#TBS<span id="t-no">24301901</span> </td>
                                    </tr>
                                    <tr>
                                        <th>Client</th>
                                        <td id="t-client">Themesbrand</td>
                                    </tr>
                                    <tr>
                                        <th>Project</th>
                                        <td>Steex - Admin & Dashboard</td>
                                    </tr>
                                    <tr>
                                        <th>Assigned To:</th>
                                        <td>
                                            <div class="avatar-group">
                                                <b-link href="#" class="avatar-group-item" data-bs-toggle="tooltip"
                                                    data-bs-placement="top" data-bs-trigger="hover"
                                                    data-bs-original-title="Erica Kernan">
                                                    <img :src="avatar4" alt=""
                                                        class="rounded-circle avatar-xs" />
                                                </b-link>
                                                <b-link href="#" class="avatar-group-item" data-bs-toggle="tooltip"
                                                    data-bs-placement="top" data-bs-trigger="hover"
                                                    data-bs-original-title="Alexis Clarke">
                                                    <img :src="avatar10" alt=""
                                                        class="rounded-circle avatar-xs" />
                                                </b-link>
                                                <b-link href="#" class="avatar-group-item" data-bs-toggle="tooltip"
                                                    data-bs-placement="top" data-bs-trigger="hover"
                                                    data-bs-original-title="James Price">
                                                    <img :src="avatar3" alt=""
                                                        class="rounded-circle avatar-xs" />
                                                </b-link>
                                                <b-link href="#" class="avatar-group-item" data-bs-toggle="tooltip"
                                                    data-bs-trigger="hover" data-bs-placement="top"
                                                    data-bs-original-title="Add Members">
                                                    <div class="avatar-xs">
                                                        <div
                                                            class="avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary">
                                                            +
                                                        </div>
                                                    </div>
                                                </b-link>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Status:</th>
                                        <td>
                                            <Multiselect placeholder="Status" v-model="value" :options="options" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Priority</th>
                                        <td>
                                            <span class="badge bg-danger" id="t-priority">High</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Create Date</th>
                                        <td id="c-date">20 Dec, 2023</td>
                                    </tr>
                                    <tr>
                                        <th>Due Date</th>
                                        <td id="d-date">29 Dec, 2023</td>
                                    </tr>
                                    <tr>
                                        <th>Last Activity</th>
                                        <td>14 min ago</td>
                                    </tr>
                                    <tr>
                                        <th>Labels</th>
                                        <td class="hstack text-wrap gap-1">
                                            <span class="badge bg-primary-subtle text-primary">Admin</span>
                                            <span class="badge bg-primary-subtle text-primary">UI</span>
                                            <span class="badge bg-primary-subtle text-primary">Dashboard</span>
                                            <span class="badge bg-primary-subtle text-primary">Design</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </b-card-body>
                    <b-card-body class="border-top mt-2">
                        <b-link href="#!" class="float-end link-effect">View More <i
                                class="bi bi-arrow-right align-baseline ms-1"></i></b-link>
                        <b-card-title title-tag="h6" class="mb-0">Support Team</b-card-title>
                    </b-card-body>
                    <b-card-body>
                        <div class="d-flex gap-2 align-items-center mb-3">
                            <div class="flex-shrink-0">
                                <img :src="avatar1" alt="" class="avatar-sm rounded" />
                            </div>
                            <div class="flex-grow-1">
                                <h6 class="fs-md">Morton Satterfield</h6>
                                <p class="text-muted mb-0">Admin & Founder</p>
                            </div>
                        </div>
                        <b-button variant="secondary" class="w-100" id="agent-chat"><i
                                class="bi bi-chat-text align-baseline me-1"></i> Get In Touch</b-button>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card>
    </Layout>
</template>