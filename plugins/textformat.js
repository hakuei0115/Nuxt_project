export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('textformat', {
        mounted(el, binding) {
            const format = {
                'uppercase': binding.value.toUpperCase(),
                'lowercase': binding.value.toLowerCase()
            }

            el.innerHTML = format[binding.arg]
        }
    })
})