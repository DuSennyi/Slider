// SliderScreen.js
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const slides = [
    {
      key: '1',
      title: 'Đa Dạng',
      text: 'Đẹp Mắt',
      image: require('./assets/AnyConv.com__10.jpg'), // Đường dẫn đến ảnh 1
    },
    {
      key: '2',
      title: 'Phong Phú',
      text: 'Tuyệt Sắc',
      image: require('./assets/AnyConv.com__11.jpg'), // Đường dẫn đến ảnh 2
    },
    {
      key: '3',
      title: 'Đỉnh Cao',
      text: 'Cầu Kỳ',
      image: require('./assets/AnyConv.com__12.jpg'), // Đường dẫn đến ảnh 3
    },
  ];

const SliderScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);

  const handleSkip = () => {
    if (index > 0) {
      setIndex(index - 1); // Quay lại ảnh trước
    }
  };

  const handleNext = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1); // Chuyển sang ảnh tiếp theo
    }
  };

  const handleFinish = () => {
    navigation.navigate('Home'); // Chuyển đến trang chủ
  };

  return (
    <View style={styles.container}>
      <Swiper 
        showsPagination={true} 
        loop={false} 
        index={index} 
        onIndexChanged={setIndex} 
        containerStyle={styles.wrapper}
        paginationStyle={styles.pagination}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      >
        {slides.map((slide) => (
          <View style={styles.slide} key={slide.key}>
            <Image source={slide.image} style={styles.image} />
            <View style={styles.overlay}>
              <Text style={styles.title}>{slide.title}</Text>
              <Text style={styles.text}>{slide.text}</Text>
            </View>
          </View>
        ))}
      </Swiper>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleSkip} style={styles.button}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        {index < slides.length - 1 ? (
          <TouchableOpacity onPress={handleNext} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleFinish} style={styles.button}>
            <Text style={styles.buttonText}>Finish</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
    height: '80%',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Nền tối với độ trong suốt
    padding: 20,
    borderRadius: 10,
    elevation: 5, // Đổ bóng cho lớp phủ
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    marginTop: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 30,
    flex: 1,
    marginHorizontal: 5,
    elevation: 2, // Đổ bóng cho nút
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
  pagination: {
    bottom: 30, // Điều chỉnh vị trí của pagination
  },
  dotStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Màu của các dot không được chọn
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  activeDotStyle: {
    backgroundColor: '#fff', // Màu của dot đang được chọn
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});

export default SliderScreen;
