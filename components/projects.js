import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import {categories} from '../constants'
import { useEffect } from 'react';
import { getActiveProject, getActiveProjectById} from '../api';
import { featured ,employeeProfile  } from '../constants';
import 'react-native-url-polyfill/auto';
import { urlFor } from '../sanity';
import FeaturedRow from './featuredRow'


const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);
    let [projects, setProjects] = useState([])
    
    useEffect(() => {
        getActiveProject().then(data=>{
            setProjects(data);
            console.log(data)
            })
    }, [])

    return (
            <View 
                className="mt-5 mb-10"
            >
            {
                projects?.map((item,index) => { 
                        return (
                            <FeaturedRow 
                                key={index}
                                item={item}
                            />
                        )
                    })
                }
            </View>
    )
}

export default Projects
