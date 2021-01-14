import React from 'react';
import Icon from 'react-native-vector-icons/Fontawesome';


const TabBarIcon = (props) => {

    return(
        <Icon
        name={props.name}
        size={30}
        style={{marginBottom: -3}}
        color= {props.focused ? 'white':  'black'}/>
    )


}

export default TabBarIcon;