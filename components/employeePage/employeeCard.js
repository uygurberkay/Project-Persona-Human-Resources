import { View, Text, TouchableOpacity, Image } from 'react-native'
import {themeColors} from '../../theme'
import { SHADOWS } from "../../constants/theme";
import Cake  from '../../assets/icons/cake.png';
import Resume from '../../assets/icons/resume.png'
import { urlFor } from '../../sanity';

const EmployeeCard = ({ data , handleNavigate }) => {
    console.log(data)
return (
    <TouchableOpacity
    className="flex-1 justify-between items-center flex-row p-2 rounded-xl bg-white"
    style={{...SHADOWS.medium, shadowColor: themeColors.bgColor(1)}}
    onPress={handleNavigate}
    >
    <TouchableOpacity 
        className="w-14 h-14 bg-white justify-center items-center "
    >
        {/* {
            data?.map(item=>{
            return(
                <View key={item._id} className="flex justify-center items-center mr-6">
                    {
                        item.image && (
                    <Image 
                        style={{width: 45, height: 45}} 
                        source={{ uri: urlFor(item.image).url(),
                    }} 
                    />
                        )
                    }
                <Text className={"text-sm "+textClass}>{category.title}</Text>
                </View> 
            )
            })
        } */}
        
        <Image 
        className="rounded-xl w-4/5 h-4/5"
        source={
            data.image
            // require('../../assets/Logo.png')
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
        <View className="flex-row justify-between">
            <Text 
                className="text-base font-semibold"
                style={{color: themeColors.bgColor(1)}}
                numberOfLines={1}
            >
            {data.jobTitle.length > 20 ? `${data.jobTitle.substring(0, 20)}...` : data.jobTitle}
            </Text>
            <View
                className="flex-row  gap-x-2 "
            >
                <Image 
                    className="w-5 h-5"
                    source={Cake} />
                <Text>
                    {data.birthday}
                </Text>
            </View>
        </View>

        <Text 
            className=" text-sm font-normal mt-1 uppercase text-gray-500"
        >
        {data.name}
        {data.personalProjects}
        {/* {data.departments[0].employees[0].personalProjects} */}
        </Text>
    </View>
    
    </TouchableOpacity>
)
}

export default EmployeeCard