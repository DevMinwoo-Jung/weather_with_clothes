import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    location: '109',
  },
  reducers: {
    updateLocation: (state, action) => {
      if(action.payload.includes("강원")){
        state.location = "105";
      } else if(action.payload.includes("서울") ||  action.payload.includes("인천") || action.payload.includes("경기")) {
        state.location = "109";
      } else if(action.payload.includes("충청북")) {
        state.location = "131";
      } else if(action.payload.includes("대전") ||  action.payload.includes("세종") || action.payload.includes("충청남")) {
        state.location = "133";
      } else if(action.payload.includes("전라북")) {
        state.location = "146";
      } else if (action.payload.includes("전라남") || action.payload.includes("광주")) {
        state.location = "156";
      } else if (action.payload.includes("경상북") || action.payload.includes("대구")) {
        state.location = "143";
      } else if (action.payload.includes("부산") || action.payload.includes("울산") || action.payload.includes("경상남")) {
        state.location = "159"
      } else if (action.payload.includes("제주")){
        state.location = "184"
      } else {
        state.location = "108"
      }

      console.log(state.location)
    },
  },
});

export const { updateLocation } = locationSlice.actions;
export default locationSlice.reducer;