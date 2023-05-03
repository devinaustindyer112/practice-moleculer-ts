import type { Context, Service, ServiceSchema } from "moleculer";
import { sayHello } from "./greeter.handlers";

export interface GreeterParams {
	name: string;
}

export interface GreeterSettings {
	defaultName: string;
}

type GreeterThis = Service<GreeterSettings>;

const GreeterService: ServiceSchema<GreeterSettings> = {
	name: "greeter",

	/**
	 * Settings
	 */
	settings: {
		defaultName: "Moleculer",
	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {
		hello: {
			rest: {
				method: "GET",
				path: "/hello",
			},
			handler: sayHello,
		},

		welcome: {
			rest: "GET /welcome/:name",
			params: {
				name: "string",
			},
			handler(this: GreeterThis, ctx: Context<GreeterParams>): string {
				return `Welcome, ${ctx.params.name}`;
			},
		},
	},

	/**
	 * Events
	 */
	events: {},

	/**
	 * Methods
	 */
	methods: {},

	/**
	 * Service created lifecycle event handler
	 */
	created(this: GreeterThis) { },

	/**
	 * Service started lifecycle event handler
	 */
	async started(this: GreeterThis) { },

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped(this: GreeterThis) { },
};

export default GreeterService;
