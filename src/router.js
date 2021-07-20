import { createRouter, createWebHistory } from "vue-router";
import NotFound from "./components/pages/NotFound.vue";

const Home = () => import("./components/pages/Home.vue");
const Hotels = () => import("./components/pages/Hotels.vue");
const ContactUs = () => import("./components/pages/requests/ContactUs.vue");
const UserAuth = () => import("./components/pages/auth/UserAuth.vue");
const Register = () => import("./components/pages/auth/Register.vue");
const Dashboard = () => import("./components/pages/auth/Dashboard.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/hotels", name: "Hotels", component: Hotels },
    { path: "/contactUs", name: "ContactUs", component: ContactUs },
    { path: "/auth", name: "UserAuth", component: UserAuth },
    { path: "/register", name: "Register", component: Register },
    { path: "/dashboard", name: "Dashboard", component: Dashboard },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
