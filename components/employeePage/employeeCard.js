import { View, Text, TouchableOpacity, Image } from 'react-native'
import {themeColors} from '../../theme'
import { SHADOWS } from "../../constants/theme";
import Cake  from '../../assets/icons/cake.png';
import CakeGreen from '../../assets/icons/cake-green.png'
import birthDayControl from '../../utils/dailyDayController';
import { useNavigation } from '@react-navigation/native';

const EmployeeCard = ({ data , handleNavigate }) => {
    const navigation = useNavigation()
    /* Return true any match birthday available */
    const birth = birthDayControl(data.birthday)
    // console.log(data.image)
return (
    <TouchableOpacity
    className="flex-1 justify-between items-center flex-row p-2 rounded-xl bg-white"
    style={{...SHADOWS.medium, shadowColor: themeColors.bgColor(1)}}
    onPress={handleNavigate}
    >
    <TouchableOpacity 
        className="w-14 h-14 bg-white justify-center items-center "
    >
        <Image 
        className="rounded-xl w-4/5 h-4/5"
        source={
            require('../../assets/Logo.png')
        }
        resizeMode='contain'
        />
    </TouchableOpacity>
    {/* {
        data?.map((item)=> {
            (item.image && (
                <Image source={item.image} />
            ))
        })
    } */}
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
                { birth ? (
                    <Image 
                    source={ CakeGreen }
                    resizeMode='contain'
                    className="w-5 h-5"
                    />
                ) : 
                    (<Image 
                    source={ Cake }
                    resizeMode='contain'
                    className="w-5 h-5"
                    />)
                }
                <Text>
                    {data.birthday}
                </Text>
            </View>
        </View>

        <Text 
            className=" text-sm font-normal mt-1 uppercase text-gray-500"
        >
        {data.name}
        {/* {data.personalProjects} */}
        </Text>
    </View>
    
    </TouchableOpacity>
)
}

export default EmployeeCard