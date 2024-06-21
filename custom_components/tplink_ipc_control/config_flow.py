from homeassistant.config_entries import ConfigFlow
from .const import *

class ConfigFlow(ConfigFlow, domain=DOMAIN):
    VERSION = 1

    async def async_step_user(self, user_input=None):
        return self.async_create_entry(title="TPLink IPC Control", data={})
