import { useEffect, useRef, useState } from "react";

const PreLoadPage = () => {
	const [imgTag, setImgTag] = useState<HTMLImageElement>();
	const divRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const img = new Image();
		img.src = "https://phinf.pstatic.net/contact/20180220_51/1519127622551xPuJR_JPEG/image.jpg";
		img.onload = () => {
			setImgTag(img);
		};
	}, []);

	const onClickPreLoad = () => {
		imgTag && divRef.current?.appendChild(imgTag);
	};
	return (
		<div>
			<button onClick={onClickPreLoad}>PreLoad Image</button>
			<div ref={divRef}></div>
		</div>
	);
};

export default PreLoadPage;
