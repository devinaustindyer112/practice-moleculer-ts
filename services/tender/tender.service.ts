import type { ServiceSchema } from "moleculer";
import { tenderShipment } from "./tender.handler";


interface ServiceSettings {
    something: string;
}

const TenderService: ServiceSchema<ServiceSettings> = {
    name: "tender",
    version: 1,

    /**
     * Settings
     */
    settings: {
        something: "something",
    },

    /**
     * Dependencies
     */
    dependencies: [],

    /**
     * Actions
     */
    actions: {
        tenderShipment,
    },

    /**
     * Events
     */
    events: {},

    /**
     * Methods
     */
    methods: {},
}

export default TenderService;