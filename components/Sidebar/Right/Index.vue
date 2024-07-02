<!--suppress SidebarRightPreviewCard -->
<template>
	<div class="flex flex-col">
		<SidebarRightPreviewCard title="What's happening">
			<SidebarRightPreviewCardItem v-for="whatsHappening in whatsHappeningItems">
				<div>
					<h2 class="font-bold text-gray-800 text-md dark:text-white">{{ whatsHappening.title }}</h2>

					<p class="text-xs text-gray-400">{{ whatsHappening.amount }} Tweets</p>
				</div>
			</SidebarRightPreviewCardItem>
		</SidebarRightPreviewCard>

		<SidebarRightPreviewCard title="Who to follow">
			<SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems">
				<div class="flex items-center">
					<div class="flex flex-row mr-3">
						<img :src="whoToFollow.avatar"
							 :alt="whoToFollow.name" class="rounded-full w-10 h-10">
					</div>
					<div class="p-2">
						<h2 class="font-bold text-gray-800 text-md dark:text-white">{{ whoToFollow.username }}</h2>

						<p class="text-xs text-gray-400">{{ whoToFollow.atsign }}</p>
					</div>
					<div class="bg-black text-white
					 flex items-center px-5 rounded-full h-7 justify-center
					 ml-auto dark:bg-white dark:text-black font-bold text-sm
					 dark:hover:bg-lightMode-200 transition ease duration-750 cursor-pointer
">
						Follow
					</div>
				</div>

			</SidebarRightPreviewCardItem>
		</SidebarRightPreviewCard>
	</div>
</template>

<script setup>
const whatsHappeningItems = ref([
	{
		title: 'SpaceX',
		amount: '18.8k'
	},
	{
		title: 'ETHGATE',
		amount: '433k'
	},
	{
		title: 'Thom',
		amount: '14k'
	}
])

const whoToFollowItems = ref([
	{
		avatar: 'https://picsum.photos/200/200',
		username: 'The Solar System',
		atsign: '@TheSolarSystem'
	},
	{
		avatar: 'https://picsum.photos/200/200',
		username: 'Vite',
		atsign: '@vite_js'
	},
	{
		avatar: 'https://picsum.photos/200/200',
		username: 'Tim Cook',
		atsign: '@tim_cook'
	}
])
</script>