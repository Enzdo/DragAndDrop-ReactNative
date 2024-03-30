// App.js
import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import DragAndDrop from "volkeno-react-native-drag-drop";



export default function App() {
  const [items, setItems] = React.useState([
    { id: 1, text: "Faire le code" },
    { id: 2, text: "Faire le design" },
    { id: 3, text: "Faire la 3D" },
    { id: 4, text: "Faire la 2D" },
  ]);
  const [zones, setZones] = React.useState([
    {
      id: 1,
      text: "A faire",
      items: [{ id: 5, text: "Faire la 1D" }],
    },
    {
      id: 2,
      text: "Fait",
    },
  ]);

  return ( 
    <View className="flex-1 items-center justify-center bg-white">
      <View className=" h-fit pt-20 w-full flex flex-row justify-center pb-10 drop-shadow-lg border-b-black border-b-2">
        <Text className="text-black text-2xl font-semibold">To Do list : </Text>
      </View>
      <DragAndDrop
        className="bg-white w-full flex flex-col    "
        contentContainerStyle={styles.contentContainerStyle}
        itemKeyExtractor={(item) => item.id}
        zoneKeyExtractor={(zone) => zone.id}
        zones={zones}
        items={items}
        
        onMaj={(zones, items) => {
          setItems(items);
          setZones(zones);
        }}
        itemsInZoneStyle={styles.itemsInZoneStyle}
        renderItem={(item) => {
          return (
            <View className="text-black bg-slate-50 py-4 px-4 my-2 border-1 border-slate-500 ">
              <Text className="text-black ">{item.text}</Text>
            </View>
          );
        }}
        renderZone={(zone, children, hover) => {
          return (
            <View
             className="w-full flex flex-col border-2 border-slate-600 rounded-lg"
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

  dragItemStyle: {
    borderColor: "#F39200",
    borderWidth: 1,
    width: "47%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    backgroundColor: "#ffffff",
    padding: 10,
  },
  dragItemTextStyle: {
    color: "#ffffff",
    fontWeight: "700",
    textAlign: "center",
  },
  dragZoneStyle: {
    borderColor: "#F39200",
    borderWidth: 1,
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