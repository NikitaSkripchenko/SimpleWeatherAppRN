import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native';
import Forecast from './Forecast';
import OpenMap from "./OpenMap";

class Weather extends React.Component {
    state = {
        zip: "",
        forecast: null,

    };
    _handleTextChange = event => {
        let zip = event.nativeEvent.text;
        OpenMap.fetchForecast(zip).then(forecast => {
            console.log(forecast);
            this.setState({forecast: forecast});
        });
    };

    render() {
        let content = null;
        if(this.state.forecast !== null){
            content = (<Forecast
                main = {this.state.forecast.main}
                description = {this.state.forecast.description}
                temp = {this.state.forecast.temp}
            />)
        }
        return(
                <ImageBackground
                    source = {require("./../assets/ios.png")}
                    resizeMode = 'cover'
                    style = {styles.wrapper}>
                    <View style = {styles.container}>
                        <Text style = {styles.welcome}>
                            Current weather for: {this.state.zip}
                        </Text>

                        <TextInput
                            underlineColorAndroid = "transparent"
                            style = {styles.input}
                            onSubmitEditing ={this._handleTextChange} />
                        {content}
                    </View>

                </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
    },
    container:{
        alignItems: 'center',
        width: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        color: 'white'
    },
    input: {
        color: 'white',
        fontSize: 20,
        borderWidth: 2,
        padding: 2,
        height: 40,
        width: 100,
        textAlign: "center",
        borderColor: 'white',
    },
    backdrop: {
        flex: 1,
        flexDirection: 'column',
    },
});
export default Weather;
