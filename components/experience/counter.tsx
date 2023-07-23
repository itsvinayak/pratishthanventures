import { CSSProperties, useRef } from "react";
import { useCountUp } from "react-countup";

const easingFn = function (t: number, b: number, c: number, d: number) {
    // easeInOutExpo easing
    return c * (Math.pow(t / d - 1, 5) + 1) + b;
};

const Counter = (props: { styles?: CSSProperties | undefined; data: { startNum?: number | 0; endNum?: number | 10; duration?: number | 5; delay?: number | 1; }; }) => {
    const {
        styles = undefined,
        data: { startNum = 0, endNum = 10, duration = 5, delay = 1 }
    } = props;
    const countUpRef = useRef(null);

    const { start, pauseResume, reset, update } = useCountUp({
        ref: countUpRef,
        start: startNum,
        end: endNum,
        separator: ",",
        smartEasingThreshold: 2000,
        smartEasingAmount: 30,
        easingFn,
        delay,
        duration
    });

    return (
        <div style={styles}>
            <div ref={countUpRef}>0</div>
        </div>
    );
};

export default Counter;