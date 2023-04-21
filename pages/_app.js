import React from 'react';
import '../styles/global.scss'

import { makeStore, wrapper } from '../store/store'
// import { store, wrapper } from '../store/prev/store'
import { Provider } from "react-redux";


export default function App({ Component, pageProps }) {
      const { store, props } = wrapper.useWrappedStore(pageProps);

      return <Provider store={store} > <Component {...pageProps} /> </Provider>
       
    }
    
