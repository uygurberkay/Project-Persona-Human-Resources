import { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList, VirtualizedList } from 'react-native'
import EmployeeCard from './employeeCard'
import {getEmployeeList} from '../../api'
import {themeColors} from '../../theme'
import DummyData from '../../constants/dummydata'
import { ScrollView } from 'react-native-web'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

  const EmployeeList = () => {
    const navigation = useNavigation()
    const [isLoading, setIsLoading] = useState(false);
    const [selectedJob, setSelectedJob] = useState();
    const [employees, setEmployees] = useState();
  useEffect(() => {
    setIsLoading(true)
    getEmployeeList().then(data=>{
        setEmployees(data);
        // console.log(data)
        })
    setIsLoading(false)
  }, [])

    return (
      <SafeAreaView>
        <View className="-mt-10">
          <View 
            className="flex px-4 py-3 flex-row justify-between items-center"
          >
            <Text 
            className="text-lg font-semibold"
            style={{color: themeColors.bgColor(1)}}
            >
            Çalışan Listesi
            </Text>

            <TouchableOpacity
              onPress={() => { navigation.navigate('Employees')}}
            >
            <Text className="text-sm font-bold text-gray-400">
                Hepsi
            </Text>
            </TouchableOpacity>
          </View>
          
          <View 
            className="px-4"
            style={{gap: 5}}
          >
            {
              employees?.map((job) => (
                <EmployeeCard
                  data={job}
                  // data={employees}
                  // job={job}
                  keyExtraction={(job) => job?._id}
                  // handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
                />
              ))
            }
          </View>
        </View>
      </SafeAreaView>
      
    )
  }
  
  export default EmployeeList