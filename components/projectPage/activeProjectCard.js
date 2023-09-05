import { 
    View, 
    Text, 
    TouchableOpacity,  
    Image,
    StyleSheet,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SHADOWS, SIZES } from "../../constants/theme";
import { urlFor } from '../../sanity';

    const PopularJobCard = ({ item , selectedJob , handleCardPress}) => {
        const navigation = useNavigation()
        console.log(item)
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
            <Image 
                className="rounded-xl w-4/5 h-4/5 "
                source={{ uri: urlFor(item.deptImage).url(),
                }} 
            />
            </TouchableOpacity>
            <Text
            className="text-base font-medium ml-10 mt-2"
            numberOfLines={1}
            style={styles.jobName(selectedJob,item)}
            >
            {item.deptName}
            </Text>
        </View>
            <View className="flex-row justify-between">
            <Text className="text-sm" style={styles.jobName(selectedJob,item)}>Başlangıç:</Text>
                <Text className="text-sm" style={styles.jobName(selectedJob,item)}>{item.dueDate}</Text>
            </View>
            <View className="flex-row justify-between">
            <Text className="text-sm" style={styles.jobName(selectedJob,item)}>Bitiş:</Text>
                <Text className="text-sm" style={styles.jobName(selectedJob,item)}>{item.startDate}</Text>
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
                        <Text className="text-sm " style={styles.jobName(selectedJob,item)}></Text>
                        <Text className="text-sm" style={styles.jobName(selectedJob,item)}>
                        
                        </Text>
                    </View>
            </View>
        </TouchableOpacity>
        )
    }

const styles = StyleSheet.create({
    container: (selectedJob, item) => ({
        backgroundColor: selectedJob === item._id ? COLORS.primary : "#FFF",
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
    }),
    logoContainer: (selectedJob, item) => ({
        backgroundColor: selectedJob === item._id ? "#FFF" : COLORS.white,
    }),
    jobName: (selectedJob, item) => ({
        color: selectedJob === item._id ? COLORS.white : COLORS.primary,
    }),
    publisher: (selectedJob) => ({
        fontSize: SIZES.medium - 2,
        color: selectedJob === item._id ? COLORS.white : COLORS.primary,
    }),
});

export default PopularJobCard