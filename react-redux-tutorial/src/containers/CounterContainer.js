import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increase, decrease } from '../modules/counter';

/*const CounterContainer = ({number, increase, decrease}) => {
    return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
};
*/

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return( <Counter 
                number={number}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
            />);
}
/*export default connect(
    state => ({
        number: state.counter.number
    }),
    dispatch => bindActionCreators(
        {
            increase,
            decrease,
        }, 
        dispatch,
    ),
)(CounterContainer);*/

export default CounterContainer;