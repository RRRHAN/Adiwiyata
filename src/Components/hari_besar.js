import React, { Component } from "react"

export class hari_besar extends Component {
	constructor() {
		super()
		this.state = {
			hari_besar: this.hari(),
		}
	}
	hari = () => {
		let hari_besar = [
			["Hari Peringatan Laut dan Samudera nasional", "15 Januari"],
			["Hari Lahan Basah Sedunia", "2 Februari"],
			["Hari Peduli Sampah Nasional", "21 Februari"],
			["Hari Hutan Sedunia", "21 Maret"],
			["Hari Air Sedunia", "22 Maret"],
			["Hari Meteorologi Sedunia", "23 Maret"],
			["Hari Bumi", "22 April"],
			["Hari Penanaman Pohon", "Jumat terakhir di bulan April"],
			["Hari Burung Migratori Internasional", "3 Mei"],
			["Hari Surya ", "3 Mei"],
			["Hari Biodiversitas Dunia", "22 Mei"],
			[
				"Hari Bersepeda Ke Kantor (Bike-to-Work Day)",
				"Jumat Ketiga di bulan Mei",
			],
			["Hari Anti Tembakau Internasional", "31 Mei"],
			["Hari Lingkungan Hidup Sedunia PBB", "5 Juni"],
			["Hari Melawan Desertifikasi dan Kekeringan Dunia PBB", "17 Juni"],
			["Hari Populasi Dunia PBB", "11 Juli"],
			["Hari Perlindungan Lapisan Ozon Sedunia", "16 September"],
			["Hari Emisi Nol (Zero Emissions Day)", "20 September"],
			["Hari Bebas Mobil (Car Free Day)", "22 September"],
			["eDay", "4 Oktober di 2008"],
			["Hari Habitat Dunia PBB", "Senin pertama di bulan Oktober"],
			["Hari Pengurangan Bencana Alam Internasional", "13 Oktober"],
			[
				"Hari Peringatan Sedunia untuk Mencegah Eksploitasi Lingkungan dalam Perang dan Konflik Bersenjata",
				"6 November",
			],
			["Hari Pohon", "21 November"],
			["Hari Gunung Sedunia", "11 Desember"],
			["Hari Aksi Ozon", "Pada waktu tertentu di musim panas"],
		]

		while (hari_besar.length % 3 != 0) {
			hari_besar.push(["-", "-"])
		}
		return hari_besar
	}
	loop = (a) => {
		a++
		let array = []
		for (let i = 1; i < a; i++) {
			array.push(i)
		}
		return array
	}
	render() {
		return (
			<div className='container'>
				{this.loop(9).map((i) => (
					<div className='row'>
						{this.loop(3).map((item) => (
							<div className='col mb-5'>
								<div
									class='alert alert-secondary'
									style={{ height: "100%" }}
									role='alert'
								>
									<h4 class='alert-heading'>
										{this.state.hari_besar[item + (i - 1) * 3 - 1][0]}
									</h4>
									<hr />
									<p class='mb-0'>
										{this.state.hari_besar[item + (i - 1) * 3 - 1][1]}
									</p>
								</div>
							</div>
						))}
					</div>
				))}
			</div>
		)
	}
}

export default hari_besar
