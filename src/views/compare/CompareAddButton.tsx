import React, { FC,useContext,useRef, useEffect,useState } from "react";
import { CButton, CContainer, CCol, CRow, CAlert } from "@coreui/react";

import { ButtonAddTocompare,ButtonAddedTocompare } from './styles/compare';
import { compareContext } from "./ProductList";
import { ProductItem } from "./ProductItem";

type PropsType = {
  product: ProductItem;
  onClick: (e: ProductItem) => void;
};

const CompareAddButton: FC<PropsType> = (props): JSX.Element => {
	  const {compareRemoveProduct,setCompareRemoveProduct } =useContext(compareContext);

  const [isAddToCompare, setIsAddToCompare] = useState(false);
  //const [setCompareRemoveProduct] = useContext(compareContext);//useState<ProductItem[]>([]);
    const compareSelectButton = (id:number) => {
		props.onClick(props.product);
		setIsAddToCompare(!isAddToCompare);
	//setProductCompareBasket([...productcompareBasket,product ])
  };
  /////////////////////////////////////////////////////////////////////////////////////////////
	useEffect(() => {
			if(compareRemoveProduct){
				//setIsAddToCompare(!isAddToCompare);
			console.log("compareRemoveProduct is aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa : "+ compareRemoveProduct+" inputRef :"+inputRef.current);
			//setCompareRemoveProduct(0)			  
			  //ref.current.id=compareRemoveProduct
			// compareSelectButton(compareRemoveProduct.id);
			}
   },[compareRemoveProduct]);  
  /////////////////////////////////////////////////////////////////////////////////////////////
  
  const inputRef = useRef<HTMLButtonElement| HTMLAnchorElement>(null)
  useEffect(() => { 
  //debugger
    if(isAddToCompare)
     console.log("MOJIIIIIIIIIIIIIIII : "+ inputRef.current); 
  //ref.current = props.product.id; 
  }, [isAddToCompare]);



  /////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <CContainer >
      <CRow className="align-items-start">
        <CCol lg={12}>
		sss=product id ={props.product.id} and closed is {compareRemoveProduct} 
		
        {(!isAddToCompare  ) ? ( 
			<ButtonAddTocompare  ref={inputRef} value={props.product.id} onClick={ () => compareSelectButton(props.product.id)}>add!</ButtonAddTocompare>
			) : (
			<ButtonAddedTocompare ref={inputRef} value={props.product.id} onClick={ () => compareSelectButton(props.product.id)}>remove</ButtonAddedTocompare>
			)}
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default CompareAddButton;
