import React, { FC,useEffect } from "react";
import { CButton,CContainer, CCol, CRow,CCardImage } from "@coreui/react";
import { ProductItem } from "./ProductItem";
import ReactImg from '../../assets/images/react.jpg'

type PropsType = {
  product: ProductItem;
  onClick: (e: number) => void;
};

const ProductCompareBasket: FC<PropsType> = (props): JSX.Element => {

  /////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
	<CContainer >
	<CRow  className="align-items-start">
		<CCol lg={4} className="px-0" ><CCardImage orientation="top" src={ReactImg} width="166px" height="110px"/></CCol>
		<CCol lg={6}>
			<CRow className="align-items-start">
				<CCol>{props.product.category} </CCol>
			</CRow>
			<CRow className="align-items-start">
				<CCol>{props.product.name} </CCol>
			</CRow>
			<CRow className="">
			<CCol >      
				<CRow>
				   <CCol xs={2}>{props.product.max_Total_per_Path}</CCol>
				  <CCol xs={6}>{props.product.max_spindle_axes} </CCol>
				  {/*<CCol xs={3}>{props.product.max_path}</CCol> */}
				</CRow>
		    </CCol>
		    </CRow>
		</CCol>
		<CCol lg={1}><CButton color="link"  onClick={() => {props.onClick(props.product.id)}} >X</CButton></CCol>
    </CRow>
	</CContainer>
    </>
  );
};

export default ProductCompareBasket;
