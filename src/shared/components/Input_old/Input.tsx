import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  View,
  TextInputProps,
  Text,
  TextInput,
  Image,
  ImageSourcePropType,
} from "react-native";
import { styles } from "./Input.Styled";
import { useField } from "@unform/core";

interface InputProps extends TextInputProps {
  name: string;
  label?: string;
  source: ImageSourcePropType;
}

export function Input({ name, label, source, ...rest  }: InputProps) {
  const inputElementRef = useRef<TextInput>(null);
  const inputValueRef = useRef({ value: "" });

  const { fieldName, defaultValue = "", registerField, error } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    inputValueRef.current.value = defaultValue;

    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      getValue: (ref) => ref.value,
      setValue: (ref, value) => {
        inputValueRef.current.value = value;
        inputElementRef.current?.setNativeProps({ text: value });
      },
      clearValue: () => {
        inputValueRef.current.value = "";
        inputElementRef.current?.clear();
      },
    });
  }, [fieldName, registerField]);

  const handleFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleOnBlur = useCallback(() => {
    setIsFocused(false)
    setIsFilled(!!inputValueRef.current.value)
  }, [])

  const handleOnChangeText = useCallback((value: string) => {
    inputValueRef.current.value = value
  }, [])

  return (
    <View
      style={[
        styles.container,
        isFocused && styles.focused,
        isFilled && styles.filled,
        error && styles.error,
      ]}
    >
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <Image resizeMode="contain" style={styles.inputImg} source={source} />
        <TextInput
          ref={inputElementRef}
          defaultValue={defaultValue}
          style={styles.input}
          placeholderTextColor="#808080"
          onFocus={handleFocus}
          onBlur={handleOnBlur}
          onChangeText={handleOnChangeText}
          {...rest}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}
