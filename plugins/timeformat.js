export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.directive('timeformat', {
        mounted(el, binding) {
            el.innerHTML = new Date(binding.value).toLocaleString();
        }
    })
})