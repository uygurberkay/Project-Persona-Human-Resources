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
                  handleNavigate={() => navigation.navigate('EmployeeInfo')}
                />
              ))
            }
          </View>
        </View>
      </SafeAreaView>
      
    )
  }
  
  export default EmployeeList