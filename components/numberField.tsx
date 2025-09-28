import * as React from 'react'
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native';


type numberfieldProps = {
    inputStr: string
}


export default function NumberField(props: numberfieldProps) 
{
    return <TextInput
    style={styles.box}
        value={props.inputStr}
    />

}

const styles = StyleSheet.create({
    box:{
        fontSize:30,
        height:50
    }
})