from . mipcc_451 import *

DOMAIN = "tplink_ipc_control"

ATTR_IPC_URL = "ipc_url"
DEFAULT_IPC_URL = ""

ATTR_USERNAME = "username"
DEFAULT_USERNAME = "admin"

ATTR_PASSWORD = "password"
DEFAULT_PASSWORD = ""

ATTR_SET_LENS_MASK_STATE = "lens_mask_state"
DEFAULT_SET_LENS_MASK_STATE = ""

def setup(hass, config):
    def service_set_lens_mask_state(call):

        lens_mask_state = call.data.get(ATTR_SET_LENS_MASK_STATE, DEFAULT_SET_LENS_MASK_STATE)
        if lens_mask_state == "on" or lens_mask_state == "off":
            ipc_url = call.data.get(ATTR_IPC_URL, DEFAULT_IPC_URL)
            username = call.data.get(ATTR_USERNAME, DEFAULT_USERNAME)
            password = call.data.get(ATTR_PASSWORD, DEFAULT_PASSWORD)
            data = '{"method":"set","lens_mask":{"lens_mask_info":{"enabled":"' + lens_mask_state + '"}}}'
            post_data(ipc_url, data, get_stok(ipc_url, username, password))
        
    hass.services.register(DOMAIN, "set_lens_mask_state", service_set_lens_mask_state)
    
    return True
  