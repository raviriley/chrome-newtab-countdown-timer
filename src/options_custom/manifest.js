// SAMPLE
this.manifest = {
	"name": "Countdown Settings",
    "icon": "icon.png",
    "settings": [
        {
            "tab": i18n.get("information"),
            "group": "test1",
            "name": "myCheckbox",
            "type": "checkbox",
            "label": "checkbox"
        },
        {
            "tab": i18n.get("information"),
            "group": "test2",
            "name": "myButton",
            "type": "button",
            "label": "test button",
            "text": "test"
        },
		{
            "tab": i18n.get("appearance"),
            "name": "myPopupButton",
            "type": "popupButton",
            "label": "Theme:",
            "options": {
                "values": [
                    {
                        "value": i18n.get("light"),
                    },
                    {
                        "value": i18n.get("dark"),
                    },
					{
                        "value": i18n.get("custom"),
                    },
                ],
            },
        },
		{
            "tab": i18n.get("appearance"),
            "name": "myPopupButton",
            "type": "description",
            "text": "custom colors",
        },
		{
            "tab": "test",
            "name": "myPopupButton",
            "type": "popupButton",
            "label": "Language:",
            "options": {
                "values": [
                    {
                        "value": "English",
                    },
					{
                        "value": "Chinese",
                    },
                    {
                        "value": "Spanish",
                    },
					{
                        "value": "French",
                    },
					{
                        "value": "German",
                    },
                ],
            },
        },
    ],
};
