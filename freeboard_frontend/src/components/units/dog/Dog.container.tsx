import axios from "axios";
import { useEffect, useState } from "react";
import DogUI from "./Dog.presenter";

const Dog = () => {
  const [dogUrl, setDogUrl] = useState("");

  const fetchDogUrl = async () => {
    const result = await axios.get("https://dog.ceo/api/breeds/image/random");
    setDogUrl(result.data.message);
  };

  useEffect(() => {
    fetchDogUrl();
  }, []);

  const onClickButton = () => {
    setDogUrl("");
    fetchDogUrl();
  };

  return <DogUI dogUrl={dogUrl} onClickButton={onClickButton} />;
};

export default Dog;
