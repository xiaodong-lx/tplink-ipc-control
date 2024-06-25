from homeassistant.config_entries import ConfigFlow
from .const import *

class ConfigFlow(ConfigFlow, domain=DOMAIN):
    VERSION = 1

    async def async_step_user(self, user_input=None):
        if self._async_current_entries():
            return self.async_abort(reason="single_instance_allowed")
        if self.hass.data.get(DOMAIN):
            return self.async_abort(reason="single_instance_allowed")
        
        return self.async_create_entry(title=DOMAIN_NAME, data={})
