import { ChangeEvent, useEffect, useState } from "react";
import MarketWriteUI from "./MarketWrite.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM, UPLOAD_FILE } from "./MarketWrite.queries";
import { Modal } from "antd";
import { IMarketWriteProps } from "./MarketWrite.types";
import { useRouter } from "next/router";
import { fileValidation } from "../../../../commons/libraries/fileValidation";
import withAuth from "../../../commons/hocs/withAuth";

declare const window: typeof globalThis & {
    kakao: any;
};

const schema = yup
    .object({
        name: yup.string().required("상품명을 작성해주세요."),
        remarks: yup.string().required("상품요약을 작성해주세요."),
        contents: yup.string().required("상품내용을 작성해주세요."),
        tags: yup.string().required("태그를 입력해주세요."),
        price: yup.string().required("판매가격을 입력해주세요."),
        addressDetail: yup.string().required("상세주소를 입력해주세요."),
    })
    .required();

const MarketWrite = (props: IMarketWriteProps) => {
    /* Daum Post Code Start */
    const [useditemAddress, setUseditemAddress] = useState({
        zipcode: props.data ? props.data.fetchUseditem.useditemAddress.zipcode : "",
        address: props.data ? props.data.fetchUseditem.useditemAddress.address : "",
        lat: props.data ? props.data.fetchUseditem.useditemAddress.lat : 37.4849,
        lng: props.data ? props.data.fetchUseditem.useditemAddress.lng : 126.8965,
    });
    const [postCodeModalVisible, setPostCodeModalVisible] = useState(false);
    const postCodeModalToggle = () => {
        setPostCodeModalVisible((prev) => !prev);
    };

    const onHandleComplete = (data: any) => {
        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(data.address, (result: any, status: any) => {
            if (status === window.kakao.maps.services.Status.OK) {
                const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
                setUseditemAddress({
                    zipcode: data.zonecode,
                    address: data.address,
                    lat: coords.Ma,
                    lng: coords.La,
                });
            }
        });
        postCodeModalToggle();
    };
    /* Daum Post Code End */

    const router = useRouter();

    const [createUseditem] = useMutation(CREATE_USED_ITEM);
    const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
    const [uploadFile] = useMutation(UPLOAD_FILE);

    const [files, setFiles] = useState<(File | undefined)[]>([undefined, undefined, undefined]);
    const [imageUrls, setImageUrls] = useState(["", "", ""]);

    const { onReplaceToPage, onMoveToBack } = useMoveToPage();

    const { register, handleSubmit, setValue, formState, trigger } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    useEffect(() => {
        console.log(props.data?.fetchUseditem.images);
        if (props.data?.fetchUseditem.images.length > 0) {
            const defaultUrls = props.data.fetchUseditem.images.map((url: string) =>
                url === "" || url === null ? "" : `https://storage.googleapis.com/${url}`
            );
            setImageUrls(defaultUrls);
        }
    }, [props.data]);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=183c608811a60e60617fe9f64e57b24a&autoload=false&libraries=services";
        document.head.appendChild(script);

        script.onload = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById("map");
                const options = {
                    center: new window.kakao.maps.LatLng(useditemAddress.lat, useditemAddress.lng),
                    level: 3,
                };

                const map = new window.kakao.maps.Map(container, options);

                // marker position
                const marker = new window.kakao.maps.Marker({
                    position: new window.kakao.maps.LatLng(useditemAddress.lat, useditemAddress.lng),
                });

                marker.setMap(map);
                map.setDraggable(false);
                map.setZoomable(false);
            });
        };
    }, [useditemAddress]);

    const onChangeFile = (number: number) => (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        const isValid = fileValidation(file);
        if (!isValid) return;

        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (data) => {
            if (typeof data.target?.result === "string") {
                const tempUrls = [...imageUrls];
                tempUrls[number] = data.target?.result;
                setImageUrls(tempUrls);

                const tempFiles = [...files];
                tempFiles[number] = file;
                setFiles(tempFiles);
            }
        };
    };

    const onChangeContents = (value: string) => {
        setValue("contents", value === "<p><br/></p>" ? "" : value);
        trigger("contents");
    };

    if (props.isEdit) {
        useEffect(() => {
            onChangeContents(props.data?.fetchUseditem.contents || "");
        }, []);
    }

    // 등록
    const onClickSubmit = async (data: any) => {
        const imgResult = await Promise.all(files.map((el) => el && uploadFile({ variables: { file: el } })));
        const resultUrls = imgResult.map((el) => (el ? el.data.uploadFile.url : "")); // [url1, url2, url3]

        data.tags = data.tags.split(" ");
        data.price = Number(data.price);

        const { addressDetail, ...newData } = data;

        try {
            const result = await createUseditem({
                variables: {
                    createUseditemInput: {
                        ...newData,
                        useditemAddress: {
                            ...useditemAddress,
                            addressDetail: data.addressDetail,
                        },
                        images: resultUrls,
                    },
                },
            });

            Modal.success({
                content: "상품을 등록했습니다.",
                onOk() {
                    onReplaceToPage(`/detail/${result.data.createUseditem._id}`)();
                },
                onCancel() {
                    onReplaceToPage(`/detail/${result.data.createUseditem._id}`)();
                },
            });
        } catch (error: any) {
            Modal.error({
                title: "상품 등록 실패",
                content: error.message,
            });
        }
    };

    // 수정
    const onClickUpdate = async (data: any) => {
        if (
            props.data.fetchUseditem.name === data.name &&
            props.data.fetchUseditem.remarks === data.remarks &&
            props.data.fetchUseditem.contents === data.contents &&
            props.data.fetchUseditem.price === Number(data.price) &&
            props.data.fetchUseditem.tags.join(" ") === data.tags &&
            props.data.fetchUseditem.useditemAddress.addressDetail === data.addressDetail
        ) {
            // 모든 값이 같음
            Modal.error({
                content: "수정사항이 없습니다.",
            });
            return;
        }

        const imgResult = await Promise.all(files.map((el) => el && uploadFile({ variables: { file: el } })));
        const resultUrls = imgResult.map((el) => (el ? el.data.uploadFile.url : "")); // [url1, url2, url3]

        data.tags = data.tags.split(" ");
        data.price = Number(data.price);

        try {
            const { addressDetail, ...newData } = data;
            await updateUseditem({
                variables: {
                    useditemId: router.query.id,
                    updateUseditemInput: {
                        ...newData,
                        useditemAddress: {
                            ...useditemAddress,
                            addressDetail: data.addressDetail,
                        },
                        images: resultUrls,
                    },
                },
            });

            Modal.success({
                content: "상품을 수정했습니다.",
                onOk() {
                    onMoveToBack();
                },
                onCancel() {
                    onMoveToBack();
                },
            });
        } catch (error: any) {
            Modal.error({
                title: "상품 수정 실패",
                content: error.message,
            });
        }
    };

    return (
        <MarketWriteUI
            isEdit={props.isEdit}
            data={props.data}
            register={register}
            onChangeFile={onChangeFile}
            imageUrls={imageUrls}
            handleSubmit={handleSubmit}
            onClickSubmit={onClickSubmit}
            onClickUpdate={onClickUpdate}
            formState={formState}
            onChangeContents={onChangeContents}
            postCodeModalToggle={postCodeModalToggle}
            postCodeModalVisible={postCodeModalVisible}
            onHandleComplete={onHandleComplete}
            useditemAddress={useditemAddress}
            onMoveToBack={onMoveToBack}
        />
    );
};

export default withAuth(MarketWrite);
