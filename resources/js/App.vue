<template>
    <transition name="fade">
        <router-view />

    </transition>
</template>

<script>
export default {
    data() {
        return {
            loading: false
        };
    },
    created() {
        setTimeout(() => (this.loading = false), 600);
    }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.8s ease;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
