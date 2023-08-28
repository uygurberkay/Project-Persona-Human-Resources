import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './employeeCard.style'

const EmployeeCard = ({ dummyData ,job , handleNavigate }) => {
return (
    <TouchableOpacity
    style={styles.container}
    onPress={handleNavigate}
    >
    <TouchableOpacity 
        style={styles.logoContainer}
    >
        {/* <Image 
        source={ {
            uri : checkImageURL(job.employer_logo)
            ? job.employer_logo
            : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
        }}
        resizeMode='contain'
        style={styles.logoImage}
        /> */}
        <Image 
        source={
            dummyData.departments[0].employees[0].PersonImage
        }
        resizeMode='contain'
        style={styles.logoImage}
        />
        {/* <Text>
        {dummyData.departments[0].employees[0].PersonImage}
        </Text> */}
    </TouchableOpacity>
    
    <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
        {dummyData.departments[0].employees[0].jobTitle}
        </Text>

        <Text style={styles.jobType}>
        {dummyData.departments[0].employees[0].personalProjects}
        </Text>
    </View>
    
    </TouchableOpacity>
)
}

export default EmployeeCard