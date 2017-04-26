<template>
	<div class="incrementable-cipher">
		<cipher-text-display/>
		<cipher-offset-display/>
		<offset-change-button-holder/>
	</div>
</template>

<script>
import CipherTextDisplay from './CipherTextDisplay.vue'
import CipherOffsetDisplay from './CipherOffsetDisplay.vue'
import OffsetChangeButtonHolder from './OffsetChangeButtonHolder.vue'

export default {
	name: 'IncrementableCipher',

	data() {
		return {};
	},

	components: {
		'cipher-text-display': CipherTextDisplay,
		'cipher-offset-display': CipherOffsetDisplay,
		'offset-change-button-holder': OffsetChangeButtonHolder
	}
}
</script>

<style>

</style>