import React, { useEffect,createContext,useState } from "react";
import ProductCard from "./ProductCard";
import { ProductItem } from "./ProductItem";
import CompareListContainer from "./CompareListContainer";
import { CButton,CContainer, CCol, CRow } from "@coreui/react";
import useContextService from "./service/useContextService";


interface Data {
  productcompareBasket: Array<ProductItem>;
  setProductCompareBasket: any;
}

export const compareContext = createContext<Data>({ productcompareBasket:[],setProductCompareBasket:null});

const ProductList = () => {
	
  let { dataAll, loading, error, fetchProductItem_list, productItem_list } =
    useContextService({
      method: "GET",
      url: "/random",
      // params: {
      //   title: '?page=1&sort=26',
      // },
    });
	


  /////////////////////////////////////////////////////////////////////////////////////////////
  const [productcompareBasket, setProductCompareBasket] = useState<ProductItem[]>([]);
  /////////////////////////////////////////////////////////////////////////////////////////////
  // set the context values
  // const contextValue = {
	//    productcompareBasket, 
	//setProductCompareBasket

  // }
  /////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    fetchProductItem_list();
    if (productItem_list)
      // setTutorials(dataAll)
      console.log(productItem_list);
    // } else {
    //   setTutorials([])
    // }
  }, [productItem_list]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  useEffect(() => {
    if (loading) {
      console.log("retrieving data...");
    }
  }, [loading]);
  /////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <compareContext.Provider value={{productcompareBasket:productcompareBasket,setProductCompareBasket:setProductCompareBasket}}>
	<CContainer>
	<CRow className="align-items-start">
      {productItem_list &&
        productItem_list.map((product: ProductItem, index) => (
          
		  <CCol sm={6} lg={3} key={index}>
            <>
              <ProductCard  {...product} ></ProductCard>
			  <CButton color="warning" onClick={() => setProductCompareBasket([...productcompareBasket,product ])}>compare</CButton>
			</>
          </CCol>
        ))}
	</CRow>	
	
	</CContainer>
		 
	<CompareListContainer />
    </compareContext.Provider>
  );
};

export default ProductList;
