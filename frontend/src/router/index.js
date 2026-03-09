import { createRouter, createWebHistory } from 'vue-router'
import HomePageIndex from "@/views/homepage/HomePageIndex.vue";
import FriendIndex from "@/views/friend/FriendIndex.vue";
import CreateIndex from "@/views/create/CreateIndex.vue";
import NotFoundIndex from "@/views/error/NotFoundIndex.vue";
import LoginIndex from "@/views/user/account/LoginIndex.vue";
import RegisterIndex from "@/views/user/account/RegisterIndex.vue";
import ProfileIndex from "@/views/user/profile/ProfileIndex.vue";
import SpaceIndex from "@/views/user/space/SpaceIndex.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component : HomePageIndex,
      name : 'homepage-index',
    },
    {
      path: '/friend/',
      component : FriendIndex,
      name : 'friend-index',
    },
    {
      path: '/create/',
      component : CreateIndex,
      name : 'create-index',
    },
    {
      path: '/404/',
      component : NotFoundIndex,
      name : '404'
    },
    {
      path: '/user/account/',
      component : LoginIndex,
      name : 'login-index'
    },
    {
      path: '/user/account/',
      component : RegisterIndex,
      name : 'register-index'
    },
    {
      path: '/user/profile/',
      component : ProfileIndex,
      name : 'profile-index'
    },
    {
      path: '/user/space/',
      component : SpaceIndex,
      name : ''
    },
  ],
})

export default router
