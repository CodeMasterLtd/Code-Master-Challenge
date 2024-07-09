// main.js
import { Config } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    const VersionShow = document.getElementById("version");
    if (VersionShow) {
        VersionShow.innerHTML = "Version: " + Config.Version;
    }
});