const cachedModelLogos = localStorage.getItem('modelLogos')

const rawModelLogos = {
	Hyundai: {
		i30: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742358523/carmodels/i30_a4p7mw.png',
		Grandeur:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742358831/carmodels/grandeur_ruiji0.webp',
		Sonata:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742358871/carmodels/sonata_psisbl.avif',
		'Avante (Elantra)':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742358908/carmodels/avante_dpitox.png',
		Starex:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742358970/carmodels/starex_vlv3ir.png',
		'Santa Fe':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742359013/carmodels/2025_24_c4mid9.avif',
		Tucson:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742359105/carmodels/TRANSPARENT_cc_2025HYS021917343_01_1280_R2P_m7ucnq.png',
		Genesis:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742359146/carmodels/purepng.com-red-hyundai-genesis-coupe-carcarvehicletransporthyundai-961524657347dtypi_meccpw.png',
		i40: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742359188/carmodels/Hyundai-i40_1_dtvnaq.webp',
		Nexo: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742359218/carmodels/Hyundai-Nexo-PNG-Photos_gjjiuy.png',
		Maxcruz:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742359258/carmodels/i08MwFJp_t2vbjf.png',
		Venue:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742359285/carmodels/Venue-Front34-PolarWhite_1000x667_jn28ex.png',
		Veracruz:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742359320/carmodels/hyundai-veracruz-png-fhh-m8if5k2501kijeu2_z0fwlc.png',
		Veloster:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742359348/carmodels/pngimg.com_-_hyundai_PNG11234_buibsl.png',
		Staria:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742359376/carmodels/Staria_Front34-Highlander-trim_CreamyWhite_640x331_ro68kl.png',
		Solati:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742359408/carmodels/solati_n4o7ib.png',
		Aslan:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742359547/carmodels/Aslan_17-300x300_sigv2v.png',
		'Ioniq 5':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742359572/carmodels/IONIQ5_N-Line_DYNAMIQ_Ultimate_Red_oypsfk.png',
		'Ioniq 6':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742359614/carmodels/hyundai-ioniq-6-2024-0166_klxdnz.png',
		'Ioniq 9':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742359646/carmodels/ioniq9-2025-quater-view-eco_ky68tl.png',
		Ioniq:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742359684/carmodels/hyundai-ioniq-white-car_itquwj.png',
		Equus:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742359726/carmodels/2014-Hyundai-Equus-front_9098_032_1827x723_AF_cropped_d2fk5o.avif',
		Accent:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742359768/carmodels/2016-hyundai-accent-se-sedan-angular-front_chmznm.avif',
		Kona: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742359795/carmodels/Hyundai-Kona-EV-Transparent-Images_vuksjx.png',
		Casper:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742359865/carmodels/img-lineup-ice.4aabfee_gtiie1.png',
		Palisade:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742359894/carmodels/Palisade_Calligraphy_MY24_Front34_CreamyWhite_1000x667_hmkpur.png',
		Galloper:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742359924/carmodels/asia-galopper-1999-copy_llwmh7.png',
		Grace:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742360133/carmodels/hyundai-grace-1986-2004-minivan-exterior-3_xsbg1h.png',
		Dynasty:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742360162/carmodels/hyundai-dynasty-1996-2005-sedan-exterior_f3vh4q.png',
		Lavita:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742360256/carmodels/pngegg_ki624o.png',
		Marcia:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742360287/carmodels/hyundai-marcia-1995-1998-sedan-exterior-2_qnfqcw.png',
		Verna:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742360311/carmodels/Hyundai-Verna-Background-PNG-Image_ikp9z1.png',
		Atos: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742360339/carmodels/Atos_suomod.avif',
		Elantra:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742360373/carmodels/pngimg.com_-_hyundai_PNG11211_jwgg8r.png',
		Santamo:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742360410/carmodels/vehiclehistory-list-1990-santamo-right-side-front-view-original_sdzsja.png',
		Stellar:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742360440/carmodels/hyundai-stellar-1983-1993-sedan-exterior-3_hhwkoz.png',
		Scoupe:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742360479/carmodels/pngwing.com_io3sdm.png',
		Excel:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742360510/carmodels/hyundai-excel-sedan-x2-1990-1994_jhaatm.png',
		'Click (Getz)':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742360564/carmodels/click_ynsjia.png',
		Terracan:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742360608/carmodels/hyundai-terracan-03-index-1_rvgifq.webp',
		Tuscani:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742360636/carmodels/5311cdf0-274b-4f71-8e95-55ca6f8f50ed_io77hx.png',
		'Trajet XG':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742360668/carmodels/NNtMzS2Zkp6qXzf9yrHxxXd93FENJlXdnKWNGiyq_yxkmpa.webp',
		Tiburon:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742360710/carmodels/2008-hyundai-tiburon-gt-ltd-coupe-angular-front_oobgip.avif',
		Pony: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742360810/carmodels/hyundai-pony-1985-1990-1619063229.9734602_ohi9bu.png',
		Libero:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742360835/carmodels/vehiclehistory-list-2000-libero-right-side-front-view-original_midpfr.png',
		Presto:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742360872/carmodels/unnamed_kdgirt.png',
	},

	Genesis: {
		EQ900:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361002/carmodels/Genesis_EQ900_ql2raj.png',
		G70: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361035/carmodels/genesis-ww-g70-sport-color-glossy-kawah-blue-small_hfcwvz.png',
		G80: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361056/carmodels/model2_eqj3xa.png',
		G90: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361081/carmodels/2024_76_q9qbsd.avif',
		GV60: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361106/carmodels/genesis-ww-gv60-colors-01-glossy-uyuni-white-small_ifjebi.png',
		GV70: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361134/carmodels/genesis-ww-gv70-facelift-standard-glossy-colors-mauna-red-small_gqveu4.png',
		GV80: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361153/carmodels/genesis-ww-gv80-facelift-color-matte-matterhorn-white-small_dfxsis.png',
	},

	KIA: {
		K3: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361202/carmodels/k3-do_nxkv5z.png',
		K5: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361223/carmodels/mobile_hoxutj.png',
		K7: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361254/carmodels/2018-kia-cadenza-premium-sedan-angular-front_tyrscz.avif',
		K8: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361274/carmodels/60_mtd5ta.png',
		K9: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361296/carmodels/1_zz8ywt.png',
		Carnival:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361327/carmodels/60_1_ox6ytp.png',
		Sorento:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361358/carmodels/Kia-Sorento-Transparent-Free-PNG_dzzcvm.png',
		Mohave:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361408/carmodels/84-47ae3de1bd5b1eeaef3a9a0834a358f9-1-_600-370_zazfqe.png',
		Morning:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361440/carmodels/pngimg.com_-_kia_PNG49_mvk5f1.webp',
		Ray: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361464/carmodels/png_nhxwrw.webp',
		Seltos:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361487/carmodels/Red-Kia-Seltos-PNG-Image-Background_cgxnxt.png',
		Sportage:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361515/carmodels/7924ad5b7a33fc14e61ad8d13ecd3313_cec5wa.png',
		EV3: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361541/carmodels/c2873a44-da9b-44e6-888d-f43d5892a660-Kia-Car-Image_njvptp.png',
		EV6: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361570/carmodels/kia-ev6-2021-air-runway-red_0000_dvmxks.png',
		EV9: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361592/carmodels/EV9-Land-AWD-Ivory-Silver-Matte_qkrgk3.png',
		Niro: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361618/carmodels/pngimg.com_-_kia_PNG53_ijvrlv.png',
		Lotze:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361682/carmodels/kia-lotze-2009-1_psq296.png',
		Stonic:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361708/carmodels/Stonic-colours-small-VH-Mighty-Yellow-new-badge-tiny_htpukd.png',
		Stinger:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361733/carmodels/2020-Kia-Stinger-hero_omcnad.png',
		Soul: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361756/carmodels/pngimg.com_-_kia_PNG64_pqed9t.webp',
		Opirus:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361793/carmodels/KIA-OPIRUS-PNG_vmwlu6.png',
		Carens:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361819/carmodels/6_hpjug2.png',
		Forte:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361842/carmodels/2024_24_jtvwtg.avif',
		Pride:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361897/carmodels/03a93df36591e6939e014e0454231832_emhjex.png',
		Retona:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742361979/carmodels/kia-retona-1998-2003-1604472903.0799754_b0p7oi.png',
		Rio: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742362002/carmodels/pngimg.com_-_kia_PNG20_tzfy86.png',
		Besta:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742362063/carmodels/Besta_nylaxc.png',
		Bongo:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742362089/carmodels/1723b2c8fa865_vnxqcy.png',
		Visto:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742362126/carmodels/sejarah-mobil-kia-visto_o0cejo.png',
		Sephia:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742362171/carmodels/kia_sephia-veed-remove-background_z14rtx.webp',
		Shuma:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742362199/carmodels/kia-shuma-n-auto-express_x9p7zc.webp',
		Spectra:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742362227/carmodels/8b8d6c98-af72-478f-9c69-df5ad754f643_ypzaqh.webp',
		Cerato:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742362252/carmodels/hmLb8Ph5nrWJ5Fco1HgrRgF7_i7gjst.png',
		Avella:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742362284/carmodels/kia-avella-1995-2003-1603854721.89902_yjwmqy.png',
		Xtrek:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742362313/carmodels/Xtrek_ewnatw.png',
		Enterprise:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742362360/carmodels/image_lxaton.png',
		Elan: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742362400/carmodels/1-1996-1999_pbvl4j.png',
		Optima:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742362431/carmodels/Kia-Optima-Transparent-Free-PNG_jvpaty.png',
		Capital:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742362487/carmodels/kia_capital_1996_sm2exz.png',
		Credos:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742362580/carmodels/image_ko8thr.png',
		Towner:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742362617/carmodels/image_1_mbnsqj.png',
		Parktown:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742362720/carmodels/image_2_kkccbo.png',
		Potentia:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742362745/carmodels/0a67a0670f1c89df8fe1ba199f416690_mtdqoy.png',
		Pregio:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742362794/carmodels/UNIWIPER-WIPER-BLADES-Kia-Pregio-2002-2003-2004-2005-2006--_m078xw.webp',
	},

	'Renault Korea (Samsung)': {
		QM3: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742362855/carmodels/FILE_201809191036103070_ckentm.png',
		QM5: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742362904/carmodels/1348_duicaj.png',
		QM6: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742362923/carmodels/main_off_nakicn.png',
		SM3: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742363108/carmodels/pngwing.com_hjhnzl.png',
		SM5: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742363235/carmodels/2a39e5860c6c844e91ed90f560579aa5_rnrvgq.jpg',
		SM6: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742363254/carmodels/main_off_be75d5.png',
		SM7: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742363287/carmodels/img_pnvj4z.webp',
		XM3: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742363326/carmodels/f8776d5136400_zqel1b.png',
		'Grand Koleos':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742363349/carmodels/main_off_i73dzi.png',
		Master:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742363390/carmodels/mxvHd11J-emmAx7_chiller_wkin3p.webp',
		Arkana:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742363439/carmodels/2022-Renault-Arkana-R.S.-Line-HERO_ggxc7e.png',
		Zoe: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742363469/carmodels/R-DAM_1038910__2_-removebg-preview-1660293212_e0tmer.png',
		Captur:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742363496/carmodels/purepng.com-renault-captur-carcarvehicletransportrenault-961524654728b4mcf_xkpgjg.png',
		Clio: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742363523/carmodels/Renault-CLIO-Transparent-Background_dlwj2c.png',
		Twizy:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742363561/carmodels/renault-twizy-evchargeplus-00-1-e1608122178440-1-1024x610_po4upj.png',
	},

	'KG Mobility (SsangYong)': {
		Korando:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742363597/carmodels/ssangyong-korando-grand-white_nt4kwv.png',
		Tivoli:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742363633/carmodels/MAIN_v24bkj.png',
		Torres:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742363657/carmodels/ssangyong-torres-ironmetal-elx_b5l9gs.png',
		Rexton:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742363680/carmodels/ssangyong-rexton-ultimate-grand-white_voh6zu.webp',
		Rodius:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742363717/carmodels/0-2432_wine-black-ssangyong-rodius-space-black_hm7z5u.png',
		Musso:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742363740/carmodels/SsangYong_Musso_SWB_GrandWhite_Ultimate_jhzxrx.webp',
		Actyon:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742363772/carmodels/SsangYong-Actyon-Sports_0_vquuce.webp',
		Istana:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742363804/carmodels/SsangYong_Istana_ivldnr.png',
		Chairman:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742363837/carmodels/Ssangyong-Chairman-1997-2011-W100-Replacement-Wiper-Blades_c0wa0z.webp',
		Kyron:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742363885/carmodels/Ssangyong-Kyron-2006-2012-W100-Replacement-Wiper-Blades_folqz0.webp',
	},

	'Chevrolet (Korea)': {
		Spark:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742363956/carmodels/23-231903_1-2018-chevy-spark-white_khq6vd.png',
		Malibu:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742363982/carmodels/2018-Chevrolet-Malibu-L-Base-Hero_fm8aoj.avif',
		Cruze:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742364009/carmodels/purepng.com-chevrolet-cruzecarschevroletchevyautomobilechevrolet-cruze-1701527430387xeheh_hup5ud.png',
		Orlando:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742364047/carmodels/Chevrolet-Orlando-450x338.png_gqmanc.webp',
		Trax: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742364076/carmodels/2025-trax-1tu58-1lt-gaz-trimselector_tcekmc.avif',
		Captiva:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742364101/carmodels/Captiva-2020-retail_viaw86.avif',
		Volt: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742364131/carmodels/2019-Chevrolet-Volt-HERO_ec0j2n.avif',
		Aveo: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742364158/carmodels/64-649418_chevrolet-aveo-en-monterrey-chevrolet-aveo-g3_xpbw5y.png',
		Impala:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742364186/carmodels/purepng.com-chevrolet-impalacarschevroletchevyautomobilechevrolet-impala-1701527430556b01ui_vtf9kp.png',
		Equinox:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742364221/carmodels/22-Chevrolet-Equinox-White-cropped-LG_mpymxd.png',
		Traverse:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742364248/carmodels/2025-traverse-1ld56-2lz-g1w-trimselector_tugoub.avif',
		Trailblazer:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742364275/carmodels/SummitWhite_slzmet.png',
		Camaro:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742364303/carmodels/%D1%81hevrolet_PNG106_hxvmka.png',
		Colorado:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742364329/carmodels/2024_24_hleyf8.avif',
		Corvette:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742364364/carmodels/%D1%81hevrolet_PNG60_rt7zux.png',
		Tahoe:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742364399/carmodels/white-chevrolet-tahoe-s-u-v-profile-hxxci41yvgrn2kxs_soyqse.png',
	},

	Daewoo: {
		Matiz:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742365385/carmodels/pngimg.com_-_daewoo_PNG64_st0owi.png',
		Lacetti:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742365411/carmodels/pngimg.com_-_daewoo_PNG21_sgw3ks.png',
		Winstorm:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742365436/carmodels/pngimg.com_-_daewoo_PNG43_dnxlyn.png',
		Damas:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742365476/carmodels/EEXqrlI4VNA0za9piFoasm0o0r3dKRe2GaouulvFHgH9_d5Zxn5pgRB2kVqzP-7JBGGAnI9DtYa0vDi598GqlQ_sbbzr3.webp',
		Alpheon:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742365521/carmodels/197b56a1_hgrzpz.jpg',
		G2X: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742365553/carmodels/lancia-ypsilon-hybrid-100cv-gris-artense-car-featured-4_dlm7qj.png',
		Lanos:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742365590/carmodels/pngimg.com_-_daewoo_PNG25_v7pjwe.png',
		Nubira:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742365620/carmodels/Kfh5WdzSfaRIzxiNtBVMCfDNxB8ovCgdxSI6L8XR_xi885g.png',
		Nexia:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742365646/carmodels/pngimg.com_-_daewoo_PNG2_ds2u5r.png',
		LeMans:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742365677/carmodels/pngimg.com_-_daewoo_PNG39_cbzr7k.png',
		Leganza:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742365715/carmodels/boD5106TrCp7rfEm6ychSo7CROHFWLBYVeL1O7Hb_bcfri1.png',
		Rezzo:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742365750/carmodels/CHEVROLET-Rezzo-1_lzzf9f.png',
		Magnus:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742365841/carmodels/anyrgb.com_r4sxdz.png',
		Veritas:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742365882/carmodels/dR9J_fq_LE1gGtNpIsrD55NTxeBOEilMxN4cJrf7RDmPWKflrnXtowtd916ffNhN5fNbxl3XkH0SkXLy-WnLWva8AOEanKahlSatCelh88q3xcMUv3SnaGRps1lit2NuI09qBQPIqgc_KRf2e-ae7w_o7xtoq.webp',
		Brougham:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742365916/carmodels/185_10463_lgf1zs.png',
		Cielo:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742365961/carmodels/ccc_565be456c00b1_pafov5.webp',
		Statesman:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742366002/carmodels/JALXZFKYvcTbYR2fMhPfCPjJXtAyLX4oCp5UjLVKMmRw3erWXIHeAkd6fdtgLcYuF0Uq-PUO5fFNEwSce1ZS1g_hwy6vz.webp',
		Arcadia:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742366064/carmodels/arcadia-removebg-preview_s7z1r8.png',
		Espero:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742366089/carmodels/pngimg.com_-_daewoo_PNG30_oahlmb.png',
		Gentra:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742366114/carmodels/pngimg.com_-_daewoo_PNG45_dyihjg.png',
		Kalos:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742366146/carmodels/xz9G8e7wvjKOzwppG8FFXPw06PDPdkNhNqkA5rRb_mrvu5d.png',
		Tosca:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742366193/carmodels/pngegg_mjoihy.png',
		Tico: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742366243/carmodels/tico_btc4kp.png',
		Prince:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742366286/carmodels/eacd9105547eb3ce5a38b5811eccf53e_obgwly.webp',
		'Super Salon':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742366337/carmodels/destaque-v3_q0c58k.webp',
	},

	'Mercedes-Benz': {
		'A-Class':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742443947/carmodels/Mercedes-A-Class-Saloon-PNG-Photos_r4qmvu.png',
		'B-Class (MY B)':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444004/carmodels/mercedes-benz-b-class-w247-modeloverview-696x392-09-2022_a517px.avif',
		'C-Class':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444043/carmodels/Polar_White_Mercedes_Benz_C_Class_2014_Car_PNG_Clipart-121_lbwwox.png',
		'CL-Class':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444070/carmodels/White_Lorinser_Mercedes_Benz_CL_Class_Car_PNG_Clipart-130_jxtbkn.png',
		'CLA-Class':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444094/carmodels/e32a3b2803938e49a13a083ccb46902b_r6qvoe.png',
		'CLE-Class':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444118/carmodels/3d4668a5f4e815c509c62dd43b26f67a_gzu8zf.png',
		'CLK-Class':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444153/carmodels/78e6068c-e0c7-42f3-9248-49dc15a1c962_bbgshq.webp',
		'CLS-Class':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444188/carmodels/712e76b2-20ae-47d4-bec4-559b2b180333_pneqnc.webp',
		'E-Class':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444217/carmodels/51506279619zqpgkosu9sqb394pfu7o7fwxbcvkjteqqgvopsnd1gmwl6uw8yao504kgoxwmzv9vtfuatlovqzgtintvuqhf1nzwyv7u1n1t0gf_tjc2lu.png',
		EQA: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444252/carmodels/mercedes-eq-eqa-suv-h243-modeloverview-696x392-09-2022_twkae8.avif',
		EQB: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444281/carmodels/mercedes-eq-eqb-modeloverview-x243-696x392-09-2022_jifxnl.avif',
		EQC: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444301/carmodels/mercedes-car-eqc-300kw-edition-ytq_lwu278.png',
		EQE: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444328/carmodels/295.122_Front.png.860x860_q95_rwx6qw.png',
		EQS: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444354/carmodels/450-Sedan_nqlmvb.png',
		'G-Class (G-Wagen)':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444463/carmodels/pngimg.com_-_mercedes_PNG1861_wur1pv.png',
		'GL-Class':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444485/carmodels/gl-no-background_pmwwy4.avif',
		'GLA-Class':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444504/carmodels/ede305fcb7b96a771134c5e1cb2c0288_z10jr8.png',
		'GLB-Class':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444523/carmodels/mlp-img-top-2021-glb_xx0oos.avif',
		'GLC-Class':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444540/carmodels/186b31129992455f138aeac97015d965_wgk6nc.png',
		'GLE-Class':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444564/carmodels/model1_kptihn.png',
		'GLK-Class':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444592/carmodels/Silver_Mercedes_Benz_GLK_2014_Car_PNG_Clipart-128_yfwsg5.png',
		'GLS-Class':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444617/carmodels/51506280093jv4gusm0vc1wvusi2gfa2ytuhcjlv3te1qpkukucr0e8yhtxdzqh2pklcdmbn9dtt8wrqymkswkgs3isdz9gj4lm5jgmpt49l2ne_w0ihps.png',
		'M-Class':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444776/carmodels/2009-mercedes-benz-m-class-ml350-4-matic-suv-angular-front_u4dlwg.avif',
		'R-Class':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444801/carmodels/cc7ff185-4d7c-4df6-a6bb-079aeac0f4a8_d0uhn6.webp',
		'S-Class':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444821/carmodels/pngtree-luxury-mercedes-benz-s-class-sedan-in-sleek-black-exterior-png-image_13498655_jzhfdc.png',
		'SL-Class':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444843/carmodels/Mercedes-Benz-SL-Class-PNG-Clipart-Background_oucsoc.png',
		'SLC-Class':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444863/carmodels/2020-mercedes-benz-slc-roadster-300-convertible-angular-front_vhvwcj.avif',
		'SLK-Class':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444884/carmodels/2012-mercedes-benz-slkclass-slk350-roadster-angular-front_wknf5s.avif',
		SLR: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444930/carmodels/4c093268-c61b-4c08-9de9-0e5b51ec58e9_nisgxo.webp',
		'SLS AMG':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742444966/carmodels/HOR_XB1_M-B_SLS_sj6eel.webp',
		'AMG GT':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445008/carmodels/51506279807py9khwbwpshea5scm2q4q5edaaku996nntddwty7jwtfdlz2uewvkc6bk3jko9shdkkzf9nelnn0q9tyrticjz8tx49hjveuy44a_kyyrrr.png',
		'V-Class':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445046/carmodels/visual-web-02-1_nlrblr.png',
		Sprinter:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445082/carmodels/19MBSprinter_w5z9nk.avif',
		Unimog:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445104/carmodels/Unimog06_m7eddj.png',
	},

	BMW: {
		'1 Series':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445321/carmodels/BMW-1-Series-Transparent-File_fvlxvh.png',
		'2 Series':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445345/carmodels/23-BMW-2-Series-Gran-Coupe-White_ltbghv.png',
		'3 Series':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445370/carmodels/BMW-3-Series-2019-PNG-Photo-Image_ej1etq.png',
		'4 Series':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445389/carmodels/2021-BMW-4-Series-hero_m9pp9z.png',
		'5 Series':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445411/carmodels/ice2_Titan-Bronze_810-501_qfcfxg.png',
		'6 Series':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445451/carmodels/bmw-6-series-gran-turismo-posi-modelfinder_vqeo1e.png',
		'7 Series':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445472/carmodels/BMW-7-Series-PNG-Images-HD_u5ndaa.png',
		'8 Series':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445498/carmodels/BMW-8-Series-Gran-Coupe-PNG-Photos_pjuo7n.png',
		'Gran Turismo':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445536/carmodels/630i_lrx7ty.webp',
		X1: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445555/carmodels/b4d0bcd4e96041788e5d69034720d7ba_grjfp7.png',
		X2: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445579/carmodels/BMW-X2-Free-PNG_pafrb6.png',
		X3: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445600/carmodels/BMW-X3-XDrive30e-Background-PNG-Image_sexgue.png',
		X4: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445618/carmodels/BMW-X4-PNG-Free-File-Download_z7ty9n.png',
		X5: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445652/carmodels/bmw-x5-black-car_qhthai.png',
		X6: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445672/carmodels/purepng.com-bmw-x6-blue-carcarbmwvehicletransport-9615246630450hbgr_aoiwpd.png',
		X7: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445691/carmodels/BMW-X7-Transparent-Free-PNG_ixg9n5.png',
		'X3 M':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445707/carmodels/x3-m-competition_y9wwlb.webp',
		'X4 M':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445724/carmodels/x4-m-competition_iknboo.webp',
		'X5 M':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445742/carmodels/25XK_300_bqusuq.png',
		'X6 M':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445765/carmodels/22XN_300_hsm1fl.png',
		XM: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445784/carmodels/xm_m0y3rh.webp',
		Z3: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445827/carmodels/bmw-z3-index_j2uayo.webp',
		Z4: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445847/carmodels/Bmw-Z4-PNG-HD-Quality_hp6iql.webp',
		Z8: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445871/carmodels/MOT_XB1_BMW_Z8_lqdtwp.webp',
		i3: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445889/carmodels/2019-BMW-i3-MLP-Hero_urceu8.avif',
		i4: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445911/carmodels/i4-m50_lhblqq.webp',
		i5: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445930/carmodels/i5_M60_CoSY_hj0az0.png',
		i7: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445956/carmodels/ext_tbptst.png',
		i8: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742445989/carmodels/2018-BMW-I8-Coupe-Download-Free-PNG_bdib1e.png',
		iX1: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446009/carmodels/ix1_mfsbjk.webp',
		iX3: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446069/carmodels/ix3_xd2mkj.webp',
		iX: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446083/carmodels/update_on_ix_remzb1.png',
		'M Coupe': '',
	},

	Audi: {
		A1: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446285/carmodels/Audi-A1-Transparent-Images_pwonm6.png',
		A3: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446317/carmodels/Audi-A3-2019-PNG-Images-HD_u1rhxg.png',
		A4: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446336/carmodels/purepng.com-audi-a4-caraudicars-961524670575xcrug_sv17nk.png',
		A5: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446361/carmodels/Audi-A5-Free-PNG_l8byrz.png',
		A6: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446382/carmodels/Automobile-Audi-A6-PNG-Transparent-Image_zvw12g.png',
		A7: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446400/carmodels/Audi-A7-PNG-Download-Image_cwma02.png',
		A8: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446426/carmodels/Audi-A8-TFSI-E-Transparent-Image_snrnwy.png',
		Q2: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446450/carmodels/Q2-Website_qtujau.png',
		Q3: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446484/carmodels/purepng.com-audi-q3-caraudicars-961524670883v6rkg_j3r8ir.png',
		Q4: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446499/carmodels/model2_nhc95x.png',
		Q5: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446530/carmodels/purepng.com-audi-q5-caractere-black-caraudicarvehicletransport-961524636654bsxjw_phxzno.png',
		Q7: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446557/carmodels/purepng.com-audi-q7-caraudicars-961524670848felfc_djfd2t.png',
		Q8: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446584/carmodels/Audi-Q8-PNG-Images-HD_orhast.png',
		R8: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446603/carmodels/pngimg.com_-_audi_PNG1771_frecir.png',
		RS3: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446628/carmodels/Audi-RS3-PNG-Clipart-Background_ztlop8.png',
		RS4: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446648/carmodels/Audi-RS4-Transparent-Image_c0ns3s.png',
		RS5: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446666/carmodels/Audi-RS5-PNG-Free-File-Download_zniln4.png',
		RS6: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446685/carmodels/Audi-RS6-Transparent-File_kzn9d1.png',
		RS7: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446718/carmodels/Audi-RS7-Download-Free-PNG_vgkmd5.png',
		RSQ8: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446740/carmodels/2032_76_vxmlwk.avif',
		S3: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446763/carmodels/2022_24_ptvxfb.webp',
		S4: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446783/carmodels/Audi-S4-Transparent-Image_yddeop.png',
		S5: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446797/carmodels/2020_24_dfqc5u.avif',
		S6: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446819/carmodels/2023_76_g7dzk4.avif',
		S7: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446841/carmodels/2021_76_trqlo7.avif',
		S8: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446863/carmodels/Audi-S8-PNG-HD-Quality_bhsxli.png',
		SQ5: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446882/carmodels/2022_74_s62nfu.avif',
		SQ7: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446903/carmodels/2021_76_1_wa4l45.avif',
		SQ8: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446927/carmodels/2020_24_h7phul.webp',
		TT: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446948/carmodels/Audi-Tt-Background-PNG_yysw6e.png',
		TTRS: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742446984/carmodels/Audi-TT-RS-PNG-Photo-Image_nmr4ts.png',
		TTS: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742447006/carmodels/purepng.com-yellow-audi-tts-roadster-caraudicarvehicletransport-961524658348dclp9_jam7dh.png',
		'e-tron':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742447028/carmodels/2023_76_mvorca.webp',
		'e-tron GT':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742447050/carmodels/6Y6Y-44I_k8vuxl.png',
		'RS e-tron GT':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742447093/carmodels/2023_24_eyldly.avif',
		'Allroad Quattro':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742447115/carmodels/Audi-A6-Allroad-Transparent-Free-PNG_uu9y6a.png',
	},

	Volkswagen: {
		Golf: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742447409/carmodels/pngimg.com_-_volkswagen_PNG1824_cq4oui.png',
		Tiguan:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742447442/carmodels/2023_76_ipcfvv.avif',
		CC: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742447462/carmodels/2012-volkswagen-cc-luxury-sedan-angular-front_anh5jq.avif',
		'ID.4':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742447492/carmodels/2024-volkswagen-id4-standard-s-7e78c2668aa5-600x300_bd2luu.png',
		Jetta:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742447517/carmodels/be74dd022d027b83d57920fadbe7094b_rlhtna.png',
		Arteon:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742447542/carmodels/2021-VW-Arteon-MLP-Hero_iovryq.avif',
		Passat:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742447561/carmodels/Volkswagen-Passat-Transparent-PNG_xgspig.png',
		Beetle:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742447580/carmodels/pngimg.com_-_volkswagen_PNG1789_d4iz41.png',
		Phaeton:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742447617/carmodels/29f50c522249c3f79a6cc3fc047e1b90483f68fa_tuazyv.avif',
		Polo: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742447638/carmodels/pngimg.com_-_volkswagen_PNG1821_lmiuf7.png',
		Touareg:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742447660/carmodels/Volkswagen-Touareg-Free-Picture-PNG_zcvebw.png',
		Sharan:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742447692/carmodels/Sharan_ansv6t.png',
		Scirocco:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742447715/carmodels/Volkswagen-Scirocco-Transparent-Image_hizavm.png',
		'T-Roc':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742447740/carmodels/troc-slide_khxmqd.png',
		EOS: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742447788/carmodels/2014-Volkswagen-Eos-front_9073_032_1823x802_4Y4Y_cropped_sdpquj.avif',
		Bora: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742447814/carmodels/771-7718369_volkswagen-bora-2008-png_p7xtva.png',
		Atlas:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742447841/carmodels/2021_24_lmqqow.avif',
		Luton:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742447889/carmodels/VolkswagenCrafter_17_redfil.png',
		Vento:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742447910/carmodels/front-1-3-_xevwf6.png',
		Microbus:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742447956/carmodels/Volkswagen-Bus-Transparent-File_chx32f.png',
		'Ford California':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742447978/carmodels/VWCalifornia_20_dat66s.png',
		Multivan:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742448168/carmodels/vw-t61-multivan_o4avwa.png',
	},

	Mini: {
		Cooper:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742448643/carmodels/Mini-Cooper-Red-Car-PNG-HD-Quality_hadl86.png',
		'Cooper Convertible':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742448667/carmodels/2020-MINI-Convertible_jxuuy9.avif',
		Coupe:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742448693/carmodels/2013-mini-cooper-s-coupe-angular-front_y24ylf.avif',
		Roadster:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742448716/carmodels/2013-mini-cooper-base-roadster-angular-front_hbt9lr.avif',
		Countryman:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742448741/carmodels/2023_24_pelaju.avif',
		Clubman:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449993/carmodels/mini-clubman-index-_2_ymv78i.webp',
		Paceman:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742448774/carmodels/2016-MINI-Paceman-front_10372_032_1842x907_B62_cropped_czssys.avif',
		'Rover Mini':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742448800/carmodels/pngimg.com_-_mini_PNG11764_rytj8e.png',
		'Cooper Electric':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742448819/carmodels/all-electric_MINI_Cooper_Classic_E_mwntnc.png',
	},

	Volvo: {
		C30: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742448971/carmodels/2012-volvo-c30-t5-m-hatchback-angular-front_bgnyjb.avif',
		'C40 Recharge':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742448994/carmodels/2022_24_cnj2mj.avif',
		C70: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449019/carmodels/2013vlv002a_640_01_q0wwxu.avif',
		S40: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449039/carmodels/59a60ed4-959c-47ab-8422-31e1a8cbc30f_rd2pxr.webp',
		S60: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449068/carmodels/2022_76_xlq11v.webp',
		S70: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449093/carmodels/Volvo-S70-Sedan-1998_2000_en9v3a.png',
		S80: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449118/carmodels/pngimg.com_-_volvo_PNG18_lz92sx.png',
		S90: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449144/carmodels/2020_24_jmqlmy.avif',
		V40: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449170/carmodels/Volvo-V40-2019-Transparent-File_awvgz9.png',
		V50: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449189/carmodels/download_vf4k3n.png',
		V60: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449214/carmodels/Volvo-V60-PNG-Background_iibune.png',
		V70: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449234/carmodels/purepng.com-volvo-xc70-carcarvehicletransportvolvo-961524668917h5ueg_tf7lq6.png',
		V90: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449262/carmodels/2000_24_k4m9ww.avif',
		XC40: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449285/carmodels/2021_76_cvfzpa.avif',
		XC60: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449307/carmodels/2020_24_pmx9eg.webp',
		XC70: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449332/carmodels/purepng.com-volvo-xc70-carcarvehicletransportvolvo-961524668917h5ueg_1_o0lgrg.png',
		XC90: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449359/carmodels/purepng.com-black-volvo-xc90-excellence-carcarvehicletransportvolvo-961524654983kac6b_ss3gnl.png',
		740: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449394/carmodels/volvo-740-sedan-b230-1988-1991_cgiwfz.png',
		760: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449423/carmodels/1-1985-1990_ywocsu.png',
		850: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449462/carmodels/HOR_XB1_Volvo_850_uxwawi.webp',
		940: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449492/carmodels/a26f08_31b7dfdb6e5046e0b1c385653950dc26_mv2_zte0uj.png',
		960: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449508/carmodels/png-transparent-2008-volvo-s40-2009-volvo-s40-car-2009-volvo-c30-volvo-compact-car-sedan-car_qeyubc.png',
	},

	'Land Rover': {
		Discovery:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449607/carmodels/silver-land-rover-discovery-sport-car_i1clix.png',
		'Discovery Sport':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449637/carmodels/2016-Land-Rover-Discovery-Sport-HSE-Luxury-Trim_x2x9dd.png',
		Defender:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449666/carmodels/Land-Rover-Defender-Transparent-Images_ygbst9.png',
		'Range Rover':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449692/carmodels/pngimg.com_-_land_rover_PNG18_cfg5dk.png',
		'Range Rover Evoque':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449728/carmodels/range-rover-evoque-silver-car_wwftk9.png',
		'Range Rover Sport':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449759/carmodels/2021-Land-Rover-Range-Rover-Sport-hero_fqpvgw.png',
		'Range Rover Velar':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449808/carmodels/pngimg.com_-_land_rover_PNG61_ffp2pv.png',
		Freelander:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742449830/carmodels/pDfQZsE0dUWCufDZgrhQwgdxI4OmPLkaz0VufftJ_xejmro.webp',
	},

	Dodge: {
		Nitro:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742522382/carmodels/Dodge-Nitro_mzievq.webp',
		Dakota:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742522419/carmodels/Dodge-Dakota-Regular-Cab-1997_2004_iahqps.png',
		Durango:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742522437/carmodels/Dodge-Durango-SRT-PNG-Photos_fyzprl.png',
		'Ram Van':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742522457/carmodels/CC25_VF3L27_2TH_PW7_APA_XXX_XXX_XXX.2dd34b7553f8fcf0d4242eb79005eaf6_zooxcc.png',
		'Ram Pickup':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742522472/carmodels/pngimg.com_-_pickup_truck_PNG16332_skecvc.png',
		Magnum:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742522495/carmodels/2006-Dodge-Magnum-EX-100531255-28_zth81e.png',
		Viper:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742522508/carmodels/Dodge-Viper-PNG-Photos_mrqscq.png',
		Van: '',
		// Avenger:
		// 	'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742522558/carmodels/e99e46203376e1dc862b14fcbfb697760035c5f8_ialpkb.avif',
		Charger:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742522575/carmodels/red-dodge-charger-s-r-t-7xd9iqk9y6o2aqou_anhnqf.png',
		Challenger:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742522594/carmodels/dodge-png-1o18ga2ighipbyvh_gyfkxg.png',
		Caravan:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742522608/carmodels/2019-Dodge-Grand-Caravan-Canada-Octane-Red_b10qf3.png',
		Caliber:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742522632/carmodels/pngtree-dodge-caliber-3d-caliber-photo-png-image_13484603_ikziw5.png',
	},

	Lamborghini: {
		Gallardo:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742522774/carmodels/Lamborghini-Galardo-PNG-Images-HD_f8illd.png',
		Diablo:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742522802/carmodels/Lamborghini-Diablo-Base-1990_2001_xtjzev.png',
		Reventón:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742522820/carmodels/HOR_XB1_Lambo_Reventon_FE_kgdbzi.webp',
		Murciélago:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742522840/carmodels/141-1415316_svg-black-and-white-library-drawing-lambo-murcielago_mp7pf3.png',
		Aventador:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742522854/carmodels/purepng.com-blue-lamborghini-aventador-carcarvehicletransportlamborghini-961524657644ldrr1_egal0t.png',
		Huracán:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742522876/carmodels/white-lamborghini-huracan-car_vxinzi.png',
		Urus: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742522891/carmodels/compressed_f71fac8651cb239b369c8774380e31a7_nlxwf0.webp',
	},

	Lexus: {
		CT: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523051/carmodels/2012-lexus-ct-200h-base-hatchback-angular-front_fvfjaq.avif',
		ES: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523065/carmodels/Lexus-ES-250-AWD-visualizer-styles-750x471-LEX-ESG-MY22-0026-04_j2u2tr.avif',
		GS: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523096/carmodels/blue-lexus-gs-f-car_mdzmyc.png',
		GX: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523116/carmodels/Lexus-GX-PremiumJelly-Styles-750x471-LEX-GXG-MY24-1000.03_hizyfd.avif',
		IS: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523153/carmodels/Red-Lexus-PNG-Free-File-Download_raycbv.png',
		LC: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523170/carmodels/lc_sport_320-1da3c3_f8inz1.png',
		LM: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523188/carmodels/all-new-lm_320_2401-09863e_njlwcv.png',
		LS: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523211/carmodels/ls500_320-1606948105-157128_oeac93.png',
		LX: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523231/carmodels/my22-lx-600-fsport-mgp-masthead_yw3ldm.png',
		NX: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523242/carmodels/Lexus-NX-250-style-selector-grecianwater-visualizer-750x471-LEX-NXG-MY25-0001.07_pbc8qx.avif',
		RC: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523274/carmodels/purepng.com-lexus-rc-f-blue-carcarvehicletransportlexus-961524665425ubstr_bvm3pm.png',
		RX: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523290/carmodels/rx_40_221114n-2f41dd_q17y9g.png',
		RZ: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523331/carmodels/Lexus-RZ-300e-visualizer-styles-750x471-LEX-RZV-MY25-0042.04_dkeynb.avif',
		SC: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523350/carmodels/HOR_XB1_Lexus_SC300_mbqbgs.webp',
		UX: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523362/carmodels/Lexus-UXh-visualizer-styles-750x471-PNG-LEX-UXH-MY23-0014.03_kbgx9v.avif',
	},

	'Rolls-Royce': {
		Spectre:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523466/carmodels/spectre-1_ttqciw.png',
		Ghost:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523496/carmodels/2021-rolls-royce-ghost-deep-etch_n5fidw.webp',
		Phantom:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523520/carmodels/Rolls-Royce-Phantom-PNG-HD-Quality_vtenj7.png',
		Cullinan:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523533/carmodels/Rolls-Royce-Cullinan-Transparent-Images_m6ikyr.png',
		Wraith:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523564/carmodels/rolls-royce-wraith-silver-car_fjls42.png',
		Dawn: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523603/carmodels/Rolls-Royce-Dawn_vcuxkl.webp',
		Corniche:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523637/carmodels/e94d2bf8-6a30-488e-886a-dd0b9ce2e904_q3btwj.webp',
		'Silver Spur':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523665/carmodels/pngaaa.com-1108916_spfrlg.png',
		'Silver Seraph':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523687/carmodels/rolls-royce-silver-seraph-repair-dubai-20200927085557_uf1sxw.png',
	},

	Infiniti: {
		Q: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523823/carmodels/Infiniti-Q30_0_lis8nv.webp',
		QX: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523856/carmodels/infiniti-2025-all-new-qx80-nav_wmojvp.png',
		G: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523873/carmodels/Infiniti-G37-PNG-Clipart-Background_qlihtv.png',
		M: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523921/carmodels/2013-INFINITI-M-front_8312_032_1831x756_K23_cropped_ruyk7f.avif',
		I: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523944/carmodels/pngimg.com_-_infiniti_PNG39_fbqips.png',
		FX: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523978/carmodels/purepng.com-infiniti-fx30d-s-black-carcarcarsvehiclevehiclestransport-5615211261151nmx2_zdlmej.png',
		EX: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742523996/carmodels/infiniti_PNG4_kqdnas.png',
		JX: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524009/carmodels/2013-infiniti-jx-fwd-suv-angular-front_fpchxo.avif',
	},

	Jeep: {
		Gladiator:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524139/carmodels/Jeep-Gladiator-Background-PNG-Image_qawqch.png',
		Wrangler:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524162/carmodels/Jeep-Wrangler-2018-PNG-Clipart-Background_wqda1y.png',
		Renegade:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524182/carmodels/Jeep-Renegade-Transparent-PNG_kwr5ww.png',
		Liberty:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524208/carmodels/jeep-liberty-logo-png-05252024-1ey2i7d0h8iuh8ys_oqnm1i.png',
		Avenger:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524227/carmodels/JEEP-AVENGER-SUMMIT-MY25-CONCRETE-VOLCANO-565x330_zpevl4.png',
		Cherokee:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524247/carmodels/black-jeep-grand-cherokee-car_dmqw3r.png',
		Compass:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524267/carmodels/Jeep-Compass-No-Background_vwpwfx.png',
		Commander:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524289/carmodels/173_Commander_Overland_nafta_Polar_White_107.png.img.1440_srxsgp.png',
		Patriot:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524304/carmodels/purepng.com-red-jeep-patriot-suv-carcarvehicletransportjeepsuv-961524638251odo7c_h5f70a.png',
	},

	Cadillac: {
		ATS: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524483/carmodels/491-4917719_cadillac-ats_pzcfrr.png',
		'ATS-V':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524508/carmodels/12543_26_ykypew.avif',
		BLS: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524527/carmodels/pngimg.com_-_cadillac_PNG27_i2vg7x.png',
		CT4: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524544/carmodels/2021_76_pel8bx.webp',
		CT5: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524566/carmodels/2024-cadillac-ct5-v-blackwing-sedan-8961eef3efda-600x300_q4htuk.png',
		CT6: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524590/carmodels/1963_21_dcsxts.png',
		'CT6-V':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524616/carmodels/1982_22_w7nzyq.avif',
		CTS: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524632/carmodels/2019-cadillac-cts-luxury-sedan-angular-front_oet2dh.avif',
		'CTS-V':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524655/carmodels/2019_56_tyrg4e.avif',
		DTS: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524676/carmodels/835-8352879_640-x-480-5-2010-cadillac-dts-black_dwhtyv.png',
		SRX: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524693/carmodels/pngimg.com_-_cadillac_PNG29_j4bcjr.png',
		STS: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524713/carmodels/cadillac-sts-blue-car-2_fbtqvt.png',
		XLR: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524735/carmodels/purepng.com-cadillac-xlr-v-grey-carcarvehicletransportautocars-561521125160yetkw_rvz9dt.png',
		XT4: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524755/carmodels/vehicles-drp-suvs-24-xt4_uuvhlf.avif',
		XT5: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524795/carmodels/2025_76_l95ngf.avif',
		DeVille:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524816/carmodels/pngimg.com_-_cadillac_PNG39_scv6vv.png',
		Lyriq:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524839/carmodels/2023_76_xwiq0x.avif',
		Seville:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524861/carmodels/pngtree-timeless-elegance-the-beauty-of-classic-cadillac-cars-png-image_13402828_f1kuef.png',
		Escalade:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742524905/carmodels/vehicles-drp-suvs-23-escalade_yxptqu.avif',
		Concor: '',
	},

	Ferrari: {
		296: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742526131/carmodels/small_296_GTB_Thumb_8f6ff97551_kzix1w.png',
		348: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742526204/carmodels/pngwing.com_gg8put.png',
		360: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742526236/carmodels/MOT_XB360_Ferrari_360_bb2nlp.webp',
		456: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742526257/carmodels/5dd51def0cf6995f44de91d4-ferrari-456-gt-1992-design-mob_vzk76s.avif',
		458: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742526277/carmodels/purepng.com-ferrari-458-italia-carcarferrarivehicletransport-961524667589bmvtk_q5lont.png',
		488: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742526304/carmodels/purepng.com-red-ferrari-488-gtb-carcarferrarivehicletransport-961524664035iiglb_jojqup.png',
		'512 TR':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742526324/carmodels/HOR_XB1_Ferrari_512_cw6bkj.webp',
		550: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742526349/carmodels/ferrari-550_xafyq1.avif',
		'575M':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742526371/carmodels/HOR_XB1_Ferrari_575_kfpmmi.webp',
		599: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742526391/carmodels/HOR_XB1_Ferrari_599_10_oqoij9.webp',
		612: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742526413/carmodels/MOT_XB1_Ferrari_612_ap4uxz.webp',
		812: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742526434/carmodels/Ferrari-812-Superfast-Transparent-Free-PNG_srpzac.png',
		F12: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742526458/carmodels/purepng.com-black-ferrari-f12-berlinetta-carcarferrarivehicletransport-961524658796jrblw_q58jio.png',
		F355: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742526481/carmodels/HOR_XB1_Ferrari_F355_rku54a.webp',
		F40: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742526502/carmodels/compressed_4ac3ebcc6d9a96ac79376c234a6cf903_dkqwpe.webp',
		F430: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742526522/carmodels/HOR_XB1_Ferrari_430_r6ol2u.webp',
		F50: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742526550/carmodels/HOR_XB1_Ferrari_F50_95_zha96b.webp',
		F8: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742526573/carmodels/Ferrari-F8-Tributo-PNG-Image-Transparent-Background_rqouqo.png',
		FF: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742526599/carmodels/HOR_XB1_Ferrari_FF_lfu3a4.webp',
		'GTC4 Lusso':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742526625/carmodels/grey-ferrari-gtc4-lusso-car_zegfzw.png',
		SF90: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742526648/carmodels/FH5_Ferrari_SF90_Stradale_2020_Large_knmh44.webp',
		LaFerrari:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742526679/carmodels/HOR_XB1_Ferrari_LaFerrari_w74ssj.webp',
		Roma: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742526698/carmodels/FH5_Ferrari_Roma_2020_Large_tibuyz.webp',
		'Enzo Ferrari':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742526726/carmodels/HOR_XB1_Ferrari_Enzo_dwwy0g.webp',
		California:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742526053/carmodels/purepng.com-ferrari-california-red-carcarferrarivehicletransport-96152465228982kdz_jxxqay.png',
		Portofino:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742526763/carmodels/HOR_XB1_Ferrari_Portofino_hqafna.webp',
		Purosangue:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742526778/carmodels/Purosangue_Thumb_0c3b8e5ea7_s5nrkq.png',
	},

	Ford: {
		Escape:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742527003/carmodels/2025-Escape-ST-Line-Select-Right_xns8mw.avif',
		Explorer:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742527038/carmodels/purepng.com-ford-explorer-xltcarvehicletransportautocars-561521125244ehpza_ifj8q8.png',
		'Explorer Sport Trac':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742527061/carmodels/2010frd008a_640_01_cbjqmr.avif',
		Taurus:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742527082/carmodels/1019_34_kmca4z.avif',
		Focus:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742527105/carmodels/purepng.com-ford-focus-st-yellow-carcarvehicletransportford-961524664016apjao_bmuoxx.png',
		'F-Series':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742527135/carmodels/2019-Ford-F-150-White-Platinum_ujzlfl.png',
		GT: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742527165/carmodels/purepng.com-yellow-ford-gt-carcarvehicletransportford-961524651071guvne_ztcxch.png',
		'S-MAX':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742527195/carmodels/ford-s-max-st-line-YR2YaD54eS_mo3npc.png',
		Ranger:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742527217/carmodels/ford-ranger-wildtrak-color-cyber-orange_fjdhfy.png',
		Mustang:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742527243/carmodels/pngimg.com_-_mustang_PNG30_pagfku.png',
		Mondeo:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742527266/carmodels/purepng.com-ford-mondeo-red-carcarvehicletransportford-961524638418lugc0_dy9fro.png',
		Bronco:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742527314/carmodels/cq5dam.web.1280.1280_dyoizw.webp',
		Thunderbird:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742527359/carmodels/55-57_ford-thunderbird-convertible-min-vintage-effect-1_nkoqxc.png',
		Windstar:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742527385/carmodels/de7ns81-9648d8a7-986b-4189-9f67-34aaac435066_g4caxv.png',
		Econoline:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742527409/carmodels/de8pgcc-b7867f4b-a3fe-45a6-a77b-1a05d69875eb_c7q3ga.png',
		Expedition:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742527435/carmodels/vehicle_rzrley.avif',
		Contour:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742527459/carmodels/Ford-Contour-LX-1995_2000_ogpzay.png',
		Kuga: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742527484/carmodels/Ford-Kuga-PNG-Images-HD_zl1f1l.png',
		'Five Hundred':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742527514/carmodels/2005-Ford-Five-Hundred-EX-100396387-29_qw8da8.png',
		Probe:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742527544/carmodels/2-1993-1998_x4sksa.png',
		Freestyle:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742527567/carmodels/0_4loAtY1LfP-9YtQu_coiqof.png',
		Fusion:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742527593/carmodels/2018-ford-fusion-se-32-white_nteuur.png',
		Transit:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742527623/carmodels/pngtree-isolated-of-ford-transit-cargo-van-2020-model-high-roof-148-png-image_15323203_bzya3i.png',
		'E-Series':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742527651/carmodels/cq5dam.web.1280.1280_ioej3l.avif',
		Ka: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742527677/carmodels/Ford-Ka-Transparent-Images_isodxp.png',
		Fiesta:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742527690/carmodels/pngimg.com_-_ford_PNG12210_fvfvgu.png',
		Flex: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742527708/carmodels/2019_Ford_Flex_SEL_Blue_Exterior_Front_Picture_dwg5bn.png',
	},

	Toyota: {
		'4Runner':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742536452/carmodels/download_xfhlfq.png',
		86: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742536472/carmodels/pngimg.com_-_toyota_PNG1950_bnkykq.png',
		'FJ Cruiser':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742536491/carmodels/m1_s4htna.png',
		MR: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742536506/carmodels/Toyota-MR2-PNG-Clipart-Background_fuozgl.png',
		WiLL: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742536547/carmodels/m1_1_we269k.png',
		bB: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742536564/carmodels/m1_2_ymk5qs.png',
		iQ: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742536578/carmodels/m1_3_xz6ho1.png',
		Gaia: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742536599/carmodels/m1_4_c4d9ex.png',
		Noir: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742536611/carmodels/pngimg.com_-_toyota_PNG1920_llnyby.png',
		RAV4: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742536625/carmodels/2022.rav4.awd.xle.premium-lrg_dwh5xr.png',
		'Land Cruiser':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742536647/carmodels/toyota-land-cruiser-white-car_w2hi4x.png',
		Matrix:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742536672/carmodels/de312204-5136-42b4-9502-b2bbc4ead524_ytbxkw.webp',
		Venza:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742536696/carmodels/C445709_089_Front_ts6tbx.avif',
		Sequoia:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742536716/carmodels/5_npvmkk.avif',
		Celica:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742536736/carmodels/Toyota-Celica-Transparent-PNG_ofzqfz.png',
		Soarer:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742536758/carmodels/FH5_Toyota_Soarer_2.5_GT-T_navkmx.webp',
		Solara:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742536777/carmodels/2008-toyota-camry-solara-se-coupe-angular-front_prky3w.avif',
		Supra:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742536794/carmodels/white-sport-car-isolated-on-transparent-background-3d-rendering-illustration-free-png_gzq4bm.webp',
		Sienna:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742536824/carmodels/C461545_040_Front_zhhifh.avif',
		Sienta:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742536844/carmodels/sienta_ext_596x396_070_lm62so.webp',
		Avalon:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742536859/carmodels/mlp-img-top-2022-avalon_ofcswv.avif',
		Aygo: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742536886/carmodels/Toyota-Aygo-Background-PNG_oq5sok.png',
		Altezza:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742536908/carmodels/Toyota-Altezza-2005-1_bss8hw.png',
		Alphard:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742536934/carmodels/Toyota-Alphard_yzs0or.png',
		Yaris:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742536955/carmodels/pngimg.com_-_toyota_PNG1924_yb0jb7.png',
		Estima:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742536976/carmodels/m1_5_giup8x.png',
		Esquire:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537008/carmodels/Toyota-Esquire-Bronze-Metallic-_srmbje.png',
		Wish: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537025/carmodels/m1_mklxp7.png',
		Chaser:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537042/carmodels/m1_1_nkwh3t.png',
		Caldina:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537062/carmodels/m1_2_sdncbm.png',
		Camry:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537080/carmodels/Toyota-Camry-Transparent-Images_r5bjg4.png',
		Corolla:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537099/carmodels/white-modern-car-isolated-on-transparent-background-3d-rendering-illustration-free-png_rsvjkb.webp',
		Crown:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537114/carmodels/m1_3_uqcly5.png',
		Tacoma:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537133/carmodels/Toyota-Tacoma-Transparent-PNG_je6gzc.png',
		Tundra:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537150/carmodels/Toyota-Tundra-PNG-Photo-Image_dxljzc.png',
		Passo:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537185/carmodels/m1_4_x2qtsr.png',
		Forte:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537223/carmodels/C430181_SWP_Front_znb9mr.avif',
		Previa:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537250/carmodels/png-clipart-toyota-previa-car-volkswagen-gli-tarago-toyota-compact-car-glass_2-e1727189560578_afvd4j.png',
		Prius:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537282/carmodels/167-1679615_25-toyota-prius-3rd-gen_onjsfr.png',
		Highlander:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537304/carmodels/2021_24_sl3fkg.avif',
		Hiace:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537328/carmodels/Hiace_adobespark_lcvfux.png',
		Harrier:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537343/carmodels/harrier-black_xxjab6.png',
	},

	Porsche: {
		718: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537505/carmodels/porsche-718-boxster-s-orange-car_riopoh.png',
		911: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537520/carmodels/red-porsche-911-gt3-rs-4-car_fyc8nh.png',
		928: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537536/carmodels/HOR_XB1_Porsche_928_FH4_dpgmzf.webp',
		944: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537553/carmodels/HOR_XB1_Porsche_944_fzqles.webp',
		968: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537575/carmodels/HOR_XB1_Porsche_968_rht7bq.webp',
		Macan:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537601/carmodels/Porsche-Macan-Background-PNG-Image_a3nyx1.png',
		Boxster:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537617/carmodels/porsche-718-boxster-s-orange-car_1_hyuyg8.png',
		Cayman:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537647/carmodels/yellow-porsche-cayman-gt4-car_yi7oni.png',
		Cayenne:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537664/carmodels/pngimg.com_-_porsche_PNG10611_jt9qly.png',
		Taycan:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537685/carmodels/Porsche-Taycan-PNG-Clipart-Background_am4cmz.png',
		Panamera:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537700/carmodels/purepng.com-black-porsche-panamera-carcarvehicletransportporsche-961524660080ezwd4_igylor.png',
	},

	Tesla: {
		'Model 3':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537747/carmodels/Tesla-Model-3-Transparent-Background_eo8r7e.png',
		'Model S':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537764/carmodels/purepng.com-tesla-model-s-red-carcarvehicletransporttesla-961524657832miq7l_infxcv.png',
		'Model X':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537787/carmodels/tesla-model-x-white-car_n5szgs.png',
		'Model Y':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537815/carmodels/e298f6a9-7683-4e46-a56d-979152a3820a_sgegye.webp',
	},

	GMC: {
		Ventura:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537931/carmodels/HOR_XB1_GMC_Vandura_asgus3.webp',
		Savana:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537947/carmodels/2023-gmc-savana-2500-passenger-summit-white_iuizk3.avif',
		Safari:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537965/carmodels/de4f145-9709b265-26c8-41ba-bbb6-ca72e7b6e09a_dwwasb.png',
		Sonoma:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742537990/carmodels/GMC-Sonoma-SL-Extended-Cab-1989_2003_fyeiev.png',
		Sierra:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538006/carmodels/purepng.com-black-gmc-sierra-denali-carcarvehicletransportgmc-sierra-961524652507ige8c_o7ivlz.png',
		Envoy:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538023/carmodels/2007-GMC-Envoy-EX-100742812-30_rkt7sp.png',
		Yukon:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538046/carmodels/GMCYukon_ycgiy2.png',
		Jimmy:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538059/carmodels/FH5_GMC_Jimmy_Large_kuwjn4.webp',
		Canyon:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538078/carmodels/2024-gmc-canyon-at4x-volcanic-red-779x394_jltsmi.avif',
		Terrain:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538113/carmodels/2022-terrain-slt-cayenne-red-tintcoat_aphjda.avif',
	},

	Maserati: {
		Grecale:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538227/carmodels/grecale_trofeo_ds16uj.png',
		GranSport:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538251/carmodels/purepng.com-maserati-granturismo-carcarvehicletransportmaserati-9615246694806yczn_mav7g4.png',
		'Gran Turismo':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538290/carmodels/Maserati-GranTurismo-Download-Free-PNG_e1vsre.png',
		GranCabrio:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538268/carmodels/model-1017x537_q26vpv.png',
		Ghibli:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538309/carmodels/pngimg.com_-_maserati_PNG40_emmsuc.png',
		Levante:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538327/carmodels/2019-Maserati-Levante_ki0xnq.avif',
		Spyder:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538344/carmodels/pngimg.com_-_maserati_PNG15_j8ix6m.webp',
		Quattroporte:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538370/carmodels/Maserati-Quattroporte-PNG-Pic-Background_kumodo.png',
		Coupe:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538381/carmodels/pngimg.com_-_maserati_PNG28_aqjuki.png',
		MC12: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538400/carmodels/836-8365731_maserati-mc12_or955v.png',
		MC20: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538419/carmodels/2023-maserati-mc20-main_hnnzpg.png',
		'3200 GT':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538444/carmodels/maserati-3200gt-347x151_fjqz6c.png',
		'4200 GT':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538457/carmodels/UNIWIPER-WIPER-BLADES-Maserati-4200GT-2002-2003-2004-2005-2006-2007-_M138_gupc4x.png',
	},

	Bentley: {
		Continental:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538573/carmodels/bentley-continental-gt-speed-car_xfgu3e.png',
		'Flying Spur':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538590/carmodels/D_631_Mulliner_Front_j7dzei.png',
		Bentayga:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538606/carmodels/Bentley-Bentayga-PHEV-Transparent-PNG_juys2m.png',
		Mulsanne:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538638/carmodels/purepng.com-bentley-mulsanne-black-carcarvehicletransportbentley-9615246525292le3k_hrb0eb.png',
		Arnage:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538664/carmodels/bentley-arnage_k2rm7i.avif',
		Azure:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538684/carmodels/dws_600x300_sequin_blue_continental_gt_azure_fdt7t4.png',
		Eight:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538716/carmodels/pngimg.com_-_bentley_PNG13_n5q6qs.png',
		Brooklands:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538735/carmodels/4d58bc2b593dfe6a94657f45e6dfc701840de815_wawlp2.avif',
	},

	Bugatti: {
		EB110:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538799/carmodels/HOR_XB1_Bugatti_EB110_rfbuqs.webp',
		Veyron:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538822/carmodels/bugatti-car-png-3_xejmbk.png',
		Chiron:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538841/carmodels/Bugatti-Chiron-PNG-Background-Image_zfjus4.png',
		Divo: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538861/carmodels/Bugatti-Divo-Background-PNG-Image_vuqlqn.png',
		Centodieci:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742538878/carmodels/545299_w9grsr.png',
	},

	'Alfa-Romeo': {
		147: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540208/carmodels/147_cykr61.png',
		156: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540231/carmodels/ALFA-156-1998-SN-750x525_m8yovk.png',
		159: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540243/carmodels/pngimg.com_-_alfa_romeo_PNG57_wlbhiy.png',
		164: '',
		166: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540322/carmodels/1472-large_default_dxvbh6.png',
		GT: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540341/carmodels/pngimg.com_-_alfa_romeo_PNG39_ir6pm0.png',
		GTV: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540351/carmodels/Mot_alf_gtv6_dcmmmd.webp',
		MiTo: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540381/carmodels/pngimg.com_-_alfa_romeo_PNG75_mltwdn.png',
		Brera:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540386/carmodels/purepng.com-red-alfa-romeo-brera-s-carcarvehicletransportalfa-romeo-961524651745oiprr_wbf54g.png',
		Spyder:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540425/carmodels/Mot_alf_spider_rzvlki.webp',
		Giuilia:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540450/carmodels/GIULIA_MCA_SPRINT_rossa_s9mzt1.avif',
		Giulietta:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540466/carmodels/pngimg.com_-_alfa_romeo_PNG29_ovgacm.png',
		'4C': 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540483/carmodels/purepng.com-alfa-romeo-4c-carcarvehicletransportalfa-romeo-961524665177igoln_tznxzj.png',
		'8C': 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540494/carmodels/Mot_alf_8c_07_fhpti4.webp',
	},

	'Aston Martin': {
		DB: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540572/carmodels/pngimg.com_-_aston_martin_PNG5_uikl4i.png',
		DBS: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540593/carmodels/purepng.com-aston-martin-dbs-silver-carcarvehicletransportaston-martin-961524642936tugv9_tzgjor.png',
		Vantage:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540601/carmodels/vantage-24-model_20240212135451666_z8dkqa.png',
		Vanquish:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540616/carmodels/purepng.com-aston-martin-vanquish-carcarcarsvehiclevehiclestransport-561521126453a6hpc_qmdzmd.png',
		Rapide:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540633/carmodels/gray-aston-martin-rapide-luxury-car_tjodmv.png',
		DBX: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540648/carmodels/Aston-Martin-DBX-Transparent-Background_ab0sth.png',
	},

	Jaguar: {
		'E-Pace':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540761/carmodels/model1_oz8yw1.png',
		'F-Pace':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540782/carmodels/purepng.com-jaguar-f-pace-white-carcarvehicletransportjaguar-961524650283tduar_zvofa9.png',
		'I-Pace':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540789/carmodels/Jaguar-I-Pace-PNG-HD-Quality_yfbwo5.png',
		'S-Type':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540812/carmodels/Jaguar-S-Type-PNG-HD_jeyl3q.png',
		'X-Type':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540832/carmodels/2005-jaguar-x-type-awd-25-4dr-sedan-090-cropmedium_t5nadc.png',
		XE: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540846/carmodels/Jaguar-XE-Project-8-Transparent-File_ye3vqw.png',
		XF: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540881/carmodels/white-jaguar-xf-2-car_hxk0wh.png',
		XJ: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540896/carmodels/2018-Jaguar-XJ-PNG-Images-HD_pknybu.png',
		XK: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540908/carmodels/purepng.com-jaguar-xkr-s-blue-carcarvehicletransportautocars-561521125346a9gaa_ya3ejd.png',
		Daimler: '',
		Sovereign:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742540977/carmodels/purepng.com-jaguar-xj-ultimate-carcarvehicletransportjaguar-961524669893eazkb_e9kifi.png',
	},

	Lotus: {
		'2-Eleven':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742541850/carmodels/HOR_XB1_Lotus_2-Eleven_jxfgyv.webp',
		Emira:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742541867/carmodels/c6ba607df627a5675bb8089983d149cb_a2a1pv.png',
		Evora:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742541884/carmodels/silver-lotus-evora-400-car_u4ls2g.png',
		Espirit:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742541899/carmodels/Lotus-Esprit-PNG-Clipart-Background_mxbtap.png',
		Exige:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742541916/carmodels/pngimg.com_-_lotus_PNG26_qliecq.png',
		Eletre:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742541930/carmodels/Eletre-cutout_cqubkv.webp',
		Elise:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742541947/carmodels/pngimg.com_-_lotus_PNG39_ptsplv.png',
		Europa:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742541988/carmodels/pngwing.com_kq1vx1.png',
	},

	Lincoln: {
		MKC: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542114/carmodels/2019_76_ai4our.avif',
		MKS: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542137/carmodels/11104_st0640_116_lqlwtt.png',
		MKT: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542139/carmodels/Lincoln-MKT-Black-Sedan-Transparent_q8xaif.png',
		MKX: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542193/carmodels/red-lincoln-mkx-car_ic41g2.png',
		MKZ: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542192/carmodels/Lincoln-MKZ-PNG-Photo_o0hoof.png',
		LS: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542191/carmodels/2006-Lincoln-LS-EX-100566170-33_qjomjg.png',
		Navigator:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542251/carmodels/model1_kmb8ni.png',
		Aviator:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542251/carmodels/2025_Aviator_BYO_uh1r8w.avif',
		Continental:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542251/carmodels/lincoln-continental-950-600_uoyyjj.png',
		'Town Car':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542307/carmodels/52916269666_75b4658b8f_o_ixz8ag.png',
		Nautilus:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542307/carmodels/2025_Nautilus_BYO_hhxxy5.avif',
		Corsair:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542307/carmodels/BYO_CYP_2024_Corsair_hzlmap.avif',
	},

	Maybach: {
		57: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542381/carmodels/a2697107-3394-40ae-9612-73db9d92a057_c7b8ck.webp',
		62: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542380/carmodels/0fzXoqamRpAL3tXHPoEdoBBfV8nMuYfCIotrP8yS_fx709o.png',
	},

	McLaren: {
		'540C':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542548/carmodels/purepng.com-red-mclaren-540c-carcarvehicletransportmclaren-961524656296gvl7j_h3dqtn.png',
		'570GT':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542548/carmodels/McLaren-570GT-Transparent-Image_tazhee.png',
		'570S':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542549/carmodels/orange-mclaren-570s-car_lkwtyz.png',
		'600LT':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542619/carmodels/McLaren-600LT-Spider-Background-PNG-Image_uasoep.png',
		'650S':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542616/carmodels/purepng.com-mclaren-650s-blue-carcarvehicletransportmclaren-961524658327ovnru_gouahe.png',
		'675T':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542616/carmodels/purepng.com-green-mclaren-675lt-spider-super-carcarvehicletransportmclarensuper-car-961524645486qgi8m_kpwhnf.png',
		'720S':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542690/carmodels/McLaren-720S-PNG-Photos_gyk4hs.png',
		'750S':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542690/carmodels/750-cutout_ukps9w.png',
		'765LT':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542689/carmodels/1765ltspider_cutout_pevsob.png',
		GT: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542748/carmodels/gt_t2eyw4.avif',
		'MP4-12C':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542748/carmodels/390-3901802_mclaren-png-download-mclaren-mp4-12c_n9sado.png',
		아투라:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542748/carmodels/caab99e820c3263f00c985b917889d8c_m8ipq1.png',
	},

	Acura: {
		MDX: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542885/carmodels/mdx-2022-lhd-technology_bd1axv.png',
		RSX: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542886/carmodels/Acura-RSX-PNG-Pic_h02wdz.png',
		TL: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542885/carmodels/2010-acura-tl-5-speed-at-with-tech-package-sedan-angular-front-1_ywuwu0.avif',
		TSX: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542939/carmodels/pngimg.com_-_acura_PNG24_q1tis3.png',
		Integra:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542939/carmodels/MY24_Integra_EliteASpecMT_LCM_1036x520_Desktop_OverviewKeyFeatures_vfwfa9.avif',
		CL: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542939/carmodels/2003-acura-cl-base-coupe-angular-front_yfolg7.avif',
		NSX: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742543003/carmodels/purepng.com-acura-nsx-carcarvehicletransportacura-961524640438ry3jv_ygr1m4.png',
		RDX: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542995/carmodels/2025-RDX-pricing-and-specs-header-jellybean-XL_ytpxq4.avif',
		RL: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742542995/carmodels/pngimg.com_-_acura_PNG15_m6u047.webp',
		ILX: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742543029/carmodels/2021-Acura-ILX-Platinum-White-Pearl-2_wazzmt.png',
	},

	Chrysler: {
		200: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742543213/carmodels/2013-chrysler-200-limited-sedan-angular-front_vd3ahp.avif',
		'300C':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742543213/carmodels/pngimg.com_-_chrysler_PNG5_r5nomi.png',
		'300M':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742543213/carmodels/d9dd8c55-bc90-41f8-a656-c0b1f558ad72_zo6rfj.webp',
		LHS: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742543306/carmodels/64f35783-866c-4662-9870-a6d5e9a10cce_daqzog.webp',
		'PT Cruiser':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742543306/carmodels/2007-chrysler-pt-cruiser-base-wagon-angular-front_mgczvx.avif',
		Neon: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742543306/carmodels/chrysler-neon_havb0c.png',
		'New Yorker':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742543361/carmodels/pngtree-vintage-chrysler-new-yorker-car-vintage-car-png-image_14604553-1_ymfjpq.png',
		Voyager:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742543360/carmodels/2021-Chrysler-Voyager-hero_c3dn2i.png',
		Vision:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742543361/carmodels/CHRYSLER_Vision_smwbcb.png',
		Sebring:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742543444/carmodels/dhvimhu-71fea1cf-f770-4c5d-987c-09db0288587e_xgg8e7.png',
		Stratus:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742543442/carmodels/e8b497fd16dfa5e52f41fd49d7d6de256c545b8544b66fe1f651f9f0f99014de_hjvyev.png',
		Cirrus:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742543442/carmodels/Chrysler-Cirrus-2001-700x510_ouirrt.png',
		'Eagle Talon':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742543508/carmodels/MOT_XB1_Eagle_Talon_zvuxlp.webp',
		Prowler:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742543508/carmodels/HOR_XB1_Plymouth_Prowler_s1dvdf.webp',
		Pacifica:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742543507/carmodels/Chrysler_Pacifica_jooqut.png',
		Caravan:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742543567/carmodels/CC24_RUCL53_2DE_PW7_APA_XXX_XXX_XXX.b01c02d7749aba414b351da45aa773d6_saiblk.png',
		Concord:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742543567/carmodels/c7dc5d185309519.656160e452464_ykfsbl.webp',
		Crossfire:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742543566/carmodels/639-6391415_chrysler-crossfire-roadster-convertible-2-doors-crossfires-2_yj5oav.png',
		'Town & Country':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742543602/carmodels/2016-chrysler-town-and-country-limited-minivan-angular-front_naswzh.avif',
	},

	Hummer: {
		H1: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742543676/carmodels/pngimg.com_-_hummer_PNG12197_r22ok8.png',
		H2: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742543676/carmodels/purepng.com-hummer-h2-suv-truckcarcarsvehiclevehiclestransport-561521126433zfg3x_knx9ty.png',
		H3: 'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742543675/carmodels/2010-hummer-h3-adventure-suv-angular-front_xdbled.avifs',
	},

	Polestar: {
		'Polestar 4':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742543733/carmodels/getimage-_16_flqbko.webp',
		'Polestar 2':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742543733/carmodels/Polestar-2-Free-PNG_xog8fw.png',
	},

	Pontiac: {
		'Grand Prix':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742544477/carmodels/6af2f7cb-1823-48a9-806b-a4ed48439892_vi4qzh.png',
		'Grand Am':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742544477/carmodels/554631d7-a16f-4614-a479-19786d10b757_si4iu3.webp',
		Bonneville:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742544477/carmodels/2005-pontiac-bonneville-gxp-sedan-angular-front_bgylq7.avif',
		Sunfire:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742544535/carmodels/7ced9ff0-28c7-473f-b6c6-29904b69a1b9_fqqcj9.png',
		Solstice:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742544535/carmodels/MOT_X1_Pontiac_Solstice_mc6cfs.webp',
		Firebird:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742544536/carmodels/pontiac_firebird_trans_am_1978_png_by_mrfatback_dak2j86-fullview_p2dth3.png',
		Fiero:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742544596/carmodels/generation_65321697b0676_1988-pontiac-fiero-gt-removebg-preview_myb2oa.webp',
		'Trans Sport':
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742544596/carmodels/2004_Pontiac_Montana_ew5pn8.png',
		Torrent:
			'https://res.cloudinary.com/dt0nkqowc/image/upload/v1742544596/carmodels/2007-Pontiac-Torrent-EX-100762221-39_kfmfpc.png',
	},
}

const modelLogos = cachedModelLogos
	? JSON.parse(cachedModelLogos)
	: rawModelLogos

if (!cachedModelLogos) {
	localStorage.setItem('modelLogos', JSON.stringify(rawModelLogos))
}

export default modelLogos
