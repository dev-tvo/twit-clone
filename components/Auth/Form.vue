<template>
	<div>
		<div class="pt-5 space-y-6">
			<UIInput label="Username" placeholder="@username" v-model="data.username"/>

			<UIInput
				label="Password"
				placeholder="*********"
				type="password"
				v-model="data.password"
			/>

			<div>
				<button @click="handleLogin">Submit</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import UIInput from '@/components/UI/Input.vue'
import useAuth from "~/composable/useAuth";

const data = reactive({
	username: '',
	password: '',
	loading: false
})

async function handleLogin() {
	const {login} = useAuth()

	data.loading = true

	try {
		await login({
			username: data.username,
			password: data.password
		})
	} catch (e) {
		console.log(e)
	} finally {
		data.loading = false
	}
}

</script>