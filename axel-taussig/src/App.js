import React from 'react';
import './App.css'

import { Intro, Synq, Liv, Tv, Fankens, Dl, Piedras, Tt, Personal } from './containers'
import { Navbar } from './components';

function App () {
  return (
    <>
    <Navbar />
    <Intro />
    <Synq />
    <Liv />
    <Tv />
    <Fankens />
    <Dl />
    <Piedras />
    <Tt />
    <Personal />
    </>
  )
}

export default App