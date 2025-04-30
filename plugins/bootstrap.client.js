import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";

export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide:{
            "offcanvas":(element) => new bootstrap.Offcanvas(element),
            "modal":(element) => new bootstrap.Modal(element),
        }
    }
});