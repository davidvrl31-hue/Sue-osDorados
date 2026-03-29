import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoginForm } from "../../../../components/shared/auth/LoginForm";

const BG = "#fffdf9";
const ORANGE = "#f5a742";
const AMBER = "#fff3dc";

export default function LoginScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: BG }}>
      
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            paddingHorizontal: 20,
            paddingVertical: 30,
          }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >

          <View style={{ alignItems: "center", marginBottom: 18 }}>
            
            <View
              style={{
                width: 56,
                height: 56,
                borderRadius: 18,
                backgroundColor: AMBER,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 10,
                borderWidth: 1.5,
                borderColor: "#f3dcb5",
              }}
            >
              <Text style={{ fontSize: 24 }}>🌙</Text>
            </View>

            <Text
              style={{
                color: ORANGE,
                fontSize: 10,
                letterSpacing: 3,
                fontWeight: "700",
                marginBottom: 4,
              }}
            >
              SUEÑOS DORADOS
            </Text>

            <Text
              style={{
                color: "#2d2520",
                fontSize: 28,
                fontWeight: "800",
                textAlign: "center",
              }}
            >
              Bienvenida de nuevo
            </Text>

            <Text
              style={{
                color: "#c0b4a4",
                fontSize: 13,
                marginTop: 4,
                textAlign: "center",
              }}
            >
              Tu descanso perfecto te espera
            </Text>
          </View>

          <View style={{ width: "100%", alignItems: "center" }}>
            <LoginForm />
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}