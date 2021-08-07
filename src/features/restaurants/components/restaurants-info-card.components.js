import React from "react";
import { View, Image } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import openIcon from "../../../../assets/open";

import {
  Icon,
  RestaurantsCard,
  RestaurantsCardCover,
  Rating,
  Address,
  Section,
  SectionEnd,
  Info,
} from "../components/restaurants-info-card.style";

export const RestaurantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = "isName Something",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.pexels.com/photos/2923034/pexels-photo-2923034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ],
    address = "100, random street",
    isOpenNow = true,
    rating = 4.5,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  // console.log(ratingArray);
  return (
    <RestaurantsCard elevation={5}>
      <RestaurantsCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((i, index) => (
              <SvgXml key={index} width="20" height="20" xml={star} />
            ))}
          </Rating>
          <SectionEnd>
            <Text variant="error">CLOSED TEMPORARILY</Text>
            <Spacer position="left" size="medium">
              {isOpenNow && <SvgXml width="20" height="20" xml={openIcon} />}
            </Spacer>
            <Spacer position="left" size="medium">
              <Icon
                source={{
                  uri: icon,
                }}
              />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantsCard>
  );
};
