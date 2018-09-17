/**
 * Copyright(c) Microsoft Corporation.All rights reserved.
 * Licensed under the MIT License.
 */
/* tslint:disable */
import * as chalk from 'chalk';
import * as program from 'commander';

import { showMessage } from './utils';
require('log-prefix')(() => showMessage('%s'));
program.option('--verbose', 'Add [msbot] prefix to all messages');

program.Command.prototype.unknownOption = (flag: string): void => {
    console.error(chalk.default.redBright(`Unknown arguments: ${flag}`));
    showErrorHelp();
};

program
    .name('msbot clone services')
    .command('services', 'clone services from a bot recipe folder to Azure')

const args: program.Command = program.parse(process.argv);

// args should be undefined is subcommand is executed
if (args) {
    const a: string[] = process.argv.slice(2);
    console.error(chalk.default.redBright(`Unknown arguments: ${a.join(' ')}`));
    showErrorHelp();
}

function showErrorHelp(): void {
    program.outputHelp((str: string) => {
        console.error(str);

        return '';
    });
    process.exit(1);
}
