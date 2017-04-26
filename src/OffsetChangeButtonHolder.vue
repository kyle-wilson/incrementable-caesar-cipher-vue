<template>
	<div class="offset-change-button-holder">
		<button @click="fireDecrement">Decrement</button>
		<button @click="fireIncrement">Increment</button>
	</div>
</template>

<script>
export default {
	name: 'OffsetChangeButtonHolder',

	data() {
		return {};
	},

	methods: {
		fireDecrement() {
			this.$store.commit('decrementCipherOffset');
		},

		fireIncrement() {
			this.$store.commit('incrementCipherOffset');
		}
	}
}
</script>

<style lang="scss">
.offset-change-button-holder {
	width: 500px;
	text-align: center;
}
</style>