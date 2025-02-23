<script>
import Layout from "../../layouts/main.vue";
import moment from "moment";
import "@fullcalendar/core";
import { SimpleBar } from "simplebar-vue3";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import listPlugin from "@fullcalendar/list";
import { INITIAL_EVENTS, categories } from "./utils";

// avatar imgs
import avatar1 from "../../../images/users/32/avatar-1.jpg";
import avatar2 from "../../../images/users/32/avatar-2.jpg";
import avatar3 from "../../../images/users/32/avatar-3.jpg";
import avatar5 from "../../../images/users/32/avatar-5.jpg";

import calendar from "../../../images/calendar.png";

export default {

    data() {
        return {
            avatar1, avatar2, avatar3, avatar5, calendar,
            calendarOptions: {
                timeZone: "local",
                droppable: true,
                navLinks: true,
                plugins: [
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin,
                    bootstrapPlugin,
                    listPlugin,
                ],
                themeSystem: "bootstrap",
                headerToolbar: {
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                },
                windowResize: () => {
                    this.getInitialView();
                },
                initialView: this.getInitialView(),
                initialEvents: INITIAL_EVENTS,
                editable: true,
                selectable: true,
                selectMirror: true,
                dayMaxEvents: true,
                weekends: true,
                dateClick: this.dateClicked,
                eventClick: this.editEventDetails,
            },
            submitted: false,

            currentEvents: [],
            dataEdit: false,
            showModal: false,
            eventModal: false,
            categories: categories,
            newEventData: {},
            edit: {},
            deleteId: {},
            event: {
                title: "",
                date: "",
                location: "",
                description: "",
                type: "",
                calendardates: ""
            },
            config: {
                wrap: true, // set wrap to true only when using 'input-group'
                altFormat: "M j, Y",
                altInput: true,
                dateFormat: "d M, Y",
                mode: "range",
            },
            timeConfig: {
                enableTime: false,
                altInput: true,
                dateFormat: "Z",
                altFormat: "d M, Y",
                mode: "range",
            },
        };
    },
    mounted() {
        new Draggable(document.getElementById("external-events"), {
            itemSelector: ".external-event",
            eventData: function (eventEl) {
                return {
                    title: eventEl.innerText,
                    start: new Date(),
                    className: eventEl.getAttribute("data-class"),
                };
            },
        });
    },
    methods: {
        formatDate(date) {
            var monthNames = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ];
            var d = new Date(date),
                month = "" + monthNames[d.getMonth()],
                day = "" + d.getDate(),
                year = d.getFullYear();
            if (month.length < 2) month = "0" + month;
            if (day.length < 2) day = "0" + day;
            return [day + " " + month, year].join(",");
        },
        dateStamp(start, end) {
            let date;
            if (end == null) {
                date = this.formatDate(start);
            }
            else {
                date = this.formatDate(start) + " - " + this.formatDate(end);
            }
            return date;
        },

        /**
       * Delete event
       */
        deleteEvent() {
            this.edit.remove();
            this.eventModal = false;
            this.showModal = false;
        },
        /**
         * Modal open for add event
         */
        dateClicked(info) {
            this.event = {};
            this.newEventData = info;
            this.showModal = true;
            this.dataEdit = false;
        },
        /**
         * Modal open for edit event
         */
        editEventDetails(info) {
            this.edit = info.event;
            this.event.title = this.edit.title;
            this.event.type = this.edit.classNames;
            this.event.date = this.dateStamp(this.edit.start, this.edit.end);
            this.event.location = this.edit.extendedProps.location;
            this.event.description = this.edit.extendedProps.description;
            this.event.calendardates = moment(this.edit.start).toISOString() + " to " + moment(this.edit.end ? this.edit.end : this.edit.start).toISOString();
            this.dataEdit = true;
            this.eventModal = true;
        },
        handleSubmit() {
            if (this.dataEdit) {
                this.submitted = true;
                if (this.submitted && (this.event.title && this.event.calendardates && this.event.location && this.event.description && this.event.type)) {
                    const editTitle = this.event.title;
                    const edittype = this.event.type;
                    const editLocation = this.event.location;
                    const editDescription = this.event.description;
                    const date = this.event.calendardates.split(" ").filter(((item) => (item !== "to")));
                    const startDate = date[0];
                    const endDate = date[1];

                    this.edit.setProp("title", editTitle);
                    this.edit.setProp("classNames", edittype);
                    this.edit.setStart(startDate);
                    this.edit.setEnd(endDate);
                    this.edit.setExtendedProp("location", editLocation);
                    this.edit.setExtendedProp("description", editDescription);
                    this.showModal = false;
                }
            } else {
                this.submitted = true;
                if (this.submitted && (this.event.title && this.event.calendardates && this.event.location && this.event.description && this.event.type)) {
                    const title = this.event.title;
                    const type = this.event.type;
                    const location = this.event.location;
                    const description = this.event.description;
                    const date = this.event.calendardates.split(" ").filter(((item) => (item !== "to")));
                    const startDate = date[0];
                    const endDate = date[1];
                    const calendarApi = this.$refs.fullCalendar.getApi();

                    calendarApi.addEvent(
                        {
                            id: (Math.floor(Math.random() * 100 + 20) - 20),
                            title,
                            start: startDate,
                            end: endDate,
                            classNames: type,
                            extendedProps: { department: "All Day Event", location: location, description: description }
                        });

                    this.showModal = false;
                    this.event = {};
                    this.newEventData = {};
                }
            }
        },

        getInitialView() {
            if (window.innerWidth >= 768 && window.innerWidth < 1200) {
                return "timeGridWeek";
            } else if (window.innerWidth <= 768) {
                return "listMonth";
            } else {
                return "dayGridMonth";
            }
        },

        // 
        toggleModal() {
            this.showModal = true;
            this.dataEdit = false;
            this.event = {};
            this.submitted = false;
        },

        // edit button
        editbtn() {
            this.showModal = true,
                this.eventModal = false;
        },

        // cancel button
        cancelbtn() {
            this.showModal = false;
            this.eventModal = true;
        },
    },
    components: {
        Layout,
        FullCalendar,
        SimpleBar,
        flatPickr,
    },
};
</script>

<template>
    <Layout>
        <div class="calendar-wrapper d-lg-flex gap-4">

            <div class="w-100">
                <b-card no-body class="card-h-100">
                    <div class="">
                        <!-- <div id="calendar"></div> -->
                        <FullCalendar ref="fullCalendar" :options="calendarOptions" />
                    </div>
                </b-card>
            </div>

            <b-card no-body class="mb-0 calendar-event-card">
                <b-card-body>
                    <b-button variant="primary" class="w-100 mb-4" id="btn-new-event" @click="toggleModal">
                        <i class="mdi mdi-plus"></i>Create New Event
                    </b-button>
                    <div class="mb-4">
                        <div id="external-events">
                            <p class="text-muted">Drag and drop your event or click in the calendar</p>
                            <div class="external-event fc-event" data-class="bg-success-subtle">
                                <i class="mdi mdi-checkbox-blank-circle font-size-11 text-success me-2"></i>
                                New Event Planning
                            </div>
                            <div class="external-event fc-event" data-class="bg-info-subtle">
                                <i class="mdi mdi-checkbox-blank-circle font-size-11 text-info me-2"></i>
                                Meeting
                            </div>
                            <div class="external-event fc-event" data-class="bg-warning-subtle">
                                <i class="mdi mdi-checkbox-blank-circle font-size-11 text-warning me-2"></i>
                                Generating Reports
                            </div>
                            <div class="external-event fc-event" data-class="bg-danger-subtle">
                                <i class="mdi mdi-checkbox-blank-circle font-size-11 text-danger me-2"></i>
                                Create New theme
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5 class="mb-3">Recent Activity</h5>
                        <SimpleBar class="px-3 mx-n3 mb-3" style="height: 400px">
                            <div class="acitivity-timeline acitivity-main">
                                <div class="acitivity-item d-flex">
                                    <div class="flex-shrink-0">
                                        <img :src="avatar2" alt="" class="avatar-xs rounded-circle acitivity-avatar" />
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h6 class="mb-1 lh-base">Purchased by James Price</h6>
                                        <p class="text-muted mb-2">Product noise evolve smartwatch </p>
                                        <small class="mb-0 text-muted">05:57 AM Today</small>
                                    </div>
                                </div>
                                <div class="acitivity-item py-3 d-flex">
                                    <div class="flex-shrink-0">
                                        <img :src="avatar1" alt="" class="avatar-xs rounded-circle acitivity-avatar" />
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h6 class="mb-1 lh-base">Natasha Carey have liked the products</h6>
                                        <p class="text-muted mb-2">Allow users to like products in your WooCommerce store.
                                        </p>
                                        <small class="mb-0 text-muted">25 Dec, 2022</small>
                                    </div>
                                </div>
                                <div class="acitivity-item py-3 d-flex">
                                    <div class="flex-shrink-0">
                                        <img :src="avatar3" alt="" class="avatar-xs rounded-circle acitivity-avatar" />
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h6 class="mb-1 lh-base">Today offers by <router-link
                                                to="/ecommerce/seller-overview" class="link-secondary">Digitate
                                                Galaxy</router-link></h6>
                                        <p class="text-muted mb-2">Offer is valid on orders of $230 Or above for selected
                                            products only.</p>
                                        <small class="mb-0 text-muted">12 Dec, 2022</small>
                                    </div>
                                </div>
                                <div class="acitivity-item py-3 d-flex">
                                    <div class="flex-shrink-0">
                                        <img :src="avatar2" alt="" class="avatar-xs rounded-circle acitivity-avatar" />
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h6 class="mb-1 lh-base">Favorites Product</h6>
                                        <p class="text-muted mb-2">Esther James have Favorites product.</p>
                                        <small class="mb-0 text-muted">25 Nov, 2022</small>
                                    </div>
                                </div>
                                <div class="acitivity-item py-3 d-flex">
                                    <div class="flex-shrink-0">
                                        <img :src="avatar2" alt="" class="avatar-xs rounded-circle acitivity-avatar" />
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h6 class="mb-1 lh-base">Flash sale starting <span
                                                class="text-primary">Tomorrow.</span></h6>
                                        <p class="text-muted mb-2">Flash sale by <b-link href="#"
                                                class="link-secondary fw-medium">Zoetis Fashion</b-link></p>
                                        <small class="mb-0 text-muted">22 Oct, 2022</small>
                                    </div>
                                </div>
                                <div class="acitivity-item d-flex">
                                    <div class="flex-shrink-0">
                                        <img :src="avatar5" alt="" class="avatar-xs rounded-circle acitivity-avatar" />
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h6 class="mb-1 lh-base">Monthly sales report</h6>
                                        <p class="text-muted mb-2"><span class="text-danger">2 days left</span> notification
                                            to submit the monthly sales report. <b-link href="#"
                                                class="link-warning text-decoration-underline">Reports Builder</b-link></p>
                                        <small class="mb-0 text-muted">15 Oct, 2022</small>
                                    </div>
                                </div>
                            </div>
                        </SimpleBar>
                    </div>

                    <b-card no-body class="bg-primary">
                        <b-card-body>
                            <div class="d-flex gap-2 align-items-center">

                                <div class="flex-grow-1">
                                    <h5 class="text-white">Upgrade to Pro</h5>
                                    <p class="text-white-50 mb-0">Event that applications book will appear here.</p>
                                </div>

                                <div class="flex-shrink-0">
                                    <img :src="calendar" alt="" class="avatar-lg" />
                                </div>
                            </div>
                        </b-card-body>
                    </b-card>

                </b-card-body>
            </b-card>
        </div>


        <div style='clear:both'></div>

        <b-modal v-model="showModal" :title="this.dataEdit ? this.event.title : 'Add Event'"
            title-class="text-black font-18" body-class="p-4" header-class="p-3 bg-info-subtle" hide-footer
            class="v-modal-custom" centered="">
            <form @submit.prevent="handleSubmit">
                <div class="text-end" v-if="this.dataEdit">
                    <b-link href="#" class="btn btn-sm btn-subtle-primary" id="edit-event-btn" @click="cancelbtn">
                        Cancel</b-link>
                </div>
                <b-row>
                    <b-col cols="12">
                        <div class="mb-3">
                            <label for="name" class="form-label">Event Name</label>
                            <input id="name" v-model="event.title" type="text" class="form-control"
                                placeholder="Insert Event name" :class="{ 'is-invalid': submitted && !event.title }" />
                        </div>
                    </b-col>
                    <b-col cols="12">
                        <div class="mb-3">
                            <label class="form-label">Event Date</label>
                            <div class="input-group">
                                <flat-pickr placeholder="Select date" v-model="event.calendardates" :config="timeConfig"
                                    class="form-control flatpickr-input" id="caledate"
                                    :class="{ 'is-invalid': submitted && !event.calendardates }"></flat-pickr>
                                <span class="input-group-text"><i class="ri-calendar-event-line"></i></span>
                            </div>
                        </div>
                    </b-col>
                    <b-col cols="12">
                        <div class="mb-3">
                            <label for="event-location" class="form-label">Location</label>
                            <div>
                                <input type="text" v-model="event.location" class="form-control" name="event-location"
                                    id="event-location" placeholder="Event location"
                                    :class="{ 'is-invalid': submitted && !event.location }">
                            </div>
                        </div>
                    </b-col>
                    <b-col cols="12">
                        <div class="mb-3">
                            <label class="form-label">Description</label>
                            <textarea class="form-control" v-model="event.description" id="event-description"
                                placeholder="Enter a description" rows="3" spellcheck="false"
                                :class="{ 'is-invalid': submitted && !event.description }"></textarea>
                        </div>
                    </b-col>
                    <b-col cols="12">
                        <div class="mb-3">
                            <label class="form-label">Type</label>
                            <select v-model="event.type" class="form-control" name="type"
                                :class="{ 'is-invalid': submitted && !event.type }">
                                <option v-for="option in categories" :key="option.backgroundColor"
                                    :value="`${option.value}`">
                                    {{ option.name }}
                                </option>
                            </select>
                        </div>
                    </b-col>
                </b-row>

                <div class="text-end pt-3">
                    <b-button class="ms-1" variant="subtle-danger" @click="deleteEvent"
                        v-if="this.dataEdit">Delete</b-button>
                    <b-button type="submit" variant="success" class="ms-1">
                        {{ this.dataEdit ? "Update Event" : "Add Event" }}
                    </b-button>
                </div>
            </form>
        </b-modal>

        <b-modal v-model="eventModal" :title="this.event.title" title-class="text-black font-18" hide-footer
            body-class="p-4" header-class="p-3 bg-info-subtle" class="v-modal-custom" centered>
            <div class="text-end">
                <b-link href="#" class="btn btn-sm btn-subtle-primary" id="edit-event-btn" @click="editbtn">Edit</b-link>
            </div>
            <div class="event-details">
                <div class="d-flex mb-2">
                    <div class="flex-grow-1 d-flex align-items-center">
                        <div class="flex-shrink-0 me-3"> <i class="ri-calendar-event-line text-muted fs-16"></i> </div>
                        <div class="flex-grow-1">
                            <h6 class="d-block fw-semibold mb-0" id="event-start-date-tag">
                                {{ this.event.date }}
                            </h6>
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-center mb-2">
                    <div class="flex-shrink-0 me-3"> <i class="ri-time-line text-muted fs-16"></i> </div>
                    <div class="flex-grow-1">
                        <h6 class="d-block fw-semibold mb-0">
                            <span id="event-timepicker1-tag"></span> - <span id="event-timepicker2-tag"></span>
                        </h6>
                    </div>
                </div>
                <div class="d-flex align-items-center mb-2">
                    <div class="flex-shrink-0 me-3"> <i class="ri-map-pin-line text-muted fs-16"></i> </div>
                    <div class="flex-grow-1">
                        <h6 class="d-block fw-semibold mb-0">
                            <span id="event-location-tag">
                                {{ this.event.location || "No Location" }}
                            </span>
                        </h6>
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="flex-shrink-0 me-3"> <i class="ri-discuss-line text-muted fs-16"></i> </div>
                    <div class="flex-grow-1">
                        <p class="d-block text-muted mb-0" id="event-description-tag">
                            {{ this.event.description || "N.A." }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="hstack gap-2 justify-content-end">
                <button type="button" class="btn btn-subtle-danger" id="btn-delete-event" @click="deleteEvent">
                    <i class="ri-close-line align-bottom"></i> Delete
                </button>
            </div>
        </b-modal>
    </Layout>
</template>