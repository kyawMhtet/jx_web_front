import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    // authentication routes
    {
        path: '/login',
        name: 'login',
        meta: { title: 'Login' },
        component: () => import('../views/account/login.vue')
    },
    {
        path: '/auth/register',
        name: 'register',
        meta: { title: 'Register' },
        component: () => import('../views/account/register.vue')
    },
    {
        path: '/forget-password',
        meta: { title: 'Forget Password' },
        component: () => import('../views/account/forgot-password.vue')
    },
    {
        path: '/reset-password/:token',
        meta: { title: 'Reset Password' },
        component: () => import('../views/account/reset-password.vue')
    },

    {
        path: '/',
        name: "default",
        meta: { title: 'Dashboard', authRequire: true },
        component: () => import('../views/dashboards/ecommerce/index.vue'),
    },
    {
        path: '/dashboard/analytics',
        name: "Analytics",
        meta: { title: 'Analytics', authRequire: true },
        component: () => import('../views/dashboards/analytics/index.vue'),
    },
    {
        path: '/dashboard/crm',
        name: "CRM",
        meta: { title: 'CRM', authRequire: true },
        component: () => import('../views/dashboards/crm/index.vue'),
    },
    {
        path: '/dashboard/learning',
        name: "Learning",
        meta: { title: 'Learning', authRequire: true },
        component: () => import('../views/dashboards/learning/index.vue'),
    },
    {
        path: '/dashboard/real-estate',
        name: "Real Estate",
        meta: { title: 'Real Estate', authRequire: true },
        component: () => import('../views/dashboards/realEstate/index.vue'),
    },

    // Apps
    // Calendar
    {
        path: "/calendar",
        name: "calendar",
        meta: { title: "Calendar", authRequired: true },
        component: () => import("../views/calendar/index.vue"),
    },

    // Chat
    {
        path: "/chat",
        name: "chat",
        meta: { title: "Chat", authRequired: true },
        component: () => import("../views/chat/index.vue"),
    },

    // Email
    {
        path: "/email",
        name: "email",
        meta: { title: "Email", authRequired: true },
        component: () => import("../views/email/index.vue"),
    },

    // Ecommerce
    
    {
        path: "/ecommerce/products",
        name: "products",
        meta: { title: "Products", authRequired: true },
        component: () => import("../views/ecommerce/products.vue"),
    },
    {
        path: "/ecommerce/products-grid",
        name: "products-grid",
        meta: { title: "Products Grid", authRequired: true },
        component: () => import("../views/ecommerce/products-grid.vue"),
    },
    {
        path: "/ecommerce/product-details",
        name: "product-details",
        meta: { title: "Product Overview", authRequired: true },
        component: () => import("../views/ecommerce/product-details.vue"),
    },
    {
        path: "/ecommerce/add-product",
        name: "add-product",
        meta: { title: "Add Product", authRequired: true },
        component: () => import("../views/ecommerce/add-product.vue"),
    },
    {
        path: "/ecommerce/orders",
        name: "orders",
        meta: { title: "Orders", authRequired: true },
        component: () => import("../views/ecommerce/orders.vue"),
    },
    {
        path: "/ecommerce/order-overview",
        name: "order-overview",
        meta: { title: "Order Overview", authRequired: true },
        component: () => import("../views/ecommerce/order-overview.vue"),
    },
    {
        path: "/ecommerce/customers",
        name: "customers",
        meta: { title: "Customers", authRequired: true },
        component: () => import("../views/ecommerce/customers.vue"),
    },
    {
        path: "/ecommerce/cart",
        name: "cart",
        meta: { title: "Shop Cart", authRequired: true },
        component: () => import("../views/ecommerce/cart.vue"),
    },
    {
        path: "/ecommerce/checkout",
        name: "checkout",
        meta: { title: "Checkout", authRequired: true },
        component: () => import("../views/ecommerce/checkout.vue"),
    },
    {
        path: "/ecommerce/sellers",
        name: "sellers",
        meta: { title: "Sellers", authRequired: true },
        component: () => import("../views/ecommerce/sellers.vue"),
    },
    {
        path: "/ecommerce/seller-overview",
        name: "seller-overview",
        meta: { title: "Seller Overview", authRequired: true },
        component: () => import("../views/ecommerce/seller-overview.vue"),
    },

    // File Manager
    {
        path: "/file-manager",
        name: "file-manager",
        meta: { title: "File Manager", authRequired: true },
        component: () => import("../views/file-manager/index.vue"),
    },

    // Learning

    // Courses 
    {
        path: "/learning/list",
        name: "courses-list-view",
        meta: { title: "List View", authRequired: true },
        component: () => import("../views/learning/courses/list.vue"),
    },
    {
        path: "/learning/grid",
        name: "courses-grid-view",
        meta: { title: "Grid View", authRequired: true },
        component: () => import("../views/learning/courses/grid.vue"),
    },
    {
        path: "/learning/category",
        name: "category",
        meta: { title: "Category", authRequired: true },
        component: () => import("../views/learning/courses/category.vue"),
    },
    {
        path: "/learning/overview",
        name: "courses-overview",
        meta: { title: "Overview", authRequired: true },
        component: () => import("../views/learning/courses/overview.vue"),
    },
    {
        path: "/learning/create",
        name: "create",
        meta: { title: "Create Course", authRequired: true },
        component: () => import("../views/learning/courses/create.vue"),
    },

    // Students
    {
        path: "/student/subscriptions",
        name: "my subscriptions",
        meta: { title: "My Subscriptions", authRequired: true },
        component: () => import("../views/learning/students/subscriptions.vue"),
    },
    {
        path: "/student/courses",
        name: "my courses",
        meta: { title: "My Courses", authRequired: true },
        component: () => import("../views/learning/students/courses.vue"),
    },

    // Instructors
    {
        path: "/instructors/list",
        name: "list View",
        meta: { title: "List View", authRequired: true },
        component: () => import("../views/learning/instructors/list.vue"),
    },
    {
        path: "/instructors/grid",
        name: "grid view",
        meta: { title: "Grid View", authRequired: true },
        component: () => import("../views/learning/instructors/grid.vue"),
    },
    {
        path: "/instructors/overview",
        name: "instructors-overview",
        meta: { title: "Overview", authRequired: true },
        component: () => import("../views/learning/instructors/overview.vue"),
    },
    {
        path: "/instructors/create",
        name: "create instructor",
        meta: { title: "Create Instructor", authRequired: true },
        component: () => import("../views/learning/instructors/create.vue"),
    },

    // Invoices
    {
        path: "/invoices/list",
        name: "invoice list",
        meta: { title: "Invoice List", authRequired: true },
        component: () => import("../views/invoices/list.vue"),
    },
    {
        path: "/invoices/overview",
        name: "invoice overview",
        meta: { title: "Invoice Overview", authRequired: true },
        component: () => import("../views/invoices/overview.vue"),
    },
    {
        path: "/invoices/create",
        name: "create invoice",
        meta: { title: "Create Invoice", authRequired: true },
        component: () => import("../views/invoices/create.vue"),
    },

    // Support Tickets
    {
        path: "/tickets/list",
        name: "tickets",
        meta: { title: "Tickets", authRequired: true },
        component: () => import("../views/tickets/list.vue"),
    },
    {
        path: "/tickets/overview",
        name: "tickets overview",
        meta: { title: "Tickets Overview", authRequired: true },
        component: () => import("../views/tickets/overview.vue"),
    },

    // Real Estate
    {
        path: "/real-estate/grid",
        name: "listing grid",
        meta: { title: "Listing Grid", authRequired: true },
        component: () => import("../views/real-estate/listing-grid.vue"),
    },
    {
        path: "/real-estate/list",
        name: "listing list",
        meta: { title: "Listing List", authRequired: true },
        component: () => import("../views/real-estate/listing-list.vue"),
    },
    {
        path: "/real-estate/map",
        name: "listing map",
        meta: { title: "Listing Map", authRequired: true },
        component: () => import("../views/real-estate/listing-map.vue"),
    },
    {
        path: "/real-estate/property-overview",
        name: "property-overview",
        meta: { title: "Property Overview", authRequired: true },
        component: () => import("../views/real-estate/property-overview.vue"),
    },

    // Agent
    {
        path: "/real-estate-agent/list",
        name: "agent-list",
        meta: { title: "Agent List", authRequired: true },
        component: () => import("../views/real-estate/agent/list.vue"),
    },
    {
        path: "/real-estate-agent/grid",
        name: "agent-grid",
        meta: { title: "Agent Grid", authRequired: true },
        component: () => import("../views/real-estate/agent/grid.vue"),
    },
    {
        path: "/real-estate-agent/overview",
        name: "real-estate-overview",
        meta: { title: "Overview", authRequired: true },
        component: () => import("../views/real-estate/agent/overview.vue"),
    },

    // Agencies

    {
        path: "/real-estate-agencies/list",
        name: "list view",
        meta: { title: "List View", authRequired: true },
        component: () => import("../views/real-estate/agencies/list.vue"),
    },
    {
        path: "/real-estate-agencies/overview",
        name: "overview",
        meta: { title: "Overview", authRequired: true },
        component: () => import("../views/real-estate/agencies/overview.vue"),
    },

    {
        path: "/real-estate/add-properties",
        name: "add-property",
        meta: { title: "Add Properties", authRequired: true },
        component: () => import("../views/real-estate/add-properties.vue"),
    },
    {
        path: "/real-estate/earnings",
        name: "earnings",
        meta: { title: "Earnings", authRequired: true },
        component: () => import("../views/real-estate/earnings.vue"),
    },

    // Pages
    // Authentication
    {
        path: "/auth/signin",
        name: "signin",
        meta: { title: "Sign In", authRequired: true },
        component: () => import("../views/authentication/signIn.vue"),
    },
    {
        path: "/auth/signup",
        name: "signup",
        meta: { title: "Sign Up", authRequired: true },
        component: () => import("../views/authentication/signup.vue"),
    },
    {
        path: "/auth/pass-reset",
        name: "pass-reset",
        meta: { title: "Password Reset", authRequired: true },
        component: () => import("../views/authentication/passwordReset.vue"),
    },
    {
        path: "/auth/pass-change",
        name: "pass-change",
        meta: { title: "Password Change", authRequired: true },
        component: () => import("../views/authentication/passwordCreate.vue"),
    },
    {
        path: "/auth/lockscreen",
        name: "lockscreen",
        meta: { title: "Lockscreen", authRequired: true },
        component: () => import("../views/authentication/lockScreen.vue"),
    },
    {
        path: "/auth/logout",
        name: "logout",
        meta: { title: "Logout", authRequired: true },
        component: () => import("../views/authentication/logout.vue"),
    },
    {
        path: "/auth/success-msg",
        name: "success-msg",
        meta: { title: "Success Message", authRequired: true },
        component: () => import("../views/authentication/successMessage.vue"),
    },
    {
        path: "/auth/twostep",
        name: "twostep",
        meta: { title: "Two Step Verification", authRequired: true },
        component: () => import("../views/authentication/twoStepVerification.vue"),
    },
    {
        path: "/auth/404",
        name: "404",
        meta: { title: "404 Error", authRequired: true },
        component: () => import("../views/authentication/Errors/404Error.vue"),
    },
    {
        path: "/auth/500",
        name: "500",
        meta: { title: "500 Error", authRequired: true },
        component: () => import("../views/authentication/Errors/500.vue"),
    },
    {
        path: "/auth/503",
        name: "503",
        meta: { title: "503 Error", authRequired: true },
        component: () => import("../views/authentication/Errors/503.vue"),
    },
    {
        path: "/auth/offline",
        name: "offline",
        meta: { title: "Offline Page", authRequired: true },
        component: () => import("../views/authentication/Errors/offlinePage.vue"),
    },

    // Pages
    {
        path: "/pages/starter",
        name: "starter",
        meta: { title: "Starter", authRequired: true },
        component: () => import("../views/pages/starter.vue"),
    },
    {
        path: "/pages/profile",
        name: "pages-profile",
        meta: { title: "Profile", authRequired: true },
        component: () => import("../views/pages/profile.vue"),
    },
    {
        path: "/pages/profile-settings",
        name: "profile-settings",
        meta: { title: "Profile Settings", authRequired: true },
        component: () => import("../views/pages/profile-setting.vue"),
    },
    {
        path: "/pages/contacts",
        name: "contacts",
        meta: { title: "Contacts", authRequired: true },
        component: () => import("../views/pages/contacts.vue"),
    },
    {
        path: "/pages/timeline",
        name: "timeline",
        meta: { title: "Timeline", authRequired: true },
        component: () => import("../views/pages/timeline.vue"),
    },
    {
        path: "/pages/faqs",
        name: "faqs",
        meta: { title: "FAQs", authRequired: true },
        component: () => import("../views/pages/faqs.vue"),
    },
    {
        path: "/pages/pricing",
        name: "pricing",
        meta: { title: "Pricing", authRequired: true },
        component: () => import("../views/pages/pricing.vue"),
    },
    {
        path: "/pages/maintenance",
        name: "maintenance",
        meta: { title: "Maintenance", authRequired: true },
        component: () => import("../views/pages/maintenance.vue"),
    },
    {
        path: "/pages/coming-soon",
        name: "coming-soon",
        meta: { title: "Coming Soon", authRequired: true },
        component: () => import("../views/pages/coming-soon.vue"),
    },
    {
        path: "/pages/privacy-policy",
        name: "privacy-policy",
        meta: { title: "Privacy Policy", authRequired: true },
        component: () => import("../views/pages/privacy-policy.vue"),
    },
    {
        path: "/pages/term-conditions",
        name: "term-conditions",
        meta: { title: "Term Conditions", authRequired: true },
        component: () => import("../views/pages/term-conditions.vue"),
    },
    // Components

    // Bootstrap UI
    {
        path: "/ui/alerts",
        name: "alerts",
        meta: { title: "Alerts", authRequired: true },
        component: () => import("../views/bootstrap-ui/alerts.vue"),
    },
    {
        path: "/ui/badges",
        name: "badges",
        meta: { title: "Badges", authRequired: true },
        component: () => import("../views/bootstrap-ui/badges.vue"),
    },
    {
        path: "/ui/buttons",
        name: "buttons",
        meta: { title: "Buttons", authRequired: true },
        component: () => import("../views/bootstrap-ui/buttons.vue"),
    },
    {
        path: "/ui/colors",
        name: "colors",
        meta: { title: "Colors", authRequired: true },
        component: () => import("../views/bootstrap-ui/colors.vue"),
    },
    {
        path: "/ui/cards",
        name: "cards",
        meta: { title: "Cards", authRequired: true },
        component: () => import("../views/bootstrap-ui/cards.vue"),
    },
    {
        path: "/ui/carousel",
        name: "carousel",
        meta: { title: "Carousel", authRequired: true },
        component: () => import("../views/bootstrap-ui/carousel.vue"),
    },
    {
        path: "/ui/dropdowns",
        name: "dropdowns",
        meta: { title: "Dropdowns", authRequired: true },
        component: () => import("../views/bootstrap-ui/dropdowns.vue"),
    },
    {
        path: "/ui/grid",
        name: "grid",
        meta: { title: "Grid", authRequired: true },
        component: () => import("../views/bootstrap-ui/grid.vue"),
    },
    {
        path: "/ui/images",
        name: "images",
        meta: { title: "Images", authRequired: true },
        component: () => import("../views/bootstrap-ui/images.vue"),
    },
    {
        path: "/ui/tabs",
        name: "tabs",
        meta: { title: "Tabs", authRequired: true },
        component: () => import("../views/bootstrap-ui/tabs.vue"),
    },
    {
        path: "/ui/accordions",
        name: "accordions",
        meta: { title: "Accordions", authRequired: true },
        component: () => import("../views/bootstrap-ui/accordions.vue"),
    },
    {
        path: "/ui/modals",
        name: "modals",
        meta: { title: "Modals", authRequired: true },
        component: () => import("../views/bootstrap-ui/modals.vue"),
    },
    {
        path: "/ui/offcanvas",
        name: "offcanvas",
        meta: { title: "Offcanvas", authRequired: true },
        component: () => import("../views/bootstrap-ui/offcanvas.vue"),
    },
    {
        path: "/ui/placeholders",
        name: "placeholders",
        meta: { title: "Placeholders", authRequired: true },
        component: () => import("../views/bootstrap-ui/placeholders.vue"),
    },
    {
        path: "/ui/progress",
        name: "progress",
        meta: { title: "Progress", authRequired: true },
        component: () => import("../views/bootstrap-ui/progress.vue"),
    },
    {
        path: "/ui/notifications",
        name: "notifications",
        meta: { title: "Notifications", authRequired: true },
        component: () => import("../views/bootstrap-ui/notifications.vue"),
    },
    {
        path: "/ui/media",
        name: "media",
        meta: { title: "Media", authRequired: true },
        component: () => import("../views/bootstrap-ui/media.vue"),
    },
    {
        path: "/ui/embed-video",
        name: "embed-video",
        meta: { title: "Embed Video", authRequired: true },
        component: () => import("../views/bootstrap-ui/embed-video.vue"),
    },
    {
        path: "/ui/typography",
        name: "typography",
        meta: { title: "Typography", authRequired: true },
        component: () => import("../views/bootstrap-ui/typography.vue"),
    },
    {
        path: "/ui/lists",
        name: "lists",
        meta: { title: "Lists", authRequired: true },
        component: () => import("../views/bootstrap-ui/lists.vue"),
    },
    {
        path: "/ui/links",
        name: "links",
        meta: { title: "Links", authRequired: true },
        component: () => import("../views/bootstrap-ui/links.vue"),
    },
    {
        path: "/ui/general",
        name: "general",
        meta: { title: "General", authRequired: true },
        component: () => import("../views/bootstrap-ui/general.vue"),
    },
    {
        path: "/ui/utilities",
        name: "utilities",
        meta: { title: "Utilities", authRequired: true },
        component: () => import("../views/bootstrap-ui/utilities.vue"),
    },

    // Advance UI
    {
        path: "/advance-ui/sweetalerts",
        name: "sweetalerts",
        meta: { title: "Sweet Alerts", authRequired: true },
        component: () => import("../views/advance-ui/sweetalerts.vue"),
    },
    {
        path: "/advance-ui/scrollbar",
        name: "scrollbar",
        meta: { title: "Scrollbar", authRequired: true },
        component: () => import("../views/advance-ui/scrollbar.vue"),
    },
    {
        path: "/advance-ui/swiper",
        name: "swiper",
        meta: { title: "Swiper Slider", authRequired: true },
        component: () => import("../views/advance-ui/swiper.vue"),
    },
    {
        path: "/advance-ui/ratings",
        name: "ratings",
        meta: { title: "Ratings", authRequired: true },
        component: () => import("../views/advance-ui/ratings.vue"),
    },
    {
        path: "/advance-ui/highlight",
        name: "highlight",
        meta: { title: "Highlight", authRequired: true },
        component: () => import("../views/advance-ui/highlight.vue"),
    },

    // Custom UI
    {
        path: "/ui/ribbons",
        name: "ribbons",
        meta: { title: "Ribbons", authRequired: true },
        component: () => import("../views/custom-ui/ribbons.vue"),
    },
    {
        path: "/ui/profile",
        name: "profile",
        meta: { title: "Profile", authRequired: true },
        component: () => import("../views/custom-ui/profile.vue"),
    },
    {
        path: "/ui/counter",
        name: "counter",
        meta: { title: "Counter", authRequired: true },
        component: () => import("../views/custom-ui/counter.vue"),
    },

    // Widgets
    {
        path: "/widgets",
        name: "Widgets",
        meta: { title: "widgets", authRequired: true },
        component: () => import("../views/widgets/index.vue"),
    },

    // Forms
    {
        path: "/forms/elements",
        name: "basic elements",
        meta: { title: "Basic Elements", authRequired: true },
        component: () => import("../views/forms/elements.vue"),
    },
    {
        path: "/forms/select",
        name: "form select",
        meta: { title: "Form Select", authRequired: true },
        component: () => import("../views/forms/select.vue"),
    },
    {
        path: "/forms/checkboxs-radios",
        name: "checkboxs-radios",
        meta: { title: "Checkboxs & Radios", authRequired: true },
        component: () => import("../views/forms/checkboxs-radios.vue"),
    },
    {
        path: "/forms/pickers",
        name: "pickers",
        meta: { title: "Pickers", authRequired: true },
        component: () => import("../views/forms/pickers.vue"),
    },
    {
        path: "/forms/masks",
        name: "input masks",
        meta: { title: "Input Masks", authRequired: true },
        component: () => import("../views/forms/masks.vue"),
    },
    {
        path: "/forms/advanced",
        name: "forms advanced",
        meta: { title: "Forms Advanced", authRequired: true },
        component: () => import("../views/forms/advanced.vue"),
    },
    {
        path: "/forms/range-sliders",
        name: "Range Sliders",
        meta: { title: "range-sliders", authRequired: true },
        component: () => import("../views/forms/range-sliders.vue"),
    },
    {
        path: "/forms/validation",
        name: "forms validation",
        meta: { title: "validation", authRequired: true },
        component: () => import("../views/forms/validation.vue"),
    },
    {
        path: "/forms/wizard",
        name: "wizard",
        meta: { title: "Wizard", authRequired: true },
        component: () => import("../views/forms/wizard.vue"),
    },
    {
        path: "/forms/editors",
        name: "editors",
        meta: { title: "Editors", authRequired: true },
        component: () => import("../views/forms/editors.vue"),
    },
    {
        path: "/forms/file-uploads",
        name: "file-uploads",
        meta: { title: "File Uploads", authRequired: true },
        component: () => import("../views/forms/file-uploads.vue"),
    },
    {
        path: "/forms/layouts",
        name: "layouts",
        meta: { title: "File Layouts", authRequired: true },
        component: () => import("../views/forms/layouts.vue"),
    },

    // Tables
    {
        path: "/tables/basic",
        name: "basic Tables",
        meta: { title: "Basic Tables", authRequired: true },
        component: () => import("../views/tables/basic.vue"),
    },

    // Apex Charts
    {
        path: "/charts/apex-line",
        name: "line charts",
        meta: { title: "Apex Line Charts", authRequired: true },
        component: () => import("../views/charts/line/index.vue"),
    },
    {
        path: "/charts/apex-area",
        name: "area charts",
        meta: { title: "Apex Area Charts", authRequired: true },
        component: () => import("../views/charts/area/index.vue"),
    },
    {
        path: "/charts/apex-column",
        name: "column charts",
        meta: { title: "Apex Column Charts", authRequired: true },
        component: () => import("../views/charts/column/index.vue"),
    },
    {
        path: "/charts/apex-bar",
        name: "bar charts",
        meta: { title: "Apex Bar Charts", authRequired: true },
        component: () => import("../views/charts/bar/index.vue"),
    },
    {
        path: "/charts/apex-mixed",
        name: "mixed charts",
        meta: { title: "Apex Mixed Charts", authRequired: true },
        component: () => import("../views/charts/mixed/index.vue"),
    },
    {
        path: "/charts/apex-timeline",
        name: "timeline charts",
        meta: { title: "Apex Timeline Charts", authRequired: true },
        component: () => import("../views/charts/timeline/index.vue"),
    },
    {
        path: "/charts/apex-candlestick",
        name: "candlestick charts",
        meta: { title: "Apex Candlestick Charts", authRequired: true },
        component: () => import("../views/charts/candlestick/index.vue"),
    },
    {
        path: "/charts/apex-boxplot",
        name: "boxplot charts",
        meta: { title: "Apex Boxplot Charts", authRequired: true },
        component: () => import("../views/charts/boxplot/index.vue"),
    },
    {
        path: "/charts/apex-bubble",
        name: "bubble charts",
        meta: { title: "Apex Bubble Charts", authRequired: true },
        component: () => import("../views/charts/bubble/index.vue"),
    },
    {
        path: "/charts/apex-scatter",
        name: "scatter charts",
        meta: { title: "Apex Scatter Charts", authRequired: true },
        component: () => import("../views/charts/scatter/index.vue"),
    },
    {
        path: "/charts/apex-heatmap",
        name: "heatmap charts",
        meta: { title: "Apex Heatmap Charts", authRequired: true },
        component: () => import("../views/charts/heatmap/index.vue"),
    },
    {
        path: "/charts/apex-treemap",
        name: "treemap charts",
        meta: { title: "Apex Treemap Charts", authRequired: true },
        component: () => import("../views/charts/treemap/index.vue"),
    },
    {
        path: "/charts/apex-pie",
        name: "pie charts",
        meta: { title: "Apex Pie Charts", authRequired: true },
        component: () => import("../views/charts/pie/index.vue"),
    },
    {
        path: "/charts/apex-radialbar",
        name: "radialbar charts",
        meta: { title: "Apex Radialbar Charts", authRequired: true },
        component: () => import("../views/charts/radialbar/index.vue"),
    },
    {
        path: "/charts/apex-radar",
        name: "radar charts",
        meta: { title: "Apex Radar Charts", authRequired: true },
        component: () => import("../views/charts/radar/index.vue"),
    },
    {
        path: "/charts/apex-polar",
        name: "polar charts",
        meta: { title: "Apex Polararea Charts", authRequired: true },
        component: () => import("../views/charts/polararea/index.vue"),
    },

    // Icons
    {
        path: "/icons/remix",
        name: "remix",
        meta: { title: "Remix Icons", authRequired: true },
        component: () => import("../views/icons/remixIcons.vue"),
    },
    {
        path: "/icons/boxicons",
        name: "boxicons",
        meta: { title: "Boxicons", authRequired: true },
        component: () => import("../views/icons/boxicons.vue"),
    },
    {
        path: "/icons/materialdesign",
        name: "materialdesign",
        meta: { title: "Material Design Icons", authRequired: true },
        component: () => import("../views/icons/materialDesignIcons.vue"),
    },
    {
        path: "/icons/bootstrap",
        name: "bootstrap",
        meta: { title: "Bootstrap Icons", authRequired: true },
        component: () => import("../views/icons/bootstrapIcons.vue"),
    },
    {
        path: "/icons/phosphor",
        name: "phosphor",
        meta: { title: "Phosphor Icons", authRequired: true },
        component: () => import("../views/icons/phosphorIcons.vue"),
    },

    // Maps
    {
        path: "/maps/google",
        name: "google",
        meta: { title: "Google Maps", authRequired: true },
        component: () => import("../views/maps/google/index.vue"),
    },
    {
        path: "/maps/amcharts",
        name: "amcharts",
        meta: { title: "Amchart Maps", authRequired: true },
        component: () => import("../views/maps/amcharts/index.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// Before each route evaluates...
router.beforeEach(async (routeTo, routeFrom, next) => {
    // set title name
    if (routeTo.meta.title != undefined) {
        document.title = routeTo.meta.title + " | Steex Laravel 10 + Vue 3 Admin & Dashboard";
    }

    const authRequired = routeTo.matched.some((route) => route.meta.authRequire);
    if (!authRequired) return next();

    if (sessionStorage.getItem('user')) {
        next();
    } else {
        next({ name: 'login', query: { redirectFrom: routeTo.fullPath } });
    }

});

export default router;