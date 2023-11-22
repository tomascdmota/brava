import {useEffect, useState} from 'react'
import './profile.css';
import { useParams } from 'react-router-dom';
import axios from "axios"
import ProfileCard from '../../components/ProfileCard';

function Profile() {
    const {id} = useParams();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get(`http://localhost:3306/api/profile/${id}`);
                setUserData(response.data);
            } catch(error){
                console.log("Error fetchin data:", error);
            }
        }

        fetchUserProfile();
    }, [id]);

    if(!userData) {
        return <div>Loading...</div>;
    }

  return (
		<div className="backgroundd">
			<div className="bg-pattern-top"></div>
			<div className="bg-pattern-bottom"></div>

			<ProfileCard
				name={userData.username}
				age={userData.email}
				city="London"
				followers="80K"
				likes="803K"
				photos="1.4K"
			></ProfileCard>
		</div>
   

  )
}

export default Profile