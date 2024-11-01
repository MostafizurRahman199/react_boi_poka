import React from "react";
import Navbar from "../../Layout/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../../Layout/Footer/Footer";
import MyProvider from "../../utils/MyProvider";

export default function Root() {
  const navigation = useNavigation();
  return (
    <MyProvider>
      <Navbar />
      {navigation.state === 'loading' ? (
        <p>Loading...</p>
      ) : (
        
        <Outlet />
      )}
      <Footer />
    </MyProvider>
  );
}
