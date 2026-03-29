import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const ORANGE = "#f5a742";
const MUTED = "#c0b4a4";
const BORDER = "#ede8e0";
const AMBER = "#fff3dc";
const TEXT = "#2d2520";
const LABEL = "#2d2520";
const WHITE = "#ffffff";

export const LoginForm = () => {
  const router = useRouter();

  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const correoCorrecto = "cliente@suenosdorados.com";
  const contrasenaCorrecta = "12345678";

  const handleLogin = async () => {
    if (!correo.trim()) {
      Alert.alert("Error", "Ingrese el correo electrónico");
      return;
    }

    if (!correo.includes("@")) {
      Alert.alert("Error", "Ingrese un correo válido");
      return;
    }

    if (!contrasena.trim()) {
      Alert.alert("Error", "Ingrese la contraseña");
      return;
    }

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    if (
      correo.trim().toLowerCase() !== correoCorrecto ||
      contrasena !== contrasenaCorrecta
    ) {
      setLoading(false);
      Alert.alert("Error", "Correo o contraseña incorrectos");
      return;
    }

    setLoading(false);
    Alert.alert("Éxito", "Inicio de sesión exitoso");
    router.replace(".../(tabs)/home" as any);
  };

  return (
    <View
      style={{
        width: "100%",
        maxWidth: 520,
        backgroundColor: WHITE,
        padding: 24,
        borderRadius: 18,
        borderWidth: 1.5,
        borderColor: BORDER,
      }}
    >
      <Text
        style={{
          color: TEXT,
          fontSize: 26,
          fontWeight: "800",
          textAlign: "center",
          marginBottom: 6,
        }}
      >
        Iniciar sesión
      </Text>

      <Text
        style={{
          color: MUTED,
          fontSize: 14,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Ingresa a tu cuenta para continuar
      </Text>

      <View style={{ marginBottom: 14 }}>
        <Text
          style={{
            color: LABEL,
            fontSize: 11,
            fontWeight: "700",
            letterSpacing: 1.5,
            textTransform: "uppercase",
            marginBottom: 6,
          }}
        >
          Correo electrónico
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: WHITE,
            borderWidth: 1.5,
            borderColor: BORDER,
            borderRadius: 14,
            paddingHorizontal: 14,
          }}
        >
          <TextInput
            style={{ flex: 1, height: 48, fontSize: 15, color: TEXT }}
            placeholder="cliente@suenosdorados.com"
            placeholderTextColor={MUTED}
            value={correo}
            onChangeText={setCorreo}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Feather name="mail" size={18} color={MUTED} />
        </View>
      </View>

      <View style={{ marginBottom: 8 }}>
        <Text
          style={{
            color: LABEL,
            fontSize: 11,
            fontWeight: "700",
            letterSpacing: 1.5,
            textTransform: "uppercase",
            marginBottom: 6,
          }}
        >
          Contraseña
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: WHITE,
            borderWidth: 1.5,
            borderColor: BORDER,
            borderRadius: 14,
            paddingHorizontal: 14,
          }}
        >
          <TextInput
            style={{ flex: 1, height: 48, fontSize: 15, color: TEXT }}
            placeholder="12345678"
            placeholderTextColor={MUTED}
            value={contrasena}
            onChangeText={setContrasena}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Feather
              name={showPassword ? "eye" : "eye-off"}
              size={18}
              color={MUTED}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={handleLogin}
        disabled={loading}
        activeOpacity={0.85}
        style={{
          height: 52,
          borderRadius: 16,
          backgroundColor: loading ? "#e8a95a" : ORANGE,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {loading ? (
          <ActivityIndicator color={WHITE} />
        ) : (
          <Text
            style={{
              color: WHITE,
              fontSize: 16,
              fontWeight: "800",
              letterSpacing: 0.5,
            }}
          >
            Ingresar
          </Text>
        )}
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: 18,
          marginBottom: 18,
        }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: BORDER }} />
        <Text style={{ color: MUTED, fontSize: 12 }}>o continúa con</Text>
        <View style={{ flex: 1, height: 1, backgroundColor: BORDER }} />
      </View>

      <View style={{ flexDirection: "row", gap: 12 }}>
        {[
          { label: "Google", icon: "chrome" as const },
          { label: "Facebook", icon: "facebook" as const },
        ].map((item) => (
          <TouchableOpacity
            key={item.label}
            activeOpacity={0.75}
            style={{
              flex: 1,
              height: 48,
              borderRadius: 14,
              backgroundColor: AMBER,
              borderWidth: 1.5,
              borderColor: BORDER,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <Feather name={item.icon} size={18} color={TEXT} />
            <Text style={{ color: TEXT, fontSize: 14, fontWeight: "600" }}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        onPress={() => router.push("/(tabs)/register" as any)}
        style={{ alignItems: "center", paddingVertical: 12 }}
      >
        <Text style={{ color: MUTED, fontSize: 14 }}>
          ¿No tienes cuenta?{" "}
          <Text style={{ color: ORANGE, fontWeight: "800" }}>
            Regístrate
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};