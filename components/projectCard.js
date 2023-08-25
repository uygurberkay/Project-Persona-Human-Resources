import { View, Text, TouchableWithoutFeedback, Image, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import {themeColors} from '../theme'
import { useNavigation } from '@react-navigation/native';

const ProjectCard = ({item}) => {
    const navigation = useNavigation()
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                navigation.navigate('Restaurant', {...item})
            }}
        >
            <View>
                <Text>Blabla</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ProjectCard