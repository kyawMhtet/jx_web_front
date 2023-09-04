<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";

import { basicRadarChart, radarMultiseriesChart, polygonRadarChart } from "./data";

export default {
    data() {
        return {
            basicRadarChart: basicRadarChart,
            radarMultiseriesChart: radarMultiseriesChart,
            polygonRadarChart: polygonRadarChart,
            title: "Radar Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Radar Charts",
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
                  <b-card-title class="mb-0">Basic Radar Chart</b-card-title>
                </b-card-header>
                <b-card-body>
                  <apexchart class="apex-charts" height="350" dir="ltr" :series="basicRadarChart.series"
                    :options="basicRadarChart.chartOptions"></apexchart>
                </b-card-body>
              </b-card>
            </b-col>
            <b-col xl="6">
              <b-card no-body>
                <b-card-header>
                  <b-card-title class="mb-0">Radar Chart - Multiple series</b-card-title>
                </b-card-header>
                <b-card-body>
                  <apexchart class="apex-charts" height="350" dir="ltr" :series="radarMultiseriesChart.series"
                    :options="radarMultiseriesChart.chartOptions"></apexchart>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
      
          <b-row>
            <b-col xl="6">
              <b-card no-body>
                <b-card-header>
                  <b-card-title class="mb-0">Radar Chart - Polygon Fill</b-card-title>
                </b-card-header>
                <b-card-body>
                  <apexchart class="apex-charts" height="350" dir="ltr" :series="polygonRadarChart.series"
                    :options="polygonRadarChart.chartOptions"></apexchart>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
    </Layout>
</template>