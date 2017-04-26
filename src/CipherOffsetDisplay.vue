<template>
	<div class="cipher-offset-display">
		<div class="cipher-offset-centered">
			{{ cipherOffset }}
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'CipherOffsetDisplay',

	data() {
		return {};
	},

	computed: mapGetters({
		cipherOffset: 'cipherOffset'
	})
}
</script>

<style lang="scss">
.cipher-offset-display {
	text-align: center;
	width: 500px;

	.cipher-offset-centered {
		display: inline-block;
		color: gray;
		font-size: 24px;
	}
}
</style>