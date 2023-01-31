import React from 'react'
import { Colors } from './Colors.js'
import '../App.css'

function ProfileInfo(props) {
	return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                position: "relative",
                top: "20px",
            }}
        >
            <div
                style={{
                    fontSize: "45px",
                    fontFamily: "Marcellus",
                }}
            >
                Admin Nimda
            </div>
            <div
                style={{
                    fontSize: "30px",
                    fontFamily: "JetBrains Mono",
                }}
            >
                admin.nimda@gmail.com
            </div>
            <div
                style={{
                    fontSize: "30px",
                    fontFamily: "Oxygen",
                    margin: "40px 0 0 0",
                }}
            >
                @{props.username}
            </div>
            <div
                style={{
                    fontSize: "25px",
                    fontFamily: "Oxygen",
					textAlign: "center",
					height: "275px",
					overflow: "auto",
                }}
            >
                As a comder, I embarked on a ambitious endeavor to
                create a social media platform that rivals the likes of Reddit,
                thus Greddit was born. Through tireless hours of comding and
                honing my skills, I have unsuccessfully developed and launched
                this innovative platform, providing users with a unique and
                unparalleled experience. As the sole developer and administrator
                of Greddit, I take great pride in my ability to not only not achieve
                academic excellence, but to also make a meaningless impact in the
                world of technology.
            </div>
        </div>
    );
}

export default ProfileInfo