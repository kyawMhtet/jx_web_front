<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";

import { basicPolarareaChart, polarAreaMonochromeChart } from "./data";

export default {
    data() {
        return {
            basicPolarareaChart: basicPolarareaChart,
            polarAreaMonochromeChart: polarAreaMonochromeChart,
            title: "Polararea Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Polararea Charts",
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
                        <b-card-title class="mb-0">Basic Polararea Chart</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="320" dir="ltr" :series="basicPolarareaChart.series"
                            :options="basicPolarareaChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">PolarArea Monochrome</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart class="apex-charts" height="320" dir="ltr" :series="polarAreaMonochromeChart.series"
                            :options="polarAreaMonochromeChart.chartOptions"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>