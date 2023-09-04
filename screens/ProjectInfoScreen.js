import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather";
import { useEffect, useState } from 'react';
import { getActiveProject } from '../api';
import Footer from '../components/footer'
import ProjectInfoCard from '../components/projectInfoPage/ProjectInfoCard';

export default function ProjectInfoScreen() {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        getActiveProject().then(data=>{
            setProjects(data);
            console.log(data)
            })
    }, [])

    return (
        <SafeAreaView>
            <>
                <StatusBar barStyle="dark-content"/>

                <ProjectInfoCard data={''} />
                <Footer />
            </>
        </SafeAreaView>
    )
}