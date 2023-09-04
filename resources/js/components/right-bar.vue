<script>


sessionStorage.setItem("rightbar_isopen", false);

import lightMode from '../../images/custom-theme/light-mode.png';
import darkMode from '../../images/custom-theme/dark-mode.png';
import brandMode from '../../images/custom-theme/brand-mode.png';
import material from '../../images/custom-theme/material.png';
import creative from '../../images/custom-theme/creative.png';
import minimal from '../../images/custom-theme/minimal.png';
import modern from '../../images/custom-theme/modern.png';
import interaction from '../../images/custom-theme/interaction.png';

import img1 from '../../images/sidebar/img-1.jpg';
import img2 from '../../images/sidebar/img-2.jpg';
import img3 from '../../images/sidebar/img-3.jpg';
import img4 from '../../images/sidebar/img-4.jpg';

/**
 * Right sidebar component
 */
export default {
    components: {
    },
    data() {
        return {
            lightMode,
            darkMode,
            brandMode,
            material,
            creative,
            minimal,
            modern,
            interaction,
            img1,
            img2,
            img3,
            img4,
            config: {
                handler: this.handleRightBarClick,
                middleware: this.middleware,
                events: ["click"],
            },
            layoutType: this.$parent.layout.type,
            layThemes: this.$parent.layout.layoutTheme,
            layWidth: this.$parent.layout.layoutWidth,
            position: this.$parent.layout.position,
            topbar: this.$parent.layout.topbar,
            sideView: this.$parent.layout.sidebarView,
            mode: this.$parent.layout.mode,
            sideImage: this.$parent.layout.sidebarImage,
            sideColor: this.$parent.layout.sidebarColor,
            sideSize: this.$parent.layout.sidebarSize,
            loader: this.$parent.layout.preloader,
            preloaderEnable: false,
        };
    },
    methods: {
        onRoutechange() {
            var layout = sessionStorage.getItem("layout");
            if (layout) {
                layout = JSON.parse(layout);
                if (layout.preloader == 'enable') {
                    this.preloaderEnable = true;
                }
            }
        },
        // reset all settings
        resetCustomizer() {
            if (this.preloaderEnable == false) {
                this.preloaderEnable = true;
            }
            sessionStorage.removeItem('layout');
            location.reload();
            setTimeout(() => {
                if (this.preloaderEnable == true) {
                    this.preloaderEnable = false;
                }
            }, 1500)
        },

        // change layout
        changeLayout(layout) {
            if (this.preloaderEnable == false) {
                this.preloaderEnable = true;
            }
            sessionStorage.removeItem('layout');
            this.$parent.layoutTypes(layout);
            this.$parent.changeLayout({ type: layout });
            location.reload();

            setTimeout(() => {
                if (this.preloaderEnable == true) {
                    this.preloaderEnable = false;
                }
            }, 2500)
        },

        // change theme
        changeTheme(theme) {
            this.$parent.layoutThemes(theme);
            if (theme == "minimal") {
                this.sidebarColor = "light";
                return this.$parent.changeLayout({ layoutTheme: theme, sidebarColor: "light" });
            }
            this.sidebarColor = "dark";
            return this.$parent.changeLayout({ layoutTheme: theme, sidebarColor: "dark" });
        },

        // light-dark mode
        changeMode(mode) {
            this.$parent.changeMode(mode);
            if (mode == "dark") {
                this.topbar = 'dark';
                return this.$parent.changeLayout({ mode: mode, topbar: "dark" });
            }
            this.topbar = 'light';
            return this.$parent.changeLayout({ mode: mode, topbar: "light" });
        },

        // change sidebar color
        changeColor(color) {
            this.$parent.sidebarColor(color);
            return this.$parent.changeLayout({ sidebarColor: color });
        },

        // change layout width
        changeLayoutWidth(width) {
            if (width == "boxed") {
                this.sideSize = 'sm-hover';
                this.$parent.sidebarSize('sm-hover');
                this.$parent.layoutWidth(width);
                return this.$parent.changeLayout({ layoutWidth: width, sidebarSize:'sm-hover' });
            } else {
                this.sideSize = 'lg';
                this.$parent.sidebarSize('lg');
                this.$parent.layoutWidth(width);
                return this.$parent.changeLayout({ layoutWidth: width, sidebarSize:'lg' });
            }
        },

        // change position
        changePosition(position) {
            this.$parent.layoutPosition(position);
            return this.$parent.changeLayout({ position: position });
        },

        // change topbar color
        changeTopbar(color) {
            this.$parent.topbarColor(color);
            return this.$parent.changeLayout({ topbar: color });
        },

        // change sidebar size
        changeSizebarSize(size) {
            this.$parent.sidebarSize(size);
            return this.$parent.changeLayout({ sidebarSize: size });
        },

        // change sidebar view
        changeSizebarView(view) {
            this.$parent.sidebarView(view);
            return this.$parent.changeLayout({ sidebarView: view });
        },

        // change sidebar img
        changeSizebarImg(img) {
            this.$parent.sidebarImage(img);
            return this.$parent.changeLayout({ sidebarImage: img });
        },

        // enable diable preloader
        preloaderChange(val) {
            this.$parent.preloader(val);
            return this.$parent.changeLayout({ preloader: val });
        },


        topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },

        resizeWindow() {
            var windowSize = document.documentElement.clientWidth;
            if (windowSize >= 1025) {
                if (document.documentElement.getAttribute("data-layout") === "vertical") {
                    document.documentElement.setAttribute("data-sidebar-size", this.$parent.layout.sidebarSize);
                }
                if (document.documentElement.getAttribute("data-layout") === "semibox") {
                    document.documentElement.setAttribute("data-sidebar-size", this.$parent.layout.sidebarSize);
                }
            } else if (windowSize < 1025 && windowSize > 767) {
                document.body.classList.remove("twocolumn-panel");
                if (document.documentElement.getAttribute("data-layout") === "vertical") {
                    document.documentElement.setAttribute("data-sidebar-size", "sm");
                }
                if (document.documentElement.getAttribute("data-layout") === "semibox") {
                    document.documentElement.setAttribute("data-sidebar-size", "sm");
                }
                if (document.querySelector(".hamburger-icon")) {
                    document.querySelector(".hamburger-icon").classList.add("open");
                }
            } else if (windowSize <= 767) {
                document.body.classList.remove("vertical-sidebar-enable");
                document.body.classList.add("twocolumn-panel");
                if (document.documentElement.getAttribute("data-layout") !== "horizontal") {
                    document.documentElement.setAttribute("data-sidebar-size", "lg");
                }
                if (document.querySelector(".hamburger-icon")) {
                    document.querySelector(".hamburger-icon").classList.add("open");
                }
            }
        }
    },
    mounted() {

        setTimeout(() => {
            this.preloaderEnable = false;
        }, 400);

        let backtoTop = document.getElementById("back-to-top");

        if (backtoTop) {
            backtoTop = document.getElementById("back-to-top");
            window.onscroll = function () {
                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                    backtoTop.style.display = "block";
                } else {
                    backtoTop.style.display = "none";
                }
            };
        }

        let rightbar_isopen = sessionStorage.getItem('rightbar_isopen');
        if (rightbar_isopen == 'true') {
            document.getElementById('mdi-cog').click();
            sessionStorage.setItem("rightbar_isopen", false);
        }

        if (document.getElementById('collapseBgGradient')) {
            Array.from(document.querySelectorAll("#collapseBgGradient .form-check input")).forEach(function () {
                if (document.querySelector("[data-bs-target='#collapseBgGradient']")) {
                    document.querySelector("[data-bs-target='#collapseBgGradient']").addEventListener('click', function () {
                        document.getElementById("sidebar-color-gradient").click();
                    });
                }
            });
        }

        Array.from(document.querySelectorAll("[name='data-sidebar']")).forEach(function (elem) {
            if (document.querySelector("[data-bs-target='#collapseBgGradient']")) {
                if (document.querySelector("#collapseBgGradient .form-check input:checked")) {
                    document.querySelector("[data-bs-target='#collapseBgGradient']").classList.add("active");
                } else {
                    document.querySelector("[data-bs-target='#collapseBgGradient']").classList.remove("active");
                    document.getElementById('collapseBgGradient').classList.remove('show');
                }

                elem.addEventListener("change", function () {
                    if (document.querySelector("#collapseBgGradient .form-check input:checked")) {
                        document.querySelector("[data-bs-target='#collapseBgGradient']").classList.add("active");
                    } else {
                        document.getElementById('collapseBgGradient').classList.remove('show');
                        document.querySelector("[data-bs-target='#collapseBgGradient']").classList.remove("active");
                    }
                });
            }
        });

        window.addEventListener("resize", this.resizeWindow);
        this.resizeWindow();
    },
    watch: {
        $route: {
            handler: "onRoutechange",
            immediate: true,
            deep: true,
        },
    }
};
</script>

<template>
    <!--preloader-->
    <div id="preloader" v-if="preloaderEnable" style="opacity: 1; visibility:visible">
        <div id="status">
            <div class="spinner-border text-primary avatar-sm" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
    <div>
        <b-button variant="dark" @click="topFunction" class="btn-icon" id="back-to-top">
            <i class="bi bi-caret-up fs-3xl"></i>
        </b-button>

        <div class="customizer-setting d-none d-md-block">
            <div class="btn btn-info p-2 text-uppercase rounded-end-0 shadow-lg" data-bs-toggle="offcanvas"
                data-bs-target="#theme-settings-offcanvas" aria-controls="theme-settings-offcanvas" id="mdi-cog">
                <i class="bi bi-gear mb-1"></i> Customizer
            </div>
        </div>
        <div class="offcanvas offcanvas-end border-0" tabindex="-1" id="theme-settings-offcanvas">
            <div class="d-flex align-items-center bg-primary bg-gradient p-3 offcanvas-header">
                <div class="me-2">
                    <h5 class="mb-1 text-white">Steex Builder</h5>
                    <p class="text-white text-opacity-75 mb-0">Choose your themes & layouts etc.</p>
                </div>

                <b-button type="button" variant="white" class="btn-close btn-close-white ms-auto" id="customizerclose-btn"
                    data-bs-dismiss="offcanvas" aria-label="Close"></b-button>
            </div>
            <div class="offcanvas-body p-0">
                <div data-simplebar class="h-100">
                    <div class="p-4">
                        <h6 class="fs-md mb-1">Layout</h6>
                        <p class="text-muted fs-sm">Choose your layout</p>

                        <b-row>
                            <div class="col-4">
                                <div class="form-check card-radio">
                                    <input id="customizer-layout01" name="data-layout" type="radio" value="vertical"
                                        class="form-check-input" v-model="layoutType" @click="changeLayout('vertical')" />
                                    <label class="form-check-label p-0 avatar-md w-100" for="customizer-layout01">
                                        <span class="d-flex gap-1 h-100">
                                            <span class="flex-shrink-0">
                                                <span class="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                    <span class="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                </span>
                                            </span>
                                            <span class="flex-grow-1">
                                                <span class="d-flex h-100 flex-column">
                                                    <span class="bg-light d-block p-1"></span>
                                                    <span class="bg-light d-block p-1 mt-auto"></span>
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                                <h5 class="fs-sm text-center fw-medium mt-2">Vertical</h5>
                            </div>
                            <div class="col-4">
                                <div class="form-check card-radio">
                                    <input id="customizer-layout02" name="data-layout" type="radio" value="horizontal"
                                        class="form-check-input" v-model="layoutType" @click="changeLayout('horizontal')" />
                                    <label class="form-check-label p-0 avatar-md w-100" for="customizer-layout02">
                                        <span class="d-flex h-100 flex-column gap-1">
                                            <span class="bg-light d-flex p-1 gap-1 align-items-center">
                                                <span class="d-block p-1 bg-primary-subtle rounded me-1"></span>
                                                <span class="d-block p-1 pb-0 px-2 bg-primary-subtle ms-auto"></span>
                                                <span class="d-block p-1 pb-0 px-2 bg-primary-subtle"></span>
                                            </span>
                                            <span class="bg-light d-block p-1"></span>
                                            <span class="bg-light d-block p-1 mt-auto"></span>
                                        </span>
                                    </label>
                                </div>
                                <h5 class="fs-sm text-center fw-medium mt-2">Horizontal</h5>
                            </div>
                            <div class="col-4">
                                <div class="form-check card-radio">
                                    <input id="customizer-layout03" name="data-layout" type="radio" value="twocolumn"
                                        class="form-check-input" v-model="layoutType" @click="changeLayout('twocolumn')" />
                                    <label class="form-check-label p-0 avatar-md w-100" for="customizer-layout03">
                                        <span class="d-flex gap-1 h-100">
                                            <span class="flex-shrink-0">
                                                <span class="bg-light d-flex h-100 flex-column gap-1">
                                                    <span class="d-block p-1 bg-primary-subtle mb-2"></span>
                                                    <span class="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                    <span class="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                    <span class="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                </span>
                                            </span>
                                            <span class="flex-shrink-0">
                                                <span class="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                    <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                </span>
                                            </span>
                                            <span class="flex-grow-1">
                                                <span class="d-flex h-100 flex-column">
                                                    <span class="bg-light d-block p-1"></span>
                                                    <span class="bg-light d-block p-1 mt-auto"></span>
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                                <h5 class="fs-sm text-center fw-medium mt-2">Two Column</h5>
                            </div>
                            <!-- end col -->
                        </b-row>

                        <h6 class="mt-4 fs-md mb-1">Theme</h6>
                        <p class="text-muted fs-sm">Choose your suitable Theme.</p>

                        <b-row>
                            <div class="col-6">
                                <div class="form-check card-radio">
                                    <input id="customizer-theme01" name="data-theme" type="radio" value="default"
                                        class="form-check-input" v-model="layThemes" @click="changeTheme('default')" />
                                    <label class="form-check-label p-0" for="customizer-theme01">
                                        <img :src="lightMode" alt="" class="img-fluid">
                                    </label>
                                </div>
                                <h5 class="fs-sm text-center fw-medium mt-2">Default</h5>
                            </div>
                            <div class="col-6">
                                <div class="form-check card-radio">
                                    <input id="customizer-theme02" name="data-theme" type="radio" value="material"
                                        class="form-check-input" v-model="layThemes" @click="changeTheme('material')" />
                                    <label class="form-check-label p-0" for="customizer-theme02">
                                        <img :src="material" alt="" class="img-fluid">
                                    </label>
                                </div>
                                <h5 class="fs-sm text-center fw-medium mt-2">Material</h5>
                            </div>
                            <div class="col-6">
                                <div class="form-check card-radio">
                                    <input id="customizer-theme03" name="data-theme" type="radio" value="creative"
                                        class="form-check-input" v-model="layThemes" @click="changeTheme('creative')" />
                                    <label class="form-check-label p-0" for="customizer-theme03">
                                        <img :src="creative" alt="" class="img-fluid">
                                    </label>
                                </div>
                                <h5 class="fs-sm text-center fw-medium mt-2">Creative</h5>
                            </div>
                            <div class="col-6">
                                <div class="form-check card-radio">
                                    <input id="customizer-theme04" name="data-theme" type="radio" value="minimal"
                                        class="form-check-input" v-model="layThemes" @click="changeTheme('minimal')" />
                                    <label class="form-check-label p-0" for="customizer-theme04">
                                        <img :src="minimal" alt="" class="img-fluid">
                                    </label>
                                </div>
                                <h5 class="fs-sm text-center fw-medium mt-2">Minimal</h5>
                            </div>
                            <div class="col-6">
                                <div class="form-check card-radio">
                                    <input id="customizer-theme05" name="data-theme" type="radio" value="modern"
                                        class="form-check-input" v-model="layThemes" @click="changeTheme('modern')" />
                                    <label class="form-check-label p-0" for="customizer-theme05">
                                        <img :src="modern" alt="" class="img-fluid">
                                    </label>
                                </div>
                                <h5 class="fs-sm text-center fw-medium mt-2">Modern</h5>
                            </div>
                            <!-- end col -->
                            <div class="col-6">
                                <div class="form-check card-radio">
                                    <input id="customizer-theme06" name="data-theme" type="radio" value="interaction"
                                        class="form-check-input" v-model="layThemes" @click="changeTheme('interaction')" />
                                    <label class="form-check-label p-0" for="customizer-theme06">
                                        <img :src="interaction" alt="" class="img-fluid">
                                    </label>
                                </div>
                                <h5 class="fs-sm text-center fw-medium mt-2">Interaction</h5>
                            </div><!-- end col -->
                        </b-row>

                        <h6 class="mt-4 fs-md mb-1">Color Scheme</h6>
                        <p class="text-muted fs-sm">Choose Light or Dark Scheme.</p>

                        <div class="colorscheme-cardradio">
                            <b-row class="g-3">
                                <div class="col-6">
                                    <div class="form-check card-radio">
                                        <input class="form-check-input" type="radio" name="data-bs-theme"
                                            id="layout-mode-light" value="light" v-model="mode"
                                            @click="changeMode('light')" />
                                        <label class="form-check-label p-0 bg-transparent" for="layout-mode-light">
                                            <img :src="lightMode" alt="" class="img-fluid">
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Light</h5>
                                </div>

                                <div class="col-6">
                                    <div class="form-check card-radio dark">
                                        <input class="form-check-input" type="radio" name="data-bs-theme"
                                            id="layout-mode-dark" value="dark" v-model="mode" @click="changeMode('dark')" />
                                        <label class="form-check-label p-0 bg-transparent" for="layout-mode-dark">
                                            <img :src="darkMode" alt="" class="img-fluid">
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Dark</h5>
                                </div>

                                <div class="col-6">
                                    <div class="form-check card-radio brand">
                                        <input class="form-check-input" type="radio" name="data-bs-theme"
                                            id="layout-mode-brand" value="brand" v-model="mode" disabled />
                                        <h6
                                            class="text-danger fs-18 lh-base text-center position-absolute top-50 start-50 translate-middle z-1 mb-0">
                                            Coming Soon</h6>
                                        <label class="form-check-label cursor-none p-0 bg-transparent opacity-75"
                                            for="layout-mode-brand">
                                            <img :src="brandMode" alt="" class="img-fluid">
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Brand</h5>
                                </div>
                            </b-row>
                        </div>

                        <div id="layout-width" v-if="layoutType != 'twocolumn'">
                            <h6 class="mt-4 fs-md mb-1">Layout Width</h6>
                            <p class="text-muted fs-sm">Choose Fluid or Boxed layout.</p>

                            <b-row>
                                <div class="col-4">
                                    <div class="form-check card-radio">
                                        <input class="form-check-input" type="radio" name="data-layout-width"
                                            id="layout-width-fluid" value="fluid" v-model="layWidth"
                                            @click="changeLayoutWidth('fluid')" />
                                        <label class="form-check-label p-0 avatar-md w-100" for="layout-width-fluid">
                                            <span class="d-flex gap-1 h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                        <span
                                                            class="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Fluid</h5>
                                </div>
                                <div class="col-4">
                                    <div class="form-check card-radio">
                                        <input class="form-check-input" type="radio" name="data-layout-width"
                                            id="layout-width-boxed" value="boxed" v-model="layWidth"
                                            @click="changeLayoutWidth('boxed')" />
                                        <label class="form-check-label p-0 avatar-md w-100 px-2" for="layout-width-boxed">
                                            <span class="d-flex gap-1 h-100 border-start border-end">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                        <span
                                                            class="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Boxed</h5>
                                </div>
                            </b-row>
                        </div>

                        <div id="layout-position" v-if="layoutType != 'twocolumn'">
                            <h6 class="mt-4 fs-md mb-1">Layout Position</h6>
                            <p class="text-muted fs-sm">Choose Fixed or Scrollable Layout Position.</p>

                            <div class="btn-group radio" role="group">
                                <input type="radio" class="btn-check" name="data-layout-position" id="layout-position-fixed"
                                    value="fixed" v-model="position" @click="changePosition('fixed')" />
                                <label class="btn btn-light w-sm" for="layout-position-fixed">Fixed</label>

                                <input type="radio" class="btn-check" name="data-layout-position"
                                    id="layout-position-scrollable" value="scrollable" v-model="position"
                                    @click="changePosition('scrollable')" />
                                <label class="btn btn-light w-sm ms-0" for="layout-position-scrollable">Scrollable</label>
                            </div>
                        </div>

                        <h6 class="mt-4 fs-md mb-1">Topbar Color</h6>
                        <p class="text-muted fs-sm">Choose Light or Dark Topbar Color.</p>

                        <b-row>
                            <div class="col-4">
                                <div class="form-check card-radio">
                                    <input class="form-check-input" type="radio" name="data-topbar" id="topbar-color-light"
                                        value="light" v-model="topbar" @click="changeTopbar('light')" />
                                    <label class="form-check-label p-0 avatar-md w-100" for="topbar-color-light">
                                        <span class="d-flex gap-1 h-100">
                                            <span class="flex-shrink-0">
                                                <span class="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                    <span class="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                </span>
                                            </span>
                                            <span class="flex-grow-1">
                                                <span class="d-flex h-100 flex-column">
                                                    <span class="bg-light d-block p-1"></span>
                                                    <span class="bg-light d-block p-1 mt-auto"></span>
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                                <h5 class="fs-sm text-center fw-medium mt-2">Light</h5>
                            </div>
                            <div class="col-4">
                                <div class="form-check card-radio">
                                    <input class="form-check-input" type="radio" name="data-topbar" id="topbar-color-dark"
                                        value="dark" v-model="topbar" @click="changeTopbar('dark')" />
                                    <label class="form-check-label p-0 avatar-md w-100" for="topbar-color-dark">
                                        <span class="d-flex gap-1 h-100">
                                            <span class="flex-shrink-0">
                                                <span class="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                    <span class="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                </span>
                                            </span>
                                            <span class="flex-grow-1">
                                                <span class="d-flex h-100 flex-column">
                                                    <span class="bg-primary d-block p-1"></span>
                                                    <span class="bg-light d-block p-1 mt-auto"></span>
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                                <h5 class="fs-sm text-center fw-medium mt-2">Dark</h5>
                            </div>
                        </b-row>

                        <div id="sidebar-size" v-if="layoutType == 'vertical'">
                            <h6 class="mt-4 fs-md mb-1">Sidebar Size</h6>
                            <p class="text-muted fs-sm">Choose a size of Sidebar.</p>

                            <b-row>
                                <div class="col-4">
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-sidebar-size"
                                            id="sidebar-size-default" value="lg" v-model="sideSize"
                                            @click="changeSizebarSize('lg')">
                                        <label class="form-check-label p-0 avatar-md w-100" for="sidebar-size-default">
                                            <span class="d-flex gap-1 h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                        <span
                                                            class="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Default</h5>
                                </div>

                                <div class="col-4">
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-sidebar-size"
                                            id="sidebar-size-compact" value="md" v-model="sideSize"
                                            @click="changeSizebarSize('md')">
                                        <label class="form-check-label p-0 avatar-md w-100" for="sidebar-size-compact">
                                            <span class="d-flex gap-1 h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                        <span class="d-block p-1 bg-primary-subtle rounded mb-2"></span>
                                                        <span class="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Compact</h5>
                                </div>

                                <div class="col-4">
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-sidebar-size"
                                            id="sidebar-size-small" value="sm" v-model="sideSize"
                                            @click="changeSizebarSize('sm')">
                                        <label class="form-check-label p-0 avatar-md w-100" for="sidebar-size-small">
                                            <span class="d-flex gap-1 h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-light d-flex h-100 flex-column gap-1">
                                                        <span class="d-block p-1 bg-primary-subtle mb-2"></span>
                                                        <span class="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Small (Icon View)</h5>
                                </div>

                                <div class="col-4">
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-sidebar-size"
                                            id="sidebar-size-small-hover" value="sm-hover" v-model="sideSize"
                                            @click="changeSizebarSize('sm-hover')">
                                        <label class="form-check-label p-0 avatar-md w-100" for="sidebar-size-small-hover">
                                            <span class="d-flex gap-1 h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-light d-flex h-100 flex-column gap-1">
                                                        <span class="d-block p-1 bg-primary-subtle mb-2"></span>
                                                        <span class="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 pb-0 bg-primary-subtle"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Small Hover View</h5>
                                </div>
                            </b-row>
                        </div>

                        <div id="sidebar-view" v-if="layoutType == 'vertical'">
                            <h6 class="mt-4 fs-md mb-1">Sidebar View</h6>
                            <p class="text-muted fs-sm">Choose Default or Detached Sidebar view.</p>

                            <b-row>
                                <div class="col-4">
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-layout-style"
                                            id="sidebar-view-default" value="default" v-model="sideView"
                                            @click="changeSizebarView('default')" />
                                        <label class="form-check-label p-0 avatar-md w-100" for="sidebar-view-default">
                                            <span class="d-flex gap-1 h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                        <span
                                                            class="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Default</h5>
                                </div>
                                <div class="col-4">
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-layout-style"
                                            id="sidebar-view-detached" value="detached" v-model="sideView"
                                            @click="changeSizebarView('detached')" />
                                        <label class="form-check-label p-0 avatar-md w-100" for="sidebar-view-detached">
                                            <span class="d-flex h-100 flex-column">
                                                <span class="bg-light d-flex p-1 gap-1 align-items-center px-2">
                                                    <span class="d-block p-1 bg-primary-subtle rounded me-1"></span>
                                                    <span class="d-block p-1 pb-0 px-2 bg-primary-subtle ms-auto"></span>
                                                    <span class="d-block p-1 pb-0 px-2 bg-primary-subtle"></span>
                                                </span>
                                                <span class="d-flex gap-1 h-100 p-1 px-2">
                                                    <span class="flex-shrink-0">
                                                        <span class="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                            <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                            <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                            <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span class="bg-light d-block p-1 mt-auto px-2"></span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Detached</h5>
                                </div>
                            </b-row>
                        </div>
                        <div id="sidebar-color" v-if="layoutType != 'horizontal'">
                            <h6 class="mt-4 fs-md mb-1">Sidebar Color</h6>
                            <p class="text-muted fs-sm">Choose a color of Sidebar.</p>

                            <b-row>
                                <div class="col-4">
                                    <div class="form-check sidebar-setting card-radio" data-bs-toggle="collapse"
                                        data-bs-target="#collapseBgGradient.show">
                                        <input class="form-check-input" type="radio" name="data-sidebar"
                                            id="sidebar-color-light" value="light" v-model="sideColor"
                                            @click="changeColor('light')" />
                                        <label class="form-check-label p-0 avatar-md w-100" for="sidebar-color-light">
                                            <span class="d-flex gap-1 h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-white border-end d-flex h-100 flex-column gap-1 p-1">
                                                        <span
                                                            class="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Light</h5>
                                </div>
                                <div class="col-4">
                                    <div class="form-check sidebar-setting card-radio" data-bs-toggle="collapse"
                                        data-bs-target="#collapseBgGradient.show">
                                        <input class="form-check-input" type="radio" name="data-sidebar"
                                            id="sidebar-color-dark" value="dark" v-model="sideColor"
                                            @click="changeColor('dark')" />
                                        <label class="form-check-label p-0 avatar-md w-100" for="sidebar-color-dark">
                                            <span class="d-flex gap-1 h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-primary d-flex h-100 flex-column gap-1 p-1">
                                                        <span class="d-block p-1 px-2 bg-soft-light rounded mb-2"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-soft-light"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-soft-light"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-soft-light"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Dark</h5>
                                </div>
                                <div class="col-4">
                                    <button class="btn btn-link avatar-md w-100 p-0 overflow-hidden border collapsed"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseBgGradient"
                                        aria-expanded="false" aria-controls="collapseBgGradient">
                                        <span class="d-flex gap-1 h-100">
                                            <span class="flex-shrink-0">
                                                <span class="bg-vertical-gradient d-flex h-100 flex-column gap-1 p-1">
                                                    <span class="d-block p-1 px-2 bg-soft-light rounded mb-2"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-soft-light"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-soft-light"></span>
                                                    <span class="d-block p-1 px-2 pb-0 bg-soft-light"></span>
                                                </span>
                                            </span>
                                            <span class="flex-grow-1">
                                                <span class="d-flex h-100 flex-column">
                                                    <span class="bg-light d-block p-1"></span>
                                                    <span class="bg-light d-block p-1 mt-auto"></span>
                                                </span>
                                            </span>
                                        </span>
                                    </button>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Gradient</h5>
                                </div>
                            </b-row>
                            <!-- end row -->

                            <div class="collapse" id="collapseBgGradient">
                                <div class="d-flex gap-2 flex-wrap img-switch p-2 px-3 bg-light rounded">

                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-sidebar"
                                            id="sidebar-color-gradient" value="gradient" v-model="sideColor"
                                            @click="changeColor('gradient')" />
                                        <label class="form-check-label p-0 avatar-xs rounded-circle"
                                            for="sidebar-color-gradient">
                                            <span class="avatar-title rounded-circle bg-vertical-gradient"></span>
                                        </label>
                                    </div>
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-sidebar"
                                            id="sidebar-color-gradient-2" value="gradient-2" v-model="sideColor"
                                            @click="changeColor('gradient-2')" />
                                        <label class="form-check-label p-0 avatar-xs rounded-circle"
                                            for="sidebar-color-gradient-2">
                                            <span class="avatar-title rounded-circle bg-vertical-gradient-2"></span>
                                        </label>
                                    </div>
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-sidebar"
                                            id="sidebar-color-gradient-3" value="gradient-3" v-model="sideColor"
                                            @click="changeColor('gradient-3')" />
                                        <label class="form-check-label p-0 avatar-xs rounded-circle"
                                            for="sidebar-color-gradient-3">
                                            <span class="avatar-title rounded-circle bg-vertical-gradient-3"></span>
                                        </label>
                                    </div>
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-sidebar"
                                            id="sidebar-color-gradient-4" value="gradient-4" v-model="sideColor"
                                            @click="changeColor('gradient-4')" />
                                        <label class="form-check-label p-0 avatar-xs rounded-circle"
                                            for="sidebar-color-gradient-4">
                                            <span class="avatar-title rounded-circle bg-vertical-gradient-4"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="sidebar-img" v-if="layoutType != 'horizontal'">
                            <h6 class="mt-4 fw-semibold fs-base">Sidebar Images</h6>
                            <p class="text-muted fs-sm">Choose a image of Sidebar.</p>

                            <div class="d-flex gap-2 flex-wrap img-switch">
                                <div class="form-check sidebar-setting card-radio">
                                    <input class="form-check-input" type="radio" name="data-sidebar-image"
                                        id="sidebarimg-none" value="none" v-model="sideImage"
                                        @click="changeSizebarImg('none')">
                                    <label class="form-check-label p-0 avatar-sm h-auto" for="sidebarimg-none">
                                        <span
                                            class="avatar-md w-auto bg-light d-flex align-items-center justify-content-center">
                                            <i class="ri-close-fill fs-3xl"></i>
                                        </span>
                                    </label>
                                </div>

                                <div class="form-check sidebar-setting card-radio">
                                    <input class="form-check-input" type="radio" name="data-sidebar-image"
                                        id="sidebarimg-01" value="img-1" v-model="sideImage"
                                        @click="changeSizebarImg('img-1')">
                                    <label class="form-check-label p-0 avatar-sm h-auto" for="sidebarimg-01">
                                        <img :src="img1" alt="" class="avatar-md w-auto object-cover">
                                    </label>
                                </div>

                                <div class="form-check sidebar-setting card-radio">
                                    <input class="form-check-input" type="radio" name="data-sidebar-image"
                                        id="sidebarimg-02" value="img-2" v-model="sideImage"
                                        @click="changeSizebarImg('img-2')">
                                    <label class="form-check-label p-0 avatar-sm h-auto" for="sidebarimg-02">
                                        <img :src="img2" alt="" class="avatar-md w-auto object-cover">
                                    </label>
                                </div>
                                <div class="form-check sidebar-setting card-radio">
                                    <input class="form-check-input" type="radio" name="data-sidebar-image"
                                        id="sidebarimg-03" value="img-3" v-model="sideImage"
                                        @click="changeSizebarImg('img-3')">
                                    <label class="form-check-label p-0 avatar-sm h-auto" for="sidebarimg-03">
                                        <img :src="img3" alt="" class="avatar-md w-auto object-cover">
                                    </label>
                                </div>
                                <div class="form-check sidebar-setting card-radio">
                                    <input class="form-check-input" type="radio" name="data-sidebar-image"
                                        id="sidebarimg-04" value="img-4" v-model="sideImage"
                                        @click="changeSizebarImg('img-4')">
                                    <label class="form-check-label p-0 avatar-sm h-auto" for="sidebarimg-04">
                                        <img :src="img4" alt="" class="avatar-md w-auto object-cover">
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div id="preloader-menu">
                            <h6 class="mt-4 fw-semibold fs-base">Preloader</h6>
                            <p class="text-muted fs-sm">Choose a preloader.</p>

                            <b-row>
                                <div class="col-4">
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-preloader"
                                            id="preloader-view-custom" value="enable" v-model="loader"
                                            @click="preloaderChange('enable')">
                                        <label class="form-check-label p-0 avatar-md w-100" for="preloader-view-custom">
                                            <span class="d-flex gap-1 h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                        <span
                                                            class="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Enable</h5>
                                </div>
                                <div class="col-4">
                                    <div class="form-check sidebar-setting card-radio">
                                        <input class="form-check-input" type="radio" name="data-preloader"
                                            id="preloader-view-none" value="disable" v-model="loader"
                                            @click="preloaderChange('disable')">
                                        <label class="form-check-label p-0 avatar-md w-100" for="preloader-view-none">
                                            <span class="d-flex gap-1 h-100">
                                                <span class="flex-shrink-0">
                                                    <span class="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                        <span
                                                            class="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                        <span class="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                    </span>
                                                </span>
                                                <span class="flex-grow-1">
                                                    <span class="d-flex h-100 flex-column">
                                                        <span class="bg-light d-block p-1"></span>
                                                        <span class="bg-light d-block p-1 mt-auto"></span>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <h5 class="fs-sm text-center fw-medium mt-2">Disable</h5>
                                </div>
                            </b-row>

                        </div><!-- end preloader-menu -->
                    </div>
                </div>

            </div>
            <div class="offcanvas-footer border-top p-3 text-center">
                <b-row>
                    <div class="col-6">
                        <button type="button" class="btn btn-light w-100" id="reset-layout"
                            @click="resetCustomizer()">Reset</button>
                    </div>
                    <div class="col-6">
                        <a href="#!" target="_blank" class="btn btn-primary w-100">Buy Now</a>
                    </div>
                </b-row>
            </div>
        </div>

    </div>
</template>
  