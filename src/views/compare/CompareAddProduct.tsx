import React, { FC,useContext,useRef, useEffect,useState } from "react";
import { CButton, CContainer, CCol, CRow, CAlert } from "@coreui/react";

import { ButtonAddTocompare,ButtonAddedTocompare } from './styles/compare';
import { compareContext } from "./ProductList";
import { ProductItem } from "./ProductItem";



const CompareAddProduct: FC<any> = (): JSX.Element => {

  const handleCompareAddProduct = () => {
    //navigate("/ComparingList", { state: productcompareBasket });
  };

  return (
    <CContainer >
      <CRow className="align-items-start">
        <CCol lg={12}>
		
		   <CAlert color="danger">
            <CButton
              color="dark"
              shape="rounded-pill"
              onClick={() => {
                handleCompareAddProduct();
              }}
            >
              add to compare
            </CButton>
          </CAlert>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default CompareAddProduct;
