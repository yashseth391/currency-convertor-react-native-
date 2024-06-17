import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { currencyByRupee } from './constants'
import Currencybuttons from './components/Currencybuttons'
import Snackbar from 'react-native-snackbar'


const App = () => {
  const [inputValue,setInputValue]=useState('');
  const [resultValue,setResultValue]=useState('');
  const [targetCurrency,setTargetCurrency]=useState('');

  const buttonPressed= (targetValue:currency) => {
    if(!inputValue)
      {
        Snackbar.show({
          text: 'Please enter a value to convert',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor:'blue',
          textColor:'black',
        });
      }

      const inputAmount=parseFloat(inputValue);
      if(!isNaN(inputAmount))
        {
          const convertedValue=inputAmount*targetValue.value;
          const result=` ${targetValue.symbol} ${convertedValue.toFixed(2)}`
          setResultValue(result);
          setTargetCurrency(targetValue.name);

        }
        else{
          Snackbar.show({
            text: 'Not  a valid value to convert',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor:'red',
            textColor:'black',
          });
        }

  }
  return (
    <>
      <StatusBar>
        
      </StatusBar>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
            maxLength={14}
            value={inputValue}
            onChangeText={setInputValue}
            keyboardType='number-pad'
            placeholder='Enter amount in rupee'
            />
          </View>
          {resultValue && (
            <Text style={styles.resultTxt}> {resultValue} </Text>
          )}
        </View>
        <View style={styles.bottomContainer}> 
            <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={(item) => (
              <Pressable
              style={[styles.button,styles.selected]}//idhar thoda nhi kiya
              onPress={() => buttonPressed(item.item)}>
                <Currencybuttons {...item.item}/>
              </Pressable>
            )}
            />
        </View>
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    height:35,
    
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 30,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height:36,
    backgroundColor:'grey'
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: 'green',
  },
});
