# Gastapp Mobile App 📱🤗💵

Gastapp helps you to manage your personal expenses.

This project is made in `react-native`.

To debug on android, run the following command:

```
npx react-native run-android
```

or in ios:

```
npx react-native run-ios
```

Please configure `Android Studio` and `Xcode` propertly.

```typescript
interface SayHiProps {
  name: string;
}

const SayHi: React.FC<SayHiProps> = (props) => (
  <View>
    <Text>
      This project is Open, {props.name}, feel free to fork this 😊
    </Text>
  </View>
);
```