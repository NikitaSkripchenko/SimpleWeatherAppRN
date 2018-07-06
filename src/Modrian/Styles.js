import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    parent:{
        flexDirection: 'column',
        position: 'absolute',
        top: 30,
        left: 0,
        right: 0,
        bottom: 0,
    },
    base:{
        borderWidth: 5, borderColor: 'black'
    },
    topBlock:{
        flex: 5, flexDirection: 'row'
    },
    leftCol:{
        flex: 2, flexDirection: 'column'
    },
    one:{
        flex: 1,
    },
    two:{
        flex: 1,
    },
    three:{
        flex: 5,
        backgroundColor: 'red'
    },
    bottomBlock:{
        flex: 2,
        flexDirection: 'row'
    },
    four:{
        flex: 3,
        backgroundColor: 'blue'
    },
    five:{
        flex: 6,
        backgroundColor: 'white'
    },
    six:{
        flex: 1,
        backgroundColor: 'white'
    },
    seven:{
        flex: 1,
        backgroundColor: 'yellow'
    },
    rightCol:{
        flex: 2,
    },
    child:{
        position: 'absolute',
        bottom: 80,
        right: 8,
        flex: 1,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: "blue"
    },
});

export default styles;
