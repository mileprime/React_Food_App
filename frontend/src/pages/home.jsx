import React, { useState, Profiler, Suspense } from "react";
import "./styling/home.css";
import Header from "./sharedComponents/header";
import Footer from "./sharedComponents/footer";
import CopyRight from "./sharedComponents/copyRight";
import AppSection from "./sharedComponents/appSection";
import useFoodList from "../hooks/foodList";
import HomeHeader from "./homeHeader";
import HomeFilter from "./homeFilter";
import Login from "./login";
import {Modal, Button} from 'react-bootstrap';

import FoodCard from "./sharedComponents/FoodCard";
const LazyFooter = React.lazy(() => import("./sharedComponents/footer"));

function Home() {
  const { data, isLoading } = useFoodList();
  console.log(data, isLoading);
  const [show, setShow] = useState(false);

  const [category, setCategory] = useState("All");
  console.log(data, isLoading, "dfghjk");
  const callOnRender = (id, phase, actualDuration, startTime) => {
    console.log(id, phase, actualDuration, startTime, "profile");
  };

  return (
    <>
    <Header />
      <Profiler id="home" onRender={callOnRender}>
        {/* {!isLoading && data.map((food) => <div>{food.name}</div>)} */}
        <HomeHeader setCategory={setCategory} />
        <div className="main-layout">
          <HomeFilter />
          <section>
            <p className="places-text">
              <span className="color-main">{data.length}</span> Places to Order
            </p>
            <div className="search-container">
              <img src="./images/fi-rr-search.svg" />
              <input type="text" />
            </div>
            <div className="cards-container">
              {/* <!-- food card --> */}
              {data.map((item) => {
                if (category == "All" || category == item.category) {
                  return <FoodCard key={item._id} data={item} setShow={setShow}  />;
                }
              })}
            </div>
          </section>
        </div>

        
        <AppSection />
        <Suspense fallback={() => <div>Loading the footer!!!</div>}>
          <LazyFooter />
        </Suspense>
        <CopyRight />
      </Profiler>
      <Modal show={show} onHide={
        ()=>setShow(false)
      }>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login setShow={setShow} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={  ()=>setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={  ()=>setShow(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </>
  );
}

export default Home;
