import {state} from "state";

export default function TronLink(){
	const getBalance = async () => {
		return await window.tronWeb.trx.getAccount(
			window.tronWeb.defaultAddress.base58
		);
	};

	const getWalletDetails = async () => {
		if (window.tronWeb) {
			let ok;
			if (window.tronLink) {
				const check = await window.tronLink.request({method: 'tron_requestAccounts'});
				ok = check.code === 200;
			} else {
				ok = window.tronWeb.defaultAddress.base58 && true;
			}
			if (ok) {
				let tempBalance = await getBalance();
				if (!tempBalance.balance) tempBalance.balance = 0;
				state.login = true
				state.name = window.tronWeb.defaultAddress.name;
				state.balance = tempBalance.balance / 1000000;
				state.network = window.tronWeb.fullNode.host;
				state.address = window.tronWeb.defaultAddress.base58;
				state.timer = true
			} else state.timer = false
		} else {
			state.login = false;
			state.name = null;
			state.address = null;
			state.balance = null;
			state.network = null;
			if (!window.tronWeb) state.tronLink = false
			return false
		}
	};

	return getWalletDetails()
}
