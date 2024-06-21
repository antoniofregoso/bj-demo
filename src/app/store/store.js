import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import homeSlice from "./slices/homeSlice";

const persistConfig = {
    key: 'root',
    storage
  };

  const rootReducer = {
    home: userReducer,
  };

  const persistedReducer = persistReducer(persistConfig, homeSlice);

  const store = configureStore({
    reducer: persistedReducer
  });

  const persistor = persistStore(store); 

  export { store, persistor };

  