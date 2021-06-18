import React, { useState } from 'react'
import {StyleSheet,TextInput} from 'react-native'
import Colors from '../../constants/Colors';

function UnderlineInput(props:any) {
    const [isFocused, setIsFocused] = useState(false)
    const BLUE = "#428AF8";
    const LIGHT_GRAY = "#EFEFEF";

    
  const handleFocus = (e:any) => {
    setIsFocused(true);
  };

  const handleBlur = (e:any) => {
    setIsFocused(false);
  };

    return (
        <TextInput
        selectionColor={BLUE}
        underlineColorAndroid={
          isFocused ? Colors.purple500 : Colors.purple300
        }
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    )
}


const styles = StyleSheet.create({
    
})
export default UnderlineInput