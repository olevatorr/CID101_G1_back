import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        loggedIn: false,
        adminName: ''
    }),
    actions: {
        login(admin) {
            this.loggedIn = true
            this.adminName = admin.AD_NAME
            localStorage.setItem('loggedInAdmin', JSON.stringify(admin))
        },
        logout() {
            this.loggedIn = false
            this.adminName = ''
            localStorage.removeItem('loggedInAdmin')
        },
        checkLoginStatus() {
            const loggedInAdmin = localStorage.getItem('loggedInAdmin')
            if (loggedInAdmin) {
                const admin = JSON.parse(loggedInAdmin)
                this.login(admin)
            } else {
                this.logout()
            }
        }
    }
})
