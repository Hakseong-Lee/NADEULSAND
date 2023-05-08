import { createSlice } from "@reduxjs/toolkit";

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
  name: "slider",
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
    nextIndex(state) {
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
