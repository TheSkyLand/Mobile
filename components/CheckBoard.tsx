import { Button, TouchableOpacity, View } from "react-native"
import Pawn from "./Pawn"




const CheckBoard = () => {
    let p = []

    let white = 12
    let black = 12

    let pawn = []
    pawn.length = 64;



    let row = 0;
    for (let i = 0; i < 64; i++) {
        if (i % 8 == 0) {
            row++;
        }
        if (row % 2 == 1) {
            if (i % 2 === 0) {
                p.push("white")

            }
            else if (i % 2 === 1) {
                p.push("black")
            }
        }
        else if (row % 2 == 0) {
            if (i % 2 === 0) {
                p.push("black")

            }
            else if (i % 2 === 1) {
                p.push("white")
            }
        }
    }

    function GameStart(p = []) {
        for (let i = 64; i >= 0; i--) {
            if (p[i] == "black") {
                pawn.push("white")
                white--;
            }
        }

        for (let i = 0; i < 64; i++) {
            if (p[i] == "black") {
                pawn.push("black")
                black--;
            }
        }
    }

    const GameFunc = () => {

    }

    return (
        <View>
            <TouchableOpacity
                onPress={() => GameStart()}
            >
                Start Game
            </TouchableOpacity>
            <View>
                <View
                    style={{
                        width: 800,
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "row",
                        margin: 100,
                    }}
                >

                    {p.map((index, key) => (
                        <View
                            style={{
                                backgroundColor: `${index}`,
                                borderColor: "black",
                                borderWidth: 1,
                                width: 100,
                                height: 100,
                            }}
                        >

                            <TouchableOpacity
                                onPress={() => GameFunc()}
                                style={{
                                    display: "flex",
                                    width: 75,
                                    height: 75,
                                }}
                            >
                                <Pawn
                                >

                                </Pawn>
                            </TouchableOpacity>
                        </View>
                    ))}

                </View>
            </View>
        </View>

    )
}

export default CheckBoard