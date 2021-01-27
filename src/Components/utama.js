import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"

import Beranda from "./beranda"
import Galeri from "./galeri"
import Hari_besar from "./hari_besar"

const Utama = () => (
	<Switch>
		<Route exact path='/' component={Beranda} />
		<Route path='/galeri' component={Galeri} />
		<Route path='/hari_besar' component={Hari_besar} />
	</Switch>
)

export default Utama
