import { useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [A, setA] = useState('')
  const Result = Number(A)

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div> result: {A}</div>
      <input value={A} onChange={e => setA(e.target.value)} type="number"></input>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <button onClick={() => setA(Result + 10)}></button>
    </View>
  );
}
