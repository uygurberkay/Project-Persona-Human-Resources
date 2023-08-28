import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import {themeColors} from '../../theme'
import PopularJobCard from './activeProjectCard'
// import useFetch from '../../../hook/useFetch.js'
import { getActiveProject } from '../../api'

const Popularjobs = ({jobTitle}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedJob, setSelectedJob] = useState();
    let [projects, setProjects] = useState([])

    useEffect(() => {
        setIsLoading(true)
        getActiveProject().then(data=>{
            setProjects(data);
            console.log(data)
            })
        setIsLoading(false)
    }, [])


    const handleCardPress = (item) => {
        setSelectedJob(projects._id);
    };

    return (
        <View className="mt-6">
    
            <View className="px-4 flex-row justify-between items-center">
                <Text 
                    className="text-lg font-semibold" 
                    style={{color: themeColors.bgColor(1)}}
                    >
                    Aktif Projeler
                </Text>
                <TouchableOpacity>
                    <Text className="text-sm font-bold text-gray-400">
                    Hepsi
                    </Text>
                </TouchableOpacity>
            </View>
        <View 
            className="px-2 mt-3"
        >
            <FlatList 
                data={projects}
                renderItem={({item}) => (
                    <PopularJobCard 
                        item={item}
                        selectedJob={selectedJob}
                        // handleCardPress={handleCardPress}
                    />
            )}
            keyExtractor={(item) => item?.job_id} 
            contentContainerStyle={{ columnGap: 16}}
            horizontal
            />
        </View>
    </View>
    )
} 
export default Popularjobs