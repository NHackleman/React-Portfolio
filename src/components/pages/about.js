import React from "react";
import profilePicture from "../../../static/assets/images/bio/image.jpg";

export default function () {
	return (
		<div className="content-page-wrapper">
			<div
				className="left-column"
				style={{
					background: "url(" + profilePicture + ") no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>

			<div className="right-column">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
				faucibus pulvinar elementum integer enim neque volutpat. Ac
				tincidunt vitae semper quis lectus nulla at volutpat diam. Nec
				ullamcorper sit amet risus nullam eget. Nisi lacus sed viverra
				tellus in hac habitasse platea dictumst. Nibh tellus molestie
				nunc non blandit massa enim. Pellentesque elit ullamcorper
				dignissim cras tincidunt lobortis feugiat vivamus. Tincidunt
				lobortis feugiat vivamus at augue eget arcu dictum. Eu mi
				bibendum neque egestas congue quisque egestas. Gravida neque
				convallis a cras semper auctor neque vitae. Vitae semper quis
				lectus nulla at volutpat diam ut venenatis. Adipiscing commodo
				elit at imperdiet dui. Lorem ipsum dolor sit amet consectetur
				adipiscing elit pellentesque habitant. Egestas congue quisque
				egestas diam in arcu cursus euismod. Diam maecenas ultricies mi
				eget mauris pharetra. Quis varius quam quisque id. Proin sed
				libero enim sed.
			</div>
		</div>
	);
}
