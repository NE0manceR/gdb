"use client";

import styles from "./page.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./store/feature/ctr/ctr";
export default function Home() {
  const count = useSelector((state) => state.ctr.number);
  const dispatch = useDispatch();
  return (
    <main className={styles.main}>
      Home page
      {count}
      {/* <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button> */}
    </main>
  );
}
