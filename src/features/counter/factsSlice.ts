import { createSlice } from "@reduxjs/toolkit";

const data = [
  "Прообразом Чубакки стал пёс режиссёра.",
  "Актёрам разрешили подобрать любимый цвет для своих световых мечей.",
  "В фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину.",
  "Дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу.",
  "Планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок.",
];

export interface FactsState {
  value: [];
}

const initialState: FactsState = {
  value: [],
};

export const factsSlice = createSlice({
  name: "facts",
  initialState,
  reducers: {
    factsList: (state: any, action) => {
      state.value = data.filter((el) => data.indexOf(el) <= action.payload);
    },
  },
});

export const { factsList } = factsSlice.actions;

export default factsSlice.reducer;
