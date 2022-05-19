const TypescriptPage = () => {
    
    // 타입 추론
    let aaa = "안녕하세요"
    // aaa = 3

    // 타입 명시
    let bbb: string = "반갑습니다"
    
    // 문자 타입
    let ccc: string
    ccc = "반가워요!!"

    // 숫자 타입
    let ddd: number = 10

    // 불린타입
    let eee: boolean = true 

    let array: number[] = [1,2,3,4,5, "안녕하세요!"] // error
    let ggg: string = ["철수", "영희","훈이", 10] // error - 타입을 명시하지 않을 시, (string | number)[] 타입으로 수정됨!!

    // 객체 타입
    interface IProfile {
        name: string,
        age: number | string
        school: string
    }

    const profile: IProfile = {
        name: "철수",
        age: 8,
        school: ""
    }

    profile.age = "8살"

    // 함수 타입
    const add = (money1: number, money2: number, unit: string): string => {
        return money1 + money2 + unit
    }

    const result = add(1000, 2000, "원") // const result = "3000원"

    return <div>=타입스크립트 연습하기!!</div>
}

export default TypescriptPage