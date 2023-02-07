import React, { useContext, useEffect,useState } from "react";
import { CButton, CContainer, CCol, CRow, CAlert } from "@coreui/react";

import CompareBasketProductItem from "./CompareBasketProductItem";

import { compareContext } from "./ProductList";
import { ProductItem } from "./ProductItem";
import { useNavigate } from "react-router-dom";

const CompareListContainer = (props:any) => {
  const liStyle = {
    backgroundColor: "#ccc",
    width: "100%",
    bottom: 0,
  } as React.CSSProperties;

  ////////// position: 'fixed'///////////////////////////////////////////////////////////////////////////////////
  const { productcompareBasket, setProductCompareBasket, setCompareRemoveProduct } =useContext(compareContext);

  /////////////////////////////////////////////////////////////////////////////////////////////
  const handlebasketItemClick = (productId: number) => {
    //e.preventDefault();
	setCompareRemoveProduct(productId)
    const filteredArray = productcompareBasket.filter(
      (prd) => prd.id !== productId
    );
    setProductCompareBasket(filteredArray);
  };
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
            {productcompareBasket &&
              productcompareBasket.map((product: ProductItem, index) => (
                <CCol lg={3} key={index}>
                  <>
                    <CompareBasketProductItem
                      product={product}
                      onClick={handlebasketItemClick}
                    />
                  </>
                </CCol>
              ))}
          </CRow>
        </CCol>
        <CCol lg={3}>
          <CAlert color="danger">
            <CButton
              color="dark"
              shape="rounded-pill"
              onClick={() => {
                toComponentB();
              }}
            >
              Compare
            </CButton>
          </CAlert>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default CompareListContainer;
