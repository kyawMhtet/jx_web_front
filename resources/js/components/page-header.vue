<script>
export default {
    components: {},
    props: {
        title: {
            type: String,
            default: "",
        },
        items: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },
};
</script>

<template>
    <b-row>
        <b-col cols="12">
            <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 class="mb-sm-0">{{ title }}</h4>
                <div class="page-title-right">
                    <b-breadcrumb>
                        <b-breadcrumb-item v-for="(item, index) in items" :key="index" :class="{ active: item[0] }">{{ item.text }}</b-breadcrumb-item>
                    </b-breadcrumb>
                </div>
            </div>
        </b-col>
    </b-row>
</template>
