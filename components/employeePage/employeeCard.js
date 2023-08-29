import { View, Text, TouchableOpacity, Image } from 'react-native'
import {themeColors} from '../../theme'
import { SHADOWS } from "../../constants/theme";

const EmployeeCard = ({ data ,job , handleNavigate }) => {
return (
    <TouchableOpacity
    className="flex-1 justify-between items-center flex-row p-2 rounded-xl bg-white"
    style={{...SHADOWS.medium, shadowColor: themeColors.bgColor(1)}}
    onPress={handleNavigate}
    >
    <TouchableOpacity 
        className="w-14 h-14 bg-white justify-center items-center "
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
        className="rounded-xl w-4/5 h-4/5"
        source={
            data.departments[0].employees[0].PersonImage
        }
        resizeMode='contain'
        // style={styles.logoImage}
        />
        {/* <Text>
        {dummyData.departments[0].employees[0].PersonImage}
        </Text> */}
    </TouchableOpacity>
    
    <View 
        className="flex-1 pl-2 my-2"
    >
        <Text 
            className="text-base font-semibold"
            style={{color: themeColors.bgColor(1)}}
            numberOfLines={1}
        >
        {data.departments[0].employees[0].jobTitle}
        </Text>

        <Text 
            className=" text-sm font-normal mt-1 uppercase text-gray-500"
        >
        {data.departments[0].employees[0].personalProjects}
        </Text>
    </View>
    
    </TouchableOpacity>
)
}

export default EmployeeCard