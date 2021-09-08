import React from 'react';
import { useDispatch } from 'react-redux';
import counterSlice from '../ducks/counter/slice';
import { useCounterState } from '../ducks/counter/selectors';
import Layout from "../components/Layout";
import Link from "next/link";

const CounterPage: React.FC = () => {
  const dispatch = useDispatch();
  const state = useCounterState().counter;

  const onClickIncrement = () => {
    dispatch(counterSlice.actions.incrementCounter(1));
  };

  const onClickDecrement = () => {
    dispatch(counterSlice.actions.decrementCounter(1));
  };

  return (
    <Layout title="Counter | Next.js + TypeScript Example">
        <h1>Counter</h1>
        <p>This is re-ducks sample code.</p>
        <p>
            <button type="button" onClick={onClickIncrement}>
                up
            </button>
            <button type="button" onClick={onClickDecrement}>
                down
            </button>
            <p>counter -> {state.count}</p>
        </p>
        <p>
            <Link href="/">
                <a>Go home</a>
            </Link>
        </p>
    </Layout>
  );
};

export default CounterPage;

