import { Alert } from "react-native";

export const showAlert = (buttonName, msg, successCallback) => {
    Alert.alert(
        "BSS-Liberty",
        msg,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: buttonName, onPress: successCallback, style:'destructive'}
        ]
      );
}