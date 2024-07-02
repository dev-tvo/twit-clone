<template>
	<div>
		<Main title="Home" :loading="loading">
			Home
		</Main>
	</div>
</template>

<script setup>
import Main from '@/components/Main.vue'

const loading = ref(false)
</script>