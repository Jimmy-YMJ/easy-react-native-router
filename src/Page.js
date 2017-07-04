import React, { PureComponent, PropTypes } from 'react';
import {
  View
} from 'react-native';

export default class Page extends PureComponent{
  render(){
    return <View {...this.props}>{this.props.children}</View>;
  }
}
