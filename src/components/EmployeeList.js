import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }

  keyExtractor = (item) => item.uid;

  renderRow = ({ item }) => {
    return (
      <View style={{ padding: 10 }}>
        <Text>{item.name}</Text>
      </View>
    );
  }

  render() {
    if (!this.props.employees) {
      return (
        <View style={[styles.loaderContainer, styles.loaderHorizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    return (
      <View>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.employees ? this.props.employees : []}
          renderItem={this.renderRow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  loaderHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});

const mapStateToProps = (state) => {
  const employees = _.map(state.employees.data, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
