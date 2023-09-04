<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";

import { basicRadialBarChart, multiRadialbarChart, circleAngleChart, gradientRadialbarChart, strokedRadialbarChart, semiRadialbarChart, imageRadialbarChart } from "./data";

export default {
    data() {
        return {
            basicRadialBarChart: basicRadialBarChart,
            multiRadialbarChart: multiRadialbarChart,
            circleAngleChart: circleAngleChart,
            gradientRadialbarChart: gradientRadialbarChart,
            strokedRadialbarChart: strokedRadialbarChart,
            semiRadialbarChart: semiRadialbarChart,
            imageRadialbarChart: imageRadialbarChart,
            title: "Radialbar Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Radialbar Charts",
                    active: true,
                },
            ],
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
        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Simple Radialbar Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="basicRadialBarChart.series"
                            :options="basicRadialBarChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Multiple Radialbar</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <div id="multiple_radialbar" class="apex-charts" dir="ltr"></div>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="multiRadialbarChart.series"
                            :options="multiRadialbarChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Circle Chart - Custom Angle</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="circleAngleChart.series"
                            :options="circleAngleChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Gradient Circle Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="gradientRadialbarChart.series"
                            :options="gradientRadialbarChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Stroked Circle Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="326" dir="ltr" :series="strokedRadialbarChart.series"
                            :options="strokedRadialbarChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Radialbars with Image</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="315" dir="ltr" :series="imageRadialbarChart.series"
                            :options="imageRadialbarChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Semi Circular Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="semiRadialbarChart.series"
                            :options="semiRadialbarChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>