// App.js
import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import DragAndDrop from "volkeno-react-native-drag-drop";



export default function App() {
  const [items, setItems] = React.useState([
    { id: 1, text: "Test item 1" },
    { id: 2, text: "Test item 2" },
    { id: 3, text: "Test item 3" },
    { id: 4, text: "Test item 4" },
  ]);
  const [zones, setZones] = React.useState([
    {
      id: 1,
      text: "Test zone 1",
      items: [{ id: 5, text: "Test existing item 5" }],
    },
    {
      id: 2,
      text: "Test zone 2",
    },
  ]);

  return ( 
    <View className="flex-1 items-center justify-center bg-white">
      <DragAndDrop
        
        contentContainerStyle={styles.contentContainerStyle}
        itemKeyExtractor={(item) => item.id}
        zoneKeyExtractor={(zone) => zone.id}
        zones={zones}
        items={items}
        itemsContainerStyle={styles.itemsContainerStyle}
        zonesContainerStyle={styles.zonesContainerStyle}
        onMaj={(zones, items) => {
          setItems(items);
          setZones(zones);
        }}
        itemsInZoneStyle={styles.itemsInZoneStyle}
        renderItem={(item) => {
          return (
            <View className="text-black ">
              <Text className="text-black ">{item.text}</Text>
            </View>
          );
        }}
        renderZone={(zone, children, hover) => {
          return (
            <View
              style={{
                ...styles.dragZoneStyle,
                backgroundColor: hover ? "#E2E2E2" : "#FFF",
              }}
            >
              <Text style={styles.dragZoneTextStyle}>{zone.text}</Text>
              {children}
            </View>
          );
        }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemsInZoneStyle: {
    width: "100%",
  },
  contentContainerStyle: {
    padding: 20,
    paddingTop: 40,
  },
  itemsContainerStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  zonesContainerStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  dragItemStyle: {
    borderColor: "#F39200",
    borderWidth: 1,
    width: "47%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    backgroundColor: "#F5F5F5",
    padding: 10,
  },
  dragItemTextStyle: {
    color: "#011F3B",
    fontWeight: "700",
    textAlign: "center",
  },
  dragZoneStyle: {
    borderColor: "#F39200",
    borderWidth: 1,
    width: "47%",
    padding: 15,
    minHeight: 130,
    marginVertical: 15,
  },
  dragZoneTextStyle: {
    position: "absolute",
    opacity: 0.2,
    zIndex: 0,
    alignSelf: "center",
    top: "50%",
  },
});