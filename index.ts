#!/usr/bin/env node
//* Imports

import initCLI from "./plugins/cli/initCLI";

async function main () {
    await Promise.all([
        //* Main
    ]);

    //* Post Main
    initCLI({ boolean: [] });
}

main();

process.on('uncaughtException', console.log);
process.on('unhandledRejection', console.log);