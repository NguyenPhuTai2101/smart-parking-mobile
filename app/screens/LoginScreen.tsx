import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function LoginScreen() {
  return (
    <View className="flex-1 bg-white items-center justify-center px-6">
      <Image source={require("../../assets/logo.png")} className="w-28 h-40 mb-4" />

      <Text className="self-start text-gray-600 mb-1">Số điện thoại</Text>
      <TextInput
        placeholder="0788655673"
        className="w-full h-14 border rounded-2xl px-4 py-3 mb-3 border-gray-300"
        placeholderTextColor="#858585"
      />

      <Text className="self-start text-gray-600 mb-1">Mật khẩu</Text>
      <TextInput
        placeholder="***********"
        placeholderTextColor="#858585"
        secureTextEntry
        className="w-full h-14 border rounded-2xl px-4 py-3 mb-2 border-gray-300"
      />

      <TouchableOpacity className="self-end mb-4">
        <Text className="text-blue-500 text-sm">Quên mật khẩu ?</Text>
      </TouchableOpacity>

      <TouchableOpacity className="bg-blue-500 w-full h-14 justify-center rounded-2xl mb-4">
        <Text className="text-white text-center font-semibold text-xl">Đăng nhập</Text>
      </TouchableOpacity>

      <Text className="text-gray-600 mb-4">
        Chưa có tài khoản?{" "}
        <Text className="text-blue-500">Đăng ký</Text>
      </Text>

      <Text className="text-gray-400 mb-4">hoặc</Text>

      <TouchableOpacity className="flex-row items-center border border-gray-300 rounded-lg w-full py-3 mb-3">
        <Image
          source={{ uri: "https://img.icons8.com/color/48/google-logo.png" }}
          className="w-5 h-5 ml-4"
        />
        <Text className="text-center text-gray-700 flex-1 mr-4">
          Tiếp tục với Google
        </Text>
      </TouchableOpacity>

      <TouchableOpacity className="flex-row items-center border border-gray-300 rounded-lg w-full py-3 mb-3">
        <Image
          source={{ uri: "https://img.icons8.com/color/48/facebook-new.png" }}
          className="w-5 h-5 ml-4"
        />
        <Text className="text-center text-gray-700 flex-1 mr-4">
          Tiếp tục với Facebook
        </Text>
      </TouchableOpacity>
    </View>
  );
}


