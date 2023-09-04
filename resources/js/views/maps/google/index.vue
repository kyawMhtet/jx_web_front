<script>

import Layout from "../../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";

import MarkerMap from "./markerMap.vue";
import Overlays from "./overlays.vue";
import StreetView from "./streetView.vue";
import MapType from "./mapType.vue";

/**
 * Google-map component
 */
export default {
    components: {
        Layout, PageHeader, MarkerMap, Overlays, StreetView, MapType
    },
    data() {
        return {
            title: "Google Maps",
            items: [
                {
                    text: "Maps",
                    href: "/",
                },
                {
                    text: "Google Maps",
                    active: true,
                },
            ],
        };
    },

};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Markers</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <div id="gmaps-markers" class="gmaps">
                            <MarkerMap />
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Overlays</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <div id="gmaps-overlay" class="gmaps">
                            <Overlays />
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Street View Panoramas</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <div id="panorama" class="gmaps-panaroma">
                            <StreetView />
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Map Types</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <div id="gmaps-types" class="gmaps">
                            <MapType />
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>

<!-- mapTypeId="terrain" -->
