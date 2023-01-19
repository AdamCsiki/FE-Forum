import "./ProfileImage.css";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";

function ProfileImage({ id, src }: { id?: string; src?: string }) {
	return (
		<div className="ProfileImage">
			<img
				id={id}
				className="profile-image"
				alt="profile"
				src={src}
			/>
		</div>
	);
}

export default ProfileImage;
