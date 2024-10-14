import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons'; // Thêm thư viện biểu tượng FontAwesome

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Ẩn thanh trạng thái */}
      <StatusBar hidden={true} />
      
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.username}>Christie Doe</Text>
        </View>
        <Image
          source={require('./assets/1.png')} // Đổi thành ảnh PNG
          style={styles.profilePicture}
        />
      </View>
      <View style={styles.insights}>
        <Text style={styles.sectionTitle}>Your Insights</Text>
        <View style={styles.insightGrid}>
          {insightsData.map((item, index) => (
            <View key={index} style={styles.insightCard}>
              <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
                <FontAwesome name={item.icon} size={30} color={item.iconColor} />
              </View>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardCount}>{item.count}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.exploreMore}>
        <View style={styles.exploreHeader}>
          <Text style={styles.sectionTitle}>Explore More</Text>
          <FontAwesome name="arrow-right" size={20} color="gray" />
        </View>
        <Image
          source={require('./assets/1.png')} // Đổi thành ảnh PNG
          style={styles.exploreImage}
        />
      </View>
      <View style={styles.footer}>
        <FontAwesome name="home" size={24} color="blue" />
        <FontAwesome name="bell" size={24} color="gray" />
        <FontAwesome name="qrcode" size={24} color="gray" />
        <FontAwesome name="shopping-cart" size={24} color="gray" />
      </View>
    </View>
  );
};

const insightsData = [
  { title: 'Scan new', count: 'Scanned 483', icon: 'qrcode', color: '#E0E7FF', iconColor: '#4F46E5' },
  { title: 'Counterfeits', count: 'Counterfeited 32', icon: 'exclamation-triangle', color: '#FEE2E2', iconColor: '#DC2626' },
  { title: 'Success', count: 'Checkouts 8', icon: 'check-circle', color: '#D1FAE5', iconColor: '#065F46' },
  { title: 'Directory', count: 'History 26', icon: 'calendar', color: '#DBEAFE', iconColor: '#3B82F6' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 0, // Xóa padding
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '600',
  },
  username: {
    color: '#6B7280',
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  insights: {
    marginTop: 16,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  insightGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  insightCard: {
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    flexBasis: '48%', // Thay đổi kích thước của card
    marginBottom: 16,
  },
  iconContainer: {
    padding: 8,
    borderRadius: 50,
  },
  cardTitle: {
    marginTop: 8,
    fontWeight: '600',
  },
  cardCount: {
    color: '#6B7280',
  },
  exploreMore: {
    marginTop: 16,
    padding: 16,
  },
  exploreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exploreImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginTop: 8,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 4,
    elevation: 2,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default HomeScreen;
