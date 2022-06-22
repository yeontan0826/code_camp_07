import { useEffect, useRef, useState } from "react";

const ImagePreloadPage = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [imageTag, setImageTag] = useState<HTMLImageElement>();

	const divRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const img = new Image();
		img.src =
			"https://upload.wikimedia.org/wikipedia/commons/9/96/%22Den_kjekke_gutt%22_-_6._Internasjonale_Akademiske_Vinterleker_%281939%29_%2840200856483%29.jpg";
		img.onload = () => {
			setImageTag(img);
		};
	}, []);

	const onClickPreLoad = () => {
		imageTag && divRef.current?.appendChild(imageTag);
	};

	const onClickLoad = () => {
		setIsLoaded(true);
	};

	return (
		<div>
			<div ref={divRef}></div>
			<button onClick={onClickPreLoad}>이미지 프리로드</button>
			=========================================================
			{isLoaded && (
				<img src="https://upload.wikimedia.org/wikipedia/commons/9/96/%22Den_kjekke_gutt%22_-_6._Internasjonale_Akademiske_Vinterleker_%281939%29_%2840200856483%29.jpg" />
			)}
			<button onClick={onClickLoad}>이미지 일반로드</button>
		</div>
	);
};

export default ImagePreloadPage;
