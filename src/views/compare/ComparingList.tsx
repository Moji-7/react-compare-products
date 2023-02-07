import { FC, ReactElement, useEffect, useState } from "react";
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CListGroup,
  CListGroupItem,
  CContainer,
  CCol,
  CRow,
  CButton,
} from "@coreui/react";
import ReactImg from "../../assets/images/react.jpg";
import { useLocation } from "react-router-dom";

import { ProductItem } from "./ProductItem";
import ProductCard from "./ProductCard";
import CompareAddProduct from "./CompareAddProduct";

const ComparingList: FC<ProductItem> = (props: ProductItem): JSX.Element => {
  const {state} = useLocation();
  
  return (
    <>
      <CContainer>
        <CRow className="align-items-start">
		 <CCol lg={10}>
          <CRow className="align-items-start">
          {state &&
            state.map(
              (product: ProductItem, index: number) => (
                <CCol sm={6} lg={3} key={index}>
                  <>
                    <ProductCard {...product}></ProductCard>
                    {/* <CButton color="warning" onClick={() => setProductCompareBasket([...productcompareBasket,product ])}>compare</CButton> */}
                  </>
                </CCol>
              )
            )}
			  </CRow>
        </CCol>
        <CCol lg={2}>
          <CompareAddProduct />
        </CCol>
        </CRow>
      </CContainer>
    </>
  );
};
export default ComparingList;
