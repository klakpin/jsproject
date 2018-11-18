import {setSteamId} from "../../../src/data/reducers/steamId";

test("", () => {
        const data = {type: "init", value: undefined};
        const res = setSteamId(undefined, data);
        expect(res).toEqual({    value: "107519813"
        });
    }
);

console.log("All test passes");