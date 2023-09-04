<script>

import Vertical from "./vertical.vue";
import Horizontal from "./horizontal.vue";
import TwoColumns from "./twocolumn.vue";

export default {
    components: {
        Vertical,
        Horizontal,
        TwoColumns
    },
    computed: {
        layoutType() {
            return this.$parent.layout?.type;
        }
    },
    beforeCreate() {
        const layout = JSON.parse(sessionStorage.getItem("layout")) || {};

        if (layout.type != "") {
            document.documentElement.setAttribute("data-layout", layout.type);
        }
        if (layout.layoutWidth != "") {
            document.documentElement.setAttribute("data-layout-width", layout.layoutWidth);
        }
        if (layout.sidebarSize != "") {
            document.documentElement.setAttribute("data-sidebar-size", layout.sidebarSize);
        }
        if (layout.topbar != "") {
            document.documentElement.setAttribute("data-topbar", layout.topbar);
        }
        if (layout.mode != "") {
            document.documentElement.setAttribute("data-bs-theme", layout.mode);
        }
        if (layout.position != "") {
            document.documentElement.setAttribute("data-layout-position", layout.position);
        }
        if (layout.sidebarView != "") {
            document.documentElement.setAttribute("data-layout-style", layout.sidebarView);
        }
        if (layout.sidebarColor != "") {
            document.documentElement.setAttribute("data-sidebar", layout.sidebarColor);
        }
        if (layout.layoutTheme != "") {
            document.documentElement.setAttribute("data-theme", layout.layoutTheme);
        }
        if (layout.sidebarImage != "") {
            document.documentElement.setAttribute("data-sidebar-image", layout.sidebarImage);
        }
        if (layout.preloader != "") {
            document.documentElement.setAttribute("data-preloader", layout.preloader);
        }
        // if(layout.visibility != "") {
        //     document.documentElement.setAttribute("data-sidebar-image", layout.visibility);
        // }
    },
    mounted() {
        // document.querySelector("html").setAttribute('dir', 'rtl');
    },
};
</script>

<template>
    <div>
        <Vertical v-if="layoutType === 'vertical'" :layout="layoutType">
            <slot />
        </Vertical>

        <Horizontal v-if="layoutType === 'horizontal'" :layout="layoutType">
            <slot />
        </Horizontal>

        <TwoColumns v-if="layoutType === 'twocolumn'" :layout="layoutType">
            <slot />
        </TwoColumns>
    </div>
</template>
