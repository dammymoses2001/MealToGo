import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantsInfoCard } from "../components/restaurants-info-card.components";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeView } from "../../../components/utilies/safe-area.component";

const SearchContainer = styled.View`
  justify-content: center;
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 15 },
})`
  /* margin-bottom: ${(props) => props.theme.space[5]}; */
`;
export const RestaurantsScreen = () => {
  return (
    <SafeView>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>

      <RestaurantsList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantsInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => {
          item.name;
        }}
      />
    </SafeView>
  );
};

{
  /* <FlatList 
  data={[{name: 'a'}, {name: 'b'}]} 
  renderItem={
    ({item}) => <Text>{item.name}</Text>
  } 
  keyExtractor={(item, index) => index.toString()}
/> */
}
