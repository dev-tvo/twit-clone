<template>
	<div class="h-screen flex flex-col">
		<div class="p-2 my-2 rounded-full hover:bg-blue-50 w-min dark:hover:bg-white/20" :class="defaultTransition">
			<nuxt-link to="/">
				<div class="w-8 h-8">
					<LogoTwitter/>
				</div>
			</nuxt-link>
		</div>

		<div class="mt-2 space-y-3">
			<SidebarLeftTab active>
				<template v-slot:icon>
					<HomeIcon/>
				</template>
				<template v-slot:name>
					<h1>Home</h1>
				</template>
			</SidebarLeftTab>

			<SidebarLeftTab>
				<template v-slot:icon>
					<MagnifyingGlassIcon/>
				</template>
				<template v-slot:name>
					<h1>Explore</h1>
				</template>
			</SidebarLeftTab>

			<SidebarLeftTab>
				<template v-slot:icon>
					<BellAlertIcon/>
				</template>
				<template v-slot:name>
					<h1>Notifications</h1>
				</template>
			</SidebarLeftTab>

			<SidebarLeftTab>
				<template v-slot:icon>
					<EnvelopeIcon/>
				</template>
				<template v-slot:name>
					<h1>Messages</h1>
				</template>
			</SidebarLeftTab>

			<SidebarLeftTab>
				<template v-slot:icon>
					<ListBulletIcon/>
				</template>
				<template v-slot:name>
					<h1>Lists</h1>
				</template>
			</SidebarLeftTab>

			<SidebarLeftTab>
				<template v-slot:icon>
					<BookmarkIcon/>
				</template>
				<template v-slot:name>
					<h1>Bookmarks</h1>
				</template>
			</SidebarLeftTab>

			<SidebarLeftTab>
				<template v-slot:icon>
					<CheckCircleIcon/>
				</template>
				<template v-slot:name>
					<h1>Verified</h1>
				</template>
			</SidebarLeftTab>

			<SidebarLeftTab>
				<template v-slot:icon>
					<UserIcon/>
				</template>
				<template v-slot:name>
					<h1>Profile</h1>
				</template>
			</SidebarLeftTab>

			<SidebarLeftTab>
				<template v-slot:icon>
					<EllipsisHorizontalIcon/>
				</template>
				<template v-slot:name>
					<h1>More</h1>
				</template>
			</SidebarLeftTab>
		</div>
	</div>
</template>

<script setup>
import useTailwindConfig from "~/composable/useTailwindConfig";
import {HomeIcon} from '@heroicons/vue/24/solid';
import {
	MagnifyingGlassIcon,
	BellAlertIcon,
	EnvelopeIcon,
	ListBulletIcon,
	BookmarkIcon,
	CheckCircleIcon,
	UserIcon,
	EllipsisHorizontalIcon
}
	from
		'@heroicons/vue/24/outline';


const {defaultTransition} = useTailwindConfig()


</script>