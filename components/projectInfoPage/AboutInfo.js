import { View, Text , VirtualizedList} from 'react-native'
import React, { useState , useEffect } from 'react'
import EmployeeCard from '../employeePage/employeeCard'
import { getEmployeeList } from '../../api';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-web';
const AboutInfo = () => {
    const getItem = (_data, index) => ({
        id: Math.random().toString(12).substring(0),
        title: `Item ${index + 1}`,
    });
    const getItemCount = _data => 50;
    const navigation = useNavigation()
    const [employees, setEmployees] = useState();
    useEffect(() => {
        getEmployeeList().then(data=>{
            setEmployees(data);
            })
    }, [])
    
    return (
        <View className="flex justify-center items-center w-5/6  h-96 border-white rounded-xl bg-white">
                {
                    employees?.map((job) => (
                        <EmployeeCard
                        data={job}
                        // data={employees}c
                        // job={job}
                        keyExtraction={(job) => job?._id}
                        // handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
                        handleNavigate={() => navigation.navigate('EmployeeInfo')}
                        />
                    ))
                }
        </View>
    )
}

export default AboutInfo