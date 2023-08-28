import React from 'react'

import { Navbar } from '../components'
import Intro from './intro/Intro'
import Synq from './synq/Synq'
import Liv from './liv/Liv'
import Tv from './tv/Tv'
import Fankens from './fankens/Fankens'
import Dl from './dl/Dl'
import Piedras from './piedras/Piedras'
import Tt from './tt/Tt'
import Personal from './work_play/Personal'

function ContainersUnified() {
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
        <script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/143188444.js"></script>
        </>

  )
}

export default ContainersUnified