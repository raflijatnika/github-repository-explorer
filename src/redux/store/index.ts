import rootReducer from "@/redux/reducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export { store };

export type AppDispatch = typeof store.dispatch;
