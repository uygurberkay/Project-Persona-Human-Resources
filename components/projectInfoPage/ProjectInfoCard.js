import React from 'react'
import {
    Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity, Image, StyleSheet, FlatList
} from 'react-native'
import { useCallback, useState, } from 'react'
// import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from "../../components";
import Data from '../../constants/dummydata'
import About from './AboutInfo';
import ProjectInfo from './ProjectInfo';
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { COLORS, SHADOWS } from "../../constants/theme";

const tabs = ["Aktif Projeler", "Çalışan Bilgisi"];
const isLoading = false

const TabButton = ({name, activeTab, onHandleSearchType}) => {
    return (
        <TouchableOpacity
            className="ml-6 px-4 py-6 rounded-3xl w-40"
            style={styles.btn(name, activeTab)}
            onPress={onHandleSearchType}
        >
            <Text 
                className='font-semibold text-sm'
                style={styles.btnText(name, activeTab)}
            >
                {name}
            </Text>
        </TouchableOpacity>
        );
    }

const ProjectInfoCard = () => {
    const navigation = useNavigation()
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [refreshing, setRefreshing] = useState(false);

    const displayTabContent = () => {
        switch (activeTab) {
            case "Aktif Projeler":
                return (
                    // <Specifics
                    //     title='Takım Bilgileri'
                    //     points={Data.departments[0].activeProjects[0] ?? ["N/A"]}
                    // />
                    <ProjectInfo />
                );

            case "Çalışan Bilgisi":
                return (
                    <About 
                    // info={Data.departments[0].activeProjects[0] ?? "No data provided"} 
                    />
                );
            default:
                return null;
            }
    }



    return (
        <View className="">
            <TouchableOpacity 
                className="flex left-6 bg-blue-800 border rounded-full w-10 h-10 justify-center items-center"
                onPress={() => navigation.goBack()}
            >
                <Icon.ArrowLeft strokeWidth={3} width={20} stroke={'white'}/>
            </TouchableOpacity>
            <View className="flex justify-center items-center gap-y-4">
                <Text>Project Page</Text>
                <View className="">
                    <Image 
                        className="h-32 w-32 bg-gray-400 rounded-xl" 
                        resizeMode='contain'
                        source={require('../../assets/Logo.png')}
                        // source={{ uri: urlFor(imgUrl).url()}}
                    />
                    <Text className="pt-2">'Department Name'</Text>
                    <Text className="pt-2">'Start Date'</Text>
                    <Text className="pt-2">'Department Name'</Text>
                </View>
            </View>
            <View className="mt-4 mb-2 justify-around">
                <FlatList
                    data={tabs}
                    renderItem={({item}) => (
                    <TabButton 
                        name={item}
                        activeTab={activeTab}
                        onHandleSearchType={() => setActiveTab(item)}
                    />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item}
                    contentContainerStyle={{ columnGap: 6 }}
                />
            </View>

            <ScrollView>
                <View className="flex justify-center items-center">
                    {displayTabContent()}
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    btn: (name, activeTab) => ({
        backgroundColor: name === activeTab ? COLORS.primary : "#F3F4F8",
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
    }),
    btnText: (name, activeTab) => ({
        color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
    }),
});


export default ProjectInfoCard