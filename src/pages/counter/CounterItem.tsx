import type { Component } from "solid-js";

interface Props {
    value: number;
    onClick: () => void;
    index: number;
}

const CounterItem: Component<Props> = (props) => {
    console.log(`CounterItem 렌더: index=${props.index}`);

    return (
        <li>
            <button onClick={props.onClick}>
                Count[{props.index}]: {props.value}
            </button>
        </li>
    );
};

export default CounterItem;
