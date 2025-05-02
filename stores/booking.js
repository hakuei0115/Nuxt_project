export const useBookingStore = defineStore('booking', {
    state: () => ({
        bookingResult: null
    }),

    actions: {
        setBookingResult(bookingResult) {
            this.bookingResult = bookingResult;
        },
    },
});