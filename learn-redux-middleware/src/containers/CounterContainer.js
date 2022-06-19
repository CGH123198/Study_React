import { useSelector, useDispatch } from "react-redux/es/exports";
import { increase, decrease } from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = () => {
    const number = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <Counter 
            number={number} 
            onIncrease={() => dispatch(increase())} 
            onDecrease={() => dispatch(decrease())} 
        />
    );
};

export default CounterContainer;