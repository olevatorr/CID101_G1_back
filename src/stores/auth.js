import { defineStore } from 'pinia'
import Cookies from 'js-cookie';


export const useAuthStore = defineStore('auth', {
    state: () => ({
        loggedIn: false,
        adminName: ''
    }),
    actions: {
        login(admin) {
            this.loggedIn = true
            this.adminName = admin.AD_NAME
            Cookies.set('loggedInAdmin', JSON.stringify(admin), { expires: 3 })
        },
        logout() {
            this.loggedIn = false
            this.adminName = ''
            Cookies.remove('loggedInAdmin')
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
