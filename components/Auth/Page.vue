<template>
	<div class="flex h-screen">
		<div class="relative flex-1 hidden md:block">
			<img src="/assets/auth-bg.jpg" alt="" class="absolute inset-0 object-cover w-full h-full">
		</div>
		<div class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
			<div class="flex items-center w-full h-full max-w-sm mx-auto lg:w-96">
				<AuthForm/>
			</div>
		</div>
	</div>
</template>

<script setup>

</script>