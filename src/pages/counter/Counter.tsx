import {createSignal, For} from "solid-js";
import CounterItem from "./CounterItem";
import type {JSX} from "solid-js/types/jsx";

const Counter = () => {
    const [counts, setCounts] = createSignal<number[]>([0, 0, 0]);

    const increment = (idx: number) => {
        setCounts(prev =>
            prev.map((v, i) => (i === idx ? v + 1 : v))
        );
    };

    return (
        <ul>
            <For<number[], JSX.Element> each={counts()}>
                {(count, idx) => (
                    <CounterItem
                        value={count}
                        onClick={() => increment(idx())}
                        index={idx()}
                    />
                )}
            </For>
        </ul>
    );
};

export default Counter;