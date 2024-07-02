<template>
    <nuxt-link to="#"
               class="w-100 flex gap-4 items-center p-2 hover:bg-gray-300 rounded dark:hover:bg-dim-600 dark:text-white "
               :class="defaultTransition">
        <div class="w-6 h-6">
            <slot name="icon"></slot>
        </div>

        <div class="hidden lg:block" :class="textClasses">
            <slot name="name"></slot>
        </div>
    </nuxt-link>
</template>
<script setup lang="ts">
import useTailwindConfig from "~/composable/useTailwindConfig";

const {defaultTransition} = useTailwindConfig()

const props = defineProps({
    active: {
        type: Boolean,
        default: false
    }
})

const textClasses = computed(() => props.active ? 'font-semibold' : 'font-bold')
</script>