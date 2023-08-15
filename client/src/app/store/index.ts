import { combineReducers, configureStore, createListenerMiddleware } from '@reduxjs/toolkit'
import { authApi, mainApi, objectMainApi } from '../../shared/api'
import { authReducer, objectReducer, unitReducer } from '../../shared/models'

const listenerMiddleware = createListenerMiddleware()
listenerMiddleware.startListening({
    matcher: authApi.endpoints.login.matchFulfilled,
    effect: (action, listenerApi) => {
        listenerApi.cancelActiveListeners()
        if (action.payload.token) {
            localStorage.setItem('token', action.payload.token)
        }
    }
})

const rootReducer = combineReducers({
    auth: authReducer,
    objects: objectReducer,
    unit: unitReducer,
    [mainApi.reducerPath]: mainApi.reducer,
    [objectMainApi.reducerPath]: objectMainApi.reducer

})

const store = configureStore({
    reducer: rootReducer,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware()
            .concat(mainApi.middleware,
                objectMainApi.middleware)
            .prepend(listenerMiddleware.middleware)
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export default store
