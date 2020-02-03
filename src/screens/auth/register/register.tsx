import React from 'react';
import {View, Text, StatusBar, SafeAreaView} from 'react-native';
import {Input, Button} from '../../../components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './register.style';

const Register = () => {
  return (
    <View style={styles.wrapper}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView>
        <View style={styles.arrowBack}>
          <TouchableOpacity>
            <Icon name="chevron-left" size={40} />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Crea tu cuenta</Text>

          <Input
            returnKeyType="next"
            style={styles.registerInput}
            placeholder="Nombre completo"
          />
          <Input
            returnKeyType="next"
            style={styles.registerInput}
            placeholder="Correo electrónico"
          />
          <Input
            secureTextEntry={true}
            returnKeyType="next"
            style={styles.registerInput}
            placeholder="Contraseña"
          />
          <Input
            secureTextEntry={true}
            returnKeyType="done"
            style={styles.registerInput}
            placeholder="Repite tu contraseña"
          />

          <Button textColor="#FFF" style={styles.button}>
            Registrarme
          </Button>

          <Text style={styles.termsAndConditionsText}>
            Al registrate, aceptas nuestras políticas de tratamiento de datos.
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Register;
