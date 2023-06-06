import { tenderShipment } from "./tender.handler";

describe("Tender handler tests", () => {
    test("should return the correct string", () => {
        expect(tenderShipment()).toBe("tender shipment");
    });
});