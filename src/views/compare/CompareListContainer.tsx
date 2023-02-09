import React, { useContext, useEffect,useState } from "react";
import { CButton, CContainer, CCol, CRow, CAlert } from "@coreui/react";

import CompareBasketProductItem from "./CompareBasketProductItem";

import { compareContext } from "./ProductList";
import { ProductItem } from "./ProductItem";

//import { useTransition, animated } from "react-spring";
import { useNavigate } from "react-router-dom";

const CompareListContainer = (props:any) => {
  const liStyle = {
    backgroundColor: "#ccc",
    width: "100%",
    bottom: 0,
  } as React.CSSProperties;

  ////////// position: 'fixed'///////////////////////////////////////////////////////////////////////////////////
  const { productcompareBasket, setProductCompareBasket, setCompareRemoveProduct } =useContext(compareContext);
  //const transitions = useTransition(productcompareBasket, item => item.key, {
   // from: { opacity: 0 },
  //  enter: { opacity: 1 },
  //  leave: { opacity: 0 },
 // });
  /////////////////////////////////////////////////////////////////////////////////////////////
  const [compareBasketCount,setCompareBasketCount]=useState(0);
  useEffect(()=>{
	  setCompareBasketCount(productcompareBasket.length)
  },[productcompareBasket])
  /////////////////////////////////////////////////////////////////////////////////////////////
  const handleBasketRemoveClick = (productId: number) => {
    //e.preventDefault();
	setCompareRemoveProduct(productId)
    const filteredArray = productcompareBasket.filter(
      (prd) => prd.id !== productId
    );
    setProductCompareBasket(filteredArray);
  };
  /////////////////////////////////////////////////////////////////////////////////////////////
  const handleBasketRemoveAll=()=>{
	  setProductCompareBasket([])
  }
  /////////////////////////////////////////////////////////////////////////////////////////////
  const navigate = useNavigate();
  const toComponentB = () => {
    navigate("/ComparingList", { state: productcompareBasket });
  };
  /////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <CContainer style={liStyle}>
      <CRow className="align-items-start">
        <CCol lg={9}>
          <CRow className="align-items-start">
		  {/* {transitions.map(({ product: ProductItem, props, key }) => (
        <animated.div key={key} style={props}>
           <CompareBasketProductItem
                      product={product}
                      onClick={handleBasketRemoveClick}
                    />
        </animated.div>*/}
            {productcompareBasket &&
              productcompareBasket.map((product: ProductItem, index) => (
                <CCol lg={3} key={index}>
                  <>
                    <CompareBasketProductItem
                      product={product}
                      onClick={handleBasketRemoveClick}
                    />
                  </>
                </CCol>
              ))}
          </CRow>
        </CCol>
        <CCol lg={3}>
          <CAlert color="danger">
            <CButton
              color="warning"
              shape="rounded-pill"
              onClick={() => {
                toComponentB();
              }}
            >
              Compare ({compareBasketCount})
            </CButton>
			
          </CAlert>
		   <CButton
               color="link"
              onClick={() => {
                handleBasketRemoveAll();
              }}>clear all
            </CButton>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default CompareListContainer;
