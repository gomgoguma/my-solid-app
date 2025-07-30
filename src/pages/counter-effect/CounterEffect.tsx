import { createSignal, createEffect } from "solid-js";

const CounterWithEffect = () => {
    const [count, setCount] = createSignal(0);

    // count 값이 변할 때마다 이 함수가 자동 실행됨
    createEffect(() => {
        console.log("count 값 변경:", count());
    });

    return (
        <div>
            <p>카운트: {count()}</p>
            <button onClick={() => setCount(count() + 1)}>증가</button>
        </div>
    );
};

export default CounterWithEffect;