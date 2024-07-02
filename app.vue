<template>
	<div :class="{'dark': darkMode}">
		<!--app-->
		<div v-if="user" class="bg-white dark:bg-darkMode-900" style="height: 5000px;">
			<button
				@click="darkMode = !darkMode"
				class="text-dark dark:text-white absolute right-10 bottom-10 w-100 z-50">
				Toggle Dark Mode
			</button>

			<div class="min-h-full">
				<div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-10">
					<div class="hidden md:block col-span-1 lg:col-span-2">
						<div class="sticky top-0">
							<SidebarLeft/>
						</div>
					</div>
					<div class="bg-gray-50 col-span-12 md:col-span-7 xl:col-span-6">
						<router-view/>
					</div>
					<div class="md:block col-span-4 md:col-span-3 xl:col-span-4">
						<div class="sticky top-0">
							<SidebarRight/>
						</div>
					</div>
				</div>
			</div>
		</div>

		<AuthPage v-else/>
	</div>
</template>

<script setup>
import AuthPage from "~/components/Auth/Page.vue";
import useAuth from "~/composable/useAuth";

const darkMode = ref(true)
const {useAuthUser} = useAuth()
const user = useAuthUser();

</script>