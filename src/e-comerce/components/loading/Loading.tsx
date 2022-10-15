import { PixelSpinner } from "react-epic-spinners";

import "./Loading.css";

export const Loading = () => {
	return (
		<section className="loading-container">
			<article className="loading-box">
				<h2>Cargando...</h2>
				<PixelSpinner color="#000" />
			</article>
		</section>
	);
}