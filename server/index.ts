import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api';
import Weather from "./weather.js";

const PLUGIN_NAME = 'x-Weather';
Athena.systems.plugins.registerPlugin(PLUGIN_NAME, async () => {
    const weatherSync = new Weather("4a4aa13d9aaff577e05df97d26e64b26", "San Francisco", "US");
})




