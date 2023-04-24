import { createSlice } from '@reduxjs/toolkit';

export interface SliderStateType {
  currentIndex: number;
  scrollable: boolean;
  autoScroll: boolean;
}

const initialSliderState: SliderStateType = {
  currentIndex: 0,
  scrollable: false,
  autoScroll: true,
};

const sliderSlice = createSlice({
  name: 'slider',
  initialState: initialSliderState,
  reducers: {
    changeIndex(state, action) {
      state.currentIndex = action.payload;
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

export const { changeIndex, next, nextBtn, prevBtn, scroll, auto } = sliderSlice.actions;
export default sliderSlice.reducer;
