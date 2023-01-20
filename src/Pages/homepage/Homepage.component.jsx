import React from 'react';
import Directory from '../../components/directory/Directory.component'
import PushData from '../resources/data';
import { HomePageContainer } from './homepage.styles'

export default function Homepage({ history }) {
    return (
        
        <HomePageContainer>
            <Directory />
            {/* <PushData/> */}
        </HomePageContainer>
    )
}
