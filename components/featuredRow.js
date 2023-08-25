import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import RestaurantCard from './restaurantCard'
import ProjectCard from './projectCard'
import { useNavigation } from '@react-navigation/native'

const FeaturedRow = ({item}) => {
    const navigation = useNavigation()
    return (
        <View>
            <View className="flex-row justify-between items-center px-4">
                <View>
                    <Text className="font-bold text-lg">
                        {item.title}
                    </Text>
                    <Text className="font-bold text-gray-500 text-sm">
                        {item.startDate} - {item.dueDate}
                    </Text>
                    <Text className="text-gray-500 text-xs">
                        {item.status}
                        {/* Will be done later, it should get data from _id on every department */}
                        {/* {   
                            item.activeProjects.map((project) => {
                                console.log(project.status)
                            })
                        } */}
                    </Text>
                </View>
                {/* Will be change later, it should get us single Project Page */}
                <TouchableOpacity
                    onPress={()=> navigation.navigate(`Home`)}
                >
                    <Text 
                        style={{color: 'black'}}
                        className="font-semibold"
                    >
                        İncele
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                className="overflow-visible py-5"
            >
                <ProjectCard 
                        item={item}
                    />
            {/* {
                
                item.map((projectData,index)=> {
                    return(
                        <ProjectCard 
                            item={projectData}
                            key={index}
                        />
                    )
                })
            } */}
            </ScrollView>
        </View>
    )
}

export default FeaturedRow