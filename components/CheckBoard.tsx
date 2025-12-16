import { Button, TouchableOpacity, View } from "react-native"
import Pawn from "./Pawn"
import React from "react"



const CheckBoard = () => {

    let p = []
    const [pawns, setPawns]: any = React.useState([])
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


    for (let i = 0; i < 12; i++) {
        pawns.push(i);
    }
    for (let i = 12; i < 52; i++) {
        pawns.push(null);
    }
    for (let i = 64; i > 52; i--) {
        pawns.push(i - 1);
    }


    const pawnInd = (key: number) => {
        let result = pawns.filter((el: any) => el === key)
        return result
    }
    const blackInd = (key: number) => {
        let t = [];
        let result = [];
        for (let i = 0; i < pawns.length; i++) {
            if (p[i] === "black") {
                t.push(i)
            }
        }

        for (let i = 0; i < pawns.length; i++) {
                result.push(t[pawns[i]])
        }

        return result.filter(num => num === key);
    }

    return (
        <View>
            <TouchableOpacity
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
                                    display: "flex",
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                {pawnInd(key) ? <Pawn keyNum={blackInd(key)}></Pawn> : <div style={{ display: "none" }}></div>}
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
        </View>

    )
}

export default CheckBoard
