import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import {themeColors} from '../../theme'
import PopularJobCard from './activeProjectCard'
// import useFetch from '../../../hook/useFetch.js'
import { getActiveProject, getActiveProject2, getActiveProjectLead } from '../../api'
import { useNavigation } from '@react-navigation/native'

const Popularjobs = () => {
    const navigation = useNavigation()
    const [isLoading, setIsLoading] = useState(false);
    const [selectedJob, setSelectedJob] = useState();
    let [projects, setProjects] = useState([])

    useEffect(() => {
        setIsLoading(true)
        getActiveProject().then(data=>{
            setProjects(data);
            })
        setIsLoading(false)
    }, [])


    const handleCardPress = (item) => {
        setSelectedJob(item._id);
        navigation.navigate('ProjectInfo')
    };

    return (
        <View className="mt-3">
            <View 
                className="px-2 mt-2"
            >
                <FlatList 
                    data={projects}
                    renderItem={({item}) => (
                        <PopularJobCard 
                            item={item}
                            selectedJob={selectedJob}
                            handleCardPress={handleCardPress}
                            id={item._id}
                        />
                    )}
                keyExtractor={(projects) => projects?._id} 
                contentContainerStyle={{ columnGap: 16}}
                horizontal
                />
            </View>
    </View>
    )
} 
export default Popularjobs