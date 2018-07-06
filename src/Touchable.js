import React , {Component} from 'react';
import {
    View,
    StyleSheet,
    TouchableHighlight,
    PanResponder, Text,

} from 'react-native';

const CIRCLE_SIZE = 40;
const CIRCLE_COLOR = "blue";
const CIRCLE_HIGHLIGHT_COLOR = "green";

export default class Touchable extends Component {

    _panResponder = {};
    _previousLeft = 0;
    _previousTop = 0;
    _circleStyles = {};
    circle = null;
    // Should we become active when the user presses down on the circle?
    _handleStartShouldSetPanResponder = (event, gestureState) => {
// Should we become active when the user presses down on the circle?r
    return true;
    };

    // Should we become active when the user moves a touch over the circle?
    _handleMoveShouldSetPanResponder = (event, gestureState) => {
// Should we become active when the user moves a touch over the circle?
        return true;
    };
    _handlePanResponderMove = (event, gestureState) => { this.setState({
        stateID: gestureState.stateID,
        moveX: gestureState.moveX,
        moveY: gestureState.moveY,
        x0: gestureState.x0,
        y0: gestureState.y0,
        dx: gestureState.dx,
        dy: gestureState.dy,
        vx: gestureState.vx,
        vy: gestureState.vy,
        numberActiveTouches: gestureState.numberActiveTouches
    });
        // Calculate current position using deltas
        this._circleStyles.style.left = this._previousLeft + gestureState.dx; this._circleStyles.style.top = this._previousTop + gestureState.dy; this._updatePosition();
    };

    _updatePosition = () => {
        this.circle && this.circle.setNativeProps(this._circleStyles)
    };
    _highlight = () => {
        this.circle && this.circle.setNativeProps({
            style: {backgroundColor: 'blue'}
        });
    };

    _unHighlight = () => { this.circle &&
    this.circle.setNativeProps({ style: { backgroundColor: CIRCLE_COLOR } }); };

    _handlePanResponderGrant = (e, gestureState) => {
        this._highlight();
    };
    _handlePanResponderEnd = (event, gestureState) => { this._unHighlight();
        this._previousLeft += gestureState.dx; this._previousTop += gestureState.dy;
    };

    constructor(props) {
        super(props);
        this.state = {
            numberActiveTouches: 0,
            moveX: 0,
            moveY: 0,
            x0: 0,
            y0: 0,
            dx: 0,
            dy: 0,
            vx: 0,
            vy: 0
        };
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
            onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
            onPanResponderGrant: this._handlePanResponderGrant,
            onPanResponderMove: this._handlePanResponderMove,
            onPanResponderRelease: this._handlePanResponderEnd,
            onPanResponderTerminate: this._handlePanResponderEnd

        });
        this._previousLeft = 20;
        this._previousTop = 84;
        this._circleStyles = {
            style: {left: this._previousLeft, top: this._previousTop}
        };

    }
    componentDidMount() { this._updatePosition();
    }

    render() { return (
        <View style={styles.container}>
            <View
                ref={circle => { this.circle = circle;
                }}
                style={styles.circle} {...this._panResponder.panHandlers}
            /> <Text>
            {this.state.numberActiveTouches} touches, dx: {this.state.dx},
            dy: {this.state.dy},
            vx: {this.state.vx},
            vy: {this.state.vy} </Text>
        </View> );
    }
}


const styles = StyleSheet.create({ circle: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        backgroundColor: CIRCLE_COLOR,
        position: "absolute",
        left: 0,
        top: 0
    },
    container: { flex: 1, paddingTop: 64 }
});