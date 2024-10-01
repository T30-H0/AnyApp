import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NewsTab from './components/NewsTab';
import RenderHot from './components/RenderHot';
import RenderNew from './components/RenderNew';

const tabs = ['New', 'Hot', 'Economy'];
const News = () => {
  const [selectedTab, setSelectedTab] = useState('New');

  const onSelectedTab = (tab: string) => {
    setSelectedTab(tab);
  };

  const renderTab = () => {
    switch (selectedTab) {
      case 'Hot':
        return <RenderHot />;

      case 'Economy':
        return (
          <View>
            <Text>Economy</Text>
          </View>
        );

      default:
        return <RenderNew />;
    }
  };

  return (
    <View style={styles.container}>
      <NewsTab
        options={tabs}
        selectedTab={selectedTab}
        onTabPress={onSelectedTab}
      />
      {renderTab()}
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
