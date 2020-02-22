const state = {
	currency: 'NGN',
	currencies: [
		'NGN'
	],
	symbols: {
		NGN: '&#8358;'
	},
	language: 'EN',
	languages: [
		'EN'
	],
}

const getters = {
	getLanguage: state => state.language,
	getLanguages: state => state.languages,
	getCurrency: state => state.currency,
	getCurrencies: state => state.currencies,
	getSymbol: state => state.symbols[state.currency]
}

const actions = {
	setLanguage: ({ getters, commit }, language) => getters.getLanguages.includes(language) ? commit('setLanguages', language) : null,
	setCurrency: ({ getters, commit }, currency) => getters.getCurrencies.includes(currency) ? commit('setCurrency', currency) : null
}

const mutations = {
	setLanguage: (state, language) => (state.language = language),
	setCurrency: (state, currency) => (state.currency = currency)
}

export default {
	state,
	getters,
	actions,
	mutations
}
