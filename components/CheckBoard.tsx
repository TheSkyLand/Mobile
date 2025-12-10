import { Button, TouchableOpacity, View } from "react-native"
import Pawn from "./Pawn"
import React from "react"



const CheckBoard = () => {
    const [p, setP]: any = React.useState([])
    const [pawns, setPawns]: any = React.useState([])
    let row = 0;

    let black = p.filter((el: any) => el === "black")
    let white = p.filter((el: any) => el === "white")

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

    for (let i = 0; i < 12; i++) {

        pawns.push(white[i]);

    }
    for (let i = 13; i < 52; i++) {
        pawns.push(" ");
    }
    for (let i = 64; i > 52; i--) {

        pawns.push(black[i]);

    }

    const pawnInd = (key: number) => {
        let result = pawns.filter((el: number) => el === key)
        return result
    }

    const GameStart = () => {
        console.log(pawns)
    }


    return (
        <View>
            <TouchableOpacity
                onPress={() => GameStart()}
            >
                Start Game
            </TouchableOpacity>
            <View
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <View
                    style={{
                        width: 800,
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "row",
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
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                {pawnInd(key) ? <Pawn keyNum={pawnInd(key)}></Pawn> : null}
                            </TouchableOpacity>
                        </View>
                    ))}

                </View>
            </View>
        </View>

    )
}

export default CheckBoard