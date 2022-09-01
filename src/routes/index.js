import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Loading from "../Components/LoadingScreen";
// import Product from "../Components/Product";
import useAuth from '../util/Contex/useAuth';
import AdminRoutes from './AdminRoutes';
import ClientRoutes from './ClientRoutes';
import FreelancerRoutes from './FreelancerRoutes';

//Global Routes
const HomeScreen = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../View/Home')), 1000);
    });
});
const Product = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../Components/Product')), 1000);
    });
});
const LoginScreens = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../View/Signin')), 1000);
    });
});
const SignUp = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../View/Signup')), 1000);
    });
});

//AdminRoutes
const AdminDashboard = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../View/Admin/DashBoard.js')), 1000);
    });
});

//ClientRoutes
const ClientAddJob = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../View/Clients/AddJob/AddJobs')), 1000);
    });
});
const ClientOrders = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../View/Jobs')), 1000);
    });
});

//FreelancerRoutes
const FreelancerOrders = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../View/Jobs')), 1000);
    });
});
const FreelancerAddServices = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../View/Freelancer/AddService/AddService')), 1000);
    });
});

const Payments = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../View/Payment')), 1000);
    });
});


// import Category from "./View/Category";
// import Jobs from "./View/Jobs";
// import Detail from "./View/Detail";
// import UserInfo from "./View/UserInfo";
// import Loading from "./Components/LoadingScreen";

const MyRoutes = () => {
    const isLogged = localStorage.getItem('isLogged');
    let { setAuth, auth } = useAuth()

    console.log('isLogged', isLogged, auth)

    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />

                    //FreelancerRoutes
                    <Route element={<FreelancerRoutes isLogged={isLogged} auth={auth} />}>
                        <Route path="/Orders" element={<FreelancerOrders />} />
                    </Route>
                    <Route element={<FreelancerRoutes isLogged={isLogged} auth={auth} />}>
                        <Route path="/AddServices" element={<FreelancerAddServices />} />
                    </Route>

                    //FreelancerRoutes
                    <Route element={<ClientRoutes isLogged={isLogged} auth={auth} />}>
                        <Route path="/AddJob" element={<ClientAddJob />} />
                    </Route>
                    <Route element={<ClientRoutes isLogged={isLogged} auth={auth} />}>
                        <Route path="/Orders" element={<ClientOrders />} />
                    </Route>

                   //AdminRoutes
                    <Route element={<AdminRoutes isLogged={isLogged} auth={auth} />}>
                        <Route path="/admindashboard" element={<AdminDashboard />} />
                    </Route>

                    {!isLogged &&
                        <>
                            <Route path="/Login" element={<LoginScreens />} />
                            <Route path="/SignUp" element={<SignUp />} />
                        </>
                    }

                    <Route path="/product/:DocId/:Type" element={<Product />} />
                    <Route path="/Payments" element={<Payments />} />

                    <Route path="*" element={isLogged == 1 || isLogged == 0 ? <Navigate to="/" replace />
                        : (isLogged === 'super' ? <Navigate to="/admindashboard" replace />
                            : <Navigate to="/" replace />)} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default MyRoutes;