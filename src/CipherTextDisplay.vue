<template>
	<div class="cipher-text-display">
		<div class="cipher-text-centered">
			{{ cipherText }}
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'CipherTextDisplay',

	data() {
		return {};
	},

	computed: mapGetters({
		cipherText: 'cipherText'
	})
}
</script>

<style lang="scss">
.cipher-text-display {
	text-align: center;
	width: 500px;

	.cipher-text-centered {
		display: inline-block;
		font-size: 36px;
	}
}
</style>