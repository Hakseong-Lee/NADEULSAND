import { createSlice } from '@reduxjs/toolkit';

export interface SlideStateType {
  currentIndex: number;
  scrollable: boolean;
  autoScroll: boolean;
}

const initialSlideState: SlideStateType = {
  currentIndex: 0,
  scrollable: false,
  autoScroll: true,
};

const slideSlice = createSlice({
  name: 'slide',
  initialState: initialSlideState,
  reducers: {
    next(state) {
      state.currentIndex++;
      state.scrollable = false;
    },
    nextBtn(state) {
      state.currentIndex++;
      state.scrollable = false;
      state.autoScroll = false;
    },
    previousBtn(state) {
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

export const { next, nextBtn, previousBtn, scroll, auto } = slideSlice.actions;
export default slideSlice.reducer;
