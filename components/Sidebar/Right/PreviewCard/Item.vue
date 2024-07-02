<template>
	<div
		class="p-3 hover:bg-lightMode-700 dark:text-white dark:hover:bg-darkMode-600  cursor-pointer transition ease duration-350"
		:class="twitterBorderColor">
		<slot></slot>
	</div>
</template>

<script setup>
import useTailwindConfig from "~/composable/useTailwindConfig";

const {twitterBorderColor} = useTailwindConfig()
</script>