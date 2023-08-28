import { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import styles from './employee.style'
import DummyData from '../../constants/dummydata'
import EmployeeCard from './employeeCard'
  const EmployeeList = () => {
    
    const [selectedJob, setSelectedJob] = useState();
  
  useEffect(() => {
    setIsLoading(true)
    getActiveProject().then(data=>{
        setProjects(data);
        console.log(data)
        })
    setIsLoading(false)
  }, [])

    return (
      <View style={styles.container}>
  
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            Çalışan Listesi
          </Text>
  
          {/* <TouchableOpacity>
            <Text style={styles.headerBtn}>
              Show All
            </Text>
          </TouchableOpacity> */}
  
        </View>
  
        <View style={styles.cardsContainer}>
          {
            data?.map((job) => (
              <EmployeeCard
                data={DummyData}
                job={job}
                key={`nearby-job-${job.job_id}`}
                handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
              />
            ))
          }
        </View>
        
      </View>
    )
  }
  
  export default EmployeeList