import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather";
import {themeColors} from '../theme'
import { featured } from '../constants';
import FeaturedRow from '../components/featuredRow';
import Categories from '../components/categories';
import Projects from '../components/projects'
import { useEffect } from 'react';
import {getFeaturedRestaurants } from '../api';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Popularjobs from '../components/projectPage/activeProject'

export default function HomeScreen() {
const [featuredRestaurants, setFeaturedRestaurants] = useState([])
const navigation = useNavigation()
    useEffect(()=> {
        getFeaturedRestaurants().then(data => {
            setFeaturedRestaurants(data)
        })
    },[])

    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>
            {/* Search Bar */}
            <View className="flex-row items-center space-x-2 px-4 pb-2 ">
                <View className="flex-row flex-1 items-center p-2 rounded-full border border-gray-300">
                    
                    <TextInput placeholder='İsim Soyisim' className="ml-2 flex-1" keyboardType='default' />
                </View>
                    <TouchableOpacity 
                        className=" items-center p-3 rounded-full border border-gray-300"
                        onPress={()=> navigation.navigate('SearchPage')}
                        style={{backgroundColor: themeColors.bgColor(1)}}
                    >
                        <Icon.Search height={20} width={20} strokeWidth="2.5" stroke="white"  />
                    </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> navigation.navigate('Login')}
                >
                    <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3 rounded-full">
                        <Icon.LogIn height={20} width={20} strokeWidth="2.5" stroke="white" />
                    </View>
                </TouchableOpacity>
            </View>
            {/* Her menü seçeneğinde useEffect ile o sayfaya render ayarla */}
            {/* main */}
            <ScrollView  
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 20
                }}
            >
                {/* companies */}
                <Categories />

                {/* Projects */}
                {/* <Projects /> */}
                
                <Popularjobs />
                {/* {
                    
                    [featured]
                    .map((item,index) => { 
                        return (
                            <FeaturedRow 
                                key={index}
                                title={item.title}
                                restaurants={item.restaurants}
                                description={item.description}
                            />
                        )
                    })
                } */}

            </ScrollView>
        </SafeAreaView>
    )
}