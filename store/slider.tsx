import { createSlice } from '@reduxjs/toolkit';

export interface SliderStateType {
  currentIndex: number;
}

const initialSliderState: SliderStateType = {
  currentIndex: 0,
};

const sliderSlice = createSlice({
  name: 'slider',
  initialState: initialSliderState,
  reducers: {
    changeIndex(state, action) {
      state.currentIndex = action.payload;
    },
    nextIndex(state) {
      state.currentIndex++;
    },
    prevBtn(state) {
      state.currentIndex--;
    },
  },
});

export const { changeIndex, nextIndex, prevBtn } = sliderSlice.actions;
export default sliderSlice.reducer;
