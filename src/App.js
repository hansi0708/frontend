import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Welcome from "./components/Welcome/Welcome";
import Kundli from "./components/Kundli/Kundli";
import Booking from "./components/Booking/Booking";
import Store from "./components/Store/Store";
import Horoscope from "./components/Horoscope/Horoscope";
import Authentication from "./components/Authentication/Authentication";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/authenticate" element={<Authentication />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/kundli" element={<Kundli />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/store" element={<Store />} />
          <Route path="/horoscope" element={<Horoscope />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// import React, { useState } from 'react';
// import { Box, Container, Typography } from '@mui/material';
// import TabSliderComponent from './SliderComponent';
// import LoginComponent from './LoginComponent';
// import SignupComponent from './SignupComponent';

// const App = () => {
//   const [tabIndex, setTabIndex] = useState(0);

//   const handleTabChange = (index) => {
//     setTabIndex(index);
//   };

//   return (
//     <Container maxWidth="md">
//       <Box my={4}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Welcome to our App
//         </Typography>
//         <TabSliderComponent handleTabChange={handleTabChange} />
//         {tabIndex === 0 ? <LoginComponent /> : <SignupComponent />}
//       </Box>
//     </Container>
//   );
// };

// export default App;
// \
