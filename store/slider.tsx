import { createSlice } from '@reduxjs/toolkit';

export interface SliderStateType {
  currentIndex: number;
  scrollable: boolean;
  autoScroll: boolean;
  transition: boolean;
}

const initialSliderState: SliderStateType = {
  currentIndex: 0,
  scrollable: false,
  autoScroll: true,
  transition: true,
};

const sliderSlice = createSlice({
  name: 'slider',
  initialState: initialSliderState,
  reducers: {
    changeIndex(state, action) {
      state.currentIndex = action.payload;
      state.scrollable = false;
    },
    changeTransition(state, action) {
      state.transition = action.payload;
      state.scrollable = false;
    },
    next(state) {
      state.currentIndex++;
      state.scrollable = false;
    },
    nextBtn(state) {
      state.currentIndex++;
      state.scrollable = false;
      state.autoScroll = false;
    },
    prevBtn(state) {
      state.currentIndex--;
      state.scrollable = false;
      state.autoScroll = false;
    },
    scroll(state) {
      state.scrollable = true;
    },
    auto(state) {
      state.autoScroll = true;
    },
  },
});

export const { changeIndex, changeTransition, next, nextBtn, prevBtn, scroll, auto } =
  sliderSlice.actions;
export default sliderSlice.reducer;
