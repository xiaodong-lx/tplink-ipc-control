# TPLink IPC Control

[![Release](https://img.shields.io/github/v/release/xiaodong-lx/tplink-ipc-control?display_name=tag)](https://github.com/xiaodong-lx/tplink-ipc-control/releases)


A simple custom component to control TPLink IPC.

[![Open HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=xiaodong-lx&repository=tplink-ipc-control&category=integration)

## Usage

1. Add integration `TPLink IPC Control`. 

    [![Add Integration](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start?domain=tplink_ipc_control)

2. Use services with `ipc url`、`username` and `password` in [`automations`](https://www.home-assistant.io/docs/automation/) or [`developer-tools/service`](https://my.home-assistant.io/redirect/developer_services)

- `TPLink IPC Control: Command` ([tplink_ipc_control.command](https://my.home-assistant.io/redirect/developer_call_service/?service=tplink_ipc_control.command))
- `TPLink IPC Control: Set Lens Mask State` ([tplink_ipc_control.set_lens_mask_state](https://my.home-assistant.io/redirect/developer_call_service/?service=tplink_ipc_control.set_lens_mask_state))


## Command Examples

### `Do`/`Set` methods

```json
// Add PTZ preset position 添加预置点
{"method":"do","preset":{"set_preset":{"name":"name","save_ptz":"1"}}}

// PTZ to preset position 转动到预置点
{"method":"do","preset":{"goto_preset": {"id": "1"}}}

// Lens mask 镜头遮蔽
{"method":"set","lens_mask":{"lens_mask_info":{"enabled":"on"}}}

// Manual alarm 手动报警
{"method":"do","msg_alarm":{"manual_msg_alarm":{"action":"start"}}}
{"method":"do","msg_alarm":{"manual_msg_alarm":{"action":"stop"}}}

// Toggle green led 绿色led开关
{"method":"set","led":{"config":{"enabled":"off"}}}
{"method":"set","led":{"config":{"enabled":"on"}}}

// Auto track moving obj 智能追踪 摄像机追随移动物体
{"method":"set","target_track":{"target_track_info":{"enabled":"on"}}}
{"method":"set","target_track":{"target_track_info":{"enabled":"off"}}}

// Alarm if found moving obj 检测到移动物体时报警
{"method":"set","msg_alarm":{"chn1_msg_alarm_info":{"enabled":"on","alarm_type":"0","alarm_mode":["sound"]}}}
{"method":"set","msg_alarm":{"chn1_msg_alarm_info":{"enabled":"on","alarm_type":"0","alarm_mode":["light"]}}}
{"method":"set","msg_alarm":{"chn1_msg_alarm_info":{"enabled":"on","alarm_type":"0","alarm_mode":["sound","light"]}}}
{"method":"set","msg_alarm_plan":{"chn1_msg_alarm_plan":{"enabled":"on","alarm_plan_1":"0000-0000%2c127"}}}

// Motion detection 移动侦测 与 侦测灵敏度
{"method":"set","motion_detection":{"motion_det":{"enabled":"off"}}}
{"method":"set","motion_detection":{"motion_det":{"enabled":"on"}}}
{"method":"set","motion_detection":{"motion_det":{"digital_sensitivity":"20"}}}
{"method":"set","motion_detection":{"motion_det":{"digital_sensitivity":"50"}}}
{"method":"set","motion_detection":{"motion_det":{"digital_sensitivity":"80"}}}

// Enable record and plan 是否录制与录制计划
{"method":"set","record_plan":{"chn1_channel":{"enabled":"off","monday":"%5b%220000-2400%3a2%22%5d","tuesday":"%5b%220000-2400%3a2%22%5d","wednesday":"%5b%220000-2400%3a2%22%5d","thursday":"%5b%220000-2400%3a2%22%5d","friday":"%5b%220000-2400%3a2%22%5d","saturday":"%5b%220000-2400%3a2%22%5d","sunday":"%5b%220000-2400%3a2%22%5d"}}}
{"method":"set","record_plan":{"chn1_channel":{"enabled":"on","monday":"%5b%220000-2400%3a2%22%5d","tuesday":"%5b%220000-2400%3a2%22%5d","wednesday":"%5b%220000-2400%3a2%22%5d","thursday":"%5b%220000-2400%3a2%22%5d","friday":"%5b%220000-2400%3a2%22%5d","saturday":"%5b%220000-2400%3a2%22%5d","sunday":"%5b%220000-2400%3a2%22%5d"}}}

// Reboot and timing reboot 重启与定时重启
{"method":"do","system":{"reboot":"null"}}
{"method":"set","timing_reboot":{"reboot":{"enabled":"off","day":"7","time":"03%3a00%3a00"}}}
{"method":"set","timing_reboot":{"reboot":{"enabled":"on","day":"7","time":"03%3a00%3a00"}}}

// Greetings 个性语音提示
{"method":"set","greeter":{"chn1_greeter_ctrl":{"enabled":"on"}}}
{"method":"set","greeter":{"chn1_greeter_ctrl":{"enabled":"off"}}}

// Greeting volume 音量
{"method":"set","greeter":{"chn1_greeter_audio":{"enter_volume":"77","leave_volume":"77"}}}

// Play greetings 播放语音
// id
// 0 无
// 12288 你好
// 4096-4104 依次为 你好欢迎光临 ..... 
{"method":"do","greeter":{"test_audio":{"force":"1"}}} 
{"method":"do","greeter":{"test_audio":{"id":"4096","force":"1"}}} 

// Set enter or leave greetings 设置进入或离开语音
{"method":"set","greeter":{"chn1_greeter_audio":{"enter_audio_id":"0"}}}
{"method":"set","greeter":{"chn1_greeter_audio":{"leave_audio_id":"4104"}}}
```
ref: [likaci/mercury-ipc-control/README.md](https://raw.githubusercontent.com/likaci/mercury-ipc-control/bd72a9e195a88d490a6188d6888aeb9c729083b2/README.md)

----

### `Get` methods

````json
// 视频
{"method":"get","video":{"name":["main","minor"]}}

// 网络设置
{"method":"get","network":{"name":["wan_status"]}}

// 系统设置
{"method":"get","system":{"name":["clock_status","sys"]}}

// 设备信息
{"method":"get","device_info":{"name":["basic_info","info"]}}

// TP-LINK 服务
{"method":"get","cloud_config":{"name":["new_firmware","upgrade_info","bind"]}}

// 网络协议
{"method":"get","protocol":{"name":["wan","static","dhcp"]}}

// 存储信息
{"method":"get","harddisk_manage":{"name":["harddisk","video","picture"],"table":["hd_info"]}}
````

----

### References

-  [`str.json`](reference/str.js)
-  [`uci.json`](reference/uci.js)

## Thanks

`likaci` : [mercury-ipc-control](https://github.com/likaci/mercury-ipc-control)
