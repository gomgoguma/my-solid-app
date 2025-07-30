import {createMemo, createSignal} from "solid-js";

const CounterWithDouble = () => {

    console.log("CounterWithDouble");

    const [count, setCount] = createSignal(0);

    // count를 기반으로 파생된 상태 생성 (count의 두 배)
    const double = createMemo(() => count() * 2);

    return (
        <div>
            <p>현재 카운트: {count()}</p>
            <p>카운트의 두 배: {double()}</p>
            <button onClick={() => setCount(count() + 1)}>증가</button>
        </div>
    );
}

export default CounterWithDouble;

