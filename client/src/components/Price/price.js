import React from "react";
import { useSelector } from "react-redux";
import calcPriceFromLatLng, {
  currencyToString,
} from "../../resources/utils/price";

import { selectDestination, selectPickUp } from "../../state/maps.slice";
import {
  PriceContainer,
  PriceSymbol,
  PriceAmount,
  PriceWrapper,
} from "./price.elements";

const Price = () => {
  const pickup = useSelector(selectPickUp);
  const destination = useSelector(selectDestination);

  let content;

  if (pickup && destination) {
    content = (
      <PriceWrapper>
        <PriceContainer>
          <PriceSymbol>Ksh:</PriceSymbol>
          <PriceAmount>
            {currencyToString(calcPriceFromLatLng(pickup, destination))}
          </PriceAmount>
        </PriceContainer>
      </PriceWrapper>
    );
  } else {
    content = null;
  }

  return <div>{content}</div>;
};

export default Price;
