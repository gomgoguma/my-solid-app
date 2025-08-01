import { createStore } from "solid-js/store";

const UserProfile = () => {
    // 객체 상태 생성 (user: { name, age })
    const [user, setUser] = createStore({ name: "Alice", age: 25 });

    // 이름 변경(예시: Bob으로)
    const changeName = () => setUser("name", "Bob");
    // 나이 증가
    const increaseAge = () => setUser("age", user.age + 1);

    return (
        <div>
            <p>이름: {user.name}</p>
            <p>나이: {user.age}</p>
            <button onClick={changeName}>이름 바꾸기</button>
            <button onClick={increaseAge}>나이 증가</button>
        </div>
    );
};

export default UserProfile;