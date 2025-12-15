import { TouchableOpacity, View } from "react-native"

interface PawnProps {
    keyNum: number[];
}

const Pawn = (props: PawnProps) => {
    const test = (inpt: any) => {
        console.log(inpt);
    }
    return (
        <TouchableOpacity
            onPress={() => test(props.keyNum)}
            style={{
                width: "100%",
                height: "100%"
            }}
        >
            <View
            style={{
                backgroundColor: "gray"
            }}
            >
                {props.keyNum}
            </View>
        </TouchableOpacity>
    )
}



export default Pawn
