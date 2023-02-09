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
			console.log("in CompareAddButton COMPONENT; compareRemoveProduct is  : "+ compareRemoveProduct+" and inputRef :"+inputRef.current?.getAttribute('data-productId'));
			if(Number(inputRef.current?.getAttribute('data-productId'))== compareRemoveProduct)
				setIsAddToCompare(!isAddToCompare)
			}
			setCompareRemoveProduct(0)
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
<>
        {(!isAddToCompare  ) ? ( 
			<ButtonAddTocompare color='warning'   ref={inputRef} data-productId={props.product.id} onClick={ () => compareSelectButton(props.product.id)}>compare</ButtonAddTocompare>
			) : (
			<ButtonAddedTocompare color='warning' ref={inputRef} data-productId={props.product.id} onClick={ () => compareSelectButton(props.product.id)}>remove compare</ButtonAddedTocompare>
			)}
     </>
  );
};

export default CompareAddButton;
