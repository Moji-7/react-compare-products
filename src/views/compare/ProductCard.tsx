import { FC, ReactElement, useEffect, useState } from "react";
import { CCard,CCardImage,CCardBody,CCardTitle,CCardText,CListGroup,CListGroupItem,CCardLink, CCol, CRow,CButton } from '@coreui/react'
import ReactImg from '../../assets/images/react.jpg'
import { ProductItem } from "./ProductItem";

const ProductCard: FC<ProductItem> = (props: ProductItem): JSX.Element => {
  return (
    <>
      <CCard style={{ width: "18rem" }} key={props.id}>
        <CCardImage orientation="top" src={ReactImg} />
        <CCardBody>{props.category}
          <CCardTitle>{props.name}</CCardTitle>
          <CCardText>
		  {props.description}
          </CCardText>
        </CCardBody>
        <CListGroup flush>
          <CListGroupItem>{props.max_Total_per_Path}</CListGroupItem>
          <CListGroupItem>{props.max_spindle_axes} in</CListGroupItem>
          <CListGroupItem>{props.max_path}</CListGroupItem>
        </CListGroup>
        <CCardBody>
		  <CButton color="dark" variant="outline">view product</CButton>
        </CCardBody>
      </CCard>
      {/* <p>A Clicks: {clickA}</p>
      <p>B Clicks: {clickB}</p>
      <button onClick={() => setClickA(clickA + 1)}>Button A</button>
      <button onClick={() => setClickB(clickB + 1)}>Button B</button>
      <p id="click-a"></p> */}
    </>
  );
};
export default ProductCard;
