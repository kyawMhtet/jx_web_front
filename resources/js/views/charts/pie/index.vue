<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";

import {
    simplePieChart,
    donutChart,
    updatingDonutChart,
    gradientDonutChart,
    patternDonutChart,
    imagePieChart,
    monochromePieChart,
} from "./data";

export default {
    data() {
        return {
            simplePieChart: simplePieChart,
            donutChart: donutChart,
            updatingDonutChart: updatingDonutChart,
            gradientDonutChart: gradientDonutChart,
            patternDonutChart: patternDonutChart,
            imagePieChart: imagePieChart,
            monochromePieChart: monochromePieChart,
            title: "Pie Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Pie Charts",
                    active: true,
                },
            ],
        };
    },
    methods: {
        appendData: function () {
            var arr = this.updatingDonutChart.series.slice();
            arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
            this.updatingDonutChart.series = arr;
        },

        removeData: function () {
            if (this.updatingDonutChart.series.length === 1) return;
            var arr = this.updatingDonutChart.series.slice();
            arr.pop();
            this.updatingDonutChart.series = arr;
        },

        randomize: function () {
            this.updatingDonutChart.series = this.updatingDonutChart.series.map(function () {
                return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            });
        },

        reset: function () {
            this.updatingDonutChart.series = [44, 55, 13, 33];
        },
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
        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Simple Pie Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="300" dir="ltr" :series="simplePieChart.series"
                            :options="simplePieChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Simple Donut Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="300" dir="ltr" :series="donutChart.series"
                            :options="donutChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Updating Donut Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="280" dir="ltr" :series="updatingDonutChart.series"
                            :options="updatingDonutChart.chartOptions"></apexchart>

                        <div class="d-flex align-items-start flex-wrap gap-2 justify-content-center mt-4">
                            <b-button id="add" variant="light" size="sm" @click="appendData">
                                + ADD
                            </b-button>

                            <b-button id="remove" variant="light" size="sm" @click="removeData">
                                - REMOVE
                            </b-button>

                            <b-button id="randomize" variant="light" size="sm" @click="randomize">
                                RANDOMIZE
                            </b-button>

                            <b-button id="reset" variant="light" size="sm" @click="reset">
                                RESET
                            </b-button>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Monochrome Pie Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="300" dir="ltr" :series="monochromePieChart.series"
                            :options="monochromePieChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Gradient Donut Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="300" dir="ltr" :series="gradientDonutChart.series"
                            :options="gradientDonutChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Patterned Donut Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="300" dir="ltr" :series="patternDonutChart.series"
                            :options="patternDonutChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Pie Chart with Image Fill</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="300" dir="ltr" :series="imagePieChart.series"
                            :options="imagePieChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>