import {proxy} from "valtio";

const state = proxy({
	timer: true,
	login: null,
	name: null,
	balance: null,
	network: "",
	address: '',
	contract: false,
	notification: null
});

export {state};
