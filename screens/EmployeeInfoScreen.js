import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather";
import {themeColors} from '../theme'
import Categories from '../components/categories';
import { useEffect } from 'react';
import { getEmployeeList } from '../api';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/footer'
import EmployeeInfoCard from '../components/employeeInfoPage/EmployeeInfoCard'

export default function EmployeeInfoScreen() {
    const [featuredRestaurants, setFeaturedRestaurants] = useState([])
    const navigation = useNavigation()
    useEffect(()=> {
        getEmployeeList().then(data => {
            setFeaturedRestaurants(data)
        })
    },[])

    return (
        <SafeAreaView >
            <>
                <StatusBar barStyle="dark-content"/>
                <EmployeeInfoCard />
                <Footer />
            </>
        </SafeAreaView>
    )
}