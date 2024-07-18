var uciFunction = {
	fileName:"function",
	secName:{
		moduleSpec:"module_spec"
	},
	optName:{
		appVer:"app_version",
		led:"led",
		changePwd:"change_password",
		localStorage:"local_storage",
		network:"network",
		events:"events",
		eventNotif:"event_notification",
		playback:"playback",
		preview:"preview",
		videoCodec:"video_codec ",
		motor:"motor",
		ptz:"ptz",
		audio:"audio",
		exstreams:"exstreams",
		multicast:"multicast",
		daynightSubdivision:"daynight_subdivision",
		backlightCoexistence:"backlight_coexistence",
		irExposureCtrl:"ir_exposure_control",
		irLedPwmCtrl:"ir_led_pwm_control",
		recordType:"record_type",
		recordMaxSlotCnt:"record_max_slot_cnt",
		captureEnable:"capture_enable",
		msgPush:"msg_push",
		msgAlarm:"msg_alarm",
		timingReboot:"timing_reboot",
		wireleassHotspot:"wireless_hotspot",
		storageApiVer:"storage_api_version",
		streamingSupportVer:"streaming_support_versions",
		streamMaxSessions:"stream_max_sessions",
		relaySupportVer:"relay_support_versions",
		p2pSupportVer:"p2p_support_versions",
		videoShare:"video_share",
		deviceShare:"device_share",
		privacyMaskApiVer:"privacy_mask_api_version",
		mainResolutions:"main_resolutions",
		minorResolutions:"minor_resolutions",
		mainBitrate:"main_bitrate",
		minorBitrate:"minor_bitrate",
		smartIrExposureCtrl:"smart_ir_exposure_control",
		smartCodec:"smart_codec",
		fishEye:"fish_eye",
		customAreaCompensation:"custom_area_compensation",
		customWhiteBalance:"custom_white_balance",
		customAutoModeExposureLevel:"custom_auto_mode_exposure_level",
		aeWeightingTableResolution:"ae_weighting_table_resolution",
		wbWeightingTableResolution:"wb_weighting_table_resolution",
		lensMask:"lens_mask",
		ftpClient:"ftp_client",
		emailClient:"email_client",
		smartDetection:"smart_detection",
		irisFirst:"iris_first",
		videoDetectionDigitalSensitivity:"video_detection_digital_sensitivity",
		wideRangeInfSensitivity:"wide_range_inf_sensitivity",
		wifiCascadeConnection:"wifi_cascade_connection",
		wifiConnectionInfo:"wifi_connection_info",
		configRecovery:"config_recovery",
		networkConnectionType:"network_connection_type",
		playbackScale:"playback_scale",
		imageCapability:"image_capability",
		imageList:"image_list",
		msgAlarmList:"msg_alarm_list",
		msgAlarmSeparateList:"msg_alarm_separate_list",
		smartMsgPushCapability:"smart_msg_push_capability",
		recordAudioSwitch:"record_audio_switch",
		videoMessage:"video_message",
		deviceShareBlacklistSupport:"device_share_blacklist_support",
		forceIframeSupport:"force_iframe_support",
		passengerFlow:"passenger_flow",
		heatmap:"heatmap",
		greeter:"greeter",
		multiUser:"multi_user",
		mediaEncrypt:"media_encrypt",
		authEncrypt:"auth_encrypt",
		httpSystemStateAudioSupport:"http_system_state_audio_support",
		sslCerVersion:"ssl_cer_version",
		personalizedAudioAlarm:"personalized_audio_alarm",
		aiEnhanceCapability:"ai_enhance_capability",
		aiEnhanceRange:"ai_enhance_range",
		linkageCapability:"linkage_capability",
		osdCapability:"osd_capability",
		corridorMode:"corridor_mode",
		licensePlateRecongnition:"license_plate_recognition",
		ledScreenDisplayCapability:"led_screen_display_capability",
		cloudStorage:"cloud_storage_version",
		licensePlateSnapshot:"license_plate_snapshot",
		lte:"lte",
		diagnose:"diagnose",
		new_version_capability_list:"new_version_capability_list",
		diagnoseCapability:"diagnose_capability",
		detectionCapability:"detection_capability",
		picturePlanCapability:"picture_plan_capability",
		systemCapability:"system_capability",
		batteryCapability:"battery_capability",
		lowPowerCapability:"low_power_capability",
		lpmcapability:"lpm_capability",
		alarmIoCapability:"alarm_io_capability",
		aiCapability:"ai_capability",
		wiperCapability: "wiper_capability",
		locationCapability: "location_capability",
		sensorCapability: "sensor_capability"
	},
	optValue:{
		imglist_expose:"expose",
		imglist_clear_licence:"clear_licence",
		imglist_supplement_lamp:"supplement_lamp",
		imglist_smart_white_lamp:"smart_white_lamp",
		imglist_image_scene_mode:"image_scene_mode",
		imglist_overexposure_people_suppression:"overexposure_people_suppression",
		imglist_focus:"focus",
		imglist_high_light_compensation:"high_light_compensation",
		imglist_dehaze:"dehaze",
		imglist_stitch:"stitch",
		traditional_enhance:"traditional_enhance",
		face_enhance:"face_enhance",
		people_gallery:"people_gallery",
		record_timing:"timing",
		record_motion:"motion"
	}
};

var uciDetectionCapability = {
	fileName:"detection_capability",
	secName:{
		capability:"capability",
		detectionMutexCapability:"detection_mutex_capability",
		boxDisplayCapability:"box_display_capability",
		vehicleDetectionCapability:"vehicle_detection_capability",
		motionDetectionCapability:"motion_detection_capability",
		tamperDetectionCapability:"tamper_detection_capability"
	},
	secType:{
		detectionMutexList:"detection_mutex_list"
	},
	optName:{
		detectionMutexCapability:"detection_mutex_capability",
		boxDisplayCapability:"box_display_capability",
		vehicleDetectionCapability:"vehicle_detection_capability",
		constantAlarmCapability:"constant_alarm_capability",
		reboot:"reboot",
		id:"id",
		supportedList:"supported_list",
		unsupportedList:"unsupported_list",
		boxDisplayList:"box_display_list",
		licensePlateWhitelistSupported:"license_plate_whitelist_supported",
		licensePlateWhitelistMaxNum:"license_plate_whitelist_max_num",
		peopleEnhanceBox:"people_enhance_box",
		vehicleEnhanceBox:"vehicle_enhance_box",
		boxColor:"box_color",
		motionDetectionCapability:"motion_detection_capability",
		tamperDetectionCapability:"tamper_detection_capability",
		armingScheduleSupport:"arming_schedule_support"
	}
};

var uciDetection = {
	fileName:"detection",
	secName:{
		detectionMutexConfig:"detection_mutex_config"
	},
	optName:{
		currentMutexMode:"current_mutex_mode"
	}
};

var uciSmartDetection = {
	fileName:"smart_detection",
	secName:{
		capability:"capability"
	},
	capPageOptName:[
		"linecrossing_detection",
		"intrusion_detection",
		"regionentrance_detection",
		"regionexiting_detection",
		"loitering_detection",
		"gathering_detection",
		"fastmoving_detection",
		"parking_detection",
		"parking_occupy",
		"unattendedbaggage_detection",
		"objectremove_detection",
		"abandonandtaken_detection",
		"face_detection",
		"scenechange_detection",
		"defocus_detection",
		"audioexception_detection",
		"overline_detection",
		"vehicle_detection",
		"smart_data",
		"people_detection",
		"peoplevisit_detection",
		"cry_detection",
		"people_detection_capability",
		"pir_detection",
		"linger_detection",
		"face_detection_capability",
		"disassemble_detection",
		"nonvehicle_detection",
		"mask_detection",
		"temperature_measure ",
		"smoking_detection",
		"fire_detection",
		"scenetemp_detection",
		"fallingobject_detection",
		"pet_detection",
		"onguard_detection",
		"ebike_detection",
		"damage_detection"
	],
	capOptName:{
		peopleDetection:"people_detection",
		vehicleDetection:"vehicle_detection"
	}
};

var uciSystemCapability = {
	fileName:"system_capability",
	secName:{
		capability:"capability"
	},
	optName:{
		resetConfigSupport:"reset_config_support",
		activateSupport:"activate_support"
	}
};

var uciImageCapability = {
	fileName:"image_capability",
	secName:{
		expose:"expose",
		supplementLamp:"supplement_lamp",
		smartWhiteLamp:"smart_white_lamp",
		clearLicence:"clear_licence",
		imageSceneMode:"image_scene_mode",
		overexposurePeopleSuppression:"overexposure_people_suppression",
		focus:"focus",
		highLightCompensation:"high_light_compensation",
		dehaze:"dehaze",
		videoFormat:"video_format"
	},
	secType:{
		capability:"capability"
	},
	optName:{
		expTypeManualUnsupported:"exp_type_manual_unsupported",
		lprAeAdjustSupport:"lpr_ae_adjust_support",
		autoExpAntiflickerSupported:"auto_exp_antiflicker_supported",
		autoExpShutterMaxSupported:"auto_exp_shutter_max_supported",
		autoExpGainMaxSupported:"auto_exp_gain_max_supported",
		autoExpLevelSupported:"auto_exp_level_supported",
		autoExpLevelRange:"auto_exp_level_range",
		autoExpShutterMaxRange:"auto_exp_shutter_max_range",
		manualExpSlowShutterSupported:"manual_exp_slow_shutter_supported",
		manualExpSlowShutterRange:"manual_exp_slow_shutter_range",
		supplementLampType:"supplement_lamp_type",
		fullColorPeopleSupport:"full_color_people_support",
		fullColorKeepTimeSupport:"full_color_keep_time_support",
		smartWhiteLampSupported:"smart_white_lamp_supported",
		clearLicenceSupported:"clear_licence_supported",
		imageSceneModeRange:"image_scene_mode_range",
		smartwtlDigitalLevelSupported:"smartwtl_digital_level_supported",
		overexposurePeopleSuppressionSupported:"overexposure_people_suppression_supported",
		focusSupported:"focus_supported",
		focusLimitedRange:"focus_limited_range",
		highLightCompensationSupported:"high_light_compensation_supported",
		dehazeSupported:"dehaze_supported",
		nightVisionRange:"night_vision_mode_range",
		sceneParaIndependent:"scene_para_independent",
		commonSceneModeRange:"common_scene_range",
		sheddaySceneModeRange:"shedday_scene_range",
		shednightSceneModeRange:"shednight_scene_range",
		autodaySceneModeRange:"autoday_scene_range",
		autonightSceneModeRange:"autonight_scene_range",
		stitch:"stitch",
		dual_stitching:"dual_stitching",
		videoFormat:"video_format",
		frequencyModeRange:"frequency_mode_range"
	},
	optValue:{
		infraredLamp:"infrared_lamp",
		whiteLamp:"white_lamp",
		auto:"auto",
		infNightVision:"inf_night_vision",
		wtlNightVision:"wtl_night_vision",
		mdNightVision:"md_night_vision",
		autoNightVision:"auto",
		normal:"normal",
		clearLicence:"clear_licence",
		square:"square"
	}
};

var uciRS485 =
{
	fileName:"rs485",
	secName:{
		rs485Cfg:"config"
	},
	optName:{
		baudRate: "baudrate",
		dataBits: "databits",
		stopBits: "stopbits",
		checkMode: "check_mode",
		flowCtrl: "flow_ctrl",
		protocol:"protocol",
		addr:"addr",
		workMode:"work_mode"
	},
	optValue:{
		none:"none",
		evenCheck:"even",
		oddCheck:"odd",
		hardFlowCtrl:"rts_cts",
		softFlowCtrl:"xon_xoff",
		pelcoD:"pelcod",
		pelcoP:"pelcop",
		ledScreenCtrl:"led_screen_ctrl",
		barrierGateCtrl:"barrier_gate_ctrl"
	}
};

var uciRS485Capability =
{
	fileName:"rs485_capability",
	secName:{
		capability:"capability"
	},
	optName:{
		baudrateRange: "baudrate_range",
		databitsRange: "databits_range",
		stopbitsRange: "stopbits_range",
		checkModeRange: "check_mode_range",
		flowCtrlRange: "flow_ctrl_range",
		protocolRange:"protocol_range",
		addrRange:"addr_range",
		workModeRange:"work_mode_range"
	}
};

var uciTimingReboot =
{
	fileName:		"timing_reboot",
	secType:
	{
		onOff:		"on_off"
	},
	secName:
	{
		reboot:		"reboot"
	},
	optName:
	{
		enabled:"enabled",
		day:"day",
		time:"time"
	},
	optValue:
	{
		enableVal:
		{
			on:"on",
			off:"off"
		},
		day:
		{
			eve:"0",
			mon:"1",
			tue:"2",
			wen:"3",
			thu:"4",
			fri:"5",
			sat:"6",
			sun:"7"
		}
	}
};

var uciOverLineDetection = {
	fileName:"overline_detection",
	secName:{
		det:"detection",
		defenceTime:"arming_schedule",
		region:"region"
	},
	secType:{
		regionInfo:"region_info"
	},
	actionName:{
		addOlRegions:"add_regions",
		cleanOlNum:"overline_num_clean"
	},
	optName:{
		enabled:"enabled",
		osdEnabled:"osd_enabled",
		xCoor:"x_coor",
		yCoor:"y_coor",
		direct:"direction",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday",
		pt1x:"pt1_x",
		pt1y:"pt1_y",
		pt2x:"pt2_x",
		pt2y:"pt2_y"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciAlarmOut = {
	fileName: "alarm_output",
	secName:
	{
		alarmOutDevInfo:"alarm_out_dev_info",
		alarmOutPrefix:"alarm_out_",
		planPrefix:"arming_schedule_",
		manualAlarm:"manual_alarm"
	},
	optName:
	{
		alarmOutDevNum:"alarm_out_dev_num",
		alarmOutDevName:"alarm_out_dev_name",
		alarmType:"alarm_type",
		enabled:"enabled",
		alarmTime:"alarm_duration",
		alias:"alias",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday",
		action:"action",
		deviceNumbers:"device_numbers"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciAlarmIn = {
	fileName: "alarm_input",
	secName:
	{
		alarmInPrefix:"alarm_in_",
		alarmInNotifListPrefix:"notify_list_",
		planPrefix:"arming_schedule_",
		soundAlarmInfo:"sound_alarm_info"
	},
	optName:
	{
		enabled:"enabled",
		alarmType:"alarm_type",
		alias:"alias",
		ftpEnabled:"ftp_enabled",
		emailEnabled:"email_enabled",
		AO1Enabled:"AO1_enabled",
		recordEnabled:"record_enabled",
		captureEnabled:"capture_enabled",
		msgPushEnabled:"msg_push_enabled",
		soundAlarmEnabled:"sound_alarm_enabled",
		lightAlarmEnabled:"light_alarm_enabled",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday",
		soundAlarmType:"sound_alarm_type",
		soundAlarmTimes:"sound_alarm_times"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

/*var uciAlarmIn = {
	fileName: "alarm_input",
	secName:
	{
		alarmIn1:"alarm_in_A1",
		alarmInNotifList1:"notify_list_A1",
		plan1:"arming_schedule_A1"
	},
	optName:
	{
		enabled:"enabled",
		devNum:"dev_num",
		alarmType:"alarm_type",
		alias:"alias",
		ftpEnabled:"ftp_enabled",
		emailEnabled:"email_enabled",
		deviceEnabled:"AO1_enabled",
		recordEnabled:"record_enabled",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};*/

var uciOverLineEntry = {
	fileName: "overline_entry",
	secName: {
		ol:"overline"
	},
	actionName:
	{
		downloadEntry:   "download_entry",
		olEntryClean:     "olentry _clean",
		readEntry:       "read_entry"
	},
	optName: {
		startTime:"start_time",
		olType:"overline_type",
		listType:"list_type",
		Count:"count"
	}
};

/* imageSetting begin */
var uciImage = {
	fileName: "image",
	secName:
	{
		para_switch: "switch",
		common: "common",
		day: "day",
		night: "night",
		shedday:"shedday",
		shednight:"shednight",
		autoday:"autoday",
		autonight:"autonight",
		videoFormat:"video_format"
	},
	secType:{
		regionInfo:"region_info",
		commonAcRgionInfo:"common_area_compensation_region_info",
		commonBackLightAcRgionInfo:"common_bal_area_compensation_region_info",
		sheddayAcRgionInfo:"shedday_area_compensation_region_info",
		sheddayBackLightAcRgionInfo:"shedday_bal_area_compensation_region_info",
		shednightAcRgionInfo:"shednight_area_compensation_region_info",
		shednightBackLightAcRgionInfo:"shednight_bal_area_compensation_region_info",
		shednightPortraitAcRgionInfo:"shednight_por_area_compensation_region_info",
		shednightClearLicenceAcRgionInfo:"shednight_cll_area_compensation_region_info",
		shednightSquareAcRgionInfo:"shednight_squ_area_compensation_region_info",
		autodayAcRgionInfo:"autoday_area_compensation_region_info",
		autodayBackLightAcRgionInfo:"autoday_bal_area_compensation_region_info",
		autonightAcRgionInfo:"autonight_area_compensation_region_info",
		autonightBackLightAcRgionInfo:"autonight_bal_area_compensation_region_info",
		autonightPortraitAcRgionInfo:"autonight_por_area_compensation_region_info",
		autonightClearLicenceAcRgionInfo:"autonight_cll_area_compensation_region_info",
		autonightSquareAcRgionInfo:"autonight_squ_area_compensation_region_info"
	},
	actionName:{
		startFocus: "start_focus",
		stopFocus:"stop_focus",
		startIris:"start_iris",
		stopIris:"stop_iris",
		regionalFocus:"regional_focus",
		addAcRegions:"add_ac_regions",
		addWbRegions:"add_wb_regions"
	},
	optName:
	{
		switch_mode: "switch_mode",
		switchSchedule:"switch_schedule",
		flip_type:"flip_type",
		rotate_type:"rotate_type",
		clear_licence_plate_mode:"clear_licence_plate_mode",
		night_vision_mode:"night_vision_mode",
		full_color_people_enhance:"full_color_people_enhance",
		full_color_min_keep_time:"full_color_min_keep_time",
		overexp_people_suppression:"overexposure_people_suppression",
		wtl_intensity_level:"wtl_intensity_level",
		luma: "luma",
		contrast: "contrast",
		saturation: "saturation",
		chroma:"chroma",
		sharpness:"sharpness",
		shutter:"shutter",
		aperture:"iris_level",
		foc_type:"focus_type",
		leastFocusSpace:"focus_limited",
		exp_gain:"exp_gain",
		exp_type:"exp_type",
		exp_level:"exp_level",
		infType:"inf_type",
		infSche:"inf_schedule",
		infSens:"inf_sensitivity",
		infDelay:"inf_delay",
		wb_type:"wb_type",
		wb_R_gain:"wb_R_gain",
		wb_G_gain:"wb_G_gain",
		wb_B_gain:"wb_B_gain",
		wide_dynamic:"wide_dynamic",
		backlight:"backlight",
		wd_gain:"wd_gain",
		scheStartTime:"schedule_start_time",
		scheEndTime:"schedule_end_time",
		infStartTime:"inf_start_time",
		infEndTime:"inf_end_time",
		wtlType:"wtl_type",
		wtlSens:"wtl_sensitivity",
		wtlDelay:"wtl_delay",
		wtlStartTime:"wtl_start_time",
		wtlEndTime:"wtl_end_time",
		smartwtl:"smartwtl",
		smartwtlLevel:"smartwtl_level",
		smartwtlDigitalLevel:"smartwtl_digital_level",
		lock_source:"lock_source",
		area_com:"area_compensation",
		highLightCtl:"high_light_compensation",
		fogMode:"dehaze",
		antiShakeDSP:"eis",
		smartir:"smartir",
		smartir_level:"smartir_level",
		irSensDayNight:"inf_sensitivity_day2night",
		irSensNightDay:"inf_sensitivity_night2day",
		wtlType:"wtl_type",
		wtlSens:"wtl_sensitivity",
		wtlDelay:"wtl_delay",
		wtlStartTime:"wtl_start_time",
		wtlEndTime:"wtl_end_time",
		wtlSensDayNight:"wtl_sensitivity_day2night",
		wtlSensNightDay:"wtl_sensitivity_night2day",
		smartwtl:"smartwtl",
		smartwtl_level:"smartwtl_level",
		smartwtl_digital_level:"smartwtl_digital_level",
		velocity:"velocity",
		illumin:"illumin",
		xCoor:"x_coor",
		yCoor:"y_coor",
		width:"width",
		height:"height",
		imageSceneModeCommon:"image_scene_mode_common",
		imageSceneModeShedday:"image_scene_mode_shedday",
		imageSceneModeShednight:"image_scene_mode_shednight",
		imageSceneModeAutoday:"image_scene_mode_autoday",
		imageSceneModeAutonight:"image_scene_mode_autonight",
		frequencyMode:"frequency_mode"
	},
	optValue:
	{
		modCom:"common",
		modAuto:"auto_switch",
		modSche:"schedule_switch",
		flipLR:"left_and_right",
		flipUD:"up_and_down",
		flipCen:"center",
		flipOff:"off",
		rotAcw90:"anticlockwise_90",
		rotAcw180:"anticlockwise_180",
		rotAcw270:"clockwise_90",
		rotOff:"off",
		expAuto:"auto",
		expManual:"manual",
		expSmart:"smart",
		expIrisFirst:"iris_first",
		focAuto:"auto",
		focManual:"manual",
		focSemiAuto:"semi_auto",
		infAuto:"auto",
		infSche:"schedule",
		infOn:"on",
		infOff:"off",
		infSenH:"high",
		infSenM:"medium",
		infSenL:"low",
		blOff:"off",
		blReg:"regions",
		blWD:"wide_dynamic",
		wdrOn:"on",
		wdrOff:"off",
		areaComClose:"default",
		areaComTop:"top",
		areaComBottom:"bottom",
		areaComCenter:"middle",
		areaComLeft:"left",
		areaComRight:"right",
		areaComCustom:"custom",
		highLightCtlOpen:"on",
		highLightCtlClose:"off",
		wbAuto:"auto",
		wbLck:"locked",
		wbDayLig:"day_light",
		wbNature:"nature",
		wbInc:"incandescent",
		wbWarm:"warm",
		wbManual:"manual",
		wbCustomize:"custom",
		fogModeOpen:"on",
		fogModeClose:"off",
		antiShakeDSPOpen:"on",
		antiShakeDSPClose:"off",
		smartirAuto:"auto",
		smartirManual:"manual",
		smartirOff:"off",
		smartirAutoIr:"auto_ir",
		smartirAutoIrAe:"auto_ir_ae",
		smartwtlOff:"off",
		smartwtlAuto:"auto",
		smartwtlAutoWtl:"auto_wtl",
		smartwtlAutoWtlAe:"auto_wtl_ae",
		smartwtlManual:"manual",
		sensitivity:
		{
			customized:"-1",
			degree0:"0",
			degree1:"1",
			degree2:"2",
			degree3:"3",
			degree4:"4",
			degree5:"5",
			degree6:"6",
			degree7:"7"
		},
		sceneModeNormal:"normal",
		sceneModeBackLight:"back_light",
		sceneModePortrait:"portrait",
		sceneModeClearLicence:"clear_licence",
		sceneModeSquare:"square",
		pal:"50Hz",
		ntsc:"60Hz"
	},
	dynData:
	{
		DNSwitchIllumin:"dn_switch_illumin"
	}
};

var uciPTZ = {
	fileName:"ptz",
	secName:{
		basicPara:"basic_config",
		scan:"scan_config",
		watch:"park_config",
		limit:"limit_config",
		powerOffSave:"poweroff_save_config",
		manualControl:"manual_control_config",
		capability:"capability"
		//zeroAzimuth:"zero_azimuth",
		//timingTask:"timing_task",
		//clearConf:"clear_conf"
	},
	optName:{
		presetSupported:"preset_supported",			/*是否支持预置点*/
		patternSupported:"pattern_supported",		/*是否支持花样扫描*/
		tourSupported:"tour_supported",				/*是否支持巡航*/
		scanSupported:"scan_supported",				/*是否支持扫描*/
		parkSupported:"park_supported",				/*是否支持守望*/
		planSupported:"plan_supported",				/*是否支持定时任务*/
		limitSupported:"limit_supported",			/* 是否支持限位 */
		tourNumMax:"tour_number_max",				/*巡航条目数上限*/
		presetNumMax:"preset_number_max",			/*预置点条目数上限*/
		patternNumMax:"pattern_number_max",			/*花样扫描条目数上限*/
		tourSpotsNumMax:"tour_spots_number_max",	/*每条巡航支持的巡航点个数上限*/
		tourStayTimeRange:"tour_stay_time_range",	/*巡航staytime取值范围*/
		planTypeList: "plan_support_type_list",		/*定时计划支持类型列表*/
		planResTimeRange:"plan_resume_time_range",	/*定时计划回复时间取值范围*/
		speed_pan_default:"speed_pan_default",
		speed_tilt_default:"speed_tilt_default",
		speed_zoom_default:"speed_zoom_default",
		timeout_default:"timeout_default",
		proportional_pan:"proportional_pan",
		elevation_min:"elevation_min",
		elevation_max:"elevation_max",
		speed_level_max:"speed_level_max",
		speed:"speed",
		enabled:"enabled",
		park_time:"park_time",
		action_mode:"action_mode",
		action_id:"action_id",
		key_position_pan_left:"key_position_pan_left",
		key_position_pan_right:"key_position_pan_right",
		key_position_pan_enabled:"key_position_pan_enabled",
		key_position_tilt_up:"key_position_tilt_up",
		key_position_tilt_down:"key_position_tilt_down",
		key_position_tilt_enabled:"key_position_tilt_enabled",
		key_position_zoom_min:"key_position_zoom_min",
		key_position_zoom_max:"key_position_zoom_max",
		key_position_zoom_enabled:"key_position_zoom_enabled",
		scan_position_pan_left:"scan_position_pan_left",
		scan_position_pan_right:"scan_position_pan_right",
		scan_position_pan_enabled:"scan_position_pan_enabled",
		scan_position_tilt_up:"scan_position_tilt_up",
		scan_position_tilt_down:"scan_position_tilt_down",
		scan_position_tilt_enabled:"scan_position_tilt_enabled",
		scan_position_zoom_min:"scan_position_zoom_min",
		scan_position_zoom_max:"scan_position_zoom_max",
		scan_position_zoom_enabled:"scan_position_zoom_enabled",
		save_time:"save_time",
		speed_mode:"speed_mode",
		speed_level:"speed_level",
		type:"type",
		positionpan:"position_pan",
		positiontilt:"position_tilt",
		positionzoom:"position_zoom",
		speedpan:"speed_pan",
		speedtilt:"speed_tilt",
		speedzoom:"speed_zoom",
		translationpan:"translation_pan",
		translationtilt:"translation_tilt",
		translationzoom:"translation_zoom",
		velocitypan:"velocity_pan",
		velocitytilt:"velocity_tilt",
		velocityzoom:"velocity_zoom",
		positionpanrange:"position_pan_range",
		positiontiltrange:"position_tilt_range",
		positionzoomrange:"position_zoom_range",
		timeout:"timeout",
		pan:"pan",
		tilt:"tilt",
		zoom:"zoom",
		action:"action",
		startpositionpan:"start_position_pan",
		startpositiontilt:"start_position_tilt",
		endpositionpan:"end_position_pan",
		endpositiontilt:"end_position_tilt",
		time:"time",
		status:"status"
		//cameraMul:"camera_mul"
	},
	optValue:{
		on: "1",
		off: "0",
		compatible:"compatible",//兼容
		pedestrian:"pedestrian",//行人
		motorVhicle:"motor_vehicle",//机动车
		nonMotorVehicle:"non_motor_vehicle",//非机动车
		selfAdaptive:"self_adaptive",//自适应
		high:"high",
		normal:"normal",
		low:"low",
		autoScan:"auto_scan",
		frameScan:"frame_scan",
		randomScan:"random_scan",
		tour:"tour",
		preset:"preset",
		pattern:"pattern",
		panoramaScan:"panorama_scan",
		tiltScan:"tilt_scan",
		defaultPos:"default",
		current:"current",
		start:"start",
		stop:"stop",
		Null:"null",
		saveTime:
		{
			para30s:"30",
			para60s:"60",
			para300s:"300",
			para600s:"600"
		}
	},
	actionName:{
		clearLimit:"reset_limit_config",
		clearWatch:"reset_park_config",
		setZeroAzimuth:"set_home_position",
		callZeroAzimuth:"goto_home_position",
		getPTZStatus:"get_ptz_status",
		resetLimit:"reset_limit_config",
		ptzAbsMove:"absolute_move",
		ptzCtnMove:"continuous_move",
		ptzRelateMove:"relative_move",
		ptzStop:"stop",
		ptzGotoHomePos:"goto_home_position",
		ptzScanOperate:"operate_scan",
		quickPark:"quick_park",
		ptz3DPosition:"position3D",
		ptzLock:"lock",
		ptzUnLock:"unlock"
	}
};

var uciPreset = {
	fileName:"preset",
	secName:{
		preset:"preset_config"
	},
	optName:{
		imageFreeze:"image_freeze_enabled",
		speed:"speed",
		id:"id",
        name:"name",
		readonly: "read_only",
		saveptz:"save_ptz",
		speedpan:"speed_pan",
		speedtilt:"speed_tilt",
		speedzoom:"speed_zoom"
	},
	optValue:{
		on: "1",
		off: "0"
	},
	actionName:{
		clearPreset:"clear_preset",
		setPreset:"set_preset",
		removePreset:"remove_preset",
		gotoPreset:"goto_preset"
	}
};

var uciPTZPlan = {
	fileName: "ptz_plan",
	secType:
	{
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday"
	},
	secName:
	{
		planconf: "plan_config"
	},
	optName:
	{
		stime: "start_time",
		etime: "end_time",
		acttype: "action_type",
		actid: "action_id",
		enable: "enabled",
		restime: "resume_time"
	},
	optValue:
	{
		autoscan: "auto_scan",
		framescan: "frame_scan",
		randomscan: "random_scan",
		tour: "tour",
		preset: "preset",
		pattern: "pattern",
		panoramascan: "panorama_scan",
		tiltscan: "tilt_scan",
		reboot: "reboot",
		adjust: "adjust",
		auxoutput: "auxoutput",
		disable: "disable"
	},
	actionName:
	{
		setplanconf: "set_plan_config"
	}
};


var uciEmail = {
	fileName:"email_client",
	secType:{
		receiver_info:"receiver_info"
	},
	secName:{
		sender_info:"sender_info",
		server_info:"server_info"
	},
	optName:{
		sender_address:"sender_address",
		sender_name:"sender_name",
		smtp_server:"smtp_server",
		smtp_port:"smtp_port",
		encrypt_type:"encrypt_type",
		enabled_starttls:"starttls_enabled",
		server_auth:"server_auth",
		account_name:"username",
		account_passwd:"password",
		receiver_address:"receiver_address",
		receiver_name:"receiver_name"
	},
	actionName:{
		email_test:"test_email",
		get_test_status:"get_test_status"
	},
	optValue:{
		on: "on",
		off: "off"
	}
};

var uciPicturePlanCapability = {
	fileName:"picture_plan_capability",
	secName:{
		capability:"capability"
	},
	optName:{
		ftpSwitchForTiming:"ftp_switch_for_timing",
		ftpDependOnCapture:"ftp_depend_on_capture"
	}
};

var uciPicturePlan = {
	fileName:"picture_plan",
	secName:{
		schedule:"schedule",
		timingConfig:"timing_config",
		eventConfig:"event_config",
		emailConfig:"email_config",
		pictureConfig:"picture_config"
	},
	optName:{
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday",
		enabled:"enabled",
		quality:"quality",
		codecType:"codec_type",
		captureInterval:"capture_interval",
		captureNumber:"capture_number",
		width:"width",
		height:"height",
		ftpEnabled:"ftp_enabled"
	},
	optValue:{
		on: "on",
		off: "off"
	}
};

var uciRecordPlan = {
	fileName: "record_plan",
	secType:{
		plan:"plan"
	},
	secName: {
		channel:"channel"
	},
	optName: {
		enabled: "enabled",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday"
	},
	optValue: {
		on: "on",
		off: "off"
	}
};

var uciPlanAdv = {
	fileName:"plan_advance",
	secName:
	{
		planAdv:"plan_advance"
	},
	optName:
	{
		preRecord:"pre_record",
		delayRecord:"delay_record",
		stream_type:"stream_type"
	},
	optValue:
	{
		main:"main",
		minor:"minor",
		third:"third"
	}
};

var uciDiskManage = {
	fileName: "harddisk_manage",
	secName:
	{
		storage: "harddisk",
		video: "video",
		picture: "picture"
	},
	secType:
	{
		disk_info: "hd_info",
		disk: "manage"
	},
	actionName:{
		format_disk: "format_hd",
		get_format_status: "get_format_status",
		test_nas: "test_nas",
		get_test_status: "get_test_status"
	},
	optName:
	{
		loop:"loop",
		ratio:"ratio",
		type:"type",
		addr:"host",
		path:"path",
		property:"property",
		username:"username",
		password:"password",
		disk_id:"disk_name",
		rw_attr:"rw_attr",
		free_space:"free_space",
		total_space:"total_space",
		video_free_space:"video_free_space",
		video_total_space:"video_total_space",
		picture_free_space:"picture_free_space",
		picture_total_space:"picture_total_space",
		status:"status",
		detect_status:"detect_status",
		type:"type",
		result:"result",
		percent:"percent"
	},
	optValue:
	{
		on:"on",
		off:"off",
		r:"r",
		rw:"rw",
		normal:"normal",
		abnormal:"abnormal",
		unformatted:"unformatted",
		dilatant_suspect:"dilatant_suspect",
		dilatant:"dilatant",
		cid_illegal:"cid_illegal",
		low_speed:"low_speed",
		none:"none",
		insufficient:"insufficient",
		formatting:"formatting",
		offline:"offline",
		abnormal:"abnormal",
		full:"full",
		local:"local",
		remote:"remote",
		waiting:"waiting",
		success:"success",
		failed:"failed",
		nfs:"nfs",
		cifs:"cifs"
	}
};

var uciVideoCapability = {
	fileName: "video_capability",
	secName:
	{
		capability:"capability",
		main: "main",
		minor: "minor",
		third: "third"
	},
	optName:
	{
		encode_types:"encode_types",
		resolutions:"resolutions",
		bitrate_type:"bitrate_type",
		bitrates:"bitrates",
		frame_rates:"frame_rates",
		third_stream:"third_stream",
		smart_codec_capability:"smart_codec_capability",
		digital_quality_supported:"digital_quality_supported",
		single_stream_support:"single_stream_support",
		real_time_preview_unsupported:"real_time_preview_unsupported",
		digital_quality_range:"digital_quality_range"
	}
};

var uciVideo = {
	fileName: "video",
	secName:
	{
		main: "main",
		minor: "minor",
		third: "third"
	},
	secType:
	{
		main: "main_res",
		minor: "minor_res",
		third: "third_res",
		stream: "stream",
		mainRes: "main_res",
		minorRes: "minor_res",
		thirdRes: "third_res"
	},
	optName:
	{
		stream_type:"stream_type",
		encode_type:"encode_type",
		resolution:"resolution",
		bitrate_type:"bitrate_type",
		frame_rate:"frame_rate",
		quality:"quality",
		bitrate:"bitrate",
		frLlimit:"fr_llimit",
		frUlimit:"fr_ulimit",
		quaLlimit:"quality_llimit",
		quaULimit:"quality_ulimit",
		brLlimit:"bitrate_llimit",
		brUlimit:"bitrate_ulimit",
		digitalQuality:"digital_quality"
	},
	optValue:
	{
		stGener:"general",
		stMotDet:"motion_detection",
		h264:"H264",
		h265:"H265",
		cbr:"cbr",
		vbr:"vbr",
		quaH:"5",
		quaM:"3",
		quaL:"1",
		reso320_240:"320*240",
		reso352_288:"352*288",
		reso640_480:"640*480",
		reso704_576:"704*576",
		reso1280_720:"1280*720",
		reso1280_960:"1280*960",
		reso1920_1080:"1920*1080",
		reso2048_1536:"2048*1536",
		reso2560_1440:"2560*1440",
		reso2592_1520:"2592*1520",
		reso2592_1944:"2592*1944",
		fr1:"0x00010001",
		fr10:"0x0001000a",
		fr15:"0x0001000f",
		fr20:"0x00010014",
		fr25:"0x00010019",
		minBT:"64",
		maxBT:"8192"
	}
};

var uciAudioCapability = {
	fileName: "audio_capability",
	secName:
	{
		devSpeaker: "device_speaker",
		devMicrophone: "device_microphone",
		network_speaker: "network_speaker"
	},
	secType:
	{
		capability: "capability"
	},
	optName:
	{
		samplingRate:"sampling_rate",
		channels:"channels",
		decodeType:"decode_type",
		encodeType:"encode_type",
		volume:"volume",
		mute:"mute",
		inputDeviceType:"input_device_type",
		noiseEliminate:"noise_cancelling",
		bitrate:"bitrate",
		echoCancelling:"echo_cancelling",
		outputDeviceType:"output_device_type",
		inputDeviceSupportAuto:"input_device_support_auto",
		outputDeviceList:"output_device_list",
		audio_list:"audio_list"
	}
};

var uciAudio = {
	fileName: "audio_config",
	secName:
	{
		speaker: "speaker",
		microphone: "microphone"
	},
	secType:
	{
		speakerInfo: "speaker_info",
		microphoneInfo: "microphone_info"
	},
	optName:
	{
		samplingRate:"sampling_rate",
		channels:"channels",
		encodeType:"encode_type",
		volume:"volume",
		mute:"mute",
		inputDeviceType:"input_device_type",
		noiseEliminate:"noise_cancelling",
		bitrate:"bitrate",
		echoCancelling:"echo_cancelling",
		outputDeviceType:"output_device_type"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciProto =
{
	fileName:		"protocol",
	secType:
	{
		iface:		"interface",
		proto:		"proto"
	},
	secName:
	{
		wan:		"wan",
		dhcp:		"dhcp",
		sta:		"static",
		pppoe:		"pppoe"
	},
	optName:
	{
		type:		"wan_type",
		rate:		"wan_rate",
		proto:		"proto",
		ip:		"ipaddr",
		pppoeUsr:	"username",
		pppoePwd:	"password",
		netmask:	"netmask",
		gateway:	"gateway",
		dnsMode:	"dns_mode",
		priDns:		"pri_dns",
		sndDns:		"snd_dns",
		mtu:		"mtu",
		speed:		"wan_rate",
		dialMode:	"dial_mode",
		connMode:	"conn_mode",
		demand:		"demand_idle",
		manual:		"manual_idle",
		ipMode:		"ip_mode",
		ISPIp:		"specific_ip",
		connect:	"connect",
		hostName:	"hostname",
		acName:		"access",
		broadcast:	"broadcast",
		broadcast_en:	"enable_broadcast",
		svcName:	"server",
		facMac:		"fac_macaddr",
		macaddr:	"macaddr",
		facIp:		"fac_ipaddr",
		linkStatus:"link_status",
		phyStatus:"phy_status",
		autoIp:"auto_ip",
		operatorInfo:"operator_info"
	},
	optValue:
	{
		proto:
		{
			none:"none",
			dynIp:"dhcp",
			staticIp:"static",
			pppoe:"pppoe"
		},
		wanSpeed:["auto", "10F", "10H", "100F", "100H", "1000F"],
		dnsMode:
		{
			dynamic:	"dynamic",
			manual:		"manual"
		},
		connMode:
		{
			auto:		"auto",
			demand:		"demand",
			manual:		"manually"
		},
		ispMode:
		{
			dhcp:		"dynamic",
			sta:		"static"
		},
		diagMode:
		{
			auto:		"auto",
			normal:		"normal",
			special1:	"special1",
			special2:	"special2",
			special3:	"special3",
			special4:	"special4",
			special5:	"special5",
			special6:	"special6",
			special7:	"special7"
		}
	}
};

var uciCover = {
	fileName: "cover",
	secName:
	{
		cover: "cover"
	},
	secType:{
		coverInfo:"cover_info",
		regionInfo:"region_info"
	},
	optName:
	{
		enabled:"enabled",
		xCoor:"x_coor",
		yCoor:"y_coor",
		width:"width",
		height:"height"
	},
	optValue:
	{
		enableVal:{
			on:"on",
			off:"off"
		}
	},
	actionName:{
		addCoverReg:"add_cover_regions"
	}
};

var uciPrivacyMask = {
	fileName: "privacy_mask",
	secName:
	{
		privacyMask: "privacy_mask"
	},
	secType:{
		info:"info",
		regionInfo:"region_info"
	},
	optName:
	{
		enabled:"enabled",
		numberMax:"number_max",
		name:"name",
		masktype:"mask_type",
		zdlimit:"zoom_door_limit",
		pospan:"position_pan",
		postilt:"position_tilt",
		poszoom:"position_zoom",
		id:"id",
		ptx:"pt_x",
		pty:"pt_y"
	},
	optValue:
	{
		enableVal:{
			on:"on",
			off:"off"
		},
		red:"red",
		gray:"gray",
		yellow:"yellow",
		blue:"blue",
		orange:"orange",
		green:"green"
	},
	actionName:{
		addPricacyMaskReg:"add_privacy_mask_regions"
	}
};

var uciRoi = {
	fileName:"ROI",
	secType:
	{
		onOff:"on_off",
		mainRoi:"main_roi",
		minorRoi:"minor_roi",
		thirdRoi:"third_roi"
	},
	secName:
	{
		roi_enable:"roi_enable",
		main_r1:"main_roi_1",
		minor_r1:"minor_roi_1",
		third_r1:"third_roi_1"
	},
	optName:
	{
		main_enabled:"main_enabled",
		minor_enabled:"minor_enabled",
		third_enabled:"third_enabled",
		level:"level",
		rect_info:"rect_info",
		xCoor:"x_coor",
		yCoor:"y_coor",
		width:"width",
		height:"height"
	},
	optValue:
	{
		roiOn:"on",
		roiOff:"off",
		lev1:1,
		lev2:2,
		lev3:3,
		lev4:4,
		lev5:5,
		lev6:6
	},
	actionName:
	{
		addRoi:"add_ROI_regions"
	}
};

var uciSystem = {
	fileName:"system",
	secName:{
		basic:"basic",
		clockStatus:"clock_status",
		ntp:"ntp",
		sys:"sys"
	},
	secType:{
		syslog:"syslog"
	},
	optName:{
		timingMode:"timing_mode",
		seconds:"seconds_from_1970",
		server:"server",
		ntpPort:"ntp_port",
		setDate:"set_date",
		configName:"config_name",
		startTime:"start_time",
		endTime:"end_time",
		pageNum:"page_num",
		logsPerPage:"logs_per_page",
		type:"type",
		url:"url",
		total:"total",
		pluginUrl:"plugin_url",
		pluginVersion:"plugin_version",
		browserType:"browser_type",
		browserVersion:"browser_version",
		browserBits:"browser_bits",
		browserOS:"browser_os",
		osVersion:"os_version",
		exist:"exist",
		page:"page",
		userId:"user_id",
		devAlias:"dev_alias",
		name:"name",
		size:"size",
		dir:"dir",
		checkNum:"check_code",
		fileUrl:"file_url"
	},
	optValue:{
		timeMode:{
			ntp:"ntp",
			manual:"manual"
		},
		types:{
			all:"all",
			alarm:"alarm",
			abnormal:"abnormal",
			op:"op",
			info:"info",
			audit:"audit"
		}
	},
	actionName:
	{
		downloadConf:	"download_conf",
		uploadConf:		"upload_conf",
		firmUpgrade:	"firmware_upgrade",
		downloadLogs:	"download_logs",
		syslogClean:	"syslog_clean",
		getDomainArray:	"get_domain_array",
		configReset: 	"config_recovery",
		getPluginUrl:	"get_plugin_url",
		bootSetDate:	"boot_set_date",
		readLogs:		"read_logs",
		getUserId:		"get_user_id",
		plugUpgrade:    "plugin_upgrade",
		fileUpload:		"file_upload"
	}
};
var uciCloudConfig =
{
	fileName:		"cloud_config",

	secType:
	{
		cloudReply : "cloud_reply"
	},
	secName:
	{
		bind : "bind",
		info : "info",
		register : "register",
		newFirmware : "new_firmware",
		deviceStatus : "device_status",
		upgradeInfo : "upgrade_info",
		resetPassword : "reset_password",
		modifyAccountPwd : "modify_account_pwd",
		cloudAccountStat: "cloudAccountStat",
		downloadFw: "download_fw",
		bindTip: "bind_tip",
		deviceLegality: "device_legality"
	},
	optName:
	{
		type 			: "type",
		accountType		: "account_type",
		username 		: "username",
		password 		: "password",
		newPassword 	: "new_pwd",
		oldPassword 	: "old_pwd",
		bindStatus 		: "bind_status",
		loginStatus 	: "login_status",
		accountStatus 	: "account_status",
		releaseDate 	: "release_date",
		downloadUrl 	: "download_url",
		location 		: "location",
		releaseLogUrl 	: "release_log_url",
		verifyCode      : "verify_code",
		cloudAccountStat: "cloudAccountStat",
		fwNewNotify		: "fw_new_notify",
		fwUpdateType	: "fw_update_type",
		version			: "version",
		releaseLog		: "release_log",
		reconnectTime	: "reconnect_time",
		noShow			: "not_show",
		illegal			: "illegal",
		vmsConnectStatus: "status",
		pluginIdList    : "plugin_id_list"
	},
	optValue:
	{
		cloudOutline: 0,
		cloudDownloading:1,
		cloudComplete: 2,
		cloudIdle: "3",
		fwNewTrue: 1,
		fwNewFalse: 0,
		fwUpdateTypeNormal: "1",
		unRegestStatus:0,
		regestStatus:1,
		bindStatusBind:1,
		bindStatusUnbind:0,
		accountTypeEmail:0,
		accountTypePhoneNum:1,
		reconnectVal:1,
		noShow:
		{
			yes:"1",
			no:"0"
		},
		illegal:
		{
			yes:"1",
			no:"0"
		}
	},
	actionName:
	{
		bind : "bind",
		login : "login",
		unbind : "unbind",
		reconnect:"reconnect",
		register : "register",
		downloadFw: "fw_download",
		updatePlugins: "update_plugins",
		checkFwVer: "check_fw_version",
		fwDownload : "fw_download",
		getAccountStat : "get_account_stat",
		resetPassword : "reset_password",
		resendRegisterEmail : "resend_register_email",
		checkFwVersion : "check_fw_version",
		checkPluginVer: "check_plugins_ver",
		cancelReg : "cancel_reg",
		getRegVerifyCode : "get_reg_verify_code",
		checkRegVerifyCode : "check_reg_verify_code",
		getResetPwdVerifyCode : "get_reset_pwd_verify_code",
		checkResetPwdVerifyCode : "check_reset_pwd_verify_code",
		modifyAccountPwd : "modify_account_pwd",
		getVmsStatus: "get_vms_status"
	}
};

var uciTumsConfig =
{
	fileName: "tums_config",

	secName:
	{
		tumsInfo: "tums_info"
	},
	optName:
	{
		enable: "enable",
		server: "server",
		port: "port",
		mfrsId: "mfrs_id",
		comment: "comment"
	},
	optValue:
	{
		onOff:
		{
			on: "on",
			off: "off"
		}
	}
};

var cloudClientStatus =
{
	fileName:		"cloud_status",

	secName:
	{
		bind : "bind",
		unbind : "unbind",
		login : "login",
		register : "register",
		checkFwVer : "check_fw_ver",
		checkPluginVer: "check_plugins_ver",
		downloadFw : "download_fw",
		downloadPlugin: "update_plugins",
		clientInfo : "client_info",
		pluginDownloadInfo: "plugin_download_info",
		resendEmail : "resend_email",
		getAccountStat : "get_account_stat",
		resetPassword : "reset_account_pwd",
		fwDownloadProg : "fw_download_prog",
		getRegVerifyCode : "get_reg_verify_code",
		checkRegVerifyCode : "check_reg_verify_code",
		getResetPwdVerifyCode : "get_reset_pwd_verify_code",
		checkResetPwdVerifyCode : "check_reset_pwd_verify_code",
		modifyAccountPwd : "modify_account_pwd",
		getCanUpdateApps : "get_can_update_plugins",
		getNotInstalledApps: "get_not_installed_plugins",
		regVeriCodeTimer:"reg_veri_code_timer",
		resetVeriCodeTimer:"reset_veri_code_timer"
	},
	optName:
	{
		owner: "owner",
		errCode: "err_code",
		actionStatus: "action_status",
		connectStatus: "connect_status",
		dlProgress : "fw_download_progress",
		fwDownloadStatus: "fw_download_status",
		fwDownloadProgress: "fw_download_progress",
		pluginDownloadStatus: "plugin_download_status",
		pluginDownloadProgress: "plugin_download_progress",
		regVeriCodeTimer:"reg_veri_code_timer",
		resetVeriCodeTimer:"reset_veri_code_timer"
	},
	optValue:
	{
		connectStatus:{
			connected:1,
			disconnected:0
		},
		queryStatus:{
			failed:0,
			idle:1,
			prepare:2,
			trying:3,
			success:4,
			timeout:5,
			max:6
		}
	}
};

var uciAbnormalEvents = {
	fileName:"abnormal_events",
	secName:{
		loginErr:"login_err",
		loginErrNotifyList:"login_err_notif_list"
	},
	optName:{
		loginErrEnabled:"enabled",
		maxNumErr:"max_num_err",
		sndToApp:"app_enabled",
		sndToPc:"client_enabled",
		msgPushEnabled:"msg_push_enabled"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};
var uciMsgAlarm = {
	fileName:"msg_alarm",
	secName:{
		chn1MsgAlarmInfo:"chn1_msg_alarm_info"
	},
	secType:{
		type:"info"
	},
	optName:{
		enabled:"enabled",
		alarmType:"alarm_type",
        alarmMode:"alarm_mode",
        lightType:"light_type",
		soundEnabled:"sound_alarm_enabled",
		lightEnabled:"light_alarm_enabled"
	},
	optValue:{
		sound:"sound",
		light:"light",
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciUsrDefAlarm = {
	fileName:"usr_def_audio_alarm",
	secName:{
		usrDefAudio:"usr_def_audio",
		testAudio:"test_audio",
		deleteAudio:"delete_audio",
		modifyAudio:"modify_audio"
	},
	optName:{
		id:"id",
		name:"name",
		force:"force"
	}
};

var uciAudioLib = {
	fileName:"audio_lib",
	secName:{
		testAudio:"test_audio",
		textToSpeech:"text_to_speech",
		getStatus:"get_status",
		cloudAudioList:"cloud_audio_list",
		requestAudioList:"request_audio_list",
		saveLocalAudio:"save_local_audio",
		modifyCloudAudio:"modify_cloud_audio",
		deleteCloudAudio:"delete_cloud_audio"
	},
	optName:{
		audioID:"id",
		audioType:"type",
		force:"force",
		volume:"vol",
		text:"text",
		voiceType:"voice_type",
		tone:"tone",
		speechRate:"speech_rate",
		ttsId:"tts_id",
		fileId:"file_id",
		comment:"comment",
		idList:"id_list",
		state:"state"
	}
};

var uciGb28181Capability = {
	fileName:"gb28181_capability",
	secName:{
		capability:"capability"
	},
	optName:{
		videoTransTypeSupport:"video_trans_type_support",
		channelSeparateSupport:"channel_separate_support"
	}
};

var uciGb28181Cfg = {
	fileName:"gb28181",
	secName:{
		gb28181Cfg:"device_info"
	},
	optName:{
		enable:"enabled",
		clientSipPort:"sip_local_port",
		sipServerId:"sip_server_id",
		sipServerDomain:"sip_server_domain",
		sipServerAddr:"sip_server_ip",
		sipServerPort:"sip_server_port",
		sipUsername:"gb28181_dev_id",
		sipUserAuthId:"gb28181_auth_id",
		password:"sip_auth_password",
		expires:"sip_expire_time",
		regStatus:"register_status",
		heartbeatPeriod:"sip_keep_alive_cycle",
		codeStreamIndex:"gb28181_stream_type",
		maxHeartBeat:"sip_max_keep_alive_failure",
		alarmInputId1:"alarm_input_id_1",
		alarmInputId2:"alarm_input_id_2",
		alarmInputId3:"alarm_input_id_3",
		alarmInputId4:"alarm_input_id_4",
		broadcastTypeIndex:"gb28181_broadcast_trans_type",
		videoTransTypeIndex:"gb28181_video_trans_type"
	},
	optValue:{
		on: "on",
		off: "off"
	}
};

var uciDiagnostic = {
	fileName:"diagnose",
	actionName:{
		start:"start",
		stop:"stop",
		get:"get",
		diagnoseStop:"stop_oneclick_diagnose",
		diagnoseStart:"start_oneclick_diagnose",
		diagnoseResult:"diagnose_result"
	},
	optName:{
		pingMode:"ping",
		tracertMode:"tracert",
		type:"diag_type",
		addr:"addr",
		num:"num",
		size:"size",
		timeOut:"timeout",
		hops:"hops",
		index:"index",
		instanceId:"instance_id",
		paraType:"type",
		diagnoseID:"diagnose_id"
	},
	optValue:{
		manualDiag:"manualDiagnostic",
		fastDiag:"fastDiagnostic"
	}
};

var uciDiagnoseCapability =
{
	fileName:"diagnose_capability",
	secName:
	{
		capability:"capability"
	},
	optName:
	{
		version:"version",
		support_oneclick_diagnosis:"support_oneclick_diagnosis",
		support_multi_clients:"support_multi_clients"
	}
};

var uciAlarmIoCapability =
{
	fileName:"alarm_io_capability",
	secName:
	{
		capability:"capability"
	},
	optName:
	{
		manual_alarm_output:"manual_alarm_output",
		alarm_output_type:"alarm_output_type"
	}
};

var uciGAT1400Cfg = {
	fileName:"gat1400",
	secName:{
		GAT1400Cfg:"gat1400_info",
		GAT1400StatusCfg:"gat1400_status"
	},
	optName:{
		isEnable:"is_enabled",
		isOnline:"is_online",
		serverIP:"server_ip",
		deviceId:"device_id",
		userId:"user_id",
		password:"password",
		accessId:"access_id",
		gatobjects:"objects",
		serverPort:"server_port",
		keepalivePeriod:"keepalive_period",
		maxKeepaliveFT:"max_keepalive_failure_times",
		registerInterval:"register_interval",
		channel:"channel",
		channelId:"channel_id"
	},
	optValue:{
		on: "on",
		off: "off"
	}
};

var uciMsgAlarmPlan = {
	fileName:"msg_alarm_plan",
	secName:{
		chn1MsgAlarmPlan:"chn1_msg_alarm_plan",
		ArmingScheduleAudio:"arming_schedule_sound",
		ArmingScheduleLight:"arming_schedule_light"
	},
	optName:{
		enabled:"enabled",
		alarmPlan1:"alarm_plan_1",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciUnusualDetection = {
	fileName:"unusual_detection",
	secName:{
		loginErr:"login_error",
		hdLack:"hd_lack",
		hdError:"hd_error",
		ipConflict:"ip_conflict",
		networkBroken:"network_broken"
	},
	secType:{
		type:"on_off"
	},
	optName:{
		enabled:"enabled",
		maxNumErr:"max_num_err",
		emailEnabled:"email_enabled",
		AO1Enabled:"AO1_enabled",
		msgPushEnabled:"msg_push_enabled"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciTargetTrackCapability = {
	fileName:"target_track_capability",
	secName:{
		capability:"capability"
	},
	optName:{
		back_time_range:"back_time_range",
		track_time_range:"track_time_range"
	}
};

var uciTargetTrack = {
	fileName:"target_track",
	secName:{
		target_track_info:"target_track_info"
	},
	optName:{
		enabled:"enabled",
		peopleEnabled:"people_enabled",
		vehicleEnabled:"vehicle_enabled",
		soundEnabled:"sound_enabled",
		back_time:"back_time",
		track_time:"track_time"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciLinkageCapability = {
	fileName:"linkage_capability",
	secName:{
		capability:"capability"
	},
	optName:{
		light_alarm_capability:"light_alarm_capability",
		sound_alarm_capability:"sound_alarm_capability",
		msg_push_capability:"msg_push_capability",
		alarm_out_capability:"alarm_out_capability",
		record_capability:"record_capability",
		sd_card_pic_capability:"sd_card_pic_capability",
		capture_capability:"capture_capability",
		ftp_capability:"ftp_capability",
		email_capability:"email_capability",
		target_track_capability:"target_track_capability"
	},
	pos:{
		motionDetection:1,
		tamperDetection:2,
		linecrossingDetection:3,
		intrusionDetection:4,
		regionEntranceDetection:5,
		regionExitingDetection:6,
		parkingDetection:10,
		abandonandtakenDetection:13,
		alarmIn:25,
		faceSnapshot:34,
		fallingobjectDetection:38
	}
};

var uciMotionDetection = {
	fileName:"motion_detection",
	secName:{
		motionDet:"motion_det",
		motionNotifList:"motion_notif_list",
		region:"region",
		soundAlarmInfo:"sound_alarm_info",
		armingSchedule:"arming_schedule"
	},
	secType:{
		regionInfo:"region_info"
	},
	actionName:{
		addMdRegions:"add_md_regions"
	},
	optName:{
		enabled:"enabled",
		peopleEnabled:"people_enabled",
		vehicleEnabled:"vehicle_enabled",
		nonVehicleEnabled:"non_vehicle_enabled",
		faceEnabled:"face_enabled",
		sensitivity:"sensitivity",
		digital_sensitivity:"digital_sensitivity",
		emailEnabled:"email_enabled",
		AO1Enabled:"AO1_enabled",
		recordEnabled:"record_enabled",
		ftpEnabled:"ftp_enabled",
		captureEnabled:"capture_enabled",
		msgPushEnabled:"msg_push_enabled",
		light_alarm_enabled:"light_alarm_enabled",
		sound_alarm_enabled:"sound_alarm_enabled",
		rectArray:"rect_array",
		xCoor:"x_coor",
		yCoor:"y_coor",
		width:"width",
		height:"height",
		soundAlarmType:"sound_alarm_type",
		soundAlarmTimes:"sound_alarm_times",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciTamperDetection = {
	fileName:"tamper_detection",
	secName:{
		tamperDet:"tamper_det",
		tamperNotifList:"tamper_notif_list",
		soundAlarmInfo:"sound_alarm_info",
		armingSchedule:"arming_schedule"
	},
	secType:{
		regionInfo:"region_info"
	},
	optName:{
		enabled:"enabled",
		sensitivity:"sensitivity",
		digital_sensitivity:"digital_sensitivity",
		emailEnabled:"email_enabled",
		AO1Enabled:"AO1_enabled",
		msgPushEnabled:"msg_push_enabled",
		light_alarm_enabled:"light_alarm_enabled",
		sound_alarm_enabled:"sound_alarm_enabled",
		recordEnabled:"record_enabled",
		ftpEnabled:"ftp_enabled",
		captureEnabled:"capture_enabled",
		rectInfo:"rect_info",
		soundAlarmType:"sound_alarm_type",
		soundAlarmTimes:"sound_alarm_times",
		constantAlarmEnabled:"constant_alarm_enabled",
		captureEnabled:"capture_enabled",
		ftpEnabled:"ftp_enabled",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciLineCrossingDetection = {
	fileName:"linecrossing_detection",
	secName:{
		detection:"detection",
		notifyList:"notify_list",
		armingSchedule:"arming_schedule",
		soundAlarmInfo:"sound_alarm_info"
	},
	secType:{
		regionInfo:"region_info"
	},
	actionName:{
		addRegions:"add_regions"
	},
	optName:{
		enabled:"enabled",
		peopleEnabled:"people_enabled",
		vehicleEnabled:"vehicle_enabled",
		nonVehicleEnabled:"non_vehicle_enabled",
		faceEnabled:"face_enabled",
		sensitivity:"sensitivity",
		emailEnabled:"email_enabled",
		alarmEnabled:"AO1_enabled",
		recordEnabled:"record_enabled",
		msgPushEnabled:"msg_push_enabled",
		lightAlarmEnabled:"light_alarm_enabled",
		soundAlarmEnabled:"sound_alarm_enabled",
		target_track_enabled:"target_track_enabled",
		ftpEnabled:"ftp_enabled",
		captureEnabled:"capture_enabled",
		direction:"direction",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday",
		pt1x:"pt1_x",
		pt1y:"pt1_y",
		pt2x:"pt2_x",
		pt2y:"pt2_y",
		id:"id",
		soundAlarmType:"sound_alarm_type",
		soundAlarmTimes:"sound_alarm_times"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};
var uciFallingobjectDetection = {
	fileName:"fallingobject_detection",
	secName:{
		detection:"fod_det",
		notifyList:"notify_list",
		armingSchedule:"arming_schedule",
		soundAlarmInfo:"sound_alarm_info",
		fodBoxDisplay:"fod_box_display"
	},
	secType:{
		regionInfo:"region_info",
		lineInfo:"line_info"
	},
	actionName:{
		addRegions:"add_regions",
		addLines:"add_lines"
	},
	optName:{
		enabled:"enabled",
		sensitivity:"sensitivity",
		emailEnabled:"email_enabled",
		alarmEnabled:"AO1_enabled",
		recordEnabled:"record_enabled",
		msgPushEnabled:"msg_push_enabled",
		lightAlarmEnabled:"light_alarm_enabled",
		soundAlarmEnabled:"sound_alarm_enabled",
		ftpEnabled:"ftp_enabled",
		direction:"direction",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday",
		RegionPt1x:"pt1_x",
		RegionPt1y:"pt1_y",
		RegionPt2x:"pt2_x",
		RegionPt2y:"pt2_y",
		RegionPt3x:"pt3_x",
		RegionPt3y:"pt3_y",
		RegionPt4x:"pt4_x",
		RegionPt4y:"pt4_y",
		LinePt1x:"pt1_x",
		LinePt1y:"pt1_y",
		LinePt2x:"pt2_x",
		LinePt2y:"pt2_y",
		region_id:"id",
		line_id:"id",
		soundAlarmType:"sound_alarm_type",
		soundAlarmTimes:"sound_alarm_times"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		},
		drawline:"drawline",
		drawregion:"drawregion"
	}
};

var uciIntrusionDetection = {
	fileName:"intrusion_detection",
	secName:{
		detection:"detection",
		notifyList:"notify_list",
		armingSchedule:"arming_schedule",
		soundAlarmInfo:"sound_alarm_info",
		ebikeInfo:"ebike_info"
	},
	secType:{
		regionInfo:"region_info"
	},
	actionName:{
		addRegions:"add_regions"
	},
	optName:{
		enabled:"enabled",
		peopleEnabled:"people_enabled",
		vehicleEnabled:"vehicle_enabled",
		ebikeEnabled:"ebike_enabled",
		nonVehicleEnabled:"non_vehicle_enabled",
		constantAlarmEnabled:"constant_alarm_enabled",
		faceEnabled:"face_enabled",
		sensitivity:"sensitivity",
		emailEnabled:"email_enabled",
		alarmEnabled:"AO1_enabled",
		recordEnabled:"record_enabled",
		msgPushEnabled:"msg_push_enabled",
		lightAlarmEnabled:"light_alarm_enabled",
		soundAlarmEnabled:"sound_alarm_enabled",
		target_track_enabled:"target_track_enabled",
		captureEnabled:"capture_enabled",
		ftpEnabled:"ftp_enabled",
		threshold:"threshold",
		percentage:"percentage",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday",
		pt1x:"pt1_x",
		pt1y:"pt1_y",
		pt2x:"pt2_x",
		pt2y:"pt2_y",
		pt3x:"pt3_x",
		pt3y:"pt3_y",
		pt4x:"pt4_x",
		pt4y:"pt4_y",
		id:"id",
		soundAlarmType:"sound_alarm_type",
		soundAlarmTimes:"sound_alarm_times",
		confidence:"confidence",
		filterLevel:"filter_level",
		bikeEnabled:"bike_enabled",
		endDelay:"end_delay"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciEbikeDetection = {
	fileName:"ebike_detection",
	secName:{
		detection:"detection",
		notifyList:"notify_list",
		armingSchedule:"arming_schedule",
		soundAlarmInfo:"sound_alarm_info"
	},
	secType:{
		regionInfo:"region_info"
	},
	actionName:{
		addRegions:"add_regions"
	},
	optName:{
		enabled:"enabled",
		constantAlarmEnabled:"constant_alarm_enabled",
		emailEnabled:"email_enabled",
		alarmEnabled:"AO1_enabled",
		recordEnabled:"record_enabled",
		msgPushEnabled:"msg_push_enabled",
		lightAlarmEnabled:"light_alarm_enabled",
		soundAlarmEnabled:"sound_alarm_enabled",
		target_track_enabled:"target_track_enabled",
		captureEnabled:"capture_enabled",
		ftpEnabled:"ftp_enabled",
		threshold:"threshold",
		percentage:"percentage",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday",
		pt1x:"pt1_x",
		pt1y:"pt1_y",
		pt2x:"pt2_x",
		pt2y:"pt2_y",
		pt3x:"pt3_x",
		pt3y:"pt3_y",
		pt4x:"pt4_x",
		pt4y:"pt4_y",
		id:"id",
		soundAlarmType:"sound_alarm_type",
		soundAlarmTimes:"sound_alarm_times",
		confidence:"confidence",
		filterLevel:"filter_level",
		bikeEnabled:"bike_enabled",
		endDelay:"end_delay"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciRegionEntranceDetection = {
	fileName:"regionentrance_detection",
	secName:{
		detection:"detection",
		notifyList:"notify_list",
		armingSchedule:"arming_schedule",
		soundAlarmInfo:"sound_alarm_info"
	},
	secType:{
		regionInfo:"region_info"
	},
	actionName:{
		addRegions:"add_regions"
	},
	optName:{
		enabled:"enabled",
		peopleEnabled:"people_enabled",
		vehicleEnabled:"vehicle_enabled",
		nonVehicleEnabled:"non_vehicle_enabled",
		faceEnabled:"face_enabled",
		sensitivity:"sensitivity",
		emailEnabled:"email_enabled",
		alarmEnabled:"AO1_enabled",
		recordEnabled:"record_enabled",
		ftpEnabled:"ftp_enabled",
		msgPushEnabled:"msg_push_enabled",
		lightAlarmEnabled:"light_alarm_enabled",
		soundAlarmEnabled:"sound_alarm_enabled",
		captureEnabled:"capture_enabled",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday",
		pt1x:"pt1_x",
		pt1y:"pt1_y",
		pt2x:"pt2_x",
		pt2y:"pt2_y",
		pt3x:"pt3_x",
		pt3y:"pt3_y",
		pt4x:"pt4_x",
		pt4y:"pt4_y",
		id:"id",
		soundAlarmType:"sound_alarm_type",
		soundAlarmTimes:"sound_alarm_times"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciRegionExitingDetection = {
	fileName:"regionexiting_detection",
	secName:{
		detection:"detection",
		notifyList:"notify_list",
		armingSchedule:"arming_schedule",
		soundAlarmInfo:"sound_alarm_info"
	},
	secType:{
		regionInfo:"region_info"
	},
	actionName:{
		addRegions:"add_regions"
	},
	optName:{
		enabled:"enabled",
		peopleEnabled:"people_enabled",
		vehicleEnabled:"vehicle_enabled",
		nonVehicleEnabled:"non_vehicle_enabled",
		faceEnabled:"face_enabled",
		sensitivity:"sensitivity",
		emailEnabled:"email_enabled",
		alarmEnabled:"AO1_enabled",
		recordEnabled:"record_enabled",
		ftpEnabled:"ftp_enabled",
		msgPushEnabled:"msg_push_enabled",
		lightAlarmEnabled:"light_alarm_enabled",
		soundAlarmEnabled:"sound_alarm_enabled",
		captureEnabled:"capture_enabled",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday",
		pt1x:"pt1_x",
		pt1y:"pt1_y",
		pt2x:"pt2_x",
		pt2y:"pt2_y",
		pt3x:"pt3_x",
		pt3y:"pt3_y",
		pt4x:"pt4_x",
		pt4y:"pt4_y",
		id:"id",
		soundAlarmType:"sound_alarm_type",
		soundAlarmTimes:"sound_alarm_times"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciAbandonandTakenDetection = {
	fileName:"abandonandtaken_detection",
	secName:{
		detection:"detection",
		notifyList:"notify_list",
		armingSchedule:"arming_schedule",
		soundAlarmInfo:"sound_alarm_info"
	},
	secType:{
		regionInfo:"region_info"
	},
	actionName:{
		addRegions:"add_regions"
	},
	optName:{
		enabled:"enabled",
		peopleEnabled:"people_enabled",
		vehicleEnabled:"vehicle_enabled",
		sensitivity:"sensitivity",
		AO1Enabled:"AO1_enabled",
		recordEnabled:"record_enabled",
		captureEnabled:"capture_enabled",
		msgPushEnabled:"msg_push_enabled",
		emailEnabled:"email_enabled",
		ftpEnabled:"ftp_enabled",
		soundAlarmEnabled:"sound_alarm_enabled",
		lightAlarmEnabled:"light_alarm_enabled",
		threshold:"threshold",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday",
		pt1x:"pt1_x",
		pt1y:"pt1_y",
		pt2x:"pt2_x",
		pt2y:"pt2_y",
		pt3x:"pt3_x",
		pt3y:"pt3_y",
		pt4x:"pt4_x",
		pt4y:"pt4_y",
		id:"id",
		soundAlarmType:"sound_alarm_type",
		soundAlarmTimes:"sound_alarm_times"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};
var uciLoiteringDetection = {
	fileName:"loitering_detection",
	secName:{
		detection:"detection",
		notifyList:"notify_list",
		armingSchedule:"arming_schedule",
		soundAlarmInfo:"sound_alarm_info"
	},
	secType:{
		regionInfo:"region_info"
	},
	actionName:{
		addRegions:"add_regions"
	},
	optName:{
		enabled:"enabled",
		sensitivity:"sensitivity",
		emailEnabled:"email_enabled",
		alarmEnabled:"AO1_enabled",
		recordEnabled:"record_enabled",
		ftpEnabled:"ftp_enabled",
		captureEnabled:"capture_enabled",
		msgPushEnabled:"msg_push_enabled",
		soundAlarmEnabled:"sound_alarm_enabled",
		lightAlarmEnabled:"light_alarm_enabled",
		threshold:"threshold",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday",
		pt1x:"pt1_x",
		pt1y:"pt1_y",
		pt2x:"pt2_x",
		pt2y:"pt2_y",
		pt3x:"pt3_x",
		pt3y:"pt3_y",
		pt4x:"pt4_x",
		pt4y:"pt4_y",
		id:"id",
		soundAlarmType:"sound_alarm_type",
		soundAlarmTimes:"sound_alarm_times"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciGatheringDetection = {
	fileName:"gathering_detection",
	secName:{
		detection:"detection",
		notifyList:"notify_list",
		armingSchedule:"arming_schedule",
		soundAlarmInfo:"sound_alarm_info"
	},
	secType:{
		regionInfo:"region_info"
	},
	actionName:{
		addRegions:"add_regions"
	},
	optName:{
		enabled:"enabled",
		emailEnabled:"email_enabled",
		alarmEnabled:"AO1_enabled",
		recordEnabled:"record_enabled",
		ftpEnabled:"ftp_enabled",
		captureEnabled:"capture_enabled",
		msgPushEnabled:"msg_push_enabled",
		soundAlarmEnabled:"sound_alarm_enabled",
		lightAlarmEnabled:"light_alarm_enabled",
		percentage:"percentage",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday",
		pt1x:"pt1_x",
		pt1y:"pt1_y",
		pt2x:"pt2_x",
		pt2y:"pt2_y",
		pt3x:"pt3_x",
		pt3y:"pt3_y",
		pt4x:"pt4_x",
		pt4y:"pt4_y",
		id:"id",
		soundAlarmType:"sound_alarm_type",
		soundAlarmTimes:"sound_alarm_times"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciDamageDetection = {
	fileName:"damage_detection",
	secName:{
		detection:"detection",
		notifyList:"notify_list",
		soundAlarmInfo:"sound_alarm_info"
	},
	optName:{
		enabled:"enabled",
		constantAlarmEnabled:"constant_alarm_enabled",
		sensitivity:"sensitivity",
		emailEnabled:"email_enabled",
		alarmEnabled:"AO1_enabled",
		recordEnabled:"record_enabled",
		msgPushEnabled:"msg_push_enabled",
		lightAlarmEnabled:"light_alarm_enabled",
		soundAlarmEnabled:"sound_alarm_enabled",
		captureEnabled:"capture_enabled",
		ftpEnabled:"ftp_enabled",
		soundAlarmType:"sound_alarm_type",
		soundAlarmTimes:"sound_alarm_times"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciPeopleDetection = {
	fileName:"people_detection",
	secName:{
		detection:"detection",
		notifyList:"notify_list",
		armingSchedule:"arming_schedule",
		soundAlarmInfo:"sound_alarm_info",
		boxDisplay:"box_display",
		capability:"capability"
	},
	secType:{
		regionInfo:"region_info"
	},
	actionName:{
		addRegions:"add_regions"
	},
	optName:{
		enabled:"enabled",
		constantAlarmEnabled:"constant_alarm_enabled",
		sensitivity:"sensitivity",
		percentage:"percentage",
		filterLevel:"filter_level",
		filterEnhanceLevel:"filter_enhance_level",
		percentageSupported:"percentage_supported",
		filterLevelSupported:"filter_level_supported",
		filterEnhanceSupported:"filter_enhance_supported",
		emailEnabled:"email_enabled",
		alarmEnabled:"AO1_enabled",
		recordEnabled:"record_enabled",
		msgPushEnabled:"msg_push_enabled",
		lightAlarmEnabled:"light_alarm_enabled",
		soundAlarmEnabled:"sound_alarm_enabled",
		captureEnabled:"capture_enabled",
		ftpEnabled:"ftp_enabled",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday",
		pt1x:"pt1_x",
		pt1y:"pt1_y",
		pt2x:"pt2_x",
		pt2y:"pt2_y",
		pt3x:"pt3_x",
		pt3y:"pt3_y",
		pt4x:"pt4_x",
		pt4y:"pt4_y",
		id:"id",
		soundAlarmType:"sound_alarm_type",
		soundAlarmTimes:"sound_alarm_times",
		color:"color"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciVehicleDetection = {
	fileName:"vehicle_detection",
	secName:{
		detection:"detection",
		notifyList:"notify_list",
		armingSchedule:"arming_schedule",
		soundAlarmInfo:"sound_alarm_info",
		licensePlateWhitelistDetection:"license_plate_whitelist_detection",
		boxDisplay:"box_display"
	},
	secType:{
		regionInfo:"region_info",
		licensePlateWhitelist:"license_plate_whitelist"
	},
	actionName:{
		addRegions:"add_regions",
		addLicensePlates:"add_license_plates",
		deleteLicensePlates:"delete_license_plates"
	},
	optName:{
		enabled:"enabled",
		constantAlarmEnabled:"constant_alarm_enabled",
		sensitivity:"sensitivity",
		emailEnabled:"email_enabled",
		alarmEnabled:"AO1_enabled",
		recordEnabled:"record_enabled",
		msgPushEnabled:"msg_push_enabled",
		lightAlarmEnabled:"light_alarm_enabled",
		soundAlarmEnabled:"sound_alarm_enabled",
		captureEnabled:"capture_enabled",
		ftpEnabled:"ftp_enabled",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday",
		pt1x:"pt1_x",
		pt1y:"pt1_y",
		pt2x:"pt2_x",
		pt2y:"pt2_y",
		pt3x:"pt3_x",
		pt3y:"pt3_y",
		pt4x:"pt4_x",
		pt4y:"pt4_y",
		id:"id",
		soundAlarmType:"sound_alarm_type",
		soundAlarmTimes:"sound_alarm_times",
		whitelist:"whitelist",
		licensePlates:"license_plates",
		color:"color"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciFastMovingDetection = {
	fileName:"fastmoving_detection",
	secName:{
		detection:"detection",
		notifyList:"notify_list",
		armingSchedule:"arming_schedule",
		soundAlarmInfo:"sound_alarm_info"
	},
	secType:{
		regionInfo:"region_info"
	},
	actionName:{
		addRegions:"add_regions"
	},
	optName:{
		enabled:"enabled",
		sensitivity:"sensitivity",
		emailEnabled:"email_enabled",
		alarmEnabled:"AO1_enabled",
		recordEnabled:"record_enabled",
		ftpEnabled:"ftp_enabled",
		msgPushEnabled:"msg_push_enabled",
		lightAlarmEnabled:"light_alarm_enabled",
		soundAlarmEnabled:"sound_alarm_enabled",
		captureEnabled:"capture_enabled",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday",
		pt1x:"pt1_x",
		pt1y:"pt1_y",
		pt2x:"pt2_x",
		pt2y:"pt2_y",
		pt3x:"pt3_x",
		pt3y:"pt3_y",
		pt4x:"pt4_x",
		pt4y:"pt4_y",
		id:"id",
		soundAlarmType:"sound_alarm_type",
		soundAlarmTimes:"sound_alarm_times"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciParkingDetection = {
	fileName:"parking_detection",
	secName:{
		detection:"detection",
		notifyList:"notify_list",
		armingSchedule:"arming_schedule",
		soundAlarmInfo:"sound_alarm_info"
	},
	secType:{
		regionInfo:"region_info"
	},
	actionName:{
		addRegions:"add_regions"
	},
	optName:{
		enabled:"enabled",
		sensitivity:"sensitivity",
		emailEnabled:"email_enabled",
		alarmEnabled:"AO1_enabled",
		recordEnabled:"record_enabled",
		ftpEnabled:"ftp_enabled",
		msgPushEnabled:"msg_push_enabled",
		lightAlarmEnabled:"light_alarm_enabled",
		soundAlarmEnabled:"sound_alarm_enabled",
		captureEnabled:"capture_enabled",
		threshold:"threshold",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday",
		pt1x:"pt1_x",
		pt1y:"pt1_y",
		pt2x:"pt2_x",
		pt2y:"pt2_y",
		pt3x:"pt3_x",
		pt3y:"pt3_y",
		pt4x:"pt4_x",
		pt4y:"pt4_y",
		id:"id",
		soundAlarmType:"sound_alarm_type",
		soundAlarmTimes:"sound_alarm_times"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciUnattendedBaggageDetection = {
	fileName:"unattendedbaggage_detection",
	secName:{
		detection:"detection",
		notifyList:"notify_list",
		armingSchedule:"arming_schedule"
	},
	secType:{
		regionInfo:"region_info"
	},
	actionName:{
		addRegions:"add_regions"
	},
	optName:{
		enabled:"enabled",
		sensitivity:"sensitivity",
		emailEnabled:"email_enabled",
		alarmEnabled:"AO1_enabled",
		recordEnabled:"record_enabled",
		ftpEnabled:"ftp_enabled",
		threshold:"threshold",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday",
		pt1x:"pt1_x",
		pt1y:"pt1_y",
		pt2x:"pt2_x",
		pt2y:"pt2_y",
		pt3x:"pt3_x",
		pt3y:"pt3_y",
		pt4x:"pt4_x",
		pt4y:"pt4_y"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciObjectRemoveDetection = {
	fileName:"objectremove_detection",
	secName:{
		detection:"detection",
		notifyList:"notify_list",
		armingSchedule:"arming_schedule"
	},
	secType:{
		regionInfo:"region_info"
	},
	actionName:{
		addRegions:"add_regions"
	},
	optName:{
		enabled:"enabled",
		sensitivity:"sensitivity",
		emailEnabled:"email_enabled",
		alarmEnabled:"AO1_enabled",
		recordEnabled:"record_enabled",
		ftpEnabled:"ftp_enabled",
		threshold:"threshold",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday",
		pt1x:"pt1_x",
		pt1y:"pt1_y",
		pt2x:"pt2_x",
		pt2y:"pt2_y",
		pt3x:"pt3_x",
		pt3y:"pt3_y",
		pt4x:"pt4_x",
		pt4y:"pt4_y"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};
var uciSceneDetection = {
	fileName:"scenechange_detection",
	secName:{
		detection:"detection",
		notifyList:"notify_list",
		armingSchedule:"arming_schedule",
		soundAlarmInfo:"sound_alarm_info"
	},
	optName:{
		enabled:"enabled",
		sensitivity:"sensitivity",
		ftpEnabled:"ftp_enabled",
		emailEnabled:"email_enabled",
		alarmEnabled:"AO1_enabled",
		recordEnabled:"record_enabled",
		captureEnabled:"capture_enabled",
		msgPushEnabled:"msg_push_enabled",
		soundAlarmEnabled:"sound_alarm_enabled",
		lightAlarmEnabled:"light_alarm_enabled",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday",
		soundAlarmType:"sound_alarm_type",
		soundAlarmTimes:"sound_alarm_times"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};
var uciFaceDetection = {
	fileName:"face_detection",
	secName:{
		detection:"detection",
		notifyList:"notify_list",
		armingSchedule:"arming_schedule"
	},
	optName:{
		enabled:"enabled",
		sensitivity:"sensitivity",
		ftpEnabled:"ftp_enabled",
		emailEnabled:"email_enabled",
		alarmEnabled:"AO1_enabled",
		recordEnabled:"record_enabled",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};
var uciDefocusDetection = {
	fileName:"defocus_detection",
	secName:{
		detection:"detection",
		notifyList:"notify_list",
		armingSchedule:"arming_schedule",
		soundAlarmInfo:"sound_alarm_info"
	},
	optName:{
		enabled:"enabled",
		sensitivity:"sensitivity",
		emailEnabled:"email_enabled",
		alarmEnabled:"AO1_enabled",
		recordEnabled:"record_enabled",
		captureEnabled:"capture_enabled",
		msgPushEnabled:"msg_push_enabled",
		ftpEnabled:"ftp_enabled",
		soundAlarmEnabled:"sound_alarm_enabled",
		lightAlarmEnabled:"light_alarm_enabled",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday",
		soundAlarmType:"sound_alarm_type",
		soundAlarmTimes:"sound_alarm_times"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciPeopleCountingDetection = {
	fileName:"people_counting",
	secName:{
		detection:"pc_enable",
		detect_info:"detect_info",
		armingSchedule:"arming_schedule"
	},
	secType:{
		regionInfo:"region_info"
	},
	actionName:{
		addRegions:"add_regions"
	},
	optName:{
		enabled:"enabled",
		digital_sensitivity:"digital_sensitivity",
		show_people_num:"show_people_num",
		show_people_frame:"show_people_frame",
		x_coor:"x_coor",
		y_coor:"y_coor",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday",
		pt1x:"pt1_x",
		pt1y:"pt1_y",
		pt2x:"pt2_x",
		pt2y:"pt2_y",
		pt3x:"pt3_x",
		pt3y:"pt3_y",
		pt4x:"pt4_x",
		pt4y:"pt4_y",
		id:"id",
		position_pan:"position_pan",
		position_zoom:"position_zoom",
		position_tilt:"position_tilt"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciAudioException = {
	fileName: "audioexception_detection",
	secName:
	{
		detection:"detection",
		inputAbnormal:"input_abnormal",
		voiceRise:"voice_rise",
		voiceDown:"voice_down",
		armingSchedule:"arming_schedule",
		notifyList:"notify_list",
		soundAlarmInfo:"sound_alarm_info"
	},
	optName:
	{
		enabled:"enabled",
		inputAbnormalEnabled:"enabled",
		voiceupEnabled:"enabled",
		voiceupSens:"sensitivity",
		thresh:"threshold",
		voicedownEnabled:"enabled",
		voicedownSens:"sensitivity",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday",
		emailEnabled:"email_enabled",
		alarmEnabled:"AO1_enabled",
		recordEnabled:"record_enabled",
		msgPushEnabled:"msg_push_enabled",
		lightAlarmEnabled:"light_alarm_enabled",
		soundAlarmEnabled:"sound_alarm_enabled",
		soundAlarmType:"sound_alarm_type",
		soundAlarmTimes:"sound_alarm_times"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciSmartData = {
	fileName:"smart_data",
	secName:{
		status:"status"
	},
	secType:{
		status:"status"
	},
	optName:{
		enabled:"enabled"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciNetwork =
{
	fileName:	"network",
	secType:
	{
		iface:		"interface",
		user_route:	"user_route",
		sys_route:	"sys_route"
	},
	secName:
	{
		lan:		"lan",
		wan:		"wan"
	},
	optName:
	{
		ifName:		"ifname",
		proto:		"proto",
		ip:		"ipaddr",
		pppoeUsr:	"username",
		pppoePass:	"password",
		netmask:	"netmask",
		ipMode:		"ip_mode",
		gateway:	"gateway",
		dns:		"dns",
		mtu:		"mtu",
		speed:		"speed_duplex",
		mac:		"macaddr",
		facMac:		"fac_macaddr",
		target:		"target",
		iface:		"interface",
		facIp:		"fac_ipaddr",
		linkStatus:	"link_status",
		phyStatus:	"phy_status",
		pppoeLinkSta:"pppoe_link_status",
		result:		"result",
		ipAddr:		"ipaddr",
		ipv4:		"ipv4",
		pppoeIpv4:	"pppoe_ipv4",
		wanType: 	"wan_type"
	},
	optValue:
	{
		proto:
		{
			dynIp:"dhcp",
			staticIp:"static",
			pppoe:"pppoe",
			none:"none"
		},
		ifname:
		{
			wan:"eth0",
			lan:"br-lan",
			host:"host",
			factory:"factory"
		},
		ipMode:
		{
			dynamic:	"dynamic",
			manual:		"manual"
		},
		DFT_LAN_IP:["192.168.1.1", "192.168.0.1"],
		timeout:"timeout",
		waiting:"waiting",
		success:"success"
	},
	dynData:
	{
		wanStatus:	"wan_status",
		wanProto:	"wan_proto",
		ifaceMac:	"iface_mac"
	},
	action:
	{
		wanDetect:	"detect_wan_proto",
		chgWanSta: "change_wan_status",
		operate: "operate",
		getDhcpIp:"get_dhcp_ip",
		applyDhcpIp:"apply_dhcp_ip",
		releaseStaticIp:"release_static_ip",
		checkIpConflict:"check_ip_conflict"
	},
	actionValue:
	{
		connect:"connect",
		disconnect:"disconnect"
	}
};

var uciOsdCapa = {
	fileName:"osd_capability",
	secName:
	{
		capability:"capability"
	},
	optName:
	{
		labelInfoNum: "label_info_num",
		labelInfoMaxLen: "label_info_max_length",
		positionLock: "position_lock",
		dateSupport: "date_support",
		weekSupport: "week_support",
		displayMode: "display_mode",
		fontSize: "font_size",
		fontColor: "font_color",
		linkChn2DevSupport: "link_chn_to_dev_support",
		zoomSupport: "zoom_support",
		zoomDisplayRange: "zoom_display_range",
		azimuthSupport: "azimuth_support",
		azimuthDisplayRange: "azimuth_display_range",
		presetSupport: "preset_support",
		presetDisplayRange: "preset_display_range",
		limitSizeTo6Support4: "limit_size_to_64_support",
		labelInfoAlignSupport: "label_info_align_support",
		batteryLevelSupport: "battery_level_support"
	}
};

var uciOsd = {
	fileName:"OSD",
	secName:
	{
		font:"font",
		week:"week",
		date:"date",
		zoom:"zoom",
		azimuth:"azimuth",
		preset:"preset",
		batteryLevel:"battery_level"
	},
	secType:
	{
		labelInfo:"label_info"
	},
	optName:
	{
		display:"display",
		size:"size",
		color:"color",
		colorType:"color_type",
		enabled:"enabled",
		coorInfo:"coor_info",
		xCoor:"x_coor",
		yCoor:"y_coor",
		text:"text",
		link_chn_to_dev:"link_chn_to_dev"
	},
	optValue:
	{
		enableVal:{
			on:"on",
			off:"off"
		},
		clorTypeVal:{
			auto:"auto",
			userDef:"user_defined"
		},
		displayVal:{
			para2s:"2",
			para5s:"5",
			para10s:"10",
			paraOpen:"always_open",
			paraClose:"always_close"
		}
	}
};
var uciPic = {
	fileName:"image_capture",
	secName:
	{
		capture:"capture"
	},
	optName:
	{
		capType:"cap_type",
		streamType:"stream_type",
		imageSize:"image_size",
		quality:"quality",
		capInterval:"cap_interval"
	}
};

var uciUpnp =
{
	fileName:		"upnpc",
	secType:
	{
		onOff:		"on_off",
		entry:		"entry",
		upnpStatus: "upnp_status"
	},
	secName:
	{
		upnpcInfo:	"upnpc_info",
		uhttpd:		"uhttpd",
		vhttpd:		"vhttpd",
		rtsp:		"rtsp",
		onvifSer:	"onvif_service"
	},
	optName:
	{
		enabled:	"enabled",
		mode:		"mode",
		proto:		"proto",
		extPort:	"ext_port",
		innerPort:	"inner_port",
		client:		"client",
		desc:		"desc",
		ipaddr:		"ipaddr",
		status:		"status"
	},
	dynData:
	{
		upnpLease:	"upnp_lease"
	}
};
var uciDeviceInfo =
{
	fileName:		"device_info",
	secType:
	{
		info:		"info"
	},
	secName:
	{
		info:		"info",
		basicInfo:	"basic_info"
	},
	optName:
	{
		devModel:	"device_model",
		serialNumber:"serial_number",
		productId:	"product_id",
		vendorId:	"vendor_id",
		sysSwRev:	"sys_software_revision",
		sysSwRevMin:"sys_software_revision_minor",
		buildTime:	"build_time",
		language:	"language",
		devName:	"device_name",
		deviceInfo:	"device_info",
		devId:		"device_id",
		deviceModel:"device_model",
		hwVer:		"hw_version",
		swVer:		"sw_version",
		domainName:	"domain_name",
		ispVer:		"isp_version",
		barCode:	"barcode"
	}
};
var uciFirewall = {
	fileName:"firewall",
	secName:
	{
		ipCtrl:			"ipctrl",
		fireWall:		"firewall"
	},
	secType:
	{
		blacklist:		"blacklist",
		whitelist:		"whitelist"
	},
	optName:
	{
		enabled:		"enabled",
		filterMode:		"filter_mode",
		ip:				"ip",
		desc:			"desc",
		startIp:		"start_ip",
		endIp:			"end_ip"
	},
	optValue:
	{
		accessVal:
		{
			all:		"off",
			some:		"on"
		},
		typeVal:{
			forbid:		"blacklist",
			allow:		"whitelist"
		}
	}
};
var uciFtp = {
	fileName:"ftp_client",
	secName:
	{
		ftpInfo:	"ftp_info",
		directory1:	"directory_1"
	},
	secType:
	{
		info:			"info",
		directoryLevel:	"directory_level"
	},
	optName:
	{
		address:			"address",
		port:				"port",
		anonymousEnabled:	"anonymous_enabled",
		username:			"username",
		password:			"password",
		dirStructure:		"directory_structure",
		directoryType:		"directory_type",
		customName:			"custom_name"
	},
	actionName:
	{
		testFtp:"test_ftp",
		get_test_status:"get_test_status"
	}
};
var uciUserMgt = {
	fileName:"user_management",
	secType:
	{
		root:"root",
		admin:"admin",
		guest:"guest",
		encryptInfo:"encrypt_info"
	},
	optName:
	{
		username:"username",
		passwd:"passwd",
		oldPasswd:"old_passwd",
		comment:"comment",
		secName:"secname",
		group:"group",
		ciphertext:"ciphertext",
		encryptType:"encrypt_type",
		key:"key",
		nonce:"nonce"
	},
	optValue:
	{
		curUsrInfo:"current_user_info"
	},
	actionName:{
		userMgt:"user_management",
		chgUsrInfo:"change_user_info",
		getEncryptInfo:"get_encrypt_info"
	}
};

var uciPlayBack = {
	fileName:"playback",
	secType:
	{

	},
	optName:
	{
		channel:"channel",
		seconds:"seconds",
		day:"day",
		clientId:"client_id",
		startTime:"start_time",
		endTime:"end_time",
		eventType:"event_type",
		mediaType:"media_type",
		map:"map",
		size:"size",
		fileId:"file_id",
		result:"result",
		userId:"user_id",
		scale:"scale"
	},
	action:
	{
		searchYear:"search_year",
		suspend:"suspend"
	}
};

var uciMedia = {
	fileName: "media",
	optName: {
		userId: "user_id",
        startTime: "start_time",
        endTime: "end_time",
        EventType: "event_type",
        mediaType: "media_type",
        channel: "channel",
		picNum: "picture_num",
		videoNum: "video_num",
        startIndex: "start_index",
        maxNum: "max_num",
		size: "size",
		fileId: "file_id",
		index: "index"
	},
	action: {
		getMediaCnt: "get_media_cnt",
		getMediaList: "get_media_list"
	}
};

var uciDdns = {
	fileName:		"ddns",
	secType:
	{
		ddns:		"ddns"
	},
	secName:
	{
		phddns:		"phddns",
		tpddns:		"tpddns"
	},
	optName:
	{
		autologin:		"auto_login",
		username:		"username",
		password:		"password",
		used:			"is_used",
		table:			"table",
		bindDevNum:		"bind_number",
		status:			"status",
		domain:			"domain",
		suffix:			"suffix",
		force:			"force",
		mac:			"mac",
		device:			"device",
		isCurhost:		"is_cur_host"
	},
	optValue:
	{
		ddns_list:		"ddns_list",
		device_num:		"device_num",
		register_status:"register_status",
		bind_status:	"bind_status",
		unbind_status:	"unbind_status",
		get_domain_list_status:"get_domain_list_status",
		get_device_num_status :"get_device_num_status"
	},
	actionName:
	{
		register_domain:"register",
		bind_domain:"bind",
		unbind_domain:"unbind",
		get_domain_list:"get_domain_list",
		get_device_num:"get_device_num",
		logout:"logout",
		login:"login"
	},
	actionDetail:
	{
		domain:"domain",
		suffix:"suffix",
		force:"force",
		logout:"logout",
		login:"login"
	},
	dynData:
	{
		ddnsStatus:	"ddns_status",
		tpddnsStatus:"tpddns_status"
	}
};

var uciUhttpd =
{
	fileName:		"uhttpd",
	secType:
	{
		uhttpd: "uhttpd",
		cert:"cert"
	},
	secName:
	{
		main:"main",
		px5g:"px5g"
	},
	optName:
	{
		listenHttpPort:"listen_http"
	}
};

var uciCet =
{
	fileName:		"cet",
	secType:
	{
		server:		"server"
	},
	secName:
	{
		rtsp:"rtsp",
		vhttpd:"vhttpd"
	},
	optName:
	{
		port:"port"
	}
};

var uciMulticast =
{
	fileName:		"multicast",
	secType:
	{
		server:		"server"
	},
	secName:
	{
		main:"main",
		minor:"minor",
		third:"third"
	},
	optName:
	{
		enabled:"enabled",
		address:"address",
		port:"port",
		random:"random"
	},
	optValue:
	{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciTourControl = {
	fileName:"tour",
	secName:{
		tourConf: "tour_config"	/*new*/
	},
	optName:{
		id:"id",
        action:"action",
		name:"name",
	    recurringtimes:"recurring_times",
		recurringduration:"recurring_duration",
		spotid:"spot_id",
		spotstaytime:"spot_stay_time",
		spotspeedpan:"spot_speed_pan",
		spotspeedtilt:"spot_speed_tilt",
		spotspeedzoom:"spot_speed_zoom",
		table:"table",
		spot:"spot",
		para:"para",
		status:"status",
		starytimedef:"stay_time_default"   /*new*/
	},
	optValue:{
		start:"start",
		stop:"stop",
		pause:"pause",
		idle:"idle",
		touring:"touring",
		paused:"paused"
	},
	actionName:{
		tourOperate:"operate_tour",
		quickTour:"quick_tour",
		modifyTour:"modify_tour",
		tourConfig:"tour_config"
	},
	actOptName:
	{
		id:"id",
		name:"name",
	    recurringtimes:"recurring_times",
		recurringduration:"recurring_duration",
		spotid:"id",
		spotstaytime:"stay_time",
		spotspeedpan:"speed_pan",
		spotspeedtilt:"speed_tilt",
		spotspeedzoom:"speed_zoom",
		spot:"spot"
	}
};

var uciFaceComparison =
{
	fileName:		"face_comparison",
	secType:
	{
		whiteList:		"white_list",
		blackList:		"black_list",
		faceLog:		"face_log"
	},
	secName:
	{
		faceComparison:"face_comparison"
	},
	actionName:{
		getGroupFace:"get_group_face",
		getGroupInfo:"get_group_info",
		moveGroup:"move_group",
		addComparisonFace:"add_comparison_face",
		getFaceCompareLog:"get_face_compare_log"
	},
	optName:
	{
		enabled:"enabled",
		mode:"mode",
		vector:"vector",
		path:"path",
		name:"name",
		age:"age",
		gender:"gender",
		comment:"comment",
		totalFaceNum:"total_face_num",
		groupName:"group_name",
		faceInfo:"face_info",
		groupSecName:"group_sec_name",
		faceSecName:"face_sec_name",
		startTime:"start_time",
		endTime:"end_time",
		pageNum:"page_num",
		logsPerPage:"logs_per_page",
		date:"date",
		discoverFace:"discover_face",
		compareFace:"compare_face",
		confidence:"confidence",
		advice:"advice",
		total:"total",
		page:"page",
		forceAdd:"force_add",
		type:"type"
	},
	optValue:
	{
		enableVal:{
			on:"on",
			off:"off"
		},
		types:{
			all:"all",
			blackMode:"black_mode",
			whiteMode:"white_mode"
		}
	}
};

var uciFaceGroup =
{
	fileName:"face_group",
	secType:
	{
		groupInfoWhite:		"group_info_white",
		groupInfoBlack:		"group_info_black"
	},
	secName:
	{

	},
	actionName:{
		getGroupFace:"get_group_face",
		moveGroup:"move_group"
	},
	optName:
	{
		enabled:"enabled",
		groupName:"group_name",
		faceInfo:"face_info",
		faceNum:"face_num",
		confidence:"confidence",
		recordEnabled:"record_enabled",
		msgPushEnabled:"msg_push_enabled",
		AO1Enabled:"AO1_enabled",
		soundAlarmEnabled:"sound_alarm_enabled",
		lightAlarmEnabled:"light_alarm_enabled",
		alarmType:"alarm_type"
	},
	optValue:
	{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciFaceGallery =
{
	fileName:"face_gallery",
	secType:
	{

	},
	secName:
	{
		familyFace:"family_face",
		strangeFace:"strange_face",
		faceMedia:"face_media"
	},
	actionName:{
		getStrangeFace:"get_strange_face",
		strangeToFamily:"strange_to_family",
		getFaceVideoList:"get_face_video_list",
		getStrangeFaceByFaceID:"get_strange_face_by_face_id",
		setStrangeComment:"set_strange_comment"
	},
	optName:
	{
		vector:"vector",
		comment:"comment",
		path:"path",
		strangerFaceId:"stranger_face_id",
		forceAdd:"force_add",
		faceSecName:"face_sec_name",
		videoNum:"video_num",
		groupSecName:"group_section_name"
	},
	optValue:
	{
		enableVal:{
			on:"on",
			off:"off"
		}
	}
};

var uciPattern = {
	fileName:"pattern",
	optName:{
		id:"id",
        action:"action",
		name:"name",
		table:"table",
		para:"para",
		status: "status"
	},
	optValue:{
		start:"start",
		stop:"stop",
		startrecord:"start_record",
		stoprecord:"stop_record",
		idle: "idle",
		scanning: "scanning",
		recording:"recording"
	},
	actionName:{
		patternOperate:"operate_pattern",
		clearPattern:"clear_pattern"
	}
};

var uciFaceSnapShot = {
	fileName:"face_snapshot",
	secName: {
		fssPicCfg:"fss_pic_cfg",
		fssOsdCfg:"fss_osd_cfg",
		fssGenCfg:"fss_gen_cfg",
		fssSizeConfig:"fss_size_cfg",
		fssRule:"fss_rule",
		point:"point",
		armingSchedule:"arming_schedule",
		notifyList:"notify_list",
		autoExp:"auto_exposure",
		featureCode:"feature_code"
	},
	secType:{
		regionInfo:"region_info",
		regionInfoBanned:"region_info_banned"
	},
	optName:{
		ssMode:"ss_mode",
		genSpeed:"gen_speed",
		sensitivity:"sensitivity",
		filterTime:"filter_time",
		optSsNum:"best_ss_num",
		optQaThre:"best_qa_thre",
		fastQaThre:"fast_qa_thre",
		fastSsInterval:"fast_ss_interval",
		fastSsNum:"fast_ss_num",
		enabled:"enabled",
		savePicSwitch:"save_pic",
		picResolution:"pic_resolution",
		picQuality:"pic_quality",
		faceWidthRatio:"face_width_ratio",
		faceHeightRatio:"face_height_ratio",
		bodyHeightRatio:"body_height_ratio",
		imgHeight:"img_height",
		fssMode:"fss_mode",
		spotNameSwitch:"spot_name_enable",
		spotName:"spot_name",
		spotNumSwitch:"spot_num_enable",
		spotNum:"spot_num",
		spotTimeSwitch:"ss_time_enable",
		xCoor:"x_coor",
		yCoor:"y_coor",
		eyeDistMin:"eye_dist_min",
		eyeDistX:"eye_dist_x",
		eyeDistY:"eye_dist_y",
		pointBanned:"point_banned",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday",
		emailEnabled:"email_enabled",
		recordEnabled:"record_enabled",
		captureEnabled:"capture_enabled",
		ftpEnabled:"ftp_enabled",
		AO1Enabled:"AO1_enabled",
		msgPushEnabled:"msg_push_enabled",
		soundAlarmEnabled:"sound_alarm_enabled",
		lightAlarmEnabled:"light_alarm_enabled",
		sdCardEnabled:"sd_card_enabled",
		fssLuma:"luma",
		pt1x:"pt1_x",
		pt1y:"pt1_y",
		pt2x:"pt2_x",
		pt2y:"pt2_y",
		pt3x:"pt3_x",
		pt3y:"pt3_y",
		pt4x:"pt4_x",
		pt4y:"pt4_y",
		id:"id"
	},
	actionName:{
		addFssRegion:"add_fss_region",
		addFssRegionBanned:"add_fss_region_banned",
		cfgRecover:"recover_advanced_cfg"
	},
	optValue:{
		best:"best",
		fast:"fast",
		enableOn:"on",
		enableOff:"off"
	}
};

var uciAlarmAudioTypeCapability = {
	fileName:"alarm_audio_type_capability",
	secName:{
		capability:"capability"
	},
	optName:{
		alarmType:"alarm_type",
		eventSeparateAudioAlarmSupport:"event_separate_audio_alarm_support",
		usrDefAudioAlarmSupport:"usr_def_audio_alarm_support",
		usrDefAudioAlarmMaxNum:"usr_def_audio_alarm_max_num",
		ttsSupport:"tts_support",
		uploadSupport:"upload_support",
		flashAudioMaxNum:"flash_audio_max_num"
	}
};

var uciAiEnhanceCapability = {
	fileName:"ai_enhance_capability",
	secName:{
		traditionalEnhance:"traditional_enhance",
		faceEnhance:"face_enhance",
		peopleGallery:"people_gallery"
	},
	optName:{
		peopleEnhanceVer:"people_enhance_ver",
		vehicleEnhanceVer:"vehicle_enhance_ver",
		ebikeEnhanceVer:"ebike_enhance_ver",
		nonVehicleEnhanceVer:"non_vehicle_enhance_ver",
		fssEnhanceVer:"face_snapshot_ver",
		constantAlarmVer:"contant_alarm_ver",
		supportFSSMode:"support_fss_mode",
		BigHeadParmsArr:"big_head_parms",
		HalfBodyParmsArr:"half_body_parms",
		FullBodyParmsArr:"full_body_parms"
	},
	bit:{
		motionDet:0,
		lineCross:1,
		intrusionDet:2,
		regionEntrance:3,
		regionExit:4,
		targetTrack:5
	}
};

var uciPlgCfg = {
	fileName:"plugin_manager",
	secName:{
		plugin:"plugins"
	},
	optName:{
		pluginName:"plugin_name",
		pluginId:"plugin_id",
		pluginVer:"plugin_ver",
		releaseLog:"release_log",
		pluginValid:"plugin_valid"
	},
	actionName:{
		getUpPlg:"get_plugins_update_info"
	}
};

var uciAiCapability = {
	fileName:"ai_capability",
	secName:{
		capability:"capability"
	},
	optName:{
		supportAiPlugin:"support_ai_plugin"
	}
};

var uciAiPluginConfig = {
	fileName:"plugin_config",
	secName:{
		aiPluginInfo:"ai_plugin_info"
	},
	optName:{
		pluginName:"plugin_name",
		pluginId:"plugin_id",
		pluginVer:"plugin_ver",
		pluginEnabled:"plugin_enabled",
		pluginLowestVer:"plugin_lowest_ver"
	}
};

var uciLicensePlateRecognition = {
	fileName:"license_plate_recognition",
	secName:{
		ledDisplayList:"led_display_list",
		triggerMode:"trigger_mode",
		lprPara:"lpr_para",
		ledDisplayList:"led_display_list",
		rs485Cfg:"rs485_cfg",
		radarCfg:"radar_cfg",
		detectorCfg:"detector_cfg",
		audioBroadcastInfo:"audio_broadcast_info",
		enterBroadcastContent:"enter_broadcast_content",
		leaveBroadcastContent:"leave_broadcast_content",
		audioBroadcastAudition:"audio_broadcast_audition",
		barrierGateCfg:"barrier_gate_cfg",
		notifyList:"notify_list",
		soundAlarmInfo:"sound_alarm_info",
		ftpCaptureInfo:"ftp_capture_info"
	},
	optName:{
		deviceName:"device_name",
		snapshotTimestamp:"snapshot_timestamp",
		licensePlateNumber:"license_plate_number",
		licensePlateColor:"license_plate_color",
		vehicleBrand:"vehicle_brand",
		vehicleColor:"vehicle_color",
		vehicleType:"vehicle_type",
		licensePlateType:"license_plate_type",
		recognizeResult:"recognize_result",
		startTime:"start_time",
		endTime:"end_time",
		total:"total",
		userId:"user_id",
		pageNum:"page_num",
		itemPerPage:"item_per_page",
		licensePlateThumbnail:"license_plate_thumbnail",
		licensePlateBackground:"license_plate_background",
		thumbnailFileId:"thumbnail_file_id",
		backgroundFileId:"background_file_id",
		thumbnailFilePath:"thumbnail_file_path",
		backgroundFilePath:"background_file_path",
		thumbnailSize:"thumbnail_size",
		backgroundSize:"background_size",
		mode:"mode",
		id:"id",
		regionPt1x:"region_pt1_x",
		regionPt2x:"region_pt2_x",
		regionPt3x:"region_pt3_x",
		regionPt4x:"region_pt4_x",
		regionPt1y:"region_pt1_y",
		regionPt2y:"region_pt2_y",
		regionPt3y:"region_pt3_y",
		regionPt4y:"region_pt4_y",
		linePt1_x:"line_pt1_x",
		linePt2_x:"line_pt2_x",
		linePt1_y:"line_pt1_y",
		linePt2_y:"line_pt2_y",
		lane1LinePt1_x:"lane_line1_pt1_x",
		lane1LinePt1_y:"lane_line1_pt1_y",
		lane1LinePt2_x:"lane_line1_pt2_x",
		lane1LinePt2_y:"lane_line1_pt2_y",
		lane2LinePt1_x:"lane_line2_pt1_x",
		lane2LinePt1_y:"lane_line2_pt1_y",
		lane2LinePt2_x:"lane_line2_pt2_x",
		lane2LinePt2_y:"lane_line2_pt2_y",
		triggerLinePt1_x:"trigger_line_pt1_x",
		triggerLinePt1_y:"trigger_line_pt1_y",
		triggerLinePt2_x:"trigger_line_pt2_x",
		triggerLinePt2_y:"trigger_line_pt2_y",
		positionPan:"position_pan",
		positionTilt:"position_tilt",
		positionZoom:"position_zoom",
		enabled:"enabled",
		priorityProvince:"priority_province",
		gateProtocol:"gate_protocol",
		direction:"direction",
		inoutType:"inout_type",
		overlay:"overlay",
		antifakedEnabled:"antifaked_enabled",
		xCoor:"x_coor",
		yCoor:"y_coor",
		baudrate: "baudrate",
		dataBits: "databits",
		stopBits: "stopbits",
		checkMode: "check_mode",
		flowCtrl: "flow_ctrl",
		workMode: "work_mode",
		cmd: "cmd",
		linkStatus: "link_status",
		barrierGateStatus: "barrier_gate_status",
		volume: "volume",
		commonWords: "common_words",
		commonWordsType: "common_words_type",
		parkFee: "park_fee",
		remaining: "remaining",
		ioNum:"io_num",
		audition_status:"audition_status",
		snapshotIdstr:"snapshot_idstr",
		gateLockEnabled:"gate_lock_enabled",
		gateLockDuration:"gate_lock_duration",
		url:"url",
		carPassMode:"car_pass_mode",
		parkingGroundLockEnabled:"parking_ground_lock_enabled",
		alarmEnabled:"AO1_enabled",
		recordEnabled:"record_enabled",
		msgPushEnabled:"msg_push_enabled",
		lightAlarmEnabled:"light_alarm_enabled",
		soundAlarmEnabled:"sound_alarm_enabled",
		captureEnabled:"capture_enabled",
		ftpEnabled:"ftp_enabled",
		soundAlarmType:"sound_alarm_type",
		soundAlarmTimes:"sound_alarm_times"
	},
	secType:{
		regionInfo:"region_info",
		lineInfo:"line_info",
		lpssStorageStatus:"lpss_storage_status",
		ftpCaptureType:"ftp_capture_type"
	},
	optValue:{
		all:"all",
		smallCar:"small-car",
		smallTruck:"small-truck",
		mediumCar:"medium-car",
		largeCar:"large-car",
		largeTruck:"large-truck",
		yellowPlate:"yellow_plate",
		bluePlate:"blue_plate",
		blackPlate:"black_plate",
		whitePlate:"white_plate",
		yellowGreenPlate:"yellow_green_plate",
		greenPlate:"green_plate",
		HKMacaoPlate:"HK_Macao_plate",
		cocahPlate:"coach_plate",
		enableVal:{
			on:"on",
			off:"off"
		}
	},
	actionName:{
		snapshotRecognize:"snapshot_recognize",
		searchLicensePlate:"search_license_plate",
		getBarrierGateStatus:"get_barrier_gate_status",
		barrierGateCtrl:"barrier_gate_ctrl",
		addLprRegion:"add_lpr_region",
		addLprLines:"add_lpr_lines",
		detectionLinesRestore:"detection_lines_restore",
		getBroadcastAuditionStatus:"get_broadcast_audition_status",
		searchLpssRecord:"search_lpss_record",
		downloadLpssRecord:"download_lpss_record",
		getSnapshotRecognizeResult:"get_snapshot_recognize_result",
		closeLpssDatabaseStorage:"close_lpss_database_storage"
	}
};

var UciLprCapability = {
	fileName:"lpr_capability",
	secName:{
		capability:"capability",
		barrierGate:"barrier_gate"
	},
	optName:{
		barrierGate:"barrier_gate",
		audioBroadcast:"audio_broadcast",
		snapshotRecognize:"snapshot_recognize",
		multicameraSupport:"multicamera_support",
		antifakedSupport:"antifaked_support",
		gateLockSupported:"gate_lock_supported",
		openLockSupported:"open_lock_supported",
		gateProtocolSupported:"gate_protocol_supported",
		carPassSupported:"car_pass_supported",
		gateProtocolLimits:"gate_protocol_limits",
		lpssRecordDatabaseStorage:"lpss_record_database_storage",
		videoDetectionVersion:"video_detection_version",
		listTypeSupportList:"list_type_support_list",
		lpssRecordCapability:"lpss_record_capability",
		parkingGroundLockSupported:"parking_ground_lock_supported",
		nonVehicleDetectionSupported:"non_vehicle_detection_supported",
		crossParkingDetectionSupported:"cross_parking_detection_supported",
		multiParkLotSupported:"multi_park_lot_supported",
		glockType:"glock_type",
		autoUpTimeSetGlockType:"auto_up_time_set_glock_type",
		leaveRecordSupported:"leave_record_supported",
		recordIdSupported:"record_id_supported",
		modifyLpssRecordSupported:"modify_lpss_record_supported",
		stayRecordSupported:"stay_record_supported"
	}
};

var UciLedScreenDisplay = {
	fileName:"led_screen_display",
	secType:{
		LedDisplayPasscarList:"led_display_passcar_list",
		LedDisplayNonecarList:"led_display_nonecar_list",
		customContent:"custom_content"
	},
	optName:{
		id:"id",
		line:"line",
		contentType:"content",
		customText:"custom_text",
		fontColor:"font_color",
		fontSize:"font_size",
		moveType:"move_type",
		enabled:"enabled"
	}
};

var uciLteCapability =
{
	fileName:"lte_capability",
	secName:
	{
		capability:"capability"
	},
	optName:
	{
		natSupport:"nat_support",
		roamingSupport:"roaming_support",
		netdetSupport:"netdet_support",
		debuggerSupport:"debugger_support",
		internetWiredSupport:"internet_wired_support",
		usbSpeedSupportBmp:"usb_speed_support_bmp",
		logDebuggerSupport:"log_debugger_support",
		dumpSupport:"dump_support",
		applayerLogDebuggerSupport:"applayer_log_debugger_support",
		tddSpeedImproveSupport:"tdd_speed_improve_support"
	}
};
var uciLteManager =
{
	fileName:"lte_manager",
	secName:
	{
		info4g:"info_4g",
		infoInternet:"info_internet",
		infoData:"info_data",
		power:"power",
		infoBase:"info_base",
		apn:"apn",
		net_det:"net_det"
	},
	optName:
	{
		isp:"isp",
		simStatus:"sim_status",
		networkMode:"network_mode",
		signalInfo:"signal_info",
		uploadRate:"tx_speed",
		downloadRate:"rx_speed",
		snr:"snr",
		rsrq:"rsrq",
		rxTraffic:"rx_traffic",
		txTraffic:"tx_traffic",
		rsrp:"rsrp",
		band:"band",
		lac:"lac",
		ci:"ci",
		netStatus:"net_status",
		pppStatus:"ppp_status",
		ip:"ip",
		firDns:"first_dns",
		secDns:"second_dns",
		connect:"connect",
		dataSwitch:"data_switch",
		dataRoaming:"data_roaming",
		conReboot:"con_reboot",
		debuger:"debuger",
		internetWiredEn:"internet_wired_enable",
		apn_enable:"apn_enable",
		mtu:"mtu",
		flightMode:"flight_mode",
		sleepMode:"sleep_mode",
		vender:"vender",
		product:"product",
		version:"version",
		imei:"imei",
		imsi:"imsi",
		operate:"operate",
		status:"status",
		apnname:"apn",
		apnUsername:"username",
		apnPassword:"password",
		apnAuth:"authentication",  /*身份验证类型*/
		ping_enable:"ping_enable",
		hostname_1:"hostname_1",
		hostname_2:"hostname_2",
		usbSpeed:"usb_speed",
		logDebugger:"log_debugger",
		dump:"dump",
		applayerLogDebugger:"applayer_log_debugger",
		tddSpeedImproveEn:"tdd_speed_improve_enable",
		natSwitch:"nat_switch"
	},
	optValue:
	{
		enableVal:
		{
			on:"on",
			off:"off"
		}
	}
};

var UciLedScreenDisplayCapa = {
	fileName:"led_screen_display_capability",
	secName:{
		capability:"capability"
	},
	optName:{
		lineNum:"line_num",
		passcarContent:"passcar_content",
		nonecarContent:"nonecar_content",
		fontColor:"font_color",
		customSupported:"custom_supported",
		customContentNum:"custom_content_num",
		fontSize:"font_size"
	}
};

var UciPirDetection = {
	fileName:"pir_detection",
	secType:{
		levelDistUnit:"level_distance_unit"
	},
	secName:{
		capability:"capability",
		pirDet:"pir_det",
		pirNotifList:"pir_notif_list",
		soundAlarmInfo:"sound_alarm_info"
	},
	optName:{
		levelDistUnitSupport:"level_distance_unit_support",
		pirDetEnabledSupport:"pir_det_enabled_support",
		pirDetLedSupport:"pir_det_led_support",
		pirMsgPushPlanSupport:"pir_msg_push_plan_support",
		pirDetRecordTimeSupport:"pir_det_record_time_support",
		pirDetDurationSupport:"pir_det_duration_support",
		pirDetDetIntervalSupport:"pir_det_det_interval_support",
		key:"key",
		detectRange:"detect_range",
		distSensitivityMin:"distance_sensitivity_min",
		distSensitivityMax:"distance_sensitivity_max",
		duration:"duration",
		detInterval:"det_interval",
		distSensitivity:"distance_sensitivity",
		recordTime:"record_time",
		enabled:"enabled",
		clientEnabled:"client_enabled",
		appEnabled:"app_enabled",
		emailEnabled:"email_enabled",
		recordEnabled:"record_enabled",
		captureEnabled:"capture_enabled",
		ftpEnabled:"ftp_enabled",
		AO1Enabled:"AO1_enabled",
		msgPushEnabled:"msg_push_enabled",
		soundAlarmEnabled:"sound_alarm_enabled",
		lightAlarmEnabled:"light_alarm_enabled",
		tumsCaptureEnabled:"tums_capture_enabled",
		soundAlarmType:"sound_alarm_type",
		soundAlarmTimes:"sound_alarm_times"
	}
};

var UciLowPowerCapability = {
	fileName:"low_power_capability",
	secName:{
		capability:"capability",
		powerModeList:"power_mode_list"
	},
	optName:{
		wakeupSupported:"wakeup_supported",
		wakeupTime:"wakeup_time",
		powerModeList:"power_mode_list",
		powerModePlanMaxNum:"power_mode_plan_max_num",
		protectionSupported:"protection_supported",
		autoswitchType:"autoswitch_type",
		workModeSupported:"work_mode_supported",
		exceptionHandleSupported:"exception_handle_supported",
		batteryLife:"battery_life",
		unsupportedDetection:"unsupported_detection",
		type:"type",
		name:"name"
	}
};

var UciLowPower = {
	fileName:"low_power",
	secName:{
		powerMode:"power_mode",
		powerModePlan:"power_mode_plan",
		status:"status"
	},
	optName:{
		userMode:"user_mode",
		protectionEnabled:"protection_enabled",
		monday:"monday",
		tuesday:"tuesday",
		wednesday:"wednesday",
		thursday:"thursday",
		friday:"friday",
		saturday:"saturday",
		sunday:"sunday",
		currentMode:"current_mode"
	}
};

var UciBatteryCapability = {
	fileName:"battery_capability",
	secName:{
		capability:"capability"
	},
	optName:{
		batteryNum:"battery_num",
		batteryType:"battery_type",
		chargeSupported:"charge_supported",
		statusSupported:"status_supported",
		insertStatusSupported:"insert_status_supported",
		illegalStatusSupported:"illegal_status_supported",
		overrunStatusSupported:"overrun_status_supported",
		percentSupported:"percent_supported",
		lowPercentRange:"low_percent_range",
		low2NormalPercent:"low_to_normal_percent",
		inputWattSupported:"input_watt_supported",
		outputWattSupported:"output_watt_supported",
		tempSupported:"temp_supported",
		envTempSupported:"env_temp_supported",
		model:"model",
		version:"version",
		capacity:"capacity"
	}
};

var UciBattery = {
	fileName:"battery",
	secName:{
		batteryInfo:"battery_info",
		setting:"setting"
	},
	optName:{
		type:"type",
		status:"status",
		insertStatus:"insert_status",
		illegalStatus:"illegal_status",
		overrunStatus:"overrun_status",
		percent:"percent",
		temp:"temp",
		envTemp:"env_temp",
		inputWatt:"input_watt",
		outputWatt:"output_watt",
		model:"model",
		version:"version",
		capacity:"capacity",
		lowPercent:"low_percent",
		normalPercent:"normal_percent"
	}
};

var uciNetworkSpeaker = {
	fileName:"network_speaker",
	actionName:{
		playAudio:"play_audio"
	}
};

var UciLPMCapability = {
	fileName:"lpm_capability",
	secName:{
		LPMCapability:"capability"
	},
	optName:{
		licensePlateWhitelistSupported:"whitelist_supported",
		licensePlateWhitelistMaxNum:"whitelist_max_num",
		licensePlateBlacklistSupported:"blacklist_supported",
		licensePlateBlacklistMaxNum:"blacklist_max_num",
		platformSupported:"platform_supported",
		fileOperateSupported:"file_operate_supported",
		armingScheduleSupported:"arming_schedule_supported",
		licensePlateInfo:"license_plate_info",
		databaseLogDownloadSupported:"database_log_download_supported",
		licensePlateTypeManage:"license_plate_type_manage"
	}
};

var UciLicensePlateManagement = {
	fileName:"license_plate_management",
	secType:{
		AddBlackLicensePlates:"add_black_license_plates",
		AddWhiteLicensePlates:"add_white_license_plates",
		AddBlackLicensePlateType:"add_black_lp_type",
		AddWhiteLicensePlateType:"add_white_lp_type",
		DelBlackLicensePlateTypes:"delete_black_lp_types",
		DelWhiteLicensePlateTypes:"delete_white_lp_types",
		readLicensePlateTypeBlacklist:"read_lp_type_blacklist",
		readLicensePlateTypeWhitelist:"read_lp_type_whitelist",
		deleteBlackLicensePlates:"delete_black_license_plates",
		deleteWhiteLicensePlates:"delete_white_license_plates",
		modifyLicensePlateBlacklist:"modify_license_plate_blacklist",
		modifyLicensePlateWhitelist:"modify_license_plate_whitelist",
		clearLicensePlateBlacklist:"clear_license_plate_blacklist",
		clearLicensePlateWhitelist:"clear_license_plate_whitelist",
		readLicensePlateBlacklist:"read_license_plate_blacklist",
		readLicensePlateWhitelist:"read_license_plate_whitelist",
		downloadPlateList:"download_plate_list",
		uploadPlateList:"upload_plate_list",
		readUploadErrorList:"read_upload_error_list"
	},
	secName:{
		armingSchedule:"arming_schedule",
		downloadLogList:"download_log_list",
		info:"info"
	},
	optName:{
		licensePlate:"license_plate",
		licensePlateNumber:"license_plate_number",
		licensePlateType:"license_plate_type",
		licensePlateTypes:"license_plate_types",
		licensePlates:"license_plates",
		oldLicensePlate:"old_license_plate",
		newLicensePlate:"new_license_plate",
		workMode:"work_mode",
		listType:"list_type",
		blackList:"blacklist",
		whiteList:"whitelist",
		errorList:"errorlist",
		successNum:"success_num",
		failedNum:"failed_num",
		errNo:"errNo",
		id:"id",
		type:"type",
		page:"page",
		total:"total",
		numPerPage:"num_per_page",
		url:"url",
		mon:"monday",
		tue:"tuesday",
		wed:"wednesday",
		thu:"thursday",
		fri:"friday",
		sat:"saturday",
		sun:"sunday"
	}
};

var uciPunchio = {
	fileName:"punchio",
	actionName:{
		capacity:"capacity",
		user:"user",
		dataExport:"data_export"
	},
	optName:{
		action:"action",
		worknumList: "worknum_list",
		index:"index",
		length:"length",
		dataType:"data_type",
		url:"url"
	}
};

var uciWiperCapability = {
	fileName:"wiper_capability",
	secName:{
		capability:"capability"
	},
	optName:{
		modeList:"mode_list"
	},
	optValue:{
		auto:"auto",
		cycle:"cycle",
		single:"single"
	}
};

var uciWiper = {
	fileName:"wiper",
	secName:{
		status:"status",
		workConfig:"work_config"
	},
	actionName:{
		manualBrush:"manual_brush"
	},
	optName:{
		action:"action",
		remainingTime:"remaining_time",
		mode:"mode",
		duration:"duration",
		speed:"speed"
	},
	optValue:{
		start:"start",
		stop:"stop",
		auto:"auto",
		cycle:"cycle",
		single:"single",
		low:"low",
		normal:"normal",
		high:"high"
	}
};

var uciPassingVehicleDetection = {
	fileName:"passingvehicle_detection",
	secName:{
		detection:"detection",
		notifyList:"notify_list",
		soundAlarmInfo:"sound_alarm_info",
		ftpCaptureInfo:"ftp_capture_info",
	},
	optName:{
		enabled:"enabled",
		unlicensedAlarmEnabled:"unlicensed_alarm_enabled",
		alarmEnabled:"AO1_enabled",
		recordEnabled:"record_enabled",
		msgPushEnabled:"msg_push_enabled",
		lightAlarmEnabled:"light_alarm_enabled",
		soundAlarmEnabled:"sound_alarm_enabled",
		captureEnabled:"capture_enabled",
		ftpEnabled:"ftp_enabled",
		soundAlarmType:"sound_alarm_type",
		soundAlarmTimes:"sound_alarm_times",
		type:"type"
	},
	secType:{
		lineInfo:"line_info",
		ftpCaptureType:"ftp_capture_type"
	},
	optValue:{
		enableVal:{
			on:"on",
			off:"off"
		}
	},
	actionName:{
		snapshotRecognize:"snapshot_recognize",
		searchLicensePlate:"search_license_plate",
		addLines:"add_lines",
		detectionLinesRestore:"detection_lines_restore",
		getSnapshotRecognizeResult:"get_snapshot_recognize_result"
	}
};

var ucilocationCapability = {
	fileName: "location_capability",
	secName: {
		LocationCapability: "capability"
	},
	optName: {
		modeList: "location_mode_list"
	},
	optValue: {
		auto: "auto",
		manual: "manual"
	}
};

var uciLocation = {
	fileName: "location",
	secName: {
		autoLocationInfo: "auto_location_info",
		location: "location"
	},
	optName: {
		locationMode: "location_mode",
		longitude: "longitude",
		longitudeType: "longitude_type",
		latitude: "latitude",
		latitudeType: "latitude_type",
		dataValid: "data_valid"
	},
	optValue: {
		auto: "auto",
		manual: "manual",
		E: "E",
		W: "W",
		S: "S",
		N: "N"
	}
};

var uciSensorCapability = {
	fileName: "sensor_capability",
	secName: {
		SensorCapability: "capability",
		compassCapability: "compass",
		gyroscopeCapability: "gyroscope"
	},
	optName: {
		compassSupport: "compass_support",
		gyroscopeSupport: "gyroscope_support",
		modeList: "mode_list"
	},
	optValue: {
		auto: "auto",
		manual: "manual"
	}
};

var uciSensor = {
	fileName: {
		compass: "compass",
		gyroscope: "gyroscope"
	},
	secName: {
		workConfig: "work_config",
		pointToNorth: "point_to_north",
		getCaliStatus: "get_cali_status",
		calibrate: "calibrate"
	},
	optValue: {
		auto: "auto",
		manual: "manual",
		waiting: "waiting",
		success: "success",
		failed: "failed",
		mode: "mode"
	}
};

/*------------- 新的SLP交互接口宏定义 -------------*/
var SEC_NAME       = ".name";
var KEY_NAME = NAME = "name";
var KEY_TABLE = "table";
var KEY_PARA = "para";

var ERR_NONE = ENONE = 0;

/*------------- 新的SLP交互接口宏定义 -------------*/
var SEC_INDEX      = ".index";

var RTN_TYPE_ARRAY = ".array";

var UCI_SET = "config.";
var UCI_SET_LIST = "list.";
var UCI_DEL = "delete.";

var UCI_FNAME      = ".config";
var UCI_SNAME      = ".section_name";
var UCI_STYPE      = ".section_type";
var UCI_STYPE_LIST = ".sectype_list";
var UCI_RTN_DATA_TYPE = ".rtn_data_type";
var UCI_APPLY      = ".cfg_filelist";

var UCI_ADD_SEC = "addsec.";
var UCI_DEL_SEC = "delsec.";
var UCI_RENAME_SEC = "rensec.";
var UCI_ADD_OPT = ".config.";
var UCI_DEL_OPT = ".delete.";
var UCI_ADD_LIST = ".list.";
