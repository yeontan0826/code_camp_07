import { ChangeEvent, useState } from "react";

const ImageUploadPreviewPage = () => {
	const [imageUrl, setImageUrl] = useState("");
	const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];

		if (!file) {
			alert("파일이 없습니다");
			return;
		}

		const fileReader = new FileReader();
		fileReader.readAsDataURL(file);
		fileReader.onload = (data) => {
			if (typeof data.target?.result === "string") {
				console.log(data.target?.result);
				setImageUrl(data.target?.result);
			}
		};
	};
	// https://storage.googleapis.com/${}
	return (
		<>
			<input type={"file"} onChange={onChangeFile} />
			<img src={imageUrl} />
		</>
	);
};

export default ImageUploadPreviewPage;
