class Contract {
	constructor(address) {
		/**
		 * @type {TronWeb}
		 */
		if (address == null) {
			throw Error("Contract object requires contract address");
		}
		this._tw = null;
		this._contract = null;
		this._address = address;
	}

	async init(tronWebInstance) {
		this._tw = tronWebInstance;
		this._contract = await this._tw.contract().at(this._address);
		return this;
	}

	async name() {
		return this._call('name');
	}

	async symbol() {
		return this._call('symbol');
	}

	/**
	 * @returns {Promise<Number>}
	 */
	async mintWithPolling() {
		const tokenId = await this._contract?.mint().send({
			feeLimit: 100_000_000,
			callValue: process.env.MINTING_PRICE,
			shouldPollResponse: true
		});
		return this._convertNumber(tokenId);
	}

	/**
	 * @returns {Promise<Number>}
	 */
	async mint() {
		return await this._contract?.mint().send({
			feeLimit: 100_000_000,
			callValue: process.env.MINTING_PRICE,
			shouldPollResponse: false
		});
	}

	/**
	 * @param {string} tokenId
	 * @param recipient
	 * @param price
	 */
	async buyFromMarket(tokenId, recipient, price) {
		return await this._contract?.buyFromMarket(tokenId, recipient).send({
			feeLimit: 100_000_000,
			callValue: price,
			shouldPollResponse: false
		})
	}

	/**
	 * @param {string} tokenId
	 * @returns {Promise<Object>}
	 */
	async getMarketLotInfo(tokenId) {
		const lot = await this._contract.getMarketLotInfo(tokenId).call();
		return {
			tokenId: this._convertNumber(lot.tokenId),
			isForSale: lot.isForSale,
			owner: this._convertAddress(lot.owner),
			price: this._convertNumber(lot.price)
		}
	}

	/**
	 * @param {string} tokenId
	 * @param {string} price
	 */
	async putOnMarket(tokenId, price) {
		price = String(Math.ceil(Number(price)) * 1_000_000);
		await this._contract?.putOnMarket(tokenId, price).send({
			feeLimit: 100_000_000,
			shouldPollResponse: false
		})
	}

	/**
	 * @param {string} tokenId
	 * @param {string} newPrice
	 */
	async changeLotPrice(tokenId, newPrice) {
		const price = String(Math.ceil(Number(newPrice)) * 1_000_000);
		return (
			await this._contract?.changeLotPrice(tokenId, price).send({
				feeLimit: 100_000_000,
				shouldPollResponse: false
			})
		)
	}

	/**
	 * @param {string} tokenId
	 */
	async withdrawFromMarket(tokenId) {
		return (
			await this._contract?.withdrawFromMarket(tokenId).send({
				feeLimit: 100_000_000,
				shouldPollResponse: false
			})
		)
	}

	/**
	 * @returns {Promise<Array<Number>>}
	 */
	async getTokensOnSale() {
		const arr = await this._call('getTokensOnSale');
		let res;
		try {
			const _self = this;
			res = arr.map(v => _self._convertNumber(v))
		} catch (e) {
		}
		return res;
	}

	/**
	 * @param {string} address
	 * @return {  Promise<Array<Number> >}
	 */
	async getUserTokens(address) {
		const arr = await this._call('getUserTokens', [address]);
		let res;
		try {
			const that = this;
			res = arr.map(a => that._convertNumber(a));
		} catch (e) {
		}

		return res;
	}

	/**
	 * @param {string} tokenId
	 * @returns {Promise<string>}
	 */
	async ownerOf(tokenId) {
		const addr = await this._call('ownerOf', [tokenId]);
		return this._convertAddress(addr);
	}

	/**
	 * @returns {Promise<Number>}
	 */
	async getNotMintedAmount() {
		const num = await this._call('getNotMintedAmount');
		return this._convertNumber(num);
	}

	/**
	 * @returns {Number}
	 */
	async totalSupply() {
		const num = await this._call('totalSupply');
		return this._convertNumber(num);
	}

	/**
	 * @returns {Number}
	 */
	async getMintingLimit() {
		const num = await this._call('MINTING_LIMIT');
		return this._convertNumber(num);
	}

	async _call(method, args = []) {
		if (this._contract === null) {
			throw Error("Contract object not inited");
		}
		return await this._contract[method](...args).call();
	}

	async _convertAddress(addr) {
		return this._tw.address.fromHex(addr);
	}

	_convertNumber(bignum) {
		return this._tw.toDecimal(bignum._hex);
	}
}

module.exports = new Contract(process.env.CONTRACT);
