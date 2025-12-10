import { TouchableOpacity, View } from "react-native"

interface PawnProps {
    keyNum: number;

}

const Pawn = (props: PawnProps) => {

    return (
        <TouchableOpacity
            style={{
                backgroundColor: "black",
                borderRadius: 50,
                borderWidth: 5,
                shadowColor: "grey",
                borderColor: "grey"
            }}
        >
            <View
            style={{
                backgroundColor: "white"
            }}
            >
                {props.keyNum}
            </View>

        </TouchableOpacity>
    )
}



export default Pawn