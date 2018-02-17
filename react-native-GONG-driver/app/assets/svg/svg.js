import React, {Component} from 'react';
import {View} from 'react-native';
import Svg, {
    Circle,
    Ellipse,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
} from 'react-native-svg';

function Icons (props) {

    return {
        hours24: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" d="M38.2,8.3C34.3,3.7,28.5,0.8,22,0.8
                      C10.3,0.8,0.8,10.3,0.8,22S10.3,43.2,22,43.2S43.2,33.7,43.2,22c0-3.4-0.8-6.6-2.2-9.4"/>
                <Circle fill={props.color || "#3D3D3D"} cx="22" cy="3.7" r="1"/>
                <Circle fill={props.color || "#3D3D3D"} cx="12.9" cy="6.1" r="1"/>
                <Circle fill={props.color || "#3D3D3D"} cx="6.1" cy="12.9" r="1"/>
                <Circle fill={props.color || "#3D3D3D"} cx="3.7" cy="22" r="1"/>
                <Circle fill={props.color || "#3D3D3D"} cx="6.1" cy="31.1" r="1"/>
                <Circle fill={props.color || "#3D3D3D"} cx="12.8" cy="37.8" r="1"/>
                <Circle fill={props.color || "#3D3D3D"} cx="22" cy="40.3" r="1"/>
                <Circle fill={props.color || "#3D3D3D"} cx="31.2" cy="37.8" r="1"/>
                <Circle fill={props.color || "#3D3D3D"} cx="37.9" cy="31.2" r="1"/>
                <Circle fill={props.color || "#3D3D3D"} cx="40.3" cy="22" r="1"/>
                <Polyline fill="none" stroke={props.color || "#3D3D3D"} points="38.2,0.8 38.2,8.3 30.9,8.3 "/>
                <Polyline fill="none" stroke={props.color || "#3D3D3D"} strokeLinejoin="bevel" points="29.7,28.8 29.6,15.2 23,24.4
                    32.5,24.4 "/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M20.9,28L20.9,28h-7.5v0l0-0.3c0,0,1.7-2,1.9-2.2
                      c2.8-2.8,4.3-4.5,4.3-6.6c0-1.7-1-3.3-3.5-3.3c-1.4,0-2.6,0.6-3.4,1.3"/>
                </Svg>
        ),
        aboutUs: (
            <Svg style={[{width: 70, height: 35}, props.style]} viewBox="0 0 44 44">
                <Circle fill="none" stroke={props.color || "#3D3D3D"} cx="22" cy="22" r="19.1"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" x1="22" y1="20.2" x2="22" y2="32.6"/>
                <Circle fill={props.color || "#3D3D3D"} cx="22" cy="13.5" r="1"/>
            </Svg>
        ),
        arrowBack: (
            <Svg style={[{width: 25, height: 25}, props.style]} viewBox="-25 19 44 44">
                <Polyline fill="none" stroke={props.color || "#3D3D3D"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points="6.5,22.7 -12.5,41 6.5,59.3 "/>
            </Svg>
        ),
        arrowDown: (
            <Svg style={[{width: 60, height: 20}, props.style]} viewBox="-25 19 44 44">
                <Polyline fill="none" stroke={props.color || "#3D3D3D"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points="-21.3,31.5 -3,50.5 15.3,31.5 "/>
            </Svg>
        ),
        arrowNext: (
            <Svg style={[{width: 30, height: 20, marginRight: 10}, props.style]} viewBox="-25 19 44 44">
                <Polyline fill="none" stroke={props.color || "#3D3D3D"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points="-12.5,59.3 6.5,41 -12.5,22.7 "/>
            </Svg>
        ),
        calendar: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Rect x="1.7" y="5.3" fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" width="40.5" height="37.4"/>
                <Rect x="1.7" y="5.3" fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" width="40.5" height="8.2"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" x1="11.2" y1="0.8" x2="11.2" y2="8.4"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" x1="32.7" y1="0.8" x2="32.7" y2="8.4"/>
                <Rect x="10.7" y="20.1" fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" width="4.2" height="3"/>
                <Rect x="20.1" y="20.1" fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" width="4.2" height="3"/>
                <Rect x="29" y="20.1" fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" width="4.2" height="3"/>
                <Rect x="10.7" y="26.6" fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" width="4.2" height="3"/>
                <Rect x="20.1" y="26.6" fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" width="4.2" height="3"/>
                <Rect x="29" y="26.6" fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" width="4.2" height="3"/>
                <Rect x="10.7" y="33" fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" width="4.2" height="3"/>
                <Rect x="20.1" y="33" fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" width="4.2" height="3"/>
            </Svg>
        ),
        check: (
            <Svg style={[{width: 30, height: 30}, props.style]} viewBox="0 0 30 30">
                <Polyline fill="none" stroke="#368000" strokeWidth="3" points="1.1,15 10,23.8 29.3,5.6 "/>
            </Svg>
        ),
        city: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Polygon fill="none" stroke={props.color || "#3D3D3D"} points="42.9,34.6 32.5,39.2 22,34.6 11.5,39.2 1.2,34.6 1.2,4.7 11.5,9.5 22,4.7 32.5,9.5 42.9,4.7 "/>
            </Svg>
        ),
        color: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Circle fill="none" stroke={props.color || "#3D3D3D"} cx="11.3" cy="26.7" r="3.8"/>
                <Ellipse fill="none" stroke={props.color || "#3D3D3D"} cx="19.4" cy="31.8" rx="2.6" ry="2.9"/>
                <Ellipse fill="none" stroke={props.color || "#3D3D3D"} cx="28" cy="31" rx="2.6" ry="3"/>
                <Ellipse fill="none" stroke={props.color || "#3D3D3D"} cx="34.8" cy="25.1" rx="2.7" ry="3"/>
                <Circle fill="none" stroke={props.color || "#3D3D3D"} cx="34.8" cy="16.2" r="2.5"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M22,5.2c-2-0.1-1.8,1.6-1.5,3.3
                      c0.4,1.8,1.1,3.6,0.3,4.8c-0.4,0.5-1.5,0.3-2.1,0.3C4.6,13.7,1.6,18.5,1.6,22c0,9.3,9.2,16.8,20.4,16.8S42.4,31.3,42.4,22
                C42.4,12.7,33.3,5.2,22,5.2L22,5.2z"/>
            </Svg>
        ),
        clock: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Polyline fill="none" stroke={props.color || "#3D3D3D"} strokeLinejoin="round" points="22,7.6 22,22 29,29
                    "/>
                <Circle fill={this.props || "#3D3D3D"} cx="22" cy="22" r="1"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" d="M38.2,8.3C34.3,3.7,28.5,0.8,22,0.8
                      C10.3,0.8,0.8,10.3,0.8,22S10.3,43.2,22,43.2S43.2,33.7,43.2,22c0-3.4-0.8-6.6-2.2-9.4"/>
                <Circle fill={this.props || "#3D3D3D"} cx="22" cy="3.7" r="1"/>
                <Circle fill={this.props || "#3D3D3D"} cx="12.9" cy="6.1" r="1"/>
                <Circle fill={this.props || "#3D3D3D"} cx="6.1" cy="12.9" r="1"/>
                <Circle fill={this.props || "#3D3D3D"} cx="3.7" cy="22" r="1"/>
                <Circle fill={this.props || "#3D3D3D"} cx="6.1" cy="31.1" r="1"/>
                <Circle fill={this.props || "#3D3D3D"} cx="12.8" cy="37.8" r="1"/>
                <Circle fill={this.props || "#3D3D3D"} cx="22" cy="40.3" r="1"/>
                <Circle fill={this.props || "#3D3D3D"} cx="31.2" cy="37.8" r="1"/>
                <Circle fill={this.props || "#3D3D3D"} cx="37.9" cy="31.2" r="1"/>
                <Circle fill={this.props || "#3D3D3D"} cx="40.3" cy="22" r="1"/>
                <Polyline fill="none" stroke={props.color || "#3D3D3D"} points="38.2,0.8 38.2,8.3 30.9,8.3 "/>
                </Svg>
        ),
        company: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Rect x="21" y="20.1" fill={props.color || "#D32127"} width="2.9" height="1.9"/>
                <Rect x="21" y="23.9" fill={props.color || "#D32127"} width="2.9" height="1.9"/>
                <Rect x="21" y="16.3" fill={props.color || "#D32127"} width="2.9" height="1.9"/>
                <Rect x="25.8" y="35.4" fill={props.color || "#D32127"} width="2.9" height="1.9"/>
                <Rect x="21" y="35.4" fill={props.color || "#D32127"} width="2.9" height="1.9"/>
                <Rect x="21" y="27.7" fill={props.color || "#D32127"} width="2.9" height="1.9"/>
                <Rect x="21" y="31.6" fill={props.color || "#D32127"} width="2.9" height="1.9"/>
                <Rect x="30.6" y="35.4" fill={props.color || "#D32127"} width="2.9" height="1.9"/>
                <Rect x="35.4" y="27.7" fill={props.color || "#D32127"} width="2.9" height="1.9"/>
                <Rect x="35.4" y="23.9" fill={props.color || "#D32127"} width="2.9" height="1.9"/>
                <Rect x="35.4" y="31.6" fill={props.color || "#D32127"} width="2.9" height="1.9"/>
                <Rect x="25.8" y="31.6" fill={props.color || "#D32127"} width="2.9" height="1.9"/>
                <Rect x="30.6" y="16.3" fill={props.color || "#D32127"} width="2.9" height="1.9"/>
                <Rect x="35.4" y="20.1" fill={props.color || "#D32127"} width="2.9" height="1.9"/>
                <Rect x="35.4" y="16.3" fill={props.color || "#D32127"} width="2.9" height="1.9"/>
                <Rect x="35.4" y="35.4" fill={props.color || "#D32127"} width="2.9" height="1.9"/>
                <Rect x="25.8" y="16.3" fill={props.color || "#D32127"} width="2.9" height="1.9"/>
                <Rect x="25.8" y="23.9" fill={props.color || "#D32127"} width="2.9" height="1.9"/>
                <Rect x="25.8" y="20.1" fill={props.color || "#D32127"} width="2.9" height="1.9"/>
                <Rect x="30.6" y="20.1" fill={props.color || "#D32127"} width="2.9" height="1.9"/>
                <Rect x="25.8" y="27.7" fill={props.color || "#D32127"} width="2.9" height="1.9"/>
                <Rect x="30.6" y="31.6" fill={props.color || "#D32127"} width="2.9" height="1.9"/>
                <Rect x="30.6" y="27.7" fill={props.color || "#D32127"} width="2.9" height="1.9"/>
                <Rect x="30.6" y="23.9" fill={props.color || "#D32127"} width="2.9" height="1.9"/>
                <Path fill={props.color || "#D32127"} d="M37.5,11.4V9.6H22V1.9h-4.8V0H6.7l0,1.9H1.9v24.9h15.3V44h24.9V11.5L37.5,11.4z M8.6,23H5.7
                      V21h2.9V23z M8.6,19.1H5.7v-1.9h2.9V19.1z M8.6,15.3H5.7v-1.9h2.9V15.3z M8.6,11.5H5.7V9.6h2.9V11.5z M8.6,7.7H5.7V5.7h2.9V7.7z
     M13.4,23h-2.9V21h2.9V23z M13.4,19.1h-2.9v-1.9h2.9V19.1z M13.4,15.3h-2.9v-1.9h2.9V15.3z M13.4,11.5h-2.9V9.6h2.9V11.5z M13.4,7.7
    h-2.9V5.7h2.9V7.7z M18.2,11.5h-2.9V9.6h2.9V11.5z M18.2,7.7h-2.9V5.7h2.9V7.7z M40.2,42.1h-21V14h3.3v-2.5h13.1v2.5l4.7,0V42.1z"/>
            </Svg>
        ),
        contactUs: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 52 44">
                <Polyline fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" points="
                    11.1,6.5 25.9,20.1 40.8,6.5 "/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" x1="19.1" y1="17.9" x2="13.1" y2="23.9"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" x1="32.5" y1="17.6" x2="40.2" y2="25.3"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" d="M13.9,29h27.4
                      c1.3,0,2.3-1,2.3-2.3V4.9c0-1.3-1-2.3-2.3-2.3H10.6c-1.3,0-2.3,1-2.3,2.3v5.4"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinejoin="round" d="M4.5,23.1
                      c1.7,3.1,4.9,6.9,7.4,9.1c4.9,4.4,12.6,8.8,15.4,9.2c2.2,0.4,6.7-4.2,6.7-4.2c0.9-1.4,0.9-2.5-0.8-4.1c-0.9-0.8-2.9-2.5-3.3-2.8
                    C28.4,29.2,28,29,27,29c-1.3,0-2.5,2.2-2.7,3c-0.4,2.9-2.5,2.3-3.8,1.9c-1.7-0.5-7.3-5.1-8.6-6.8c-1.6-2.1-3.2-4.5-3-6.9
                    c0,0,1.9-0.1,3.1-1.5c1.5-1.7,0.9-3-0.1-4.3c-0.3-0.4-1.6-2-1.9-2.3c-0.6-0.6-2-2-3-2.6c-1.2-0.8-2.1,0.2-3.6,1.9
                    c-1.9,2.2-2.2,4.7-1.5,6.7C2.5,19.5,3.4,21,4.5,23.1z"/>
                </Svg>
        ),
        country: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Circle id="Oval" fill="none" stroke={props.color || "#3D3D3D"} cx="21" cy="18.3" r="12.8"/>
                <Path id="Shape" fill="none" stroke={props.color || "#3D3D3D"} d="M28,1.2c9.1,4.3,12.9,15.2,8.6,24.3c-3,6.3-9.3,10.1-15.9,10.3
                      c-2.8,0.1-5.6-0.5-8.4-1.8"/>
                <Path id="Shape_1_" fill="none" stroke={props.color || "#3D3D3D"} d="M22,35.8v7"/>
                <Path id="Shape_2_" fill="none" stroke={props.color || "#3D3D3D"} d="M14.7,42.8h14.4"/>
            </Svg>
        ),
        diesel: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="-4 1 52 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M25.7,28.2c0.7,1.3,0.9,1.8,0.9,2.8c0,2.7-2.2,4.9-4.9,4.9s-4.9-2.2-4.9-4.9
                      c0-1.1,0.3-1.8,1-3l3.9-7.6L25.7,28.2L25.7,28.2z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M33.3,6.2c-0.8-0.8-0.8-1.8-0.1-2.6c0-0.1,0.8-0.8,0.8-0.9
                      c1-1,1.3-1.5,2.1-0.6l8.2,8.2c0.7,0.6-0.5,1.7-0.8,2.1c-1.6,1.6-2.6,1.3-4.2-0.2L33.3,6.2z"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="29.9" y1="9.8" x2="33.4" y2="6.3"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="36.3" y1="16.1" x2="39.8" y2="12.7"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M10,8.1V5.4c0-1.3,1-2.3,2.3-2.3h11.1c1.3,0,2.3,1,2.3,2.3V8"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M10,8.1L26.6,8c0.8,0,2.1,0.5,2.7,1.1l9.1,9c0.6,0.6,1.1,1.8,1.1,2.7
                      v16.7c0,3.8-3.1,6.9-6.9,6.9H10.9c-3.8,0-6.9-3.1-6.9-6.9V14.9C4,11.1,7.3,8.1,10,8.1z"/>
                </Svg>
        ),
        dollar: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Circle fill="none"  stroke={props.color || "#3D3D3D"} cx="21.5" cy="21.5" r="18.847"/>
                <Line fill="none"  stroke={props.color || "#3D3D3D"} x1="21.5" y1="8.761" x2="21.5" y2="34.014"/>
                <Path  fill={props.color || "#3D3D3D"} d="M15.832,27.979c0.579,0.874,1.33,1.525,2.254,1.953c0.924,0.428,1.976,0.641,3.156,0.641
                       c0.735,0,1.425-0.097,2.071-0.291c0.646-0.194,1.208-0.467,1.687-0.816s0.857-0.772,1.135-1.268
		c0.279-0.496,0.418-1.054,0.418-1.677c0-0.719-0.172-1.312-0.518-1.777c-0.346-0.467-0.807-0.851-1.387-1.151
		c-0.578-0.301-1.229-0.559-1.953-0.773c-0.724-0.213-1.469-0.427-2.238-0.641c-0.768-0.213-1.514-0.457-2.238-0.729
		s-1.375-0.627-1.954-1.064c-0.579-0.438-1.041-0.986-1.386-1.647s-0.518-1.477-0.518-2.449c0-0.913,0.206-1.724,0.618-2.434
		s0.969-1.302,1.67-1.778c0.701-0.476,1.508-0.835,2.421-1.079c0.913-0.243,1.87-0.364,2.872-0.364c1.292,0,2.488,0.2,3.591,0.598
		c1.102,0.398,2.053,1.064,2.855,1.997l-1.904,1.195c-0.557-0.68-1.209-1.19-1.953-1.53c-0.747-0.34-1.632-0.51-2.656-0.51
		c-0.713,0-1.392,0.083-2.038,0.248c-0.646,0.166-1.208,0.408-1.687,0.729c-0.479,0.32-0.863,0.724-1.152,1.209
		c-0.29,0.486-0.434,1.06-0.434,1.72c0,1.03,0.3,1.822,0.901,2.376c0.602,0.554,1.353,0.991,2.255,1.312
		c0.901,0.321,1.881,0.603,2.939,0.845c1.057,0.243,2.037,0.568,2.939,0.977s1.652,0.977,2.254,1.705s0.902,1.734,0.902,3.017
		c0,0.934-0.201,1.76-0.602,2.479s-0.941,1.326-1.619,1.821c-0.68,0.496-1.465,0.87-2.355,1.122
		c-0.891,0.253-1.815,0.379-2.772,0.379c-1.559,0-2.995-0.238-4.309-0.714c-1.314-0.476-2.438-1.277-3.374-2.405L15.832,27.979z"/>
            </Svg>
        ),
        flatTiresService: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="4 0 52 44">
                <Circle fill="#3D3D3D" cx="29.8" cy="22.8" r="1.6"/>
                <Circle fill="none" stroke={props.color || "#3D3D3D"} strokeWidth="0.5" cx="29.8" cy="22.8" r="7.5"/>
                <Circle fill="none" stroke={props.color || "#3D3D3D"} cx="29.8" cy="22.8" r="11.1"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinejoin="round" d="M50.7,37.2h-4.3l0-0.5c0-0.4,0.1-0.7,0.3-1
                      c3-3.8,4.5-8.7,4.5-14c0-10-10.7-20.4-21.5-20.4C17.2,1.3,8.7,11.7,8.7,21.8c0,5,1.7,10.4,4.6,14.1c0.2,0.2,0.3,0.5,0.3,0.8l0,0.6
                H9.3c-1.8,0-3.2,1.1-3.2,2.5c0,1.4,1.4,2.5,3.2,2.5h41.4c1.8,0,3.2-1.1,3.2-2.5C53.9,38.3,52.5,37.2,50.7,37.2z"/>
            </Svg>
        ),
        fuelService: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 52 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="
                      M37.2,42.6H14.7c-3,0-5.5-2.4-5.5-5.5V13c0-3,2.4-5.5,5.5-5.5h16.9c0.4,0,0.7,0.1,1,0.4l9.7,9.5c0.2,0.2,0.4,0.6,0.4,0.9v18.8
                    C42.7,40.2,40.2,42.6,37.2,42.6z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="
                      M13.9,7.5V4.4c0-1.7,1.3-3,3-3h10.9c1.7,0,3,1.3,3,3v3.2"/>

                <Rect x="20.5" y="20.7" fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" width="9.2" height="10.9"/>

                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" x1="20.5" y1="20.7" x2="15.8" y2="15.9"/>

                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" x1="29.8" y1="20.7" x2="34.6" y2="15.9"/>

                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" x1="20.5" y1="31.6" x2="15.8" y2="36.3"/>

                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" x1="29.8" y1="31.6" x2="34.6" y2="36.3"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="
                      M44.7,13.9l-8.4-8.2c-0.4-0.4-0.4-1.1,0-1.5l1.9-2c0.4-0.4,1.1-0.4,1.5,0l8.4,8.2c0.4,0.4,0.4,1.1,0,1.5l-1.9,2
                    C45.8,14.3,45.1,14.3,44.7,13.9z"/>

                <Polyline fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" points="
                    34.6,9.7 37.5,6.8 43.6,12.8 40.7,15.7   "/>
                </Svg>
        ),
        haveWheelNotHaveKeys: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M16.6,5.8c0,0,0,0.8,5.1,0.8c5.1,0,5.1-0.8,5.1-0.8"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M16.6,9.2c0,0,0,0.8,5.1,0.8c5.1,0,5.1-0.8,5.1-0.8"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M16.6,12.7c0,0,0,0.8,5.1,0.8c5.1,0,5.1-0.8,5.1-0.8"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M16.6,16.1c0,0,0,0.8,5.1,0.8c5.1,0,5.1-0.8,5.1-0.8"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M16.6,19.5c0,0,0,0.8,5.1,0.8c5.1,0,5.1-0.8,5.1-0.8"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M16.1,22.1c0.3-0.3,0.5-0.8,0.5-1.2l0-18.1
                      c0-1.1,0.9-2.1,2-2.1h6.2c1,0,2.1,1,2.1,2.1l0,18.1c0,0.5,0.2,0.9,0.5,1.2l5.9,6.2c0.3,0.3,0.4,0.6,0.4,1v9.5c0,0.4-0.2,0.9-0.5,1.2
                c-1.1,1.1-4.2,3.4-11.5,3.4c-6.5,0-10-2.3-11.3-3.4c-0.4-0.3-0.6-0.8-0.6-1.3v-9.3c0-0.4,0.1-0.7,0.4-1L16.1,22.1z"/>
            </Svg>
        ),
        jumpStartService: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" x1="15.6" y1="25.8" x2="15.6" y2="32.2"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" x1="18.8" y1="29" x2="12.5" y2="29"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" x1="31.8" y1="29" x2="25.5" y2="29"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="
                      M38.7,42.3H5.3c-0.5,0-0.9-0.4-0.9-0.9V16.7c0-0.5,0.4-0.9,0.9-0.9h33.5c0.5,0,0.9,0.4,0.9,0.9v24.6C39.7,41.8,39.3,42.3,38.7,42.3
                z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="
                      M17.9,15.7h-6.5v-4.5c0-0.4,0.3-0.8,0.8-0.8h5c0.4,0,0.8,0.3,0.8,0.8V15.7z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="
                      M32.9,15.7h-6.5v-4.5c0-0.4,0.3-0.8,0.8-0.8h5c0.4,0,0.8,0.3,0.8,0.8V15.7z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M34.6,38.3H9.3c-0.6,0-1.1-0.5-1.1-1.1V20.8
                      c0-0.6,0.5-1.1,1.1-1.1h25.2c0.6,0,1.1,0.5,1.1,1.1v16.4C35.6,37.8,35.2,38.3,34.6,38.3z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M14.7,10.5c0,0,10.2-19.7,15.5,0"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M9.1,5.1c0,0,13.3-5.2,19.5,5.4"/>
                </Svg>
        ),
        keysBroken: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M26.1,23.9c0.1,0,0.3,0.2,0.4,0.2
                      c0.9,0.5,1.6,1,2.3,1.7c1.9,1.9,2.9,4.4,2.9,7c-0.1,5-4.1,9.2-9,9.3c-2.7,0.1-5.5-0.9-7.4-2.8l0,0c-1.8-1.8-2.9-4.2-2.9-6.7
                c-0.1-3.3,1.6-6.3,4.4-8.1l0.2-0.2l-0.1-17c0-0.2,0-0.7,0.1-0.9C17,6.2,17.1,6,17.3,5.8l3.3-3.2c0.2-0.2,1-0.7,1.3-0.7
                C22.4,1.8,23,2,23.4,2.5l2.3,3.4c0.1,0.1,0.1,0.2,0.1,0.4c0.1,0.2,0.1,0.4,0.1,0.6L26.1,23.9z"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeWidth="0.5" x1="22.8" y1="6.4" x2="22.8" y2="22.5"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" x1="8.1" y1="14.3" x2="35.9" y2="42.1"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" x1="8.1" y1="42.1" x2="35.8" y2="14.3"/>
                <Circle fill="none" stroke={props.color || "#3D3D3D"} cx="22" cy="37.3" r="1.9"/>
            </Svg>
        ),
        keysLocked: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M6,18.4c-1,0-1.8,0.8-1.8,1.8v20.2
                      c0,1,0.8,1.8,1.8,1.8H38c1,0,1.8-0.8,1.8-1.8V20.2c0-1-0.8-1.8-1.8-1.8H6z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M20.4,29.8c-0.6-0.5-1-1.2-1-2c0-1.4,1.2-2.6,2.6-2.6
                      s2.6,1.2,2.6,2.6c0,0.8-0.3,1.6-1,2.1c-0.2,0.2-0.1,0.4-0.1,0.6c0,0,1.1,2.3,1.3,2.8c0.2,0.5-0.1,0.9-0.5,0.9h-4.5
                c-0.4,0-0.6-0.4-0.4-0.9c0.2-0.4,1.3-2.8,1.3-2.8C20.6,30.2,20.7,30,20.4,29.8z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M15.8,18.4c0,0,0-6.9,0-7.1c0-1.7,2.4-4.9,6.1-4.9
                      c3.9,0,6,3.3,6,4.9v7.1"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M11.2,18.4v-6.8c0-5.1,4.6-9.8,10.8-9.8
                      c5.9,0,10.5,4.7,10.5,10v6.7"/>
                </Svg>
        ),
        keysLocked2: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M38,18.4h-5.5v-6.7c0-5.3-4.6-10-10.5-10
                      c-6.2,0-10.8,4.7-10.8,9.8v6.8H6c-1,0-1.8,0.8-1.8,1.8v20.2c0,1,0.8,1.8,1.8,1.8H38c1,0,1.8-0.8,1.8-1.8V20.2
                C39.8,19.2,39,18.4,38,18.4z M15.8,18.4c0,0,0-6.9,0-7.1c0-1.7,2.4-4.9,6.1-4.9c3.9,0,6,3.3,6,4.9v7.1H15.8z"/>
            </Svg>
        ),
        language: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="-3 41 44 44">
                <Circle fill="none" stroke={props.color || "#3D3D3D"} cx="19" cy="63" r="20.1"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M19,42.9c-3.7-0.1-9.8,9.7-9.8,20.1c0,10.3,6,20.3,9.8,20.1
                      C22.2,83,29,73.5,29,63C29,52.5,22.7,42.9,19,42.9z"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="1.9" y1="52.4" x2="36.1" y2="52.4"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="1.8" y1="73.5" x2="36.2" y2="73.5"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="-1.1" y1="63" x2="39.1" y2="63"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="19" y1="42.9" x2="19" y2="83.1"/>
            </Svg>
        ),
        licensePlate: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 52 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M2,36.4c0,2.3,1.8,4.1,4.1,4.1h39.9c2.3,0,4.1-1.8,4.1-4.1V7.6
                      c0-2.3-1.8-4.1-4.1-4.1H6.1C3.8,3.4,2,5.3,2,7.6V36.4z"/>
                <Polyline fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="square" strokeLinejoin="bevel" points="14.6,16.6
                    17.4,15.2 17.4,30.8 "/>
                <Polyline fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="square" strokeLinejoin="bevel" points="23.6,16.6
                    26.4,15.2 26.4,30.8 "/>
                <Polyline fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="square" strokeLinejoin="bevel" points="32.6,16.6
                    35.4,15.2 35.4,30.8 "/>
                </Svg>
        ),
        lockClose: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M6,18.4c-1,0-1.8,0.8-1.8,1.8v20.2
                      c0,1,0.8,1.8,1.8,1.8H38c1,0,1.8-0.8,1.8-1.8V20.2c0-1-0.8-1.8-1.8-1.8H6z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M20.4,29.8c-0.6-0.5-1-1.2-1-2c0-1.4,1.2-2.6,2.6-2.6
                      s2.6,1.2,2.6,2.6c0,0.8-0.3,1.6-1,2.1c-0.2,0.2-0.1,0.4-0.1,0.6c0,0,1.1,2.3,1.3,2.8c0.2,0.5-0.1,0.9-0.5,0.9h-4.5
                c-0.4,0-0.6-0.4-0.4-0.9c0.2-0.4,1.3-2.8,1.3-2.8C20.6,30.2,20.7,30,20.4,29.8z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M15.8,18.4c0,0,0-6.9,0-7.1c0-1.7,2.4-4.9,6.1-4.9
                      c3.9,0,6,3.3,6,4.9v7.1"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M11.2,18.4v-6.8c0-5.1,4.6-9.8,10.8-9.8
                      c5.9,0,10.5,4.7,10.5,10v6.7"/>
                </Svg>
        ),
        lockOpen: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M6,18.4c-1,0-1.8,0.8-1.8,1.8v20.2
                      c0,1,0.8,1.8,1.8,1.8H38c1,0,1.8-0.8,1.8-1.8V20.2c0-1-0.8-1.8-1.8-1.8H6z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M20.4,29.8c-0.6-0.5-1-1.2-1-2c0-1.4,1.2-2.6,2.6-2.6
                      s2.6,1.2,2.6,2.6c0,0.8-0.3,1.6-1,2.1c-0.2,0.2-0.1,0.4-0.1,0.6c0,0,1.1,2.3,1.3,2.8c0.2,0.5-0.1,0.9-0.5,0.9h-4.5
                c-0.4,0-0.6-0.4-0.4-0.9c0.2-0.4,1.3-2.8,1.3-2.8C20.6,30.2,20.7,30,20.4,29.8z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M21.9,6.4c1.1,0,2,0.2,2.8,0.6c0.9,0.5,2,0.2,2.7-0.6
                      l0,0c1-1.1,0.7-3-0.6-3.7c-1.4-0.7-3-1.1-4.8-1.1c-6.2,0-10.8,4.7-10.8,9.8v6.8h4.6c0-2,0-7,0-7.1C15.8,9.5,18.2,6.4,21.9,6.4z"/>
                </Svg>
        ),
        lockedService: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="
                      M26.7,22.1L26.7,22.1c1.8-0.8,3.5,0.9,2.7,2.6l0,0.1c-0.5,1.1,0,2.3,1.1,2.7l0.1,0c1.8,0.6,1.8,3.1,0,3.8l-0.1,0
                c-1.1,0.4-1.6,1.7-1.1,2.7l0,0.1c0.8,1.7-1,3.5-2.7,2.7l-0.1,0c-1.1-0.5-2.3,0-2.7,1.1l0,0.1c-0.6,1.8-3.1,1.8-3.8,0l0-0.1
                c-0.4-1.1-1.7-1.6-2.7-1.1l-0.1,0c-1.7,0.8-3.5-1-2.7-2.7l0-0.1c0.5-1.1,0-2.3-1.1-2.7l-0.1,0c-1.8-0.6-1.8-3.1,0-3.8l0.1,0
                c1.1-0.4,1.6-1.7,1.1-2.7l0-0.1c-0.8-1.7,1-3.5,2.7-2.7l0.1,0c1.1,0.5,2.3,0,2.7-1.1l0-0.1c0.6-1.8,3.1-1.8,3.8,0l0,0.1
                C24.3,22,25.6,22.6,26.7,22.1z"/>
                <Circle fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" cx="22" cy="29.4" r="13.6"/>
                <Circle fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" cx="22" cy="29.4" r="2.7"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="
                      M32.2,20.5v-9.3c0-5.6-4.5-10.1-10.1-10.1h-0.2c-5.6,0-10.1,4.5-10.1,10.1v9.3"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="
                      M29.2,17.9V12c0-3.9-3.2-7.1-7.1-7.1h-0.1C18,4.9,14.8,8,14.8,12v5.9"/>
                </Svg>
        ),
        login: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 52 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="
                      M41,13.2V3.9c0-0.9-0.6-1.2-1.3-1.2H12.3c-0.9,0-1.3,0.4-1.3,1.2v36.2c0,0.7,0.5,1.2,1.3,1.2h27.4c1.2,0,1.3-0.3,1.3-1.2v-5.6"/>
                <Polyline fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" points="31,2.6 31,30.9
                    11.2,40.8 "/>
                <Polyline fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" points="
                    43,18 49.1,24.2 33.9,24.1 49.1,24.2 43,30.3 "/>
                </Svg>
        ),
        logo: (
            <Svg style={[{width: 100, height: 40}, props.style]} viewBox="0 0 100 40">
                <Path d="M19.322,26.05c-1.145,0.411-3.406,1.086-6.079,1.086c-2.995,0-5.462-0.764-7.4-2.614
                      c-1.703-1.644-2.761-4.287-2.761-7.371c0.03-5.903,4.082-10.22,10.719-10.22c2.291,0,4.082,0.499,4.934,0.91l-0.617,2.085
	c-1.057-0.47-2.378-0.852-4.376-0.852c-4.816,0-7.958,2.995-7.958,7.958c0,5.022,3.025,7.988,7.635,7.988
	c1.674,0,2.819-0.235,3.407-0.529V18.59h-4.023v-2.056h6.519V26.05z"/>
                <Path d="M38.776,16.564c0-1.468-0.029-2.672-0.118-3.847h2.291l0.147,2.349h0.059
                      c0.705-1.351,2.349-2.672,4.699-2.672c1.968,0,5.022,1.175,5.022,6.05v8.487H48.29v-8.193c0-2.291-0.851-4.199-3.289-4.199
	c-1.703,0-3.025,1.204-3.465,2.643c-0.117,0.323-0.176,0.764-0.176,1.204v8.546h-2.584V16.564z"/>
                <Path d="M35.9,19.706c0,5.257-3.641,7.547-7.077,7.547c-3.847,0-6.813-2.819-6.813-7.312
                      c0-4.757,3.113-7.547,7.048-7.547C33.14,12.394,35.9,15.36,35.9,19.706z M24.623,19.853c0,3.113,1.792,5.462,4.317,5.462
	c2.467,0,4.317-2.32,4.317-5.521c0-2.408-1.204-5.462-4.258-5.462C25.945,14.332,24.623,17.151,24.623,19.853z"/>
                <Path d="M66.918,12.717c-0.059,1.028-0.117,2.173-0.117,3.906v8.252c0,3.26-0.646,5.257-2.026,6.49
                      c-1.38,1.292-3.377,1.703-5.169,1.703c-1.703,0-3.583-0.411-4.728-1.175l0.646-1.968c0.94,0.587,2.408,1.116,4.17,1.116
	c2.643,0,4.581-1.38,4.581-4.963v-1.586h-0.059c-0.793,1.321-2.32,2.379-4.522,2.379c-3.524,0-6.049-2.995-6.049-6.93
	c0-4.816,3.142-7.547,6.402-7.547c2.467,0,3.818,1.292,4.434,2.467h0.059l0.117-2.144H66.918z M64.246,18.326
	c0-0.44-0.029-0.822-0.147-1.175c-0.47-1.498-1.733-2.731-3.612-2.731c-2.467,0-4.229,2.085-4.229,5.374
	c0,2.79,1.409,5.11,4.199,5.11c1.586,0,3.025-0.998,3.583-2.643c0.147-0.44,0.206-0.94,0.206-1.38V18.326z"/>
                <Circle fill="none" stroke="#FF0000" strokeWidth="2" cx="85" cy="20" r="2"/>
                <Circle fill="none" stroke="#FF0000" strokeWidth="2" cx="85" cy="20" r="6.5"/>
                <Circle fill="none" stroke="#FF0000" strokeWidth="1.7" cx="85" cy="20" r="9.5"/>
                <Circle fill="none" stroke="#FF0000" strokeWidth="0.9" cx="85" cy="20" r="12"/>
                <Circle fill="none" stroke="#FF0000" strokeWidth="0.7" cx="85" cy="20" r="14"/>
            </Svg>
        ),
        logout: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 52 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="
                      M41,13.2V3.9c0-0.9-0.6-1.2-1.3-1.2H12.3c-0.9,0-1.3,0.4-1.3,1.2v36.2c0,0.7,0.5,1.2,1.3,1.2h27.4c1.2,0,1.3-0.3,1.3-1.2v-5.6"/>
                <Polyline fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" points="31.1,2.6 31.1,30.9
                    11.2,40.9 "/>
                <Polyline fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" points="
                    41,30.3 34.9,24.1 50.1,24.1 34.9,24.1 41.1,18 "/>
                </Svg>
        ),
        mail: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" d="M37.4,34.6
                      c-3.8,4.7-9.4,7.3-15.4,7.3C11,41.9,2.1,33,2.1,22S11,2.1,22,2.1S41.9,11,41.9,22c0,1.5,0,1.1-0.1,1.6c0,0.1-0.8,4.2-5.6,4.1
                c-3-0.1-4.3-2.3-4.9-4c-0.2-0.7-0.3-1.8-0.3-1.8C31,16.9,27,12.9,22,12.9c-5,0-9.1,4.1-9.1,9.1s4.1,9.1,9.1,9.1s9.1-4.1,9.1-9.1
                c0,0,0-0.1,0-0.1"/>
            </Svg>
        ),
        mark_dest: (
            <Svg style={[{width: 22, height: 22}, props.style]} viewBox="0 0 22 22">
                <Circle fill="#FFFFFF" stroke="#BFBFBF" cx="11" cy="11" r="9.5"/>
                <Circle fill="#77D234" cx="11" cy="11" r="6.1"/>
            </Svg>
        ),
        mark_loc: (
            <Svg style={[{width: 22, height: 22}, props.style]} viewBox="0 0 22 22">
                <Circle fill="#FFFFFF" stroke="#BFBFBF" cx="11" cy="11" r="9.5"/>
                <Circle fill="#D32026" cx="11" cy="11" r="6.1"/>
            </Svg>
        ),
        menu: (
            <Svg style={[{width: 25, height: 25}, props.style]} viewBox="-25 19 44 44">
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeWidth="2" strokeLinecap="round" x1="-22.6" y1="41" x2="16.6" y2="41"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeWidth="2" strokeLinecap="round" x1="-22.6" y1="27" x2="16.6" y2="27"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeWidth="2" strokeLinecap="round" x1="-22.6" y1="55" x2="16.6" y2="55"/>
            </Svg>
        ),
        model: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 52 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="M26,37.6H11.1l0,1.8
                      c0,0.7-0.3,2.9-2,2.9H4.8c-2.1,0-2.4-1.3-2.4-2.6V26.9c-0.1-2.1,1.3-5.5,1.5-5.9l0.6-1.1L3,20c-1,0-2.4-0.7-2.4-2.5l0-2.6
                c-0.1-1.5,1.6-2.2,2.6-2.2c1-0.1,2.1,0,2.7,0.4l1.2,0.8c0,0,0.4-0.6,0.5-0.8C8.9,10.4,10.1,7.2,11,6c1.6-2.4,4-3.1,5.8-3.5
                c0.2,0,0.4-0.1,0.7-0.1c2.7-0.4,6.4-0.5,8.5-0.5c2.1,0,5.7,0.1,8.5,0.5c0.2,0,0.4,0.1,0.7,0.1C37,2.8,39.4,3.6,41,6
                c0.9,1.3,2.1,4.4,3.4,7.1c0.1,0.2,0.5,0.8,0.5,0.8l1.2-0.8c0.5-0.4,1.7-0.5,2.7-0.4c0.9,0,2.7,0.8,2.6,2.2l0,2.6
                c0,1.8-1.4,2.5-2.4,2.5l-1.4,0l0.6,1.1c0.2,0.4,1.6,3.8,1.5,5.9v12.7c0,1.4-0.3,2.6-2.4,2.6h-4.3c-1.7,0-2-2.1-2-2.9l0-1.8H26z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M18.1,26.4c-0.1,0.6-0.5,1.1-1,1.4c-0.3,0.3-1.3,0.4-1.7,0.4h-4.2l0,0
                      c-0.9,0-1.7-0.6-1.9-1.5c-0.1-0.2-0.1-0.6-0.1-0.8V25c0-0.1,0-0.4,0-0.5c0.1-0.5,0.4-1,0.8-1.3c0.3-0.2,0.7-0.4,1.1-0.4
                c0.2,0,0.6,0,0.8,0.1l4.2,1.1c0.3,0.1,1.1,0.4,1.4,0.7C17.9,25.1,18.2,25.7,18.1,26.4z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M33.9,26.4c0.1,0.6,0.5,1.1,1,1.4c0.3,0.3,1.3,0.4,1.7,0.4h4.2l0,0
                      c0.9,0,1.7-0.6,1.9-1.5c0.1-0.2,0.1-0.6,0.1-0.8V25c0-0.1,0-0.4,0-0.5c-0.1-0.5-0.4-1-0.8-1.3c-0.3-0.2-0.7-0.4-1.1-0.4
                c-0.2,0-0.6,0-0.8,0.1L35.9,24c-0.3,0.1-1.1,0.4-1.4,0.7C34.1,25.1,33.8,25.7,33.9,26.4z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M12.3,16.5c-0.1-0.3,0-0.6,0.1-0.9c0.9-2.2,2.6-5.9,3.1-6.5
                      c0.3-0.4,0.7-0.8,1.9-1.1c0.4-0.1,0.8-0.2,1.3-0.3c2.4-0.3,4.9-0.5,7.4-0.4c2.5-0.1,5,0.1,7.5,0.4c0.4,0.1,0.9,0.2,1.2,0.3
                c1.1,0.3,1.6,0.7,1.9,1.1c0.9,1.5,2.3,4.5,3.1,6.6c0.1,0.3,0.1,0.6,0.1,0.8c-0.1,0.1-0.3,0.2-0.5,0.2H12.8l0,0
                C12.6,16.7,12.4,16.6,12.3,16.5z"/>
                </Svg>
        ),
        name: (
            <Svg  style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinejoin="round" d="M3.1,42.3
                      c-0.1,0-0.4,0-0.5-0.1c-0.5-0.1-0.9-0.6-0.9-1.2v-3.4c0-1.4,0.7-2.7,1.8-3.4c0.1-0.1,0.4-0.3,0.6-0.4l13.6-7l0-2.8
                c0,0-0.4-0.1-0.4-0.2c-1.8-0.9-2.6-3.1-3.1-4.5c-0.1-0.3-0.2-0.5-0.2-0.7c-0.1-0.3-0.1-0.7-0.5-0.7c-0.6-0.1-2.2-1-2.4-2.7
                c0-0.2,0-0.4,0-0.5c0-0.4,0.2-0.6,0.4-0.8c0.2-0.2,0.5-0.3,0.8-0.3c0.2,0,0.4,0,0.5,0c0,0,0.4,0.1,0.4,0.1s0-0.8,0-0.9
                c-0.1-4,0.8-7,2.7-9c0.2-0.2,0.4-0.4,0.6-0.6c2.5-2.1,8.9-2.1,11.4,0c0.2,0.2,0.4,0.4,0.6,0.6c1.9,2,2.8,5,2.7,9c0,0.1,0,0.9,0,0.9
                s0.3-0.1,0.4-0.1c0.1,0,0.3,0,0.5,0c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.4,0.4,0.8c0,0.2,0,0.3,0,0.5c-0.2,1.7-1.8,2.6-2.4,2.7
                c-0.3,0-0.3,0.3-0.5,0.7c-0.1,0.2-0.1,0.4-0.2,0.7c-0.5,1.4-1.3,3.6-3.1,4.5c0,0-0.4,0.2-0.4,0.2l0,2.8l13.6,7
                c0.2,0.1,0.4,0.3,0.6,0.4c1.1,0.8,1.8,2,1.8,3.4V41c0,0.6-0.4,1.1-0.9,1.2c-0.1,0-0.4,0.1-0.5,0.1H3.1z"/>
            </Svg>
        ),
        notHaveJack: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 70 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="
                      M68.7,6.7h-7.6c0,0-1.6,0-1.6,1.7c0,2,0,11.7,0,11.7c0,0.4,0,0.4-0.6,0.4h-3.1"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="
                      M31.7,35.8l-7.4,5.9c-0.5,0.4-0.2,1.2,0.4,1.2h20.7c0.6,0,0.9-0.8,0.4-1.2l-7.2-5.8C36.6,34.2,33.7,34.2,31.7,35.8z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="
                      M39.5,36.5c2.3-2.1,10.6-9.4,15-13.2c1.5-1.3,1.7-3.6,0.3-5.2l0,0c-1.4-1.5-3.7-1.6-5.2-0.2L37.1,30c-1.1,1.1-2.8,1.1-3.9,0
                    l-12.5-12c-1.6-1.5-4.1-1.4-5.5,0.3l0,0c-1.2,1.5-1.1,3.7,0.4,5l15,13.2"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" x1="54.5" y1="17.8" x2="38.8" y2="4.2"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="
                      M31.2,4.2C28.9,6.2,20,14.1,15.6,18"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="
                      M36.9,11.2c-1.1-1-2.8-1-3.9,0l-9.6,9.3l23.2,0L36.9,11.2z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="
                      M37.4,8.4h-4.8c-0.8,0-1.4-0.6-1.4-1.4V2.5c0-0.8,0.6-1.4,1.4-1.4h4.8c0.8,0,1.4,0.6,1.4,1.4V7C38.8,7.7,38.2,8.4,37.4,8.4z"/>
                </Svg>
        ),
        notHaveSpare: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Circle fill="none" stroke={props.color || "#3D3D3D"} cx="22" cy="22" r="20.3"/>
                <Circle fill="none" stroke={props.color || "#3D3D3D"} cx="22" cy="22" r="14.5"/>
                <Circle fill="none" stroke={props.color || "#3D3D3D"} cx="22" cy="22" r="4.2"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="25.7" y1="19.9" x2="34.7" y2="14.9"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="9.5" y1="14.6" x2="18.4" y2="19.9"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="18.3" y1="24" x2="9.3" y2="29.1"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="34.5" y1="29.4" x2="25.6" y2="24.1"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="22" y1="7.5" x2="22" y2="17.8"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="22" y1="36.5" x2="22" y2="26.2"/>
            </Svg>
        ),
        payment: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 52 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M43.2,32.8c-1.1,0-2,0.5-2.6,1.3
                      c-0.6-0.8-1.5-1.3-2.6-1.3c-1.7,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2c1.1,0,2-0.5,2.6-1.3c0.6,0.8,1.5,1.3,2.6,1.3
                c1.7,0,3.2-1.4,3.2-3.2S45,32.8,43.2,32.8z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M48.9,42.8H10.9c-0.7,0-1.3-0.6-1.3-1.3V17.3
                      c0-0.7,0.6-1.3,1.3-1.3h38.1c0.7,0,1.3,0.6,1.3,1.3v24.2C50.2,42.2,49.7,42.8,48.9,42.8z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M9.6,28H3.1c-0.7,0-1.3-0.6-1.3-1.3V2.5
                      c0-0.7,0.6-1.3,1.3-1.3h38.1c0.7,0,1.3,0.6,1.3,1.3V16"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M18.1,24.5h-4.5c-0.2,0-0.3-0.1-0.3-0.3v-4.4
                      c0-0.2,0.1-0.3,0.3-0.3h4.5c0.2,0,0.3,0.1,0.3,0.3v4.4C18.4,24.4,18.3,24.5,18.1,24.5z"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="42.4" y1="11.4" x2="1.7" y2="11.4"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="1.7" y1="5.8" x2="42.4" y2="5.8"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="3.1" y1="11.4" x2="7.8" y2="5.8"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="8.3" y1="11.4" x2="13" y2="5.8"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="13.5" y1="11.4" x2="18.2" y2="5.8"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="18.7" y1="11.4" x2="23.4" y2="5.8"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="23.9" y1="11.4" x2="28.6" y2="5.8"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="29.1" y1="11.4" x2="33.8" y2="5.8"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="34.3" y1="11.4" x2="39" y2="5.8"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="39.5" y1="11.4" x2="42.4" y2="7.9"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="13.8" y1="39.2" x2="30.6" y2="39.2"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="13.8" y1="35.8" x2="18.7" y2="35.8"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="20.9" y1="35.8" x2="25.8" y2="35.8"/>
                <Rect x="13.5" y="28" fill="none" stroke={props.color || "#3D3D3D"} width="1.8" height="2.4"/>
                <Rect x="17.7" y="28" fill="none" stroke={props.color || "#3D3D3D"} width="1.8" height="2.4"/>
                <Rect x="22" y="28" fill="none" stroke={props.color || "#3D3D3D"} width="1.8" height="2.4"/>
                <Rect x="26.3" y="28" fill="none" stroke={props.color || "#3D3D3D"} width="1.8" height="2.4"/>
                <Rect x="30.6" y="28" fill="none" stroke={props.color || "#3D3D3D"} width="1.8" height="2.4"/>
                <Rect x="34.9" y="28" fill="none" stroke={props.color || "#3D3D3D"} width="1.8" height="2.4"/>
                <Rect x="39.1" y="28" fill="none" stroke={props.color || "#3D3D3D"} width="1.8" height="2.4"/>
                <Rect x="43.4" y="28" fill="none" stroke={props.color || "#3D3D3D"} width="1.8" height="2.4"/>
            </Svg>
        ),
        personalSettings: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="
                      M24,38.2H5.4c-0.1,0-0.4,0-0.4-0.1c-0.5-0.1-0.8-0.5-0.8-1v-3c0-1.2,0.6-2.4,1.6-3.1c0.1-0.1,0.4-0.3,0.5-0.3l12.1-6.2l0-2.5
                c0,0-0.3-0.1-0.4-0.1c-1.6-0.8-2.3-2.7-2.8-4c-0.1-0.2-0.1-0.4-0.2-0.6c-0.1-0.3-0.1-0.6-0.4-0.6c-0.5-0.1-1.9-0.9-2.1-2.4
                c0-0.2,0-0.3,0-0.5c0-0.3,0.2-0.6,0.3-0.7c0.2-0.2,0.4-0.2,0.7-0.3c0.2,0,0.3,0,0.4,0c0,0,0.3,0,0.3,0s0-0.7,0-0.8
                c-0.1-3.6,0.7-6.3,2.4-8c0.2-0.2,0.4-0.3,0.5-0.5c2.2-1.9,7.9-1.9,10.1,0c0.2,0.2,0.4,0.3,0.5,0.5c1.7,1.7,2.5,4.4,2.4,8
                c0,0.1,0,0.8,0,0.8s0.3,0,0.3,0c0.1,0,0.3,0,0.4,0c0.2,0,0.5,0.1,0.7,0.3c0.2,0.1,0.3,0.4,0.3,0.7c0,0.1,0,0.3,0,0.5
                c-0.2,1.5-1.6,2.3-2.1,2.4c-0.3,0-0.3,0.3-0.4,0.6c-0.1,0.2-0.1,0.4-0.2,0.6c-0.4,1.3-1.2,3.2-2.8,4c0,0-0.4,0.1-0.4,0.1l0,2.5
                l2.9,1.5"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M26.5,27.1c0,0,1,0.4,1.1,0.4c0,0,1,0.5,1.1,0.5
                      l1.3-0.5c0,0,0.4-1.1,0.4-1.1c0,0,0.4-1.1,0.5-1.1h1.7c0,0,0.4,1,0.5,1.1c0,0,0.4,1.1,0.4,1.1l1.3,0.5c0,0,1-0.5,1.1-0.5
                c0,0,1.1-0.5,1.1-0.4l1.2,1.2c0,0-0.4,1-0.4,1.1c0,0-0.5,1-0.5,1.1l0.5,1.3c0,0,1.1,0.4,1.1,0.4c0,0,1.1,0.4,1.1,0.5v1.7
                c0,0-1,0.4-1.1,0.5c0,0-1.1,0.4-1.1,0.4l-0.5,1.3c0,0,0.5,1,0.5,1.1c0,0,0.5,1.1,0.4,1.1L36.9,40c0,0-1-0.4-1.1-0.4
                c0,0-1-0.5-1.1-0.5l-1.3,0.5c0,0-0.4,1.1-0.4,1.1c0,0-0.4,1.1-0.5,1.1h-1.7c0,0-0.4-1-0.5-1.1c0,0-0.4-1.1-0.4-1.1l-1.3-0.5
                c0,0-1,0.5-1.1,0.5c0,0-1.1,0.5-1.1,0.4l-1.2-1.2c0,0,0.4-1,0.4-1.1c0,0,0.5-1,0.5-1.1l-0.5-1.3c0,0-1.1-0.4-1.1-0.4
                c0,0-1.1-0.4-1.1-0.5v-1.7c0,0,1-0.4,1.1-0.5c0,0,1.1-0.4,1.1-0.4l0.5-1.3c0,0-0.5-1-0.5-1.1c0,0-0.5-1.1-0.4-1.1L26.5,27.1z"/>
                <Circle fill="none" stroke={props.color || "#3D3D3D"} cx="31.7" cy="33.5" r="1.8"/>
            </Svg>
        ),
        phone: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M33.3,10v30.3c0,1.6-1.3,2.9-2.9,2.9H13.6
                      c-1.6,0-2.9-1.3-2.9-2.9V3.7c0-1.6,1.3-2.9,2.9-2.9h16.8c1.6,0,2.9,1.3,2.9,2.9v7.1"/>
                <Circle fill="none" stroke={props.color || "#3D3D3D"} cx="22" cy="3.4" r="0.8"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" x1="18.8" y1="5.9" x2="25.2" y2="5.9"/>
                <Circle fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" cx="22" cy="39" r="2.4"/>
                <Polyline fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" points="31.1,10 31.1,35.2
                    12.9,35.2 12.9,7.5 31.1,7.5 31.1,10.8 "/>
            </Svg>
        ),
        phone2: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M16.3,10.1c1,1.3,0.4,3.4-0.9,4.9
                      c-1.2,1.3-1.4,3.2-0.2,4.6c0.6,0.7,2.3,2.4,4.8,5c0.1,0.1,0.1,0.1,0.1,0.1c1.2,1.2,4.4,4.4,4.5,4.5c0.9,0.9,1.5,1.3,2.2,1.3
                c0.7,0,1.3-0.2,3-1.3c2-1.2,3.7-1.2,5.3-0.1c0.7,0.4,4.4,2.9,5.9,3.9c2,1.3,2.1,2.7,1.1,4.1c-0.1,0.1-0.1,0.2-0.2,0.3
                c-0.1,0.1-0.2,0.3-0.2,0.3c-1.6,2-5.1,5-6.6,5c-4.5,0-15.6-8.2-21.6-14.4c-3.5-3.6-6.6-7.9-10-14.2C1,9.6,1.8,7.3,5.2,4.5
                c0,0,0.8-0.6,1-0.8c0.1-0.1,0.3-0.2,0.4-0.3c2.1-1.8,3.4-1.6,4.7-0.1c0.4,0.4,1.2,1.5,2.6,3.6c0.3,0.4,1.1,1.6,1.3,1.9
                C15.8,9.4,16.1,9.8,16.3,10.1z"/>
            </Svg>
        ),
        pinGreen: (
            <Svg style={[{width: 23, height: 40}, props.style]} viewBox="-21.5 19.5 23 45">
                <Path fill="#47AB4B" stroke="#000000" strokeWidth=".5" strokeLinejoin="round" d="M-10,63.8c-2.2-21.8-10.9-24-10.9-32.8c0-6,4.9-10.9,10.9-10.9S0.9,25,0.9,31.1
                      C0.9,39.8-7.8,42-10,63.8z"/>
                <Circle fill="#000000" cx="-10" cy="31.1" r="3.7"/>
            </Svg>
        ),
        pinRed: (
            <Svg style={[{width: 23, height: 40}, props.style]} viewBox="-21.5 19.5 23 45">
                <Path fill="#F54B4B" stroke="#5A0E0E" strokeWidth=".5" strokeLinejoin="round" d="M-10,63.8c-2.2-21.8-10.9-24-10.9-32.8c0-6,4.9-10.9,10.9-10.9S0.9,25,0.9,31.1
                      C0.9,39.8-7.8,42-10,63.8z"/>
                <Circle fill="#5A0E0E" cx="-10" cy="31.1" r="3.7"/>
            </Svg>

        ),
        pin: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Circle fill="none" stroke={props.color || "#3D3D3D"} cx="22" cy="14" r="9"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M9.2,14C9.2,21.1,22,42.9,22,42.9S34.8,21.1,34.8,14
                      S29.1,1.1,22,1.1S9.2,6.9,9.2,14z"/>
            </Svg>
        ),
        policeBadge: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M22,2.3c3.3,3.3,9.9,3.3,13.1,0l3.3,3.3
                      c-4.4,7.8,0,14.5,0,19.4c0,12-16.3,16.7-16.3,16.7S5.6,36.9,5.5,24.9c0-4.8,4.5-11.5,0-19.3l3.2-3.3C12,5.6,18.7,5.6,22,2.3z"/>
                <Polygon fill="none" stroke={props.color || "#3D3D3D"} points="22,12.1 24.9,18 31.4,19 26.7,23.5 27.8,30
                    22,26.9 16.2,30 17.3,23.5 12.6,19 19.1,18 "/>
                </Svg>
        ),
        policeCap: (
            <Svg style={[{width: 70, height: 25}, props.style]} viewBox="0 0 60 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M10.7,25.4c0,0-7.9-3.4-7.9-5.8
                      c0-4.2,19.1-15.8,27-15.8c7.9,0,27.4,11.6,27.4,15.9c0,2.5-8.1,5.7-8.1,5.7v7.1c0,0-7.7,7.8-19.3,7.8c-11.3,0-19.1-7.6-19.1-7.6
                V25.4z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M10.7,25.4c0,0,9.4-1.4,19.2-1.4
                      c10.2,0,19.2,1.4,19.2,1.4"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M10.6,32.6c0,0,10.3-1.4,19.2-1.4
                      c9.8,0,19.2,1.4,19.2,1.4"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M29.7,14.8c0,0-5.5-4-11.2,0
                      c5.7,0.1,11.3,5.6,11.3,5.6s5.7-5.5,11.6-5.5C35.4,10.8,29.7,14.8,29.7,14.8z"/>
                </Svg>
        ),
        // refresh: (
        //     <Svg style={[{width: 35, height: 35}, props.style]} viewBox="0 0 44 44">
        //         <Path fill="none" stroke={props.color || "#3D3D3D"} strokeWidth="2" strokeLinecap="round" d="M8.2,34.6c3.4,3.8,8.3,6.1,13.8,6.1
        //               c10.3,0,18.7-8.4,18.7-18.7c0-3-0.7-5.8-1.9-8.3"/>
        //         <Path fill="none" stroke={props.color || "#3D3D3D"} strokeWidth="2" strokeLinecap="round" d="M36.3,10C32.8,5.9,27.7,3.4,22,3.4
        //               C11.7,3.4,3.3,11.7,3.3,22c0,3.3,0.9,6.5,2.4,9.2"/>
        //         <Polyline fill="none" stroke={props.color || "#3D3D3D"} strokeWidth="2" points="36.3,3.4 36.3,10 29.8,10 "/>
        //         <Polyline fill="none" stroke={props.color || "#3D3D3D"} strokeWidth="2" points="7.9,40.9 7.9,34.3 14.3,34.3 "/>
        //     </Svg>
        // ),
        settings: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M9.2,6.2c0.1-0.1,2.6,1,2.7,1.1c0.1,0,2.6,1.2,2.6,1.2
                      l3.2-1.3c0.1,0,1-2.6,1-2.7c0-0.1,1-2.6,1.1-2.6h4.3c0.1,0,1.1,2.5,1.1,2.6c0,0.1,1,2.7,1,2.7l3.2,1.3c0.1,0,2.6-1.1,2.6-1.2
                c0.1,0,2.6-1.2,2.7-1.1l3,3c0.1,0.1-1,2.6-1.1,2.7c0,0.1-1.2,2.6-1.2,2.6l1.3,3.2c0,0.1,2.6,1,2.7,1c0.1,0,2.6,1,2.6,1.1v4.3
                c0,0.1-2.5,1.1-2.6,1.1c-0.1,0-2.7,1-2.7,1l-1.3,3.2c0,0.1,1.1,2.6,1.2,2.6c0,0.1,1.2,2.6,1.1,2.7l-3,3c-0.1,0.1-2.6-1-2.7-1.1
                c-0.1,0-2.6-1.2-2.6-1.2l-3.2,1.3c-0.1,0-1,2.6-1,2.7c0,0.1-1,2.6-1.1,2.6h-4.3c-0.1,0-1.1-2.5-1.1-2.6c0-0.1-1-2.7-1-2.7l-3.2-1.3
                c-0.1,0-2.6,1.1-2.6,1.2c-0.1,0-2.6,1.2-2.7,1.1l-3-3c-0.1-0.1,1-2.6,1.1-2.7c0-0.1,1.2-2.6,1.2-2.6l-1.3-3.2c0-0.1-2.6-1-2.7-1
                c-0.1,0-2.6-1-2.6-1.1v-4.3c0-0.1,2.5-1.1,2.6-1.1c0.1,0,2.7-1,2.7-1l1.3-3.2c0-0.1-1.1-2.6-1.2-2.6c0-0.1-1.2-2.6-1.1-2.7L9.2,6.2z
                "/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M22,26.3c-2.4,0-4.3-1.9-4.3-4.3s1.9-4.3,4.3-4.3
                      s4.3,1.9,4.3,4.3S24.4,26.3,22,26.3z"/>
                </Svg>
        ),
        signUp: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="
                      M29.2,39L4.6,39c-0.1,0-0.4,0-0.5-0.1c-0.5-0.1-0.8-0.5-0.8-1.1v-3.1c0-1.3,0.6-2.4,1.7-3.1c0.1-0.1,0.4-0.3,0.5-0.3l12.3-6.3l0-2.5
                c0,0-0.3-0.1-0.4-0.2c-1.6-0.8-2.4-2.8-2.8-4.1c-0.1-0.2-0.1-0.4-0.2-0.6c-0.1-0.3-0.1-0.6-0.4-0.6c-0.5-0.1-2-0.9-2.2-2.4
                c0-0.2,0-0.3,0-0.5c0-0.3,0.2-0.6,0.3-0.7c0.2-0.2,0.5-0.2,0.7-0.3c0.2,0,0.3,0,0.5,0c0,0,0.3,0.1,0.3,0.1s0-0.7,0-0.8
                C13.4,8.8,14.3,6,16,4.2c0.2-0.2,0.4-0.4,0.6-0.5c2.3-1.9,8.1-1.9,10.4,0c0.2,0.2,0.4,0.3,0.6,0.5c1.7,1.8,2.5,4.5,2.4,8.2
                c0,0.1,0,0.8,0,0.8s0.3-0.1,0.3-0.1c0.1,0,0.3,0,0.5,0c0.2,0,0.5,0.1,0.7,0.3c0.2,0.1,0.3,0.4,0.3,0.7c0,0.1,0,0.3,0,0.5
                c-0.2,1.5-1.7,2.4-2.2,2.4c-0.3,0-0.3,0.3-0.4,0.6c-0.1,0.2-0.1,0.4-0.2,0.6c-0.4,1.3-1.2,3.3-2.8,4.1c0,0-0.4,0.2-0.4,0.2l0,2.5
                l3.6,1.8"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="
                      M41.5,29.9h-5v-5c0-0.6-0.5-1.1-1.1-1.1h-3.6c-0.6,0-1.1,0.5-1.1,1.1v5h-5c-0.6,0-1.1,0.5-1.1,1.1v3.6c0,0.6,0.5,1.1,1.1,1.1h5v5
                c0,0.6,0.5,1.1,1.1,1.1h3.6c0.6,0,1.1-0.5,1.1-1.1v-5h5c0.6,0,1.1-0.5,1.1-1.1V31C42.7,30.4,42.2,29.9,41.5,29.9z"/>
                </Svg>
        ),
        star: (
            <Svg style={[{width: 70, height: 25}, props.style]} viewBox="0 0 60 44">
                <Rect x="5.1" y="2.1" fill="none" stroke={props.color || "#3D3D3D"} width="49.8" height="39.9"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M33.7,11.8l0.5,1.6c0.5,1.6,2,2.7,3.7,2.7h1.7
                      c3.7,0,5.3,4.8,2.3,7l-1.4,1c-1.3,1-1.9,2.7-1.4,4.3l0.5,1.6c1.2,3.5-2.9,6.5-5.9,4.3l-1.4-1c-1.3-1-3.2-1-4.5,0l-1.4,1
                    c-3,2.2-7.1-0.8-5.9-4.3l0.5-1.6c0.5-1.6,0-3.3-1.4-4.3l-1.4-1c-3-2.2-1.5-7,2.3-7h1.7c1.7,0,3.1-1.1,3.7-2.7l0.5-1.6
                    C27.5,8.3,32.5,8.3,33.7,11.8z"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" x1="30" y1="22.8" x2="30" y2="17.8"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" x1="30" y1="22.8" x2="25.2" y2="21.3"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" x1="30" y1="22.8" x2="27.1" y2="26.8"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" x1="30.1" y1="22.8" x2="33.1" y2="26.8"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" x1="30" y1="22.8" x2="34.8" y2="21.3"/>
            </Svg>
        ),
        terms: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="11.9" y1="9.5" x2="29.2" y2="9.5"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="11.9" y1="18.2" x2="29.2" y2="18.2"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="11.9" y1="26.8" x2="29.2" y2="26.8"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M7.5,1.2h28.9c0.6,0,1,0.5,1,1v39.4c0,0.6-0.5,1-1,1
                      H7.5c-0.6,0-1-0.5-1-1V2.3C6.5,1.7,7,1.2,7.5,1.2z"/>
            </Svg>
        ),
        towService: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 60 44">
                <Circle fill="none" stroke={props.color || "#3D3D3D"} cx="8.5" cy="32.9" r="3.8"/>
                <Circle fill="none" stroke={props.color || "#3D3D3D"} cx="21.3" cy="32.9" r="3.8"/>
                <Circle fill="none" stroke={props.color || "#3D3D3D"} cx="51.3" cy="32.9" r="3.8"/>
                <Circle fill="none" stroke={props.color || "#3D3D3D"} cx="34.9" cy="22" r="3.8"/>
                <Circle fill="none" stroke={props.color || "#3D3D3D"} cx="10.3" cy="22" r="3.8"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M42.3,18.6c-1.1-4.9-5.9-5.1-5.9-5.1
                      c-4.9,0-10.6-3.8-12.9-5.5c-0.7-0.5-1.5-0.8-2.4-0.8h-6.6c-1.4,0-2.8,0.7-3.7,1.8l-2.3,3c-0.8,1-2,1.7-3.3,1.7h0
                c-0.7,0-1.3,0.6-1.3,1.3v4.3c0,0.7,0.6,1.3,1.3,1.3h1.6c0.6-1.4,1.9-2.5,3.6-2.5s3,1,3.6,2.5h17.4c0.6-1.4,1.9-2.5,3.6-2.5
                s3,1,3.6,2.5h2.2C41.7,20.6,42.5,19.6,42.3,18.6z"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" x1="24.9" y1="31.4" x2="47.8" y2="31.4"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" x1="12" y1="31.4" x2="17.8" y2="31.4"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="
                      M4.9,31.4H1.9c-0.3,0-0.6-0.3-0.6-0.6v-3.7c0-0.3,0.3-0.6,0.6-0.6h42.3c0.4,0,0.7-0.3,0.7-0.7V13.7c0-0.5,0.4-0.9,0.9-0.9h4.7
                c1.9,0,4.4,1.6,5.5,3c1.9,2.5,5.3,10.7,0.2,15.6l0,0h-1.2"/>
            </Svg>
        ),
        triangleDown: (
            <Svg style={[{width: 10, height: 10}, props.style]} viewBox="0 0 44 44">
                <Polygon fill={props.color || "#D20D1C"} points="41.1,12.1 22,31.9 2.9,12.1 "/>
            </Svg>
        ),
        user: (
            <Svg style={[{width: 70, height: 45}, props.style]} viewBox="0 0 44 44">
                <Path fill="#DDDDDD" d="M42.8,21.5c0,11.5-9.3,20.8-20.8,20.8S1.2,32.9,1.2,21.5S10.5,0.7,22,0.7S42.8,11.4,42.8,21.5
                      z"/>
                <Path fill="#949494" d="M33.5,31.2l-4.8-1.6c-0.5-0.2-1-0.5-1.4-0.8l0,0c-0.8-0.8-1.3-1.8-1.3-2.9V25
                      c1.6-1.2,2-2.8,2.1-3.9c0.1-0.5,0.1-1,0.2-1.5c1.2-0.9,1.6-2.1,1.7-3.1c0.1-0.9-0.6-1.6-1.4-1.6h0C29.8,5.6,22,6,22,6
                s-5.6-0.3-6.6,5.3l0,0c0,0,0,0,0,0c-0.2,1-0.2,2.2,0,3.5h0c-0.9,0-1.5,0.8-1.4,1.6c0.1,1,0.5,2.2,1.7,3.1c0.1,0.6,0.1,1.2,0.2,1.8
                c0.2,1.1,0.7,2.5,2.1,3.6v0.8c0,1.1-0.5,2.2-1.3,2.9l0,0c-0.4,0.4-0.9,0.6-1.4,0.8l-4.8,1.6c-1.9,0.7-3.4,2.1-4.1,3.9
                c3.8,4.4,9.4,7.1,15.7,7.1s11.9-2.8,15.7-7.1C36.9,33.3,35.4,31.9,33.5,31.2z"/>
            </Svg>
        ),
        username: (
            <Svg style={[{width: 70, height: 35}, props.style]} viewBox="0 0 44 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="
                      M24.8,38.2H5.4c-0.1,0-0.4,0-0.4-0.1c-0.5-0.1-0.8-0.5-0.8-1v-3c0-1.2,0.6-2.4,1.6-3.1c0.1-0.1,0.4-0.3,0.5-0.3l12.1-6.2l0-2.5
                c0,0-0.3-0.1-0.4-0.1c-1.6-0.8-2.3-2.7-2.8-4c-0.1-0.2-0.1-0.4-0.2-0.6c-0.1-0.3-0.1-0.6-0.4-0.6c-0.5-0.1-1.9-0.9-2.1-2.4
                c0-0.2,0-0.3,0-0.5c0-0.3,0.2-0.6,0.3-0.7c0.2-0.2,0.4-0.2,0.7-0.3c0.2,0,0.3,0,0.4,0c0,0,0.3,0,0.3,0s0-0.7,0-0.8
                c-0.1-3.6,0.7-6.3,2.4-8c0.2-0.2,0.4-0.3,0.5-0.5c2.2-1.9,7.9-1.9,10.1,0c0.2,0.2,0.4,0.3,0.5,0.5c1.7,1.7,2.5,4.4,2.4,8
                c0,0.1,0,0.8,0,0.8s0.3,0,0.3,0c0.1,0,0.3,0,0.4,0c0.2,0,0.5,0.1,0.7,0.3c0.2,0.1,0.3,0.4,0.3,0.7c0,0.1,0,0.3,0,0.5
                c-0.2,1.5-1.6,2.3-2.1,2.4c-0.3,0-0.3,0.3-0.4,0.6c-0.1,0.2-0.1,0.4-0.2,0.6c-0.4,1.3-1.2,3.2-2.8,4c0,0-0.4,0.1-0.4,0.1l0,2.5
                l4.3,2.2"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinejoin="round" d="M39.1,36.1l-3.4-2l3.4-2
                      c0.7-0.4,0.9-1.2,0.5-1.9c-0.4-0.7-1.2-0.9-1.9-0.5l-3.4,2v-4c0-0.8-0.6-1.4-1.4-1.4s-1.4,0.6-1.4,1.4v4l-3.4-2
                c-0.7-0.4-1.5-0.2-1.9,0.5c-0.4,0.7-0.2,1.5,0.5,1.9l3.4,2l-3.4,2c-0.7,0.4-0.9,1.2-0.5,1.9c0.4,0.7,1.2,0.9,1.9,0.5l3.4-2v4
                c0,0.8,0.6,1.4,1.4,1.4s1.4-0.6,1.4-1.4v-4l3.4,2c0.7,0.4,1.5,0.2,1.9-0.5S39.8,36.4,39.1,36.1z"/>
            </Svg>
        ),
        vehicleSettings: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="-27 21 60 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M12.9,48.3c-2.7,0-4.9-2.2-4.9-4.9s2.2-4.9,4.9-4.9
                      s4.9,2.2,4.9,4.9S15.6,48.3,12.9,48.3z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M1.1,28.8c0.1-0.1,2.4,1,2.5,1c0.1,0,2.4,1.1,2.4,1.1
                      l2.9-1.2c0.1,0,0.9-2.4,1-2.5c0-0.1,0.9-2.4,1-2.4h3.9c0.1,0,1,2.3,1,2.4c0,0.1,0.9,2.5,1,2.5l2.9,1.2c0.1,0,2.4-1,2.4-1.1
                c0.1,0,2.4-1.1,2.5-1l2.8,2.8c0.1,0.1-1,2.4-1,2.5c0,0.1-1.1,2.4-1.1,2.4l1.2,2.9c0,0.1,2.4,0.9,2.5,1c0.1,0,2.4,0.9,2.4,1v3.9
                c0,0.1-2.3,1-2.4,1c-0.1,0-2.5,0.9-2.5,1l-1.2,2.9c0,0.1,1,2.4,1.1,2.4c0,0.1,1.1,2.4,1,2.5l-2.8,2.8c-0.1,0.1-2.4-1-2.5-1
                c-0.1,0-2.4-1.1-2.4-1.1l-2.9,1.2c-0.1,0-0.9,2.4-1,2.5c0,0.1-0.9,2.4-1,2.4h-3.9c-0.1,0-1-2.3-1-2.4c0-0.1-0.9-2.5-1-2.5L6,55.9
                c-0.1,0-2.4,1-2.4,1.1c-0.1,0-2.4,1.1-2.5,1l-2.8-2.8c-0.1-0.1,1-2.4,1-2.5c0-0.1,1.1-2.4,1.1-2.4l-1.2-2.9c0-0.1-2.4-0.9-2.5-1
                c-0.1,0-2.4-0.9-2.4-1v-3.9c0-0.1,2.3-1,2.4-1c0.1,0,2.5-0.9,2.5-1l1.2-2.9c0-0.1-1-2.4-1.1-2.4c0-0.1-1.1-2.4-1-2.5L1.1,28.8z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M-9.4,46.8c-0.1,0.6-0.4,1-0.9,1.3c-0.3,0.3-1.2,0.4-1.6,0.4h-3.9l0,0
                      c-0.9,0-1.6-0.6-1.8-1.4c-0.1-0.2-0.1-0.5-0.1-0.7v-0.9c0-0.1,0-0.3,0-0.4c0.1-0.5,0.3-0.9,0.7-1.2c0.3-0.2,0.7-0.4,1-0.4
                c0.2,0,0.6,0,0.8,0.1l3.9,1c0.3,0.1,1.1,0.4,1.3,0.6C-9.6,45.5-9.3,46.1-9.4,46.8z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" d="M-1.5,37.8h-12.8l0,0c-0.2,0-0.4-0.1-0.5-0.2
                      c-0.1-0.2,0-0.5,0.1-0.8c0.8-2,2.4-5.4,2.8-6.1c0.3-0.4,0.7-0.8,1.7-1c0.4-0.1,0.8-0.2,1.2-0.2c2.4-0.5,7-0.5,8-0.4"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="M-1.8,57.1h-14.1
                      l0,1.7c0,0.7-0.3,2.6-1.9,2.6h-4c-1.9,0-2.2-1.2-2.2-2.5V47.2c-0.1-1.9,1.2-5,1.4-5.4l0.5-1l-1.3,0c-0.9,0-2.2-0.7-2.2-2.3l0-2.4
                c-0.1-1.4,1.5-2,2.4-2.1c0.9,0,2,0,2.5,0.4l1.1,0.8c0,0,0.3-0.6,0.4-0.8c1.2-2.5,2.4-5.4,3.2-6.6c1.5-2.2,3.7-2.9,5.4-3.2
                c0.2,0,0.4-0.1,0.6-0.1c2.5-0.4,5.9-0.5,7.9-0.5c2,0,5.3,0.1,7.9,0.5c0.2,0,0.4,0.1,0.6,0.1C7.8,24.9,9,25.5,9,25.5"/>
                </Svg>
        ),
        visitOurSite: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 52 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M3.4,2h45.1c1.1,0,1.9,0.9,1.9,1.9v28.1
                      c0,1.1-0.9,1.9-1.9,1.9H3.4c-1.1,0-1.9-0.9-1.9-1.9V4C1.5,2.9,2.4,2,3.4,2z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinejoin="round" d="M20.7,34c0,2.5,0.2,8-5.6,7.9
                      h21.3c-5.3,0-5.2-5.5-5.2-7.9"/>
                </Svg>
        ),
        winchAndTowService: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 60 44">
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" x1="42.5" y1="30.2" x2="42.5" y2="3.3"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" x1="34" y1="6.4" x2="42.5" y2="6.4"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="
                      M38.3,6.4v20.2c0,1.3-1.1,2.4-2.4,2.4h0c-1.3,0-2.4-1.1-2.4-2.4v-1.8"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="
                      M54.9,30.5v-12c0-0.5,0.4-0.8,0.8-0.8h3.2"/>
                <Circle fill="none" stroke={props.color || "#3D3D3D"} cx="28.8" cy="36.9" r="3.8"/>
                <Circle fill="none" stroke={props.color || "#3D3D3D"} cx="41.5" cy="36.9" r="3.8"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" x1="32.3" y1="35.4" x2="38" y2="35.4"/>
                <Circle fill="none" stroke={props.color || "#3D3D3D"} cx="29.6" cy="21" r="3.8"/>
                <Circle fill="none" stroke={props.color || "#3D3D3D"} cx="10.5" cy="35.9" r="3.8"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M33.2,13.8c-3.8-3.1-7.7-0.3-7.7-0.3
                      c-3.8,3-10.5,3.5-13.3,3.6c-0.8,0-1.6,0.3-2.3,0.8l-5.1,4c-1.1,0.9-1.8,2.2-1.7,3.7l0.1,3.7c0,1.3-0.6,2.5-1.6,3.3l0,0
                c-0.5,0.4-0.6,1.2-0.2,1.8l2.6,3.3c0.4,0.5,1.2,0.6,1.8,0.2l1.2-1c-0.4-1.4,0-3.1,1.3-4.1s3-1,4.3-0.3L26,22.1
                c-0.4-1.4,0-3.1,1.3-4.1s3-1,4.3-0.3l1.7-1.3C34,15.7,34,14.5,33.2,13.8z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="
                      M54.9,30.6H22.3c-0.3,0-0.6,0.3-0.6,0.6v3.6c0,0.3,0.3,0.6,0.6,0.6h3"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" d="
                      M58.9,17.7"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" strokeLinejoin="round" x1="44.9" y1="35.4" x2="58.9" y2="35.4"/>
                </Svg>
        ),
        winchService: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinejoin="round" d="M28.6,32.8l0,1.6l0,0.4
                      c0.2,0.9,0.9,1.5,1.7,1.7c0,0,0,0,0,0c1,0.2,1.7,1.2,1.5,2.2c-0.1,0.8-0.7,1.4-1.5,1.6c-1.2,0.2-2.3-0.7-2.3-1.9c0,0,0,0,0,0
                c0-0.5-0.2-0.9-0.7-1.1l-0.1,0c-0.7-0.3-1.6,0.2-1.6,1c0,0.4,0,0.8,0.1,1.2c0.4,1.9,1.9,3.3,3.9,3.5c2.6,0.3,4.8-1.8,4.8-4.4
                c0-0.6-0.1-1.2-0.4-1.7c0-0.1-0.1-0.2-0.2-0.3c0,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.1-0.2-0.2-0.3c0-0.1-0.1-0.1-0.1-0.2
                c-0.1-0.1-0.1-0.1-0.2-0.2c-0.1-0.1-0.1-0.1-0.2-0.2c-0.1-0.1-0.1-0.1-0.2-0.2c-0.1-0.1-0.1-0.1-0.2-0.2c-0.5-0.4-1.1-0.7-1.8-0.9
                l0-1.5"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M30.7,26.1c1.5,0.4,2.6,1.8,2.6,3.4
                      c0,2-1.6,3.6-3.6,3.6s-3.6-1.6-3.6-3.6c0-1.6,1.1-3,2.6-3.4"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M30.6,28.1c0.5,0.3,0.7,0.8,0.7,1.4
                      c0,0.9-0.8,1.7-1.7,1.7S28,30.4,28,29.5c0-0.6,0.3-1.1,0.7-1.4"/>
                <Rect x="10" y="2.7" fill="none" stroke={props.color || "#3D3D3D"} width="24" height="17.3"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M8.9,21.8H7.8c-0.6,0-1.1-0.5-1.1-1.1V2.1
                      C6.7,1.5,7.2,1,7.8,1h1.1C9.5,1,10,1.5,10,2.1v18.6C10,21.3,9.5,21.8,8.9,21.8z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M36.2,21.8h-1.1c-0.6,0-1.1-0.5-1.1-1.1V2.1
                      C34,1.5,34.5,1,35.1,1h1.1c0.6,0,1.1,0.5,1.1,1.1v18.6C37.3,21.3,36.8,21.8,36.2,21.8z"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="14.4" y1="2.7" x2="14.4" y2="20"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="19.5" y1="2.7" x2="19.5" y2="20"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} x1="24.6" y1="2.7" x2="24.6" y2="20"/>
                <Line fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" x1="29.7" y1="2.7" x2="29.7" y2="24.9"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} strokeLinecap="round" d="M29.9,28.9h-0.5
                      c-0.4,0-0.7-0.3-0.7-0.7v-2.5c0-0.4,0.3-0.7,0.7-0.7h0.5c0.4,0,0.7,0.3,0.7,0.7v2.5C30.7,28.6,30.3,28.9,29.9,28.9z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M40.6,17.7h-3.3V5.1h3.3c0.7,0,1.2,0.5,1.2,1.2v10.1
                      C41.8,17.1,41.3,17.7,40.6,17.7z"/>
                <Path fill="none" stroke={props.color || "#3D3D3D"} d="M3.4,17.7h3.3V5.1H3.4c-0.7,0-1.2,0.5-1.2,1.2v10.1
                      C2.2,17.1,2.7,17.7,3.4,17.7z"/>
                </Svg>
        ),
        wrench: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Path id="_45_" fill="none" stroke={props.color || "#3D3D3D"} strokeLinejoin="round" d="M5.8,32.5L16.2,22
                      c0,0-3.1-4.9-2-6c7-7,12.1-5.1,12.1-5.1l-4.5,5.5l5.6,5.6l5.4-4.6c0,0,2,5.3-4.9,12.2c-1.1,1.1-6.1-2.1-6.1-2.1L11.4,38.1"/>
                <Circle fill="none" stroke={props.color || "#3D3D3D"} cx="22" cy="22" r="19.3"/>
            </Svg>
        ),
        zip: (
            <Svg style={[{width: 70, height: 30}, props.style]} viewBox="0 0 44 44">
                <Polygon fill="none" stroke={props.color || "#3D3D3D"} points="1.3,6.3 1.3,37.7 42.7,37.7 42.7,6.3 1.3,6.3
                    "/>
                <Polyline fill="none" stroke={props.color || "#3D3D3D"} points="1.3,6.3 22,23.8 42.7,6.3 "/>
            </Svg>
        ),
        car: (
            <Svg style={[{width: 25, height: 40}, props.style]} viewBox="0 0 200 300">
                <Path fill="#7F7F7F" stroke="#363636" d="M162.975,30.041
                      c-0.929-8.976-8.357-15.166-8.357-15.166s-6.19-4.024-17.333-7.738c-9.396-3.132-31.03-3.969-37.582-4.154
	c-6.553,0.185-28.56,1.023-37.956,4.154c-11.142,3.714-17.333,7.738-17.333,7.738s-7.428,6.19-8.357,15.166
	c-0.107,1.037-0.219,2.249-0.332,3.587c2.777-3.146,6.67-5.077,10.915-5.784c17.91-2.855,35.561-1.913,53.063-2.317
	c17.502,0.405,34.779-0.538,52.689,2.317c4.245,0.708,8.139,2.638,10.915,5.784C163.194,32.29,163.082,31.078,162.975,30.041z"/>
                <Path fill="#7F7F7F" stroke="#363636" d="M41.849,171.321
                      c-0.159-0.742,0.001-0.099,0.001-0.099c-2.555-22.034-1.597-43.748,0.639-65.782c0.646-5.166,0.275-10.186-0.23-15.159
	c-2.577-0.561-5.062-1.395-7.361-2.789c-0.052,8.178-0.463,22.367-0.698,34.785c-0.31,16.404,0.619,54.165,0.619,54.165
	s0.004,0.174,0.012,0.492c0.104,0.022,0.209,0.036,0.314,0.036c1.757,0.376,3.513,0.701,5.27,0.959
	c0.118-1.695,0.273-3.397,0.478-5.111C40.892,172.18,41.372,171.904,41.849,171.321z"/>
                <Path fill="#7F7F7F" stroke="#363636" d="M39.946,89.684
                      c0.579-9.981,2.465-41.826,3.181-45.768c0.797-4.385,0.662-11.569,2.913-15.961c-4.011,0.784-7.67,2.676-10.315,5.673
	c-0.866,10.241-1.835,27.937-1.835,32.317c0,4.952,0.619,11.143,0.929,15.785c0.075,1.128,0.096,3.136,0.079,5.762
	C36.5,88.464,38.194,89.159,39.946,89.684z"/>
                <Path fill="#202020" d="M44.085,92.348c-0.174-0.597-0.326-1.197-0.467-1.798c-0.455-0.083-0.909-0.17-1.36-0.268
                      c0.505,4.973,0.876,9.993,0.23,15.159c-0.098,0.967-0.193,1.934-0.286,2.9c1.865,1.093,4.005,1.547,5.99,2.359
	C47.177,104.556,45.841,98.436,44.085,92.348z"/>
                <Path fill="#282828" d="M48.193,110.699c-1.986-0.813-4.125-1.267-5.99-2.359
                      c-2.014,20.921-2.785,41.579-0.393,62.522c2.561,2.392,5.897,4.057,9.341,4.89C51.356,154.075,51.756,132.25,48.193,110.699z"/>
                <Path fill="#7F7F7F" stroke="#363636" d="M40.414,177.929
                      c-1.757-0.258-3.513-0.583-5.27-0.959c-0.105,0-0.21-0.013-0.314-0.036c0.085,3.599,0.607,25.985,0.607,31.388
	c0,4.376-0.171,8.237-0.259,9.926c0.68,0.519,1.28,1.073,1.881,0.872c2.065-0.614,4.13-1.205,6.196-1.773
	C41.097,204.206,39.476,191.336,40.414,177.929z"/>
                <Path fill="#7F7F7F" stroke="#363636" d="M59.242,178.516
                      c-2.705,0.024-5.41,0.037-8.116,0.043c-0.041,4.909-0.062,9.809-0.016,14.695c0,7.221,1.199,14.441,1.646,21.662
	c2.665-0.63,5.331-1.217,8.001-1.752C60.442,201.604,59.883,190.061,59.242,178.516z"/>
                <Path fill="#282828" d="M43.256,217.348c3.165-0.87,6.332-1.682,9.501-2.431
                      c-0.447-7.221-1.646-14.441-1.646-21.662c-0.022-2.271-0.027-4.545-0.025-6.822c-3.882-1.518-7.616-3.635-10.798-6.349
	C39.655,192.719,41.213,204.912,43.256,217.348z"/>
                <Path d="M41.81,170.862c0.014,0.12,0.026,0.24,0.04,0.36c0,0-0.001,0.099-0.16,0.364
                      c-0.639,0.958-0.798,0.594-0.798,1.232c-0.205,1.714-0.36,3.416-0.478,5.111c-0.05,0.72-0.09,1.438-0.126,2.156
	c3.181,2.714,6.916,4.831,10.798,6.349c0.003-2.622,0.018-5.246,0.04-7.874c0.008-0.936,0.016-1.872,0.025-2.808
	C47.707,174.918,44.371,173.254,41.81,170.862z"/>
                <Path fill="#7F7F7F" stroke="#363636" d="M52.707,274.365
                      c-4.79-11.176-4.471-26.504-6.387-38.958c-1.006-6.125-2.089-12.12-3.065-18.058c-2.066,0.568-4.131,1.159-6.196,1.773
	c-0.601,0.2-1.202-0.353-1.881-0.872c-0.03,0.581-0.051,0.907-0.051,0.907s-0.619,18.571-0.619,26.618
	c0,8.047,0.619,16.714,1.857,21.976c1.238,5.262,3.746,10.408,6.19,13.619c1.21,1.589,3.674,4.442,3.674,4.442h0.603
	C50.967,282.106,55.044,280.207,52.707,274.365z"/>
                <Path fill="#7F7F7F" stroke="#363636" d="M52.707,224.869
                      c-0.639,3.832-1.277,7.664-0.958,11.496c1.277,8.941,2.555,17.244,4.471,26.185c0.244,1.708,1.608,3.041,3.378,3.718
	c2.626-9.156,1.204-20.094,1.412-29.265c0.067-7.958-0.036-15.902-0.252-23.838c-2.669,0.535-5.336,1.122-8.001,1.752
	C52.962,218.234,53.009,221.552,52.707,224.869z"/>
                <Path d="M52.756,214.917c-3.169,0.749-6.335,1.561-9.501,2.431c0.321,1.955,0.655,3.919,0.993,5.889l8.666-2.737
                      C52.934,218.639,52.872,216.778,52.756,214.917z"/>
                <Path fill="#282828" d="M51.749,236.365c-0.319-3.832,0.319-7.664,0.958-11.496
                      c0.132-1.456,0.195-2.912,0.209-4.368l-8.666,2.737c0.689,4.014,1.397,8.06,2.071,12.169c1.592,10.349,1.643,22.68,4.363,32.967
	l3.656-15.462C53.368,247.436,52.558,242.028,51.749,236.365z"/>
                <Path d="M56.22,262.549c-0.702-3.277-1.318-6.469-1.88-9.637l-3.656,15.462c0.553,2.092,1.214,4.102,2.024,5.991
                      c0.384,0.961,0.592,1.813,0.658,2.586c3.167-3.023,5.085-6.683,6.233-10.683C57.828,265.591,56.464,264.258,56.22,262.549z"/>
                <Path fill="#7F7F7F" stroke="#363636" d="M51.126,178.56c2.705-0.007,5.41-0.02,8.116-0.043
                      c-1.015-18.272-2.233-36.547-3.009-54.896c-2.21,0.044-4.329,0.357-6.196,1.606C51.67,142.961,51.273,160.817,51.126,178.56z"/>
                <Path fill="#363636" d="M53.665,109.272c-0.943-6.063-1.943-11.954-2.928-17.82
                      C49.404,83.511,48.099,75.616,47,67.415c-1.772,0.773-3.522,1.479-5.469,1.302c0.883,7.361,0.415,14.721,2.088,21.832
	c0.141,0.601,0.293,1.201,0.467,1.798c3.137,10.875,4.936,21.854,5.951,32.879c1.867-1.249,3.986-1.562,6.196-1.606
	c-0.004-0.099-0.009-0.199-0.013-0.298C55.9,118.532,54.304,114.062,53.665,109.272z"/>
                <Path d="M60.671,7.501c-9.487,3.271-15.133,6.67-16.105,7.277c0.239,1.396,0.321,2.818,0.233,4.231
                      C50.219,15.357,55.512,11.515,60.671,7.501z"/>
                <Path fill="#363636" d="M35.287,153.679c-2.349,2.446-2.562,6.179-2.641,9.569c-0.015,0.66-0.025,1.348,0.259,1.943
                      c0.183,0.384,0.478,0.705,0.682,1.079c0.556,1.023,0.359,2.269,0.462,3.429c0.045,0.507,0.164,1.036,0.507,1.412
	c0.343,0.376,0.966,0.534,1.373,0.229c0.004-2.195,0.008-4.39,0.012-6.585c-0.822,0.132-1.608-0.512-1.925-1.281
	c-0.317-0.77-0.275-1.633-0.228-2.464c0.106-1.869,0.408-4.064,2.057-4.95c0.166-0.089,0.356-0.175,0.433-0.348
	c0.079-0.178,0.01-0.383-0.061-0.564c-0.154-0.395-0.313-0.788-0.477-1.179c-0.053-0.126-0.15-0.276-0.283-0.246
	s0.018,0.29,0.064,0.161"/>
                <Path fill="#363636" d="M42.686,94.501c-0.611-0.572-1.26-0.962-1.755-1.259c-0.572-0.343-0.992-0.572-0.992-0.572
                      c0.164,2.136-1.063,4.475-2.871,5.624c-2.133,1.356-4.564,2.15-6.902,3.109c-2.338,0.959-4.672,2.146-6.308,4.072
	c-1.452,1.709-2.24,4.122-1.669,6.251l15.755-4.627c0.176-0.391,0.272-0.922,0.233-1.658c0.398-0.15,0.968-0.414,1.366-0.564
	c0.959,1.524,1.158,1.645,2.723,2.599C43.106,102.323,43.029,99.08,42.686,94.501z"/>
                <Path d="M22.471,112.521c4.28-1.314,6.903-2.095,11.183-3.409c0.796-0.244,2.137-0.641,2.927-0.905
                      c0.508-0.169,1.057-0.426,1.363-1.109l-15.755,4.627C22.262,111.996,22.353,112.262,22.471,112.521z"/>
                <Path fill="#7F7F7F" stroke="#363636" d="M157.182,171.321
                      c0.159-0.742-0.001-0.099-0.001-0.099c2.555-22.034,1.597-43.748-0.639-65.782c-0.646-5.166-0.275-10.186,0.23-15.159
	c2.577-0.561,5.062-1.395,7.361-2.789c0.052,8.178,0.463,22.367,0.698,34.785c0.309,16.404-0.619,54.165-0.619,54.165
	s-0.004,0.174-0.012,0.492c-0.104,0.022-0.209,0.036-0.314,0.036c-1.757,0.376-3.513,0.701-5.27,0.959
	c-0.118-1.695-0.273-3.397-0.478-5.111C158.139,172.18,157.659,171.904,157.182,171.321z"/>
                <Path fill="#666666" d="M155.904,43.916c-0.852-4.683-0.639-12.56-3.406-16.818
                      c-2.768-4.258-8.941-10.219-15.966-13.199c-7.025-2.98-15.754-4.258-21.289-4.683c-3.598-0.277-10.881-0.643-15.541-0.866
	c-4.659,0.223-12.316,0.589-15.914,0.866c-5.535,0.426-14.263,1.703-21.289,4.683c-7.025,2.98-13.199,8.941-15.966,13.199
	c-2.767,4.258-2.555,12.134-3.406,16.818c-0.851,4.684-3.353,48.751-3.353,48.751l5.269,3.513l4.106,0.008
	c-5.609-14.639-9.729-32.899,3.238-43.756c12.988-11.133,30.531-12.804,47.315-13.599c16.784,0.795,33.953,2.466,46.941,13.599
	c12.967,10.856,8.847,29.117,3.238,43.756l4.106-0.008l5.269-3.513C159.257,92.667,156.756,48.6,155.904,43.916z"/>
                <Path fill="#7F7F7F" stroke="#363636" d="M159.085,89.684
                      c-0.579-9.981-2.465-41.826-3.181-45.768c-0.797-4.385-0.662-11.569-2.913-15.961c4.011,0.784,7.67,2.676,10.315,5.673
	c0.866,10.241,1.835,27.937,1.835,32.317c0,4.952-0.619,11.143-0.929,15.785c-0.075,1.128-0.096,3.136-0.079,5.762
	C162.532,88.464,160.837,89.159,159.085,89.684z"/>
                <Path d="M156.862,54.986c-1.277-14.05-1.998-22.134-7.664-29.059c-2.874-3.513-8.575-6.71-21.076-12.454
                      c-9.187-4.221-22.812-4.774-28.42-4.811c-5.608,0.037-19.607,0.59-28.794,4.811c-12.501,5.744-18.202,8.941-21.076,12.454
	c-5.666,6.924-6.387,15.008-7.664,29.059s-0.639,38.639-0.639,38.639l3.513,2.555l-1.916-15.966l-0.319-11.176
	c0,0,5.109-31.933,9.899-37.681s14.689-14.37,19.479-15.647c3.792-1.011,20.764-2.423,27.516-2.967
	c6.752,0.544,23.351,1.955,27.143,2.967c4.79,1.277,14.689,9.899,19.479,15.647c4.79,5.748,9.899,37.681,9.899,37.681l-0.319,11.176
	l-1.916,15.966l3.513-2.555C157.501,93.625,158.139,69.037,156.862,54.986z"/>
                <Path fill="#202020" d="M154.946,92.348c0.174-0.597,0.326-1.197,0.467-1.798c0.455-0.083,0.909-0.17,1.36-0.268
                      c-0.505,4.973-0.876,9.993-0.23,15.159c0.098,0.967,0.193,1.934,0.286,2.9c-1.865,1.093-4.005,1.547-5.99,2.359
	C151.854,104.556,153.19,98.436,154.946,92.348z"/>
                <Path fill="#282828" d="M150.838,110.699c1.986-0.813,4.125-1.267,5.99-2.359
                      c2.014,20.921,2.785,41.579,0.393,62.522c-2.561,2.392-5.897,4.057-9.341,4.89C147.676,154.075,147.276,132.25,150.838,110.699z"/>
                <Path fill="#7F7F7F" stroke="#363636" d="M158.617,177.929
                      c1.757-0.258,3.513-0.583,5.27-0.959c0.105,0,0.21-0.013,0.314-0.036c-0.085,3.599-0.607,25.985-0.607,31.388
	c0,4.376,0.171,8.237,0.259,9.926c-0.68,0.519-1.28,1.073-1.881,0.872c-2.065-0.614-4.13-1.205-6.196-1.773
	C157.934,204.206,159.556,191.336,158.617,177.929z"/>
                <Path fill="#7F7F7F" stroke="#363636" d="M139.79,178.516
                      c2.705,0.024,5.41,0.037,8.116,0.043c0.041,4.909,0.062,9.809,0.016,14.695c0,7.221-1.199,14.441-1.646,21.662
	c-2.665-0.63-5.331-1.217-8.001-1.752C138.589,201.604,139.148,190.061,139.79,178.516z"/>
                <Path fill="#282828" d="M155.776,217.348c-3.165-0.87-6.332-1.682-9.501-2.431
                      c0.447-7.221,1.646-14.441,1.646-21.662c0.022-2.271,0.027-4.545,0.025-6.822c3.882-1.518,7.616-3.635,10.798-6.349
	C159.376,192.719,157.818,204.912,155.776,217.348z"/>
                <Path d="M157.221,170.862c-0.014,0.12-0.026,0.24-0.04,0.36c0,0,0.001,0.099,0.16,0.364
                      c0.639,0.958,0.798,0.594,0.798,1.232c0.205,1.714,0.36,3.416,0.478,5.111c0.05,0.72,0.09,1.438,0.126,2.156
	c-3.181,2.714-6.916,4.831-10.798,6.349c-0.003-2.622-0.018-5.246-0.04-7.874c-0.008-0.936-0.016-1.872-0.025-2.808
	C151.324,174.918,154.661,173.254,157.221,170.862z"/>
                <Path fill="#7F7F7F" stroke="#363636" d="M146.324,274.365
                      c4.79-11.176,4.471-26.504,6.387-38.958c1.006-6.125,2.089-12.12,3.065-18.058c2.066,0.568,4.131,1.159,6.196,1.773
	c0.601,0.2,1.202-0.353,1.881-0.872c0.03,0.581,0.051,0.907,0.051,0.907s0.619,18.571,0.619,26.618
	c0,8.047-0.619,16.714-1.857,21.976c-1.238,5.262-3.746,10.408-6.19,13.619c-1.21,1.589-3.674,4.442-3.674,4.442h-0.603
	C148.064,282.106,143.987,280.207,146.324,274.365z"/>
                <Path fill="#7F7F7F" stroke="#363636" d="M146.324,224.869
                      c0.639,3.832,1.277,7.664,0.958,11.496c-1.277,8.941-2.555,17.244-4.471,26.185c-0.244,1.708-1.609,3.041-3.378,3.718
	c-2.626-9.156-1.204-20.094-1.412-29.265c-0.067-7.958,0.036-15.902,0.252-23.838c2.669,0.535,5.336,1.122,8.001,1.752
	C146.07,218.234,146.023,221.552,146.324,224.869z"/>
                <Path d="M146.275,214.917c3.169,0.749,6.335,1.561,9.501,2.431c-0.321,1.955-0.656,3.919-0.993,5.889l-8.666-2.737
                      C146.097,218.639,146.16,216.778,146.275,214.917z"/>
                <Path fill="#282828" d="M147.282,236.365c0.319-3.832-0.319-7.664-0.958-11.496
                      c-0.132-1.456-0.195-2.912-0.209-4.368l8.666,2.737c-0.689,4.014-1.397,8.06-2.071,12.169c-1.592,10.349-1.643,22.68-4.363,32.967
	l-3.656-15.462C145.663,247.436,146.473,242.028,147.282,236.365z"/>
                <Path d="M142.812,262.549c0.702-3.277,1.318-6.469,1.88-9.637l3.656,15.462c-0.553,2.092-1.214,4.102-2.024,5.991
                      c-0.384,0.961-0.592,1.813-0.658,2.586c-3.167-3.023-5.085-6.683-6.233-10.683C141.203,265.591,142.568,264.258,142.812,262.549z"/>
                <Path fill="#A3A3A3" d="M156.223,69.037c0,0-5.714-30.396-7.664-35.765c-3.705-10.199-20.437-19.798-20.437-19.798
                      s-0.319,0.958-4.151,0.639s-18.202-2.235-18.202-2.235s-2.555-0.319-3.193-1.277s-1.06-1.436-1.06-1.436h-1.814h-2.187
	c0,0-0.421,0.478-1.06,1.436s-3.193,1.277-3.193,1.277s-14.37,1.916-18.202,2.235s-4.151-0.639-4.151-0.639
	s-16.732,9.6-20.437,19.798c-1.95,5.369-7.664,35.765-7.664,35.765l3.623-0.906l-0.11-0.691c0,0,2.235-7.345,3.193-9.261
	c0.958-1.916,4.471-5.109,7.664-6.387c3.193-1.277,17.882-6.706,31.294-7.345c5.039-0.24,8.873-0.345,11.231-0.382
	c2.358,0.037,5.819,0.142,10.857,0.382c13.412,0.639,28.101,6.067,31.294,7.345s6.706,4.471,7.664,6.387
	c0.958,1.916,3.193,9.261,3.193,9.261l-0.11,0.691L156.223,69.037z"/>
                <Path fill="#282828" d="M139.432,266.257c-1.547,2.29-4.508,3.439-6.839,3.957
                      c-10.964,2.99-21.927,4.23-32.891,3.569c-10.964,0.661-22.301-0.579-33.264-3.569c-2.331-0.518-5.292-1.667-6.839-3.957
	c-1.133,3.955-3.02,7.578-6.121,10.583c8.744,16.131,28.88,15.645,46.224,15.768c17.344-0.123,37.106,0.363,45.851-15.768
	C142.452,273.835,140.565,270.212,139.432,266.257z"/>
                <Path fill="#7F7F7F" stroke="#363636" d="M99.702,121.868
                      c-14.367-0.192-29.108,0.688-43.475,1.627c0.776,18.391,1.997,36.707,3.014,55.021c0.641,11.544,1.2,23.088,1.516,34.649
	c0.217,7.936,0.319,15.88,0.252,23.838c-0.088,3.886,0.116,8.09,0.18,12.341c11.759,5.225,25.693,4.586,38.512,4.902
	c12.82-0.317,26.38,0.322,38.139-4.902c0.065-4.251,0.269-8.455,0.18-12.341c-0.067-7.958,0.036-15.902,0.252-23.838
	c0.315-11.561,0.874-23.104,1.516-34.649c1.018-18.314,2.239-36.63,3.014-55.021C128.437,122.556,114.07,121.675,99.702,121.868z"/>
                <Path fill="#7F7F7F" stroke="#363636" d="M137.841,249.344
                      c-11.759,5.225-25.319,4.426-38.139,4.743c-12.82-0.317-26.753,0.482-38.512-4.743c0.065,4.264-0.01,8.576-0.662,12.663
	c1.441,2.379,3.177,4.579,5.591,5.652c10.685,4.007,22.191,3.768,33.584,4.144c11.392-0.376,22.525-0.137,33.21-4.144
	c2.414-1.073,4.15-3.272,5.591-5.652C137.852,257.92,137.777,253.609,137.841,249.344z"/>
                <Path d="M138.504,262.007c-1.441,2.379-3.177,4.579-5.591,5.652c-10.685,4.007-21.818,3.768-33.21,4.144
                      c-11.392-0.376-22.898-0.137-33.584-4.144c-2.414-1.073-4.15-3.272-5.591-5.652c-0.231,1.449-0.533,2.87-0.929,4.25
	c1.547,2.29,4.508,3.439,6.839,3.957c10.964,2.99,22.281,4.043,33.264,4.043s21.927-1.053,32.891-4.043
	c2.331-0.518,5.292-1.667,6.839-3.957C139.037,264.877,138.735,263.456,138.504,262.007z"/>
                <Path fill="#7F7F7F" stroke="#363636" d="M145.666,276.951
                      c-0.039-0.037-0.075-0.075-0.113-0.112c-8.744,16.131-28.507,15.645-45.851,15.768c-17.344-0.123-37.48,0.363-46.224-15.768
	c-0.038,0.037-0.075,0.075-0.113,0.112c0.334,3.928-3.077,5.764-6.532,8.86h0.694l3.631,5.317c0,0,4.539,2.205,9.597,2.983
	c5.058,0.778,17.378,2.723,23.344,2.983c3.912,0.17,11.262,0.34,15.603,0.437c4.341-0.097,11.318-0.267,15.23-0.437
	c5.966-0.259,18.286-2.205,23.344-2.983c5.058-0.778,9.597-2.983,9.597-2.983l3.631-5.317h0.694
	C148.744,282.715,145.333,280.879,145.666,276.951z"/>
                <Path fill="#7F7F7F" stroke="#363636" d="M147.905,178.56
                      c-2.705-0.007-5.41-0.02-8.116-0.043c1.015-18.272,2.233-36.547,3.009-54.896c2.21,0.044,4.329,0.357,6.196,1.606
	C147.361,142.961,147.758,160.817,147.905,178.56z"/>
                <Path fill="#363636" d="M145.366,109.272c0.943-6.063,1.943-11.954,2.928-17.82
                      c1.333-7.942,2.639-15.836,3.738-24.037c1.772,0.773,3.522,1.479,5.469,1.302c-0.883,7.361-0.415,14.721-2.088,21.832
	c-0.141,0.601-0.293,1.201-0.467,1.798c-3.137,10.875-4.936,21.854-5.951,32.879c-1.867-1.249-3.986-1.562-6.196-1.606
	c0.004-0.099,0.009-0.199,0.013-0.298C143.131,118.532,144.728,114.062,145.366,109.272z"/>
                <Path fill="#595959" d="M149.518,58.179c-0.958-1.916-4.471-5.109-7.664-6.387s-17.882-6.706-31.294-7.345
                      c-5.039-0.24-8.499-0.345-10.857-0.382c-2.358,0.037-6.192,0.142-11.231,0.382c-13.412,0.639-28.101,6.067-31.294,7.345
	c-3.193,1.277-6.706,4.471-7.664,6.387c-0.958,1.916-3.193,9.261-3.193,9.261l8.941,56.202c0,0,11.496-0.958,25.866-1.277
	c8.03-0.178,14.637-0.157,18.575-0.104c3.939-0.053,10.172-0.074,18.202,0.104c14.37,0.319,25.866,1.277,25.866,1.277l8.941-56.202
	C152.711,67.44,150.476,60.095,149.518,58.179z"/>
                <Path fill="#282828" d="M146.324,65.524c-3.513-3.193-15.008-7.664-25.227-9.58
                      c-7.246-1.359-16.578-1.433-21.395-1.361c-4.817-0.072-14.522,0.002-21.768,1.361c-10.219,1.916-21.714,6.387-25.227,9.58
	c-3.513,3.193-4.151,5.109-3.832,8.941s7.345,40.235,7.664,41.832s0,3.832,5.429,3.193s16.605-1.597,21.714-1.597
	c5.109,0,10.218,0.319,10.218,0.319s1.597-0.319,1.597-1.916c0-1.309,0.429-7.34,0.584-9.47c0.031-0.423,0.382-0.748,0.806-0.748
	h2.815h2.442c0.424,0,0.776,0.325,0.806,0.748c0.155,2.131,0.584,8.161,0.584,9.47c0,1.597,1.597,1.916,1.597,1.916
	s5.109-0.319,10.218-0.319c5.109,0,16.286,0.958,21.714,1.597c5.429,0.639,5.109-1.597,5.429-3.193
	c0.319-1.597,7.345-38,7.664-41.832C150.476,70.633,149.837,68.717,146.324,65.524z"/>
                <Path d="M138.361,7.501c9.487,3.271,15.133,6.67,16.105,7.277c-0.24,1.396-0.321,2.818-0.233,4.231
                      C148.812,15.357,143.519,11.515,138.361,7.501z"/>
                <Path fill="#363636" d="M163.744,153.679c2.349,2.446,2.562,6.179,2.641,9.569c0.015,0.66,0.025,1.348-0.259,1.943
                      c-0.183,0.384-0.478,0.705-0.682,1.079c-0.556,1.023-0.359,2.269-0.462,3.429c-0.045,0.507-0.164,1.036-0.507,1.412
	c-0.343,0.376-0.966,0.534-1.373,0.229c-0.004-2.195-0.008-4.39-0.012-6.585c0.822,0.132,1.608-0.512,1.925-1.281
	c0.317-0.77,0.275-1.633,0.228-2.464c-0.106-1.869-0.408-4.064-2.057-4.95c-0.166-0.089-0.356-0.175-0.433-0.348
	c-0.079-0.178-0.01-0.383,0.061-0.564c0.154-0.395,0.313-0.788,0.477-1.179c0.053-0.126,0.15-0.276,0.283-0.246
	s-0.018,0.29-0.064,0.161"/>
                <Path fill="#363636" d="M156.345,94.501c0.611-0.572,1.26-0.962,1.755-1.259c0.572-0.343,0.992-0.572,0.992-0.572
                      c-0.164,2.136,1.063,4.475,2.871,5.624c2.133,1.356,4.564,2.15,6.902,3.109c2.338,0.959,4.672,2.146,6.308,4.072
	c1.452,1.709,2.24,4.122,1.669,6.251l-15.755-4.627c-0.176-0.391-0.272-0.922-0.233-1.658c-0.398-0.15-0.968-0.414-1.366-0.564
	c-0.959,1.524-1.158,1.645-2.723,2.599C155.926,102.323,156.002,99.08,156.345,94.501z"/>
                <Path d="M176.56,112.521c-4.28-1.314-6.903-2.095-11.183-3.409c-0.796-0.244-2.137-0.641-2.927-0.905
                      c-0.508-0.169-1.057-0.426-1.363-1.109l15.755,4.627C176.769,111.996,176.678,112.262,176.56,112.521z"/>
                <Circle cx="99.272" cy="15.753" r="3.075"/>
            </Svg>
        ),
        timer: (
            <Svg style={[{width: 100, height: 100}, props.style]} viewBox="0 0 100 100">
                <Circle fill="#FFFFFF" stroke="#B4B4B4" strokeWidth="2" cx="50" cy="50" r="43.835"/>
                <Line fill="none" stroke="#B6252B" strokeWidth="2" x1="50" y1="15.762" x2="50" y2="11.671"/>
                <Path fill="none" stroke="#B6252B" strokeWidth="2" d="M50,15.76
                      c-18.91,0-34.24,15.33-34.24,34.24c0,6.75,1.953,13.043,5.325,18.347C27.159,77.901,37.839,84.24,50,84.24
	c18.91,0,34.24-15.33,34.24-34.24C84.24,31.09,68.91,15.76,50,15.76z"/>
                <Line fill="none" stroke="#B6252B" strokeWidth="2" x1="84.24" y1="50" x2="87.745" y2="50"/>
                <Line fill="none" stroke="#B6252B" strokeWidth="2" x1="12.255" y1="50" x2="15.76" y2="50"/>
                <Line fill="none" stroke="#B6252B" strokeWidth="2" x1="50" y1="84.24" x2="50" y2="87.745"/>
            </Svg>
        ),
    }
}

export default class Icon extends Component {
    render() {
        return Icons(this.props)[this.props.name] || null;
    }
}
