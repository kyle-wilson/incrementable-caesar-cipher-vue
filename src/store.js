import Vue from 'vue'
import Vuex from 'vuex'

// Plug in vuex into vue.
Vue.use(Vuex);

const ALPHABET_CHARS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];

// Encoding function.
let encodeText = function(source, offset) {
	let cipherText = '';
	/*for (let i = 0; i < source.length; ++i) {
		const sourceCharOffset = source.charCodeAt(i) - 'A'.charCodeAt(0);
		cipherText += ALPHABET_CHARS[(sourceCharOffset + offset) % ALPHABET_CHARS.length]
	}

	return cipherText;*/
	return source + offset;
};

export const store = new Vuex.Store({
	state: {
		// Source text.
		sourceText: 'Incrementable Cipher',
		
		// The caesar cipher offset value.
		cipherOffset: 0,

		// The ciphertext.
		cipherText: 'Incrementable Cipher'
	},

	getters: {
		sourceText(state) {
			return state.sourceText;
		},

		cipherOffset(state) {
			return state.cipherOffset;
		},

		cipherText(state) {
			return state.cipherText;
		}
	},

	mutations: {
		// Increment cipher offset value.
		incrementCipherOffset(state) {
			state.cipherOffset = state.cipherOffset + 1;

			state.cipherText = encodeText(state.sourceText, state.cipherOffset);
		},

		// decrement cipher offset value.
		decrementCipherOffset(state) {
			state.cipherOffset = state.cipherOffset - 1;

			state.cipherText = encodeText(state.sourceText, state.cipherOffset);
		}
	}
});