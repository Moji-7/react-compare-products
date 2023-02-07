import React, { useEffect,useRef, createContext, useState, useCallback } from "react";
import ProductCard from "./ProductCard";
import CompareAddButton from "./CompareAddButton";
import { ProductItem } from "./ProductItem";
import CompareListContainer from "./CompareListContainer";
import { CButton, CContainer, CCol, CRow } from "@coreui/react";
import useContextService from "./service/useContextService";
import { ButtonAddTocompare,ButtonAddedTocompare } from './styles/compare';

interface Data {
  productcompareBasket: Array<ProductItem>;
  setProductCompareBasket: any;
  compareRemoveProduct:number//ProductItem | null;
  setCompareRemoveProduct: any;
}

export const compareContext = createContext<Data>({
  productcompareBasket: [],
  setProductCompareBasket: null,
 compareRemoveProduct:0,
 setCompareRemoveProduct: null
});

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
  const [compareRemoveProduct, setCompareRemoveProduct] = useState<number>(0);
  /////////////////////////////////////////////////////////////////////////////////////////////
  const compareSelectButton = (product:ProductItem) => {
	  
	   if (!productcompareBasket.includes(product)) 
        setProductCompareBasket([...productcompareBasket, product]);
   
	   if (productcompareBasket.includes(product))
		 setProductCompareBasket(productcompareBasket.filter(x => x.id !== product.id));

  };
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
    useEffect(() => {
      console.log("retrieving data...");
  }, [productcompareBasket]);
  /////////////////////////////////////////////////////////////////////////////////////////////
	useEffect(() => {
		if(compareRemoveProduct){
      console.log("compareRemoveProduct is : "+ compareRemoveProduct);
	 // setCompareRemoveProduct(0)
		}
  }, [compareRemoveProduct]);  
  /////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <compareContext.Provider
      value={{
        productcompareBasket: productcompareBasket,
        setProductCompareBasket: setProductCompareBasket,
		compareRemoveProduct:compareRemoveProduct, 
		setCompareRemoveProduct:setCompareRemoveProduct
		
      }}
    >
      <CContainer>
        <CRow className="align-items-start">
          {productItem_list &&
            productItem_list.map((product: ProductItem, index) => (
              <CCol sm={6} lg={3} key={index}>
                <>
                  <ProductCard {...product} key={index}></ProductCard>
				  <CompareAddButton  product={product} onClick={compareSelectButton} key={product.id}  ></CompareAddButton>
                </>
				
              </CCol>
            ))}
        </CRow>
      </CContainer>

      {productcompareBasket.length>0 ? <CompareListContainer  />: null}
    </compareContext.Provider>
  );
};

export default ProductList;
