import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store.ts";
import { increment, decrement } from "../counter/counterslice.ts";

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
     return (
        <div>
            <h2>{count}</h2>
            <div>
                <button onClick={()=> dispatch(increment())}>increment</button>
                <button onClick={()=> dispatch(decrement())}>dncrement</button>
            </div>
        </div>
     );

};
export default Counter;