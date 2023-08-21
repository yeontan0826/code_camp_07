import { atom } from "recoil";

export const accessTokenState = atom({
    key: "accessToken",
    default: "",
});

export const basketState = atom({
    key: "basket",
    default: [],
});
