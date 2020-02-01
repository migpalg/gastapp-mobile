# Gastapp Mobile App 📱🤗💵

Gastapp helps you to manage your personal expenses.

| Login page | Home Page |
|:---:|:---:|
| ![image](https://user-images.githubusercontent.com/45249613/73596649-067f4580-44f2-11ea-91ed-e60475a252f0.png) | ![image](https://user-images.githubusercontent.com/45249613/73596744-1ea39480-44f3-11ea-9f99-866c1ccd1959.png) |

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