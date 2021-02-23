import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Svg, { Polyline, Rect } from "react-native-svg";
import Canvas from 'react-native-signature-canvas';

export default class Sample extends React.Component {

  constructor(props:any) {
    super(props);
    this.state = {
      points: [],
    }
  }

    render() {
		return (
      <View style={{height: '100%', flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{ height:'100%', width: '100%', backgroundColor: 'yellow'}}
          onTouchMove={(event) => {this.onTouchMove(event)}}
          // onTouchStart={(event) => {this.onTouchMove(event)}}
          onTouchEnd={() => {this.onTouchEnd()}}
          // onTouchCancel={() => {this.onTouchEnd()}}
        >
            {/* {sampleSvg()} */}
            {/* <Canvas /> */}
            {this.sampleSvg()}
        </View>
      </View>
    )};
      
    onTouchMove(event: any) {
      const { locationX, locationY, touches } = event.nativeEvent;
      if (touches.length === 1) {
        // 描画中の線分の情報を追加する
        this.setState((prevState: any) => {
          return {points: [...prevState.points, {x: locationX, y: locationY}]};
        }
        )
      }
    }
  
     onTouchEnd(event?) {
        if (this.state.points.length > 0) {
          /* TODO: ここでFireStoreにpolylineドキュメントを追加する処理 */
          console.log('state', this.state.points);
  
          // 描画中の線分の情報をクリア
          this.setState({points: []});
        }
      }
    
      sampleSvg() {
        const height = 500;
        const width = 300;
        console.log(this.state.points.length);
        return (
          <Svg height={height} width={width} viewBox={`0 0 ${width} ${height}`}>
          {/* 線 */}
          <Polyline
            points={this.state.points.map((data: any) => `${data.x},${data.y}`).join(' ')}
            fill="none"
            stroke="#f00"
            strokeWidth="3"
          />
        </Svg>
        )
      }
}