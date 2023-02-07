import React, { useContext,useEffect } from "react";
import { CButton,CContainer, CCol, CRow } from "@coreui/react";

import  ProductCompareBasket  from "./ProductCompareBasket";

import { compareContext } from "./ProductList"
import { ProductItem } from "./ProductItem";

const CompareListContainer = () => {
      const liStyle = { backgroundColor:'#ccc', width:'100%',  bottom: 0} as React.CSSProperties;

  ////////// position: 'fixed'///////////////////////////////////////////////////////////////////////////////////
    const { productcompareBasket,setProductCompareBasket } = useContext(compareContext);
	

  /////////////////////////////////////////////////////////////////////////////////////////////
  const handleClick=(productId:number)=>{
	  //e.preventDefault();
	const filteredArray = productcompareBasket.filter(prd => prd.id !== productId); 
	setProductCompareBasket(filteredArray)	  
  }
  /////////////////////////////////////////////////////////////////////////////////////////////
  return (
	<CContainer style={liStyle}>	
	<CRow className="align-items-start">
	{productcompareBasket &&
        productcompareBasket.map((product: ProductItem, index) => (
		 <CCol sm={6} lg={2} key={index}>
            <>
			<ProductCompareBasket product={product} onClick={handleClick}/>
            </>
          </CCol>
        ))}
	</CRow>	
	</CContainer>
  );
};

export default CompareListContainer;
