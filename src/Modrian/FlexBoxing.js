import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import styles from './Styles';

export default class FlexBoxing extends Component{
    render(){
        return(
            <View style = {styles.parent}>
                <View style = {styles.topBlock}>
                    <View style = {styles.leftCol}>
                        <View style = {[styles.one, styles.base]}/>
                        <View style = {[styles.two, styles.base]}/>
                    </View>
                    <View style = {[styles.three, styles.base]}/>
                </View>
                <View style = {styles.bottomBlock}>
                    <View style = {[styles.four, styles.base]}/>
                    <View style = {[styles.five, styles.base]}/>
                    <View style = {[styles.rightCol, styles.base]}>
                        <View style = {[styles.six, styles.base]}/>
                        <View style = {[styles.seven, styles.base]}/>
                    </View>
                </View>
            </View>
        );
    }
};


