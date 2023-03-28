import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import theme from '../theme';
import FileReader from 'react-native-filereader';
import ReactNativeBlobUtil from 'react-native-blob-util';

const PageTest = () => {
  const [imagePlace, setImage] = useState(''); // initial it to an empty string

  const generar = () => {
    console.log('Generar');
    const form = new FormData();
    form.append('prompt', 'photograph of a cat surfing');

    //// send http request in a new thread (using native code)
    // ReactNativeBlobUtil.fetch(
    //   'POST',
    //   'https://clipdrop-api.co/text-to-image/v1',
    //   {
    //     Authorization: 'Bearer access-token',
    //     'Content-Type': 'multipart/form-data',
    //     'x-api-key':
    //       '0a21d064ff8e4e06687a53c990b4aefd10732b26b45cd4b631665ad423866580e303181ae2fc6ac31cc47fa1bf897c86',
    //   }, 
    // )
    //   .then(res => {
    //     console.log('Success');
    //     let status = res.info().status;

    //     if (status == 200) {
    //       console.log('Success');
    //       // the conversion is done in native code
    //       let base64Str = res.base64();
    //       // the following conversions are done in js, it's SYNC
    //       let text = res.text();
    //       let json = res.json();
    //     } else {
    //       // handle other status codes
    //     }
    //   })
    //   // Something went wrong:
    //   .catch((errorMessage, statusCode) => {
    //     // error handling
    //   });

    fetch('https://clipdrop-api.co/text-to-image/v1', {
      method: 'POST',
      headers: {
        'x-api-key':
          '0a21d064ff8e4e06687a53c990b4aefd10732b26b45cd4b631665ad423866580e303181ae2fc6ac31cc47fa1bf897c86',
      },
      body: form,
    })
      .then(response => {
        const array = response.arrayBuffer();
        // response.blob();
        // // setImage(URL.createObjectURL(data));

        // console.log('blob');
        // var reader = new FileReader();
        // reader.readAsArrayBuffer(response);
        // if (response.blob()) {

        //   reader.readAsDataURL(response.blob());
        // }
        // reader.onloadend = () => {
        //   var base64data = reader.result;
        //   setImage(base64data);
        //   // console.log(base64data);
        // };

        // console.log(response.json())
      })
      .then(buffer => {
        // buffer here is a binary representation of the returned image
        console.log(buffer);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pagina de ejemplo... </Text>
      {/* <TextInput label='Prompt' variant="outlined" /> */}
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TextInput
          style={styles.input}
          onChangeText={() => {}}
          placeholder="Ingrese lo que desea generar..."
          placeholderTextColor="#b0b0b0"
        />
        <TouchableOpacity style={styles.boton} onPress={() => generar()}>
          <Text style={{color: '#fff'}}>Enviar</Text>
        </TouchableOpacity>
        {/* <Button title="Enviar" color='#505050' style={{alignSelf: 'flex-start'}} /> */}
      </View>

      {imagePlace ? (
        <Image source={{uri: imagePlace}} style={{width: 200, height: 200}} />
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  text: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  input: {
    color: theme.colors.primary,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: theme.colors.primary,
  },
  boton: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
});

export default PageTest;
