import { createContext } from "react";

export const GlobalContext = createContext({
	isEdit: false,
	setIsEdit: (_: boolean) => {},
});
