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
    },
    changeTransition(state, action) {
      state.transition = action.payload;
    },
    nextIndex(state) {
      state.currentIndex++;
    },
    nextBtn(state) {
      state.currentIndex++;
    },
    prevBtn(state) {
      state.currentIndex--;
    },
    enableScroll(state) {
      state.scrollable = true;
    },
    disableScroll(state) {
      state.scrollable = false;
    },
    startAuto(state) {
      state.autoScroll = true;
    },
    stopAuto(state) {
      state.autoScroll = false;
    },
  },
});

export const {
  changeIndex,
  changeTransition,
  nextIndex,
  nextBtn,
  prevBtn,
  enableScroll,
  disableScroll,
  startAuto,
  stopAuto,
} = sliderSlice.actions;
export default sliderSlice.reducer;
