import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { factsList } from "./factsSlice";

export function Facts2() {
  const facts = useAppSelector((state) => state.facts.value);
  const dispatch = useAppDispatch();
  
  function getCount() {
    const input: any = document.querySelector(".input") || 0;
    const count = Number(input.value) - 1;
    dispatch(factsList(count));
  }

  return (
    <div className="facts facts2">
      <span className="title">Выберите количество фактов от 1 до 5</span>
      <input
        className="input"
        type="number"
        max="5"
        min="0"
        onChange={getCount}
        value={facts.length}
      />
      <div>
        {facts.map((el, index) => {
          return <p key={index}>{el}</p>;
        })}
      </div>
    </div>
  );
}
