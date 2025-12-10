import { TouchableOpacity, View } from "react-native"

interface PawnProps{
keyNum: number;

}

const Pawn = (props: PawnProps) => {

    return(
        <TouchableOpacity
        style={{

            width: 50,
            height: 50,
            backgroundColor: "gray",
            borderRadius: 50,
            shadowColor: "black",
            borderColor: "black"
        }}  
        >
            {props.keyNum}
        </TouchableOpacity>
    )
} 



export default Pawn