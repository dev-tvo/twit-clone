<template>
	<div class="m-2 rounded-2xl bg-lightMode-600 overflow-hidden dark:bg-darkMode-700">
		<h1 class="p-3 text-xl font-bold text-gray-900 dark:text-white">
			{{ props.title }}
		</h1>

		<slot></slot>

		<div class="p-3 text-sm text-blue-400 cursor-pointer
		hover:bg-lightMode-700 dark:text-white dark:hover:bg-darkMode-600 transition ease duration-350">
			Show more
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	title: String,
	required: true
})

</script>