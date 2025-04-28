export default defineNuxtRouteMiddleware(async (to, from) => {
    const nuxtApp = useNuxtApp()

    if (
        import.meta.client &&
        nuxtApp.isHydrating &&
        nuxtApp.payload.serverRendered
    ) {
        console.log('Skipping middleware during hydration')
        return
    }

    const auth = useCookie('auth')

    if (!auth.value) {
        console.log('No auth cookie found, redirecting to login')
        return navigateTo('/login')
    }

    const { data, error } = await useFetch('/api/v1/user/check', {
        method: 'GET',
        headers: {
            Authorization: auth.value,
        },
        baseURL: 'https://nuxr3.zeabur.app/'
    })

    if (error.value) {
        console.log('Error fetching user data, redirecting to login')
        return navigateTo('/login')
    }

    if (data.value) {
        console.log('User data fetched successfully')
        return
    }
})
