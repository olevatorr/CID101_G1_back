import { defineStore } from 'pinia'
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router'


export const useAuthStore = defineStore('auth', {
    state: () => ({
        loggedIn: false,
        adminName: '',
        adminLevel: '',
        router: useRouter(),
    }),
    actions: {
        login(admin) {
            this.loggedIn = true
            this.adminName = admin.AD_NAME
            this.adminLevel = admin.AD_LEVEL
            Cookies.set('loggedInAdmin', JSON.stringify(admin), { expires: 3 })
            this.router.push('/')
        },
        logout() {
            this.loggedIn = false
            this.adminName = ''
            Cookies.remove('loggedInAdmin')
            this.router.push('/login')
        },
        checkLoginStatus() {
            const loggedInAdmin = Cookies.get('loggedInAdmin')
            if (loggedInAdmin) {
                const admin = JSON.parse(loggedInAdmin)
                this.login(admin)
            } else {
                this.logout()
                this.router.push('/login')
            }
        }
    }
})
