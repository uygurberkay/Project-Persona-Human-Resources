import { 
    View, 
    Text, 
    TouchableOpacity,  
    Image,
} from 'react-native'
import styles from './activeProjectCard.style'
import dummyData from '../../constants/dummydata'
import { checkImageURL } from '../../utils/index'
    
    const PopularJobCard = ({ item , selectedJob }) => {
        return (
        <TouchableOpacity
            className="w-56 justify-between rounded-xl p-4"
            style={styles.container(selectedJob,item)}
            onPress={() => handleCardPress(item)}
        >
        <View className="flex-row pb-2">
            <TouchableOpacity 
                className="w-12 h-12 justify-center items-center rounded-xl"
                style={styles.logoContainer(selectedJob,item)}
            >
            {/* <Image 
                source={ {
                    uri : checkImageURL(item.deptImage)
                    ? item.deptImage
                    :  require("../../assets/Logo.png"),
                }}
                resizeMode='contain'
                className="w-2/3 h-2/3"
            /> */}
            <Image 
                source={
                    require("../../assets/Logo.png")
                }
                resizeMode='contain'
                className="w-2/3 h-2/3"
            />
            </TouchableOpacity>
            <Text
            className="text-base font-medium text-gray-200 ml-10 mt-2"
            numberOfLines={1}
            >
            {item.deptName}
            </Text>
        </View>

            <View className="flex-row justify-between">
            <Text className="text-xs text-gray-200 ">Başlangıç:</Text>
                <Text className="text-xs text-gray-200 ">{item.dueDate}</Text>
            </View>
            <View className="flex-row justify-between">
            <Text className="text-xs text-gray-200">Bitiş:</Text>
                <Text className="text-xs text-gray-200 ">{item.startDate}</Text>
            </View>
            <View className="pt-4" >
                <Text
                    className="text-xl font-semibold"
                    style={styles.jobName(selectedJob,item)}
                    numberOfLines={1}
                >
                    {item.title}
                </Text>
                    <View className="flex-row justify-between pt-2">
                        <Text className="text-sm text-gray-200">Sorumlu:</Text>
                        <Text className="text-xs text-gray-200 ">
                        {
                            item.projectLead
                            
                        }
                        </Text>
                    </View>
            </View>
        </TouchableOpacity>
        )
    }
    export default PopularJobCard