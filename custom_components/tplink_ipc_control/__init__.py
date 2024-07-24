from . mipcc_451 import *
from .const import *
from homeassistant.core import ServiceResponse, SupportsResponse

ATTR_IPC_URL = "ipc_url"
DEFAULT_IPC_URL = ""

ATTR_USERNAME = "username"
DEFAULT_USERNAME = "admin"

ATTR_PASSWORD = "password"
DEFAULT_PASSWORD = ""

ATTR_SET_LENS_MASK_STATE = "lens_mask_state"
DEFAULT_SET_LENS_MASK_STATE = ""

ATTR_COMMAND = "command"
DEFAULT_COMMAND = '{"method":"set","led":{"config":{"enabled":"on"}}}'

async def async_setup_entry(hass, config):

    def call_command(call, command):
        ipc_url = call.data.get(ATTR_IPC_URL, DEFAULT_IPC_URL)
        username = call.data.get(ATTR_USERNAME, DEFAULT_USERNAME)
        password = call.data.get(ATTR_PASSWORD, DEFAULT_PASSWORD)
        return post_data(ipc_url, command, get_stok(ipc_url, username, password))

    async def service_command(call) -> ServiceResponse:
        command = call.data.get(ATTR_COMMAND, DEFAULT_COMMAND)

        if command != "":
            return await hass.async_add_executor_job(call_command, call, command)

    hass.services.async_register(DOMAIN, "command", service_command, supports_response=SupportsResponse.OPTIONAL)
        
    async def service_set_lens_mask_state(call) -> ServiceResponse:
        lens_mask_state = call.data.get(ATTR_SET_LENS_MASK_STATE, DEFAULT_SET_LENS_MASK_STATE)

        if lens_mask_state == "on" or lens_mask_state == "off":
            command = '{"method":"set","lens_mask":{"lens_mask_info":{"enabled":"' + lens_mask_state + '"}}}'
            return await hass.async_add_executor_job(call_command, call, command)
        
    hass.services.async_register(DOMAIN, "set_lens_mask_state", service_set_lens_mask_state, supports_response=SupportsResponse.OPTIONAL)
    
    return True
