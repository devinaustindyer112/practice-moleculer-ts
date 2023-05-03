import { Context, ServiceSchema } from "moleculer";
import { ActionHandler } from "moleculer";
import type { GreeterParams, GreeterSettings } from "./greeter.service";

export interface GreeterResponse {
    message: string;
    comment: string;
}

export async function sayHello(this: ServiceSchema<GreeterSettings>, ctx: Context<GreeterParams>): Promise<GreeterResponse> {
    this.logger.info("Hello world!");
    return {
        message: "Hello!",
        comment: "The weather is amazing today!",
    };
}


export async function sayGoodbye(this: ServiceSchema<GreeterSettings>, ctx: Context<GreeterParams>): Promise<GreeterResponse> {
    this.logger.info("Goodbye cruel world!");
    return {
        message: "Goodbye!",
        comment: "Hope you have a good rest of the day!"
    };
}