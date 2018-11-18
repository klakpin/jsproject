import {setSteamId} from "../../src/data/reducers/steamId";
import {SET_STEAM32_ID} from "../../src/data/actionTypes";

describe("Steam id reducer test", () => {

    test("Initial state in store should be 107519813", () => {
        const data = {type: "init", steamId: undefined};
        const res = setSteamId(undefined, data);
        expect(res).toEqual({value: "107519813"});
    });

    test("Should set proper value of steam id", () => {
        const data = {type: SET_STEAM32_ID, steamId: "0000"};
        const initialData = {value: "1111"};
        const res = setSteamId(initialData, data);
        expect(res).toEqual({value: "0000"});
    });
});


