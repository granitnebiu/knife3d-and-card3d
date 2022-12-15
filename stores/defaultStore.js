import create from "zustand";
import produce from "immer";

const useStore = create((set) => ({
  Model: {
    darkMode: false,
    autoPlay: false,
    dial: "default_white",
    strap: "#333333",
    cases: "#ffffff",
    mat: false,
    metalness: 0.9,
    roughness: 0.1,
    rotationY: false,
    rotationX: false,
    count: 30,
    CloseKnives: true,

    handleCount: (val) =>
      set(
        produce((state) => {
          state.Model.count = state.Model.count + val;
          console.log(state.Model.count);
        })
      ),
    handleClose: (stateval) =>
      set(
        produce((state) => {
          state.Model.CloseKnives = !state.Model.CloseKnives;
          console.log(state.Model.CloseKnives);
        })
      ),

    handleLightMode: (val) =>
      set(
        produce((state) => {
          state.Model.lightMode = !state.Model.lightMode;
        })
      ),
    handleAutoPlay: () =>
      set(
        produce((state) => {
          state.Model.autoPlay = !state.Model.autoPlay;
        })
      ),
    /*  rotation knife */
    handleRotationY: () =>
      set(
        produce((state) => {
          state.Model.rotationY = !state.Model.rotationY;
        })
      ),
    handleRotationX: () =>
      set(
        produce((state) => {
          state.Model.rotationX = !state.Model.rotationX;
        })
      ),
  },
}));

export default useStore;
