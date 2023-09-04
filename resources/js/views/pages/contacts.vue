<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

// avatar imgs
import avatar2 from "../../../images/users/32/avatar-2.jpg";
import avatar3 from "../../../images/users/32/avatar-3.jpg";
import avatar4 from "../../../images/users/32/avatar-4.jpg";
import avatar5 from "../../../images/users/32/avatar-5.jpg";
import avatar6 from "../../../images/users/32/avatar-6.jpg";
import avatar7 from "../../../images/users/32/avatar-7.jpg";
import avatar8 from "../../../images/users/32/avatar-8.jpg";
import avatar9 from "../../../images/users/32/avatar-9.jpg";
import avatar10 from "../../../images/users/32/avatar-10.jpg";

export default {
    data() {
        return {
            title: "Contacts",
            items: [{
                    text: "Pages",
                    href: "/",
                },
                {
                    text: "Contacts",
                    active: true,
                },
            ],
            avatar2,
            avatar3,
            avatar4,
            avatar5,
            avatar6,
            avatar7,
            avatar8,
            avatar9,
            avatar10,
        };
    },
    components: {
        Layout,
        PageHeader,
    },
};
</script>

<template>
<Layout>
    <PageHeader :title="title" :items="items" />
    <b-row class="align-items-center g-3 mb-4">
        <b-col sm="3" class="me-auto">
            <b-card-title title-tag="h5" class="mb-0">Contact List <span class="badge bg-success ms-1 align-baseline">834</span></b-card-title>
        </b-col>
        <b-col lg="3" sm="5">
            <div class="search-box">
                <input type="text" class="form-control search" placeholder="Search for name, number, location or something...">
                <i class="ri-search-line search-icon"></i>
            </div>
        </b-col>
        <b-col sm="auto" cols="auto">
            <div class="d-flex flex-wrap align-items-center justify-content-end gap-2">
                <div>
                    <b-link href="#" class="btn btn-primary"><i class="bx bx-plus me-1"></i> Add New</b-link>
                </div>
            </div>
        </b-col>
    </b-row>

    <b-row>
        <b-col xxl="3" sm="6">
            <b-card no-body>
                <b-card-body>
                    <div class="dropdown float-end">
                        <b-link class="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i class="bx bx-dots-horizontal-rounded"></i></b-link>
                        <div class="dropdown-menu dropdown-menu-end">
                            <b-link class="dropdown-item" href="#">Edit</b-link>
                            <b-link class="dropdown-item" href="#">Action</b-link>
                            <b-link class="dropdown-item" href="#">Remove</b-link>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="flex-shrink-0 position-relative">
                            <img :src="avatar2" alt="" class="avatar-sm rounded" />
                            <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"><span class="visually-hidden">unread messages</span></span>
                        </div>
                        <div class="flex-grow-1 ms-2">
                            <h5 class="fs-md">
                                <router-link to="/pages/profile" class="text-dark">Patricia
                                    Honda</router-link>
                            </h5>
                            <p class="text-muted mb-0">Full Stack Developer</p>
                        </div>
                    </div>
                    <div class="mt-4">
                        <p class="text-muted mb-2"><i class="bi bi-telephone align-baseline me-1"></i> 617 219 6245</p>
                        <p class="text-muted mb-2"><i class="bi bi-envelope align-baseline me-1"></i>
                            patriciahonda@steex.com</p>
                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-baseline me-1"></i> 2995 Lynn Street
                            Newton, MA 02160</p>
                    </div>
                    <div class="d-flex gap-2 pt-4">
                        <router-link to="/pages/profile" class="btn btn-subtle-secondary w-50"><i class="bi bi-person align-baseline me-1"></i> Profile</router-link>
                        <b-button variant="primary" type="button" class="text-truncate w-50"><i class="bi bi-chat-left-text align-baseline me-1"></i> Contact Us</b-button>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col xxl="3" sm="6">
            <b-card no-body>
                <b-card-body>
                    <div class="dropdown float-end">
                        <b-link class="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i class="bx bx-dots-horizontal-rounded"></i></b-link>
                        <div class="dropdown-menu dropdown-menu-end">
                            <b-link class="dropdown-item" href="#">Edit</b-link>
                            <b-link class="dropdown-item" href="#">Action</b-link>
                            <b-link class="dropdown-item" href="#">Remove</b-link>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="flex-shrink-0 position-relative">
                            <img :src="avatar3" alt="" class="avatar-sm rounded" />
                            <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"><span class="visually-hidden">unread messages</span></span>
                        </div>
                        <div class="flex-grow-1 ms-2">
                            <h5 class="fs-md">
                                <router-link to="/pages/profile" class="text-dark">James
                                    Lash</router-link>
                            </h5>
                            <p class="text-muted mb-0">Web Designer</p>
                        </div>
                    </div>
                    <div class="mt-4">
                        <p class="text-muted mb-2"><i class="bi bi-telephone align-baseline me-1"></i> 617 219 6245</p>
                        <p class="text-muted mb-2"><i class="bi bi-envelope align-baseline me-1"></i>
                            jameslash@steex.com</p>
                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-baseline me-1"></i> 3089 Leroy Lane
                            Pollock, SD 57648</p>
                    </div>
                    <div class="d-flex gap-2 pt-4">
                        <router-link to="/pages/profile" class="btn btn-subtle-secondary w-50"><i class="bi bi-person align-baseline me-1"></i> Profile</router-link>
                        <b-button variant="primary" type="button" class="text-truncate w-50"><i class="bi bi-chat-left-text align-baseline me-1"></i> Contact Us</b-button>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col xxl="3" sm="6">
            <b-card no-body>
                <b-card-body>
                    <div class="dropdown float-end">
                        <b-link class="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i class="bx bx-dots-horizontal-rounded"></i></b-link>
                        <div class="dropdown-menu dropdown-menu-end">
                            <b-link class="dropdown-item" href="#">Edit</b-link>
                            <b-link class="dropdown-item" href="#">Action</b-link>
                            <b-link class="dropdown-item" href="#">Remove</b-link>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="flex-shrink-0 position-relative">
                            <img :src="avatar4" alt="" class="avatar-sm rounded" />
                            <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-danger p-1"><span class="visually-hidden">unread messages</span></span>
                        </div>
                        <div class="flex-grow-1 ms-2">
                            <h5 class="fs-md">
                                <router-link to="/pages/profile" class="text-dark">Angus
                                    Garnsey</router-link>
                            </h5>
                            <p class="text-muted mb-0">React Developer</p>
                        </div>
                    </div>
                    <div class="mt-4">
                        <p class="text-muted mb-2"><i class="bi bi-telephone align-baseline me-1"></i> 085 383 2388</p>
                        <p class="text-muted mb-2"><i class="bi bi-envelope align-baseline me-1"></i>
                            angusgarnsey@steex.com</p>
                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-baseline me-1"></i> 1738 Old Cress Lady
                            Frere 5411</p>
                    </div>
                    <div class="d-flex gap-2 pt-4">
                        <router-link to="/pages/profile" class="btn btn-subtle-secondary w-50"><i class="bi bi-person align-baseline me-1"></i> Profile</router-link>
                        <b-button variant="primary" type="button" class="text-truncate w-50"><i class="bi bi-chat-left-text align-baseline me-1"></i> Contact Us</b-button>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col xxl="3" sm="6">
            <b-card no-body>
                <b-card-body>
                    <div class="dropdown float-end">
                        <b-link class="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i class="bx bx-dots-horizontal-rounded"></i></b-link>
                        <div class="dropdown-menu dropdown-menu-end">
                            <b-link class="dropdown-item" href="#">Edit</b-link>
                            <b-link class="dropdown-item" href="#">Action</b-link>
                            <b-link class="dropdown-item" href="#">Remove</b-link>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="flex-shrink-0 position-relative">
                            <img :src="avatar5" alt="" class="avatar-sm rounded" />
                            <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-danger p-1"><span class="visually-hidden">unread messages</span></span>
                        </div>
                        <div class="flex-grow-1 ms-2">
                            <h5 class="fs-md">
                                <router-link to="/pages/profile" class="text-dark">Matilda
                                    Marston</router-link>
                            </h5>
                            <p class="text-muted mb-0">Shopify Developer</p>
                        </div>
                    </div>
                    <div class="mt-4">
                        <p class="text-muted mb-2"><i class="bi bi-telephone align-baseline me-1"></i> 082 288 1065</p>
                        <p class="text-muted mb-2"><i class="bi bi-envelope align-baseline me-1"></i>
                            matildamarston@steex.com</p>
                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-baseline me-1"></i> 2168 Bezuidenhout
                            St Evander 2270</p>
                    </div>
                    <div class="d-flex gap-2 pt-4">
                        <router-link to="/pages/profile" class="btn btn-subtle-secondary w-50"><i class="bi bi-person align-baseline me-1"></i> Profile</router-link>
                        <b-button variant="primary" type="button" class="text-truncate w-50"><i class="bi bi-chat-left-text align-baseline me-1"></i> Contact Us</b-button>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col xxl="3" sm="6">
            <b-card no-body>
                <b-card-body>
                    <div class="dropdown float-end">
                        <b-link class="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i class="bx bx-dots-horizontal-rounded"></i></b-link>
                        <div class="dropdown-menu dropdown-menu-end">
                            <b-link class="dropdown-item" href="#">Edit</b-link>
                            <b-link class="dropdown-item" href="#">Action</b-link>
                            <b-link class="dropdown-item" href="#">Remove</b-link>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="flex-shrink-0 position-relative">
                            <img :src="avatar6" alt="" class="avatar-sm rounded" />
                            <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"><span class="visually-hidden">unread messages</span></span>
                        </div>
                        <div class="flex-grow-1 ms-2">
                            <h5 class="fs-md">
                                <router-link to="/pages/profile" class="text-dark">Zachary
                                    Benjamin</router-link>
                            </h5>
                            <p class="text-muted mb-0">Shopify Developer</p>
                        </div>
                    </div>
                    <div class="mt-4">
                        <p class="text-muted mb-2"><i class="bi bi-telephone align-baseline me-1"></i> 348 9730237</p>
                        <p class="text-muted mb-2"><i class="bi bi-envelope align-baseline me-1"></i>
                            zacharybenjamin@steex.com</p>
                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-baseline me-1"></i> Via Carlo Alberto,
                            8 22020-Faloppio CO</p>
                    </div>
                    <div class="d-flex gap-2 pt-4">
                        <router-link to="/pages/profile" class="btn btn-subtle-secondary w-50"><i class="bi bi-person align-baseline me-1"></i> Profile</router-link>
                        <b-button variant="primary" type="button" class="text-truncate w-50"><i class="bi bi-chat-left-text align-baseline me-1"></i> Contact Us</b-button>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col xxl="3" sm="6">
            <b-card no-body>
                <b-card-body>
                    <div class="dropdown float-end">
                        <b-link class="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i class="bx bx-dots-horizontal-rounded"></i></b-link>
                        <div class="dropdown-menu dropdown-menu-end">
                            <b-link class="dropdown-item" href="#">Edit</b-link>
                            <b-link class="dropdown-item" href="#">Action</b-link>
                            <b-link class="dropdown-item" href="#">Remove</b-link>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="flex-shrink-0 position-relative">
                            <div class="avatar-sm">
                                <div class="avatar-title fs-lg bg-danger-subtle text-danger rounded">
                                    RC
                                </div>
                            </div>
                            <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"><span class="visually-hidden">unread messages</span></span>
                        </div>
                        <div class="flex-grow-1 ms-2">
                            <h5 class="fs-md">
                                <router-link to="/pages/profile" class="text-dark">Ruby
                                    Chomley</router-link>
                            </h5>
                            <p class="text-muted mb-0">Shopify Developer</p>
                        </div>
                    </div>
                    <div class="mt-4">
                        <p class="text-muted mb-2"><i class="bi bi-telephone align-baseline me-1"></i> 348 9730237</p>
                        <p class="text-muted mb-2"><i class="bi bi-envelope align-baseline me-1"></i>
                            rubychomley@steex.com</p>
                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-baseline me-1"></i> Via Pasquale Scura,
                            76 75010-Calciano MT</p>
                    </div>
                    <div class="d-flex gap-2 pt-4">
                        <router-link to="/pages/profile" class="btn btn-subtle-secondary w-50"><i class="bi bi-person align-baseline me-1"></i> Profile</router-link>
                        <b-button variant="primary" type="button" class="text-truncate w-50"><i class="bi bi-chat-left-text align-baseline me-1"></i> Contact Us</b-button>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col xxl="3" sm="6">
            <b-card no-body>
                <b-card-body>
                    <div class="dropdown float-end">
                        <b-link class="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i class="bx bx-dots-horizontal-rounded"></i></b-link>
                        <div class="dropdown-menu dropdown-menu-end">
                            <b-link class="dropdown-item" href="#">Edit</b-link>
                            <b-link class="dropdown-item" href="#">Action</b-link>
                            <b-link class="dropdown-item" href="#">Remove</b-link>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="flex-shrink-0 position-relative">
                            <img :src="avatar7" alt="" class="avatar-sm rounded" />
                            <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"><span class="visually-hidden">unread messages</span></span>
                        </div>
                        <div class="flex-grow-1 ms-2">
                            <h5 class="fs-md">
                                <router-link to="/pages/profile" class="text-dark">Sophia
                                    Prendiville</router-link>
                            </h5>
                            <p class="text-muted mb-0">Angular Developer</p>
                        </div>
                    </div>
                    <div class="mt-4">
                        <p class="text-muted mb-2"><i class="bi bi-telephone align-baseline me-1"></i> 0354 3037376</p>
                        <p class="text-muted mb-2"><i class="bi bi-envelope align-baseline me-1"></i>
                            sophiaprendiville@steex.com</p>
                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-baseline me-1"></i> 36078-Maglio Di
                            Sopra VI</p>
                    </div>
                    <div class="d-flex gap-2 pt-4">
                        <router-link to="/pages/profile" class="btn btn-subtle-secondary w-50"><i class="bi bi-person align-baseline me-1"></i> Profile</router-link>
                        <b-button variant="primary" type="button" class="text-truncate w-50"><i class="bi bi-chat-left-text align-baseline me-1"></i> Contact Us</b-button>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col xxl="3" sm="6">
            <b-card no-body>
                <b-card-body>
                    <div class="dropdown float-end">
                        <b-link class="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i class="bx bx-dots-horizontal-rounded"></i></b-link>
                        <div class="dropdown-menu dropdown-menu-end">
                            <b-link class="dropdown-item" href="#">Edit</b-link>
                            <b-link class="dropdown-item" href="#">Action</b-link>
                            <b-link class="dropdown-item" href="#">Remove</b-link>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="flex-shrink-0 position-relative">
                            <div class="avatar-sm">
                                <div class="avatar-title fs-lg bg-info-subtle text-info rounded">
                                    SZ
                                </div>
                            </div>
                            <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"><span class="visually-hidden">unread messages</span></span>
                        </div>
                        <div class="flex-grow-1 ms-2">
                            <h5 class="fs-md">
                                <router-link to="/pages/profile" class="text-dark">Samantha
                                    Zepps</router-link>
                            </h5>
                            <p class="text-muted mb-0">Project Manager</p>
                        </div>
                    </div>
                    <div class="mt-4">
                        <p class="text-muted mb-2"><i class="bi bi-telephone align-baseline me-1"></i> 0365 4363346</p>
                        <p class="text-muted mb-2"><i class="bi bi-envelope align-baseline me-1"></i>
                            samanthazepps@steex.com</p>
                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-baseline me-1"></i> Via del Carmine,
                            108 36040-Sarego VI</p>
                    </div>
                    <div class="d-flex gap-2 pt-4">
                        <router-link to="/pages/profile" class="btn btn-subtle-secondary w-50"><i class="bi bi-person align-baseline me-1"></i> Profile</router-link>
                        <b-button variant="primary" type="button" class="text-truncate w-50"><i class="bi bi-chat-left-text align-baseline me-1"></i> Contact Us</b-button>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col xxl="3" sm="6">
            <b-card no-body>
                <b-card-body>
                    <div class="dropdown float-end">
                        <b-link class="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i class="bx bx-dots-horizontal-rounded"></i></b-link>
                        <div class="dropdown-menu dropdown-menu-end">
                            <b-link class="dropdown-item" href="#">Edit</b-link>
                            <b-link class="dropdown-item" href="#">Action</b-link>
                            <b-link class="dropdown-item" href="#">Remove</b-link>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="flex-shrink-0 position-relative">
                            <div class="avatar-sm">
                                <div class="avatar-title fs-lg bg-warning-subtle text-warning rounded">
                                    XB
                                </div>
                            </div>
                            <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"><span class="visually-hidden">unread messages</span></span>
                        </div>
                        <div class="flex-grow-1 ms-2">
                            <h5 class="fs-md">
                                <router-link to="/pages/profile" class="text-dark">Xavier
                                    Bower</router-link>
                            </h5>
                            <p class="text-muted mb-0">Graphic Designer</p>
                        </div>
                    </div>
                    <div class="mt-4">
                        <p class="text-muted mb-2"><i class="bi bi-telephone align-baseline me-1"></i> 0486 45 08 27</p>
                        <p class="text-muted mb-2"><i class="bi bi-envelope align-baseline me-1"></i>
                            xavierbower@steex.com</p>
                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-baseline me-1"></i> Rue Haute 47 8630
                            Steenkerke</p>
                    </div>
                    <div class="d-flex gap-2 pt-4">
                        <router-link to="/pages/profile" class="btn btn-subtle-secondary w-50"><i class="bi bi-person align-baseline me-1"></i> Profile</router-link>
                        <b-button variant="primary" type="button" class="text-truncate w-50"><i class="bi bi-chat-left-text align-baseline me-1"></i> Contact Us</b-button>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col xxl="3" sm="6">
            <b-card no-body>
                <b-card-body>
                    <div class="dropdown float-end">
                        <b-link class="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i class="bx bx-dots-horizontal-rounded"></i></b-link>
                        <div class="dropdown-menu dropdown-menu-end">
                            <b-link class="dropdown-item" href="#">Edit</b-link>
                            <b-link class="dropdown-item" href="#">Action</b-link>
                            <b-link class="dropdown-item" href="#">Remove</b-link>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="flex-shrink-0 position-relative">
                            <img :src="avatar8" alt="" class="avatar-sm rounded" />
                            <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-danger p-1"><span class="visually-hidden">unread messages</span></span>
                        </div>
                        <div class="flex-grow-1 ms-2">
                            <h5 class="fs-md">
                                <router-link to="/pages/profile" class="text-dark">Ryder
                                    Herron</router-link>
                            </h5>
                            <p class="text-muted mb-0">Flask Development</p>
                        </div>
                    </div>
                    <div class="mt-4">
                        <p class="text-muted mb-2"><i class="bi bi-telephone align-baseline me-1"></i> 0496 11 27 97</p>
                        <p class="text-muted mb-2"><i class="bi bi-envelope align-baseline me-1"></i>
                            ryderherron@steex.com</p>
                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-baseline me-1"></i> Rue du Commerce 366
                            3722 Wintershoven</p>
                    </div>
                    <div class="d-flex gap-2 pt-4">
                        <router-link to="/pages/profile" class="btn btn-subtle-secondary w-50"><i class="bi bi-person align-baseline me-1"></i> Profile</router-link>
                        <b-button variant="primary" type="button" class="text-truncate w-50"><i class="bi bi-chat-left-text align-baseline me-1"></i> Contact Us</b-button>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col xxl="3" sm="6">
            <b-card no-body>
                <b-card-body>
                    <div class="dropdown float-end">
                        <b-link class="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i class="bx bx-dots-horizontal-rounded"></i></b-link>
                        <div class="dropdown-menu dropdown-menu-end">
                            <b-link class="dropdown-item" href="#">Edit</b-link>
                            <b-link class="dropdown-item" href="#">Action</b-link>
                            <b-link class="dropdown-item" href="#">Remove</b-link>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="flex-shrink-0 position-relative">
                            <img :src="avatar9" alt="" class="avatar-sm rounded" />
                            <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-success p-1"><span class="visually-hidden">unread messages</span></span>
                        </div>
                        <div class="flex-grow-1 ms-2">
                            <h5 class="fs-md">
                                <router-link to="/pages/profile" class="text-dark">Jesse
                                    Edouard</router-link>
                            </h5>
                            <p class="text-muted mb-0">CEO & Founder</p>
                        </div>
                    </div>
                    <div class="mt-4">
                        <p class="text-muted mb-2"><i class="bi bi-telephone align-baseline me-1"></i> 044 017 3869</p>
                        <p class="text-muted mb-2"><i class="bi bi-envelope align-baseline me-1"></i>
                            jessedouard@steex.com</p>
                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-baseline me-1"></i> Laivurinkatu 29
                            49460 HAMINA</p>
                    </div>
                    <div class="d-flex gap-2 pt-4">
                        <router-link to="/pages/profile" class="btn btn-subtle-secondary w-50"><i class="bi bi-person align-baseline me-1"></i> Profile</router-link>
                        <b-button variant="primary" type="button" class="text-truncate w-50"><i class="bi bi-chat-left-text align-baseline me-1"></i> Contact Us</b-button>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col xxl="3" sm="6">
            <b-card no-body>
                <b-card-body>
                    <div class="dropdown float-end">
                        <b-link class="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i class="bx bx-dots-horizontal-rounded"></i></b-link>
                        <div class="dropdown-menu dropdown-menu-end">
                            <b-link class="dropdown-item" href="#">Edit</b-link>
                            <b-link class="dropdown-item" href="#">Action</b-link>
                            <b-link class="dropdown-item" href="#">Remove</b-link>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="flex-shrink-0 position-relative">
                            <img :src="avatar10" alt="" class="avatar-sm rounded" />
                            <span class="position-absolute top-0 start-100 translate-middle badge border border-2 border-white rounded-circle bg-danger p-1"><span class="visually-hidden">unread messages</span></span>
                        </div>
                        <div class="flex-grow-1 ms-2">
                            <h5 class="fs-md">
                                <router-link to="/pages/profile" class="text-dark">Isabel Hardwicke</router-link>
                            </h5>
                            <p class="text-muted mb-0">Web Designer</p>
                        </div>
                    </div>
                    <div class="mt-4">
                        <p class="text-muted mb-2"><i class="bi bi-telephone align-baseline me-1"></i> 046 535 5916</p>
                        <p class="text-muted mb-2"><i class="bi bi-envelope align-baseline me-1"></i>
                            isabelhardwicke@steex.com</p>
                        <p class="text-muted mb-0"><i class="bi bi-geo-alt align-baseline me-1"></i> Kankaanpääntie 64
                            94450 KEMINMAA</p>
                    </div>
                    <div class="d-flex gap-2 pt-4">
                        <router-link to="/pages/profile" class="btn btn-subtle-secondary w-50"><i class="bi bi-person align-baseline me-1"></i> Profile</router-link>
                        <b-button variant="primary" type="button" class="text-truncate w-50"><i class="bi bi-chat-left-text align-baseline me-1"></i> Contact Us</b-button>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>

    <b-row class="align-items-center justify-content-between text-center text-sm-start mb-3">
        <b-col cols="sm">
            <div class="text-muted">
                Showing <span class="fw-semibold">12</span> of <span class="fw-semibold">20</span> Results
            </div>
        </b-col>
        <b-col sm="auto" class="mt-3 mt-sm-0">
            <div class="pagination-wrap hstack gap-2">
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
                </ul>
                <b-link class="page-item pagination-next" href="#">
                    Next
                </b-link>
            </div>
        </b-col>
    </b-row>
</Layout>
</template>
