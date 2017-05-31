import React, { Component } from 'react';
import { ItemTypes } from '../View/Constants';
import { DragSource } from 'react-dnd';
import PropTypes from 'prop-types';

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}
const componentSource = {
  beginDrag(props) {
    return {};
  }
};
 class SingleComponent extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
        SIDE BAR
      </div>
    );
  }
}
SingleComponent.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.COMPONENT, componentSource, collect)(SingleComponent);
